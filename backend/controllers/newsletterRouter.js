const express = require("express")
const router = express.Router()
const newsletterModel = require("../models/newsletterModel")
const verifyToken = require("../middleware/verifyToken")
const verifyAdmin = require("../middleware/verifyAdmin")

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getFullYear()}`;
};

router.post("/subscribe", async (req, res) => {
    try {
        const email = req.body
        let subscribe = new newsletterModel(email)
        let result = await subscribe.save()
        res.status(200).json({ message: "Subscribed to Newsletter" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/view_subscribers", verifyToken, verifyAdmin, async (req, res) => {
    try {
        let result = await newsletterModel.find().sort({ subscription_date: -1 });
        result = result.map(news => ({
            ...news._doc,
            subscription_date: formatDate(news.subscription_date)
        }));
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/delete_subscriber/:id", verifyToken, verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const newsletter = await newsletterModel.findByIdAndDelete(id);

        if (!newsletter) {
            return res.status(404).json({ message: "Subscriber not found" });
        }

        res.status(200).json({ message: "Subscriber deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

module.exports = router