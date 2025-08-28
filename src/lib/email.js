import nodemailer from 'nodemailer'

// Hardcoded Gmail SMTP configuration
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  user: 'quickrxforms@gmail.com',
  pass: 'vajq fjpc jgjy ufdu'
}

// Email transporter configuration for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    host: EMAIL_CONFIG.host,
    port: EMAIL_CONFIG.port,
    secure: EMAIL_CONFIG.secure,
    auth: {
      user: EMAIL_CONFIG.user,
      pass: EMAIL_CONFIG.pass,
    },
    tls: { ciphers: 'TLSv1.2' },
  })
}

// Main email sending function
export async function sendPharmacyEmail({ 
  subject, 
  html, 
  text, 
  formType = 'general',
  formData = {},
  pageUrl = '',
  timestamp = new Date().toISOString()
}) {
  try {
    const transporter = createTransporter()
    
    // Add correlation ID for tracking
    const correlationId = `quickrx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
    
    // Enhanced subject with form type
    const enhancedSubject = `[QuickRX ${formType.toUpperCase()}] ${subject}`
    
    // Enhanced HTML with metadata
    const enhancedHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">QuickRX Pharmacy</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission</p>
        </div>
        
        <div style="padding: 20px; background: #f8fafc;">
          ${html}
        </div>
        
        <div style="background: #f1f5f9; padding: 15px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 5px 0;"><strong>Submission Details:</strong></p>
          <p style="margin: 0 0 5px 0;">Form Type: ${formType}</p>
          <p style="margin: 0 0 5px 0;">Page URL: ${pageUrl || 'Not provided'}</p>
          <p style="margin: 0 0 5px 0;">Timestamp: ${new Date(timestamp).toLocaleString()}</p>
          <p style="margin: 0 0 5px 0;">Correlation ID: ${correlationId}</p>
        </div>
      </div>
    `
    
    // Enhanced text version
    const enhancedText = `
QuickRX Pharmacy - ${formType.toUpperCase()} Form Submission

${text}

---
Submission Details:
Form Type: ${formType}
Page URL: ${pageUrl || 'Not provided'}
Timestamp: ${new Date(timestamp).toLocaleString()}
Correlation ID: ${correlationId}
    `.trim()
    
    const mailOptions = {
      from: `"QuickRX Pharmacy" <${EMAIL_CONFIG.user}>`,
      to: EMAIL_CONFIG.user,
      subject: enhancedSubject,
      text: enhancedText,
      html: enhancedHtml,
      headers: {
        'X-Correlation-ID': correlationId,
        'X-Form-Type': formType,
        'X-Submission-Timestamp': timestamp
      }
    }
    
    const result = await transporter.sendMail(mailOptions)
    
    // Log success
    console.log(`✅ Email sent successfully - ${formType} form`, {
      correlationId,
      messageId: result.messageId,
      timestamp
    })
    
    return {
      success: true,
      correlationId,
      messageId: result.messageId
    }
    
  } catch (error) {
    // Log error
    console.error(`❌ Email sending failed - ${formType} form`, {
      error: error.message,
      timestamp
    })
    
    throw new Error(`Failed to send email: ${error.message}`)
  }
}

// Contact form email
export async function sendContactEmail(formData, pageUrl = '') {
  const { name, email, phone, message } = formData
  
  const html = `
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Contact Form Submission</h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
      <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    </div>
  `
  
  const text = `
Contact Form Submission

Contact Information:
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
  `
  
  return sendPharmacyEmail({
    subject: `Contact Form from ${name}`,
    html,
    text,
    formType: 'contact',
    formData,
    pageUrl
  })
}

// Refill form email
export async function sendRefillEmail(formData, pageUrl = '') {
  const {
    firstName, lastName, dateOfBirth, phone, email,
    rxNumber, pickupMethod, pickupDate, additionalNotes
  } = formData
  
  const html = `
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Prescription Refill Request</h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Patient Information</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Prescription Details</h3>
      <p><strong>RX Number:</strong> ${rxNumber}</p>
      <p><strong>Pickup Method:</strong> ${pickupMethod}</p>
      <p><strong>Preferred Pickup Date:</strong> ${pickupDate}</p>
    </div>
    
    ${additionalNotes ? `
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Additional Notes</h3>
      <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
        ${additionalNotes.replace(/\n/g, '<br>')}
      </div>
    </div>
    ` : ''}
  `
  
  const text = `
Prescription Refill Request

Patient Information:
Name: ${firstName} ${lastName}
Date of Birth: ${dateOfBirth}
Phone: ${phone}
Email: ${email}

Prescription Details:
RX Number: ${rxNumber}
Pickup Method: ${pickupMethod}
Preferred Pickup Date: ${pickupDate}

${additionalNotes ? `Additional Notes:\n${additionalNotes}` : ''}
  `
  
  return sendPharmacyEmail({
    subject: `Refill Request for ${firstName} ${lastName}`,
    html,
    text,
    formType: 'refill',
    formData,
    pageUrl
  })
}

// Transfer form email
export async function sendTransferEmail(formData, pageUrl = '') {
  const {
    firstName, lastName, dateOfBirth, phone, email,
    currentPharmacy, pharmacyPhone, prescriptionNames, prescriptionNumbers, additionalInfo
  } = formData
  
  const html = `
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Prescription Transfer Request</h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Patient Information</h3>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
      <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Current Pharmacy</h3>
      <p><strong>Pharmacy Name:</strong> ${currentPharmacy}</p>
      <p><strong>Pharmacy Phone:</strong> <a href="tel:${pharmacyPhone}">${pharmacyPhone}</a></p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Prescriptions to Transfer</h3>
      <p><strong>Prescription Names:</strong> ${prescriptionNames}</p>
      <p><strong>Prescription Numbers:</strong> ${prescriptionNumbers}</p>
    </div>
    
    ${additionalInfo ? `
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Additional Information</h3>
      <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
        ${additionalInfo.replace(/\n/g, '<br>')}
      </div>
    </div>
    ` : ''}
  `
  
  const text = `
Prescription Transfer Request

Patient Information:
Name: ${firstName} ${lastName}
Date of Birth: ${dateOfBirth}
Phone: ${phone}
Email: ${email}

Current Pharmacy:
Pharmacy Name: ${currentPharmacy}
Pharmacy Phone: ${pharmacyPhone}

Prescriptions to Transfer:
Prescription Names: ${prescriptionNames}
Prescription Numbers: ${prescriptionNumbers}

${additionalInfo ? `Additional Information:\n${additionalInfo}` : ''}
  `
  
  return sendPharmacyEmail({
    subject: `Transfer Request for ${firstName} ${lastName}`,
    html,
    text,
    formType: 'transfer',
    formData,
    pageUrl
  })
}

// Feedback form email
export async function sendFeedbackEmail(formData, pageUrl = '') {
  const { rating, feedback, name, email } = formData
  
  const html = `
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">Customer Feedback</h2>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Rating</h3>
      <div style="font-size: 24px; color: #f59e0b;">
        ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5 stars)
      </div>
    </div>
    
    ${name ? `
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Customer Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
    </div>
    ` : ''}
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #374151; margin-bottom: 10px;">Feedback</h3>
      <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
        ${feedback.replace(/\n/g, '<br>')}
      </div>
    </div>
  `
  
  const text = `
Customer Feedback

Rating: ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)} (${rating}/5 stars)

${name ? `Customer Information:\nName: ${name}${email ? `\nEmail: ${email}` : ''}\n` : ''}
Feedback:
${feedback}
  `
  
  return sendPharmacyEmail({
    subject: `Customer Feedback - ${rating}/5 stars`,
    html,
    text,
    formType: 'feedback',
    formData,
    pageUrl
  })
}

// Health check email
export async function sendHealthCheckEmail() {
  const html = `
    <h2 style="color: #1e3a8a; margin-bottom: 20px;">QuickRX Email Health Check</h2>
    
    <div style="background: #ecfdf5; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px; margin-bottom: 20px;">
      <p style="margin: 0; color: #065f46;"><strong>✅ Email system is working correctly!</strong></p>
    </div>
    
    <p>This is an automated health check to verify that the QuickRX Pharmacy email system is functioning properly.</p>
    
    <div style="background: #f1f5f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
      <p style="margin: 0; font-size: 12px; color: #64748b;">
        <strong>Health Check Details:</strong><br>
        Timestamp: ${new Date().toLocaleString()}<br>
        Environment: ${process.env.NODE_ENV || 'development'}<br>
        SMTP Host: ${EMAIL_CONFIG.host}
      </p>
    </div>
  `
  
  const text = `
QuickRX Email Health Check

✅ Email system is working correctly!

This is an automated health check to verify that the QuickRX Pharmacy email system is functioning properly.

Health Check Details:
Timestamp: ${new Date().toLocaleString()}
Environment: ${process.env.NODE_ENV || 'development'}
SMTP Host: ${EMAIL_CONFIG.host}
  `
  
  return sendPharmacyEmail({
    subject: 'QuickRX Email Health Check',
    html,
    text,
    formType: 'health-check',
    pageUrl: '/api/health/email'
  })
} 