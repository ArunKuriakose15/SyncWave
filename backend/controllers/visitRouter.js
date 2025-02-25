const express = require("express")
const router = express.Router()
const visitModel = require("../models/visitModel")
const moment = require("moment");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

router.post("/visitor", async (req, res, next) => {
  try {
    const today = moment().format("YYYY-MM-DD");
    const visit = await visitModel.findOneAndUpdate(
      { date: today },
      {
        $inc: { daily_count: 1, total_count: 1 }
      },
      { upsert: true, new: true }
    );

    console.log(`Visit logged for ${today}:`);
  } catch (error) {
    console.error("Error logging visit:", error);
  }
});

router.post("/today-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const today = moment().format("YYYY-MM-DD");
    console.log(today)

    const todayData = await visitModel.findOne({ date: today });

    res.json({ today_visits: todayData ? todayData.daily_count : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching today's visits" });
  }
});

router.post("/weekly-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const startOfWeek = moment().subtract(6, "days").format("YYYY-MM-DD");
    const weeklyData = await visitModel.aggregate([
      { $match: { date: { $gte: startOfWeek } } },
      { $group: { _id: null, total: { $sum: "$daily_count" } } },
    ]);

    res.json({ weekly_visits: weeklyData.length > 0 ? weeklyData[0].total : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching weekly visits" });
  }
});

router.post("/monthly-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const startOfMonth = moment().subtract(29, "days").format("YYYY-MM-DD");
    const monthlyData = await visitModel.aggregate([
      { $match: { date: { $gte: startOfMonth } } },
      { $group: { _id: null, total: { $sum: "$daily_count" } } },
    ]);

    res.json({ monthly_visits: monthlyData.length > 0 ? monthlyData[0].total : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching monthly visits" });
  }
});

router.post("/yearly-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const startOfYear = moment().startOf("year").format("YYYY-MM-DD"); // Jan 1st of this year
    const endOfYear = moment().endOf("year").format("YYYY-MM-DD"); // Dec 31st of this year (optional)

    const yearlyData = await visitModel.aggregate([
      {
        $match: {
          date: { $gte: startOfYear, $lte: endOfYear }, // Ensure filtering for this year
        },
      },
      {
        $group: {
          _id: null,
          total: { $sum: "$daily_count" }, // Sum up daily counts
        },
      },
    ]);

    res.json({ yearly_visits: yearlyData.length > 0 ? yearlyData[0].total : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching yearly visits" });
  }
});

router.post("/total-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const totalVisits = await visitModel.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$daily_count" },
        },
      },
    ]);
    res.json({ total_visits: totalVisits.length > 0 ? totalVisits[0].total : 0 });
  } catch (error) {
    res.status(500).json({ message: "Error fetching total visits", error });
  }
});

router.post("/total-monthly-visits", verifyToken, verifyAdmin, async (req, res) => {
  try {
    const year = req.body.year || moment().year(); // Get requested year or default to current year
    const startOfYear = moment(`${year}-01-01`).format("YYYY-MM-DD");
    const endOfYear = moment(`${year}-12-31`).format("YYYY-MM-DD");

    const monthlyData = await visitModel.aggregate([
      {
        $match: {
          date: { $gte: startOfYear, $lte: endOfYear }, // Filter records within the year
        },
      },
      {
        $group: {
          _id: { $substr: ["$date", 5, 2] }, // Extract month part (MM)
          total: { $sum: "$daily_count" }, // Sum daily visits for each month
        },
      },
      { $sort: { _id: 1 } }, // Sort by month
    ]);

    // Define month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Convert result into a structured format with month names
    const formattedData = monthNames.map((month, index) => {
      const monthKey = String(index + 1).padStart(2, "0"); // Convert index to "MM" format
      const monthData = monthlyData.find((item) => item._id === monthKey);
      return { month, total_visits: monthData ? monthData.total : 0 };
    });

    res.json({ monthly_visits: formattedData });
  } catch (error) {
    console.error("Error fetching monthly visits:", error);
    res.status(500).json({ message: "Error fetching monthly visits", error });
  }
});


module.exports = router