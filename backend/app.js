require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./controllers/userRouter")

const app = express()
app.use(express.json())
app.use(cors())
const port = 8085;

app.use("/api/users", userRoutes)
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(port, () => {
            console.log("server running...")
        })
    })
    .catch(err => console.error("MongoDB Connection Error:", err));

