import {
  Star,
  ArrowRight,
  Check,
  X,
  BarChart3,
  MessageSquare,
  TrendingUp,
  Search,
  Paintbrush,
  LayoutDashboard,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Monitor,
  Users,
  Megaphone,
  Eye,
} from "lucide-react";

/* ─────────────────────────── NAVBAR ─────────────────────────── */
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="text-[18px] font-bold tracking-tight">
          MAK Growths
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-[14px] text-white/90 hover:text-white transition"
          >
            Home
          </a>

          {/* Services dropdown */}
          <div className="nav-dropdown">
            <a
              href="#services"
              className="text-[14px] text-white/60 hover:text-white transition flex items-center gap-1"
            >
              Services <ChevronDown size={14} />
            </a>
            <div className="nav-dropdown-menu">
              <a href="#service-shopify">Shopify Stores</a>
              <a href="#service-meta">Meta Ads</a>
              <a href="#service-tiktok">TikTok Ads</a>
              <a href="#service-social">Social Media Management</a>
            </div>
          </div>

          <a
            href="#process"
            className="text-[14px] text-white/60 hover:text-white transition"
          >
            How it Works
          </a>
          <a
            href="#pricing"
            className="text-[14px] text-white/60 hover:text-white transition"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-[14px] font-medium rounded-full bg-[#3b82f6] hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
        <button className="md:hidden text-white/70 hover:text-white">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

/* ─────────────────────────── HERO ──────────────────────────── */
function Hero() {
  return (
    <section className="hero-glow pt-36 pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* Trust badge */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <ShieldCheck size={16} className="text-white" />
            </div>
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-[14px] text-white/70 ml-1">200+ businesses scaled</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[52px] sm:text-[64px] md:text-[80px] font-black leading-[1.05] tracking-[-0.02em] mb-6">
          Get <em className="italic font-black text-[#3b82f6]">more</em> Business
          <br />
          with Shopify & Digital Ads.
        </h1>

        <p className="text-[17px] text-white/45 max-w-2xl mx-auto mb-10 leading-relaxed">
          We help businesses grow online with professionally managed Shopify
          stores, Meta Ads, TikTok Ads, and social media management.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-semibold rounded-full bg-[#3b82f6] hover:bg-blue-600 transition"
          >
            Start Your Project <ArrowRight size={16} />
          </a>
          <a
            href="#results"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[14px] font-semibold rounded-full border border-white/20 hover:border-white/40 transition"
          >
            View Our Work
          </a>
        </div>

        {/* Trust line */}
        <p className="text-[14px] text-white/35 mb-8">
          Trusted by hundreds of companies, including local businesses and ecommerce brands
        </p>

        {/* Client logos */}
        <div className="flex items-center justify-center flex-wrap gap-12 opacity-50">
          {["FreshCart", "UrbanThreads", "SwiftShip", "GlowLabs"].map((name) => (
            <span key={name} className="text-[18px] font-bold tracking-wider uppercase text-white/60">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
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
      variant: "shopify",
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
      variant: "meta",
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
      variant: "tiktok",
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
      variant: "social",
      Icon: Users,
    },
  ];

  return (
    <section id="services" className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">Services</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            How can we help <em className="italic font-black">you?</em>
          </h2>
          <p className="text-white/45 text-[17px]">
            We offer tailored services to grow your business online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} id={s.id} className={`service-card ${s.variant}`}>
              <h3 className="text-[20px] font-bold mb-3">{s.title}</h3>
              <p className="text-[14px] text-white/60 mb-6 leading-relaxed">
                {s.desc}
              </p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/80">
                    <Check size={18} className="check-icon mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="service-watermark">
                <s.Icon size={56} />
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <span className="badge-pill mb-5 inline-block">Our Guarantee</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            10-Day Results <span className="text-[#3b82f6]">Guarantee</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-14">
          <div className="shield-glow shrink-0">
            <div className="relative z-10 w-36 h-36 rounded-2xl bg-gradient-to-br from-[#3b82f6]/20 to-[#3b82f6]/5 border border-[#3b82f6]/20 flex items-center justify-center">
              <ShieldCheck size={64} className="text-[#3b82f6]" />
            </div>
          </div>

          <div>
            <p className="text-white/45 mb-6 leading-relaxed text-[15px]">
              We&apos;re so confident in our ability to deliver results that we offer a 10-day
              money-back guarantee. If we don&apos;t generate genuine enquiries from potential
              customers looking for your services within the first 10 days, you&apos;ll receive
              a full refund.
            </p>
            <ul className="space-y-4">
              {[
                "Genuine customer enquiries guaranteed",
                "Full money-back guarantee",
                "No questions asked refund policy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 text-[15px]">
                  <Check size={20} className="text-[#10b981] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
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
      icon: <BarChart3 size={20} className="text-[#3b82f6]" />,
      title: "Real-Time Analytics",
      desc: "Monitor your campaign performance, impressions, clicks, and conversions as they happen.",
    },
    {
      icon: <LayoutDashboard size={20} className="text-[#3b82f6]" />,
      title: "Campaign Overview",
      desc: "Get a comprehensive view of your ad campaigns, landing pages, and conversion metrics in one place.",
    },
    {
      icon: <TrendingUp size={20} className="text-[#3b82f6]" />,
      title: "Performance Insights",
      desc: "View detailed reports and insights to understand what\u2019s working and where to optimize.",
    },
  ];

  return (
    <section className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">Client Dashboard</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            Track Your Success in <span className="text-[#3b82f6]">Real-Time</span>
          </h2>
          <p className="text-white/45 text-[17px]">
            Access your personalized dashboard to monitor campaign performance and track your ROI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="dash-feature flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[16px] mb-1">{f.title}</h3>
                  <p className="text-[14px] text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-glow p-6">
            <div className="rounded-xl bg-[#0a0a1a] border border-white/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-xs text-white/30 ml-3">dashboard.mak-growths.com</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[11px] text-white/40">Company Info</p>
                    <p className="text-[14px] font-bold">Your Business</p>
                  </div>
                  <span className="text-[11px] px-3 py-1 rounded-full bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20">
                    Premium
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-6">
                  {[
                    { label: "Views", value: "14k" },
                    { label: "Sample Ad Impressions", value: "2.1k" },
                    { label: "Clicks", value: "502" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/[0.03] rounded-lg p-3 text-center border border-white/5">
                      <p className="text-[18px] font-bold">{stat.value}</p>
                      <p className="text-[10px] text-white/40">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-5 pb-5">
                <div className="bg-white/[0.03] rounded-lg p-3 border border-white/5 text-center">
                  <p className="text-[14px] font-bold">Your Personal Campaign Dashboard</p>
                  <p className="text-[12px] text-white/40">Track metrics that matter to your business</p>
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
      icon: <MessageSquare size={28} className="text-[#3b82f6]" />,
      title: "Consultation",
      desc: "We analyze your business and marketing goals to create a tailored strategy.",
    },
    {
      icon: <Search size={28} className="text-[#3b82f6]" />,
      title: "Strategy",
      desc: "Our team develops a comprehensive plan to meet your objectives.",
    },
    {
      icon: <Paintbrush size={28} className="text-[#3b82f6]" />,
      title: "Campaign",
      desc: "We execute the strategy and launch your campaigns for maximum impact.",
    },
    {
      icon: <BarChart3 size={28} className="text-[#3b82f6]" />,
      title: "Analysis",
      desc: "We continuously monitor and optimize your campaigns for the best results.",
    },
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">How It Works</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            Our Process
          </h2>
          <p className="text-white/45 text-[17px]">
            Our streamlined process to help you achieve success.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.title} className="process-card">
              <div className="w-14 h-14 rounded-2xl bg-[#3b82f6]/10 border border-[#3b82f6]/15 flex items-center justify-center mx-auto mb-5">
                {step.icon}
              </div>
              <h3 className="text-[18px] font-bold mb-2">{step.title}</h3>
              <p className="text-[14px] text-white/45 leading-relaxed">{step.desc}</p>
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
      featured: false,
    },
    {
      name: "TikTok Ads",
      price: "£150",
      desc: "Perfect for businesses seeking to grow with TikTok\u2019s massive reach.",
      features: [
        "Video Ad Strategy",
        "Campaign Setup & Management",
        "Monthly Performance Report",
      ],
      featured: false,
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
      featured: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative section-glow">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">Pricing</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            Our Pricing Plans
          </h2>
          <p className="text-white/45 text-[17px] max-w-xl mx-auto">
            Choose the plan that suits your business needs. Affordable and
            tailored for startups and established companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.featured ? "featured" : ""} p-8 flex flex-col`}
            >
              <h3 className="text-[20px] font-bold mb-3">{plan.name}</h3>
              <p className="mb-1">
                <span className="text-[32px] font-black text-[#3b82f6]">{plan.price}</span>
                <span className="text-[15px] font-normal text-white/35 ml-1">/ mo</span>
              </p>
              <p className="text-[13px] text-white/35 mb-5">Billed monthly</p>
              <p className="text-[14px] text-white/45 mb-6 leading-relaxed">{plan.desc}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/65">
                    <Check size={18} className="text-white/45 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full text-center py-3.5 rounded-full bg-[#3b82f6] hover:bg-blue-600 text-[14px] font-semibold transition"
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
      stat1: { label: "Increase in CTR", value: "85%" },
      stat2: { label: "Reduction in CPA", value: "37%" },
      headline: "Achieved an 11x Return on Ad Spend",
    },
    {
      name: "UrbanThreads",
      stat1: { label: "Increase in CTR", value: "57%" },
      stat2: { label: "Reduction in CPR", value: "69%" },
      headline: "Doubled ROI for an Ecommerce Brand",
    },
    {
      name: "GlowLabs",
      stat1: { label: "Increase in CTR", value: "63%" },
      stat2: { label: "Reduction in CPA", value: "41%" },
      headline: "Increased Inquiries by 100%",
    },
  ];

  return (
    <section id="results" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">Results</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            Results speak for <em className="italic font-black">themselves.</em>
          </h2>
          <p className="text-white/45 text-[17px] max-w-2xl mx-auto">
            We&apos;ve worked across a number of industries and have achieved
            some incredible results with some incredible people and brands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cases.map((c) => (
            <div key={c.name} className="stats-card text-center">
              <p className="text-[14px] text-white/45 mb-5">{c.headline}</p>
              <div className="flex items-center justify-center gap-10">
                <div>
                  <p className="text-[32px] font-black text-[#3b82f6]">{c.stat1.value}</p>
                  <p className="text-[12px] text-white/35 mt-1">{c.stat1.label}</p>
                </div>
                <div>
                  <p className="text-[32px] font-black text-[#10b981]">{c.stat2.value}</p>
                  <p className="text-[12px] text-white/35 mt-1">{c.stat2.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="card-glow-subtle overflow-hidden">
              <div className="aspect-video bg-[#0d1117] flex items-center justify-center">
                <span className="text-white/20 text-[14px]">Portfolio Preview</span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-[16px]">{c.name}</h4>
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
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="badge-pill mb-5 inline-block">Comparison</span>
          <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.02em] mb-4">
            But, why would you want to work <em className="italic font-black">with us?</em>
          </h2>
          <p className="text-white/45 text-[17px]">
            Experience the difference with our affordable, result-driven approach.
          </p>
        </div>

        <div className="comparison-box p-8 md:p-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-[20px] font-bold text-[#3b82f6] mb-6">Other Agencies</h3>
            <ul className="space-y-5">
              {others.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/55 text-[15px]">
                  <X size={18} className="text-red-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-bold text-[#3b82f6] mb-6">Why Work With Us?</h3>
            <ul className="space-y-5">
              {us.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/65 text-[15px]">
                  <Check size={18} className="text-[#10b981] shrink-0" />
                  {item}
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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="cta-gradient rounded-2xl py-16 px-8 text-center">
          <h2 className="text-[28px] md:text-[36px] font-black tracking-[-0.02em] mb-3">
            Ready to take your business to the next level?
          </h2>
          <p className="text-white/70 mb-8 text-[16px]">
            Contact us today for a free consultation!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-[#050510] font-semibold text-[14px] hover:bg-white/90 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── FOOTER ─────────────────────────── */
function Footer() {
  return (
    <footer id="contact" className="pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-[18px] font-bold mb-3">MAK Growths</h3>
            <p className="text-[14px] text-white/40 leading-relaxed">
              Empowering businesses with effective digital marketing solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[14px] text-white/50">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#results" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Our Services</h4>
            <ul className="space-y-2.5 text-[14px] text-white/50">
              {[
                { label: "Shopify Stores", href: "#service-shopify" },
                { label: "Meta Ads", href: "#service-meta" },
                { label: "TikTok Ads", href: "#service-tiktok" },
                { label: "Social Media Management", href: "#service-social" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-white transition">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[15px] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-[14px] text-white/50">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="shrink-0 mt-0.5 text-white/30" />
                Local &amp; International
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-white/30" />
                hello@mak-growths.com
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-white/30" />
                Contact us for details
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mb-6" />
        <p className="text-center text-[12px] text-white/25">
          &copy; {new Date().getFullYear()} MAK Growths. All rights reserved.
        </p>
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
