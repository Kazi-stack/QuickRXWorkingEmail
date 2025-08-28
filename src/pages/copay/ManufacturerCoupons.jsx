import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { DollarSign, ArrowLeft, Phone, Mail, CheckCircle, AlertTriangle, FileText, Users, Shield, Clock, Star, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

function ManufacturerCoupons() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 max-w-7xl">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-700" asChild>
            <Link to="/copay-assistance">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Copay Assistance
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 shadow-lg">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Manufacturer <span className="text-green-400">Coupons & Savings</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Access manufacturer-sponsored savings programs and coupons to significantly reduce your prescription medication costs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Manufacturer Coupon Programs</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Pharmaceutical manufacturers often provide coupon programs and savings cards to help patients afford their brand-name medications. These programs are designed to reduce out-of-pocket costs for eligible patients, making essential medications more accessible and affordable. At QUICKRX PHARMACY, we specialize in helping patients navigate these programs and maximize their savings opportunities.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Manufacturer coupon programs represent one of the most effective ways to reduce prescription costs, particularly for brand-name medications that may not have generic alternatives available. These programs are typically offered directly by pharmaceutical companies as part of their patient support initiatives, recognizing that medication affordability is a significant concern for many patients and their families.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">How Manufacturer Coupons Work</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Manufacturer coupons function as discount cards that can be applied at the point of sale when you pick up your prescription. These coupons are typically available through the manufacturer's website, through healthcare provider offices, or through pharmacy assistance programs like ours. The savings can be substantial, often reducing copays to as little as $5-$25 per prescription, regardless of your insurance coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The process is straightforward: when you bring your prescription to QUICKRX PHARMACY, our pharmacists will check for available manufacturer coupons for your specific medication. If a coupon is available and you're eligible, we'll apply it to your prescription automatically, ensuring you receive the maximum possible savings. This service is provided at no additional cost as part of our commitment to making medications more affordable for our community.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Many patients are surprised to learn that manufacturer coupons can often be used in conjunction with insurance coverage. In many cases, the coupon will cover your insurance copay, resulting in significant additional savings. Our experienced pharmacists understand the nuances of how these programs interact with different insurance plans and can help you navigate the process to ensure optimal savings.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Types of Manufacturer Savings Programs</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Manufacturer savings programs come in several different formats, each designed to address specific patient needs and circumstances. Instant savings coupons provide immediate discounts at the pharmacy counter, reducing your out-of-pocket costs on the spot. These are the most common type of manufacturer coupon and are typically valid for a specific period, often ranging from six months to a year.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Copay assistance programs are another popular option, particularly for patients with commercial insurance. These programs are designed to reduce or eliminate copays for specific medications, often capping your out-of-pocket costs at a predetermined amount. For example, a copay assistance program might limit your monthly cost to $25, regardless of what your insurance copay would normally be.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Free trial programs allow patients to try a new medication at no cost for a limited period, typically 30 days. This gives patients and their healthcare providers an opportunity to assess the medication's effectiveness before committing to long-term treatment. These programs are particularly valuable for expensive specialty medications where the cost might otherwise be prohibitive.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Patient assistance programs represent the most comprehensive form of manufacturer support, providing free or significantly discounted medications to patients who meet specific financial criteria. These programs are typically reserved for patients without insurance or those facing significant financial hardship, and they often require an application process that includes income verification.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Eligibility Requirements and Restrictions</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                While manufacturer coupon programs offer substantial savings opportunities, they do come with specific eligibility requirements and restrictions that patients need to understand. Most importantly, these programs are typically not available to patients whose prescriptions are covered by government-funded insurance programs such as Medicare, Medicaid, or Tricare. This restriction is mandated by federal law and applies to virtually all manufacturer coupon programs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For patients with commercial insurance, eligibility is generally more straightforward, though some programs may have income limits or other restrictions. Age requirements may also apply, with some programs limited to adults or requiring parental consent for minors. Additionally, some coupons are only valid for new prescriptions or first-time users of a particular medication.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Geographic restrictions may also apply, with some programs only available to residents of certain states or regions. International patients or those visiting from other countries are typically not eligible for these programs. It's also important to note that manufacturer coupons usually cannot be combined with other discount programs or pharmacy savings cards.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Duration limits are another important consideration. Most manufacturer coupons have expiration dates, and some have annual or lifetime limits on the total savings amount. Our pharmacists at QUICKRX PHARMACY stay current on these program details and can help you understand any limitations that might apply to your specific situation.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Maximizing Your Savings</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                To maximize your savings through manufacturer coupon programs, it's important to work with a pharmacy that actively monitors these opportunities and has the expertise to navigate the various program requirements. At QUICKRX PHARMACY, our pharmacists regularly review available programs and proactively identify savings opportunities for our patients.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Timing can be crucial when it comes to manufacturer coupons. Some programs offer enhanced savings for new patients or during specific promotional periods. Our team stays informed about these opportunities and can advise you on the optimal timing for starting a new medication or switching from a generic to a brand-name option when significant savings are available.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                It's also worth considering the total cost of therapy when evaluating manufacturer coupon programs. While a coupon might make a brand-name medication affordable in the short term, it's important to understand what will happen when the coupon expires. Our pharmacists can help you develop a long-term medication strategy that takes into account both immediate savings and future costs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Documentation is another important aspect of maximizing your savings. Keep records of your coupon usage, including expiration dates and any annual limits. This information will help you and your pharmacist plan for future prescription fills and identify when it might be time to explore alternative savings options.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Common Medications with Manufacturer Coupons</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Manufacturer coupon programs are available for a wide range of medications across various therapeutic categories. Specialty medications for conditions such as rheumatoid arthritis, multiple sclerosis, and cancer often have robust coupon programs due to their high costs. These programs can provide savings of hundreds or even thousands of dollars per prescription.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Cardiovascular medications, including newer cholesterol-lowering drugs and blood pressure medications, frequently offer coupon programs. Diabetes medications, particularly newer insulin formulations and GLP-1 receptor agonists, often have comprehensive savings programs that can significantly reduce monthly costs for patients.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Mental health medications, including antidepressants and antipsychotics, may also have manufacturer coupon programs available. Respiratory medications for conditions like asthma and COPD often include savings programs, particularly for newer inhaler formulations that may not have generic alternatives.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our pharmacists at QUICKRX PHARMACY maintain current information about coupon availability across all therapeutic categories and can quickly identify potential savings opportunities for any medication you're prescribed. We encourage patients to ask about manufacturer coupons for any new prescription, as programs are constantly being updated and new opportunities become available regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Benefits of Manufacturer Coupons</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how manufacturer coupon programs can make your medications more affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Significant Savings</h3>
                <p className="text-gray-600">Reduce prescription costs by up to 80% with manufacturer coupon programs</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Instant Application</h3>
                <p className="text-gray-600">Savings are applied immediately at the pharmacy counter</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">No Hidden Fees</h3>
                <p className="text-gray-600">Free program with no enrollment or membership costs</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Expert Assistance</h3>
                <p className="text-gray-600">Our pharmacists help you find and apply the best available coupons</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Improved Access</h3>
                <p className="text-gray-600">Make essential medications more affordable and accessible</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Ongoing Support</h3>
                <p className="text-gray-600">Continuous monitoring for new savings opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Restrictions</h3>
                  <p className="text-yellow-700">
                    Manufacturer coupons are not valid for prescriptions covered by Medicare, Medicaid, Tricare, or other government insurance programs. Eligibility requirements and program terms are determined by the manufacturer and may change without notice.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Educational Information</h3>
                  <p className="text-blue-700">
                    Information provided is for educational purposes only. QUICKRX PHARMACY does not sponsor or administer manufacturer coupon programs but provides assistance in accessing these manufacturer-sponsored savings opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Saving?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact QUICKRX PHARMACY today to learn about manufacturer coupon programs available for your medications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call 
                <a href="tel:914-449-1218">
                  914-449-1218
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ManufacturerCoupons

