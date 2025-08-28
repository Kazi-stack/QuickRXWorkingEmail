import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Eye, Clock, CheckCircle, MapPin, Phone, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

function DMVEyeTest() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
            <Eye className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">DMV Eye Testing</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Skip the long lines at the DMV with our certified vision testing service. Get your eye test done quickly and conveniently at our pharmacy.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Convenient DMV Eye Testing</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our certified pharmacists are authorized to perform DMV vision screenings, saving you time and hassle. 
                No appointment necessary - just walk in during our business hours.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Testing</h3>
                    <p className="text-gray-600">Our pharmacists are certified to perform official DMV vision screenings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quick Service</h3>
                    <p className="text-gray-600">Most eye tests completed in under 10 minutes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Convenient Location</h3>
                    <p className="text-gray-600">No need to travel to the DMV - get tested right here</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">What You Need</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Valid driver's license or ID</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Prescription glasses or contacts (if you wear them)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">DMV form (if required)</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Testing Fee</h4>
                <p className="text-blue-800">$15 - Cash or card accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hours and Contact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Visit Us Today</h2>
            <p className="text-xl text-gray-600">No appointment necessary - walk-ins welcome</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-gray-900">Monday - Friday</p>
                <p className="text-lg text-gray-600">9:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white">
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-blue-600 mb-4 mx-auto" />
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-gray-900">(914) 449-1218</p>
                <p className="text-gray-600">Call ahead if you have questions</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DMVEyeTest

