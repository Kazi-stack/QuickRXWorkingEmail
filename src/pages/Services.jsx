import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Link } from 'react-router-dom'
import { 
  Shield, Truck, Users, Heart, Pill, Stethoscope, Clipboard, Syringe, 
  Thermometer, Microscope, Eye, DollarSign, Banknote, Clock, Package, 
  Bell, CreditCard, ShoppingCart, Gift, Printer, Copy, Activity,
  Phone, MapPin, Mail, ArrowRight, CheckCircle, ChevronDown, ChevronUp
} from 'lucide-react'

function Services() {
  const [activeService, setActiveService] = useState('prescriptions')
  const [expandedCard, setExpandedCard] = useState(null)

  const services = [
    {
      id: 'prescriptions',
      icon: Pill,
      title: 'Prescription Services',
      description: 'Expert prescription services with personalized care and medication management.',
      shortDetails: 'Our licensed pharmacists provide comprehensive medication therapy management, prescription refills, drug interaction checks, and personalized counseling to ensure optimal health outcomes.',
      features: [
        'Medication therapy management',
        'Prescription refills and transfers',
        'Medication synchronization',
        'Drug interaction checks',
        'Dosage optimization',
        'Adherence counseling',
        'Side effect monitoring',
        'Generic substitution guidance'
      ],
      benefits: [
        'Improved medication effectiveness',
        'Reduced risk of adverse reactions',
        'Better health outcomes',
        'Cost savings through optimization',
        'Personalized care plans'
      ],
      highlight: 'Most Popular'
    },
    {
      id: 'dmv-eye-test',
      icon: Eye,
      title: 'DMV Eye Test',
      description: 'Skip the long lines at the DMV with our certified vision testing service.',
      shortDetails: 'State-certified vision testing performed by trained technicians using professional equipment. Get your DMV eye test completed quickly with immediate results and certification.',
      features: [
        'State-certified vision testing',
        'Quick and convenient service',
        'No appointment necessary',
        'DMV-approved results',
        'Same-day certification',
        'Walk-in availability',
        'Professional equipment',
        'Experienced technicians'
      ],
      benefits: [
        'Skip DMV waiting lines',
        'Fast 5-minute testing',
        'Immediate results',
        'Convenient location',
        'Professional service'
      ]
    },
    {
      id: 'moneygram',
      icon: DollarSign,
      title: 'Moneygram Services',
      description: 'Send and receive money worldwide with our secure in-store Moneygram services.',
      shortDetails: 'Secure international and domestic money transfers with competitive rates. Send money to family worldwide or pay bills domestically with our reliable Moneygram services.',
      features: [
        'International money transfers',
        'Domestic money transfers',
        'Bill payment services',
        'Money orders available',
        'Secure and reliable transactions',
        'Competitive exchange rates',
        'Multiple pickup locations worldwide',
        'Real-time tracking'
      ],
      benefits: [
        'Fast international transfers',
        'Secure transactions',
        'Competitive rates',
        'Global network access',
        'Convenient location'
      ]
    },
    {
      id: 'copay-assistance',
      icon: Heart,
      title: 'Copay Assistance Program',
      description: 'Get help with prescription costs through our comprehensive copay assistance program.',
      shortDetails: 'Reduce your prescription costs with manufacturer coupons, patient assistance programs, and insurance optimization. Our pharmacists help you find the best savings options available.',
      features: [
        'Prescription cost reduction',
        'Insurance claim assistance',
        'Patient assistance programs',
        'Generic medication counseling',
        'Financial hardship support',
        'Manufacturer coupon programs',
        'Medicare Part D guidance',
        'Prior authorization assistance'
      ],
      benefits: [
        'Significant cost savings',
        'Improved medication access',
        'Reduced financial burden',
        'Expert guidance',
        'Personalized assistance'
      ]
    },
    {
      id: 'health-consultations',
      icon: Stethoscope,
      title: 'Health Consultations',
      description: 'Professional health consultations and comprehensive medication reviews.',
      shortDetails: 'One-on-one consultations with our pharmacists to review your medications, discuss health concerns, and optimize your therapy for better outcomes and safety.',
      features: [
        'One-on-one medication reviews',
        'Drug interaction assessments',
        'Health and wellness counseling',
        'Chronic disease management',
        'Medication adherence support',
        'Lifestyle modification guidance',
        'Supplement recommendations',
        'Health monitoring'
      ],
      benefits: [
        'Better medication understanding',
        'Improved health outcomes',
        'Personalized care plans',
        'Enhanced safety',
        'Professional guidance'
      ]
    },
    {
      id: 'home-delivery',
      icon: Truck,
      title: 'Home Delivery',
      description: 'Convenient delivery service directly to your door with same-day options.',
      shortDetails: 'Free same-day delivery of your prescriptions and health essentials. Contactless delivery options available with secure packaging and delivery confirmation.',
      features: [
        'Same-day delivery available',
        'Free shipping on qualifying orders',
        'Contactless delivery options',
        'Prescription auto-refill',
        'Secure packaging',
        'Temperature-controlled transport',
        'Delivery confirmation',
        'Flexible scheduling'
      ],
      benefits: [
        'Ultimate convenience',
        'Time savings',
        'Safe contactless delivery',
        'Never miss medications',
        'Professional handling'
      ]
    },
    {
      id: 'vaccinations',
      icon: Syringe,
      title: 'Vaccination Services',
      description: 'Comprehensive vaccination services by certified pharmacists.',
      shortDetails: 'Stay protected with flu shots, COVID-19 vaccines, travel vaccines, and more. Administered by certified pharmacists with walk-in availability and insurance billing.',
      features: [
        'Seasonal flu shots',
        'COVID-19 vaccines and boosters',
        'Travel vaccines and consultations',
        'Shingles and pneumonia vaccines',
        'Immunization records management',
        'Walk-in availability',
        'Insurance billing',
        'Post-vaccination monitoring'
      ],
      benefits: [
        'Disease prevention',
        'Convenient scheduling',
        'Professional administration',
        'Complete record keeping',
        'Insurance coverage'
      ]
    },
    {
      id: 'health-screenings',
      icon: Activity,
      title: 'Health Screenings',
      description: 'Monitor your health with convenient and professional screening services.',
      shortDetails: 'Comprehensive health screenings including blood pressure, cholesterol, diabetes, and BMI monitoring. Early detection and regular monitoring for optimal health.',
      features: [
        'Blood pressure monitoring',
        'Cholesterol screening',
        'Diabetes screening and management',
        'BMI and weight management',
        'Health risk assessments',
        'Bone density screening',
        'Heart health evaluations',
        'Wellness consultations'
      ],
      benefits: [
        'Early disease detection',
        'Preventive care',
        'Health monitoring',
        'Risk assessment',
        'Professional guidance'
      ]
    },
    {
      id: 'insurance-support',
      icon: Shield,
      title: 'Insurance Support',
      description: 'Expert support to maximize your insurance benefits and minimize costs.',
      shortDetails: 'Navigate insurance complexities with our expert support. We help with claims processing, prior authorizations, and finding cost-saving opportunities.',
      features: [
        'Insurance verification and processing',
        'Copay assistance programs',
        'Prior authorization support',
        'Generic substitution counseling',
        'Medicare Part D guidance',
        'Claims processing assistance',
        'Benefits optimization',
        'Cost-saving strategies'
      ],
      benefits: [
        'Maximized insurance benefits',
        'Reduced out-of-pocket costs',
        'Simplified claims process',
        'Expert guidance',
        'Stress-free experience'
      ]
    }
  ]

  const additionalServices = [
    { icon: CreditCard, title: 'ATM Services', description: 'Convenient ATM access for your banking needs' },
    { icon: ShoppingCart, title: 'In-Store Shopping', description: 'OTC medications and health products' },
    { icon: Package, title: 'Vitamins & Supplements', description: 'High-quality vitamins and herbal supplements' },
    { icon: Gift, title: 'Greeting Cards & Gifts', description: 'Cards and gifts for special occasions' },
    { icon: Printer, title: 'Fax & Copy Services', description: 'Professional document and printing services' },
    { icon: Activity, title: 'DME Supplies', description: 'Medical equipment and diabetic supplies' }
  ]

  const toggleCardExpansion = (serviceId) => {
    setExpandedCard(expandedCard === serviceId ? null : serviceId)
  }

  return (
    <div className="bg-white">
      {/* Services Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-20 left-1/4 w-10 h-20 bg-blue-300 opacity-10 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-white opacity-10 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
              <Stethoscope className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              Our <span className="text-green-400">Professional Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive healthcare services designed to meet all your pharmaceutical and wellness needs. 
              From prescription management to health screenings, we're here to support your health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Navigation Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Our Services</h2>
                <nav className="space-y-2">
                  {services.map((service) => {
                    const IconComponent = service.icon
                    return (
                      <button
                        key={service.id}
                        onClick={() => setActiveService(service.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 group ${
                          activeService === service.id
                            ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                            : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          activeService === service.id
                            ? 'bg-white text-blue-600'
                            : 'bg-blue-100 text-blue-600 group-hover:bg-blue-200'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{service.title}</div>
                          {service.highlight && (
                            <div className={`text-xs mt-1 ${
                              activeService === service.id ? 'text-green-200' : 'text-green-600'
                            }`}>
                              {service.highlight}
                            </div>
                          )}
                        </div>
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${
                          activeService === service.id ? 'transform rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </button>
                    )
                  })}
                </nav>
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:w-2/3">
              {services.map((service) => {
                if (service.id !== activeService) return null
                const IconComponent = service.icon
                
                return (
                  <div key={service.id} className="space-y-4">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <IconComponent className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold">{service.title}</h2>
                            {service.highlight && (
                              <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mt-2">
                                {service.highlight}
                              </span>
                            )}
                          </div>
                        </div>
                        <p className="text-blue-100 text-lg leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              Key Features
                            </h3>
                            <ul className="space-y-3">
                              {service.features.slice(0, 4).map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                              <Heart className="h-5 w-5 text-red-500 mr-2" />
                              Benefits
                            </h3>
                            <ul className="space-y-3">
                              {service.benefits?.slice(0, 4).map((benefit, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                            <Button 
                              onClick={() => toggleCardExpansion(service.id)}
                              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                              Learn More
                              {expandedCard === service.id ? (
                                <ChevronUp className="h-5 w-5 ml-2" />
                              ) : (
                                <ChevronDown className="h-5 w-5 ml-2" />
                              )}
                            </Button>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-green-500" />
                                <a href="tel:914-449-1218">
                                  914-449-1218
                                </a>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4 text-blue-500" />
                                <span>Mon-Fri 9AM-5PM</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Details Box */}
                    {expandedCard === service.id && (
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-6 shadow-lg animate-in slide-in-from-top-4 duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl font-bold text-blue-900 flex items-center">
                            <IconComponent className="h-6 w-6 text-blue-600 mr-3" />
                            About {service.title}
                          </h3>
                          <button
                            onClick={() => toggleCardExpansion(service.id)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ChevronUp className="h-5 w-5" />
                          </button>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-6">
                          {service.shortDetails}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              Complete Features
                            </h4>
                            <div className="space-y-2">
                              {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                              <Heart className="h-4 w-4 text-red-500 mr-2" />
                              Key Benefits
                            </h4>
                            <div className="space-y-2">
                              {service.benefits?.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-600">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-blue-200">
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg" asChild>
                              <Link to="/contact">
                                <Phone className="h-4 w-4 mr-2" />
                                Call for Details
                              </Link>
                            </Button>
                            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg" asChild>
                              <Link to="/contact">
                                <Mail className="h-4 w-4 mr-2" />
                                Email Questions
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue pills on bottom */}
          <div className="absolute bottom-20 left-10 w-6 h-12 bg-blue-500 opacity-20 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-8 h-16 bg-blue-600 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-16 left-1/2 w-5 h-10 bg-blue-400 opacity-25 rounded-full transform rotate-30 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-7 h-14 bg-blue-500 opacity-20 rounded-full transform -rotate-30 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-24 right-10 w-6 h-12 bg-blue-600 opacity-15 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
          
          {/* Green pills on top */}
          <div className="absolute top-20 left-1/3 w-5 h-10 bg-green-500 opacity-20 rounded-full transform rotate-15 animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-32 right-1/3 w-7 h-14 bg-green-600 opacity-15 rounded-full transform -rotate-20 animate-pulse" style={{animationDelay: '1.2s'}}></div>
          <div className="absolute top-16 right-1/4 w-6 h-12 bg-green-500 opacity-25 rounded-full transform rotate-60 animate-bounce" style={{animationDelay: '0.3s', animationDuration: '4.5s'}}></div>
          <div className="absolute top-40 left-1/4 w-8 h-16 bg-green-600 opacity-20 rounded-full transform -rotate-60 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core pharmaceutical services, we offer a variety of convenient services to meet your everyday needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

