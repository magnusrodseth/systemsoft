import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import { validateContactForm } from "../../utils/validateContactForm";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  /* TODO: Change to a real account during production */
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  const { fullName, email, phone, message } = req.body;

  const isValidRequest = validateContactForm({
    fullName,
    email,
    phone,
    message,
  });

  if (!isValidRequest.success) {
    res.status(400).json({
      success: false,
      description: isValidRequest.description,
      messageId: "",
    });
    return;
  }

  const htmlBody = `
                  <h1>Contact Form Submission from systemsoft.no</h1>
                  <p><strong>Name:</strong> ${fullName}</p> 
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Phone:</strong> ${phone}</p>
                  <p><strong>Message:</strong> <br> ${message}</p>
                `;

  let info = await transporter.sendMail(
    {
      from: `"${fullName}" <${email}>`,
      to: "noreply@systemsoft.no",
      subject: "New message - SystemSoft Contact Form",
      text: message,
      html: htmlBody,
    },
    () => {
      console.log("📨 Sent mail!");
      console.log(nodemailer.getTestMessageUrl(info));
    }
  );

  if (info.response.includes("250")) {
    res.status(200).json({
      success: true,
      description: "Email sent",
      messageId: info.messageId,
    });
  } else {
    res.status(400).json({
      success: false,
      description: "An error occurred",
      messageId: "",
    });
  }

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};

export default sendEmail;
