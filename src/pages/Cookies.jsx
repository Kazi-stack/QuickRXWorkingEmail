import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Cookie, Shield, AlertTriangle, CheckCircle, Info, Settings, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import CookieSettings from '../components/CookieSettings.jsx'

function Cookies() {
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false)

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
            <Cookie className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cookie Policy
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            How we use cookies and similar technologies to improve your experience
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
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">About This Cookie Policy</h3>
                        <p className="text-blue-800">
                          This Cookie Policy explains how QuickRx Pharmacy uses cookies and similar technologies when you visit our website. 
                          We are committed to being transparent about our data practices and giving you control over your privacy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What Are Cookies?</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. 
                    They help websites remember information about your visit, such as your preferred language and other settings, which can make 
                    your next visit easier and the site more useful to you.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How We Use Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We use cookies for several purposes, including:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Essential website functionality</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Security and fraud prevention</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Performance and analytics</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">User preferences and settings</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Improving user experience</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Website optimization</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Types of Cookies We Use</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-green-900 mb-2">Essential Cookies</h3>
                          <p className="text-green-800 mb-3">
                            These cookies are necessary for the website to function properly. They enable basic functions like page navigation, 
                            access to secure areas, and form submissions. The website cannot function properly without these cookies.
                          </p>
                          <ul className="text-green-800 text-sm space-y-1">
                            <li>• Session management and security</li>
                            <li>• Shopping cart functionality</li>
                            <li>• Form submission processing</li>
                            <li>• User authentication</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <Settings className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-blue-900 mb-2">Functional Cookies</h3>
                          <p className="text-blue-800 mb-3">
                            These cookies enable enhanced functionality and personalization, such as remembering your preferences, 
                            language settings, and other choices you make while using our website.
                          </p>
                          <ul className="text-blue-800 text-sm space-y-1">
                            <li>• Language and region preferences</li>
                            <li>• User interface customization</li>
                            <li>• Remembering form data</li>
                            <li>• Accessibility settings</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <div className="flex items-start space-x-3">
                        <Eye className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-purple-900 mb-2">Analytics Cookies</h3>
                          <p className="text-purple-800 mb-3">
                            These cookies help us understand how visitors interact with our website by collecting and reporting information 
                            anonymously. This helps us improve our website and services.
                          </p>
                          <ul className="text-purple-800 text-sm space-y-1">
                            <li>• Website usage statistics</li>
                            <li>• Page performance metrics</li>
                            <li>• User behavior analysis</li>
                            <li>• Service improvement insights</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Third-Party Cookies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Some cookies on our website are set by third-party services that we use to enhance your experience. These may include:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Google Analytics for website analytics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Social media platforms for sharing features</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Payment processors for secure transactions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Security services for fraud protection</span>
                    </li>
                  </ul>

                  <div className="bg-yellow-50 p-6 rounded-lg mb-8 border-l-4 border-yellow-500">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-900 mb-2">Your Cookie Choices</h3>
                        <p className="text-yellow-800">
                          You have the right to control how cookies are used on your device. You can manage your cookie preferences 
                          through your browser settings or by contacting us directly. However, disabling certain cookies may affect 
                          the functionality of our website.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Managing Your Cookie Preferences</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    You can control and manage cookies in several ways:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Browser Settings</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                        <li>• Firefox: Options → Privacy & Security → Cookies</li>
                        <li>• Safari: Preferences → Privacy → Cookies</li>
                        <li>• Edge: Settings → Cookies and site permissions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What You Can Do</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Accept or decline cookies</li>
                        <li>• Delete existing cookies</li>
                        <li>• Set cookie preferences</li>
                        <li>• Block third-party cookies</li>
                      </ul>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Cookie Retention Period</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The length of time cookies remain on your device depends on their type:
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Session Cookies</h4>
                        <p className="text-gray-600 text-sm">Deleted when you close your browser</p>
                      </div>
                      <span className="text-blue-600 font-medium">Temporary</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">Persistent Cookies</h4>
                        <p className="text-gray-600 text-sm">Remain until manually deleted or expired</p>
                      </div>
                      <span className="text-green-600 font-medium">Up to 2 years</span>
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Updates to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, 
                    legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website 
                    and updating the "Last Updated" date.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Info className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                        <p className="text-gray-700 mb-3">
                          If you have any questions about our use of cookies or this Cookie Policy, please contact us:
                        </p>
                        <div className="space-y-1 text-gray-700">
                          <p>Email: privacy@quickrxpharmacy.com</p>
                          <p>
                            Phone:
                            <a href="tel:914-449-1218">
                              914-449-1218
                            </a>
                          </p>
                          <p>Address: 
                            <a 
                              href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-green-600 transition-colors"
                            >
                              134 North Ave Ste 8, New Rochelle, NY 10801
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
                    <p className="text-blue-800 text-sm">
                      <strong>Last Updated:</strong> January 15, 2025
                    </p>
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
                  <Link to="/accessibility" className="block text-blue-600 hover:text-blue-800 transition-colors">
                    Accessibility
                  </Link>
                </CardContent>
              </Card>

              {/* Cookie Management CTA */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Manage Cookies</h3>
                  <p className="text-green-100 mb-4 text-sm">
                    Control your cookie preferences and privacy settings.
                  </p>
                  <Button 
                    className="w-full bg-white text-green-700 hover:bg-gray-100"
                    onClick={() => setIsCookieSettingsOpen(true)}
                  >
                    Cookie Settings
                  </Button>
                </CardContent>
              </Card>

              {/* Cookie Types Info */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-900">Cookie Types</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Essential - Required for site function</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Settings className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Functional - Enhance user experience</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Eye className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800 text-sm">Analytics - Help improve our services</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      <CookieSettings 
        isOpen={isCookieSettingsOpen}
        onClose={() => setIsCookieSettingsOpen(false)}
      />
    </div>
  )
}

export default Cookies 