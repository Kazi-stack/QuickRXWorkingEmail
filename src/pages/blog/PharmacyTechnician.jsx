import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, BookOpen, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShareButton from '../../components/ShareButton.jsx'
import pharmacyTechnician from '../../assets/images/blog/pharmacy-technician.jpg'

function PharmacyTechnician() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="outline" className="mb-4" asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Pharmacy Operations
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Behind the Scenes: A Day in the Life of a Pharmacy Technician
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Get an inside look at the important work pharmacy technicians do and how they contribute to your healthcare experience.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Amanda Foster, CPhT</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>December 20, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>9 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                {/* Featured Image */}
                <div className="mb-8">
                  <img 
                    src={pharmacyTechnician} 
                    alt="Pharmacy technician working with medications and prescriptions"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Pharmacy technicians play a crucial role in ensuring safe and efficient pharmaceutical care for patients.
                  </p>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    Pharmacy technicians are the unsung heroes of the healthcare system, working tirelessly behind the scenes to ensure that patients receive safe, accurate, and timely pharmaceutical care. At QUICKRX PHARMACY, our pharmacy technicians are integral members of our healthcare team, and their expertise and dedication directly impact the quality of care we provide to our community.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Starting the Day: Preparation and Setup</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The day for a pharmacy technician typically begins before the pharmacy opens to the public. Early morning hours are spent preparing for the day ahead, which includes checking inventory levels, reviewing pending prescriptions, and ensuring that all equipment is functioning properly. This preparation phase is crucial for maintaining the smooth operation of the pharmacy throughout the day.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Technicians must verify that automated dispensing systems are loaded with the correct medications and that all safety protocols are in place. They check expiration dates on medications, ensure proper storage temperatures are maintained, and review any special handling requirements for controlled substances or refrigerated medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Prescription Processing: More Than Counting Pills</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of the primary responsibilities of pharmacy technicians is prescription processing. This involves much more than simply counting pills and putting them in bottles. Technicians must carefully review each prescription for accuracy, checking that the medication, dosage, and quantity match the prescriber's instructions. They verify patient information, insurance coverage, and identify any potential issues that need pharmacist review.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This attention to detail is critical for patient safety and requires extensive knowledge of medications, dosing, and pharmaceutical calculations. Technicians must be able to recognize when something doesn't look right and know when to consult with the pharmacist. They also need to understand insurance formularies and prior authorization requirements to help patients access their medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Inventory Management: Keeping Medications Available</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Inventory management is another crucial aspect of a pharmacy technician's role. They monitor medication stock levels, place orders for new inventory, and receive and verify shipments. This responsibility requires understanding of medication storage requirements, expiration date management, and proper handling of controlled substances.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Technicians must ensure that temperature-sensitive medications are stored correctly and that all inventory is properly rotated to prevent waste and ensure medication potency. They also maintain detailed records of controlled substance transactions and participate in regular inventory audits to ensure compliance with federal and state regulations.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Insurance and Billing: Navigating Complex Systems</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Insurance processing and billing represent significant portions of a technician's daily work. They navigate complex insurance systems, process prior authorizations, and work with patients to resolve coverage issues. This often involves communicating with insurance companies, prescribers' offices, and patients to ensure that medications are covered and accessible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Technicians must stay current with changing insurance formularies and coverage policies to provide accurate information to patients. They also help patients understand their insurance benefits, copayments, and deductibles, and can often suggest cost-saving alternatives when medications aren't covered.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Patient Interaction: The Human Side of Pharmacy</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Patient interaction is a rewarding aspect of the pharmacy technician role. They answer phone calls, assist patients at the counter, and provide basic information about medications and pharmacy services. While they cannot provide clinical advice, technicians can explain how to take medications, discuss potential side effects that the pharmacist has already counseled on, and help patients understand their insurance coverage.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These interactions require excellent communication skills and empathy, as patients often have concerns or questions about their medications. Technicians must know when to refer patients to the pharmacist for clinical questions while being able to handle routine inquiries independently. They often serve as the first point of contact for patients and play a crucial role in creating a positive pharmacy experience.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Specialized Skills: Compounding and Clinical Support</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Compounding is a specialized skill that some pharmacy technicians develop. This involves preparing customized medications that aren't available commercially, such as specific dosage strengths, alternative dosage forms, or combinations of medications. Compounding requires precise measurements, sterile technique when appropriate, and thorough documentation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Technicians who work in compounding must complete additional training and maintain specialized certifications. They work closely with pharmacists to prepare everything from topical creams to sterile injectable medications, ensuring that patients receive exactly what their healthcare providers have prescribed.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Technology and Innovation in Pharmacy Practice</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Modern pharmacy technicians must be comfortable with various technologies, from automated dispensing systems to electronic health records. They use barcode scanning systems to verify medications, operate robotic dispensing equipment, and manage electronic prescription processing. Staying current with technological advances is essential for maintaining efficiency and accuracy in pharmacy operations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As pharmacy technology continues to evolve, technicians play a key role in implementing new systems and training other staff members. Their technical expertise and understanding of pharmacy workflows make them valuable contributors to process improvement initiatives and quality assurance programs.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Professional Development and Career Growth</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The pharmacy technician profession offers numerous opportunities for growth and specialization. Many technicians pursue national certification through organizations like the Pharmacy Technician Certification Board, which demonstrates their commitment to professional excellence and opens doors to advanced positions and higher compensation.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we support our technicians' professional development through continuing education opportunities, specialized training programs, and career advancement pathways. We recognize that investing in our technicians' growth ultimately benefits our patients through improved care quality and service excellence.
                  </p>

                  <div className="bg-teal-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">Key Responsibilities of Pharmacy Technicians</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Prescription processing and verification</li>
                      <li>• Inventory management and medication storage</li>
                      <li>• Insurance processing and prior authorizations</li>
                      <li>• Patient interaction and customer service</li>
                      <li>• Medication compounding and preparation</li>
                      <li>• Technology operation and maintenance</li>
                      <li>• Quality assurance and safety protocols</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Share Article */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Share Article</h3>
                  <ShareButton 
                    title="Behind the Scenes: A Day in the Life of a Pharmacy Technician"
                    excerpt="Get an inside look at the important work pharmacy technicians do and how they contribute to your healthcare experience."
                  />
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Health Consultations</h4>
                      <p className="text-sm text-gray-600">Expert pharmacist advice</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Medication Types</h4>
                      <p className="text-sm text-gray-600">Understanding different forms</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Medical Research</h4>
                      <p className="text-sm text-gray-600">Latest pharmaceutical advances</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter CTA */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Stay Informed</h3>
                  <p className="text-green-100 mb-4 text-sm">
                    Get the latest health insights delivered to your inbox.
                  </p>
                  <Button className="w-full bg-white text-green-700 hover:bg-gray-100" asChild>
                    <Link to="/newsletter">
                      Subscribe Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Author Bio */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                  AF
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Amanda Foster, CPhT</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Amanda Foster is a Certified Pharmacy Technician with over 10 years of experience in community pharmacy practice. 
                    She holds national certification and has specialized training in sterile compounding and medication therapy management support. 
                    Amanda is passionate about patient care and mentoring new pharmacy technicians entering the profession.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PharmacyTechnician

