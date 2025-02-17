require("dotenv").config();
const express = require("express")
const blogModel = require("../models/blogModel");
const verifyToken = require("../middleware/verifyToken");
const verifyAdmin = require("../middleware/verifyAdmin");
const router = express.Router()

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getFullYear()}`;
};

router.post("/add_blog", verifyToken, verifyAdmin, async (req, res) => {
    try {
        const data = req.body
        let blog = new blogModel(data)
        let result = await blog.save()
        res.status(200).json({ message: "Blog added" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
})

router.post("/view_blogs", async (req, res) => {
    try {
        let result = await blogModel.find().sort({ date: -1 });

        result = result.map(blog => ({
            ...blog._doc,
            date: formatDate(blog.date)
        }));

        res.status(200).json({ result });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/delete_blog/:id",verifyToken,verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await blogModel.findByIdAndDelete(id);

        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog deleted successfully", deletedBlog });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/update_blog/:id",verifyToken,verifyAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, author } = req.body;
console.log(title)
        const updatedBlog = await blogModel.findByIdAndUpdate(
            id,
            { title, description, author }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})


module.exports = router