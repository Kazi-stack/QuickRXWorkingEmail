import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Pill, ArrowLeft, Phone, Mail, CheckCircle, AlertTriangle, FileText, Users, Heart, Clock, Star, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'

function GenericOptions() {
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
              <Pill className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Generic <span className="text-green-400">Medication Options</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Expert counseling on cost-effective generic alternatives to help you save money while maintaining the same therapeutic benefits
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Understanding Generic Medications</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Generic medications represent one of the most effective ways to reduce prescription costs while maintaining the same therapeutic benefits as brand-name drugs. At QUICKRX PHARMACY, our generic medication counseling service is designed to help patients understand their options and make informed decisions about cost-effective alternatives. Our experienced pharmacists provide comprehensive education about generic medications, helping patients feel confident about making the switch when appropriate.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                The development and approval of generic medications is a rigorous process overseen by the Food and Drug Administration (FDA). Generic drugs must demonstrate bioequivalence to their brand-name counterparts, meaning they must deliver the same amount of active ingredient to the body in the same time frame. This ensures that generic medications provide the same therapeutic effects as brand-name drugs while typically costing 80-85% less than the original brand-name version.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Understanding the science behind generic medications helps patients feel more confident about making cost-saving switches. Generic drugs contain the same active ingredients as brand-name medications and are manufactured under the same strict quality standards. The primary differences are typically in inactive ingredients such as fillers, dyes, or preservatives, which generally do not affect the medication's therapeutic action but may occasionally cause different reactions in sensitive individuals.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">FDA Approval and Safety Standards</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The FDA approval process for generic medications is comprehensive and ensures that these alternatives meet the same rigorous safety and efficacy standards as brand-name drugs. Generic manufacturers must demonstrate that their products are pharmaceutically equivalent to the brand-name drug, meaning they contain the same active ingredient in the same strength and dosage form. Additionally, they must prove bioequivalence through clinical studies that show the generic drug performs in the body the same way as the brand-name drug.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Manufacturing facilities for generic medications are subject to the same FDA inspections and quality standards as those producing brand-name drugs. These facilities must comply with Good Manufacturing Practices (GMP), which ensure consistent quality, purity, and potency of medications. The FDA conducts regular inspections of generic manufacturing facilities both in the United States and internationally to ensure ongoing compliance with these standards.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Post-market surveillance for generic medications is equally rigorous, with the FDA monitoring adverse events, quality issues, and manufacturing problems. This ongoing oversight ensures that generic medications continue to meet safety and efficacy standards throughout their market life. Any quality issues or safety concerns are addressed promptly through recalls, warnings, or other regulatory actions as appropriate.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The FDA's Orange Book, officially known as "Approved Drug Products with Therapeutic Equivalence Evaluations," provides comprehensive information about approved generic medications and their therapeutic equivalence ratings. Our pharmacists use this resource to identify appropriate generic alternatives and ensure that substitutions are both safe and effective for individual patients.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Cost Savings and Economic Benefits</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The cost savings associated with generic medications can be substantial, often reducing prescription costs by 80% or more compared to brand-name alternatives. These savings result from the competitive marketplace that develops once generic versions become available, as multiple manufacturers can produce the same medication, driving prices down through competition. For patients taking multiple medications or those with chronic conditions requiring long-term treatment, these savings can amount to thousands of dollars annually.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Insurance companies typically encourage the use of generic medications through tiered formulary structures that place generics in lower-cost tiers with reduced copays. Many insurance plans require patients to try generic alternatives before covering brand-name medications, a practice known as step therapy. Understanding these insurance preferences can help patients and healthcare providers make cost-effective prescribing decisions that maximize insurance benefits.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For patients without insurance or those in high-deductible health plans, generic medications can make the difference between being able to afford necessary treatments and going without medication. The significant cost reduction offered by generics helps ensure that financial constraints do not become barriers to essential healthcare. Our pharmacists can help patients identify generic options and calculate potential savings to make informed decisions about their medication choices.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The economic benefits of generic medications extend beyond individual patient savings to the broader healthcare system. Generic medications help control healthcare costs while maintaining quality care, allowing healthcare resources to be allocated more efficiently. This system-wide benefit ultimately helps keep healthcare costs more manageable for everyone while ensuring continued access to essential medications.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Therapeutic Equivalence and Clinical Effectiveness</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Therapeutic equivalence is a key concept in understanding generic medications and their relationship to brand-name drugs. The FDA assigns therapeutic equivalence codes to generic medications based on their ability to produce the same clinical effect as the brand-name drug when administered under the same conditions. Medications rated as therapeutically equivalent can be expected to have the same clinical effect and safety profile as the brand-name drug.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Bioequivalence studies required for generic approval demonstrate that the generic medication delivers the same amount of active ingredient to the bloodstream in the same time frame as the brand-name drug. These studies typically involve healthy volunteers who receive both the generic and brand-name versions of the medication, with blood samples taken to measure drug levels over time. The results must show that the generic performs within acceptable statistical ranges compared to the brand-name drug.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Clinical effectiveness of generic medications has been demonstrated through decades of use and extensive post-market surveillance. Studies comparing health outcomes between patients using generic versus brand-name medications consistently show equivalent therapeutic results. This real-world evidence supports the scientific data from bioequivalence studies and provides additional confidence in the effectiveness of generic alternatives.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For most patients, switching from brand-name to generic medications results in no noticeable difference in therapeutic effect. However, our pharmacists recognize that individual responses can vary, and we work closely with patients and their healthcare providers to monitor any changes when switching to generic alternatives. This personalized approach ensures that each patient receives optimal therapeutic outcomes while maximizing cost savings.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Addressing Common Concerns and Misconceptions</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Despite the proven safety and efficacy of generic medications, some patients have concerns about switching from brand-name drugs. Common misconceptions include beliefs that generic medications are less effective, lower quality, or more likely to cause side effects. Our pharmacists take time to address these concerns with factual information and help patients understand the rigorous standards that generic medications must meet.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                One common concern is about differences in appearance between generic and brand-name medications. Generic medications may look different from their brand-name counterparts due to trademark laws that prevent generic manufacturers from copying the exact appearance of brand-name drugs. However, these cosmetic differences do not affect the medication's therapeutic properties. Our pharmacists help patients understand these differences and provide clear labeling to prevent confusion.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Some patients worry about differences in inactive ingredients between generic and brand-name medications. While inactive ingredients may vary, they are carefully selected to ensure they do not interfere with the medication's effectiveness. In rare cases, patients may have sensitivities to specific inactive ingredients, and our pharmacists can help identify alternatives or work with healthcare providers to address these concerns.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Quality concerns about generic medications are often based on misunderstandings about manufacturing standards and oversight. Our pharmacists provide education about FDA oversight, manufacturing standards, and quality assurance processes to help patients feel confident about generic alternatives. We also discuss the extensive post-market surveillance that ensures ongoing quality and safety of generic medications.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Personalized Generic Medication Counseling</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                At QUICKRX PHARMACY, we provide personalized counseling to help each patient make informed decisions about generic medication options. This counseling begins with a comprehensive review of the patient's current medications, medical history, and individual circumstances. We consider factors such as the patient's response to current medications, any previous experiences with generic alternatives, and specific health conditions that might influence medication choices.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our counseling process includes detailed explanations of how generic medications work, their approval process, and expected therapeutic outcomes. We provide specific information about each generic alternative, including potential cost savings, appearance differences, and any relevant considerations for the individual patient. This personalized approach ensures that patients have all the information they need to make confident decisions about their medication therapy.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                For patients with multiple medications, we can conduct comprehensive reviews to identify all potential generic alternatives and calculate total potential savings. This holistic approach helps patients understand the cumulative impact of switching to generic medications and can result in significant overall cost reductions. We also coordinate with healthcare providers to ensure that any medication changes are appropriate and well-documented.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Follow-up counseling is an important component of our generic medication service. We monitor patients after switches to generic alternatives to ensure continued therapeutic effectiveness and address any concerns that may arise. This ongoing support helps ensure successful transitions and optimal outcomes for patients choosing generic medication options.
              </p>

              <h3 className="text-2xl font-bold text-blue-900 mb-4">Special Considerations and Exceptions</h3>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                While generic medications are appropriate for most patients and conditions, there are some special circumstances where brand-name medications may be preferred or required. Narrow therapeutic index drugs, which have small differences between effective and toxic doses, may require more careful consideration when switching to generic alternatives. Examples include warfarin, digoxin, and certain seizure medications, where small variations in blood levels could have significant clinical implications.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Patients with severe allergies or sensitivities to specific inactive ingredients may need to avoid certain generic formulations. Our pharmacists can review ingredient lists and help identify generic alternatives that avoid problematic ingredients. In some cases, this may require trying different generic manufacturers or, in rare instances, continuing with brand-name medications when suitable generic alternatives are not available.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Some patients may experience different responses when switching between different generic manufacturers of the same medication. While this is uncommon, it can occur due to variations in inactive ingredients or manufacturing processes. Our pharmacists can help identify specific generic manufacturers that work best for individual patients and work to ensure consistency in dispensing when possible.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                For patients with complex medical conditions or those taking multiple medications, we work closely with healthcare providers to ensure that any switches to generic alternatives are appropriate and well-monitored. This collaborative approach ensures that cost savings do not come at the expense of therapeutic effectiveness or patient safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Benefits of Generic Medications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how generic medications can provide the same therapeutic benefits at a fraction of the cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Significant Savings</h3>
                <p className="text-gray-600">Save 80-85% compared to brand-name medications with the same therapeutic benefits</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">FDA Approved</h3>
                <p className="text-gray-600">Same rigorous safety and efficacy standards as brand-name medications</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pill className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Same Active Ingredients</h3>
                <p className="text-gray-600">Identical active ingredients and therapeutic effects as brand-name drugs</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Expert Counseling</h3>
                <p className="text-gray-600">Professional guidance on generic options and therapeutic equivalence</p>
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
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">Quality Assurance</h3>
                <p className="text-gray-600">Ongoing FDA oversight and quality monitoring for safety and effectiveness</p>
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
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Individual Considerations</h3>
                  <p className="text-yellow-700">
                    While generic medications are safe and effective for most patients, individual responses may vary. Some patients with specific allergies or sensitivities may need to avoid certain generic formulations. Always consult with your healthcare provider before making medication changes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <FileText className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Guidance</h3>
                  <p className="text-blue-700">
                    Our pharmacists provide educational information about generic medications to help you make informed decisions. Generic medication counseling is provided as a professional service to help optimize your medication therapy and costs.
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
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Explore Generic Options?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact QUICKRX PHARMACY today to learn about generic medication alternatives that can help you save money while maintaining therapeutic effectiveness.
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

export default GenericOptions

