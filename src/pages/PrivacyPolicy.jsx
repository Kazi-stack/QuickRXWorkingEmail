import React from 'react'
import { Shield, Lock, FileText } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <div>
      {/* Privacy Policy Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Privacy <span className="text-green-400">Policy</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Commitment to Your Privacy</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              At QuickRX Pharmacy, we are committed to protecting your privacy and the security of your personal information. This Privacy Policy explains what personal information we collect, how we use it, and the steps we take to protect your privacy.
            </p>
            <p className="text-lg text-gray-700">
              Last updated: July 22, 2025
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                We collect the following types of personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Personal Identifiers:</strong> Name, date of birth, address, phone number, email address, and government-issued identification.</li>
                <li><strong>Health Information:</strong> Prescription information, medication history, allergies, health conditions, and insurance information.</li>
                <li><strong>Payment Information:</strong> Credit card details, insurance information, and billing address.</li>
                <li><strong>Website Usage Data:</strong> IP address, browser type, device information, pages visited, and interaction with our website.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide pharmacy services, including filling prescriptions and managing your medication.</li>
                <li>To process payments and insurance claims.</li>
                <li>To communicate with you about your prescriptions, refills, and health-related information.</li>
                <li>To improve our website, products, and services.</li>
                <li>To comply with legal obligations and regulatory requirements.</li>
                <li>To protect against fraud and unauthorized transactions.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How We Protect Your Information</h3>
              <div className="flex items-start mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  We implement a variety of security measures to maintain the safety of your personal information, including encryption, access controls, and secure networks. We comply with all applicable laws and regulations, including the Health Insurance Portability and Accountability Act (HIPAA).
                </p>
              </div>
              <p className="text-gray-700">
                While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sharing Your Information</h3>
              <p className="text-gray-700 mb-4">
                We may share your personal information with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Healthcare Providers:</strong> Doctors, hospitals, and other healthcare providers involved in your care.</li>
                <li><strong>Insurance Companies:</strong> To process claims and verify coverage.</li>
                <li><strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as payment processing, delivery services, and IT support.</li>
                <li><strong>Regulatory Authorities:</strong> Government agencies as required by law.</li>
                <li><strong>Business Partners:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We require all third parties to respect the security of your personal information and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal information for their own purposes.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h3>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The right to access your personal information.</li>
                <li>The right to correct inaccurate or incomplete information.</li>
                <li>The right to request deletion of your personal information.</li>
                <li>The right to restrict or object to processing of your personal information.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent at any time.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and to hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="text-gray-700 mb-4">
                We use the following types of cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
                <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website.</li>
                <li><strong>Functionality Cookies:</strong> Used to recognize you when you return to our website.</li>
                <li><strong>Targeting Cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h3>
              <p className="text-gray-700">
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h3>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>By email:</strong>
                  <a href="mailto:Info@Quickrx134.com">
                    Info@Quickrx134.com
                  </a>
                </li>
                <li><strong>By phone:</strong>
                  <a href="tel:914-449-1218">
                    914-449-1218
                  </a>
                </li>
                <li><strong>By mail:</strong> 
                  <a 
                    href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition-colors"
                  >
                    134 North Ave Ste 8, New Rochelle, NY 10801
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy

