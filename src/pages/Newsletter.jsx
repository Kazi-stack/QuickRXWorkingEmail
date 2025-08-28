import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Mail, Bell, Heart, Shield, Users, Award, CheckCircle, 
  Calendar, Clock, Pill, Stethoscope, BookOpen, Star
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [interests, setInterests] = useState([])
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleInterestToggle = (interest) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    // In a real application, this would send data to a backend service
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
      setName('')
      setInterests([])
    }, 3000)
  }

  const newsletterTopics = [
    {
      icon: Pill,
      title: "Medication Updates",
      description: "Latest information about new medications, drug recalls, and safety alerts"
    },
    {
      icon: Stethoscope,
      title: "Health Tips",
      description: "Expert advice on managing chronic conditions and maintaining wellness"
    },
    {
      icon: BookOpen,
      title: "Educational Content",
      description: "In-depth articles about health conditions, treatments, and prevention"
    },
    {
      icon: Bell,
      title: "Pharmacy News",
      description: "Updates about our services, new programs, and community events"
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Information about health screenings, vaccinations, and wellness initiatives"
    },
    {
      icon: Shield,
      title: "Safety Information",
      description: "Important safety updates, drug interactions, and medication management tips"
    }
  ]

  const recentNewsletters = [
    {
      title: "Winter Wellness: Staying Healthy During Cold Season",
      date: "January 2025",
      link: "/newsletter/winter-wellness",
      topics: ["Flu Prevention", "Immune Support", "Vitamin D"],
      description: "Essential tips for maintaining your health during the winter months, including vaccination schedules and immune-boosting strategies."
    },
    {
      title: "New Year, New Health Goals: Medication Management Tips",
      date: "January 2025",
      link: "/newsletter/health-goals",
      topics: ["Medication Adherence", "Health Goals", "Chronic Disease"],
      description: "Start the year right with our comprehensive guide to managing your medications and achieving your health objectives."
    },
    {
      title: "Understanding Your Insurance Benefits for 2025",
      date: "December 2024",
      link: "/newsletter/insurance-benefits",
      topics: ["Insurance", "Copay Assistance", "Benefits"],
      description: "Navigate your health insurance benefits and learn about copay assistance programs available at QUICKRX PHARMACY."
    },
    {
      title: "Holiday Health: Managing Medications During Travel",
      date: "December 2024",
      link: "/newsletter/holiday-travel",
      topics: ["Travel Tips", "Medication Storage", "Emergency Preparedness"],
      description: "Essential advice for safely managing your medications while traveling during the holiday season."
    }
  ]

  const interestOptions = [
    "Medication Education",
    "Chronic Disease Management", 
    "Preventive Care",
    "Nutrition & Wellness",
    "Mental Health",
    "Senior Health",
    "Pediatric Health",
    "Women's Health",
    "Men's Health",
    "Pharmacy Services"
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-8 shadow-lg">
              <Mail className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              QUICKRX <span className="text-green-400">Newsletter</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay informed with the latest health insights, medication updates, and wellness tips delivered directly to your inbox every month.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Form */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of patients who trust QUICKRX PHARMACY for reliable health information and updates.
            </p>
          </div>

          <Card className="bg-white border-blue-200 shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-900">Get Health Insights Delivered</CardTitle>
              <CardDescription className="text-gray-600">
                Customize your newsletter preferences to receive content that matters most to you.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              {isSubscribed ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Successfully Subscribed!</h3>
                  <p className="text-gray-600">Thank you for subscribing to the QUICKRX PHARMACY newsletter. You'll receive your first newsletter soon!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Your Interests (Optional)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {interestOptions.map((interest) => (
                        <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Privacy Commitment</p>
                        <p>We respect your privacy and will never share your email address with third parties. You can unsubscribe at any time.</p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Subscribe to Newsletter
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">What You'll Receive</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our monthly newsletter covers a wide range of health topics to keep you informed and empowered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletterTopics.map((topic, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <topic.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{topic.title}</h3>
                  <p className="text-gray-600">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Newsletters */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Recent Newsletter Issues</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent newsletter content to see the valuable health information we share.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentNewsletters.map((newsletter, index) => (
              <Card key={index} className="bg-white border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    {newsletter.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-900">{newsletter.title}</h3>
                  <p className="text-gray-600 mb-4">{newsletter.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {newsletter.topics.map((topic, topicIndex) => (
                      <span key={topicIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white" asChild>
                    <Link to={newsletter.link}>
                      Read Archive
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Why Subscribe?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our community of informed patients and discover the benefits of staying connected with QUICKRX PHARMACY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Expert Content</h3>
              <p className="text-gray-600 text-sm">Receive health information written by licensed pharmacists and healthcare professionals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Timely Updates</h3>
              <p className="text-gray-600 text-sm">Stay current with the latest health news, medication updates, and safety alerts.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Community Focus</h3>
              <p className="text-gray-600 text-sm">Get information about local health events, screenings, and community wellness programs.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-blue-900">Exclusive Content</h3>
              <p className="text-gray-600 text-sm">Access subscriber-only content, special offers, and early notifications about new services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Have Questions About Our Newsletter?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you stay informed about your health. Contact us for more information about our newsletter or any health-related questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Visit Our Blog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter

