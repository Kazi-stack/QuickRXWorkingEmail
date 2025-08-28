import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import prescriptionFillingDoctor from '../../assets/images/blog/medical-research.jpg'

function InsuranceBenefits() {
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
            Understanding Your Insurance Benefits for 2025
          </h1>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Navigate your health insurance benefits and learn about copay assistance programs available at QUICKRX PHARMACY.
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
              <span>14 min read</span>
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
                      <p className="text-sm text-gray-600">Volume 2, Issue 12</p>
                      <p className="text-sm text-gray-600">December 2024</p>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img 
                    src={prescriptionFillingDoctor} 
                    alt="Healthcare professional explaining insurance benefits"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Understanding your insurance benefits is crucial for maximizing your healthcare coverage and minimizing out-of-pocket costs.
                  </p>
                </div>

                {/* Newsletter Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">In This Issue</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Understanding Your 2025 Insurance Plan Changes</li>
                      <li>• Maximizing Prescription Drug Benefits</li>
                      <li>• Copay Assistance Programs and Savings</li>
                      <li>• Prior Authorization Process Explained</li>
                      <li>• Generic vs. Brand Name Medications</li>
                      <li>• Medicare Part D Updates for 2025</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-8">Navigating Your 2025 Insurance Benefits</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    As we enter 2025, many insurance plans have updated their coverage policies, formularies, and cost-sharing structures. Understanding these changes is essential for making informed healthcare decisions and minimizing your out-of-pocket expenses. At QUICKRX PHARMACY, our team is here to help you navigate these complexities and maximize your insurance benefits.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Key Insurance Terms You Should Know</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Before diving into specific benefits, it's important to understand key insurance terminology. Your deductible is the amount you must pay out-of-pocket before your insurance begins covering costs. Copayments are fixed amounts you pay for specific services, while coinsurance is a percentage of costs you share with your insurance company after meeting your deductible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The formulary is your insurance plan's list of covered medications, typically organized into tiers with different cost-sharing levels. Tier 1 usually includes generic medications with the lowest copays, while higher tiers include brand-name and specialty medications with higher costs. Understanding your plan's formulary structure can help you make cost-effective medication choices.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your out-of-pocket maximum is the most you'll pay for covered services in a plan year. Once you reach this limit, your insurance covers 100% of additional covered costs. This protection is particularly important for individuals with chronic conditions requiring expensive medications or frequent medical care.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Prescription Drug Coverage Changes for 2025</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many insurance plans have updated their prescription drug formularies for 2025, which may affect your medication costs. Some medications may have moved to different tiers, while others may require prior authorization or step therapy. It's crucial to review your plan's updated formulary to understand how these changes might impact your medications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If your medication has been moved to a higher tier or removed from the formulary entirely, don't panic. Your pharmacist can help you explore alternatives, including generic equivalents or therapeutic substitutes that may be covered at lower cost-sharing levels. In some cases, your doctor can request a formulary exception if medically necessary.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many plans now offer preferred pharmacy networks that provide lower copays when you use specific pharmacies. QUICKRX PHARMACY participates in numerous preferred networks, potentially saving you money on your prescription costs. Ask our team about your plan's preferred pharmacy benefits and how to maximize these savings.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Maximizing Copay Assistance Programs</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Copay assistance programs, offered by pharmaceutical manufacturers, can significantly reduce your out-of-pocket costs for brand-name medications. These programs are typically available for patients with commercial insurance and can provide savings of hundreds or even thousands of dollars annually. However, they're usually not available for government insurance programs like Medicare or Medicaid.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, our team actively helps patients identify and enroll in appropriate copay assistance programs. We maintain current information about available programs and can often complete enrollment paperwork on your behalf. Many programs offer instant savings cards that can be used immediately at the pharmacy counter.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    It's important to understand that copay assistance programs typically have annual limits and may not count toward your insurance plan's deductible or out-of-pocket maximum. Our pharmacists can help you understand how these programs work with your specific insurance plan and develop strategies to maximize your savings throughout the year.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Understanding Prior Authorization Requirements</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Prior authorization is a cost-control measure used by insurance companies to ensure that expensive or potentially inappropriate medications are medically necessary before approving coverage. While this process can be frustrating, understanding how it works can help you navigate it more effectively.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When a medication requires prior authorization, your doctor must submit documentation explaining why the medication is medically necessary for your specific condition. This may include information about previous treatments tried, medical history, and clinical justification for the prescribed therapy. The insurance company then reviews this information and approves or denies coverage.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    QUICKRX PHARMACY can assist with the prior authorization process by contacting your doctor's office, providing necessary forms, and following up on pending requests. We understand that delays in medication access can be concerning, and we work diligently to expedite these processes whenever possible.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Generic vs. Brand Name Medications</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Generic medications contain the same active ingredients as their brand-name counterparts and are required by the FDA to demonstrate bioequivalence, meaning they work in the body the same way as the original medication. However, they typically cost 80-85% less than brand-name versions, making them an excellent option for reducing prescription costs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Most insurance plans encourage generic use through tiered formulary structures that place generics in the lowest-cost tier. Some plans even offer zero-dollar copays for certain generic medications, particularly those used to treat chronic conditions like diabetes, high blood pressure, and high cholesterol.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While generic medications are therapeutically equivalent to brand-name drugs, some patients may experience differences in tolerability due to different inactive ingredients. If you experience issues after switching to a generic medication, discuss this with your pharmacist or doctor. In some cases, a brand-name medication may be medically necessary, and your doctor can request coverage through your insurance plan.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Medicare Part D Updates for 2025</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medicare Part D has implemented several important changes for 2025 that affect prescription drug coverage for Medicare beneficiaries. The most significant change is the implementation of a $2,000 annual out-of-pocket cap for prescription drugs, providing important financial protection for patients with high medication costs.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The Medicare Part D coverage gap, often called the "donut hole," has been modified for 2025. While the gap still exists, the new out-of-pocket cap means that beneficiaries will have more predictable costs throughout the year. Additionally, Medicare now allows plans to spread out-of-pocket costs evenly throughout the year rather than requiring large upfront payments.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many Medicare Part D plans have also updated their formularies for 2025, potentially affecting coverage for your current medications. It's important to review your plan's updated formulary and consider switching plans during the annual open enrollment period if your current plan no longer meets your needs effectively.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Strategies for Reducing Prescription Costs</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beyond insurance coverage, several strategies can help reduce your prescription costs. Pharmacy discount programs, available to patients regardless of insurance status, can provide significant savings on both generic and brand-name medications. These programs are particularly valuable for medications not covered by your insurance plan.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Mail-order pharmacy services, offered by many insurance plans, often provide 90-day supplies at reduced costs compared to 30-day fills at retail pharmacies. However, consider the convenience and personalized service benefits of your local pharmacy when making this decision. Many retail pharmacies now offer competitive pricing for 90-day supplies.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medication synchronization programs can help you manage multiple prescriptions more efficiently while potentially reducing costs through bulk purchasing discounts. These programs align all your prescription refill dates, allowing you to pick up all medications on the same day each month.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Working with Your Pharmacy Team</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your pharmacy team is an invaluable resource for navigating insurance benefits and maximizing your prescription savings. Pharmacists have extensive knowledge of insurance formularies, prior authorization requirements, and available assistance programs. They can often identify cost-saving opportunities that you might not be aware of.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Don't hesitate to ask your pharmacist about generic alternatives, therapeutic substitutions, or assistance programs that might reduce your costs. Many pharmacies also offer price matching or discount programs that can provide additional savings beyond your insurance benefits.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Insurance Benefits Checklist for 2025</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Review your updated plan formulary</li>
                      <li>✓ Understand your deductible and copay structure</li>
                      <li>✓ Identify preferred pharmacy networks</li>
                      <li>✓ Explore copay assistance programs</li>
                      <li>✓ Consider generic medication options</li>
                      <li>✓ Understand prior authorization requirements</li>
                      <li>✓ Know your out-of-pocket maximum</li>
                      <li>✓ Work with your pharmacy team for guidance</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">QUICKRX Insurance Support Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we're committed to helping you navigate the complexities of insurance coverage and maximize your benefits. Our team provides comprehensive insurance counseling, including formulary reviews, prior authorization assistance, and copay assistance program enrollment. We work with all major insurance plans and stay current with coverage changes and updates.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We also offer medication therapy management services that can help optimize your treatment plan while considering cost factors. Our pharmacists can work with your doctors to identify therapeutic alternatives that provide similar benefits at lower costs, ensuring you receive effective treatment within your budget.
                  </p>

                  <div className="bg-blue-100 p-6 rounded-lg mt-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">Need Help with Insurance Questions?</h3>
                    <p className="text-gray-700 mb-4">Our insurance specialists are here to help you understand your benefits and find ways to save on your prescriptions. Contact us today for a free insurance consultation.</p>
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
                      <h4 className="font-medium text-gray-900 mb-1">Holiday Travel Tips</h4>
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

export default InsuranceBenefits

