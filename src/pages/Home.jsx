import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Phone, Shield, Truck, Users, Heart, Pill, Stethoscope, Calendar, CheckCircle, Star, Clock, MapPin, Mail, DollarSign, Award, Loader2 } from 'lucide-react'
import { getApiUrl } from '@/lib/test-utils.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import pharmacyInterior from '../assets/images/processed/pharmacy-interior-cropped.png'
import pharmacyShelves from '../assets/images/processed/pharmacy-shelves-cropped.png'
import pharmacyStorefront from '../assets/images/storefront.png'

function Home() {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmitFeedback = async () => {
    if (!rating || !feedback) {
      setSubmitStatus({ type: 'error', message: 'Please provide a rating and feedback.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Use the smart BASE_URL resolver for consistent API calls
      const apiUrl = getApiUrl('/api/feedback')
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rating, feedback, name, email }),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you for your feedback!' })
        setRating(0)
        setFeedback('')
        setName('')
        setEmail('')
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to submit feedback. Please try again.' })
      }
    } catch (error) {
      console.error('Feedback submission error:', error)
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
          <div className="pill-with-line absolute bottom-20 right-1/3 w-5 h-10 bg-white opacity-10 rounded-full transform rotate-30 animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="pill-with-line absolute top-16 left-1/3 w-9 h-18 bg-green-400 opacity-8 rounded-full transform -rotate-30 animate-bounce" style={{animationDelay: '1.5s', animationDuration: '5s'}}></div>
          <div className="pill-with-line absolute bottom-32 left-16 w-6 h-12 bg-white opacity-12 rounded-full transform rotate-60 animate-pulse" style={{animationDelay: '2.5s'}}></div>
          <div className="pill-with-line absolute top-40 right-1/4 w-8 h-16 bg-green-300 opacity-10 rounded-full transform -rotate-60 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.5s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Your Trusted <span className="text-green-400">Neighborhood</span> Pharmacy
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-blue-100">
                Providing exceptional pharmaceutical care and health services to our community. 
                Your health is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </Link>
                </Button>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 border-2 border-white font-semibold shadow-lg" asChild>
                  <Link to="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <img 
                src={pharmacyStorefront} 
                alt="QuickRX Pharmacy storefront" 
                className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Special Services</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Comprehensive services designed to make your life easier and healthier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg">Health Screening</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">Comprehensive health screenings including blood pressure, cholesterol, and diabetes tests</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold" asChild>
                  <Link to="/health-screening">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Pill className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg">Vaccination</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">Protect yourself and your family with our convenient vaccination services for flu, COVID-19, and more</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold" asChild>
                  <Link to="/vaccinations">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="bg-gradient-to-br from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg">Health Consultations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">Schedule one-on-one consultations with our expert pharmacists for personalized health advice</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold" asChild>
                  <Link to="/health-consultations">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 hover:border-green-400 hover:-translate-y-2">
              <CardHeader className="text-center pb-2">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900 text-lg">Copay Assistance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4 text-sm">Get help reducing your prescription costs with our copay assistance programs and savings options</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold" asChild>
                  <Link to="/copay-assistance">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Competitive Cash Prices Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900">
              Competitive Cash Prices
            </h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-12">
              Save more on your medications with our competitive cash pricing. No insurance? No problem! 
              Our transparent, affordable prices help you get the medications you need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden fees or surprise costs - know exactly what you'll pay upfront</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mb-4 shadow-lg">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Best Value</h3>
                <p className="text-gray-600">Compare our prices - we offer competitive rates for quality medications</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Instant Savings</h3>
                <p className="text-gray-600">Start saving immediately - no membership or signup required</p>
              </div>
            </div>
            <div className="mt-10">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg" asChild>
                <Link to="/contact">Ask About Our Cash Prices</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
        {/* Decorative Small Leafs - Similar to Logo */}
        <div className="absolute left-10 top-20 w-8 h-8 opacity-30 pointer-events-none transform rotate-12">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute left-20 top-32 w-6 h-6 opacity-25 pointer-events-none transform -rotate-15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute left-8 top-48 w-7 h-7 opacity-35 pointer-events-none transform rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-16 top-24 w-8 h-8 opacity-30 pointer-events-none transform -rotate-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-8 top-40 w-6 h-6 opacity-25 pointer-events-none transform rotate-60">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-24 top-56 w-7 h-7 opacity-35 pointer-events-none transform -rotate-45">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute left-32 top-64 w-6 h-6 opacity-20 pointer-events-none transform rotate-20">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="absolute right-40 top-72 w-8 h-8 opacity-30 pointer-events-none transform -rotate-15">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 10 C30 10, 20 25, 20 40 C20 55, 30 70, 50 80 C70 70, 80 55, 80 40 C80 25, 70 10, 50 10 Z" fill="#22c55e" opacity="0.8"/>
            <path d="M50 15 L50 75" stroke="#14532d" strokeWidth="2" fill="none" opacity="0.4"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-blue-900">
                Why Choose <span className="text-green-600">QUICKRX PHARMACY</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Expert Pharmacists</h3>
                    <p className="text-gray-600">Licensed professionals with years of experience in pharmaceutical care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Insurance Accepted</h3>
                    <p className="text-gray-600">We work with all major insurance providers for your convenience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Fast Service</h3>
                    <p className="text-gray-600">Quick prescription filling with accurate dispensing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-900">Free Parking Available</h3>
                    <p className="text-gray-600">Convenient free parking right outside our pharmacy</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-lg transform rotate-3"></div>
                <img 
                  src={pharmacyShelves} 
                  alt="QuickRX Pharmacy shelves with products" 
                  className="relative rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">What Our Customers Say</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  "Great service and friendly staff. They helped me find a cheaper generic option for my prescription."
                </p>
                <div className="border-t border-blue-100 pt-3">
                  <p className="font-semibold text-blue-900 text-sm">Aisha K.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-2 border-green-100 hover:shadow-xl hover:border-green-300 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  "Fast prescription filling and they always explain my medications clearly."
                </p>
                <div className="border-t border-green-100 pt-3">
                  <p className="font-semibold text-blue-900 text-sm">Carlos M.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-sm">
                  "Convenient location and they helped me save money on my copay."
                </p>
                <div className="border-t border-blue-100 pt-3">
                  <p className="font-semibold text-blue-900 text-sm">Jennifer L.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Core Values</h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              The principles that guide everything we do at QUICKRX PHARMACY
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Compassionate Care</h3>
              <p className="text-gray-600">We treat every customer with empathy, understanding, and genuine concern for their health and wellbeing.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Trust & Integrity</h3>
              <p className="text-gray-600">We maintain the highest ethical standards and build lasting relationships based on honesty and reliability.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Community Focus</h3>
              <p className="text-gray-600">We are deeply committed to serving our local community and improving the health of our neighbors.</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do, from pharmaceutical care to customer service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute bottom-40 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute top-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Experience Better <span className="text-green-400">Healthcare</span>?
              </h2>
              <p className="text-lg sm:text-xl mb-8 text-blue-100">
                Contact us today to learn more about our services or to schedule a consultation with one of our expert pharmacists.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-white">
                    <a href="tel:914-449-1218" className="font-medium">
                      914-449-1218
                    </a>
                    <p className="text-blue-200 text-sm">Call us anytime</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-white">
                    <a href="mailto:Info@Quickrx134.com" className="font-medium">
                      Info@Quickrx134.com
                    </a>
                    <p className="text-blue-200 text-sm">Email us your questions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-white">
                    <a 
                      href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-green-400 transition-colors"
                    >
                      <p className="font-medium">134 North Ave Ste 8</p>
                      <p className="text-blue-200 text-sm">New Rochelle, NY 10801</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-800 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                  <div className="text-white">
                    <p className="font-medium">Monday - Friday: 9AM - 5PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={pharmacyInterior} 
                alt="QuickRX Pharmacy interior" 
                className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-16 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Rate Your Experience</h2>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              We value your feedback! Let us know how we're doing and help us improve our services.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
              <h3 className="text-2xl font-bold">Customer Satisfaction Survey</h3>
              <p className="text-blue-100">Your opinion matters to us at QUICKRX PHARMACY</p>
            </div>
            
            <div className="p-8">
              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-medium text-blue-900 mb-4">How would you rate your overall experience?</label>
                  <div className="flex items-center justify-center space-x-3">
                    {[1, 2, 3, 4, 5].map((starRating) => (
                      <button 
                        key={starRating}
                        onClick={() => setRating(starRating)}
                        className="w-12 h-12 rounded-full bg-white border-2 border-blue-200 hover:border-blue-500 flex items-center justify-center transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <Star className={`h-6 w-6 transition-colors ${
                          starRating <= rating 
                            ? 'text-yellow-500 fill-yellow-500' 
                            : 'text-blue-400 hover:text-yellow-500'
                        }`} />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-center mt-2 text-sm text-blue-600">
                      You rated us {rating} star{rating > 1 ? 's' : ''}!
                    </p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="feedback" className="block text-lg font-medium text-blue-900 mb-3">Share your feedback with us</label>
                  <textarea
                    id="feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={3}
                    className="w-full rounded-lg border border-blue-200 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    placeholder="Tell us about your experience at QUICKRX PHARMACY..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">Your Name (Optional)</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-blue-200 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">Your Email (Optional)</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-blue-200 p-3 text-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    onClick={handleSubmitFeedback}
                    disabled={rating === 0 || isSubmitting}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Feedback'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

