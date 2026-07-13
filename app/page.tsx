import {
  Star,
  ArrowRight,
  CircleCheckBig,
  TrendingUp,
  Presentation,
  Activity,
  MessageSquare,
  Search,
  Target,
  BarChart3,
  Shield,
  Phone,
  Mail,
  MapPin,
  Monitor,
  Users,
  Megaphone,
  Eye,
  Facebook,
  Instagram,
} from "lucide-react";
import Navbar from "./components/Navbar";

/* ─────────────────────────── HERO ──────────────────────────── */
function Hero() {
  return (
    <div className="relative min-h-screen bg-black pt-14 sm:pt-16 pb-16 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 mb-8 sm:mb-12">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-black flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 border-2 border-black" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-black" />
          </div>
          <div className="flex items-center text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} fill="currentColor" />
            ))}
          </div>
          <span className="text-blue-500 text-sm">200+ businesses scaled</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mt-8 sm:mt-12">
          <span className="block">
            Get{" "}
            <span className="font-playfair italic font-normal text-5xl sm:text-6xl md:text-7xl">
              more
            </span>{" "}
            Business
          </span>
          <span className="block">with Shopify &amp; Digital Ads.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-400">
          We help businesses grow online with professionally managed Shopify
          stores, Meta Ads, TikTok Ads, and social media management.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-6 justify-center">
          <a
            className="rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-sm hover:bg-blue-500 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            href="#contact"
          >
            Start Your Project
            <ArrowRight size={18} className="ml-2 inline-block" />
          </a>
          <a
            className="rounded-full bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-blue-400 hover:bg-white/20 transition-all duration-200 border border-blue-400"
            href="#results"
          >
            View Our Work
          </a>
        </div>

        <div className="mt-10 sm:mt-12">
          <p className="font-medium text-sm sm:text-base text-gray-400">
            Trusted by hundreds of companies, including local businesses and
            ecommerce brands
          </p>
          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-4 justify-center justify-items-center items-center mx-auto max-w-4xl">
            {["FreshCart", "UrbanThreads", "SwiftShip", "GlowLabs"].map((name) => (
              <span
                key={name}
                className="text-lg sm:text-xl font-bold tracking-wider uppercase text-gray-500"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────── SERVICES ─────────────────────── */
function Services() {
  const services = [
    {
      id: "service-shopify",
      title: "Shopify Stores",
      desc: "Launch and scale your ecommerce business with a complete, conversion-optimised Shopify store.",
      features: [
        "Custom store design & setup",
        "Product & inventory management",
        "Payment & shipping configuration",
      ],
      gradient: "from-green-500 to-teal-500",
      Icon: Monitor,
    },
    {
      id: "service-meta",
      title: "Meta Ads",
      desc: "Reach your target audience with powerful Facebook & Instagram ad campaigns tailored to your goals.",
      features: [
        "Custom audience targeting",
        "Ad creatives and copy",
        "Performance monitoring",
      ],
      gradient: "from-blue-500 to-indigo-500",
      Icon: Megaphone,
    },
    {
      id: "service-tiktok",
      title: "TikTok Ads",
      desc: "Tap into the fastest-growing platform with engaging video ad campaigns that drive real results.",
      features: [
        "Video ad strategy & creation",
        "Audience research & targeting",
        "Conversion tracking",
      ],
      gradient: "from-pink-500 to-rose-500",
      Icon: Eye,
    },
    {
      id: "service-social",
      title: "Social Media Management",
      desc: "Build your brand presence across platforms with consistent, engaging content and community management.",
      features: [
        "Content calendar & posting",
        "Community engagement",
        "Monthly analytics reports",
      ],
      gradient: "from-purple-500 to-fuchsia-500",
      Icon: Users,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How can we help{" "}
            <span className="font-playfair italic">you</span>?
          </h2>
          <p className="text-xl text-gray-400">
            We offer tailored services to grow your business online.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              id={s.id}
              className={`relative p-8 rounded-xl text-white shadow-md hover:shadow-lg transition-shadow duration-200 bg-gradient-to-br ${s.gradient} overflow-hidden`}
            >
              <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm mb-4">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center text-sm">
                    <CircleCheckBig size={20} className="text-white mr-2 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-4 right-4">
                <s.Icon size={64} className="opacity-30" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── GUARANTEE ──────────────────────── */
function Guarantee() {
  return (
    <section className="relative py-16 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Shield size={256} className="text-blue-600/20" strokeWidth={2} />
              <CircleCheckBig
                size={128}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
                Our Guarantee
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                10-Day Results <span className="text-blue-400">Guarantee</span>
              </h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                We&apos;re so confident in our ability to deliver results that
                we offer a 10-day money-back guarantee.
              </p>
              <p>
                If we don&apos;t generate genuine enquiries from potential
                customers looking for your services within the first 10 days,
                you&apos;ll receive a full refund.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  "Genuine customer enquiries guaranteed",
                  "Full money-back guarantee",
                  "No questions asked refund policy",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CircleCheckBig size={20} className="text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── DASHBOARD ─────────────────────── */
function Dashboard() {
  const features = [
    {
      icon: <TrendingUp size={24} className="text-blue-400" />,
      title: "Real-Time Analytics",
      desc: "Monitor your campaign performance, impressions, clicks, and conversions as they happen.",
    },
    {
      icon: <Presentation size={24} className="text-blue-400" />,
      title: "Campaign Overview",
      desc: "Get a comprehensive view of your ad campaigns, landing pages, and conversion metrics in one place.",
    },
    {
      icon: <Activity size={24} className="text-blue-400" />,
      title: "Performance Insights",
      desc: "View detailed reports and insights to understand what’s working and where to optimize.",
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Client Dashboard
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Track Your Success in <span className="text-blue-400">Real-Time</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Access your personalized dashboard to monitor campaign performance
            and track your ROI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">{f.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-300">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-gray-500 ml-3">
                  dashboard.mak-growths.com
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-gray-500">Company Info</p>
                    <p className="text-white font-semibold">Your Business</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Premium
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Views", value: "14k" },
                    { label: "Ad Impressions", value: "2.1k" },
                    { label: "Clicks", value: "502" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-lg p-3 text-center border border-gray-800"
                    >
                      <p className="text-lg font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center bg-white/5 border border-gray-800 rounded-lg p-4">
                  <p className="text-white font-semibold">
                    Your Personal Campaign Dashboard
                  </p>
                  <p className="text-gray-300 text-sm">
                    Track metrics that matter to your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PROCESS ──────────────────────── */
function Process() {
  const steps = [
    {
      icon: <MessageSquare size={64} className="text-blue-500" strokeWidth={1.5} />,
      title: "Consultation",
      desc: "We analyze your business and marketing goals to create a tailored strategy.",
    },
    {
      icon: <Search size={64} className="text-blue-500" strokeWidth={1.5} />,
      title: "Strategy",
      desc: "Our team develops a comprehensive plan to meet your objectives.",
    },
    {
      icon: <Target size={64} className="text-blue-500" strokeWidth={1.5} />,
      title: "Campaign",
      desc: "We execute the strategy and launch your campaigns for maximum impact.",
    },
    {
      icon: <BarChart3 size={64} className="text-blue-500" strokeWidth={1.5} />,
      title: "Analysis",
      desc: "We continuously monitor and optimize your campaigns for the best results.",
    },
  ];

  return (
    <section id="process" className="relative bg-black py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      <div className="hidden sm:block absolute inset-x-1/2 top-1/2 h-1 bg-blue-600/20 z-0 w-1 left-1/2 -translate-x-1/2" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Our streamlined process to help you achieve success.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center bg-gray-900/50 backdrop-blur-sm shadow-lg rounded-xl p-8 border border-gray-800 relative z-10 transition-all duration-300 hover:shadow-blue-500/10 hover:shadow-xl"
            >
              {step.icon}
              <div className="text-lg font-semibold text-white mt-4">
                {step.title}
              </div>
              <p className="mt-2 text-gray-400 text-center">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── PRICING ──────────────────────── */
function Pricing() {
  const plans = [
    {
      name: "Meta Ads",
      price: "£150",
      desc: "Ideal for businesses looking to leverage Facebook & Instagram for growth.",
      features: [
        "Comprehensive Ad Setup",
        "Audience Targeting",
        "Monthly Performance Report",
      ],
    },
    {
      name: "TikTok Ads",
      price: "£150",
      desc: "Perfect for businesses seeking to grow with TikTok’s massive reach.",
      features: [
        "Video Ad Strategy",
        "Campaign Setup & Management",
        "Monthly Performance Report",
      ],
    },
    {
      name: "Meta & TikTok Ads",
      price: "£200",
      desc: "Ideal for businesses looking to maximize reach on both platforms.",
      features: [
        "Full Campaign Setup for Both Platforms",
        "Audience & Creative Optimization",
        "Monthly Performance Report",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Pricing Plans
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the plan that suits your business needs. Affordable and
            tailored for startups and established companies.
          </p>
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-700 transition-all duration-300 hover:border-blue-500"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-4xl font-extrabold text-blue-400">
                  {plan.price} <span className="text-lg font-medium text-gray-400">/ mo</span>
                </p>
                <p className="text-gray-400 mt-2 mb-6">Billed monthly</p>
                <p className="text-gray-300">{plan.desc}</p>
              </div>
              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center">
                    <span className="mr-2 text-blue-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-10 block text-center w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── RESULTS ──────────────────────── */
function Results() {
  const cases = [
    {
      name: "FreshCart",
      gradient: "from-emerald-600 to-teal-700",
      headline: "Achieved an 11x Return on Ad Spend",
      stat1: { label: "Increase in CTR", value: "85%" },
      stat2: { label: "Reduction in CPA", value: "37%" },
    },
    {
      name: "UrbanThreads",
      gradient: "from-indigo-600 to-blue-700",
      headline: "Doubled ROI for an Ecommerce Brand",
      stat1: { label: "Increase in CTR", value: "57%" },
      stat2: { label: "Reduction in CPR", value: "69%" },
    },
    {
      name: "GlowLabs",
      gradient: "from-fuchsia-600 to-purple-700",
      headline: "Increased Inquiries by 100%",
      stat1: { label: "Increase in CTR", value: "63%" },
      stat2: { label: "Reduction in CPA", value: "41%" },
    },
  ];

  return (
    <section id="results" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Results speak for <span className="font-playfair italic">themselves</span>.
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            We&apos;ve worked across a number of industries and have achieved
            some incredible results with some incredible people and brands.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.name}
              className="flex flex-col rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-700 transition-all duration-300 hover:border-gray-500"
            >
              <div className={`relative h-64 bg-gradient-to-br ${c.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {c.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-300 mb-4">{c.headline}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">{c.stat1.value}</p>
                    <p className="text-sm text-gray-400">{c.stat1.label}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-400">{c.stat2.value}</p>
                    <p className="text-sm text-gray-400">{c.stat2.label}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── COMPARISON ─────────────────────── */
function Comparison() {
  const others = [
    "High cost with hidden fees",
    "No performance guarantees",
    "Slow communication",
    "Outdated growth strategies",
    "Limited channel support",
  ];
  const us = [
    "Low cost with no hidden fees",
    "Guaranteed performance or money-back",
    "Fast, responsive communication",
    "Modern, data-driven strategies",
    "Multi-channel support for all your needs",
    "Free bonuses such as initial consultation & reports",
  ];

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-800 text-gray-300 rounded-full border border-gray-700 mb-4">
            Comparison
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            But, why would you want to work{" "}
            <span className="font-playfair italic">with us?</span>
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the difference with our affordable, result-driven approach.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-gray-700">
          <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-gray-700">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Other Agencies
            </h3>
            <ul className="text-left space-y-4 text-gray-300">
              {others.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              Why Work With Us?
            </h3>
            <ul className="text-left space-y-4 text-gray-300">
              {us.map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── CTA BANNER ─────────────────────── */
function CtaBanner() {
  return (
    <div className="py-16 bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">
          Ready to take your business to the next level?
        </h2>
        <p className="mt-4">Contact us today for a free consultation!</p>
        <div className="mt-6">
          <a
            className="inline-block rounded-full bg-white text-blue-600 px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            href="#contact"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">MAK Growths</h3>
            <p className="text-gray-400 mb-4">
              Empowering businesses with effective digital marketing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#results" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a className="text-gray-400 hover:text-blue-400" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Shopify Stores", href: "#service-shopify" },
                { label: "Meta Ads", href: "#service-meta" },
                { label: "TikTok Ads", href: "#service-tiktok" },
                { label: "Social Media Management", href: "#service-social" },
              ].map((s) => (
                <li key={s.label}>
                  <a className="text-gray-400 hover:text-blue-400" href={s.href}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 shrink-0" />
                <span className="text-gray-400">Local &amp; International</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 shrink-0" />
                <a href="mailto:hello@mak-growths.com" className="text-gray-400 hover:text-blue-400">
                  hello@mak-growths.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 shrink-0" />
                <span className="text-gray-400">Contact us for details</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MAK Growths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────── PAGE ──────────────────────────── */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Guarantee />
      <Dashboard />
      <Process />
      <Pricing />
      <Results />
      <Comparison />
      <CtaBanner />
      <Footer />
    </main>
  );
}
