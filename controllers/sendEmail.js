const nodemailer = require("nodemailer");

const sendEmails = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "jerrod.jenkins@ethereal.email",
      pass: "M7epWUsY2emEbMR1Xr",
    },
  });

  const info = await transporter.sendMail({
    from: "Yassin Yahyawi <deidarayassin45@gmail.com>",
    to: "yassinyahyawi26@gmail.com",
    subject: "First email",
    html: "<b>Hello Ethereal</b>",
  });

  res.json(info);
};

module.exports = sendEmails;
