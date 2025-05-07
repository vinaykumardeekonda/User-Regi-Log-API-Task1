const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

exports.sendOtpEmail = (to, otp) => {
    return transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: "Your otp for login",
        text: `Your OTP is ${otp}. It expires in 10 minutes.`
    });
};