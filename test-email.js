// Test script for QuickRX email functionality
// Run with: node test-email.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

async function testEmail() {
  console.log('🧪 Testing QuickRX Email System...\n');

  // Check environment variables
  const requiredVars = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'TO_EMAIL'];
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('❌ Missing environment variables:', missingVars.join(', '));
    console.log('\nPlease set these in your .env file or Vercel environment variables.');
    return;
  }

  console.log('✅ Environment variables found');
  console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`👤 SMTP User: ${process.env.SMTP_USER}`);
  console.log(`📬 To Email: ${process.env.TO_EMAIL}\n`);

  try {
    // Create transporter
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: { ciphers: 'TLSv1.2' },
    });

    console.log('🔧 Testing SMTP connection...');

    // Verify connection
    await transporter.verify();
    console.log('✅ SMTP connection successful!\n');

    // Send test email
    console.log('📤 Sending test email...');

    const testData = {
      firstName: 'Test',
      lastName: 'User',
      dateOfBirth: '1990-01-01',
      phone: '555-123-4567',
      email: 'test@example.com',
      rxNumber: 'RX123456789',
      pickupMethod: 'pickup',
      pickupDate: '2024-01-15',
      additionalNotes: 'This is a test refill request from the automated test script.'
    };

    const correlationId = `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%); color: white; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">QuickRX Pharmacy</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">🧪 TEST EMAIL - Prescription Refill Request</p>
        </div>
        
        <div style="padding: 20px; background: #f8fafc;">
          <h2 style="color: #1e3a8a; margin-bottom: 20px;">🧪 TEST: Prescription Refill Request</h2>
          
          <div style="background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; border-radius: 4px; margin-bottom: 20px;">
            <p style="margin: 0; color: #92400e;"><strong>⚠️ This is a test email to verify the email system is working correctly.</strong></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Patient Information</h3>
            <p><strong>Name:</strong> ${testData.firstName} ${testData.lastName}</p>
            <p><strong>Date of Birth:</strong> ${testData.dateOfBirth}</p>
            <p><strong>Phone:</strong> <a href="tel:${testData.phone}">${testData.phone}</a></p>
            <p><strong>Email:</strong> <a href="mailto:${testData.email}">${testData.email}</a></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Prescription Details</h3>
            <p><strong>RX Number:</strong> ${testData.rxNumber}</p>
            <p><strong>Pickup Method:</strong> ${testData.pickupMethod}</p>
            <p><strong>Preferred Pickup Date:</strong> ${testData.pickupDate}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #374151; margin-bottom: 10px;">Additional Notes</h3>
            <div style="background: white; padding: 15px; border-left: 4px solid #10b981; border-radius: 4px;">
              ${testData.additionalNotes}
            </div>
          </div>
        </div>
        
        <div style="background: #f1f5f9; padding: 15px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
          <p style="margin: 0 0 5px 0;"><strong>Test Details:</strong></p>
          <p style="margin: 0 0 5px 0;">Form Type: Test Refill Request</p>
          <p style="margin: 0 0 5px 0;">Timestamp: ${new Date().toLocaleString()}</p>
          <p style="margin: 0 0 5px 0;">Correlation ID: ${correlationId}</p>
          <p style="margin: 0 0 5px 0;">Environment: ${process.env.NODE_ENV || 'development'}</p>
        </div>
      </div>
    `;

    const text = `
🧪 TEST EMAIL - QuickRX Pharmacy - Prescription Refill Request

⚠️ This is a test email to verify the email system is working correctly.

Patient Information:
Name: ${testData.firstName} ${testData.lastName}
Date of Birth: ${testData.dateOfBirth}
Phone: ${testData.phone}
Email: ${testData.email}

Prescription Details:
RX Number: ${testData.rxNumber}
Pickup Method: ${testData.pickupMethod}
Preferred Pickup Date: ${testData.pickupDate}

Additional Notes:
${testData.additionalNotes}

---
Test Details:
Form Type: Test Refill Request
Timestamp: ${new Date().toLocaleString()}
Correlation ID: ${correlationId}
Environment: ${process.env.NODE_ENV || 'development'}
    `.trim();

    const info = await transporter.sendMail({
      from: `"QuickRX Pharmacy (TEST)" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: `${testData.firstName} ${testData.lastName} <${testData.email}>`,
      subject: `🧪 TEST: [QuickRX REFILL] Refill Request for ${testData.firstName} ${testData.lastName}`,
      text: text,
      html: html,
      headers: {
        'X-Correlation-ID': correlationId,
        'X-Form-Type': 'test-refill',
        'X-Submission-Timestamp': new Date().toISOString()
      }
    });

    console.log('✅ Test email sent successfully!');
    console.log(`📧 Message ID: ${info.messageId}`);
    console.log(`🆔 Correlation ID: ${correlationId}`);
    console.log(`📬 Sent to: ${process.env.TO_EMAIL}`);
    console.log('\n🎉 Email system is working correctly!');
    console.log('\n📋 Next steps:');
    console.log('1. Check your email inbox for the test message');
    console.log('2. Verify the email formatting looks correct');
    console.log('3. Test the actual form on your website');

  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Check your SMTP credentials');
    console.log('2. Verify your Microsoft 365 account settings');
    console.log('3. Ensure SMTP AUTH is enabled');
    console.log('4. Check if you need an App Password for MFA');
  }
}

// Run the test
testEmail().catch(console.error);
