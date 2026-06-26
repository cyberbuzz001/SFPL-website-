
import React, { useState, useEffect } from 'react';
import { View, ServiceMetric, ProjectItem } from './types';
import { 
  Building2, 
  Code2, 
  Sprout, 
  Home, 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Globe, 
  Briefcase, 
  Trophy,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  FileText,
  Newspaper,
  Download,
  TrendingUp,
  ShieldCheck,
  Smartphone,
  HardHat,
  Truck,
  LandPlot,
  Layout,
  MapPin,
  Target,
  Loader2
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

// --- DATA CONSTANTS ---

const RURAL_IMPACT_DATA: ServiceMetric[] = [
  { name: 'Villages', value: 120, label: 'Smart Villages' },
  { name: 'Farmers', value: 5000, label: 'Farmers Connected' },
  { name: 'Water', value: 85, label: 'Water Projects' },
  { name: 'Waste', value: 45, label: 'Waste Mgmt Units' },
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle Scroll Effect for Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Helper
  const navigate = (view: View) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- SUB-COMPONENTS ---

  const Header = () => (
    <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => navigate(View.HOME)}
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-corporate-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
            S
          </div>
          <div className={`font-serif font-bold text-xl ${scrolled ? 'text-corporate-900' : 'text-white'} hidden md:block tracking-wide`}>
            SFPL<span className="text-corporate-gold">.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => navigate(View.HOME)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.HOME ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}>Home</button>
          <button onClick={() => navigate(View.ABOUT)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.ABOUT ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}>About</button>
          
          {/* Business Verticals Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-corporate-gold ${['SOFTWARE', 'CIVIL', 'RURAL', 'REAL_ESTATE'].includes(currentView) ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              Business Verticals <ChevronDown size={14} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-4 w-64 ${dropdownOpen ? 'block' : 'hidden group-hover:block'}`}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                <button onClick={() => navigate(View.SOFTWARE)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Code2 size={16}/> Software Solutions</button>
                <button onClick={() => navigate(View.CIVIL)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Building2 size={16}/> Civil Construction</button>
                <button onClick={() => navigate(View.RURAL)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Sprout size={16}/> Rural Development</button>
                <button onClick={() => navigate(View.REAL_ESTATE)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Home size={16}/> Real Estate</button>
              </div>
            </div>
          </div>

          <button onClick={() => navigate(View.CONSULTING)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.CONSULTING ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}>Consulting</button>
          <button onClick={() => navigate(View.MEDIA)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.MEDIA ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}>Media</button>
          <button onClick={() => navigate(View.DOWNLOADS)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.DOWNLOADS ? 'text-corporate-gold' : scrolled ? 'text-slate-700' : 'text-slate-100'}`}>Downloads</button>

          <button 
            onClick={() => navigate(View.CONTACT)}
            className="bg-corporate-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl ml-4"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden ${scrolled ? 'text-corporate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-2 flex flex-col lg:hidden animate-fade-in-down h-[90vh] overflow-y-auto">
          {[
            { label: 'Home', view: View.HOME },
            { label: 'About Company', view: View.ABOUT },
            { label: 'Software Solutions', view: View.SOFTWARE },
            { label: 'Civil Infrastructure', view: View.CIVIL },
            { label: 'Rural Development', view: View.RURAL },
            { label: 'Real Estate', view: View.REAL_ESTATE },
            { label: 'Consulting & Advisory', view: View.CONSULTING },
            { label: 'Media & Insights', view: View.MEDIA },
            { label: 'Downloads', view: View.DOWNLOADS },
            { label: 'Contact Support', view: View.CONTACT },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.view)}
              className="px-8 py-4 text-left text-slate-700 font-medium hover:bg-slate-50 hover:text-corporate-blue border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );

  // --- VIEWS ---

  const HomeView = () => (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-corporate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=10" 
            alt="Corporate Infrastructure" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-corporate-900/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left mt-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-corporate-gold font-semibold text-sm mb-6 border border-white/20">
            Government-Ready • Investor-Friendly • Innovative
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Building the Future <br />
            <span className="text-corporate-gold">Empowering Nations</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 md:mx-0 mx-auto font-light leading-relaxed">
            SHREESVARN FINNOVOTION PRIVATE LIMITED is a diversified enterprise operating across Software Distribution, Civil Construction, Rural & Urban Development, and Real Estate Solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button onClick={() => navigate(View.ABOUT)} className="px-8 py-4 bg-corporate-blue text-white rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
              Discover SFPL <ArrowRight size={20} />
            </button>
            <button onClick={() => navigate(View.CONTACT)} className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-corporate-900 transition-all">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-16 bg-white -mt-20 relative z-20 container mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 border-b-4 border-corporate-gold">
          {[
            { label: 'Pan-India Presence', value: '20+' },
            { label: 'Govt Projects', value: '50+' },
            { label: 'Villages Empowered', value: '100+' },
            { label: 'Software Clients', value: '10k+' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center border-r last:border-0 border-slate-100">
              <div className="text-3xl md:text-5xl font-bold text-corporate-blue mb-2">{stat.value}</div>
              <div className="text-slate-500 text-xs md:text-sm font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-corporate-gold font-semibold uppercase tracking-wider text-xs">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Core Pillars of Excellence</h2>
            <div className="w-24 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">We combine modern technology with strong operational capabilities to serve public and private sectors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Software Solutions', 
                icon: <Code2 size={32} />, 
                desc: 'Modern, scalable digital systems including CRM, ERP, and AI tools.',
                view: View.SOFTWARE,
                bg: 'bg-blue-50 text-blue-600'
              },
              { 
                title: 'Civil Construction', 
                icon: <Building2 size={32} />, 
                desc: 'Quality-driven public and private infrastructure works.',
                view: View.CIVIL,
                bg: 'bg-orange-50 text-orange-600'
              },
              { 
                title: 'Rural Development', 
                icon: <Sprout size={32} />, 
                desc: 'Sustainable village initiatives, smart utilities, and agriculture support.',
                view: View.RURAL,
                bg: 'bg-green-50 text-green-600'
              },
              { 
                title: 'Real Estate', 
                icon: <Home size={32} />, 
                desc: 'Reliable development, land acquisition, and advisory services.',
                view: View.REAL_ESTATE,
                bg: 'bg-indigo-50 text-indigo-600'
              }
            ].map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 flex flex-col"
                onClick={() => navigate(card.view)}
              >
                <div className={`w-14 h-14 rounded-lg ${card.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-corporate-blue transition-colors">{card.title}</h3>
                <p className="text-slate-500 mb-6 text-sm flex-grow">{card.desc}</p>
                <span className="text-xs font-bold text-corporate-gold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wide">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teaser */}
      <section className="py-20 bg-corporate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Strategic Consulting & Advisory</h2>
             <p className="text-slate-400 mb-8 text-lg">
               We deliver strategic capabilities across diverse sectors with transparency, quality, and innovation. From tender consulting to Detailed Project Reports (DPR).
             </p>
             <button onClick={() => navigate(View.CONSULTING)} className="bg-corporate-gold text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
               Advisory Services
             </button>
          </div>
          <div className="md:w-1/2 flex justify-end">
             <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/10 max-w-md">
               <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-gold p-2 rounded"><FileText size={20} /></div>
                   <span className="font-medium">Tender & Bid Management</span>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-gold p-2 rounded"><TrendingUp size={20} /></div>
                   <span className="font-medium">Market Research & DPR</span>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-gold p-2 rounded"><ShieldCheck size={20} /></div>
                   <span className="font-medium">Regulatory Compliance</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>
    </>
  );

  const AboutView = () => (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase">Corporate Profile</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-3">About SFPL</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            SHREESVARN FINNOVOTION PRIVATE LIMITED is an emerging enterprise aimed at empowering communities and businesses through reliable infrastructure and innovative digital solutions.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img src="https://picsum.photos/800/600?random=20" alt="Board Meeting" className="rounded-xl shadow-2xl relative z-10" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-corporate-gold/20 rounded-xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-corporate-blue/10 rounded-xl z-0"></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-corporate-blue">Vision & Mission</h3>
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 rounded-lg border-l-4 border-corporate-gold hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Globe size={20} className="text-corporate-gold"/> Our Vision</h4>
                <p className="text-slate-600 text-sm leading-relaxed">To become a trusted partner in building modern infrastructure and delivering smart digital solutions that empower communities and transform businesses.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-lg border-l-4 border-corporate-blue hover:shadow-md transition-shadow">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Target size={20} className="text-corporate-blue"/> Our Mission</h4>
                <p className="text-slate-600 text-sm leading-relaxed">To integrate technology, construction expertise, and development capabilities to create sustainable growth across rural and urban sectors.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-20 bg-slate-50 p-12 rounded-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-slate-900">Leadership</h3>
            <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600">The visionaries driving SFPL towards excellence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                <img src={`https://picsum.photos/200/200?random=55`} alt="Nikhil Kushwaha" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-xl text-slate-900">Nikhil Kushwaha</h4>
              <p className="text-corporate-gold text-xs font-bold uppercase tracking-wider mb-3">Founder & Director</p>
              <p className="text-slate-500 text-sm leading-relaxed">Leads SFPL with expertise in technology solutions, infrastructure planning, and strategic project execution.</p>
            </div>
            
            {/* CEO */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                <img src={`https://picsum.photos/200/200?random=56`} alt="Pranav Sing Kushwaha" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-xl text-slate-900">Pranav Sing Kushwaha</h4>
              <p className="text-corporate-gold text-xs font-bold uppercase tracking-wider mb-3">CEO</p>
              <p className="text-slate-500 text-sm leading-relaxed">Expert in Tender Management and Civil Construction. Drives operational excellence in infrastructure projects.</p>
            </div>

            {/* Co-Founder */}
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-slate-100 hover:shadow-lg transition-all">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                <img src={`https://picsum.photos/200/200?random=57`} alt="Neetesh Yadav" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-xl text-slate-900">Neetesh Yadav</h4>
              <p className="text-corporate-gold text-xs font-bold uppercase tracking-wider mb-3">Co-Founder</p>
              <p className="text-slate-500 text-sm leading-relaxed">Management Expert. Oversees corporate strategy, team coordination, and organizational growth.</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
             <h3 className="font-bold text-xl mb-4 text-corporate-900">Compliance & Certifications</h3>
             <ul className="space-y-3">
               {['Company Registration (CIN)', 'GST Registration', 'MSME/Udyam Certificate', 'PWD/Contractor Registrations', 'PAN/TAN Details'].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-700">
                   <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs"><CheckCircle2 size={14}/></div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="bg-corporate-900 text-white p-8 rounded-xl shadow-sm flex flex-col justify-center">
             <h3 className="font-bold text-xl mb-4">CSR & Sustainability</h3>
             <p className="text-slate-300 leading-relaxed">
               We actively support social development, environmental responsibility, and ethical governance. Our commitment extends beyond profit to ensuring positive impact on the communities we serve.
             </p>
           </div>
        </div>
      </div>
    </div>
  );

  const SoftwareView = () => (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="bg-corporate-blue text-white rounded-2xl p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="md:w-1/2 relative z-10">
            <div className="flex items-center gap-2 text-blue-200 mb-4 font-semibold text-sm uppercase tracking-wider"><Code2 size={16}/> Technology Division</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Software & Technology Solutions</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              We provide enterprise-grade software licenses, custom operating systems, and digital transformation tools for government and private sectors.
            </p>
            <div className="flex gap-4">
              <button onClick={() => navigate(View.CONTACT)} className="bg-white text-corporate-blue px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                Request Demo
              </button>
              <button onClick={() => navigate(View.DOWNLOADS)} className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Product Brochures
              </button>
            </div>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0 relative z-10">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur text-center"><Smartphone className="mx-auto mb-2"/> <span className="text-xs font-bold">Custom Apps</span></div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur text-center"><TrendingUp className="mx-auto mb-2"/> <span className="text-xs font-bold">AI Tools</span></div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur text-center"><Users className="mx-auto mb-2"/> <span className="text-xs font-bold">CRM Suites</span></div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur text-center"><ShieldCheck className="mx-auto mb-2"/> <span className="text-xs font-bold">Licensing</span></div>
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Software Products</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'CRM Solutions', desc: 'End-to-end customer relationship systems designed to improve sales and service delivery.' },
                { title: 'Call Center Software', desc: 'Advanced software for recording, routing, agent monitoring, and support workflows.' },
                { title: 'AI Automation Tools', desc: 'Smart AI-driven modules for business automation, analytics, and decision assistance.' },
                { title: 'Lead Management', desc: 'A structured platform for acquiring, tracking, and converting leads in real time.' },
                { title: 'Stock Advisory Tools', desc: 'Industry-specific tools and OS for financial advisory firms.' },
                { title: 'Custom Android OS', desc: 'Secure, hardened operating systems for corporate devices.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-corporate-blue transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-colors"><CheckCircle2 size={20} /></div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mt-12">Software Services</h3>
             <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Custom Development', desc: 'Tailor-made applications for enterprise and government needs.' },
                { title: 'Web & Mobile Apps', desc: 'Responsive and scalable applications built using modern frameworks.' },
                { title: 'Cloud Integration', desc: 'Secure cloud hosting, migration, and infrastructure setup.' },
                { title: 'AI/ML Solutions', desc: 'Predictive analytics and automation modules.' },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:border-corporate-blue transition-colors group">
                   <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit sticky top-24">
            <h4 className="font-bold text-lg mb-4">Licensing & Support</h4>
            <p className="text-sm text-slate-600 mb-6">We ensure genuine licensing for all products including OS, Office Suites, and Antivirus.</p>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div> Individual & Corporate Licenses</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div> OEM & Volume Licensing</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div> Installation & Activation Support</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-corporate-blue rounded-full"></div> User Onboarding Training</li>
            </ul>
            <button onClick={() => navigate(View.CONTACT)} className="w-full mt-6 bg-slate-100 text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CivilView = () => (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Nation Building</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Civil Construction & Infrastructure</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">From highways connecting cities to skyline-defining structures, we deliver engineering excellence.</p>
        </div>

        {/* Tabs for Infra vs Structural */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Road size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Infrastructure Development</h3>
            <p className="text-slate-600 mb-6">Execution of large-scale public projects with precision engineering.</p>
            <ul className="space-y-3">
              {[
                'Road Construction (Asphalt/Concrete)', 
                'Bridges & Culverts', 
                'Public Utilities (Water/Sewage)', 
                'Urban Infrastructure (Streetscapes)'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-corporate-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-6">
              <Layout size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Structural Construction</h3>
            <p className="text-slate-600 mb-6">Turnkey solutions for residential, commercial, and industrial buildings.</p>
            <ul className="space-y-3">
              {[
                'Residential Complexes & Townships', 
                'Commercial Offices & Malls', 
                'Industrial Warehouses & Factories', 
                'Renovation & Redevelopment'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 size={16} className="text-corporate-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
           <img src="https://picsum.photos/400/300?random=11" className="rounded-lg w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500" alt="Bridge" />
           <img src="https://picsum.photos/400/300?random=12" className="rounded-lg w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500" alt="Road" />
           <img src="https://picsum.photos/400/300?random=13" className="rounded-lg w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500" alt="Building" />
           <img src="https://picsum.photos/400/300?random=14" className="rounded-lg w-full h-48 object-cover shadow-md hover:scale-105 transition-transform duration-500" alt="Construction" />
        </div>

        <div className="bg-corporate-900 text-white p-10 rounded-2xl text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Partner with us for your next Tender</h3>
              <p className="text-slate-400 mb-8">We have the machinery, manpower, and technical expertise to execute government and private contracts.</p>
              <button onClick={() => navigate(View.CONTACT)} className="bg-corporate-gold hover:bg-yellow-600 px-8 py-3 rounded-lg font-bold transition-colors text-white">Contact Infrastructure Team</button>
            </div>
        </div>
      </div>
    </div>
  );

  const RuralView = () => (
    <div className="pt-24 pb-16 bg-gradient-to-b from-green-50/50 to-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <span className="text-green-600 font-bold uppercase tracking-wider text-xs">Social Impact</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Rural & Urban Development</h2>
          <p className="mt-4 text-slate-600">Empowering the grassroots economy through technology and infrastructure.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Development Metrics</h3>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">FY 2024-25</span>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RURAL_IMPACT_DATA}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                  <Bar dataKey="value" fill="#16a34a" radius={[4, 4, 0, 0]} barSize={50} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col justify-center hover:shadow-md transition-shadow">
              <Sprout size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Villages</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Implementation of technology-backed rural solutions focusing on sustainability, solar utilities, and digital centers.</p>
            </div>
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 h-full flex flex-col justify-center hover:shadow-md transition-shadow">
              <Truck size={40} className="text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Farmer Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Support for collection centers, logistics, aggregation points, and market access for farmers.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="flex gap-4 items-start">
             <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><CheckCircle2 size={24} /></div>
             <div>
               <h4 className="font-bold text-lg">Waste & Sanitation</h4>
               <p className="text-slate-600 text-sm">Solid/liquid waste handling, public toilets, and sustainable sanitation systems.</p>
             </div>
           </div>
           <div className="flex gap-4 items-start">
             <div className="bg-green-100 p-3 rounded-full text-green-600 shrink-0"><CheckCircle2 size={24} /></div>
             <div>
               <h4 className="font-bold text-lg">Urban Improvement</h4>
               <p className="text-slate-600 text-sm">City-level drainage planning, water management, and urban beautification projects.</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );

  const RealEstateView = () => (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs">Premium Living</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Real Estate & Land</h2>
            <p className="text-slate-600 mt-2">Premium properties, land acquisition services, and strategic townships.</p>
          </div>
          <div className="flex gap-4">
             <button className="bg-white border border-slate-300 text-slate-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-50">Land Services</button>
             <button className="bg-corporate-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-slate-800">View Listings</button>
          </div>
        </div>

        {/* Services Highlight */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <LandPlot className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-lg mb-2">Land Acquisition</h3>
             <p className="text-sm text-slate-600">Assistance in identifying, negotiating, and securing land parcels with clear titles.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <Home className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-lg mb-2">Joint Ventures</h3>
             <p className="text-sm text-slate-600">Collaborative development with landowners or partners for large-scale township projects.</p>
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
             <Layout className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-lg mb-2">Plotting & Development</h3>
             <p className="text-sm text-slate-600">Structured layout development with roads, drainage, and full amenities.</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-6">Featured Properties</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <div key={i} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all">
               <div className="relative h-64 overflow-hidden">
                 <img src={`https://picsum.photos/600/400?random=${i + 20}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Property" />
                 <div className="absolute top-4 left-4 bg-corporate-gold text-white text-xs font-bold px-3 py-1 rounded">FOR SALE</div>
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                   <p className="text-white font-bold flex items-center gap-2"><MapPin size={14} /> Sector 62, Noida</p>
                 </div>
               </div>
               <div className="p-6">
                 <h3 className="text-lg font-bold text-slate-900 mb-2">Sunrise Heights Phase {i}</h3>
                 <div className="flex gap-4 text-xs text-slate-500 mb-4">
                   <span className="flex items-center gap-1"><Home size={12}/> 3 BHK</span>
                   <span className="flex items-center gap-1"><Layout size={12}/> 1800 Sq.Ft</span>
                 </div>
                 <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                   <span className="font-bold text-corporate-blue text-lg">₹ 1.25 Cr</span>
                   <button className="text-sm font-bold text-corporate-gold hover:text-yellow-600 uppercase tracking-wide">View Details</button>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );

  const ConsultingView = () => (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-xs">Expert Guidance</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Consulting & Advisory</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Providing strategic insights and technical documentation for complex projects.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><FileText className="text-corporate-gold"/> Tender & Bid Consulting</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Professional support for preparing government tender documents. Services include eligibility assessment, technical bid preparation, and compliance checks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><TrendingUp className="text-corporate-gold"/> DPR & Feasibility Reports</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Preparation of Detailed Project Reports (DPR), financial viability studies, cost estimation, and site surveys for infrastructure projects.
            </p>
          </div>
          
           <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe className="text-corporate-gold"/> Government Liaison</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Assistance in compliance, documentation, and obtaining necessary approvals/clearances from government bodies.
            </p>
          </div>

           <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="text-corporate-gold"/> Digital Transformation</h3>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Guidance for technology adoption, modernization of legacy systems, and market research/data collection for strategic decision making.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MediaView = () => (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">Media & Insights</h2>
          <p className="mt-4 text-slate-600">Latest news, press releases, and industry articles from SFPL.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
             <div key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
               <img src={`https://picsum.photos/600/400?random=${i + 60}`} className="w-full h-48 object-cover" alt="News" />
               <div className="p-6">
                 <span className="text-xs text-corporate-gold font-bold uppercase">Press Release</span>
                 <h3 className="text-lg font-bold mt-2 mb-3 leading-snug">SFPL announces new partnership with State Govt for Rural Development</h3>
                 <p className="text-sm text-slate-500 mb-4">March 15, 2024</p>
                 <a href="#" className="text-corporate-blue text-sm font-bold hover:underline">Read Full Story</a>
               </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );

  const DownloadsView = () => (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900">Download Center</h2>
            <p className="mt-4 text-slate-600">Access company profiles, brochures, and technical documents.</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            {[
              { name: 'SFPL Corporate Profile', size: '2.4 MB', type: 'PDF' },
              { name: 'Capability Statement (Tender Ready)', size: '3.8 MB', type: 'PDF' },
              { name: 'Software Product Brochures', size: '5.1 MB', type: 'PDF' },
              { name: 'Compliance & Certifications', size: '0.5 MB', type: 'PDF' },
            ].map((file, i) => (
              <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                     <FileText size={20} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">{file.name}</h4>
                     <p className="text-xs text-slate-500">{file.type} • {file.size}</p>
                   </div>
                 </div>
                 <button className="flex items-center gap-2 text-sm font-bold text-corporate-blue hover:text-blue-800">
                   <Download size={16} /> <span className="hidden md:inline">Download</span>
                 </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactView = () => {
    const [formData, setFormData] = useState({
      fullName: '',
      phone: '',
      email: '',
      service: 'General Inquiry',
      message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitting(true);
      
      // Simulate API Call
      setTimeout(() => {
        console.log("Form Submitted Successfully:", formData);
        setSubmitting(false);
        setSuccess(true);
        // Reset Form
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          service: 'General Inquiry',
          message: ''
        });
      }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
      <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 bg-corporate-900 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
                  <p className="text-slate-300 mb-10 leading-relaxed">
                    Ready to start a project or need a consultation? Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Briefcase size={20} className="text-corporate-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Business Hours</h4>
                        <p className="text-sm text-slate-400">Mon - Sat: 10:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Globe size={20} className="text-corporate-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Headquarters</h4>
                        <p className="text-sm text-slate-400">123 Corporate Park, Financial District<br/>New Delhi, India 110001</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                        <Users size={20} className="text-corporate-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Support</h4>
                        <p className="text-sm text-slate-400">+91 11 2345 6789<br/>info@sfplofficial.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-white/10 text-xs text-slate-500">
                  SFPL Support Team will typically reply in 2-4 hours.
                </div>
              </div>

              <div className="p-10">
                {success ? (
                  <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600 mb-8">Thank you for reaching out to SFPL. One of our experts will contact you shortly.</p>
                    <button 
                      onClick={() => setSuccess(false)}
                      className="text-corporate-blue font-bold hover:underline flex items-center gap-2"
                    >
                      Send Another Message <ArrowRight size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold mb-6 text-slate-900">Send us a Message</h3>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:outline-none bg-slate-50 transition-all" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone</label>
                          <input 
                            required
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:outline-none bg-slate-50 transition-all" 
                            placeholder="+91 9876543210" 
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:outline-none bg-slate-50 transition-all" 
                          placeholder="john@company.com" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Interest</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:outline-none bg-slate-50 transition-all"
                        >
                          <option>General Inquiry</option>
                          <option>Software Solutions</option>
                          <option>Civil Infrastructure</option>
                          <option>Real Estate</option>
                          <option>Rural Development</option>
                          <option>Consulting</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message</label>
                        <textarea 
                          required
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-corporate-blue focus:outline-none bg-slate-50 transition-all" 
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                      <button 
                        disabled={submitting}
                        className="w-full bg-corporate-blue text-white font-bold py-4 rounded-lg hover:bg-blue-800 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" /> Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView />;
      case View.ABOUT: return <AboutView />;
      case View.SOFTWARE: return <SoftwareView />;
      case View.CIVIL: return <CivilView />;
      case View.RURAL: return <RuralView />;
      case View.REAL_ESTATE: return <RealEstateView />;
      case View.CONSULTING: return <ConsultingView />;
      case View.MEDIA: return <MediaView />;
      case View.DOWNLOADS: return <DownloadsView />;
      case View.CONTACT: return <ContactView />;
      default: return <HomeView />;
    }
  };

  // Helper Icon Component for Structural Construction
  const Road = (props: any) => (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M13 3l0 18" />
      <path d="M13 3l0 18" />
      <path d="M2 20l20 0" />
      <path d="M4 20l4 -16" />
      <path d="M16 4l4 16" />
      <path d="M13 3l0 18" />
      <line x1="12" y1="8" x2="12" y2="8" />
      <line x1="12" y1="13" x2="12" y2="13" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer navigate={navigate} />
      <ChatBot />
    </div>
  );
};

export default App;
