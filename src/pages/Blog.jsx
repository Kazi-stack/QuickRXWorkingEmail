import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, User, ArrowRight, Clock, Tag, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import pillsMedicine from '../assets/images/blog/pills-medicine.jpg'
import doctorConsultation from '../assets/images/blog/doctor-consultation.jpg'
import healthyNutrition from '../assets/images/blog/healthy-nutrition.jpg'
import medicalResearch from '../assets/images/blog/medical-research.jpg'
import pharmacyTechnician from '../assets/images/blog/pharmacy-technician.jpg'

function Blog() {
  const [shareMenuOpen, setShareMenuOpen] = useState(null)

  const sharePost = (platform, post) => {
    const url = encodeURIComponent(window.location.origin + (post.link || '/blog'))
    const title = encodeURIComponent(post.title)
    const excerpt = encodeURIComponent(post.excerpt)
    
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
    setShareMenuOpen(null)
  }

  const copyToClipboard = async (post) => {
    const url = window.location.origin + (post.link || '/blog')
    try {
      await navigator.clipboard.writeText(url)
      alert('Link copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
    setShareMenuOpen(null)
  }

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Different Types of Medications: A Complete Guide",
      excerpt: "Learn about the various forms of medications available and how to choose the right one for your health needs.",
      content: "When it comes to managing your health, understanding the different types of medications available can make a significant difference in your treatment outcomes. At QUICKRX PHARMACY, we believe that informed patients make better health decisions, which is why we're sharing this comprehensive guide to help you navigate the world of pharmaceuticals. Medications come in various forms, each designed to deliver therapeutic benefits in specific ways. The most common forms include tablets, capsules, liquids, topical applications, and injectable medications. Tablets are perhaps the most familiar form of medication to most people. They're created by compressing powdered ingredients into a solid form that dissolves in your digestive system. Tablets can be immediate-release, which means they dissolve quickly and deliver medication rapidly into your bloodstream, or extended-release, which provides a steady release of medication over several hours. This controlled release is particularly beneficial for conditions that require consistent medication levels throughout the day. Capsules offer another popular delivery method, consisting of a gelatin shell that contains powdered or liquid medication. The advantage of capsules is that they can mask unpleasant tastes and are often easier to swallow than tablets. Some capsules are designed to dissolve at specific points in your digestive system, ensuring the medication reaches its intended target. Liquid medications are essential for patients who have difficulty swallowing pills, including children and elderly individuals. They also allow for more precise dosing adjustments, which is crucial for pediatric patients whose medication needs change as they grow. However, liquid medications often require refrigeration and have shorter shelf lives than solid forms. Topical medications, including creams, ointments, and patches, deliver medication directly to the affected area. This localized delivery can provide targeted relief while minimizing systemic side effects. Transdermal patches are particularly innovative, providing steady medication delivery through the skin over extended periods. Injectable medications offer the most direct route into your system, bypassing the digestive process entirely. This method is essential for medications that would be destroyed by stomach acid or for emergency situations requiring immediate medication delivery. Understanding these different forms helps you work with your pharmacist to choose the most appropriate option for your specific needs and lifestyle.",
      author: "Dr. Sarah Chen, PharmD",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Medication Education",
      image: pillsMedicine,
      tags: ["Medications", "Health Education", "Pharmacy Tips"]
    },
    {
      id: 2,
      title: "The Importance of Regular Health Consultations with Your Pharmacist",
      excerpt: "Discover how regular consultations with your pharmacist can improve your health outcomes and medication management.",
      link: "/blog/health-consultations",
      content: "In today's healthcare landscape, pharmacists have evolved far beyond simply dispensing medications. They've become integral members of your healthcare team, offering valuable insights and personalized care that can significantly impact your health outcomes. At QUICKRX PHARMACY, our pharmacists are committed to providing comprehensive health consultations that go beyond the prescription bottle. Regular health consultations with your pharmacist offer numerous benefits that many patients don't fully realize. These professionals undergo extensive education and training, earning Doctor of Pharmacy degrees that equip them with deep knowledge of medications, drug interactions, and therapeutic management. This expertise makes them uniquely qualified to help you optimize your medication regimen and achieve better health outcomes. One of the most significant advantages of regular pharmacist consultations is medication therapy management. This service involves a comprehensive review of all your medications, including prescription drugs, over-the-counter medications, and supplements. Your pharmacist can identify potential drug interactions, duplicate therapies, or medications that may no longer be necessary. This thorough review can prevent adverse drug events and ensure that each medication you're taking serves a specific purpose in your treatment plan. Pharmacists also play a crucial role in medication adherence, which is a significant challenge in healthcare. Studies show that medication non-adherence contributes to approximately 125,000 deaths annually in the United States and costs the healthcare system billions of dollars. During consultations, pharmacists can identify barriers to adherence, such as complex dosing schedules, side effects, or cost concerns, and work with you to develop strategies to overcome these challenges. Another valuable aspect of pharmacist consultations is disease state management. Many pharmacists have specialized training in managing chronic conditions like diabetes, hypertension, and asthma. They can provide education about your condition, help you understand how your medications work, and offer lifestyle recommendations that complement your pharmaceutical therapy. This comprehensive approach to care can lead to better disease control and improved quality of life. Pharmacists are also excellent resources for preventive care services. They can administer vaccinations, conduct health screenings, and provide counseling on topics like smoking cessation and weight management. These services are often more accessible than traditional medical appointments, as pharmacies typically offer extended hours and don't require appointments for many services. The convenience factor cannot be overstated when it comes to pharmacist consultations. Unlike physician appointments that may require weeks of advance scheduling, pharmacist consultations are often available on a walk-in basis. This accessibility makes it easier to address medication concerns promptly and maintain consistent communication with a healthcare professional.",
      author: "Michael Rodriguez, PharmD",
      date: "2025-01-10",
      readTime: "6 min read",
      category: "Healthcare Services",
      image: doctorConsultation,
      tags: ["Health Consultations", "Pharmacist Services", "Healthcare"]
    },
    {
      id: 3,
      title: "Nutrition and Wellness: How Diet Affects Your Medication Effectiveness",
      excerpt: "Explore the crucial relationship between nutrition and medication effectiveness, and learn how to optimize both for better health.",
      link: "/blog/nutrition-wellness",
      content: "The relationship between nutrition and medication effectiveness is a fascinating and crucial aspect of healthcare that often doesn't receive the attention it deserves. At QUICKRX PHARMACY, we understand that optimal health outcomes depend not just on the right medications, but also on how those medications interact with your diet and overall nutritional status. This comprehensive guide will help you understand these important connections and make informed decisions about your health. Food can significantly impact how your body absorbs, metabolizes, and utilizes medications. Some medications require food for optimal absorption, while others should be taken on an empty stomach to prevent food from interfering with their effectiveness. For example, certain antibiotics like tetracycline can bind with calcium in dairy products, reducing their absorption and effectiveness. Conversely, medications like ibuprofen should be taken with food to reduce stomach irritation and improve tolerance. The timing of meals in relation to medication administration is equally important. Some medications work best when taken before meals to ensure optimal absorption, while others are more effective when taken after eating. Fat-soluble vitamins and medications often require dietary fat for proper absorption, which is why they're typically recommended to be taken with meals containing some fat content. Understanding these nuances can significantly improve your treatment outcomes. Certain nutrients can enhance or inhibit the effectiveness of specific medications. Vitamin K, found in leafy green vegetables, can interfere with blood-thinning medications like warfarin. Patients taking these medications need to maintain consistent vitamin K intake rather than avoiding these healthy foods entirely. Similarly, grapefruit juice can interact with numerous medications by affecting liver enzymes responsible for drug metabolism, potentially leading to increased medication levels in the blood. Nutritional deficiencies can also impact how well medications work in your body. For instance, magnesium deficiency can affect the effectiveness of certain heart medications, while inadequate protein intake can impact how your body processes and utilizes various drugs. This is particularly important for elderly patients, who may have decreased appetite or difficulty maintaining adequate nutrition. The concept of functional foods and nutraceuticals has gained significant attention in recent years. These are foods or food components that provide health benefits beyond basic nutrition. Examples include omega-3 fatty acids for heart health, probiotics for digestive wellness, and antioxidants for cellular protection. While these can complement traditional medications, it's important to discuss their use with your pharmacist to ensure they don't interfere with your prescribed treatments. Hydration plays a crucial role in medication effectiveness as well. Many medications require adequate fluid intake for proper dissolution and absorption. Dehydration can concentrate medications in your system, potentially leading to increased side effects, while excessive fluid intake might dilute certain medications and reduce their effectiveness. Your pharmacist can provide guidance on optimal fluid intake based on your specific medications.",
      author: "Dr. Lisa Thompson, PharmD, RD",
      date: "2025-01-05",
      readTime: "10 min read",
      category: "Nutrition & Wellness",
      image: healthyNutrition,
      tags: ["Nutrition", "Wellness", "Medication Interactions", "Diet"]
    },
    {
      id: 4,
      title: "Latest Advances in Pharmaceutical Research: What's New in 2025",
      excerpt: "Stay informed about the latest breakthroughs in pharmaceutical research and how they might impact your healthcare.",
      link: "/blog/pharmaceutical-research",
      content: "The pharmaceutical industry continues to evolve at an unprecedented pace, with 2025 marking a particularly exciting year for medical breakthroughs and innovative treatments. At QUICKRX PHARMACY, we're committed to staying at the forefront of these developments to better serve our patients and provide access to the most advanced therapeutic options available. This comprehensive overview will explore the most significant advances in pharmaceutical research and their potential impact on patient care. One of the most promising areas of development is personalized medicine, which tailors treatments to individual genetic profiles. Pharmacogenomics, the study of how genes affect drug response, is becoming increasingly practical for everyday clinical use. New genetic testing technologies can now identify how patients will likely respond to specific medications before treatment begins, reducing the trial-and-error approach that has traditionally characterized medication management. This advancement is particularly significant for mental health medications, cancer treatments, and cardiovascular drugs, where individual responses can vary dramatically. Gene therapy has moved from experimental treatment to practical reality in 2025, with several new gene therapies receiving approval for previously untreatable conditions. These treatments work by introducing genetic material into a patient's cells to correct defective genes or provide new cellular functions. Recent approvals include treatments for inherited blindness, certain types of cancer, and rare genetic disorders. While these therapies are currently expensive and limited in availability, they represent a fundamental shift in how we approach treating genetic diseases. The field of immunotherapy continues to expand beyond cancer treatment into autoimmune diseases, allergies, and infectious diseases. New checkpoint inhibitors and CAR-T cell therapies are showing remarkable success in treating previously resistant cancers. Additionally, researchers are developing immunotherapies for conditions like multiple sclerosis, rheumatoid arthritis, and even Alzheimer's disease. These treatments harness the body's own immune system to fight disease, often with fewer side effects than traditional chemotherapy or immunosuppressive drugs. Artificial intelligence and machine learning are revolutionizing drug discovery and development. AI algorithms can now predict how new compounds will behave in the human body, significantly reducing the time and cost of bringing new medications to market. This technology is also being used to identify new uses for existing medications, a process called drug repurposing. Several medications originally developed for one condition have found new applications through AI-driven research. Nanotechnology is opening new possibilities for drug delivery systems. Nanoparticles can be engineered to deliver medications directly to specific cells or tissues, improving effectiveness while reducing side effects. Recent developments include nanoparticle-based cancer treatments that can target tumor cells while sparing healthy tissue, and nanocarriers that can cross the blood-brain barrier to deliver medications for neurological conditions. The development of long-acting injectable medications is addressing adherence challenges for chronic conditions. New formulations can provide therapeutic levels of medication for weeks or even months after a single injection. This is particularly beneficial for patients with mental health conditions, HIV, or other chronic diseases where consistent medication levels are crucial for treatment success.",
      author: "Dr. James Park, PharmD, PhD",
      date: "2024-12-28",
      readTime: "12 min read",
      category: "Medical Research",
      image: medicalResearch,
      tags: ["Research", "Innovation", "Pharmaceutical Advances", "Future Medicine"]
    },
    {
      id: 5,
      title: "Behind the Scenes: A Day in the Life of a Pharmacy Technician",
      excerpt: "Get an inside look at the important work pharmacy technicians do and how they contribute to your healthcare experience.",
      link: "/blog/pharmacy-technician",
      content: "Pharmacy technicians are the unsung heroes of the healthcare system, working tirelessly behind the scenes to ensure that patients receive safe, accurate, and timely pharmaceutical care. At QUICKRX PHARMACY, our pharmacy technicians are integral members of our healthcare team, and their expertise and dedication directly impact the quality of care we provide to our community. This detailed look into their daily responsibilities will help you appreciate the complexity and importance of their work. The day for a pharmacy technician typically begins before the pharmacy opens to the public. Early morning hours are spent preparing for the day ahead, which includes checking inventory levels, reviewing pending prescriptions, and ensuring that all equipment is functioning properly. This preparation phase is crucial for maintaining the smooth operation of the pharmacy throughout the day. Technicians must verify that automated dispensing systems are loaded with the correct medications and that all safety protocols are in place. One of the primary responsibilities of pharmacy technicians is prescription processing. This involves much more than simply counting pills and putting them in bottles. Technicians must carefully review each prescription for accuracy, checking that the medication, dosage, and quantity match the prescriber's instructions. They verify patient information, insurance coverage, and identify any potential issues that need pharmacist review. This attention to detail is critical for patient safety and requires extensive knowledge of medications, dosing, and pharmaceutical calculations. Inventory management is another crucial aspect of a pharmacy technician's role. They monitor medication stock levels, place orders for new inventory, and receive and verify shipments. This responsibility requires understanding of medication storage requirements, expiration date management, and proper handling of controlled substances. Technicians must ensure that temperature-sensitive medications are stored correctly and that all inventory is properly rotated to prevent waste and ensure medication potency. Insurance processing and billing represent significant portions of a technician's daily work. They navigate complex insurance systems, process prior authorizations, and work with patients to resolve coverage issues. This often involves communicating with insurance companies, prescribers' offices, and patients to ensure that medications are covered and accessible. Technicians must stay current with changing insurance formularies and coverage policies to provide accurate information to patients. Patient interaction is a rewarding aspect of the pharmacy technician role. They answer phone calls, assist patients at the counter, and provide basic information about medications and pharmacy services. While they cannot provide clinical advice, technicians can explain how to take medications, discuss potential side effects that the pharmacist has already counseled on, and help patients understand their insurance coverage. These interactions require excellent communication skills and empathy, as patients often have concerns or questions about their medications. Compounding is a specialized skill that some pharmacy technicians develop. This involves preparing customized medications that aren't available commercially, such as specific dosage strengths, alternative dosage forms, or combinations of medications. Compounding requires precise measurements, sterile technique when appropriate, and thorough documentation. Technicians who work in compounding must complete additional training and maintain specialized certifications.",
      author: "Amanda Foster, CPhT",
      date: "2024-12-20",
      readTime: "9 min read",
      category: "Pharmacy Operations",
      image: pharmacyTechnician,
      tags: ["Pharmacy Technicians", "Healthcare Team", "Pharmacy Operations", "Patient Care"]
    }
  ]

  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1)

  // Close share menu when clicking outside
  const handleClickOutside = (event) => {
    if (shareMenuOpen && !event.target.closest('.share-menu')) {
      setShareMenuOpen(null)
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
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              QUICKRX <span className="text-green-400">Health Blog</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay informed with the latest health insights, medication tips, and wellness advice from our expert pharmacists and healthcare professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Featured Article</h2>
          </div>
          
          <Card className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {featuredPost.category}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {/* Share Button */}
                    <div className="relative share-menu">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShareMenuOpen(shareMenuOpen === 'featured' ? null : 'featured')}
                        className="border-gray-300 text-gray-600 hover:bg-gray-50"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                      
                      {/* Share Menu */}
                      {shareMenuOpen === 'featured' && (
                        <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10 min-w-[200px]">
                          <div className="grid grid-cols-2 gap-1">
                            <button
                              onClick={() => sharePost('facebook', featuredPost)}
                              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                            >
                              <Facebook className="h-4 w-4 text-blue-600" />
                              Facebook
                            </button>
                            <button
                              onClick={() => sharePost('twitter', featuredPost)}
                              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                            >
                              <Twitter className="h-4 w-4 text-blue-400" />
                              Twitter
                            </button>
                            <button
                              onClick={() => sharePost('linkedin', featuredPost)}
                              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                            >
                              <Linkedin className="h-4 w-4 text-blue-700" />
                              LinkedIn
                            </button>
                            <button
                              onClick={() => sharePost('email', featuredPost)}
                              className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                            >
                              <Mail className="h-4 w-4 text-gray-600" />
                              Email
                            </button>
                          </div>
                          <div className="border-t border-gray-200 mt-1 pt-1">
                            <button
                              onClick={() => copyToClipboard(featuredPost)}
                              className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                            >
                              Copy Link
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                      <Link to="/blog/medication-types">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Recent Articles</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our latest health and wellness articles written by our expert team of pharmacists and healthcare professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Share Button */}
                      <div className="relative share-menu">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setShareMenuOpen(shareMenuOpen === post.id ? null : post.id)}
                          className="border-gray-300 text-gray-600 hover:bg-gray-50"
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        
                        {/* Share Menu */}
                        {shareMenuOpen === post.id && (
                          <div className="absolute bottom-full right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-10 min-w-[200px]">
                            <div className="grid grid-cols-2 gap-1">
                              <button
                                onClick={() => sharePost('facebook', post)}
                                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                              >
                                <Facebook className="h-4 w-4 text-blue-600" />
                                Facebook
                              </button>
                              <button
                                onClick={() => sharePost('twitter', post)}
                                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                              >
                                <Twitter className="h-4 w-4 text-blue-400" />
                                Twitter
                              </button>
                              <button
                                onClick={() => sharePost('linkedin', post)}
                                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                              >
                                <Linkedin className="h-4 w-4 text-blue-700" />
                                LinkedIn
                              </button>
                              <button
                                onClick={() => sharePost('email', post)}
                                className="flex items-center gap-2 p-2 text-sm text-gray-700 hover:bg-blue-50 rounded"
                              >
                                <Mail className="h-4 w-4 text-gray-600" />
                                Email
                              </button>
                            </div>
                            <div className="border-t border-gray-200 mt-1 pt-1">
                              <button
                                onClick={() => copyToClipboard(post)}
                                className="w-full text-left p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                Copy Link
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                        <Link to={post.link}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated with Our Newsletter</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest health tips, medication insights, and wellness advice delivered directly to your inbox.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
              <Link to="/newsletter">Subscribe to Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blog

