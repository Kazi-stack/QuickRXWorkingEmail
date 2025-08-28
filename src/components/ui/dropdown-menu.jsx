"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { Menu, Phone } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export default function DropdownMenu() {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
        <Menu className="h-6 w-6" />
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content 
          side="bottom" 
          align="end" 
          className="bg-white border rounded-md shadow-md p-4 w-64 mt-2 mr-4 z-50 space-y-3 animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-700 hover:text-green-600 text-sm font-medium">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-green-600 text-sm font-medium">Services</Link>
            <Link to="/copay-assistance" className="text-gray-700 hover:text-green-600 text-sm font-medium">Copay Assistance</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 text-sm font-medium">About</Link>
            <Link to="/careers" className="text-gray-700 hover:text-green-600 text-sm font-medium">Careers</Link>
            <Link to="/transfer" className="text-gray-700 hover:text-green-600 text-sm font-medium">Transfer</Link>
            <Link to="/blog" className="text-gray-700 hover:text-green-600 text-sm font-medium">Blog</Link>
            <Link to="/newsletter" className="text-gray-700 hover:text-green-600 text-sm font-medium">Newsletter</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 text-sm font-medium">Contact</Link>
          </div>

          <div className="pt-4">
            <Link to="/refill">
              <button className="w-full bg-green-600 text-white text-sm py-2 rounded-md hover:bg-green-700 transition-colors">
                Online Refill
              </button>
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 text-green-600" />
              <a href="tel:914-449-1218" className="text-gray-700 font-medium text-sm">
                914-449-1218
              </a>
            </div>
          </div>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}