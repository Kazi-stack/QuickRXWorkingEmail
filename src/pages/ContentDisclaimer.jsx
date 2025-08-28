import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Shield, FileText, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { Link } from 'react-router-dom'

function ContentDisclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="outline" className="mb-4" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16 relative overflow-hidden">
        {/* Decorative Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* White pills with line in middle */}
          <div className="absolute bottom-20 left-10 w-6 h-12 bg-white opacity-15 rounded-full transform rotate-12 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-0.5 bg-white opacity-60"></div>
            </div>
          </div>
          <div className="absolute bottom-32 right-20 w-5 h-10 bg-white opacity-12 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white opacity-60"></div>
            </div>
          </div>
          <div className="absolute top-20 left-1/3 w-4 h-8 bg-white opacity-10 rounded-full transform rotate-15 animate-pulse" style={{animationDelay: '0.8s'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2.5 h-0.5 bg-white opacity-60"></div>
            </div>
          </div>
          <div className="absolute top-32 right-10 w-5 h-10 bg-white opacity-12 rounded-full transform -rotate-30 animate-bounce" style={{animationDelay: '1.5s'}}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-0.5 bg-white opacity-60"></div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 shadow-lg">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Content Disclaimer & Transparency Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to transparency about content creation and media usage
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
                    <div className="flex items-start space-x-3">
                      <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Commitment to Transparency</h3>
                        <p className="text-blue-800">
                          At QuickRx Pharmacy, we believe in being completely transparent about how we create and source our content. 
                          This page explains our content creation practices and media usage policies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">AI-Generated Content Disclosure</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Some of the content displayed on this website, including articles, blog posts, and informational descriptions, 
                    may be generated using AI tools and technologies. We use AI to help us create comprehensive, informative content 
                    that addresses common healthcare questions and concerns.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While we strive to provide accurate and up-to-date information, these AI-generated materials are intended for 
                    general informational purposes only and should not be considered medical advice. Our team reviews and edits all 
                    content to ensure accuracy and relevance to our pharmacy services.
                  </p>

                  <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Medical Disclaimer</h3>
                        <p className="text-yellow-800">
                          <strong>Always consult with a licensed healthcare professional regarding personal medical decisions.</strong> 
                          The information provided on this website is for educational purposes only and should not replace professional 
                          medical advice, diagnosis, or treatment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Image and Media Usage Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We are committed to using only properly licensed and ethically sourced images and media on our website. 
                    All images used on this website are either:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Royalty-free stock photos from licensed providers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Public domain images that are free for commercial use</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Licensed assets that are free for commercial use</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Trademark and Brand Recognition</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We do not claim ownership of third-party trademarks, logos, or product names displayed on our website. 
                    These remain the property of their respective owners. Any references to specific medications, brands, 
                    or products are made for informational purposes only and do not imply endorsement or affiliation.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Content Review and Accuracy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    All content on our website undergoes review by our pharmacy team to ensure accuracy and relevance. 
                    We regularly update our content to reflect current healthcare information and pharmacy practices. 
                    However, healthcare information changes rapidly, and we encourage users to verify information 
                    with their healthcare providers.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Our Promise to You</h3>
                        <p className="text-green-800">
                          We are committed to providing accurate, helpful, and transparent information while maintaining 
                          the highest standards of professional pharmacy care. Your health and trust are our top priorities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you have any questions about our content creation practices, media usage, or this transparency policy, 
                    please don't hesitate to contact us. We're here to help and are committed to maintaining your trust.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">QuickRx Pharmacy</h4>
                        <a href="tel:914-449-1218" className="text-gray-600">
                          914-449-1218
                        </a>
                        <p className="text-gray-600">info@quickrxpharmacy.com</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">For Medical Questions</h4>
                        <p className="text-gray-600">Please consult with your healthcare provider or pharmacist for personalized medical advice.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Quick Links */}
              <Card className="bg-white shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Related Pages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/privacy-policy" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link to="/terms-of-service" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Terms of Service
                  </Link>
                  <Link to="/disclaimer" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    General Disclaimer
                  </Link>
                  <Link to="/hipaa-notice" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    HIPAA Notice
                  </Link>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Questions?</h3>
                  <p className="text-green-100 mb-4 text-sm">
                    Contact us if you have any questions about our content or policies.
                  </p>
                  <Button className="w-full bg-white text-green-700 hover:bg-gray-100" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentDisclaimer 