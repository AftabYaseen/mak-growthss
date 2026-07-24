"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/923090573707?text=Hi%20MAK%20Growths%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-lg transition-all duration-300 bg-black/40 backdrop-blur-md px-4 sm:px-6 lg:px-8 border border-white/20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a className="text-2xl font-bold text-white cursor-pointer" href="/">
              MAK Growths
            </a>
          </div>

          <nav className="hidden md:flex space-x-1 items-center">
            <a
              href="/"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
            >
              Home
            </a>

            <a
              href="#services"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
            >
              Services
            </a>

            <a
              href="#process"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
            >
              Pricing
            </a>
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-2 text-gray-300 hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5"
            >
              Services
            </a>
            <a
              href="#process"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/5"
            >
              Pricing
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
