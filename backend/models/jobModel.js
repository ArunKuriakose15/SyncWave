const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true
    },
    job_profile: {
        type: String,
        required: true
    },
    cv: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model("jobs", jobSchema);
