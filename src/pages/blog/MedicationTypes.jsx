import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import pillsMedicine from '../../assets/images/blog/pills-medicine.jpg'

function MedicationTypes() {
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  const sharePost = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent("Understanding Different Types of Medications: A Complete Guide")
    const excerpt = encodeURIComponent("Learn about the various forms of medications available and how to choose the right one for your health needs.")
    
    let shareUrl = ''
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}&via=QuickRXPharmacy`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${excerpt}%0A%0ARead more: ${url}`
        break
      default:
        return
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400')
    setShareMenuOpen(false)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
    setShareMenuOpen(false)
  }

  // Close share menu when clicking outside
  const handleClickOutside = (event) => {
    if (shareMenuOpen && !event.target.closest('.share-menu')) {
      setShareMenuOpen(false)
    }
  }

  // Add event listener for clicking outside
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [shareMenuOpen])

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
              Medication Education
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Understanding Different Types of Medications: A Complete Guide
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Learn about the various forms of medications available and how to choose the right one for your health needs.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Dr. Sarah Chen, PharmD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>8 min read</span>
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
                    src={pillsMedicine} 
                    alt="Various types of medications including pills, capsules, and tablets"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Different forms of medications serve various therapeutic purposes and patient needs.
                  </p>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    When it comes to managing your health, understanding the different types of medications available can make a significant difference in your treatment outcomes. At QUICKRX PHARMACY, we believe that informed patients make better health decisions, which is why we're sharing this comprehensive guide to help you navigate the world of pharmaceuticals.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">The Foundation of Modern Medicine</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medications come in various forms, each designed to deliver therapeutic benefits in specific ways. The choice of medication form isn't arbitrary – it's carefully selected based on factors including the drug's chemical properties, the condition being treated, patient preferences, and the desired speed and duration of action. Understanding these different forms empowers you to have more meaningful conversations with your healthcare providers and make informed decisions about your treatment.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Tablets: The Most Common Form</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tablets are perhaps the most familiar form of medication to most people. They're created by compressing powdered ingredients into a solid form that dissolves in your digestive system. This manufacturing process allows for precise dosing and extended shelf life, making tablets both convenient and cost-effective for patients and healthcare systems alike.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tablets can be immediate-release, which means they dissolve quickly and deliver medication rapidly into your bloodstream, or extended-release, which provides a steady release of medication over several hours. This controlled release is particularly beneficial for conditions that require consistent medication levels throughout the day, such as blood pressure management or chronic pain control. Extended-release formulations can improve patient compliance by reducing the frequency of dosing from multiple times per day to once or twice daily.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Capsules: Versatile and Patient-Friendly</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Capsules offer another popular delivery method, consisting of a gelatin shell that contains powdered or liquid medication. The advantage of capsules is that they can mask unpleasant tastes and are often easier to swallow than tablets. The smooth, rounded shape of capsules makes them particularly suitable for patients who have difficulty swallowing medications, including elderly individuals and those with certain medical conditions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Some capsules are designed to dissolve at specific points in your digestive system, ensuring the medication reaches its intended target. Enteric-coated capsules, for example, resist stomach acid and dissolve in the small intestine, protecting both the medication from degradation and the stomach from potential irritation. This targeted delivery system is crucial for medications that would be destroyed by stomach acid or could cause gastric upset.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Liquid Medications: Precision and Accessibility</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Liquid medications are essential for patients who have difficulty swallowing pills, including children and elderly individuals. They also allow for more precise dosing adjustments, which is crucial for pediatric patients whose medication needs change as they grow. Liquid formulations can be easily adjusted to provide exact doses based on weight, age, or specific medical requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    However, liquid medications often require refrigeration and have shorter shelf lives than solid forms. They may also contain additional ingredients like preservatives, flavoring agents, and stabilizers to maintain their effectiveness and palatability. Parents and caregivers should be particularly attentive to proper storage and expiration dates when managing liquid medications for family members.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Topical Medications: Targeted Local Treatment</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Topical medications, including creams, ointments, and patches, deliver medication directly to the affected area. This localized delivery can provide targeted relief while minimizing systemic side effects. Topical treatments are particularly effective for skin conditions, localized pain, and certain hormonal therapies where direct application to the skin can achieve therapeutic levels in the bloodstream.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Transdermal patches are particularly innovative, providing steady medication delivery through the skin over extended periods. These patches can deliver medications for hours, days, or even weeks, depending on the formulation. They're especially useful for medications that need to maintain consistent blood levels, such as nicotine replacement therapy, pain management, or hormone replacement therapy.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Injectable Medications: Direct and Immediate</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Injectable medications offer the most direct route into your system, bypassing the digestive process entirely. This method is essential for medications that would be destroyed by stomach acid or for emergency situations requiring immediate medication delivery. Injectable medications can be administered intravenously for immediate effect, intramuscularly for sustained release, or subcutaneously for various therapeutic purposes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The development of auto-injectors and pre-filled syringes has made self-administration of injectable medications more accessible and safer for patients. These devices are particularly important for conditions like diabetes, severe allergies, and certain autoimmune diseases where patients need to administer medications regularly at home.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Making the Right Choice for Your Health</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Understanding these different forms helps you work with your pharmacist to choose the most appropriate option for your specific needs and lifestyle. Factors to consider include your ability to swallow pills, the timing of doses, potential side effects, storage requirements, and personal preferences. Your pharmacist can provide valuable guidance in selecting the most suitable formulation for your individual circumstances.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, our experienced pharmacists are always available to discuss medication options and help you understand the benefits and considerations of different formulations. We believe that patient education is a cornerstone of effective healthcare, and we're committed to ensuring you have all the information you need to make informed decisions about your medications.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Key Takeaways</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Different medication forms serve specific therapeutic purposes</li>
                      <li>• Tablets and capsules offer convenience and precise dosing</li>
                      <li>• Liquid medications provide flexibility for dosing adjustments</li>
                      <li>• Topical treatments minimize systemic side effects</li>
                      <li>• Injectable medications provide immediate and direct delivery</li>
                      <li>• Consult your pharmacist to choose the best option for your needs</li>
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
                  <div className="relative share-menu">
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-3"
                      onClick={() => setShareMenuOpen(!shareMenuOpen)}
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                    
                    {/* Share Menu */}
                    {shareMenuOpen && (
                      <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10 min-w-[200px]">
                        <div className="grid grid-cols-2 gap-1">
                          <button
                            onClick={() => sharePost('facebook')}
                            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                          >
                            <Facebook className="h-4 w-4 text-blue-600" />
                            Facebook
                          </button>
                          <button
                            onClick={() => sharePost('twitter')}
                            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                          >
                            <Twitter className="h-4 w-4 text-blue-400" />
                            Twitter
                          </button>
                          <button
                            onClick={() => sharePost('linkedin')}
                            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                          >
                            <Linkedin className="h-4 w-4 text-blue-700" />
                            LinkedIn
                          </button>
                          <button
                            onClick={() => sharePost('email')}
                            className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                          >
                            <Mail className="h-4 w-4 text-gray-600" />
                            Email
                          </button>
                        </div>
                        <div className="border-t border-gray-200 mt-1 pt-1">
                          <button
                            onClick={copyToClipboard}
                            className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                          >
                            Copy Link
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Health Consultations</h4>
                      <p className="text-sm text-gray-600">Expert pharmacist advice</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Nutrition & Wellness</h4>
                      <p className="text-sm text-gray-600">Diet and medication interactions</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Pharmacy Research</h4>
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
                  SC
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Dr. Sarah Chen, PharmD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Chen is a licensed pharmacist with over 15 years of experience in clinical pharmacy and patient education. 
                    She specializes in medication therapy management and has helped thousands of patients optimize their treatment outcomes. 
                    Dr. Chen is passionate about empowering patients through education and personalized pharmaceutical care.
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

export default MedicationTypes

