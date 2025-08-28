import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'
import { Heart, CheckCircle, Clock, Calendar, Phone, Mail } from 'lucide-react'

function HealthScreening() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Health Screening Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive health screenings to help you monitor and maintain your well-being
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
                <Link to="/contact">Schedule a Screening</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
                <Link to="/contact">Contact Us</Link>
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
              <h2 className="text-3xl font-bold mb-6 text-blue-900">Why Regular Health Screenings Matter</h2>
              <p className="text-gray-700 mb-6">
                Regular health screenings are an essential part of preventive healthcare. They help detect potential health issues before they become serious problems. At QUICKRX PHARMACY, we offer a variety of health screening services to help you stay on top of your health.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">Our Comprehensive Screening Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Blood Pressure Screening:</span> Regular monitoring to prevent hypertension-related complications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Cholesterol Testing:</span> Comprehensive lipid panel to assess cardiovascular health</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Diabetes Screening:</span> Blood glucose testing to detect prediabetes and diabetes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Body Mass Index (BMI):</span> Assessment of weight status relative to height</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><span className="font-medium text-blue-800">Bone Density Screening:</span> Early detection of osteoporosis risk</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-blue-900">The Health Screening Process</h3>
              <p className="text-gray-700 mb-6">
                Our health screening process is designed to be convenient, comprehensive, and informative. Here's what you can expect:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Initial Consultation</h4>
                  <p className="text-gray-600">
                    Meet with our healthcare professional to discuss your health history and screening needs.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Screening Tests</h4>
                  <p className="text-gray-600">
                    Undergo the recommended screening tests based on your age, gender, and risk factors.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <span className="text-blue-800 font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-blue-900">Results & Guidance</h4>
                  <p className="text-gray-600">
                    Receive your results with clear explanations and personalized health recommendations.
                  </p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Benefits of Regular Health Screenings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Early Detection</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Identify potential health issues before symptoms appear, when they're easier to treat.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Personalized Health Insights</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Gain valuable information about your current health status and risk factors.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Peace of Mind</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Reduce anxiety by confirming good health or addressing concerns promptly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl border border-blue-100">
                  <div className="flex items-center mb-3">
                    <Heart className="h-5 w-5 text-green-600 mr-2" />
                    <h4 className="font-semibold text-blue-900">Cost-Effective Healthcare</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Prevention and early intervention are typically less expensive than treating advanced conditions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-blue-50 border-blue-100 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Schedule a Screening</h3>
                  <p className="text-gray-700 mb-4">
                    Take the first step toward better health by scheduling a screening today.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">Available Monday-Friday</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-600 mr-3" />
                      <span className="text-gray-700">9:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white" asChild>
                    <Link to="/contact">Book Appointment</Link>
                  </Button>
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
                  <Button className="w-full mt-6 bg-white text-blue-900 hover:bg-blue-50 border-2 border-white font-semibold shadow-lg" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-blue-900">Did You Know?</h3>
                <p className="text-gray-700 mb-4">
                  Regular health screenings can detect conditions like high blood pressure and diabetes before they cause symptoms.
                </p>
                <p className="text-gray-700 italic border-l-4 border-green-500 pl-4">
                  "An ounce of prevention is worth a pound of cure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Health?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Schedule a health screening today and take a proactive step toward better health and well-being.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white shadow-lg" asChild>
            <Link to="/contact">Schedule Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HealthScreening

