import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, BookOpen, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import ShareButton from '../../components/ShareButton.jsx'
import healthyNutrition from '../../assets/images/blog/healthy-nutrition.jpg'

function NutritionWellness() {
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
              Nutrition & Wellness
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Nutrition and Wellness: How Diet Affects Your Medication Effectiveness
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Explore the crucial relationship between nutrition and medication effectiveness, and learn how to optimize both for better health.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Dr. Lisa Thompson, PharmD, RD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 5, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>10 min read</span>
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
                    src={healthyNutrition} 
                    alt="Fresh fruits and vegetables representing healthy nutrition"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Proper nutrition plays a crucial role in medication effectiveness and overall health outcomes.
                  </p>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    The relationship between nutrition and medication effectiveness is a fascinating and crucial aspect of healthcare that often doesn't receive the attention it deserves. At QUICKRX PHARMACY, we understand that optimal health outcomes depend not just on the right medications, but also on how those medications interact with your diet and overall nutritional status.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">The Science Behind Food-Drug Interactions</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Food can significantly impact how your body absorbs, metabolizes, and utilizes medications. Some medications require food for optimal absorption, while others should be taken on an empty stomach to prevent food from interfering with their effectiveness. Understanding these interactions is essential for maximizing the therapeutic benefits of your medications while minimizing potential side effects.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    For example, certain antibiotics like tetracycline can bind with calcium in dairy products, reducing their absorption and effectiveness. This interaction occurs because calcium forms complexes with the antibiotic, preventing it from being properly absorbed into the bloodstream. Conversely, medications like ibuprofen should be taken with food to reduce stomach irritation and improve tolerance, as the food provides a protective barrier for the stomach lining.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Timing Matters: When to Take Medications</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The timing of meals in relation to medication administration is equally important. Some medications work best when taken before meals to ensure optimal absorption, while others are more effective when taken after eating. Fat-soluble vitamins and medications often require dietary fat for proper absorption, which is why they're typically recommended to be taken with meals containing some fat content.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding these nuances can significantly improve your treatment outcomes. For instance, thyroid medications like levothyroxine should be taken on an empty stomach, preferably in the morning, at least 30-60 minutes before breakfast. This timing ensures maximum absorption and prevents food from interfering with the medication's effectiveness.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Nutrients That Enhance or Inhibit Medications</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Certain nutrients can enhance or inhibit the effectiveness of specific medications. Vitamin K, found in leafy green vegetables, can interfere with blood-thinning medications like warfarin. However, this doesn't mean patients should avoid these healthy foods entirely. Instead, they need to maintain consistent vitamin K intake rather than dramatically increasing or decreasing consumption.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Similarly, grapefruit juice can interact with numerous medications by affecting liver enzymes responsible for drug metabolism, potentially leading to increased medication levels in the blood. This interaction can be dangerous with certain medications like some cholesterol-lowering drugs, blood pressure medications, and immunosuppressants. The compounds in grapefruit juice can inhibit the enzyme CYP3A4, which is responsible for metabolizing many medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">The Impact of Nutritional Deficiencies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nutritional deficiencies can also impact how well medications work in your body. For instance, magnesium deficiency can affect the effectiveness of certain heart medications, while inadequate protein intake can impact how your body processes and utilizes various drugs. This is particularly important for elderly patients, who may have decreased appetite or difficulty maintaining adequate nutrition.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Iron deficiency can affect the absorption and effectiveness of certain medications, while vitamin D deficiency may impact bone health medications. Ensuring adequate nutrition is therefore not just important for general health, but also for optimizing medication effectiveness and preventing treatment failures.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Functional Foods and Nutraceuticals</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The concept of functional foods and nutraceuticals has gained significant attention in recent years. These are foods or food components that provide health benefits beyond basic nutrition. Examples include omega-3 fatty acids for heart health, probiotics for digestive wellness, and antioxidants for cellular protection.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While these can complement traditional medications, it's important to discuss their use with your pharmacist to ensure they don't interfere with your prescribed treatments. Some supplements can interact with medications in unexpected ways, either enhancing or reducing their effectiveness.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Hydration and Medication Effectiveness</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Hydration plays a crucial role in medication effectiveness as well. Many medications require adequate fluid intake for proper dissolution and absorption. Dehydration can concentrate medications in your system, potentially leading to increased side effects, while excessive fluid intake might dilute certain medications and reduce their effectiveness.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your pharmacist can provide guidance on optimal fluid intake based on your specific medications. Some medications, like lithium, require careful monitoring of fluid intake to maintain therapeutic levels, while others may require increased fluid intake to prevent kidney damage.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Creating a Personalized Nutrition and Medication Plan</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we believe in taking a holistic approach to your health. Our pharmacists work with you to create personalized plans that optimize both your nutrition and medication regimen. This might involve adjusting meal timing, recommending specific foods to enhance medication absorption, or identifying potential dietary factors that could interfere with your treatment.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We also provide education about reading food labels, understanding nutrient content, and making informed dietary choices that support your medication therapy. Our goal is to empower you with the knowledge and tools you need to achieve the best possible health outcomes through the synergy of proper nutrition and effective medication management.
                  </p>

                  <div className="bg-orange-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-orange-900 mb-3">Nutrition and Medication Guidelines</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Always follow specific timing instructions for your medications</li>
                      <li>• Maintain consistent eating patterns when taking chronic medications</li>
                      <li>• Discuss dietary supplements with your pharmacist before starting</li>
                      <li>• Stay adequately hydrated unless otherwise directed</li>
                      <li>• Be aware of foods that may interact with your medications</li>
                      <li>• Consult your pharmacist about optimal nutrition for your health conditions</li>
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
                    title="Nutrition and Wellness: How Diet Affects Your Medication Effectiveness"
                    excerpt="Explore the crucial relationship between nutrition and medication effectiveness, and learn how to optimize both for better health."
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
                  LT
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Dr. Lisa Thompson, PharmD, RD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Thompson holds dual credentials as both a licensed pharmacist and registered dietitian, bringing a unique perspective to medication and nutrition interactions. 
                    With over 18 years of experience, she specializes in helping patients optimize their health through the synergy of proper nutrition and effective medication management. 
                    Dr. Thompson is passionate about educating patients on the critical role nutrition plays in medication effectiveness.
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

export default NutritionWellness

