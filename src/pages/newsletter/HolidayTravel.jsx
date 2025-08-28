import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import deliveryHands from '../../assets/images/blog/healthy-nutrition.jpg'

function HolidayTravel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button variant="outline" className="mb-4" asChild>
            <Link to="/newsletter">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Newsletter
            </Link>
          </Button>
        </div>
      </div>

      {/* Newsletter Header */}
      <div className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              QUICKRX Newsletter Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Holiday Health: Managing Medications During Travel
          </h1>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Essential advice for safely managing your medications while traveling during the holiday season.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-green-100">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>QUICKRX Newsletter</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>December 2024 Issue</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>11 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                {/* Newsletter Header */}
                <div className="border-b border-gray-200 pb-6 mb-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900">QUICKRX Health Newsletter</h2>
                      <p className="text-gray-600">Your Monthly Guide to Better Health</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Volume 2, Issue 11</p>
                      <p className="text-sm text-gray-600">December 2024</p>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img 
                    src={deliveryHands} 
                    alt="Safe medication management during holiday travel"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Proper planning and preparation ensure safe medication management during holiday travel.
                  </p>
                </div>

                {/* Newsletter Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">In This Issue</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Pre-Travel Medication Planning</li>
                      <li>• Packing Medications Safely</li>
                      <li>• Time Zone Adjustments for Medications</li>
                      <li>• Emergency Preparedness While Traveling</li>
                      <li>• International Travel Considerations</li>
                      <li>• Managing Chronic Conditions on the Road</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-8">Safe Holiday Travel with Medications</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    The holiday season brings joy, family gatherings, and often travel to visit loved ones. While planning your holiday trips, it's crucial to consider how travel will affect your medication routine. Proper preparation ensures that your health management continues seamlessly, allowing you to focus on creating wonderful holiday memories with family and friends.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Pre-Travel Medication Planning</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Successful medication management during travel begins weeks before your departure. Start by creating a comprehensive list of all your medications, including prescription drugs, over-the-counter medications, vitamins, and supplements. Include the medication names, dosages, frequency, and the prescribing doctor's contact information. This list will be invaluable if you need medical care while traveling.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Contact QUICKRX PHARMACY at least two weeks before your travel date to ensure you have adequate medication supplies. Many insurance plans have restrictions on early refills, but we can work with your insurance company to obtain vacation overrides when necessary. It's always better to have more medication than you need rather than running short while away from home.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Consider obtaining a letter from your doctor explaining your medical conditions and the necessity of your medications, especially for controlled substances or injectable medications. This documentation can be helpful when going through airport security or if you need medical care while traveling. The letter should include your doctor's contact information and be printed on official letterhead.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Packing Medications Safely</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When packing medications for travel, always keep them in their original pharmacy containers with the prescription labels intact. This is particularly important for controlled substances, as having medications in unmarked containers can lead to legal complications. The original containers also provide important information about the medication, dosage, and prescribing pharmacy.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pack all medications in your carry-on luggage when flying, never in checked baggage. Checked luggage can be lost, delayed, or exposed to extreme temperatures that might damage your medications. Carry-on storage ensures your medications stay with you and remain at appropriate temperatures throughout your journey.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For medications requiring refrigeration, use insulated travel cases with ice packs to maintain proper temperature. However, be aware that liquid medications and large ice packs may require additional security screening at airports. Consider using gel ice packs that remain flexible when frozen, as these are often more convenient for travel.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Managing Time Zone Changes</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Time zone changes can complicate medication schedules, particularly for medications that must be taken at specific intervals. For short trips of less than a week, many patients find it easier to maintain their home time zone schedule rather than adjusting to local time. This approach works well for most medications and eliminates the need for complex schedule adjustments.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For longer trips or when adjusting to local time is preferred, gradually shift your medication schedule by one to two hours per day until you reach the desired local time. This gradual adjustment helps maintain consistent medication levels in your system and reduces the risk of side effects or decreased effectiveness.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Some medications, particularly those for diabetes, blood pressure, or heart conditions, require more careful consideration when adjusting for time zones. Consult with your pharmacist or doctor before traveling to develop a specific plan for your medications. They can provide guidance on timing adjustments and what to watch for during the transition period.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Emergency Preparedness</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Prepare for potential emergencies by researching pharmacies and medical facilities at your destination before you travel. Many pharmacy chains have locations nationwide and can access your prescription history, making it easier to obtain emergency refills if needed. Keep a list of these locations and their contact information easily accessible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pack extra medication beyond what you'll need for your trip duration. A good rule of thumb is to bring at least a week's worth of extra medication in case of travel delays or unexpected extensions to your trip. Store this extra medication separately from your regular supply to avoid confusion and ensure you have backup if your primary supply is lost or damaged.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Consider wearing a medical alert bracelet or carrying a medical information card if you have serious medical conditions or take medications that could interact dangerously with emergency treatments. This information can be crucial if you're unable to communicate your medical history during an emergency situation.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">International Travel Considerations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    International travel requires additional preparation, as medication regulations vary significantly between countries. Some medications that are legal in the United States may be controlled or prohibited in other countries. Research the medication regulations of your destination country well in advance of your trip, and contact their embassy or consulate if you have questions about specific medications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Obtain a letter from your doctor explaining your medical conditions and the necessity of your medications, translated into the local language if possible. This documentation should include generic medication names, as brand names often differ between countries. Some countries may require additional documentation or permits for certain medications, particularly controlled substances.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Research whether your medications are available at your destination in case you need emergency refills. If your specific medications aren't available, your doctor may be able to provide information about equivalent medications that are available locally. However, never substitute medications without proper medical guidance.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Managing Chronic Conditions While Traveling</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Travelers with chronic conditions like diabetes, heart disease, or respiratory conditions need additional planning to ensure their health remains stable during travel. Pack extra supplies for monitoring equipment, such as blood glucose test strips, blood pressure cuffs, or peak flow meters. These devices can help you monitor your condition and adjust medications if necessary.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Maintain your regular eating and sleeping schedules as much as possible, as these factors can significantly impact medication effectiveness and disease management. Holiday celebrations often involve rich foods and altered schedules, but try to maintain some consistency in your routine to avoid complications with your chronic conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Stay hydrated during travel, particularly when flying, as dehydration can affect medication absorption and overall health. However, be mindful of how increased fluid intake might affect medications that require specific timing relative to meals or other medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Technology Tools for Travel</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Smartphone apps can be invaluable tools for managing medications while traveling. Medication reminder apps can help you maintain your schedule despite changing time zones and disrupted routines. Many apps also allow you to store photos of your medication bottles and prescription information, providing easy access to important details if needed.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Consider using pharmacy apps that can help you locate nearby pharmacies and may even allow you to transfer prescriptions electronically. Some apps can also provide information about medication availability in different countries, which can be helpful for international travel planning.
                  </p>

                  <div className="bg-red-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-3">Holiday Travel Medication Checklist</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Create comprehensive medication list with doctor contacts</li>
                      <li>✓ Obtain adequate medication supplies 2 weeks before travel</li>
                      <li>✓ Pack medications in original containers in carry-on luggage</li>
                      <li>✓ Research pharmacies and medical facilities at destination</li>
                      <li>✓ Plan for time zone adjustments if necessary</li>
                      <li>✓ Obtain doctor's letter for controlled substances</li>
                      <li>✓ Pack extra medication for emergencies</li>
                      <li>✓ Research international medication regulations if applicable</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">QUICKRX Travel Support Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we're committed to ensuring your health management continues seamlessly during holiday travel. Our team can help you plan your medication needs, obtain vacation overrides from insurance companies, and provide documentation for travel with controlled substances. We also offer emergency prescription transfer services if you need medication refills while away from home.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Contact us before your holiday travels to discuss your specific needs and develop a comprehensive travel plan. Our pharmacists can provide personalized advice based on your medications, destination, and travel duration. We want to ensure that managing your health never becomes a barrier to enjoying your holiday celebrations with loved ones.
                  </p>

                  <div className="bg-blue-100 p-6 rounded-lg mt-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">Planning Holiday Travel?</h3>
                    <p className="text-gray-700 mb-4">Contact QUICKRX PHARMACY at least two weeks before your departure to ensure you have everything you need for safe and healthy holiday travel.</p>
                    <p className="text-gray-700 mb-2">📞 Phone: (914) 449-1218</p>
                    <p className="text-gray-700 mb-2">📧 Email: 
                      <a href="mailto:Info@Quickrx134.com">
                        Info@Quickrx134.com
                      </a>
                    </p>
                    <p className="text-gray-700">🕒 Hours: Monday - Friday: 9AM - 5PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Share Newsletter */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Share Newsletter</h3>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white mb-3">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </CardContent>
              </Card>

              {/* Other Newsletter Issues */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Other Issues</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Winter Wellness</h4>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">New Year Health Goals</h4>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Insurance Benefits Guide</h4>
                      <p className="text-sm text-gray-600">December 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Subscribe CTA */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">Subscribe</h3>
                  <p className="text-blue-100 mb-4 text-sm">
                    Get our monthly newsletter delivered to your inbox.
                  </p>
                  <Button className="w-full bg-white text-blue-700 hover:bg-gray-100" asChild>
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
    </div>
  )
}

export default HolidayTravel

