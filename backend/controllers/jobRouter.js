const express = require("express")
const router = express.Router()
const jobModel = require("../models/jobModel")
const multer = require("multer");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/apply_job", upload.single("cv"), async (req, res) => {
    try {
        const { name, email, phone, job_profile } = req.body;
         const cv = req.file ? { data: req.file.buffer, contentType: req.file.mimetype } : null;

        const newJob = new jobModel({ name, email, phone, job_profile, cv });
        await newJob.save();

        res.status(201).json({ message: "Job application submitted successfully" });
     } catch (error) {
        res.status(500).json({ message: "Error submitting job application", error: error.message });
    }
});

router.post("/view_applications", async (req, res) => {
    try {
        const jobs = await jobModel.find({});
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Error fetching job applications", error: error.message });
    }
});

module.exports = router