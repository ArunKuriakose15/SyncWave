const nodemailer = require("nodemailer");
require("dotenv").config();

const sendNewsletter = async (subject, content, recipients) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333; text-align: center;">${subject}</h2>
        <p style="color: #555; font-size: 16px;">${content}</p>
        <hr>
        <footer style="text-align: center; font-size: 12px; color: #777;">
          &copy; ${new Date().getFullYear()} SyncWave. All rights reserved.
        </footer>
      </div>
    `;

        // Send emails individually and handle errors
        const results = await Promise.allSettled(
            recipients.map((email) =>
                transporter.sendMail({
                    from: process.env.EMAIL_USER,
                    to: email,
                    subject,
                    html: htmlContent,
                })
            )
        );

        const successfulEmails = results.filter((r) => r.status === "fulfilled").length;
        const failedEmails = results.filter((r) => r.status === "rejected").map((r, index) => ({ email: recipients[index], reason: r.reason.message }));

        return { successfulEmails, failedEmails };
    } catch (error) {
        throw new Error("Failed to send newsletter: " + error.message);
    }
};

module.exports = sendNewsletter;
