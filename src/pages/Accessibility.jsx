import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Accessibility as AccessibilityIcon, Shield, AlertTriangle, CheckCircle, Phone, Mail, FileText, Eye, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function Accessibility() {
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
            <AccessibilityIcon className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Accessibility Statement
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to digital accessibility for all users, including individuals with disabilities
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
                      <Shield className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Our Commitment to Accessibility</h3>
                        <p className="text-blue-800">
                          QuickRx Pharmacy is committed to ensuring digital accessibility for all users, including individuals with disabilities. 
                          We are continuously working to improve the user experience for everyone and applying the relevant accessibility standards 
                          outlined in the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Why Accessibility Matters</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We believe that digital accessibility is not just a legal requirement, but a fundamental aspect of providing 
                    excellent customer service. Our website should be usable by everyone, regardless of their abilities or the 
                    technologies they use to access the internet.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Shield className="h-5 w-5 text-green-600" />
                        <h4 className="font-semibold text-green-900">Legal Compliance</h4>
                      </div>
                      <p className="text-green-800 text-sm">Meeting ADA requirements and protecting against accessibility lawsuits</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <h4 className="font-semibold text-blue-900">Better UX</h4>
                      </div>
                      <p className="text-blue-800 text-sm">Accessibility features make the site usable for everyone</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                        <h4 className="font-semibold text-purple-900">Good Faith</h4>
                      </div>
                      <p className="text-purple-800 text-sm">Shows commitment to accessibility and can help protect from lawsuits</p>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">WCAG 2.1 Level AA Standards</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards, which are 
                    internationally recognized guidelines for web accessibility. These standards ensure that our website is 
                    accessible to people with various disabilities, including:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Visual impairments (blindness, low vision, color blindness)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Hearing impairments (deafness, hard of hearing)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Motor impairments (difficulty using a mouse or keyboard)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Cognitive impairments (learning disabilities, attention disorders)</span>
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Accessibility Features We've Implemented</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our website includes the following accessibility features to improve the user experience for all visitors:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Semantic HTML markup with proper headings</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Alternative text for images</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Keyboard navigation support</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">ARIA attributes for screen readers</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sufficient color contrast ratios</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Resizable text without loss of functionality</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Clear focus indicators</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Responsive design for all devices</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Compatibility with Assistive Technologies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our website is designed to be compatible with the following assistive technologies and browsers:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Assistive Technologies</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
                        <li>• Screen magnification software</li>
                        <li>• Speech recognition software</li>
                        <li>• Keyboard-only navigation</li>
                        <li>• Voice control software</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Supported Browsers</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Google Chrome (latest)</li>
                        <li>• Mozilla Firefox (latest)</li>
                        <li>• Apple Safari (latest)</li>
                        <li>• Microsoft Edge (latest)</li>
                        <li>• Mobile browsers (iOS/Android)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Known Limitations</h3>
                        <p className="text-yellow-800">
                          While we strive for full accessibility, some third-party content or older documents may have limitations. 
                          We are continuously working to improve these areas and welcome feedback about any accessibility barriers you encounter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reporting Accessibility Issues</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you experience any difficulty accessing content on this website, or if you need assistance with any part of our site, 
                    please contact us immediately. We welcome your feedback and will make reasonable efforts to ensure that all content 
                    and features are accessible to everyone.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mb-8 border-l-4 border-green-500">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-green-900 mb-2">Contact Information</h3>
                        <div className="space-y-2 text-green-800">
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4" />
                            <span>Email: info@quickrxpharmacy.com</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4" />
                            <a href="tel:914-449-1218">
                              Phone: 914-449-1218
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Ongoing Improvements</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We are committed to continuously improving the accessibility of our website. Our team regularly:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Conducts accessibility audits and testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Reviews and updates content for accessibility</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Trains staff on accessibility best practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Incorporates user feedback into improvements</span>
                    </li>
                  </ul>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Document Information</h4>
                        <p className="text-gray-700">
                          This accessibility statement was last updated on January 15, 2025. We review and update this statement 
                          regularly to reflect our ongoing commitment to accessibility and any improvements made to our website.
                        </p>
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
                  <Link to="/content-disclaimer" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Content Disclaimer
                  </Link>
                  <Link to="/disclaimer" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    General Disclaimer
                  </Link>
                </CardContent>
              </Card>

              {/* Contact CTA */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Need Help?</h3>
                  <p className="text-green-100 mb-4 text-sm">
                    Contact us if you encounter any accessibility issues on our website.
                  </p>
                  <Button className="w-full bg-white text-green-700 hover:bg-gray-100" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Accessibility Tips */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Accessibility Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Use keyboard navigation (Tab, Enter, Space)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Zoom in/out with Ctrl/Cmd + +/-</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Use screen reader shortcuts</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accessibility

