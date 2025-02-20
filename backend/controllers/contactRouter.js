const express = require("express")
const router = express.Router()
const contactModel = require("../models/contactModel")
const verifyToken = require("../middleware/verifyToken")
const verifyAdmin = require("../middleware/verifyAdmin")

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getFullYear()}`;
};

router.post("/contact", async (req, res) => {
    try {
        const data = req.body
        let contact = new contactModel(data)
        let result = await contact.save()
        res.status(200).json({ message: "Message sented" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/view_contacts",verifyToken,verifyAdmin, async (req, res) => {
    try {
        let result = await contactModel.find().sort({ _id: -1 });

        result = result.map(contact => ({
            ...contact._doc,
            deadline: formatDate(contact.deadline)
        }));

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})



module.exports = router