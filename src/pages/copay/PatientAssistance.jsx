import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Users, ArrowLeft, Phone, Mail, CheckCircle, AlertTriangle, FileText, Heart, Shield, Clock, Star, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

function PatientAssistance() {
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
              <Users className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Patient <span className="text-green-400">Assistance Programs</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive financial hardship programs designed to help qualifying patients access essential medications at reduced or no cost
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Patient Assistance Programs</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Patient Assistance Programs (PAPs) represent one of the most comprehensive forms of pharmaceutical support available to patients facing financial hardship. These programs are sponsored directly by pharmaceutical manufacturers and are designed to provide free or significantly discounted medications to eligible patients who meet specific income and insurance criteria. At QUICKRX PHARMACY, we specialize in helping patients navigate these complex programs and access the medications they need regardless of their financial circumstances.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Unlike simple coupon programs, Patient Assistance Programs are comprehensive support systems that often provide medications at no cost to qualifying patients. These programs recognize that medication affordability is a critical barrier to healthcare access and are designed to ensure that financial constraints do not prevent patients from receiving necessary treatment. The programs are particularly valuable for patients with chronic conditions who require ongoing medication therapy.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The scope of Patient Assistance Programs extends far beyond simple cost reduction. These programs often include additional support services such as medication counseling, adherence support, and coordination with healthcare providers. Many programs also provide educational resources to help patients better understand their conditions and treatment options, creating a comprehensive support network that addresses both financial and educational needs.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Eligibility Criteria and Requirements</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Patient Assistance Programs typically have specific eligibility criteria that patients must meet to qualify for support. Income requirements are the most common qualification factor, with most programs designed to assist patients whose household income falls below a certain percentage of the Federal Poverty Level. These thresholds vary by program but commonly range from 200% to 400% of the Federal Poverty Level, depending on the manufacturer and specific medication.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance status is another critical factor in determining eligibility. Many Patient Assistance Programs are specifically designed for uninsured patients or those whose insurance does not cover their prescribed medication. Some programs also assist patients who have insurance but face high out-of-pocket costs due to high deductibles, copays, or coverage gaps. Patients with government insurance such as Medicare, Medicaid, or Tricare are typically not eligible for these programs due to federal regulations.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Residency requirements are standard across most programs, with eligibility typically limited to legal residents of the United States and its territories. Some programs may have additional geographic restrictions or may not be available in all states. Age requirements may also apply, with some programs having specific provisions for pediatric patients or elderly individuals.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Documentation requirements for Patient Assistance Programs are typically more extensive than those for simple coupon programs. Patients usually need to provide proof of income, insurance status, and residency. This may include tax returns, pay stubs, bank statements, insurance cards, and other financial documentation. Our team at QUICKRX PHARMACY can help patients understand what documentation is required and assist with the application process.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Application Process and Timeline</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The application process for Patient Assistance Programs is typically more involved than other savings programs, but the potential benefits make the effort worthwhile. Most programs require a formal application that includes detailed financial information, medical history, and prescriber information. The application process usually involves both the patient and their healthcare provider, as physician attestation is often required to confirm medical necessity.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Processing times for Patient Assistance Program applications vary by manufacturer and program, but typically range from two to six weeks. Some programs offer expedited processing for urgent medical situations, while others may take longer during peak application periods. It's important to apply as early as possible to avoid gaps in medication access, and our pharmacists can help coordinate temporary supplies when necessary.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many Patient Assistance Programs require annual reapplication to maintain eligibility. This ensures that assistance continues to go to those who need it most and allows programs to verify that patients still meet eligibility criteria. The reapplication process is typically streamlined compared to the initial application, but still requires updated financial documentation and physician confirmation.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                At QUICKRX PHARMACY, we maintain relationships with Patient Assistance Program coordinators and can often expedite the application process or provide updates on application status. Our team is experienced in navigating the various program requirements and can help ensure that applications are complete and accurate, reducing the likelihood of delays or rejections.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Types of Support Available</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Patient Assistance Programs offer various types of support depending on the specific program and patient needs. Free medication programs provide qualifying patients with their prescribed medications at no cost for a specified period, typically ranging from three months to one year. These programs are particularly valuable for expensive specialty medications where the cost would otherwise be prohibitive.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Reduced-cost programs offer medications at significantly discounted prices, often based on a sliding scale related to income level. These programs are designed for patients who may not qualify for free medication but still face financial hardship in affording their prescriptions. The discounts can be substantial, often reducing costs by 75% or more compared to standard retail prices.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Some Patient Assistance Programs also provide additional support services beyond medication access. These may include patient education materials, adherence support programs, disease management resources, and coordination with healthcare providers. Some programs offer nursing support or patient advocates who can help navigate treatment options and coordinate care.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Emergency assistance programs are available through some manufacturers for patients facing immediate medication access issues. These programs can provide short-term medication supplies while longer-term assistance applications are processed. Emergency programs typically have expedited approval processes but may have more limited duration or scope compared to standard Patient Assistance Programs.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Specialty Medication Support</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Patient Assistance Programs are particularly important for specialty medications used to treat complex conditions such as cancer, autoimmune diseases, rare genetic disorders, and other serious medical conditions. These medications often cost thousands of dollars per month, making them financially inaccessible for many patients without assistance. Specialty medication Patient Assistance Programs often provide the most comprehensive support available.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Many specialty medication programs include additional services such as specialized pharmacy networks, home delivery options, and dedicated patient support coordinators. These programs recognize that patients using specialty medications often have complex medical needs and may require additional support beyond simple medication access. The programs may also coordinate with specialty pharmacies to ensure proper medication handling and storage.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Oncology Patient Assistance Programs often provide particularly comprehensive support, recognizing the urgent nature of cancer treatment and the significant financial burden that cancer medications can impose on patients and families. These programs may offer expedited processing, emergency medication supplies, and coordination with oncology treatment centers to ensure continuity of care.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Rare disease Patient Assistance Programs address the unique challenges faced by patients with rare conditions, where treatment options may be limited and medications extremely expensive. These programs often provide medications at no cost to qualifying patients and may include additional support services such as disease education, patient advocacy, and coordination with rare disease specialists.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Working with Healthcare Providers</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Successful participation in Patient Assistance Programs often requires close coordination between patients, pharmacists, and healthcare providers. Physicians play a crucial role in the application process, as they must typically provide medical justification for the prescribed medication and confirm that the treatment is medically necessary. This physician involvement helps ensure that assistance goes to patients who truly need the medication for their health.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Healthcare providers can also help identify alternative treatment options if a patient doesn't qualify for a particular Patient Assistance Program. This might include switching to a different medication that has more accessible assistance programs or exploring other treatment approaches that may be more affordable. The collaborative approach ensures that patients receive appropriate treatment regardless of their financial circumstances.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                At QUICKRX PHARMACY, we work closely with healthcare providers to streamline the Patient Assistance Program process. We can communicate directly with prescribers' offices to obtain necessary documentation, provide updates on application status, and coordinate medication supplies to ensure continuity of treatment. This collaborative approach reduces the burden on patients while ensuring that all program requirements are met.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our pharmacists also serve as advocates for patients throughout the Patient Assistance Program process. We can help communicate with program administrators, appeal denied applications when appropriate, and explore alternative assistance options if initial applications are unsuccessful. This advocacy role is particularly important for patients who may not have the resources or knowledge to navigate these complex programs independently.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Long-term Planning and Sustainability</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                While Patient Assistance Programs provide crucial short-term relief, it's important to consider long-term medication access planning. Most programs have time limits, typically ranging from one to two years, after which patients may need to reapply or explore alternative options. Understanding these limitations helps patients and their healthcare teams develop sustainable treatment strategies.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Some patients may experience changes in their financial circumstances that affect their eligibility for Patient Assistance Programs. Job changes, insurance modifications, or income fluctuations can impact program eligibility, making it important to maintain regular communication with program administrators and pharmacy teams. Our pharmacists can help monitor these changes and adjust assistance strategies accordingly.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For patients with chronic conditions requiring long-term medication therapy, developing a comprehensive affordability strategy may involve multiple approaches. This might include combining Patient Assistance Programs with other savings opportunities, exploring generic alternatives when they become available, or working with insurance providers to improve coverage options.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                At QUICKRX PHARMACY, we help patients develop long-term medication affordability plans that consider both current assistance opportunities and future needs. This proactive approach helps ensure continuity of treatment and reduces the stress associated with medication access concerns. We maintain ongoing relationships with patients to monitor their needs and adjust assistance strategies as circumstances change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Benefits of Patient Assistance Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support for patients facing financial hardship in accessing essential medications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Free Medications</h3>
                <p className="text-gray-600">Qualifying patients may receive medications at no cost through manufacturer programs</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Comprehensive Support</h3>
                <p className="text-gray-600">Additional services including patient education and adherence support</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Long-term Access</h3>
                <p className="text-gray-600">Extended support periods, typically 6-12 months with renewal options</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Specialty Medications</h3>
                <p className="text-gray-600">Access to expensive specialty drugs for complex medical conditions</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Expert Assistance</h3>
                <p className="text-gray-600">Professional help with applications and program navigation</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Ongoing Monitoring</h3>
                <p className="text-gray-600">Continuous support and monitoring for program renewals and updates</p>
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
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Eligibility Requirements</h3>
                  <p className="text-yellow-700">
                    Patient Assistance Programs have specific income and insurance requirements. Patients with government insurance (Medicare, Medicaid, Tricare) are typically not eligible. Application and documentation requirements vary by program.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Program Information</h3>
                  <p className="text-blue-700">
                    Patient Assistance Programs are sponsored and administered by pharmaceutical manufacturers. QUICKRX PHARMACY provides assistance with applications and program navigation but does not sponsor these programs directly.
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
            <h2 className="text-3xl font-bold mb-4 text-white">Need Help with Patient Assistance Programs?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our experienced team can help you navigate Patient Assistance Programs and find the support you need for your medications.
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

export default PatientAssistance

