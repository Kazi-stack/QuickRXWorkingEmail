import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Truck, CheckCircle, Clock, MapPin, Package, Calendar } from 'lucide-react'
import pharmacyStorefront from '../assets/images/processed/pharmacy-storefront.png'
import deliveryHands from '../assets/delivery-hands.jpg'
import deliveryHandsNew from '../assets/delivery-hands-new.jpg'

function HomeDelivery() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Home <span className="text-green-400">Delivery</span> Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Free, same-day delivery service for your prescriptions and essential health products
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Convenient Delivery to Your Door</h2>
              <p className="text-lg text-gray-600 mb-6">
                At QuickRX Pharmacy, we understand that getting to the pharmacy isn't always convenient. That's why we offer <strong>free, same-day delivery</strong> of your prescriptions and essential health products directly to your home or office.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our delivery service is designed to make managing your medications easier and more convenient, especially for those with mobility challenges, busy schedules, or ongoing health concerns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Free same-day delivery</strong> for local addresses</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Free shipping</strong> for mail orders outside our delivery area</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Secure, contactless delivery options</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Real-time tracking of your delivery</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img 
                src={deliveryHandsNew} 
                alt="Delivery service - hands exchanging delivery bag" 
                className="rounded-lg shadow-xl w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">How Our Delivery Service Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We've made getting your medications delivered as simple as possible
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Order</h3>
                <p className="text-gray-600">Request your prescriptions or products via phone, online, or our mobile app</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Prepare</h3>
                <p className="text-gray-600">Our pharmacists prepare and verify your order with the same care as in-store</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Deliver</h3>
                <p className="text-gray-600">Our delivery team brings your order directly to your door</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Receive</h3>
                <p className="text-gray-600">Receive your medications with contactless delivery options available</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <MapPin className="h-8 w-8 text-green-600 mr-4" />
                  <CardTitle className="text-gray-900">Delivery Area</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We offer free same-day delivery to the following areas:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>New Rochelle</li>
                  <li>Pelham</li>
                  <li>Larchmont</li>
                  <li>Mamaroneck</li>
                  <li>Scarsdale</li>
                  <li>And surrounding communities within 10 miles</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  For addresses outside our delivery area, we offer free shipping via USPS or UPS.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <Clock className="h-8 w-8 text-green-600 mr-4" />
                  <CardTitle className="text-gray-900">Delivery Schedule</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our delivery schedule is designed to ensure you get your medications when you need them:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li><strong>Monday - Friday:</strong> Orders placed by 2pm delivered same day</li>
                  <li><strong>Saturday:</strong> Orders placed by 12pm delivered same day</li>
                  <li><strong>Sunday:</strong> Limited delivery available for urgent medications</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  For specific delivery time requests, please call us at
                  <a href="tel:914-449-1218">
                    914-449-1218
                  </a>.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">What We Deliver</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Our delivery service includes a wide range of products
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Prescription Medications</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>New prescriptions</li>
                    <li>Prescription refills</li>
                    <li>Maintenance medications</li>
                    <li>Specialty medications</li>
                    <li>Compounded medications</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Over-the-Counter Products</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Pain relievers</li>
                    <li>Cold and flu medications</li>
                    <li>Vitamins and supplements</li>
                    <li>First aid supplies</li>
                    <li>Personal care items</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Medical Supplies</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Diabetes testing supplies</li>
                    <li>Blood pressure monitors</li>
                    <li>Mobility aids</li>
                    <li>Wound care products</li>
                    <li>Incontinence supplies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the convenience of our free delivery service today
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link to="/refill">Request a Prescription</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white" asChild>
                <Link to="/transfer">Transfer Prescriptions</Link>
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

export default HomeDelivery

