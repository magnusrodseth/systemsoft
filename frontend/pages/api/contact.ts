import { NextApiRequest, NextApiResponse } from "next";
import { validateContactForm } from "../../utils/validateContactForm";
const sgMail = require("@sendgrid/mail");
import dotenv from "dotenv";
dotenv.config();

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {

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

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const htmlBody = `
    <h1>Contact Form Submission from systemsoft.no</h1>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> <br> ${message}</p>
  `;

  const msg = {
    to: "er@systemsoft.no", // Change to your recipient
    from: `noreply@systemsoft.no`, // Change to your verified sender
    subject: "New message - SystemSoft Contact Form",
    text: message,
    html: htmlBody,
  };

  sgMail
    .send(msg)
    .then((response) => {
      if (String(response[0].statusCode).indexOf("2") == 0) {
        res.status(200).json({
          success: true,
          description:
            "Your enquiry was sent successfully! We will get back to you as soon as possible.",
          messageId: email,
        });
      } else {
        res.status(400).json({
          success: false,
          description: "An error occurred. Please try again later!",
          messageId: "",
        });
      }

    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        description: "An error occurred. Please try again later!",
        messageId: "",
      });

    });
};

export default sendEmail;
