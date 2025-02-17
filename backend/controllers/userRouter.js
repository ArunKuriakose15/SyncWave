require("dotenv").config();
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");
const verifyUser = require("../middleware/verifyUser");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router()



async function hashPasswordGenerator(password) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error');
    }
}

router.post("/signup", async (req, res) => {
    try {
        if (!req.body || !req.body.email || !req.body.password) {
            return res.status(400).json({ message: "Missing email or password" });
        }
        const data = req.body
        const userCheck = await userModel.findOne({ email: data.email });

        if (userCheck) {
            return res.json({ status: "email exists" });
        }

        let password = data.password
        const hashedPassword = await hashPasswordGenerator(password)
        data.password = hashedPassword
        let user = new userModel(data)
        let result = await user.save()
        res.status(200).json({ message: "User registered successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
});

router.post("/profile", verifyToken, async (req, res) => {
    try {
        const user = await userModel.findById(req.user.userId).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });
    } catch (error) {
        console.error("Profile Error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});











module.exports = router