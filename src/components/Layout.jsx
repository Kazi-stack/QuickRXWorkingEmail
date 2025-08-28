import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import DropdownMenu from '@/components/ui/dropdown-menu.jsx'
import { Phone, Mail, MapPin, Printer, Menu } from 'lucide-react'
import quickrxLogo from '../assets/images/quickrx-logo.png'

function Layout() {

  return (
  <div className="min-h-screen bg-background text-foreground">
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img src={quickrxLogo} alt="QuickRX Pharmacy Logo" className="h-10 w-auto" />
              <div className="flex flex-col leading-tight">
                <h1 className="text-xl font-bold text-blue-900 block md:hidden">QUICKRX</h1>
                <h1 className="text-2xl font-bold text-blue-900 hidden md:block">QUICKRX PHARMACY</h1>
              </div>
            </Link>
          </div>

          <div className="block lg:hidden">
            <DropdownMenu />
          </div>

          <div className="hidden lg:flex items-center justify-between w-full">
            <nav className="flex space-x-6 ml-auto">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/copay-assistance", label: "Copay Assistance" },
                { to: "/about", label: "About" },
                { to: "/careers", label: "Careers" },
                { to: "/transfer", label: "Transfer" },
                { to: "/blog", label: "Blog" },
                { to: "/newsletter", label: "Newsletter" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-600 font-medium"
                      : "text-gray-700 font-medium"
                  }
                  end
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center space-x-4 ml-6">
              <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <a href="tel:914-449-1218" className="text-gray-700 font-medium text-sm">
                    914-449-1218
                  </a>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2" asChild>
                <Link to="/refill">Online Refill</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>


    <main>
      <Outlet />
    </main>

    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={quickrxLogo} alt="QuickRX Pharmacy Logo" className="h-8 w-auto" />
              <h3 className="text-xl font-bold">QUICKRX PHARMACY</h3>
            </div>
            <p className="text-blue-100">
              Your trusted neighborhood pharmacy, providing exceptional care.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              {["Home", "Services", "About", "Transfer", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <Link to={`/${item.toLowerCase()}`} className="hover:text-green-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-blue-100">
              {[
                "Health Screening",
                "Vaccinations",
                "Health Consultations",
                "Copay Assistance",
              ].map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${service.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-green-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact Info</h4>
            <ul className="space-y-3 text-blue-100">
              <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-green-400" />
                  <a href="tel:914-449-1218">
                    Phone: 914-449-1218
                  </a>
              </li>
              <li className="flex items-center space-x-2">
                <Printer className="h-4 w-4 text-green-400" />
                <span>Fax: 914-449-1219</span>
              </li>
              <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-green-400" />
                  <a href="mailto:Info@Quickrx134.com" className='break-words'>
                    Info@Quickrx134.com
                  </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <a 
                  href="https://maps.google.com/?q=134+North+Ave+Ste+8,+New+Rochelle,+NY+10801" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  134 North Ave Ste 8<br />
                  New Rochelle, NY 10801
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
          <p className="mb-4">&copy; 2024 QUICKRX PHARMACY. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              "Privacy Policy",
              "Terms of Service",
              "HIPAA Notice",
              "Disclaimer",
              "Content Disclaimer",
              "Accessibility",
              "Cookies",
            ].map((item, idx) => (
              <Link
                key={idx}
                to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-blue-300 hover:text-green-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Layout

