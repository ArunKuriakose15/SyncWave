const nodemailer = require("nodemailer");

// Configure transporter (Use your SMTP settings)
const transporter = nodemailer.createTransport({
    service: "Gmail", // or another email provider
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // App password
    },
});

/**
 * Function to send an email
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} message - Email message body
 */
const sendEmail = async (to, subject, message) => {
    try {
        const htmlTemplate = `
      <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        /* Use a web-safe font stack */
        body { 
            margin: 0; 
            padding: 0; 
            background-color: #f4f4f4; 
            font-family: Arial, Helvetica, sans-serif; 
        }

        .email-container { 
            max-width: 600px; 
            background: #ffffff; 
            padding: 20px; 
            border-radius: 12px; 
            margin: auto; 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        .header { 
            padding: 15px; 
            font-size: 25px; 
            font-weight: bold; 
            color: #244855; 
            font-family: Arial, Helvetica, sans-serif;
        }

        .content { 
            padding: 20px; 
            font-size: 18px; 
            color: #003135; 
            font-family: Arial, Helvetica, sans-serif;
        }

        .footer { 
            padding: 15px; 
            font-size: 14px; 
            color: #003135; 
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>
<body>
    <table width="100%" bgcolor="#f4f4f4" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <table width="600" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" 
                    style="border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); margin: 20px auto; padding: 20px;">
                    
                    <!-- Header -->
                    <tr>
                        <td align="center" class="header">
                            ${subject}
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td align="center" class="content">
                            <p style="margin: 0;">${message}</p>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td align="center" class="footer">
                            &copy; 2025 SyncWave. All rights reserved.
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

        await transporter.sendMail({
            from: `"Team SyncWave" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: htmlTemplate,
        });

        console.log(`Email sented`);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmail;
