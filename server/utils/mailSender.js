const nodemailer = require("nodemailer");
require('dotenv').config()


const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                port: 587,
                auth:{
                    user: process.env.MAIL_URL,
                    pass: process.env.EMAIL_PASSWORD,
                }
            })


            let info = await transporter.sendMail({
                from: `"Study Notion" <${process.env.MAIL_URL}>`,
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
        return error;
    }
}


module.exports = mailSender;