import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { Label } from '@/components/ui/label.jsx'
import { ArrowRight, Clock, Shield, CheckCircle, Phone, FileText, Calendar, Pill, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { getApiUrl } from '@/lib/test-utils.js'

function Refill() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    rxNumber: '',
    pickupMethod: '',
    pickupDate: '',
    additionalNotes: '',
    agreeToTerms: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState('success')

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSelectChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const showToastNotification = (message, type = 'success') => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
    
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false)
    }, 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Use the smart BASE_URL resolver for consistent API calls
      const apiUrl = getApiUrl('/api/refill')
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        const successMessage = 'Thank you for your refill request! We will contact you when it\'s ready for pickup or delivery.'
        setSubmitStatus({ type: 'success', message: successMessage })
        showToastNotification(successMessage, 'success')
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          phone: '',
          email: '',
          rxNumber: '',
          pickupMethod: '',
          pickupDate: '',
          additionalNotes: '',
          agreeToTerms: false
        })
      } else {
        // For development, show a success message even if email fails
        if (process.env.NODE_ENV === 'development' && result.error && result.error.includes('email')) {
          const successMessage = 'Thank you for your refill request! We will contact you when it\'s ready for pickup or delivery. (Note: Email not configured for local testing)'
          setSubmitStatus({ type: 'success', message: successMessage })
          showToastNotification(successMessage, 'success')
          setFormData({
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            phone: '',
            email: '',
            rxNumber: '',
            pickupMethod: '',
            pickupDate: '',
            additionalNotes: '',
            agreeToTerms: false
          })
        } else {
          const errorMessage = result.error || 'Failed to submit refill request. Please try again.'
          setSubmitStatus({ type: 'error', message: errorMessage })
          showToastNotification(errorMessage, 'error')
        }
      }
    } catch (error) {
      console.error('Refill form submission error:', error)
      const errorMessage = 'Network error. Please check your connection and try again.'
      setSubmitStatus({ type: 'error', message: errorMessage })
      showToastNotification(errorMessage, 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed top-4 right-4 z-50 max-w-sm w-full bg-white rounded-lg shadow-lg border-l-4 ${
          toastType === 'success' ? 'border-green-500' : 'border-red-500'
        } transform transition-all duration-300 ease-in-out`}>
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {toastType === 'success' ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500" />
                )}
              </div>
              <div className="ml-3 w-0 flex-1">
                <p className={`text-sm font-medium ${
                  toastType === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {toastMessage}
                </p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  onClick={() => setShowToast(false)}
                  className={`inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition ease-in-out duration-150`}
                >
                  <XCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Refill Hero Section - Compact */}
      <section className="py-12 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Online <span className="text-green-400">Refill</span></h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Refill your prescriptions quickly and easily online
          </p>
        </div>
      </section>

      {/* Refill Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <Pill className="h-6 w-6 text-green-600 mr-2" />
                Prescription Refill Request
              </CardTitle>
              <CardDescription className="text-gray-600">
                Please provide the following information to refill your prescription at QuickRX Pharmacy
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                      <Input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                      <Input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="914-449-1218"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Simple RX Number Field */}
                <div>
                  <label htmlFor="rxNumber" className="block text-sm font-medium text-gray-700 mb-1">RX Number *</label>
                  <Input
                    id="rxNumber"
                    type="text"
                    name="rxNumber"
                    placeholder="e.g., RX1234567"
                    value={formData.rxNumber}
                    onChange={handleInputChange}
                    required
                    className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                  />
                </div>

                {/* Pickup/Delivery Preferences */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pickup/Delivery Preferences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupMethod" className="block text-sm font-medium text-gray-700 mb-1">Preferred Method *</label>
                      <Select 
                        name="pickupMethod" 
                        value={formData.pickupMethod} 
                        onValueChange={(value) => handleSelectChange('pickupMethod', value)}
                        required
                      >
                        <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-green-500">
                          <SelectValue placeholder="Select pickup method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pickup">In-Store Pickup</SelectItem>
                          <SelectItem value="delivery">Home Delivery</SelectItem>
                          <SelectItem value="driveThru">Drive-Thru Pickup</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Pickup/Delivery Date</label>
                      <Input
                        id="pickupDate"
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <Textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    placeholder="Any special instructions or additional information we should know"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    className="bg-white border-gray-300 text-gray-900 focus:border-green-500 min-h-[80px]"
                  />
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="agreeToTerms" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        agreeToTerms: checked
                      })
                    }}
                    required
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="agreeToTerms"
                      className="text-sm text-gray-700 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the <Link to="/terms-of-service" className="text-green-600 hover:underline">Terms of Service</Link>, <Link to="/privacy-policy" className="text-green-600 hover:underline">Privacy Policy</Link>, and <Link to="/hipaa-notice" className="text-green-600 hover:underline">HIPAA Notice of Privacy Practices</Link>.
                    </Label>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> By submitting this form, you authorize QuickRX Pharmacy to process your prescription refill request. We will contact you if there are any issues with your refill. Please allow 24-48 hours for processing.
                  </p>
                </div>

                <p style={{fontSize: '0.9em', color: '#666', marginTop: '20px'}}>
                  Your information is secure. We follow HIPAA privacy rules and will only use this form to begin your prescription refill. Please avoid sharing medical history or insurance details unless requested.
                </p>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-4 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" 
                  disabled={!formData.agreeToTerms || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Submit Refill Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Use Our Online Refill Service?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the convenience of our online prescription refill service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Quick & Easy</h3>
              <p className="text-gray-600">Refill your prescriptions in just a few minutes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure & Private</h3>
              <p className="text-gray-600">Your information is protected with HIPAA-compliant security</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Convenient Options</h3>
              <p className="text-gray-600">Choose pickup or free delivery to your home</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Refill Reminders</h3>
              <p className="text-gray-600">Get notifications when it's time to refill your medications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Legal Information</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Important information about our policies and practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900">Privacy Policy</CardTitle>
                <CardDescription className="text-gray-600">
                  How we collect, use, and protect your personal information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our Privacy Policy explains what personal information we collect, how we use it, and the steps we take to protect your privacy.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200" asChild>
                  <Link to="/privacy-policy" className="text-white">Read Privacy Policy</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900">Terms of Service</CardTitle>
                <CardDescription className="text-gray-600">
                  Rules and guidelines for using our website and services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our Terms of Service outline the rules, guidelines, and limitations for using our website and pharmacy services.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200" asChild>
                  <Link to="/terms-of-service" className="text-white">Read Terms of Service</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-gray-900">HIPAA Notice</CardTitle>
                <CardDescription className="text-gray-600">
                  How we handle your protected health information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our HIPAA Notice of Privacy Practices explains how we use and disclose your protected health information.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 transition-all duration-200" asChild>
                  <Link to="/hipaa-notice" className="text-white">Read HIPAA Notice</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              For more information about our legal policies, please contact our compliance officer at <a href="mailto:info@quickrx134.com" className="text-green-600 hover:underline">info@quickrx134.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Refill

