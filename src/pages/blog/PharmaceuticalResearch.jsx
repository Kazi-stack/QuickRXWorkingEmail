import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, BookOpen, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShareButton from '../../components/ShareButton.jsx'
import medicalResearch from '../../assets/images/blog/medical-research.jpg'

function PharmaceuticalResearch() {
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
              Medical Research
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Latest Advances in Pharmaceutical Research: What's New in 2025
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Stay informed about the latest breakthroughs in pharmaceutical research and how they might impact your healthcare.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Dr. James Park, PharmD, PhD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>December 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>12 min read</span>
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
                    src={medicalResearch} 
                    alt="Medical research laboratory with scientists working"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Cutting-edge pharmaceutical research continues to drive innovation in healthcare and patient treatment.
                  </p>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    The pharmaceutical industry continues to evolve at an unprecedented pace, with 2025 marking a particularly exciting year for medical breakthroughs and innovative treatments. At QUICKRX PHARMACY, we're committed to staying at the forefront of these developments to better serve our patients and provide access to the most advanced therapeutic options available.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Personalized Medicine Revolution</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of the most promising areas of development is personalized medicine, which tailors treatments to individual genetic profiles. Pharmacogenomics, the study of how genes affect drug response, is becoming increasingly practical for everyday clinical use. New genetic testing technologies can now identify how patients will likely respond to specific medications before treatment begins, reducing the trial-and-error approach that has traditionally characterized medication management.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This advancement is particularly significant for mental health medications, cancer treatments, and cardiovascular drugs, where individual responses can vary dramatically. By understanding a patient's genetic makeup, healthcare providers can select medications that are more likely to be effective while avoiding those that might cause adverse reactions or prove ineffective.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Gene Therapy Breakthroughs</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Gene therapy has moved from experimental treatment to practical reality in 2025, with several new gene therapies receiving approval for previously untreatable conditions. These treatments work by introducing genetic material into a patient's cells to correct defective genes or provide new cellular functions. Recent approvals include treatments for inherited blindness, certain types of cancer, and rare genetic disorders.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While these therapies are currently expensive and limited in availability, they represent a fundamental shift in how we approach treating genetic diseases. The technology is rapidly advancing, with researchers developing more efficient delivery systems and expanding the range of conditions that can be treated through genetic modification.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Immunotherapy Expansion</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The field of immunotherapy continues to expand beyond cancer treatment into autoimmune diseases, allergies, and infectious diseases. New checkpoint inhibitors and CAR-T cell therapies are showing remarkable success in treating previously resistant cancers. Additionally, researchers are developing immunotherapies for conditions like multiple sclerosis, rheumatoid arthritis, and even Alzheimer's disease.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These treatments harness the body's own immune system to fight disease, often with fewer side effects than traditional chemotherapy or immunosuppressive drugs. The precision of modern immunotherapy allows for targeted treatment that can distinguish between healthy and diseased cells more effectively than ever before.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Artificial Intelligence in Drug Discovery</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Artificial intelligence and machine learning are revolutionizing drug discovery and development. AI algorithms can now predict how new compounds will behave in the human body, significantly reducing the time and cost of bringing new medications to market. This technology is also being used to identify new uses for existing medications, a process called drug repurposing.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Several medications originally developed for one condition have found new applications through AI-driven research. This approach not only speeds up the development process but also reduces costs, potentially making new treatments more accessible to patients. AI is also being used to optimize clinical trial design and identify patients who are most likely to benefit from specific treatments.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Nanotechnology in Drug Delivery</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nanotechnology is opening new possibilities for drug delivery systems. Nanoparticles can be engineered to deliver medications directly to specific cells or tissues, improving effectiveness while reducing side effects. Recent developments include nanoparticle-based cancer treatments that can target tumor cells while sparing healthy tissue, and nanocarriers that can cross the blood-brain barrier to deliver medications for neurological conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These advanced delivery systems can also provide controlled release of medications, maintaining therapeutic levels for extended periods with fewer doses. This technology is particularly promising for treating diseases that require precise drug concentrations or for medications that are quickly broken down by the body.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Long-Acting Injectable Medications</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The development of long-acting injectable medications is addressing adherence challenges for chronic conditions. New formulations can provide therapeutic levels of medication for weeks or even months after a single injection. This is particularly beneficial for patients with mental health conditions, HIV, or other chronic diseases where consistent medication levels are crucial for treatment success.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    These formulations use advanced polymer technology to create depot injections that slowly release medication over time. This approach not only improves adherence but can also reduce side effects by maintaining more consistent drug levels compared to daily oral medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Digital Therapeutics and Smart Pills</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Digital therapeutics represent a new category of treatment that uses software and digital devices to provide therapeutic interventions. These can include smartphone apps for managing depression, virtual reality systems for pain management, and digital coaching programs for chronic disease management. Some digital therapeutics are now being prescribed alongside traditional medications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Smart pills equipped with sensors can track medication adherence and provide real-time data about how medications are working in the body. These technologies are creating new opportunities for personalized treatment monitoring and adjustment, allowing healthcare providers to optimize therapy based on objective data rather than patient self-reporting alone.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">The Future of Pharmaceutical Care</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    As these technologies continue to develop, the role of pharmacists is evolving to include more clinical services and personalized care. At QUICKRX PHARMACY, we're preparing for this future by investing in continuing education and new technologies that will allow us to provide even better care to our patients.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We're committed to staying informed about these advances and helping our patients understand how new treatments might benefit them. As these innovative therapies become available, we'll be here to provide guidance, education, and support to ensure our patients can access and benefit from the latest advances in pharmaceutical science.
                  </p>

                  <div className="bg-purple-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">Key Research Areas in 2025</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Personalized medicine and pharmacogenomics</li>
                      <li>• Gene therapy for genetic disorders</li>
                      <li>• Expanded immunotherapy applications</li>
                      <li>• AI-driven drug discovery and development</li>
                      <li>• Nanotechnology for targeted drug delivery</li>
                      <li>• Long-acting injectable formulations</li>
                      <li>• Digital therapeutics and smart medication systems</li>
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
                    title="Latest Advances in Pharmaceutical Research: What's New in 2025"
                    excerpt="Stay informed about the latest breakthroughs in pharmaceutical research and how they might impact your healthcare."
                  />
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Medication Types</h4>
                      <p className="text-sm text-gray-600">Understanding different forms</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Health Consultations</h4>
                      <p className="text-sm text-gray-600">Expert pharmacist advice</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Pharmacy Operations</h4>
                      <p className="text-sm text-gray-600">Behind the scenes insights</p>
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
                  JP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Dr. James Park, PharmD, PhD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Park holds both a Doctor of Pharmacy degree and a PhD in Pharmaceutical Sciences, with over 20 years of experience in drug development and clinical research. 
                    He has worked with leading pharmaceutical companies and academic institutions, contributing to the development of several breakthrough medications. 
                    Dr. Park is passionate about translating complex research findings into practical information for patients and healthcare providers.
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

export default PharmaceuticalResearch

