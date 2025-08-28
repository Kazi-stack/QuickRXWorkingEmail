import React from 'react'
import { FileText, AlertTriangle, Scale } from 'lucide-react'

function TermsOfService() {
  return (
    <div>
      {/* Terms of Service Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Terms of <span className="text-green-400">Service</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Rules and guidelines for using our website and services
          </p>
        </div>
      </section>

      {/* Terms of Service Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Terms of Service Agreement</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Please read these Terms of Service carefully before using the QuickRX Pharmacy website and services. These terms govern your use of our website and services.
            </p>
            <p className="text-lg text-gray-700">
              Last updated: July 22, 2025
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing or using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
              <p className="text-gray-700">
                These Terms of Service apply to all visitors, users, and others who access or use our website and services. By accessing or using our website and services, you agree to be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h3>
              <p className="text-gray-700 mb-4">
                QuickRX Pharmacy provides pharmacy services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Prescription filling and refilling</li>
                <li>Medication counseling</li>
                <li>Health consultations</li>
                <li>Vaccination services</li>
                <li>Health screenings</li>
                <li>Home delivery of medications</li>
                <li>Online prescription refill requests</li>
                <li>Prescription transfer services</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Responsibilities</h3>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password that you use to access our services and for any activities or actions under your password.
              </p>
              <p className="text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Share your account credentials with any third party</li>
                <li>Use another user's account without permission</li>
                <li>Provide false or misleading information</li>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Prescription and Medication Services</h3>
              <p className="text-gray-700 mb-4">
                All prescription services are subject to verification and approval by our licensed pharmacists. We reserve the right to refuse to fill any prescription that, in our professional judgment, may be harmful, inappropriate, or not in compliance with applicable laws and regulations.
              </p>
              <p className="text-gray-700 mb-4">
                By submitting a prescription to us, you represent that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The prescription is valid and was issued by a licensed healthcare provider</li>
                <li>The information provided is accurate and complete</li>
                <li>You are authorized to request the filling of the prescription</li>
                <li>You will use the medication as prescribed and for its intended purpose</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Medical Disclaimer</h3>
              <div className="flex items-start mb-4">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  The information provided on our website is for general informational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </div>
              <p className="text-gray-700">
                Never disregard professional medical advice or delay in seeking it because of something you have read on our website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                The QuickRX Pharmacy website and its original content, features, and functionality are owned by QuickRX Pharmacy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-gray-700">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">7. User-Generated Content</h3>
              <p className="text-gray-700 mb-4">
                Our website may allow you to post, link, store, share, or otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post and its compliance with these Terms of Service.
              </p>
              <p className="text-gray-700 mb-4">
                By posting content on our website, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through our website. You retain any and all of your rights to any content you submit, post, or display on or through our website.
              </p>
              <p className="text-gray-700">
                You agree not to post content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, or otherwise objectionable.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">8. Payment and Billing</h3>
              <p className="text-gray-700 mb-4">
                Payment for our services is due at the time of service or as otherwise specified. We accept various forms of payment, including cash, credit cards, debit cards, and insurance coverage.
              </p>
              <p className="text-gray-700 mb-4">
                By providing payment information, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You have the legal right to use any payment method(s) you provide</li>
                <li>The payment information you provide is true, correct, and complete</li>
                <li>You authorize us to charge your payment method for the services requested</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                In no event shall QuickRX Pharmacy, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Your access to or use of or inability to access or use our services</li>
                <li>Any conduct or content of any third party on our services</li>
                <li>Any content obtained from our services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p className="text-gray-700 mt-4">
                This limitation of liability applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h3>
              <p className="text-gray-700">
                You agree to defend, indemnify, and hold harmless QuickRX Pharmacy and its licensees and licensors, and their employees, contractors, agents, officers, and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to our services, your violation of these Terms of Service, or your violation of any third-party rights.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h3>
              <p className="text-gray-700">
                These Terms of Service shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms of Service will not be considered a waiver of those rights.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms of Service</h3>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of any changes by posting the new Terms of Service on this page and updating the "Last updated" date. You are advised to review these Terms of Service periodically for any changes. Changes to these Terms of Service are effective when they are posted on this page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
                <li><strong>By mail:</strong> 123 Health Street, Medical District, City 12345</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TermsOfService

