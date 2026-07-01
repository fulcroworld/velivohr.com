import nodemailer from "nodemailer";
import escapeHtml from "./helpers.js";

/**
 * submits the contact form
 * @param {formData} [formData] - form data submitted by user
 */
const submitContactForm = async (formData) => {
  // if (!url) {
  //   return {
  //     code: 400,
  //     details: {
  //       error: "Missing URL parameter",
  //     },
  //   };
  // }

  // const { name, email, company, phone, message } = formData;

  const name = (formData.name || "").toString().trim();
  const email = (formData.email || "").toString().trim();
  const company = (formData.company || "").toString().trim();
  const phone = (formData.phone || "").toString().trim();
  const message = (formData.message || "").toString().trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    return {
      code: 400,
      details: {
        message: "Name, email and message are required.",
      },
    };
  }

  if (!emailPattern.test(email)) {
    return {
      code: 400,
      details: {
        message: "Please enter a valid email address.",
      },
    };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } =
    process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.error("Missing SMTP environment variables");

    return {
      code: 500,
      details: {
        message: "Email is not configured on the server yet.",
      },
    };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: false, // STARTTLS on port 587
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const toAddress = CONTACT_TO || "debolina@velivohr.com";

  const html = `
    <h2>New enquiry from velivohr.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: toAddress,
      replyTo: email,
      subject: `New website enquiry — ${name}${company ? " (" + company + ")" : ""}`,
      html,
    });

    return {
      code: 200,
      details: {
        message: "Email sent succeessfully!",
      },
    };
  } catch (error) {
    return {
      code: 500,
      details: { error },
    };
  }
};

export default submitContactForm;
