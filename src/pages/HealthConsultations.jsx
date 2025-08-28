import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Stethoscope, CheckCircle, Clipboard, Heart, Brain, Activity } from 'lucide-react'
import pharmacyInterior from '../assets/images/processed/pharmacy-interior-cropped.png'
import healthConsultationPills from '../assets/health-consultation-pills.jpg'

function HealthConsultations() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Health <span className="text-green-400">Consultations</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional health advice and medication management from our expert pharmacists
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert Health Consultation Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                At QuickRX Pharmacy, our health consultation services go beyond simply filling prescriptions. Our team of experienced pharmacists provides personalized advice and support to help you manage your health effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you have questions about your medications, need help managing a chronic condition, or want advice on general wellness, our pharmacists are here to provide expert guidance tailored to your specific needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">One-on-one consultations with licensed pharmacists</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Comprehensive medication reviews</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Personalized health management plans</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Private consultation area for confidential discussions</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={healthConsultationPills} 
                alt="Medication consultation - pills and prescription bottles" 
                className="rounded-lg shadow-xl w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Consultation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We offer a wide range of health consultation services to support your overall wellbeing
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clipboard className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Medication Therapy Management</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Comprehensive medication review and optimization:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Review of all current medications</li>
                    <li>Identification of potential drug interactions</li>
                    <li>Strategies to improve medication effectiveness</li>
                    <li>Personalized action plan for medication management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Chronic Disease Management</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Specialized support for managing chronic conditions:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Diabetes management and blood glucose monitoring</li>
                    <li>Hypertension monitoring and management</li>
                    <li>Asthma and COPD management</li>
                    <li>Heart disease and cholesterol management</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Health Screenings</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Regular health monitoring services:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Blood pressure monitoring</li>
                    <li>Cholesterol screening</li>
                    <li>Blood glucose testing</li>
                    <li>BMI and weight management consultations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Mental Health Support</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Guidance for mental health medications and wellness:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Medication counseling for mental health conditions</li>
                    <li>Side effect management strategies</li>
                    <li>Resources for mental health support</li>
                    <li>Coordination with mental health providers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Smoking Cessation</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Support for quitting smoking:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Assessment of nicotine dependence</li>
                    <li>Personalized quit plan development</li>
                    <li>Medication options and counseling</li>
                    <li>Ongoing support and follow-up</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Wellness Consultations</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>General health and wellness guidance:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Vitamin and supplement recommendations</li>
                    <li>Nutrition and diet advice</li>
                    <li>Sleep improvement strategies</li>
                    <li>Stress management techniques</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Schedule a Consultation Today</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our pharmacists are ready to provide personalized health advice and support
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthConsultations

