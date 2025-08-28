import React from 'react'
import { AlertTriangle, Info, FileText } from 'lucide-react'

function Disclaimer() {
  return (
    <div>
      {/* Disclaimer Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Website <span className="text-green-400">Disclaimer</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Important information about the use of our website and services
          </p>
        </div>
      </section>

      {/* Disclaimer Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Website Disclaimer</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Please read this disclaimer carefully before using the QuickRX Pharmacy website.
            </p>
            <p className="text-lg text-gray-700">
              Last updated: July 22, 2025
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">General Information Disclaimer</h3>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-3">
                    <p className="text-yellow-700 font-medium">
                      The information provided on this website is for general informational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                QuickRX Pharmacy makes every effort to ensure that the information on this website is accurate and up-to-date. However, medical information is constantly changing, and some information may be out of date and/or contain inaccuracies or typographical errors. We do not guarantee the accuracy, completeness, or timeliness of any information on this website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medical Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                The content on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
              </p>
              <p className="text-gray-700 mb-4">
                If you think you may have a medical emergency, call your doctor or emergency services immediately. QuickRX Pharmacy does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.
              </p>
              <p className="text-gray-700">
                Reliance on any information provided by QuickRX Pharmacy, its employees, or others appearing on the website at the invitation of QuickRX Pharmacy is solely at your own risk.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medication Information Disclaimer</h3>
              <div className="flex items-start mb-4">
                <Info className="h-6 w-6 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  Information about medications on this website is provided for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. The information does not cover all possible uses, actions, precautions, side effects, or interactions of the medications mentioned.
                </p>
              </div>
              <p className="text-gray-700">
                Always consult your healthcare provider to ensure the information displayed on this website applies to your personal circumstances. Never disregard professional medical advice or delay seeking it because of something you have read on this website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">External Links Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                This website may contain links to external websites that are not provided or maintained by or in any way affiliated with QuickRX Pharmacy. Please note that QuickRX Pharmacy does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
              </p>
              <p className="text-gray-700">
                The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                The pharmacists and staff at QuickRX Pharmacy are licensed professionals who provide pharmaceutical services in accordance with state and federal regulations. However, the information provided on this website should not be used as a substitute for the care and knowledge that your pharmacist can provide.
              </p>
              <p className="text-gray-700">
                The content of this website is not intended to be used for self-diagnosis or self-treatment. Always consult with your pharmacist or other healthcare provider if you have any questions or concerns about your medications or health condition.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Accuracy of Information</h3>
              <p className="text-gray-700 mb-4">
                While we strive to provide accurate and up-to-date information on this website, errors or omissions may occur. QuickRX Pharmacy reserves the right to make changes to the content of this website at any time without prior notice.
              </p>
              <p className="text-gray-700">
                The information on this website is provided "as is" without any representations or warranties, express or implied. QuickRX Pharmacy makes no representations or warranties in relation to the information on this website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                In no event shall QuickRX Pharmacy be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or the information contained herein, whether based on warranty, contract, tort, or any other legal theory, and whether or not QuickRX Pharmacy is advised of the possibility of such damages.
              </p>
              <p className="text-gray-700">
                Your use of this website and any reliance on its content is solely at your own risk. QuickRX Pharmacy shall not be liable for any loss or damage of whatever nature (direct, indirect, consequential, or otherwise) which may arise as a result of your use of this website or from your inability to use this website.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h3>
              <p className="text-gray-700">
                You agree to indemnify, defend, and hold harmless QuickRX Pharmacy, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your use of this website (including negligent or wrongful conduct).
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Disclaimer</h3>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  QuickRX Pharmacy reserves the right to modify or replace this disclaimer at any time. We will provide notice of any changes by posting the new disclaimer on this page and updating the "Last updated" date. You are advised to review this disclaimer periodically for any changes. Changes to this disclaimer are effective when they are posted on this page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about this disclaimer, please contact us:
              </p>
              <ul className="list-none space-y-2 text-gray-700">
                <li><strong>By email:</strong> legal@quickrxpharmacy.com</li>
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

export default Disclaimer

