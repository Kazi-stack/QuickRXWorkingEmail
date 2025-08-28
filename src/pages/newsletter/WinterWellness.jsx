import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import heartPills from '../../assets/images/blog/pills-medicine.jpg'

function WinterWellness() {
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
            Winter Wellness: Staying Healthy During Cold Season
          </h1>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Essential tips for maintaining your health during the winter months, including vaccination schedules and immune-boosting strategies.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-green-100">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>QUICKRX Newsletter</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 2025 Issue</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>15 min read</span>
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
                      <p className="text-sm text-gray-600">Volume 3, Issue 1</p>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img 
                    src={heartPills} 
                    alt="Winter wellness and health maintenance"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Winter wellness requires proactive health management and preventive care strategies.
                  </p>
                </div>

                {/* Newsletter Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">In This Issue</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Winter Vaccination Schedule and Recommendations</li>
                      <li>• Immune System Support Through Nutrition</li>
                      <li>• Managing Chronic Conditions in Cold Weather</li>
                      <li>• Seasonal Affective Disorder and Mental Health</li>
                      <li>• Cold and Flu Prevention Strategies</li>
                      <li>• Medication Storage During Winter Months</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-8">Welcome to Winter Wellness</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    As winter settles in across our community, the team at QUICKRX PHARMACY wants to ensure you have all the tools and knowledge necessary to maintain optimal health throughout the colder months. Winter presents unique health challenges, from increased susceptibility to respiratory infections to the impact of reduced sunlight on our mental well-being.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Essential Winter Vaccinations</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Winter is prime time for respiratory illnesses, making vaccination one of your most important defenses. The influenza vaccine remains your first line of protection against seasonal flu, which typically peaks between December and February. This year's flu vaccine has been formulated to protect against the strains most likely to circulate during the 2024-2025 season.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    COVID-19 vaccinations continue to be crucial, especially with new variants emerging. The updated vaccines provide enhanced protection against current circulating strains. If you're over 65 or have underlying health conditions, you may also benefit from the pneumococcal vaccine, which protects against pneumonia and other serious infections that can be more severe during winter months.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we offer convenient walk-in vaccination services with no appointment necessary. Our certified pharmacists can administer vaccines and provide personalized recommendations based on your age, health status, and risk factors. We accept most insurance plans, and many vaccines are available at no cost to you.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Boosting Your Immune System Naturally</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    While vaccines provide crucial protection, supporting your immune system through proper nutrition and lifestyle choices can further enhance your body's natural defenses. Vitamin D becomes particularly important during winter months when sunlight exposure is limited. Many people develop vitamin D deficiency during winter, which can compromise immune function.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Consider incorporating vitamin D-rich foods like fatty fish, fortified dairy products, and egg yolks into your diet. Vitamin D supplements may also be beneficial, especially for those with limited sun exposure. Vitamin C continues to play a vital role in immune function, and winter is an excellent time to increase consumption of citrus fruits, bell peppers, and leafy greens.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Zinc is another crucial nutrient for immune health, found in foods like oysters, beef, pumpkin seeds, and chickpeas. Adequate sleep, regular exercise, and stress management also play significant roles in maintaining a robust immune system throughout the winter season.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Managing Chronic Conditions in Cold Weather</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cold weather can exacerbate certain chronic conditions, requiring extra attention to medication management and lifestyle modifications. Individuals with cardiovascular disease should be particularly cautious, as cold temperatures can increase blood pressure and strain the heart. Ensure you're taking your blood pressure and heart medications as prescribed, and dress warmly when venturing outdoors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Arthritis symptoms often worsen in cold, damp weather. Maintaining indoor warmth, staying active with gentle exercises, and ensuring consistent use of anti-inflammatory medications can help manage joint pain and stiffness. If you have diabetes, cold weather can affect blood circulation and make it harder to detect injuries to extremities, so extra foot care is essential.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Respiratory conditions like asthma and COPD may be triggered by cold air. Keep rescue inhalers easily accessible, and consider using a scarf or mask over your nose and mouth when outdoors to warm the air before it reaches your lungs. Ensure your maintenance medications are up to date and discuss any concerns with your healthcare provider.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Addressing Seasonal Affective Disorder</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Seasonal Affective Disorder (SAD) affects millions of people during the darker winter months. Symptoms can include depression, fatigue, increased appetite, and difficulty concentrating. Light therapy using special bright light boxes can be highly effective, typically requiring 20-30 minutes of exposure each morning.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Maintaining a regular sleep schedule, staying physically active, and ensuring adequate vitamin D intake can also help combat seasonal depression. Social connections remain important during winter months when isolation can worsen symptoms. If you're experiencing persistent mood changes, don't hesitate to speak with your healthcare provider about treatment options.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Cold and Flu Prevention Strategies</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Beyond vaccination, several practical strategies can reduce your risk of contracting cold and flu viruses. Hand hygiene remains the most effective prevention method. Wash your hands frequently with soap and water for at least 20 seconds, especially after being in public spaces, before eating, and after coughing or sneezing.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Avoid touching your face, particularly your eyes, nose, and mouth, as these are common entry points for viruses. Maintain distance from obviously ill individuals when possible, and stay home if you develop symptoms to prevent spreading illness to others. Keep commonly touched surfaces clean and disinfected.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Proper Medication Storage During Winter</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Winter weather can affect medication storage and effectiveness. Avoid leaving medications in cars where temperatures can fluctuate dramatically. Most medications should be stored at room temperature, away from heat sources and humidity. Liquid medications may be particularly sensitive to temperature changes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    If you use insulin or other temperature-sensitive medications, take extra precautions during winter travel. Carry medications in insulated cases and never leave them in checked luggage where they may freeze. Always check expiration dates and properly dispose of any medications that may have been compromised by temperature exposure.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Winter Wellness Checklist</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Get your flu and COVID-19 vaccinations</li>
                      <li>✓ Consider vitamin D supplementation</li>
                      <li>✓ Maintain consistent medication schedules</li>
                      <li>✓ Practice good hand hygiene</li>
                      <li>✓ Stay physically active indoors</li>
                      <li>✓ Monitor chronic conditions closely</li>
                      <li>✓ Address seasonal mood changes</li>
                      <li>✓ Store medications properly</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">QUICKRX Winter Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Throughout the winter season, QUICKRX PHARMACY is here to support your health needs. We offer convenient vaccination services, medication therapy management, and health screenings. Our pharmacists are available for consultations about winter health concerns, medication interactions, and supplement recommendations.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We also provide free home delivery services for patients who may have difficulty traveling during inclement weather. Our goal is to ensure that winter weather never becomes a barrier to accessing the medications and health services you need.
                  </p>

                  <div className="bg-blue-100 p-6 rounded-lg mt-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">Contact QUICKRX PHARMACY</h3>
                    <p className="text-gray-700 mb-2">📞 Phone: (914) 449-1218</p>
                    <p className="text-gray-700 mb-2">📧 Email: 
                      <a href="mailto:Info@Quickrx134.com">
                        Info@Quickrx134.com
                      </a>
                    </p>
                    <p className="text-gray-700 mb-2">📍 Address: 
                      <a 
                        href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        134 North Ave Ste 8, New Rochelle, NY 10801
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
                      <h4 className="font-medium text-gray-900 mb-1">New Year Health Goals</h4>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Insurance Benefits Guide</h4>
                      <p className="text-sm text-gray-600">December 2024</p>
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

export default WinterWellness

