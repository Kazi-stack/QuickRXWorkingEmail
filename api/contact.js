import nodemailer from 'nodemailer';

const ALLOWED_ORIGINS = [
  'https://www.quickrx134.com',
  'https://quickrx134.com',
  'http://localhost:5173'
];

function setCORS(req, res) {
  const origin = req.headers.origin || '';
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.setHeader('Access-Control-Allow-Origin', allow);
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  // If we ever need cookies: res.setHeader('Access-Control-Allow-Credentials', 'true');
}

export default async function handler(req, res) {
  setCORS(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' });

  const { name, email, phone, message } = req.body || {};

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      ok: false, 
      error: 'Missing required fields: name, email, and message are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email format' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.office365.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'info@quickrx134.com',
        pass: process.env.SMTP_PASS,
      },
      tls: { ciphers: 'TLSv1.2' },
    });

    // Create correlation ID for tracking
    const correlationId = `quickrx-contact-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">QuickRX Pharmacy</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Contact Form Submission</p>
        </div>
        
        <div style="padding: 20px; background: #f8fafc;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">Contact Form Submission</h2>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background: #f1f5f9; padding: 15px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 5px 0;"><strong>Submission Details:</strong></p>
          <p style="margin: 0 0 5px 0;">Form Type: Contact Form</p>
          <p style="margin: 0 0 5px 0;">Page URL: ${req.headers.referer || 'Not provided'}</p>
          <p style="margin: 0 0 5px 0;">Timestamp: ${new Date().toLocaleString()}</p>
          <p style="margin: 0 0 5px 0;">Correlation ID: ${correlationId}</p>
        </div>
      </div>
    `;

    const text = `
QuickRX Pharmacy - Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}

Message:
${message}

---
Submission Details:
Form Type: Contact Form
Page URL: ${req.headers.referer || 'Not provided'}
Timestamp: ${new Date().toLocaleString()}
Correlation ID: ${correlationId}
    `.trim();

    const info = await transporter.sendMail({
      from: `"QuickRX Pharmacy" <${process.env.SMTP_USER || 'info@quickrx134.com'}>`,
      to: process.env.TO_EMAIL || 'info@quickrx134.com',
      replyTo: `${name} <${email}>`,
      subject: `[QuickRX CONTACT] Contact Form from ${name}`,
      text: text,
      html: html,
      headers: {
        'X-Correlation-ID': correlationId,
        'X-Form-Type': 'contact',
        'X-Submission-Timestamp': new Date().toISOString()
      }
    });

    console.log(`✅ Contact email sent successfully`, {
      correlationId,
      messageId: info.messageId,
      contactName: name,
      contactEmail: email
    });

    setCORS(req, res);
    return res.status(200).json({ 
      ok: true, 
      success: true,
      message: 'Contact form submitted successfully',
      correlationId: correlationId,
      messageId: info.messageId
    });

  } catch (error) {
    console.error('❌ Contact email sending failed:', error);
    setCORS(req, res);
    return res.status(500).json({ 
      ok: false, 
      error: 'Failed to submit contact form. Please try again later.' 
    });
  }
}
