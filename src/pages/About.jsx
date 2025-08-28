import React from 'react'
import heartPillsImage from '../assets/heart-pills.jpg'

function About() {
  return (
    <div>
      {/* About Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
        {/* Floating Pills Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="pill-with-line absolute top-20 left-10 w-8 h-16 bg-white opacity-10 rounded-full transform rotate-12 animate-pulse"></div>
          <div className="pill-with-line absolute top-32 right-20 w-6 h-12 bg-green-400 opacity-15 rounded-full transform -rotate-45 animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
          <div className="pill-with-line absolute bottom-40 left-1/4 w-10 h-20 bg-white opacity-8 rounded-full transform rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="pill-with-line absolute top-1/2 right-10 w-7 h-14 bg-green-300 opacity-12 rounded-full transform -rotate-12 animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About <span className="text-green-400">QuickRX Pharmacy</span></h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn about our history, mission, and the dedicated team behind QuickRX Pharmacy
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                QuickRX Pharmacy is a privately owned, locally operated mom-and-pop pharmacy that has been serving our community with dedication and care. As an independent pharmacy, we take pride in offering personalized service that larger chain pharmacies simply cannot match.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that exceptional healthcare isn't just about dispensing medications—it's about building relationships, understanding individual needs, and walking alongside our patients on their health journey. Our multilingual staff speaks English, Spanish, and Arabic, ensuring we can serve our diverse community effectively.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                At QuickRX Pharmacy, we offer unbeatable cash prices and provide free parking for all our customers' convenience. We also carry a comprehensive selection of DME (Durable Medical Equipment) supplies including wheelchairs, walkers, blood pressure monitors, diabetic supplies, compression stockings, and mobility aids.
              </p>
              <p className="text-lg text-gray-600">
                Through innovation and unwavering dedication, we've grown from a local pharmacy to a comprehensive healthcare partner. We've embraced technology to enhance our services while preserving the human touch that makes healthcare meaningful. Every day, we're inspired by the trust our community places in us and the opportunity to make a positive difference in people's lives.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heartPillsImage} 
                alt="Heart-shaped arrangement of pills representing our care and dedication" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-10">
              To improve the health and wellbeing of our community by providing accessible, personalized pharmaceutical care and health services with compassion and expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-green-600 text-4xl font-bold mb-4">01</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Patient-Centered Care</h3>
                <p className="text-gray-600">We put patients first, tailoring our services to meet individual needs with compassion and respect.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-green-600 text-4xl font-bold mb-4">02</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Excellence in Service</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, from prescription accuracy to customer service.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-green-600 text-4xl font-bold mb-4">03</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Wellness</h3>
                <p className="text-gray-600">We're committed to improving the health of our community through education and preventive care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-700 font-medium">Languages Spoken</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-700 font-medium">Customers</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">FREE</div>
              <div className="text-gray-700 font-medium">Parking Available</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">DME</div>
              <div className="text-gray-700 font-medium">Supplies Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

