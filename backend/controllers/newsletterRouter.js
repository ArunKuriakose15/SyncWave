const express = require("express")
const router = express.Router()
const newsletterModel = require("../models/newsletterModel")
const verifyToken = require("../middleware/verifyToken")
const verifyAdmin = require("../middleware/verifyAdmin")
const sendEmail = require("./mailer");
const  sendNewsletter = require("./newsletterMailer");

const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getDate().toString().padStart(2, "0")}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${d.getFullYear()}`;
};

router.post("/subscribe", async (req, res) => {
    try {
        const { email } = req.body
        const existingSubscriber = await newsletterModel.findOne({ email: email });

        if (existingSubscriber) {
            return res.json({ status: "Already subscribed!" });
        }
        let subscribe = new newsletterModel({ email })
        let result = await subscribe.save()
        await sendEmail(
            email,
            "Subscription Successful!",
            "Thank you for subscribing to our newsletter.",
        );
        res.status(200).json({ message: "Subscribed to Newsletter" });
    } catch (error) {
        console.log(error)
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
        await sendEmail(
            newsletter.email,
            "You’ve Been Unsubscribed",
            `You have successfully unsubscribed from our newsletter. We're sorry to see you go! 
            If you ever change your mind, you can re-subscribe anytime to stay updated with our latest news and updates.`
        );
        res.status(200).json({ message: "Subscriber deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error })
    }
})

router.post("/send-newsletter", verifyToken, verifyAdmin, async (req, res) => {
    try {
        const { subject, content } = req.body;
        if (!subject || !content)
            return res.status(400).json({ message: "Subject and content are required" });

        const subscribers = await newsletterModel.find();
        if (subscribers.length === 0)
            return res.status(400).json({ message: "No subscribers found" });
      
        const recipientEmails = subscribers.map((sub) => sub.email);
        const { successfulEmails, failedEmails } = await sendNewsletter(subject, content, recipientEmails);

        res.status(200).json({
            message: "Newsletter sent successfully",
            successfulEmails,
            failedEmails,
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


module.exports = router