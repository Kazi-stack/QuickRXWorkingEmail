import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { X, Cookie, Shield, Settings, Eye, Info, Save, CheckCircle } from 'lucide-react'

function CookieSettings({ isOpen, onClose }) {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    functional: false,
    analytics: false
  })
  const [hasChanges, setHasChanges] = useState(false)

  // Load saved preferences on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences)
      setCookiePreferences(parsed)
    }
  }, [])

  // Check for changes
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences')
    if (savedPreferences) {
      const parsed = JSON.parse(savedPreferences)
      setHasChanges(
        parsed.functional !== cookiePreferences.functional ||
        parsed.analytics !== cookiePreferences.analytics
      )
    } else {
      setHasChanges(cookiePreferences.functional || cookiePreferences.analytics)
    }
  }, [cookiePreferences])

  const handleToggle = (cookieType) => {
    if (cookieType === 'essential') return // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieType]: !prev[cookieType]
    }))
  }

  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences))
    setHasChanges(false)
    
    // Show success message
    const successMessage = document.createElement('div')
    successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2'
    successMessage.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Cookie preferences saved!</span>
    `
    document.body.appendChild(successMessage)
    
    setTimeout(() => {
      document.body.removeChild(successMessage)
    }, 3000)
  }

  const handleAcceptAll = () => {
    setCookiePreferences({
      essential: true,
      functional: true,
      analytics: true
    })
  }

  const handleRejectAll = () => {
    setCookiePreferences({
      essential: true,
      functional: false,
      analytics: false
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Cookie className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Cookie Settings</h2>
              <p className="text-sm text-gray-600">Manage your cookie preferences</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">About Cookie Settings</h3>
                <p className="text-blue-800 text-sm">
                  You can control which types of cookies are stored on your device. Essential cookies are always enabled 
                  as they are necessary for the website to function properly.
                </p>
              </div>
            </div>
          </div>

          {/* Essential Cookies */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-600" />
                  <div>
                    <CardTitle className="text-green-900">Essential Cookies</CardTitle>
                    <p className="text-green-700 text-sm">Required for website functionality</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-start px-1 cursor-not-allowed opacity-50">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <span className="text-green-700 text-sm font-medium">Always Active</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 text-sm">
                These cookies are necessary for the website to function and cannot be switched off. 
                They are usually only set in response to actions made by you which amount to a request for services, 
                such as setting your privacy preferences, logging in or filling in forms.
              </p>
            </CardContent>
          </Card>

          {/* Functional Cookies */}
          <Card className="border-blue-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <div>
                    <CardTitle className="text-blue-900">Functional Cookies</CardTitle>
                    <p className="text-blue-700 text-sm">Enhance user experience</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('functional')}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                    cookiePreferences.functional 
                      ? 'bg-blue-500 justify-end' 
                      : 'bg-gray-300 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                These cookies enable the website to provide enhanced functionality and personalization. 
                They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
            </CardContent>
          </Card>

          {/* Analytics Cookies */}
          <Card className="border-purple-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <div>
                    <CardTitle className="text-purple-900">Analytics Cookies</CardTitle>
                    <p className="text-purple-700 text-sm">Help improve our services</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggle('analytics')}
                  className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                    cookiePreferences.analytics 
                      ? 'bg-purple-500 justify-end' 
                      : 'bg-gray-300 justify-start'
                  } px-1`}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm">
                These cookies allow us to count visits and traffic sources so we can measure and improve 
                the performance of our site. They help us to know which pages are the most and least popular.
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              onClick={handleAcceptAll}
              className="flex-1"
            >
              Accept All Cookies
            </Button>
            <Button
              variant="outline"
              onClick={handleRejectAll}
              className="flex-1"
            >
              Reject Non-Essential
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <span>Your preferences will be saved for future visits</span>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              disabled={!hasChanges}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieSettings 