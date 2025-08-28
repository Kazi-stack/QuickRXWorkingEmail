import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import healthConsultationPills from '../../assets/images/blog/doctor-consultation.jpg'

function HealthGoals() {
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
            New Year, New Health Goals: Medication Management Tips
          </h1>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Start the year right with our comprehensive guide to managing your medications and achieving your health objectives.
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
              <span>12 min read</span>
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
                      <p className="text-sm text-gray-600">Volume 3, Issue 2</p>
                      <p className="text-sm text-gray-600">January 2025</p>
                    </div>
                  </div>
                </div>

                {/* Featured Image */}
                <div className="mb-8">
                  <img 
                    src={healthConsultationPills} 
                    alt="Health goals and medication management for the new year"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Setting realistic health goals and maintaining proper medication management are key to a successful new year.
                  </p>
                </div>

                {/* Newsletter Body */}
                <div className="prose prose-lg max-w-none">
                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">In This Issue</h3>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Setting Realistic Health Goals for 2025</li>
                      <li>• Medication Adherence Strategies</li>
                      <li>• Creating Sustainable Health Habits</li>
                      <li>• Technology Tools for Health Management</li>
                      <li>• Working with Your Healthcare Team</li>
                      <li>• Tracking Progress and Staying Motivated</li>
                    </ul>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-6 mt-8">A Fresh Start for Your Health</h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    The beginning of a new year presents a perfect opportunity to reassess your health goals and establish better medication management practices. At QUICKRX PHARMACY, we understand that sustainable health improvements require more than just good intentions – they require practical strategies, consistent habits, and ongoing support from your healthcare team.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Setting SMART Health Goals</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Effective health goals follow the SMART criteria: Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of vague resolutions like "get healthier," consider specific objectives such as "take my blood pressure medication at the same time every day for the next three months" or "reduce my HbA1c level by 0.5% by June through consistent diabetes medication adherence."
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    When setting medication-related goals, focus on behaviors you can control rather than outcomes that depend on multiple factors. For example, "I will use a pill organizer to ensure I don't miss any doses this week" is more actionable than "I will cure my condition." Small, consistent improvements in medication management often lead to significant health benefits over time.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Consider involving your pharmacist in goal-setting discussions. We can help you identify realistic targets based on your current health status, medication regimen, and lifestyle factors. Our team can also suggest specific strategies that have proven successful for other patients with similar conditions.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Mastering Medication Adherence</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medication adherence – taking medications exactly as prescribed – is one of the most impactful health behaviors you can adopt. Studies show that poor medication adherence contributes to approximately 125,000 deaths annually in the United States and costs the healthcare system over $100 billion each year. However, with the right strategies, achieving excellent adherence is entirely possible.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Start by organizing your medications using a weekly pill organizer with compartments for different times of day. This simple tool eliminates guesswork and provides visual confirmation that you've taken your medications. For complex regimens, consider using a pill organizer with multiple weekly compartments or separate organizers for morning and evening medications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Establish consistent routines by linking medication-taking to existing daily habits. Take morning medications with your first cup of coffee, or place evening medications next to your toothbrush as a reminder. These habit-stacking techniques leverage your existing routines to create new, sustainable behaviors.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Leveraging Technology for Health Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Modern technology offers numerous tools to support medication management and health goal achievement. Smartphone apps can send medication reminders, track adherence patterns, and even connect you with your healthcare providers. Many apps allow you to photograph your medications, set custom reminder schedules, and track side effects or symptoms.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Smart pill bottles and electronic pill dispensers can provide additional support for patients with complex medication regimens. These devices can send alerts to your phone or family members if doses are missed and provide detailed adherence reports for your healthcare team. Some insurance plans even offer these devices at reduced cost for patients with chronic conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Wearable devices like fitness trackers and smartwatches can monitor various health metrics and remind you to take medications. Many devices can track sleep patterns, physical activity, and even stress levels, providing valuable data to share with your healthcare providers during appointments.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Building Sustainable Health Habits</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Sustainable health improvements require gradual changes rather than dramatic overhauls. Focus on building one new habit at a time, allowing 2-3 weeks for each behavior to become automatic before adding another. This approach prevents overwhelm and increases the likelihood of long-term success.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Create environmental cues that support your health goals. Keep medications in visible locations where you'll see them at the appropriate times. Place a water bottle next to your medications to ensure adequate hydration when taking pills. Remove barriers that might interfere with medication adherence, such as child-resistant caps that are difficult to open.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Develop backup plans for challenging situations. What will you do if you forget to take your morning medication? How will you maintain your routine while traveling? Having predetermined strategies for common obstacles helps maintain consistency even when circumstances change.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Working Effectively with Your Healthcare Team</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Your healthcare team, including your pharmacist, plays a crucial role in helping you achieve your health goals. Schedule regular medication reviews to discuss your progress, address concerns, and optimize your treatment plan. Come prepared with questions about side effects, drug interactions, or lifestyle modifications that might improve your outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Be honest about adherence challenges. Your healthcare providers can't help solve problems they don't know about. Whether you're struggling with side effects, cost concerns, or simply remembering to take medications, there are usually solutions available. Your pharmacist can suggest alternative formulations, timing adjustments, or assistance programs that might help.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Keep detailed records of your medications, including names, dosages, timing, and any side effects you experience. This information is invaluable during healthcare appointments and can help identify patterns or issues that need attention. Many patients find it helpful to maintain a medication diary or use smartphone apps to track this information.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Tracking Progress and Staying Motivated</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Regular progress tracking helps maintain motivation and identifies areas for improvement. Keep simple records of your medication adherence, such as checking off doses on a calendar or using a smartphone app. Many patients find that the act of tracking itself improves adherence by increasing awareness of their medication-taking behaviors.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Celebrate small victories along the way. Acknowledge when you successfully take all medications for a week, or when you remember to refill prescriptions before running out. These positive reinforcements help build momentum and make healthy behaviors more rewarding.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Share your goals with family members or friends who can provide support and accountability. Having someone check in on your progress can provide additional motivation and help you stay committed to your health objectives. Consider joining support groups for your specific health conditions, where you can learn from others facing similar challenges.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Overcoming Common Obstacles</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Cost concerns are among the most common barriers to medication adherence. If you're struggling with medication costs, speak with your pharmacist about generic alternatives, manufacturer assistance programs, or pharmacy discount programs. Many pharmaceutical companies offer patient assistance programs for individuals who meet certain income criteria.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Side effects can also interfere with adherence. Don't stop taking medications without consulting your healthcare provider, as this can be dangerous for many conditions. Instead, discuss side effects promptly so alternative treatments or management strategies can be explored. Sometimes, simple timing adjustments or taking medications with food can significantly reduce side effects.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Your 2025 Health Action Plan</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Set specific, measurable health goals</li>
                      <li>✓ Organize medications with pill organizers</li>
                      <li>✓ Establish consistent daily routines</li>
                      <li>✓ Use technology tools for reminders and tracking</li>
                      <li>✓ Schedule regular healthcare team consultations</li>
                      <li>✓ Track progress and celebrate achievements</li>
                      <li>✓ Address obstacles proactively</li>
                      <li>✓ Build sustainable, gradual improvements</li>
                    </ul>
                  </div>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">QUICKRX Support Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we're committed to supporting your health goals throughout 2025. Our medication therapy management services include comprehensive medication reviews, adherence counseling, and personalized action plans. We offer free consultations to help you optimize your medication regimen and achieve better health outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our pharmacy also provides medication synchronization services, allowing you to pick up all your medications on the same day each month. This convenience reduces the number of pharmacy trips and helps ensure you never run out of important medications. We also offer automatic refill programs and text message reminders to support your adherence goals.
                  </p>

                  <div className="bg-blue-100 p-6 rounded-lg mt-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-3">Start Your Health Journey Today</h3>
                    <p className="text-gray-700 mb-4">Ready to make 2025 your healthiest year yet? Contact QUICKRX PHARMACY to schedule a medication review and discuss your health goals with our expert pharmacists.</p>
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

export default HealthGoals

