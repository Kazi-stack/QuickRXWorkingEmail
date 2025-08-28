/**
 * Smart BASE_URL resolver for different environments
 * 
 * This utility provides a consistent way to determine the base URL for API calls
 * across different environments:
 * 
 * - Browser: Uses same-origin (empty string) for relative URLs
 * - Node.js: Uses environment variables or sensible defaults
 * - Production: Defaults to production domain when NODE_ENV is 'production'
 * - Development: Defaults to localhost with common development ports
 */

/**
 * Determines the appropriate BASE_URL for the current environment
 * @returns {string} The base URL to use for API calls
 */
export function getBaseUrl() {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // In browser, use same-origin for relative URLs
    // This works for both localhost and production domains
    return ''
  }
  
  // We're in Node.js environment
  const nodeEnv = process.env.NODE_ENV || 'development'
  
  // If BASE_URL is explicitly set, use it
  if (process.env.BASE_URL) {
    return process.env.BASE_URL
  }
  
  // In production, default to the production domain
  if (nodeEnv === 'production') {
    return 'https://quickrx134.com'
  }
  
  // In development, default to localhost with common development port
  return 'http://localhost:5173'
}

/**
 * Creates a full API URL by combining the base URL with an endpoint
 * @param {string} endpoint - The API endpoint (e.g., '/api/health')
 * @returns {string} The full URL for the API call
 */
export function getApiUrl(endpoint) {
  const baseUrl = getBaseUrl()
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
  
  // If baseUrl is empty (browser same-origin), just return the endpoint
  if (baseUrl === '') {
    return cleanEndpoint
  }
  
  // Otherwise, combine base URL with endpoint
  return `${baseUrl}${cleanEndpoint}`
}

/**
 * Enhanced fetch wrapper that includes better error handling for JSON responses
 * @param {string} endpoint - The API endpoint
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<Response>} The fetch response
 */
export async function apiFetch(endpoint, options = {}) {
  const url = getApiUrl(endpoint)
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
    
    return response
  } catch (error) {
    console.error(`API call failed for ${endpoint}:`, error.message)
    throw error
  }
}

/**
 * Enhanced fetch wrapper that automatically parses JSON responses
 * @param {string} endpoint - The API endpoint
 * @param {RequestInit} options - Fetch options
 * @returns {Promise<{data: any, response: Response}>} Object containing parsed data and response
 */
export async function apiFetchJson(endpoint, options = {}) {
  const response = await apiFetch(endpoint, options)
  
  try {
    const data = await response.json()
    return { data, response }
  } catch (error) {
    console.error(`Failed to parse JSON response from ${endpoint}:`, error.message)
    throw new Error(`Invalid JSON response from ${endpoint}: ${error.message}`)
  }
}

// Export the BASE_URL constant for backward compatibility
export const BASE_URL = getBaseUrl()
