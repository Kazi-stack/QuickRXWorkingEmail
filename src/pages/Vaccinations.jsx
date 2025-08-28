import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Shield, CheckCircle, Calendar, Users, Globe, Syringe } from 'lucide-react'
import pharmacyInterior from '../assets/images/processed/pharmacy-interior-cropped.png'
import vaccinationLab from '../assets/vaccination-lab.jpg'

function Vaccinations() {
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Vaccination <span className="text-green-400">Services</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Complete immunization services for all ages administered by our certified pharmacists
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Comprehensive Vaccination Services</h2>
              <p className="text-lg text-gray-600 mb-6">
                At QuickRX Pharmacy, we offer a wide range of vaccination services to help protect you and your family from preventable diseases. Our certified pharmacists are trained to administer vaccines safely and effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Vaccinations are one of the most effective ways to prevent infectious diseases and maintain public health. We make getting your vaccines convenient, with no appointment necessary for most immunizations.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Administered by certified immunizing pharmacists</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Most insurance plans accepted</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Convenient walk-in service (no appointment needed)</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Digital record of vaccinations provided</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={vaccinationLab} 
                alt="Vaccination preparation in laboratory setting" 
                className="rounded-lg shadow-xl w-full max-w-lg h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Available Vaccines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We offer a comprehensive range of vaccines for children, adolescents, and adults
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Seasonal Vaccines</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Flu shots (standard and high-dose)</li>
                    <li>COVID-19 vaccines and boosters</li>
                    <li>Pneumonia vaccines</li>
                    <li>RSV vaccines</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Adult Vaccines</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Tdap (Tetanus, Diphtheria, Pertussis)</li>
                    <li>Shingles (Shingrix)</li>
                    <li>Hepatitis A and B</li>
                    <li>HPV (Human Papillomavirus)</li>
                    <li>Meningitis</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-green-300">
                <CardHeader className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-gray-900">Travel Vaccines</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600">
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Typhoid</li>
                    <li>Yellow Fever</li>
                    <li>Japanese Encephalitis</li>
                    <li>Malaria prevention consultation</li>
                    <li>Travel health advice</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Our Vaccination Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Check In</h3>
                <p className="text-gray-600">Complete a brief health screening and consent form</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Consultation</h3>
                <p className="text-gray-600">Speak with our pharmacist about the vaccine and any questions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Vaccination</h3>
                <p className="text-gray-600">Receive your vaccine in our private consultation area</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Documentation</h3>
                <p className="text-gray-600">Receive documentation and schedule follow-up if needed</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <Calendar className="h-8 w-8 text-green-600 mr-4" />
                  <CardTitle className="text-gray-900">Vaccination Schedules</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We follow the CDC's recommended vaccination schedules for all age groups. Our pharmacists can help you determine which vaccines you or your family members may need based on:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Age and health status</li>
                  <li>Previous vaccination history</li>
                  <li>Travel plans</li>
                  <li>Occupation and lifestyle factors</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <Syringe className="h-8 w-8 text-green-600 mr-4" />
                  <CardTitle className="text-gray-900">Vaccine Record Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We maintain complete records of all vaccinations administered at our pharmacy. Our services include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Digital vaccination records</li>
                  <li>Reminder notifications for booster shots</li>
                  <li>Vaccination certificates for travel or work</li>
                  <li>Coordination with your primary healthcare provider</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Get Vaccinated?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Walk in today or schedule an appointment for your convenience
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <Link to="/contact">Schedule Vaccination</Link>
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

export default Vaccinations

