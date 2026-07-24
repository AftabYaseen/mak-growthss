"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl rounded-lg transition-all duration-300 bg-black/40 backdrop-blur-md px-4 sm:px-6 lg:px-8 border border-white/20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a className="text-2xl font-bold text-white cursor-pointer" href="/">
              MAK
            </a>
          </div>

          <nav className="hidden md:flex space-x-1 items-center">
            <a
              href="/"
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
            >
              Home
            </a>

            <div className="relative group">
              <a
                href="#services"
                className="flex items-center text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-full hover:bg-white/5"
              >
                Services
                <ChevronDown
                  size={16}
                  className="ml-1 transform group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <div className="absolute left-0 mt-2 w-56 rounded-xl bg-black/50 backdrop-blur-md shadow-lg ring-1 ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-1">
                  <a
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                    href="#service-shopify"
                  >
                    Shopify Stores
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                    href="#service-meta"
                  >
                    Meta Ads
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                    href="#service-tiktok"
                  >
                    TikTok Ads
                  </a>
                  <a
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10"
                    href="#service-social"
                  >
                    Social Media Management
                  </a>
                </div>
              </div>
            </div>

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
              href="#contact"
            >
              Contact Us
            </a>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <a
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
              href="#contact"
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
