"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How quickly can I expect to see results?",
    a: "Most clients start seeing genuine enquiries within the first 10 days thanks to our guarantee. Full campaign optimisation and consistent growth typically build over the first 4-6 weeks.",
  },
  {
    q: "Do you offer a money-back guarantee?",
    a: "Yes. If we don't generate genuine customer enquiries within your first 10 days, you'll receive a full, no-questions-asked refund.",
  },
  {
    q: "Which platforms do you work with?",
    a: "We specialise in Shopify store builds, Meta (Facebook & Instagram) Ads, TikTok Ads, and ongoing social media management, so you can run one or several channels together.",
  },
  {
    q: "Do I need an existing Shopify store to get started?",
    a: "Not at all. We can build you a complete, conversion-optimised Shopify store from scratch, or work with your existing store if you already have one set up.",
  },
  {
    q: "How much does it cost to get started?",
    a: "Our ad management plans start from £150/mo, billed monthly with no long-term contracts. Shopify store builds are quoted separately based on your requirements.",
  },
  {
    q: "Can I cancel or change my plan at any time?",
    a: "Yes, all of our plans are billed monthly with no lock-in contracts, so you can upgrade, downgrade, or cancel whenever you need to.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="font-playfair italic">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden transition-all duration-300 hover:border-blue-500"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-blue-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
