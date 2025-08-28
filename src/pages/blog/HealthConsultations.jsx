import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, Clock, Tag, ArrowLeft, Share2, BookOpen, Heart, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import doctorConsultation from '../../assets/images/blog/doctor-consultation.jpg'

function HealthConsultations() {
  const [shareMenuOpen, setShareMenuOpen] = useState(false)

  const sharePost = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent("The Importance of Regular Health Consultations with Your Pharmacist")
    const excerpt = encodeURIComponent("Discover how regular consultations with your pharmacist can improve your health outcomes and medication management.")
    
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
              Healthcare Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Importance of Regular Health Consultations with Your Pharmacist
          </h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Discover how regular consultations with your pharmacist can improve your health outcomes and medication management.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>Michael Rodriguez, PharmD</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>January 10, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>6 min read</span>
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
                    src={doctorConsultation} 
                    alt="Healthcare professional consulting with patient"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-2 italic">
                    Regular consultations with healthcare professionals are essential for optimal health outcomes.
                  </p>
                </div>

                {/* Article Body */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                    In today's healthcare landscape, pharmacists have evolved far beyond simply dispensing medications. They've become integral members of your healthcare team, offering valuable insights and personalized care that can significantly impact your health outcomes. At QUICKRX PHARMACY, our pharmacists are committed to providing comprehensive health consultations that go beyond the prescription bottle.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">The Evolution of Pharmaceutical Care</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Regular health consultations with your pharmacist offer numerous benefits that many patients don't fully realize. These professionals undergo extensive education and training, earning Doctor of Pharmacy degrees that equip them with deep knowledge of medications, drug interactions, and therapeutic management. This expertise makes them uniquely qualified to help you optimize your medication regimen and achieve better health outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The role of pharmacists has expanded significantly over the past decade, with many states now recognizing pharmacists as healthcare providers who can prescribe medications, administer vaccines, and provide clinical services. This evolution reflects the growing recognition of pharmacists' expertise and their potential to improve patient care while reducing healthcare costs.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Comprehensive Medication Therapy Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    One of the most significant advantages of regular pharmacist consultations is medication therapy management. This service involves a comprehensive review of all your medications, including prescription drugs, over-the-counter medications, and supplements. Your pharmacist can identify potential drug interactions, duplicate therapies, or medications that may no longer be necessary.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This thorough review can prevent adverse drug events and ensure that each medication you're taking serves a specific purpose in your treatment plan. Studies have shown that medication therapy management can reduce hospitalizations, improve medication adherence, and enhance overall quality of life for patients with chronic conditions.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Addressing Medication Adherence Challenges</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pharmacists also play a crucial role in medication adherence, which is a significant challenge in healthcare. Studies show that medication non-adherence contributes to approximately 125,000 deaths annually in the United States and costs the healthcare system billions of dollars. During consultations, pharmacists can identify barriers to adherence, such as complex dosing schedules, side effects, or cost concerns.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Working with you to develop strategies to overcome these challenges, pharmacists might suggest pill organizers, simplified dosing schedules, or alternative medications that are more affordable or have fewer side effects. They can also provide education about the importance of taking medications as prescribed and help you understand what to expect from your treatment.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Specialized Disease State Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Another valuable aspect of pharmacist consultations is disease state management. Many pharmacists have specialized training in managing chronic conditions like diabetes, hypertension, and asthma. They can provide education about your condition, help you understand how your medications work, and offer lifestyle recommendations that complement your pharmaceutical therapy.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    This comprehensive approach to care can lead to better disease control and improved quality of life. For example, a pharmacist specializing in diabetes management can help you understand blood glucose monitoring, recognize signs of complications, and adjust your lifestyle to better manage your condition alongside your medications.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Preventive Care and Health Screenings</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Pharmacists are also excellent resources for preventive care services. They can administer vaccinations, conduct health screenings, and provide counseling on topics like smoking cessation and weight management. These services are often more accessible than traditional medical appointments, as pharmacies typically offer extended hours and don't require appointments for many services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Health screenings available at many pharmacies include blood pressure monitoring, cholesterol testing, blood glucose screening, and body mass index calculations. These screenings can help identify potential health issues early, when they're most treatable, and can complement your regular medical care.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Accessibility and Convenience</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The convenience factor cannot be overstated when it comes to pharmacist consultations. Unlike physician appointments that may require weeks of advance scheduling, pharmacist consultations are often available on a walk-in basis. This accessibility makes it easier to address medication concerns promptly and maintain consistent communication with a healthcare professional.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Many patients find that they can develop closer relationships with their pharmacists than with other healthcare providers, simply because they interact with them more frequently. This ongoing relationship allows pharmacists to better understand your health journey and provide more personalized care over time.
                  </p>

                  <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-8">Building a Partnership for Better Health</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    At QUICKRX PHARMACY, we view our relationship with patients as a partnership in health. Our pharmacists are committed to being accessible, knowledgeable, and supportive members of your healthcare team. We encourage regular consultations not just when you have questions or concerns, but as part of your ongoing health maintenance strategy.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Whether you're managing a chronic condition, starting a new medication, or simply want to optimize your current treatment plan, our pharmacists are here to provide the expertise and support you need. We believe that informed patients who are actively engaged in their healthcare achieve the best outcomes, and we're committed to helping you reach your health goals.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg mt-8 mb-8">
                    <h3 className="text-xl font-bold text-green-900 mb-3">Benefits of Regular Pharmacist Consultations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive medication reviews and optimization</li>
                      <li>• Improved medication adherence and outcomes</li>
                      <li>• Specialized disease state management</li>
                      <li>• Accessible preventive care services</li>
                      <li>• Convenient scheduling and walk-in availability</li>
                      <li>• Personalized health education and support</li>
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
                      <h4 className="font-medium text-gray-900 mb-1">Medication Types</h4>
                      <p className="text-sm text-gray-600">Understanding different forms</p>
                    </div>
                    <div className="border-b border-gray-200 pb-3">
                      <h4 className="font-medium text-gray-900 mb-1">Nutrition & Wellness</h4>
                      <p className="text-sm text-gray-600">Diet and medication interactions</p>
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
                  MR
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Michael Rodriguez, PharmD</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Michael Rodriguez is a clinical pharmacist with over 12 years of experience in community pharmacy practice. 
                    He specializes in medication therapy management and patient counseling, with a particular focus on chronic disease management. 
                    Michael is dedicated to improving patient outcomes through comprehensive pharmaceutical care and education.
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

export default HealthConsultations

