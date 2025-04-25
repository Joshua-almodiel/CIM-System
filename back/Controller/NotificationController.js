import nodemailer from "nodemailer";

const sendEmailNotification = async (req, res) => {
    const { email, subject, date, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            date: date,
            html: `
                <h2>${subject}</h2>
                <p><strong>Schedule Date:</strong> ${date}</p>
                <p>${message}</p>
            `,
        };
        

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Failed to send email" });
    }
};

export { sendEmailNotification };