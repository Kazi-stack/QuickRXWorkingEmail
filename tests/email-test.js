import fetch from 'node-fetch'
import { getBaseUrl, getApiUrl, apiFetchJson } from '../src/lib/test-utils.js'

const BASE_URL = getBaseUrl()

// Test data for different forms
const testData = {
  contact: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-123-4567',
    message: 'This is a test contact form submission from the automated test script.'
  },
  refill: {
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: '1990-01-15',
    phone: '555-987-6543',
    email: 'jane.smith@example.com',
    rxNumber: 'RX123456789',
    pickupMethod: 'Pickup',
    pickupDate: '2024-01-20',
    additionalNotes: 'This is a test refill request from the automated test script.'
  },
  transfer: {
    firstName: 'Bob',
    lastName: 'Johnson',
    dateOfBirth: '1985-06-22',
    phone: '555-456-7890',
    email: 'bob.johnson@example.com',
    currentPharmacy: 'CVS Pharmacy',
    pharmacyPhone: '555-111-2222',
    prescriptionNames: 'Lisinopril, Metformin',
    prescriptionNumbers: 'RX987654321, RX123789456',
    additionalInfo: 'This is a test transfer request from the automated test script.'
  },
  feedback: {
    rating: 5,
    feedback: 'This is a test feedback submission from the automated test script. The service was excellent!',
    name: 'Alice Brown',
    email: 'alice.brown@example.com'
  }
}

// Test functions

async function testHealthCheck() {
  console.log('🏥 Testing health check...')
  try {
    const { data, response } = await apiFetchJson('/api/health')
    
    if (response.ok && data.status === 'ok') {
      console.log('✅ Health check passed')
      return true
    } else {
      console.log('❌ Health check failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Health check error:', error.message)
    return false
  }
}

async function testEmailHealthCheck() {
  console.log('📧 Testing email health check...')
  try {
    const { data, response } = await apiFetchJson('/api/health/email')
    
    if (response.ok && data.ok) {
      console.log('✅ Email health check passed')
      console.log(`   Correlation ID: ${data.correlationId}`)
      console.log(`   Message ID: ${data.messageId}`)
      return true
    } else {
      console.log('❌ Email health check failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Email health check error:', error.message)
    return false
  }
}

async function testContactForm() {
  console.log('📝 Testing contact form...')
  try {
    const { data, response } = await apiFetchJson('/api/contact', {
      method: 'POST',
      body: JSON.stringify(testData.contact),
    })
    
    if (response.ok && data.success) {
      console.log('✅ Contact form test passed')
      console.log(`   Correlation ID: ${data.correlationId}`)
      return true
    } else {
      console.log('❌ Contact form test failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Contact form test error:', error.message)
    return false
  }
}

async function testRefillForm() {
  console.log('💊 Testing refill form...')
  try {
    const { data, response } = await apiFetchJson('/api/refill', {
      method: 'POST',
      body: JSON.stringify(testData.refill),
    })
    
    if (response.ok && data.success) {
      console.log('✅ Refill form test passed')
      console.log(`   Correlation ID: ${data.correlationId}`)
      return true
    } else {
      console.log('❌ Refill form test failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Refill form test error:', error.message)
    return false
  }
}

async function testTransferForm() {
  console.log('🔄 Testing transfer form...')
  try {
    const { data, response } = await apiFetchJson('/api/transfer', {
      method: 'POST',
      body: JSON.stringify(testData.transfer),
    })
    
    if (response.ok && data.success) {
      console.log('✅ Transfer form test passed')
      console.log(`   Correlation ID: ${data.correlationId}`)
      return true
    } else {
      console.log('❌ Transfer form test failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Transfer form test error:', error.message)
    return false
  }
}

async function testFeedbackForm() {
  console.log('⭐ Testing feedback form...')
  try {
    const { data, response } = await apiFetchJson('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(testData.feedback),
    })
    
    if (response.ok && data.success) {
      console.log('✅ Feedback form test passed')
      console.log(`   Correlation ID: ${data.correlationId}`)
      return true
    } else {
      console.log('❌ Feedback form test failed:', data)
      return false
    }
  } catch (error) {
    console.log('❌ Feedback form test error:', error.message)
    return false
  }
}

// Test validation
async function testValidation() {
  console.log('🔍 Testing form validation...')
  
  const tests = [
    {
      name: 'Contact form - missing required fields',
      endpoint: '/api/contact',
      data: { name: 'John', email: 'invalid-email' },
      expectedError: true
    },
    {
      name: 'Refill form - missing required fields',
      endpoint: '/api/refill',
      data: { firstName: 'Jane' },
      expectedError: true
    },
    {
      name: 'Feedback form - invalid rating',
      endpoint: '/api/feedback',
      data: { rating: 6, feedback: 'Test' },
      expectedError: true
    }
  ]
  
  let passed = 0
  let total = tests.length
  
  for (const test of tests) {
    try {
      const { data, response } = await apiFetchJson(test.endpoint, {
        method: 'POST',
        body: JSON.stringify(test.data),
      })
      
      if (test.expectedError && !response.ok && data.error) {
        console.log(`✅ ${test.name} - validation working correctly`)
        passed++
      } else if (!test.expectedError && response.ok) {
        console.log(`✅ ${test.name} - passed`)
        passed++
      } else {
        console.log(`❌ ${test.name} - unexpected result`)
      }
    } catch (error) {
      console.log(`❌ ${test.name} - error: ${error.message}`)
    }
  }
  
  console.log(`📊 Validation tests: ${passed}/${total} passed`)
  return passed === total
}

// Main test runner
async function runAllTests() {
  console.log('🚀 Starting QuickRX Email System Tests')
  console.log('=' .repeat(50))
  console.log(`🌐 Using BASE_URL: ${BASE_URL || '(same-origin)'}`)
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log('')
  
  const results = {
    healthCheck: await testHealthCheck(),
    emailHealthCheck: await testEmailHealthCheck(),
    contactForm: await testContactForm(),
    refillForm: await testRefillForm(),
    transferForm: await testTransferForm(),
    feedbackForm: await testFeedbackForm(),
    validation: await testValidation()
  }
  
  console.log('\n' + '=' .repeat(50))
  console.log('📊 Test Results Summary')
  console.log('=' .repeat(50))
  
  const passed = Object.values(results).filter(Boolean).length
  const total = Object.keys(results).length
  
  Object.entries(results).forEach(([test, result]) => {
    const status = result ? '✅ PASS' : '❌ FAIL'
    console.log(`${status} ${test}`)
  })
  
  console.log('\n' + '=' .repeat(50))
  console.log(`Overall: ${passed}/${total} tests passed`)
  
  if (passed === total) {
    console.log('🎉 All tests passed! Email system is working correctly.')
    process.exit(0)
  } else {
    console.log('⚠️  Some tests failed. Please check the configuration.')
    process.exit(1)
  }
}

// Run tests if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runAllTests().catch(error => {
    console.error('💥 Test runner error:', error)
    process.exit(1)
  })
}

export { runAllTests, testData } 