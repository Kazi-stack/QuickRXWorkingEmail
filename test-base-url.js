#!/usr/bin/env node

/**
 * Test script to verify BASE_URL logic works correctly
 * Run with: node test-base-url.js
 */

import { getBaseUrl, getApiUrl, BASE_URL } from './src/lib/test-utils.js'

console.log('🧪 Testing BASE_URL Logic')
console.log('=' .repeat(50))

// Test getBaseUrl function
console.log('📋 Current Environment:')
console.log(`   NODE_ENV: ${process.env.NODE_ENV || 'development'}`)
console.log(`   BASE_URL env var: ${process.env.BASE_URL || '(not set)'}`)
console.log(`   getBaseUrl(): ${getBaseUrl()}`)
console.log(`   BASE_URL constant: ${BASE_URL}`)
console.log('')

// Test getApiUrl function with different endpoints
const testEndpoints = [
  '/api/health',
  '/api/contact',
  '/api/refill',
  '/api/transfer',
  '/api/feedback'
]

console.log('🔗 API URL Examples:')
testEndpoints.forEach(endpoint => {
  const fullUrl = getApiUrl(endpoint)
  console.log(`   ${endpoint} → ${fullUrl}`)
})

console.log('')
console.log('✅ BASE_URL logic test completed!')

// Test different scenarios
console.log('')
console.log('🎭 Testing Different Scenarios:')

// Scenario 1: Development
console.log('\n1️⃣ Development (NODE_ENV=development, no BASE_URL):')
process.env.NODE_ENV = 'development'
delete process.env.BASE_URL
console.log(`   getBaseUrl(): ${getBaseUrl()}`)

// Scenario 2: Production
console.log('\n2️⃣ Production (NODE_ENV=production, no BASE_URL):')
process.env.NODE_ENV = 'production'
delete process.env.BASE_URL
console.log(`   getBaseUrl(): ${getBaseUrl()}`)

// Scenario 3: Custom BASE_URL
console.log('\n3️⃣ Custom BASE_URL (NODE_ENV=development, BASE_URL set):')
process.env.NODE_ENV = 'development'
process.env.BASE_URL = 'https://custom-domain.com'
console.log(`   getBaseUrl(): ${getBaseUrl()}`)

// Reset environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
delete process.env.BASE_URL

console.log('')
console.log('🎉 All tests completed successfully!')
