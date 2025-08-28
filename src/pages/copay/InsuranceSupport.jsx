import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Shield, ArrowLeft, Phone, Mail, CheckCircle, AlertTriangle, FileText, Users, Heart, Clock, Star, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

function InsuranceSupport() {
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Insurance <span className="text-green-400">Support Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert assistance navigating insurance claims, prior authorizations, and coverage issues to maximize your prescription benefits
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Comprehensive Insurance Support Services</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Navigating insurance coverage for prescription medications can be complex and frustrating, especially when dealing with prior authorizations, coverage denials, or formulary restrictions. At QUICKRX PHARMACY, our insurance support services are designed to help patients maximize their prescription benefits and overcome common insurance-related barriers to medication access. Our experienced team understands the intricacies of various insurance plans and works diligently to ensure patients receive the coverage they're entitled to.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance support services encompass a wide range of activities designed to optimize prescription coverage and minimize out-of-pocket costs for patients. This includes everything from basic insurance verification and claims processing to complex prior authorization submissions and appeals processes. Our goal is to remove the administrative burden from patients and their healthcare providers while ensuring that insurance benefits are utilized to their fullest extent.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The complexity of modern insurance plans, with their varying formularies, tier structures, and coverage restrictions, makes professional insurance support increasingly valuable. Our team stays current with the constantly changing landscape of insurance coverage and maintains relationships with insurance providers to facilitate smooth claims processing and rapid resolution of coverage issues.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Prior Authorization Assistance</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Prior authorization requirements have become increasingly common as insurance companies seek to control prescription drug costs. These requirements can create significant delays in medication access and place administrative burdens on both patients and healthcare providers. Our prior authorization assistance service is designed to streamline this process and minimize delays in getting patients the medications they need.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The prior authorization process typically involves submitting detailed clinical information to insurance companies to justify the medical necessity of a prescribed medication. This may include patient medical history, previous treatment attempts, laboratory results, and physician documentation of treatment rationale. Our team is experienced in preparing comprehensive prior authorization submissions that address insurance company requirements and maximize the likelihood of approval.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                When prior authorizations are denied, our team can assist with the appeals process, working with healthcare providers to gather additional documentation and present compelling cases for coverage. We understand the specific requirements of different insurance companies and can tailor appeals to address their particular concerns and criteria. This expertise significantly improves the success rate of appeals and reduces the time required to obtain coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For urgent medical situations, we can assist with expedited prior authorization requests, working directly with insurance companies and healthcare providers to prioritize time-sensitive cases. Our established relationships with insurance providers often allow us to expedite these requests more effectively than individual patients or busy healthcare offices might be able to accomplish independently.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Formulary Navigation and Optimization</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance formularies are lists of medications that are covered by specific insurance plans, often organized into different tiers with varying copay amounts. Understanding formulary structures and identifying the most cost-effective options within a patient's coverage can result in significant savings. Our formulary navigation service helps patients and their healthcare providers identify covered alternatives and optimize medication choices based on both clinical effectiveness and insurance coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Formulary changes occur regularly, with insurance companies adding and removing medications from their covered lists throughout the year. These changes can affect patient costs and access to medications, sometimes requiring switches to alternative treatments. Our team monitors formulary changes for our patients and proactively identifies when adjustments may be needed to maintain optimal coverage and affordability.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                When a prescribed medication is not covered by a patient's insurance plan, we work with healthcare providers to identify therapeutically equivalent alternatives that are covered. This process involves understanding both the clinical requirements of the patient's condition and the specific coverage criteria of their insurance plan. Our pharmacists can provide detailed information about covered alternatives to help healthcare providers make informed prescribing decisions.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For patients with multiple insurance plans, such as those with both Medicare and supplemental coverage, we can help optimize the coordination of benefits to minimize out-of-pocket costs. This involves understanding how different plans interact and identifying the most advantageous way to process claims to maximize coverage and minimize patient costs.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Claims Processing and Problem Resolution</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance claims processing can sometimes encounter problems that result in coverage denials or unexpected costs for patients. Common issues include incorrect patient information, outdated insurance cards, coordination of benefits problems, or technical errors in claims submission. Our insurance support team is experienced in identifying and resolving these issues quickly to minimize delays and ensure proper coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                When claims are denied, we conduct thorough investigations to determine the cause and develop appropriate resolution strategies. This may involve correcting patient information, resubmitting claims with additional documentation, or working with insurance companies to resolve technical issues. Our goal is to resolve claims problems as quickly as possible to avoid delays in medication access.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For patients experiencing unexpected changes in their coverage or copay amounts, we can investigate the cause and help identify solutions. This might involve verifying insurance eligibility, checking for formulary changes, or identifying additional coverage options that the patient may not be aware of. Our comprehensive approach ensures that patients receive all the coverage benefits they're entitled to.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                We also assist patients with understanding their insurance benefits and coverage details. Many patients are not fully aware of their prescription coverage options, including mail-order benefits, preferred pharmacy networks, or specialty pharmacy requirements. Our team can explain these benefits and help patients make informed decisions about how to best utilize their coverage.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Specialty Medication Insurance Support</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Specialty medications often have unique insurance requirements and coverage restrictions that can make access particularly challenging. These medications may require special handling, administration, or monitoring, and insurance companies often have specific requirements for coverage approval. Our specialty medication insurance support service is designed to navigate these complex requirements and ensure patients can access the specialty treatments they need.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many insurance plans require specialty medications to be dispensed through specific specialty pharmacy networks. We can help patients understand these requirements and coordinate with specialty pharmacies to ensure smooth transitions and continuity of care. This includes helping with enrollment in specialty pharmacy programs and coordinating delivery and monitoring services.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Prior authorization requirements for specialty medications are often more complex and may require extensive clinical documentation. Our team is experienced in preparing comprehensive prior authorization submissions for specialty medications, including gathering required laboratory results, physician documentation, and treatment history information. We understand the specific requirements for different specialty medication categories and can tailor submissions accordingly.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For patients whose insurance does not adequately cover specialty medications, we can help identify alternative coverage options, including manufacturer assistance programs, foundation grants, or state assistance programs. Our comprehensive approach ensures that patients have access to all available resources for specialty medication access and affordability.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Medicare and Government Insurance Support</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare and other government insurance programs have unique rules and requirements that can be particularly challenging to navigate. Medicare Part D prescription coverage, in particular, has complex formulary structures, coverage gaps (the "donut hole"), and specific requirements for prior authorizations and appeals. Our Medicare support service is designed to help patients understand and optimize their Medicare prescription benefits.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The Medicare Part D coverage gap, commonly known as the "donut hole," can result in significantly higher out-of-pocket costs for patients during certain periods of the year. We help patients understand when they might enter the coverage gap and develop strategies to minimize its impact. This may include timing prescription fills, identifying generic alternatives, or accessing manufacturer assistance programs that are compatible with Medicare coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare Advantage plans often have different formularies and coverage requirements than traditional Medicare with Part D coverage. We help patients understand the differences between their plan options and optimize their medication coverage based on their specific plan requirements. This includes helping with plan comparisons during open enrollment periods to ensure patients select the most appropriate coverage for their medication needs.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For patients with both Medicare and Medicaid coverage (dual eligible), we help coordinate benefits between the two programs to maximize coverage and minimize costs. This dual coverage can provide additional benefits and protections, but it also requires careful coordination to ensure claims are processed correctly and patients receive all available benefits.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Insurance Education and Advocacy</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Understanding insurance coverage can be overwhelming for many patients, particularly those dealing with complex medical conditions or multiple medications. Our insurance education service is designed to help patients understand their coverage options, rights, and responsibilities. We provide clear explanations of insurance terms, coverage structures, and patient rights to help individuals make informed decisions about their healthcare coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Patient advocacy is a crucial component of our insurance support services. When patients face coverage denials or other insurance-related challenges, we serve as advocates to help resolve these issues. This may involve communicating directly with insurance companies, coordinating with healthcare providers, or helping patients understand their appeal rights and options.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We also help patients understand their rights under various healthcare laws and regulations, including protections for emergency medications, appeal processes, and external review options. This knowledge empowers patients to advocate for themselves and ensures they receive all the protections and benefits they're entitled to under their insurance coverage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our team stays current with changes in insurance regulations and coverage requirements, ensuring that our advocacy efforts are based on the most current information and best practices. This ongoing education allows us to provide the most effective support and advocacy for our patients' insurance-related needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Benefits of Insurance Support Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional assistance to maximize your insurance benefits and minimize prescription costs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Expert Navigation</h3>
                <p className="text-gray-600">Professional assistance with complex insurance requirements and processes</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Prior Authorization</h3>
                <p className="text-gray-600">Streamlined prior authorization submissions and appeals processing</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Cost Optimization</h3>
                <p className="text-gray-600">Formulary navigation to identify the most cost-effective covered options</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Patient Advocacy</h3>
                <p className="text-gray-600">Dedicated support and advocacy for coverage denials and appeals</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Faster Resolution</h3>
                <p className="text-gray-600">Expedited processing and resolution of insurance-related issues</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Comprehensive Care</h3>
                <p className="text-gray-600">Ongoing monitoring and support for changing insurance needs</p>
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
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Insurance Requirements</h3>
                  <p className="text-yellow-700">
                    Insurance coverage requirements and processes vary by plan and provider. Prior authorization and appeals processes may take time, and coverage is not guaranteed. We recommend maintaining communication with your healthcare provider throughout the process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Service Information</h3>
                  <p className="text-blue-700">
                    Insurance support services are provided as a professional service to help patients navigate their existing insurance benefits. We do not guarantee coverage outcomes but work diligently to maximize your insurance benefits and resolve coverage issues.
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
            <h2 className="text-3xl font-bold mb-4 text-white">Need Help with Insurance Issues?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our insurance support specialists are ready to help you navigate coverage challenges and maximize your prescription benefits.
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

export default InsuranceSupport

