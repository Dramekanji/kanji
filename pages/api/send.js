// pages/api/send.js
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const content = {
      to: "dramekanjii@gmail.com",
      from: "dramekanjii@gmail.com", // Use a verified sender email in your SendGrid account
      replyTo: email,
      subject: `New Message From ${name}: ${subject}`,
      text: message,
      html: `<p>${message}</p>`,
    };

    try {
      await sgMail.send(content);
      res
        .status(200)
        .json({ status: "Ok", message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ status: "Error", message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
