import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'
import { DollarSign, Globe, Clock, CheckCircle, Phone, Mail, Users } from 'lucide-react'

function Moneygram() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Moneygram Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Fast, secure, and convenient money transfer services available at QUICKRX PHARMACY
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
                <Link to="/contact">Send Money Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
                <Link to="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Send Money Worldwide with Moneygram</h2>
              <p className="text-gray-700 mb-6">
                QUICKRX PHARMACY is proud to offer Moneygram services, providing you with a convenient way to send money to friends and family around the world. Our in-store Moneygram services are fast, secure, and reliable, making it easy to support your loved ones no matter where they are.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Why Choose Moneygram at QUICKRX PHARMACY?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Global Reach:</span> Send money to over 200 countries and territories worldwide</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Fast Transfers:</span> Money typically available within minutes for pickup</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Competitive Rates:</span> Great exchange rates and reasonable fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Convenient Location:</span> Send money while picking up your prescriptions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Trusted Service:</span> Moneygram has been a leader in money transfers for over 80 years</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-blue-900">How It Works</h3>
              <p className="text-gray-700 mb-6">
                Sending money with Moneygram at QUICKRX PHARMACY is quick and simple:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Visit Our Store</h4>
                  <p className="text-gray-600">
                    Come to QUICKRX PHARMACY with your ID and the recipient's information.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Complete the Form</h4>
                  <p className="text-gray-600">
                    Fill out a simple form with transfer details and pay the amount plus fee.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Money Sent</h4>
                  <p className="text-gray-600">
                    Receive a reference number to share with your recipient for pickup.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Available Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Send Money</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Send money to friends and family worldwide for cash pickup or bank deposit.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Receive Money</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pick up money sent to you from anywhere in the world.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Globe className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Bill Payments</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pay bills to hundreds of companies across various industries.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Money Orders</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Purchase secure money orders for various payment needs.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-blue-50 border-blue-100 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Business Hours</h3>
                  <p className="text-gray-700 mb-4">
                    Visit us during these hours to use our Moneygram services:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Saturday: 10:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Sunday: Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-green-400 mr-3" />
                        <a href="tel:914-449-1218">
                          914-449-1218
                        </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-green-400 mr-3" />
                      <a href="mailto:Info@Quickrx134.com">
                        Info@Quickrx134.com
                      </a>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-6 border-white text-white hover:bg-white/20" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-blue-900">What You'll Need</h3>
                <p className="text-gray-700 mb-4">
                  To send money through Moneygram, please bring:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Valid government-issued photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Recipient's full name (as it appears on their ID)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Destination country and city</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Payment for transfer amount and fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Send Money?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Visit QUICKRX PHARMACY today to use our convenient Moneygram services.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Moneygram

