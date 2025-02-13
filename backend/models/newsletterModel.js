const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    subscription_date: {
        type: Date,
        default: Date.now,
    }
})
module.exports = mongoose.model("newsletter", newsSchema)