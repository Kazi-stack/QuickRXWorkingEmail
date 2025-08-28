import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { 
  sendContactEmail, 
  sendRefillEmail, 
  sendTransferEmail, 
  sendFeedbackEmail, 
  sendHealthCheckEmail 
} from './src/lib/email.js'
import { 
  sendTestEmail, 
  verifyEmailConnection 
} from './src/lib/emailService.js'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://quickrx134.com', 'https://www.quickrx134.com'] // Production domains
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'https://5173-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer', 'https://5175-is8d6g5fe7rdpzv23kp7t-104b2fbc.manusvm.computer'], // Development origins
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Handle OPTIONS preflight requests
app.options('/api/refill', (req, res) => {
  const origin = req.headers.origin;
  const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://quickrx134.com', 'https://www.quickrx134.com']
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'];
  
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Vary', 'Origin');
  res.status(204).end();
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Email health check endpoint
app.get('/api/health/email', async (req, res) => {
  try {
    const result = await sendHealthCheckEmail()
    res.json({ 
      ok: true, 
      message: 'Email health check successful',
      correlationId: result.correlationId,
      messageId: result.messageId,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Email health check failed:', error)
    res.status(500).json({ 
      ok: false, 
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
})

// SMTP connection verification endpoint
app.get('/api/email/verify', async (req, res) => {
  try {
    const result = await verifyEmailConnection()
    res.json({
      ...result,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('SMTP verification failed:', error)
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
})

// Test email endpoint
app.post('/api/email/test', async (req, res) => {
  try {
    const { 
      to = 'test@example.com', 
      subject = 'QuickRX SMTP Test', 
      message = 'This is a test email from our backend.' 
    } = req.body
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(to)) {
      return res.status(400).json({ 
        success: false,
        error: 'Invalid email format for recipient' 
      })
    }
    
    const result = await sendTestEmail(to, subject, message)
    
    res.json({
      success: true,
      message: 'Test email sent successfully',
      correlationId: result.correlationId,
      messageId: result.messageId,
      recipient: to,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Test email failed:', error)
    res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    })
  }
})

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body
    
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      })
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' })
    }
    
    const pageUrl = req.headers.referer || 'Not provided'
    const result = await sendContactEmail({ name, email, phone, message }, pageUrl)
    
    res.json({ 
      success: true, 
      message: 'Contact form submitted successfully',
      correlationId: result.correlationId
    })
    
  } catch (error) {
    console.error('Contact form submission failed:', error)
    res.status(500).json({ 
      error: 'Failed to submit contact form. Please try again later.' 
    })
  }
})

// Refill form endpoint
app.post('/api/refill', async (req, res) => {
  // Set CORS headers explicitly for this endpoint
  const origin = req.headers.origin;
  const allowedOrigins = process.env.NODE_ENV === 'production' 
    ? ['https://quickrx134.com', 'https://www.quickrx134.com']
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'];
  
  if (origin && allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Vary', 'Origin');

  try {
    const { 
      firstName, lastName, dateOfBirth, phone, email,
      rxNumber, pickupMethod, pickupDate, additionalNotes 
    } = req.body
    
    // Basic validation
    if (!firstName || !lastName || !dateOfBirth || !phone || !rxNumber) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, dateOfBirth, phone, and rxNumber are required' 
      })
    }
    
    const pageUrl = req.headers.referer || 'Not provided'
    const result = await sendRefillEmail({ 
      firstName, lastName, dateOfBirth, phone, email,
      rxNumber, pickupMethod, pickupDate, additionalNotes 
    }, pageUrl)
    
    res.json({ 
      success: true, 
      message: 'Refill request submitted successfully',
      correlationId: result.correlationId
    })
    
  } catch (error) {
    console.error('Refill form submission failed:', error)
    res.status(500).json({ 
      error: 'Failed to submit refill request. Please try again later.' 
    })
  }
})

// Transfer form endpoint
app.post('/api/transfer', async (req, res) => {
  try {
    const { 
      firstName, lastName, dateOfBirth, phone, email,
      currentPharmacy, pharmacyPhone, prescriptionNames, prescriptionNumbers, additionalInfo 
    } = req.body
    
    // Basic validation
    if (!firstName || !lastName || !dateOfBirth || !phone || !currentPharmacy || !prescriptionNames) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, lastName, dateOfBirth, phone, currentPharmacy, and prescriptionNames are required' 
      })
    }
    
    const pageUrl = req.headers.referer || 'Not provided'
    const result = await sendTransferEmail({ 
      firstName, lastName, dateOfBirth, phone, email,
      currentPharmacy, pharmacyPhone, prescriptionNames, prescriptionNumbers, additionalInfo 
    }, pageUrl)
    
    res.json({ 
      success: true, 
      message: 'Transfer request submitted successfully',
      correlationId: result.correlationId
    })
    
  } catch (error) {
    console.error('Transfer form submission failed:', error)
    res.status(500).json({ 
      error: 'Failed to submit transfer request. Please try again later.' 
    })
  }
})

// Feedback form endpoint
app.post('/api/feedback', async (req, res) => {
  try {
    const { rating, feedback, name, email } = req.body
    
    // Basic validation
    if (!rating || !feedback) {
      return res.status(400).json({ 
        error: 'Missing required fields: rating and feedback are required' 
      })
    }
    
    // Rating validation
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' })
    }
    
    const pageUrl = req.headers.referer || 'Not provided'
    const result = await sendFeedbackEmail({ rating, feedback, name, email }, pageUrl)
    
    res.json({ 
      success: true, 
      message: 'Feedback submitted successfully',
      correlationId: result.correlationId
    })
    
  } catch (error) {
    console.error('Feedback form submission failed:', error)
    res.status(500).json({ 
      error: 'Failed to submit feedback. Please try again later.' 
    })
  }
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'QuickRX Pharmacy API Server',
    status: 'running',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      emailHealth: '/api/health/email',
      emailVerify: '/api/email/verify',
      emailTest: '/api/email/test',
      contact: '/api/contact',
      refill: '/api/refill',
      transfer: '/api/transfer',
      feedback: '/api/feedback'
    },
    timestamp: new Date().toISOString()
  })
})

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error)
  res.status(500).json({ 
    error: 'Internal server error. Please try again later.' 
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`)
  console.log(`📧 Email health check: http://localhost:${PORT}/api/health/email`)
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`)
})

export default app 