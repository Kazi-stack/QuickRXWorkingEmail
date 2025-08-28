import nodemailer from 'nodemailer'

/**
 * Production-ready email service for QuickRX Pharmacy
 * Supports Gmail SMTP with retry logic, validation, and error handling
 */

// Hardcoded Gmail SMTP configuration
const EMAIL_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  user: 'quickrxforms@gmail.com',
  pass: 'vajq fjpc jgjy ufdu'
}

// Create transporter with Gmail SMTP configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: EMAIL_CONFIG.host,
    port: EMAIL_CONFIG.port,
    secure: EMAIL_CONFIG.secure, // false for 587, true for 465
    auth: {
      user: EMAIL_CONFIG.user,
      pass: EMAIL_CONFIG.pass,
    },
    tls: {
      ciphers: 'TLSv1.2'
    },
    // Connection timeout and socket timeout
    connectionTimeout: 60000, // 60 seconds
    socketTimeout: 60000, // 60 seconds
    // Pool configuration for better performance
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
  })
}

// Email validation utility
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Retry utility for failed email sends
const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error) {
      lastError = error
      console.warn(`Email send attempt ${attempt} failed:`, error.message)
      
      if (attempt < maxRetries) {
        // Exponential backoff
        const waitTime = delay * Math.pow(2, attempt - 1)
        console.log(`Retrying in ${waitTime}ms...`)
        await new Promise(resolve => setTimeout(resolve, waitTime))
      }
    }
  }
  
  throw lastError
}

/**
 * Core email sending function with retry logic and validation
 * @param {Object} emailOptions - Email configuration object
 * @param {string|string[]} emailOptions.to - Recipient email(s)
 * @param {string} emailOptions.subject - Email subject
 * @param {string} emailOptions.text - Plain text content
 * @param {string} [emailOptions.html] - HTML content (optional)
 * @param {string} [emailOptions.from] - Sender email (optional, defaults to EMAIL_USER)
 * @param {Array} [emailOptions.attachments] - Email attachments (optional)
 * @param {Object} [options] - Additional options
 * @param {number} [options.maxRetries=3] - Maximum retry attempts
 * @param {boolean} [options.validateRecipients=true] - Validate recipient emails
 * @returns {Promise<Object>} Email send result
 */
export const sendEmail = async (emailOptions, options = {}) => {
  const {
    to,
    subject,
    text,
    html,
    from = `"QuickRX Pharmacy" <${EMAIL_CONFIG.user}>`,
    attachments = []
  } = emailOptions
  
  const {
    maxRetries = 3,
    validateRecipients = true
  } = options
  
  // Input validation
  if (!to || !subject || !text) {
    throw new Error('Missing required email fields: to, subject, and text are required')
  }
  
  // Validate recipient emails
  if (validateRecipients) {
    const recipients = Array.isArray(to) ? to : [to]
    const invalidEmails = recipients.filter(email => !validateEmail(email))
    
    if (invalidEmails.length > 0) {
      throw new Error(`Invalid email addresses: ${invalidEmails.join(', ')}`)
    }
  }
  
  // Generate correlation ID for tracking
  const correlationId = `quickrx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  const timestamp = new Date().toISOString()
  
  // Prepare mail options
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
    attachments,
    headers: {
      'X-Correlation-ID': correlationId,
      'X-Mailer': 'QuickRX-Pharmacy-System',
      'X-Timestamp': timestamp
    }
  }
  
  // Send email with retry logic
  const sendOperation = async () => {
    const transporter = createTransporter()
    
    try {
      const result = await transporter.sendMail(mailOptions)
      
      // Log success
      console.log(`✅ Email sent successfully`, {
        correlationId,
        messageId: result.messageId,
        to: Array.isArray(to) ? to.join(', ') : to,
        subject,
        timestamp
      })
      
      return {
        success: true,
        correlationId,
        messageId: result.messageId,
        timestamp
      }
    } finally {
      // Close transporter connection
      transporter.close()
    }
  }
  
  try {
    return await retryOperation(sendOperation, maxRetries)
  } catch (error) {
    // Log error
    console.error(`❌ Email sending failed after ${maxRetries} attempts`, {
      correlationId,
      error: error.message,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      timestamp
    })
    
    throw new Error(`Failed to send email after ${maxRetries} attempts: ${error.message}`)
  }
}

/**
 * Send a test email to verify SMTP configuration
 * @param {string} recipient - Test email recipient
 * @param {string} [subject] - Test email subject
 * @param {string} [message] - Test email message
 * @returns {Promise<Object>} Email send result
 */
export const sendTestEmail = async (
  recipient, 
  subject = 'QuickRX SMTP Test', 
  message = 'This is a test email from our backend.'
) => {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">QuickRX Pharmacy</h1>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">SMTP Test Email</p>
      </div>
      
      <div style="padding: 20px; background: #f8fafc;">
        <h2 style="color: #1e3a8a; margin-bottom: 20px;">Email System Test</h2>
        <p style="color: #374151; line-height: 1.6;">${message}</p>
        
        <div style="background: #ecfdf5; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px; margin: 20px 0;">
          <p style="margin: 0; color: #065f46;"><strong>✅ SMTP Configuration Working!</strong></p>
          <p style="margin: 5px 0 0 0; color: #065f46; font-size: 14px;">
            Microsoft 365 SMTP connection established successfully.
          </p>
        </div>
        
        <div style="background: #f1f5f9; padding: 15px; border-radius: 4px; margin-top: 20px;">
          <p style="margin: 0; font-size: 12px; color: #64748b;">
            <strong>Test Details:</strong><br>
            SMTP Host: ${EMAIL_CONFIG.host}<br>
            Port: ${EMAIL_CONFIG.port}<br>
            From: ${EMAIL_CONFIG.user}<br>
            Timestamp: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  `
  
  const text = `
QuickRX Pharmacy - SMTP Test Email

${message}

✅ SMTP Configuration Working!
Microsoft 365 SMTP connection established successfully.

Test Details:
SMTP Host: ${EMAIL_CONFIG.host}
Port: ${EMAIL_CONFIG.port}
From: ${EMAIL_CONFIG.user}
Timestamp: ${new Date().toLocaleString()}
  `.trim()
  
  return sendEmail({
    to: recipient,
    subject,
    text,
    html
  })
}

/**
 * Send email with template support for QuickRX forms
 * @param {Object} templateData - Template data object
 * @param {string} templateData.type - Template type (contact, refill, transfer, feedback)
 * @param {Object} templateData.data - Form data
 * @param {string} [templateData.recipient] - Email recipient (defaults to EMAIL_TO)
 * @returns {Promise<Object>} Email send result
 */
export const sendTemplateEmail = async (templateData) => {
  const { type, data, recipient = EMAIL_CONFIG.user } = templateData
  
  // Import existing template functions
  const { sendContactEmail, sendRefillEmail, sendTransferEmail, sendFeedbackEmail } = await import('./email.js')
  
  switch (type) {
    case 'contact':
      return sendContactEmail(data)
    case 'refill':
      return sendRefillEmail(data)
    case 'transfer':
      return sendTransferEmail(data)
    case 'feedback':
      return sendFeedbackEmail(data)
    default:
      throw new Error(`Unknown email template type: ${type}`)
  }
}

/**
 * Verify SMTP connection and configuration
 * @returns {Promise<Object>} Connection verification result
 */
export const verifyEmailConnection = async () => {
  try {
    const transporter = createTransporter()
    
    // Verify connection
    await transporter.verify()
    
    console.log('✅ SMTP connection verified successfully')
    
    return {
      success: true,
      message: 'SMTP connection verified successfully',
      config: {
        host: EMAIL_CONFIG.host,
        port: EMAIL_CONFIG.port,
        user: EMAIL_CONFIG.user,
        secure: EMAIL_CONFIG.secure
      }
    }
  } catch (error) {
    console.error('❌ SMTP connection verification failed:', error.message)
    
    return {
      success: false,
      error: error.message,
      config: {
        host: EMAIL_CONFIG.host,
        port: EMAIL_CONFIG.port,
        user: EMAIL_CONFIG.user,
        secure: EMAIL_CONFIG.secure
      }
    }
  }
}

// Export default for backward compatibility
export default {
  sendEmail,
  sendTestEmail,
  sendTemplateEmail,
  verifyEmailConnection
}

