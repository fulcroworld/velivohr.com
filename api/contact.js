const nodemailer = require('nodemailer');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (!body || typeof body === 'string') {
    try { body = JSON.parse(body || '{}'); } catch (e) { body = {}; }
  }

  const name = (body.name || '').toString().trim();
  const email = (body.email || '').toString().trim();
  const company = (body.company || '').toString().trim();
  const phone = (body.phone || '').toString().trim();
  const message = (body.message || '').toString().trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Name, email and message are required.' });
  }
  if (!emailPattern.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    CONTACT_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.error('Missing SMTP environment variables');
    return res.status(500).json({ ok: false, error: 'Email is not configured on the server yet.' });
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

  const toAddress = CONTACT_TO || 'debolina@velivohr.com';

  const html = `
    <h2>New enquiry from velivohr.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company || '—')}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || '—')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
  `;

  try {
    await transporter.sendMail({
      from: SMTP_FROM,
      to: toAddress,
      replyTo: email,
      subject: `New website enquiry — ${name}${company ? ' (' + company + ')' : ''}`,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return res.status(502).json({ ok: false, error: 'Could not send your message right now. Please try again shortly.' });
  }
};
