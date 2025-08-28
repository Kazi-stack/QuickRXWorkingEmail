import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { 
  DollarSign, Pill, Heart, Eye, Wind, Syringe, Shield, Users, 
  CheckCircle, Phone, Mail, MapPin, AlertTriangle, FileText,
  ArrowRight, Star, Clock, Truck
} from 'lucide-react'

function CopayAssistance() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 shadow-lg">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Copay <span className="text-green-400">Assistance Program</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get help with prescription costs through our comprehensive copay assistance program. 
              We're here to make your medications more affordable.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Special Services Section - Matching Reference Design */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Assistance Programs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services to help reduce your prescription costs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <DollarSign className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Manufacturer Coupons</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Access manufacturer-sponsored savings programs for brand medications</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold group" asChild>
                  <a href="/copay/manufacturer-coupons">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Patient Assistance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Financial hardship programs for qualifying patients</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold group" asChild>
                  <a href="/copay/patient-assistance">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Shield className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Insurance Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Help navigating insurance claims and prior authorizations</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold group" asChild>
                  <a href="/copay/insurance-support">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Pill className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">Generic Options</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Counseling on cost-effective generic alternatives</p>
                <Button variant="link" className="text-green-600 hover:text-green-700 p-0 font-semibold group" asChild>
                  <a href="/copay/generic-options">
                    Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Assistance Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Assistance Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer copay assistance for a wide range of medication categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Weight Loss Medications */}
            <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-red-500 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Weight Loss Medications</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Assistance for weight management prescriptions</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Wegovy®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Zepbound™</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Migraine Medications */}
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Pill className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Migraine Medications</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Relief for migraine and headache treatments</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Ubrelvy®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Nurtec®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Qulipta®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Aimovig®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Diabetic Medications */}
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Diabetic Medications</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Support for diabetes management medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Jardiance®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Janumet®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Farxiga®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Januvia®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Ozempic®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Mounjaro®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Insulins */}
            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Syringe className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Insulins</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Assistance for insulin medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Humalog®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Novolog®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Lantus®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Basaglar®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Blood Thinners */}
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Blood Thinners</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Support for anticoagulant medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Eliquis®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Xarelto®</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Eye Drops */}
            <Card className="bg-teal-50 border-teal-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-teal-500 p-3 rounded-full">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Eye Drops</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Assistance for ophthalmology medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Restasis®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Xiidra®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Combigan®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Lumigan®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Vyzulta®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Multiple Sclerosis Medications */}
            <Card className="bg-indigo-50 border-indigo-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-indigo-500 p-3 rounded-full">
                    <Pill className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Multiple Sclerosis</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Support for MS treatment medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Aubagio®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Tecfidera®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Copaxone®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Avonex®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Gilenya®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Rheumatoid Arthritis Medications */}
            <Card className="bg-amber-50 border-amber-200 hover:shadow-lg transition-all duration-300 text-center">
              <CardHeader className="pb-3">
                <div className="flex flex-col items-center space-y-3">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 font-bold">Rheumatoid Arthritis</CardTitle>
                    <p className="text-gray-600 text-sm mt-2">Assistance for RA treatment medications</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <ul className="space-y-2">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Humira®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Enbrel®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Actemra®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Orencia®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Xeljanz®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">Rinvoq®</span>
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      <span className="text-gray-800 font-medium">And more...</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-blue-900">How Our Program Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to start saving on your prescription medications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Bring Your Prescription</h3>
              <p className="text-gray-600">Visit our pharmacy with your prescription or transfer from another pharmacy</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">We Check for Savings</h3>
              <p className="text-gray-600">Our pharmacists search for available copay assistance programs and discounts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Start Saving</h3>
              <p className="text-gray-600">Apply the best available discount and enjoy reduced prescription costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-blue-900">
                Why Choose Our <span className="text-green-600">Copay Assistance</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Our pharmacists are trained to find the best savings options for your medications</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">No Hidden Fees</h3>
                    <p className="text-gray-600">Our assistance program is completely free - no enrollment or membership fees</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">We monitor your savings and update programs as they become available</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Confidential Service</h3>
                    <p className="text-gray-600">Your information is kept private and secure throughout the process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Start Saving Today</h3>
                <p className="text-gray-600">Contact us to learn about available copay assistance programs</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <a href="tel:914-449-1218" className="text-gray-700 font-medium">
                    914-449-1218
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <a href="mailto:Info@Quickrx134.com" className="text-gray-700 font-medium">
                    Info@Quickrx134.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <a 
                    href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 font-medium hover:text-green-600 transition-colors"
                  >
                    134 North Ave Ste 8, New Rochelle, NY
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 font-medium">Monday - Friday: 9AM - 5PM</span>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Contact Us Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer Section - Circular Icon Style */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Copay Assistance Disclaimer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important information about our copay assistance programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manufacturer Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Our pharmacy offers support in helping eligible patients access manufacturer-sponsored copay assistance programs and savings cards. These programs are administered and provided directly by pharmaceutical manufacturers and are subject to their terms and conditions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Eligibility & Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                We do not sponsor, administer, or guarantee any copay assistance program, nor are we affiliated with the manufacturers that provide them. Eligibility is determined solely by the program sponsor (manufacturer), and patients are responsible for complying with all applicable terms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Restrictions</h3>
              <p className="text-gray-600 leading-relaxed">
                Copay assistance programs are not valid for prescriptions paid for, in whole or in part, by any state or federal healthcare program such as Medicare, Medicaid, or Tricare. Information provided is for educational purposes only.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 text-center">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <FileText className="h-6 w-6 text-blue-600" />
              <h4 className="text-lg font-semibold text-blue-900">Educational Information Only</h4>
            </div>
            <p className="text-blue-800">
              Information provided on this website is for educational purposes only and should not be considered financial or legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Saving on Your Medications?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact QUICKRX PHARMACY today to learn about available copay assistance programs for your prescriptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Call 914-449-1218
            </Button>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 border-2 border-white">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>
        </div>
      </section>

      {/* Trademark Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <p style={{fontSize: '0.8rem', color: '#666', marginTop: '1rem'}}>
              All product names, logos, and brands are property of their respective owners. All company, product, and service names used in this website are for identification purposes only. Use of these names, trademarks, and brands does not imply endorsement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CopayAssistance

