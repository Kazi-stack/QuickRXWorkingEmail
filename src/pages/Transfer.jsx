import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { ArrowRight, Clock, Shield, CheckCircle, Phone, FileText, Loader2 } from 'lucide-react'
import { getApiUrl } from '@/lib/test-utils.js'

function Transfer() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    phone: '',
    email: '',
    currentPharmacy: '',
    pharmacyPhone: '',
    prescriptionNames: '',
    prescriptionNumbers: '',
    additionalInfo: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Use the smart BASE_URL resolver for consistent API calls
      const apiUrl = getApiUrl('/api/transfer')
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your prescription transfer request has been submitted. We will contact you within 24 hours to confirm the transfer.' })
        setFormData({
          firstName: '',
          lastName: '',
          dateOfBirth: '',
          phone: '',
          email: '',
          currentPharmacy: '',
          pharmacyPhone: '',
          prescriptionNames: '',
          prescriptionNumbers: '',
          additionalInfo: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit transfer request. Please try again.' })
      }
    } catch (error) {
      console.error('Transfer form submission error:', error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Transfer Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Prescription <span className="text-green-400">Transfer</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transfer your prescriptions to QuickRX Pharmacy quickly and easily. We'll handle all the details for you.
          </p>
        </div>
      </section>

      {/* Transfer Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Transfer Your Prescriptions</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll take care of the rest
            </p>
          </div>
          
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center">
                <FileText className="h-6 w-6 text-green-600 mr-2" />
                Prescription Transfer Request
              </CardTitle>
              <CardDescription className="text-gray-600">
                Please provide the following information to transfer your prescriptions to QuickRX Pharmacy
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

                {/* Current Pharmacy Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Pharmacy Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="currentPharmacy" className="block text-sm font-medium text-gray-700 mb-1">Current Pharmacy Name *</label>
                      <Input
                        id="currentPharmacy"
                        type="text"
                        name="currentPharmacy"
                        placeholder="ABC Pharmacy"
                        value={formData.currentPharmacy}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="pharmacyPhone" className="block text-sm font-medium text-gray-700 mb-1">Pharmacy Phone Number *</label>
                      <Input
                        id="pharmacyPhone"
                        type="tel"
                        name="pharmacyPhone"
                        placeholder="914-449-1218"
                        value={formData.pharmacyPhone}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Prescription Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Prescription Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="prescriptionNames" className="block text-sm font-medium text-gray-700 mb-1">Medication Names *</label>
                      <Textarea
                        id="prescriptionNames"
                        name="prescriptionNames"
                        placeholder="List all medications you want to transfer (e.g., Lisinopril 10mg, Metformin 500mg, etc.)"
                        value={formData.prescriptionNames}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500 min-h-[100px]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="prescriptionNumbers" className="block text-sm font-medium text-gray-700 mb-1">Prescription Numbers (if available)</label>
                      <Textarea
                        id="prescriptionNumbers"
                        name="prescriptionNumbers"
                        placeholder="List prescription numbers if you have them (optional but helpful)"
                        value={formData.prescriptionNumbers}
                        onChange={handleInputChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500 min-h-[80px]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <Textarea
                        id="additionalInfo"
                        name="additionalInfo"
                        placeholder="Any special instructions or additional information we should know"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500 min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> By submitting this form, you authorize QuickRX Pharmacy to contact your current pharmacy to transfer your prescriptions. We will call you to confirm the transfer and let you know when your medications are ready for pickup.
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <ArrowRight className="mr-2 h-5 w-5" />
                      Submit Transfer Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Transfer to QuickRX?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our personalized service and convenient features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Processing</h3>
              <p className="text-gray-600">Most transfers completed within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure & Private</h3>
              <p className="text-gray-600">Your information is protected and confidential</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">No Hassle</h3>
              <p className="text-gray-600">We handle all the paperwork and coordination</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Service</h3>
              <p className="text-gray-600">Dedicated pharmacists who know you by name</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 4-step process makes transferring your prescriptions easy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Submit Form</h3>
              <p className="text-gray-600">Fill out our online transfer form with your information</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">We Contact You</h3>
              <p className="text-gray-600">Our team calls to confirm details and answer questions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">We Handle Transfer</h3>
              <p className="text-gray-600">We coordinate with your current pharmacy for the transfer</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Ready for Pickup</h3>
              <p className="text-gray-600">We notify you when your medications are ready</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Transfer

