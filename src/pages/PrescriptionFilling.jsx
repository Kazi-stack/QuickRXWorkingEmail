import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Pill, CheckCircle, Clock, FileText, Truck, Shield } from 'lucide-react'
import pharmacyShelves from '../assets/images/processed/pharmacy-shelves-cropped.png'
import prescriptionFillingDoctor from '../assets/prescription-filling-doctor.jpg'

function PrescriptionFilling() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Prescription <span className="text-green-400">Filling</span> Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fast, accurate prescription filling with expert consultation from our licensed pharmacists
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Expert Prescription Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                At QuickRX Pharmacy, we pride ourselves on providing fast, accurate prescription filling services with the personal touch of expert consultation. Our team of licensed pharmacists ensure that every prescription is filled correctly and efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that your time is valuable, which is why we've streamlined our prescription filling process to minimize wait times while maintaining the highest standards of accuracy and care.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Fast service with minimal wait times</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Accurate dispensing by licensed pharmacists</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Personalized consultation with every prescription</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Multiple convenient refill options</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={prescriptionFillingDoctor} 
                alt="Doctor writing prescription - professional healthcare service" 
                className="rounded-lg shadow-xl w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Prescription Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We offer a comprehensive range of prescription services to meet all your medication needs
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pill className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">New Prescriptions</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>We accept new prescriptions in multiple formats:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Electronic prescriptions from your doctor</li>
                    <li>Paper prescriptions brought to our pharmacy</li>
                    <li>Prescriptions called in by your healthcare provider</li>
                    <li>Transferred prescriptions from other pharmacies</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Prescription Refills</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Multiple convenient ways to refill your prescriptions:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Online through our website or mobile app</li>
                    <li>By phone using our automated system</li>
                    <li>In person at our pharmacy counter</li>
                    <li>Automatic refills for maintenance medications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Medication Synchronization</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Simplify your medication routine:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Align all your prescription refills to the same date</li>
                    <li>Reduce multiple trips to the pharmacy</li>
                    <li>Improve medication adherence</li>
                    <li>Regular medication reviews with our pharmacists</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Prescription Transfers</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Easy transfer of prescriptions to our pharmacy:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>We handle the entire transfer process for you</li>
                    <li>Quick and seamless transition</li>
                    <li>No interruption in your medication therapy</li>
                    <li>Comprehensive medication review upon transfer</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Medication Packaging</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Specialized packaging options for your convenience:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Blister packs for daily medication organization</li>
                    <li>Easy-open caps for those with arthritis</li>
                    <li>Child-resistant containers for safety</li>
                    <li>Travel-friendly packaging for medications on-the-go</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Prescription Counseling</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <p>Expert advice with every prescription:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Detailed information about your medications</li>
                    <li>Potential side effects and how to manage them</li>
                    <li>Drug interaction checks with current medications</li>
                    <li>Tips for maximizing medication effectiveness</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Fill Your Prescription?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience our fast, accurate prescription filling services today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link to="/refill">Request a Refill</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white" asChild>
                <Link to="/transfer">Transfer a Prescription</Link>
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

export default PrescriptionFilling

