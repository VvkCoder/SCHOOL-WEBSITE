import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// Middleware
app.use(cors({
  origin: "*"
}))
app.use(express.json())

// Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP ERROR:", error)
  } else {
    console.log("SMTP server is ready ✅")
  }
})

// Test route
app.get('/', (req, res) => {
  res.send('Server is running! 🚀')
})

// Route 1 - Admission Enquiry
app.post('/send-admission', async (req, res) => {

  console.log("Request received:", req.body)
  const { parentName, childName, mobile, grade, board, city } = req.body

  const mailOptions = {
    from: `"Sunrise School" <${process.env.EMAIL_USER}>`,
    to: "vivek2workplace@gmail.com",
    // to: process.env.EMAIL_USER,
    subject: `New Admission Enquiry from ${parentName}`,
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2 style="color: #1a237e;">New Admission Enquiry</h2>
        <hr/>
        <p><strong>Parent Name:</strong> ${parentName}</p>
        <p><strong>Child Name:</strong> ${childName}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Board:</strong> ${board}</p>
        <p><strong>City:</strong> ${city}</p>
        <hr/>
        <p style="color: #888; font-size: 12px;">
          Sent from Sunrise School Website
        </p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: 'Email sent!' })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    res.status(500).json({ success: false, message: 'Failed!' })
  }
})

// Route 2 - Contact Form
app.post('/send-email', async (req, res) => {

  console.log("Request received:", req.body)

  const { name, email, message } = req.body

  const mailOptions = {
    from: `"Sunrise School" <${process.env.EMAIL_USER}>`,
    to: "vivek2workplace@gmail.com",
    subject: `New Contact Message from ${name}`,
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2 style="color: #1a237e;">New Contact Message</h2>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr/>
        <p style="color: #888; font-size: 12px;">
          Sent from Sunrise School Website
        </p>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: 'Email sent!' })
  } catch (error) {
    console.error("EMAIL ERROR:", error)
    res.status(500).json({ success: false, message: 'Failed!' })
  }
})

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
