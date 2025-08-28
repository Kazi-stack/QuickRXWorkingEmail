import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Phone, Mail, MapPin, Clock, Loader2 } from 'lucide-react'
import { getApiUrl } from '@/lib/test-utils.js'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
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
      const apiUrl = getApiUrl('/api/contact')
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your message! We will contact you soon.' })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Contact Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Contact <span className="text-green-400">Us</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with our team for any questions or to schedule a consultation
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Phone</h3>
                    <a href="tel:914-449-1218" className="text-gray-600 mb-1">
                      (914) 449-1218
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Email</h3>
                    <a href="mailto:Info@Quickrx134.com" className='text-gray-600 mb-1'>
                      Info@Quickrx134.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Address</h3>
                    <a 
                      href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <p>134 North Ave Ste 8</p>
                      <p>New Rochelle, NY 10801</p>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Hours</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <div>Monday - Friday:</div>
                      <div>9:00 AM - 5:00 PM</div>
                      <div>Saturday:</div>
                      <div>Closed</div>
                      <div>Sunday:</div>
                      <div>Closed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-800 text-white p-3 rounded-full hover:bg-blue-900 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible
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
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone Number</label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="914-449-1218"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-white border-gray-300 text-gray-900 focus:border-green-500 min-h-[150px]"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Find Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're conveniently located on North Avenue in New Rochelle, with easy access and parking
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8234567890123!2d-73.7834567890123!3d40.9234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s134%20North%20Ave%20Ste%208%2C%20New%20Rochelle%2C%20NY%2010801!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QuickRX Pharmacy Location"
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Directions & Parking</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located on North Avenue in New Rochelle, our pharmacy is easily accessible by car or public transportation. 
              We offer convenient parking for our customers, and we're just minutes away from major highways and local bus routes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

