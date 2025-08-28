import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Users, Heart, Clock, DollarSign, GraduationCap, Briefcase, Award, Shield, 
  MapPin, Phone, Mail, Upload, CheckCircle, Star, Building, Target, Send
} from 'lucide-react'

function Careers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    experience: '',
    education: '',
    availability: '',
    salary: '',
    coverLetter: '',
    resume: null,
    references: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your application! We will review it and contact you within 3-5 business days.')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      position: '',
      experience: '',
      education: '',
      availability: '',
      salary: '',
      coverLetter: '',
      resume: null,
      references: ''
    })
  }

  return (
    <div>
      {/* Hero Section - Brief */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-lg">
            <Briefcase className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white leading-tight">
            Join <span className="text-green-400">QUICKRX PHARMACY</span>
          </h1>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Start your career with us today. Fill out the application below and become part of our professional healthcare team.
          </p>
        </div>
      </section>

      {/* Enhanced Application Form Section - TOP PRIORITY */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mb-6 shadow-lg">
              <Send className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-blue-900">Apply Now</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to join our team? Complete your application below and we'll get back to you within 3-5 business days.
            </p>
          </div>

          <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-8">
              <div className="text-center">
                <CardTitle className="text-3xl font-bold mb-2">Employment Application</CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Please fill out all required fields marked with *
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900">Personal Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">First Name *</label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-lg"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">Last Name *</label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-lg"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-lg"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-blue-900">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-lg"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <label className="block text-sm font-semibold text-blue-900">Address *</label>
                    <Input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-lg text-lg"
                      placeholder="Street address, City, State, ZIP"
                    />
                  </div>
                </div>



                {/* Experience & Education */}
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900">Experience & Education</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-purple-900">Work Experience *</label>
                      <Textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg text-lg resize-none"
                        placeholder="Please describe your relevant work experience, including job titles, employers, dates of employment, and key responsibilities..."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-purple-900">Education *</label>
                      <Textarea
                        name="education"
                        value={formData.education}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 rounded-lg text-lg resize-none"
                        placeholder="Please list your educational background, including degrees, certifications, and relevant training..."
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 border border-orange-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-orange-900">Additional Information</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-orange-900">Cover Letter *</label>
                      <Textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg text-lg resize-none"
                        placeholder="Tell us why you're interested in working at QUICKRX PHARMACY and what makes you a great fit for our team..."
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-orange-900">References</label>
                      <Textarea
                        name="references"
                        value={formData.references}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full border-2 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 rounded-lg text-lg resize-none"
                        placeholder="Please provide 2-3 professional references with names, titles, companies, and contact information..."
                      />
                    </div>
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-center mb-6">
                    <div className="bg-teal-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <Upload className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900">Resume Upload</h3>
                  </div>
                  
                  <div className="border-2 border-dashed border-teal-300 rounded-xl p-8 text-center hover:border-teal-400 transition-colors duration-200 bg-white">
                    <Upload className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                    <label className="cursor-pointer">
                      <span className="text-teal-600 font-semibold text-lg hover:text-teal-700">Upload your resume</span>
                      <span className="text-gray-500 text-lg"> or drag and drop</span>
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                    </label>
                    <p className="text-sm text-gray-500 mt-3">PDF, DOC, or DOCX files only (Max 5MB)</p>
                    {formData.resume && (
                      <div className="mt-4 p-3 bg-green-100 rounded-lg">
                        <p className="text-sm text-green-700 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 mr-2" />
                          {formData.resume.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <Send className="h-6 w-6 mr-3" />
                    Submit Application
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By submitting this application, you agree to our terms and conditions. We will contact you within 3-5 business days.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Why Choose QUICKRX PHARMACY?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're more than just a workplace – we're a community dedicated to excellence in healthcare and professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Family-Oriented Culture</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Experience a supportive, collaborative environment where every team member is valued and respected as part of our pharmacy family.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Heart className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Make a real difference in patients' lives while contributing to the health and wellness of our New Rochelle community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <GraduationCap className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Professional Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Advance your career with comprehensive training, mentorship, and continuing education opportunities in the pharmacy field.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Clock className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Enjoy flexible scheduling, reasonable hours, and a healthy balance between your professional and personal life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <DollarSign className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Competitive Compensation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Receive competitive salary, comprehensive benefits package, and performance-based incentives and bonuses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center pb-4">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-blue-900 mb-2">Recognition & Rewards</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  Your contributions are recognized and rewarded through our employee appreciation programs and advancement opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-blue-900">Comprehensive Benefits Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We invest in our employees' well-being and future success with a complete benefits package
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Health Insurance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Comprehensive medical, dental, and vision coverage for you and your family</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Paid Time Off</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Generous vacation days, sick leave, personal time, and holiday pay</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Training & Development</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Continuing education support and professional development programs</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Employee Perks</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Pharmacy discounts, flexible scheduling, and employee recognition programs</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Careers

