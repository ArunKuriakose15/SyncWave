require("dotenv").config();
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/userModel");
const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET;


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
        const data = req.body
        const userCheck = await userModel.findOne({ email: data.email });
        
        if (userCheck) {
            return res.json({ status: "email exists" });
        }
        
        let password = data.password
        const hashedPassword = await hashPasswordGenerator(password)
        data.password = hashedPassword
        let user = new userModel(data)
        let result =await user.save()
        res.json({
            status: "success",message: "User registered successfully"
        })
    }
    catch (error) {
        res.json({ status: "error" })
    }
}
)
module.exports = router