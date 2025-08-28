// api/refill.js
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

  const { firstName, lastName, dateOfBirth, phone, email,
          rxNumber, pickupMethod, pickupDate, additionalNotes } = req.body || {};

  if (!firstName || !lastName || !dateOfBirth || !phone || !rxNumber) {
    return res.status(400).json({ ok: false, error: 'Missing required fields: firstName, lastName, dateOfBirth, phone, and rxNumber are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.office365.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'info@quickrx134.com',
        pass: process.env.SMTP_PASS
      },
      tls: { ciphers: 'TLSv1.2' }
    });

    await transporter.verify();

    const correlationId = `quickrx-refill-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

    const html = `<!doctype html>
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">QuickRX Pharmacy</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">Prescription Refill Request</p>
      </div>
      <div style="padding: 20px; background: #f8fafc;">
        <h2 style="color: #1e3a8a; margin-bottom: 20px;">Prescription Refill Request</h2>
        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 10px;">Patient Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
          <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
        </div>
        <div style="margin-bottom: 20px;">
          <h3 style="color: #374151; margin-bottom: 10px;">Prescription Details</h3>
          <p><strong>RX Number:</strong> ${rxNumber}</p>
          <p><strong>Pickup Method:</strong> ${pickupMethod || 'Not specified'}</p>
          ${pickupDate ? `<p><strong>Preferred Pickup Date:</strong> ${pickupDate}</p>` : ''}
        </div>
        ${additionalNotes ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Additional Notes</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
              ${additionalNotes.replace(/\n/g, '<br>')}
            </div>
          </div>` : ''}
      </div>
      <div style="background: #f1f5f9; padding: 15px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0 0 5px 0;"><strong>Submission Details:</strong></p>
        <p style="margin: 0 0 5px 0;">Form Type: Refill Request</p>
        <p style="margin: 0 0 5px 0;">Page URL: ${`REDACTED`}</p>
        <p style="margin: 0 0 5px 0;">Timestamp: ${new Date().toLocaleString()}</p>
        <p style="margin: 0 0 5px 0;">Correlation ID: ${correlationId}</p>
      </div>
    </div>`;

    const text = `QuickRX Pharmacy - Prescription Refill Request

Patient Information:
Name: ${firstName} ${lastName}
Date of Birth: ${dateOfBirth}
Phone: ${phone}
${email ? `Email: ${email}` : ''}

Prescription Details:
RX Number: ${rxNumber}
Pickup Method: ${pickupMethod || 'Not specified'}
${pickupDate ? `Preferred Pickup Date: ${pickupDate}` : ''}

${additionalNotes ? `Additional Notes:\n${additionalNotes}` : ''}

---

Submission Details:
Form Type: Refill Request
Timestamp: ${new Date().toLocaleString()}
Correlation ID: ${correlationId}`.trim();

   const info = await transporter.sendMail({
     from: `"QuickRX Pharmacy" <${process.env.SMTP_USER || 'info@quickrx134.com'}>`,
     to: process.env.TO_EMAIL || 'info@quickrx134.com',
     replyTo: email ? `${firstName} ${lastName} <${email}>` : undefined,
     subject: `[QuickRX REFILL] Refill Request for ${firstName} ${lastName}`,
     text, html,
     headers: { 'X-Correlation-ID': correlationId, 'X-Form-Type': 'refill', 'X-Submission-Timestamp': new Date().toISOString() }
   });

   setCORS(req, res);
   return res.status(200).json({ ok: true, message: 'Refill request submitted successfully', correlationId, messageId: info.messageId });

 } catch (error) {
   console.error('refill error:', error);
   setCORS(req, res);
   return res.status(500).json({ ok: false, error: 'Failed to submit refill request. Please try again later.' });
 }

}