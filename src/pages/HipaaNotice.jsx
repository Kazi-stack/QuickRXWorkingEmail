import React from 'react'
import { FileText, Shield, Lock } from 'lucide-react'

function HipaaNotice() {
  return (
    <div>
      {/* HIPAA Notice Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">HIPAA <span className="text-green-400">Notice</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Notice of Privacy Practices for Protected Health Information
          </p>
        </div>
      </section>

      {/* HIPAA Notice Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">HIPAA Notice of Privacy Practices</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.
            </p>
            <p className="text-lg text-gray-700">
              Effective Date: July 22, 2025
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Obligations</h3>
              <p className="text-gray-700 mb-4">
                We are required by law to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Maintain the privacy of protected health information</li>
                <li>Give you this notice of our legal duties and privacy practices regarding your health information</li>
                <li>Follow the terms of our notice that is currently in effect</li>
                <li>Notify you if a breach occurs that may have compromised the privacy or security of your information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How We May Use and Disclose Your Health Information</h3>
              <p className="text-gray-700 mb-4">
                The following describes the ways we may use and disclose health information that identifies you ("Protected Health Information" or "PHI"). Except for the purposes described below, we will use and disclose PHI only with your written permission.
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">For Treatment</h4>
                  <p className="text-gray-700">
                    We may use and disclose PHI for your treatment and to provide you with treatment-related health care services. For example, we may disclose PHI to doctors, nurses, technicians, or other personnel, including people outside our facility who may be involved in your medical care.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">For Payment</h4>
                  <p className="text-gray-700">
                    We may use and disclose PHI so that we or others may bill and receive payment from you, an insurance company, or a third party for the treatment and services you received. For example, we may give your health plan information about you so that they will pay for your treatment.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">For Health Care Operations</h4>
                  <p className="text-gray-700">
                    We may use and disclose PHI for health care operations purposes. These uses and disclosures are necessary to make sure that all of our patients receive quality care and to operate and manage our pharmacy. For example, we may use and disclose information to make sure the pharmacy care you receive is of the highest quality.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Appointment Reminders, Treatment Alternatives, and Health-Related Benefits and Services</h4>
                  <p className="text-gray-700">
                    We may use and disclose PHI to contact you to remind you that you have an appointment with us or to tell you about treatment alternatives or health-related benefits and services that may be of interest to you.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Individuals Involved in Your Care or Payment for Your Care</h4>
                  <p className="text-gray-700">
                    We may disclose PHI to a person who is involved in your medical care or helps pay for your care, such as a family member or friend, to the extent it is relevant to that person's involvement in your care or payment for your care.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Research</h4>
                  <p className="text-gray-700">
                    Under certain circumstances, we may use and disclose PHI for research. For example, a research project may involve comparing the health of patients who received one medication to those who received another for the same condition. Before we use or disclose PHI for research, the project will go through a special approval process.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">As Required by Law</h4>
                  <p className="text-gray-700">
                    We will disclose PHI when required to do so by international, federal, state, or local law.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">To Avert a Serious Threat to Health or Safety</h4>
                  <p className="text-gray-700">
                    We may use and disclose PHI when necessary to prevent a serious threat to your health and safety or the health and safety of the public or another person. Disclosures, however, will be made only to someone who may be able to help prevent the threat.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Business Associates</h4>
                  <p className="text-gray-700">
                    We may disclose PHI to our business associates that perform functions on our behalf or provide us with services if the information is necessary for such functions or services. For example, we may use another company to perform billing services on our behalf. All of our business associates are obligated to protect the privacy of your information and are not allowed to use or disclose any information other than as specified in our contract.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Military and Veterans</h4>
                  <p className="text-gray-700">
                    If you are a member of the armed forces, we may release PHI as required by military command authorities.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Workers' Compensation</h4>
                  <p className="text-gray-700">
                    We may release PHI for workers' compensation or similar programs. These programs provide benefits for work-related injuries or illness.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Public Health Risks</h4>
                  <p className="text-gray-700">
                    We may disclose PHI for public health activities. These activities generally include disclosures to prevent or control disease, injury, or disability; report births and deaths; report child abuse or neglect; report reactions to medications or problems with products; notify people of recalls of products they may be using; track certain products and monitor their use and effectiveness; notify a person who may have been exposed to a disease or may be at risk for contracting or spreading a disease or condition; and conduct medical surveillance of our facilities in certain limited circumstances concerning workplace illness or injury.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Health Oversight Activities</h4>
                  <p className="text-gray-700">
                    We may disclose PHI to a health oversight agency for activities authorized by law. These oversight activities include, for example, audits, investigations, inspections, and licensure.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Lawsuits and Disputes</h4>
                  <p className="text-gray-700">
                    If you are involved in a lawsuit or a dispute, we may disclose PHI in response to a court or administrative order. We also may disclose PHI in response to a subpoena, discovery request, or other lawful process by someone else involved in the dispute, but only if efforts have been made to tell you about the request or to obtain an order protecting the information requested.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Law Enforcement</h4>
                  <p className="text-gray-700">
                    We may release PHI if asked by a law enforcement official if the information is: (1) in response to a court order, subpoena, warrant, summons, or similar process; (2) limited information to identify or locate a suspect, fugitive, material witness, or missing person; (3) about the victim of a crime even if, under certain very limited circumstances, we are unable to obtain the person's agreement; (4) about a death we believe may be the result of criminal conduct; (5) about criminal conduct on our premises; and (6) in an emergency to report a crime, the location of the crime or victims, or the identity, description, or location of the person who committed the crime.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">National Security and Intelligence Activities</h4>
                  <p className="text-gray-700">
                    We may release PHI to authorized federal officials for intelligence, counter-intelligence, and other national security activities authorized by law.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Protective Services for the President and Others</h4>
                  <p className="text-gray-700">
                    We may disclose PHI to authorized federal officials so they may provide protection to the President, other authorized persons, or foreign heads of state, or to conduct special investigations.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Inmates or Individuals in Custody</h4>
                  <p className="text-gray-700">
                    If you are an inmate of a correctional institution or under the custody of a law enforcement official, we may release PHI to the correctional institution or law enforcement official. This release would be necessary: (1) for the institution to provide you with health care; (2) to protect your health and safety or the health and safety of others; or (3) for the safety and security of the correctional institution.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Regarding Your Health Information</h3>
              <p className="text-gray-700 mb-4">
                You have the following rights regarding PHI we maintain about you:
              </p>
              
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to Inspect and Copy</h4>
                  <p className="text-gray-700">
                    You have the right to inspect and copy PHI that may be used to make decisions about your care or payment for your care. This includes medical and billing records, other than psychotherapy notes. To inspect and copy this PHI, you must make your request, in writing, to our Privacy Officer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to Amend</h4>
                  <p className="text-gray-700">
                    If you feel that PHI we have is incorrect or incomplete, you may ask us to amend the information. You have the right to request an amendment for as long as the information is kept by or for us. To request an amendment, you must make your request, in writing, to our Privacy Officer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to an Accounting of Disclosures</h4>
                  <p className="text-gray-700">
                    You have the right to request an accounting of certain disclosures of PHI we made. To request an accounting of disclosures, you must make your request, in writing, to our Privacy Officer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to Request Restrictions</h4>
                  <p className="text-gray-700">
                    You have the right to request a restriction or limitation on the PHI we use or disclose for treatment, payment, or health care operations. You also have the right to request a limit on the PHI we disclose to someone involved in your care or the payment for your care, like a family member or friend. To request a restriction, you must make your request, in writing, to our Privacy Officer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to Request Confidential Communications</h4>
                  <p className="text-gray-700">
                    You have the right to request that we communicate with you about medical matters in a certain way or at a certain location. For example, you can ask that we only contact you by mail or at work. To request confidential communications, you must make your request, in writing, to our Privacy Officer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Right to a Paper Copy of This Notice</h4>
                  <p className="text-gray-700">
                    You have the right to a paper copy of this notice. You may ask us to give you a copy of this notice at any time. Even if you have agreed to receive this notice electronically, you are still entitled to a paper copy of this notice. You may obtain a copy of this notice at our website, www.quickrxpharmacy.com. To obtain a paper copy of this notice, contact our Privacy Officer.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Notice</h3>
              <div className="flex items-start">
                <FileText className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  We reserve the right to change this notice and make the new notice apply to PHI we already have as well as any information we receive in the future. We will post a copy of our current notice at our office and on our website. The notice will contain the effective date on the first page.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Complaints</h3>
              <p className="text-gray-700 mb-4">
                If you believe your privacy rights have been violated, you may file a complaint with our office or with the Secretary of the Department of Health and Human Services. To file a complaint with our office, contact our Privacy Officer. All complaints must be made in writing. You will not be penalized for filing a complaint.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="flex items-start mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  For questions about this notice or to make a privacy-related request, please contact:
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-medium">Privacy Officer</p>
                <p className="text-gray-700">QuickRX Pharmacy</p>
                <p className="text-gray-700">123 Health Street</p>
                <p className="text-gray-700">Medical District, City 12345</p>
                <p className="text-gray-700">Phone: 
                        <a href="tel:914-449-1218">
                          914-449-1218
                        </a>
                </p>
                <p className="text-gray-700">Email: 
                  <a href="mailto:info@Quickrx134.com">
                    info@Quickrx134.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HipaaNotice

