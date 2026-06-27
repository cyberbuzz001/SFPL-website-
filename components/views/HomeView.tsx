import React, { useState } from 'react';
import { View } from '../../types';
import { 
  Building2, 
  Code2, 
  Sprout, 
  Home as HomeIcon, 
  ArrowRight, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  Activity, 
  Scale, 
  HeartHandshake
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

interface HomeViewProps {
  navigate: (view: View) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate }) => {
  const [activeSegment, setActiveSegment] = useState<'software' | 'civil' | 'rural' | 'real_estate'>('software');

  const corePillars = [
    {
      title: 'Software Solutions',
      desc: 'Enterprise-grade CRM suites, custom call center software, AI automation engines, and hardened Custom Android OS installations designed for seamless operations.',
      icon: <Code2 size={28} />,
      view: View.SOFTWARE,
      bg: 'bg-blue-50 text-corporate-blue border-blue-100 hover:border-corporate-blue'
    },
    {
      title: 'Civil Construction',
      desc: 'Precision infrastructure services covering roadworks, highway bridges, modern drainage, commercial plazas, and complex residential structural engineering.',
      icon: <Building2 size={28} />,
      view: View.CIVIL,
      bg: 'bg-amber-50 text-corporate-gold border-amber-100 hover:border-corporate-gold'
    },
    {
      title: 'Rural & Urban Development',
      desc: 'Durable micro-utilities, solar microgrids, agricultural logistic hubs, sanitation services, and deep social impact programs to empower grassroots economies.',
      icon: <Sprout size={28} />,
      view: View.RURAL,
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:border-emerald-600'
    },
    {
      title: 'Real Estate & Land',
      desc: 'End-to-end strategic land identification, legal clearance consulting, joint ventures, and developer planning for smart township projects.',
      icon: <HomeIcon size={28} />,
      view: View.REAL_ESTATE,
      bg: 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:border-indigo-600'
    }
  ];

  const segmentsData = {
    software: {
      tagLine: 'Automate & Transform',
      title: 'Enterprise Digital Systems',
      description: 'SFPL technology division provides mission-critical enterprise systems to streamline support, track incoming inquiries, manage cold outreach, and secure field-staff mobile communication.',
      features: ['Hardened Android OS for secure operations', 'Automated Lead Management tools', 'Cloud CRM & Call Center platforms', 'Custom dashboard reports and deep analytics'],
      actionText: 'View Software Portfolio',
      view: View.SOFTWARE,
      stat: '99.9% System Uptime'
    },
    civil: {
      tagLine: 'Engineered for Generations',
      title: 'High-Scale Infrastructure',
      description: 'Our construction management division executes state-level public utility works, highway bypass projects, structural bridge segments, and sustainable corporate plazas with strict code compliance.',
      features: ['Government tender compliance', 'Advanced heavy machinery fleet', 'Durable grade concrete structures', 'Pre-qualified site supervisors'],
      actionText: 'Explore Civil Projects',
      view: View.CIVIL,
      stat: '100% Safety Compliance'
    },
    rural: {
      tagLine: 'Social-First Interventions',
      title: 'Empowering Grassroots',
      description: 'Deploying digital village kiosks, solar irrigation loops, village-level waste management plants, and custom crop-to-market logistics networks to uplift the agricultural sector.',
      features: ['Smart village water treatment loops', 'Sustainable organic waste processing', 'Farmer credit & supply chain links', 'Clean solar power integration'],
      actionText: 'See Rural Metrics',
      view: View.RURAL,
      stat: '5,000+ Farmers Connected'
    },
    real_estate: {
      tagLine: 'Prime Value Acquisitions',
      title: 'Premium Land & Development',
      description: 'Specializing in commercial-industrial land banking, title verification audits, structural joint-ventures, and high-growth township layouts across major corridors.',
      features: ['100% litigation-free title verification', 'Strategic highway corridor properties', 'Comprehensive feasibility modeling', 'Joint development partnerships'],
      actionText: 'Browse Real Estate Listings',
      view: View.REAL_ESTATE,
      stat: '₹125 Cr+ Managed Portfolio'
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[650px] flex items-center justify-center bg-corporate-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=11" 
            alt="Corporate Infrastructure background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-corporate-900 via-corporate-900/60 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-8 relative z-10 text-center md:text-left mt-16">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-corporate-gold font-semibold text-xs md:text-sm mb-6 border border-white/20 animate-pulse">
            Government-Ready • Investor-Friendly • Innovative
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Building Infrastructure.<br />
            <span className="text-corporate-gold">Empowering Nations.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 md:mx-0 mx-auto font-light leading-relaxed">
            SHREESVARN FINNOVOTION PRIVATE LIMITED is a diversified enterprise operating across Software Distribution, Civil Construction, Rural & Urban Development, and Real Estate Solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => navigate(View.ABOUT)} 
              className="px-8 py-4 bg-corporate-blue text-white rounded-lg font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50"
            >
              Discover SFPL <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => navigate(View.CONTACT)} 
              className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-corporate-900 transition-all"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Intro Stats Bar */}
      <section className="bg-white border-y border-slate-100 py-10 shadow-sm relative z-20 -mt-16 mx-4 md:mx-8 rounded-xl max-w-6xl md:mx-auto">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
          <div>
            <span className="block text-4xl font-extrabold text-corporate-blue">120+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">Smart Villages</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-corporate-blue">5k+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">Connected Farmers</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-corporate-blue">85+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">Water Projects Completed</span>
          </div>
          <div>
            <span className="block text-4xl font-extrabold text-corporate-blue">99%</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1 block">Tender Compliance</span>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase">Multi-Sector Strength</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Our Core Pillars</h2>
            <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm md:text-base">
              SFPL is uniquely positioned to deliver multi-disciplinary engineering, software development, and community improvement solutions under a unified governance structure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((card, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 150} 
                direction="up"
                className="h-full"
              >
                <div 
                  className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border flex flex-col h-full ${card.bg}`}
                  onClick={() => navigate(card.view)}
                >
                  <div className="w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center mb-6 text-inherit group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-500 mb-6 text-xs md:text-sm flex-grow leading-relaxed">{card.desc}</p>
                  <span className="text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider text-corporate-gold mt-auto">
                    Explore Vertical <ArrowRight size={14} />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Segment Showcase Panel */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <span className="text-corporate-blue font-bold tracking-widest text-xs uppercase">Interactive Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Strategic Operations Live Showcase</h2>
            <p className="text-slate-500 text-sm mt-3">Select any sector below to see how our operational modules integrate technology, construction planning, and local impact metrics in real time.</p>
          </div>

          {/* Tab Selection */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
            <button 
              onClick={() => setActiveSegment('software')}
              className={`px-5 py-3 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${activeSegment === 'software' ? 'bg-corporate-blue text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
              <Code2 size={16} /> Software solutions
            </button>
            <button 
              onClick={() => setActiveSegment('civil')}
              className={`px-5 py-3 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${activeSegment === 'civil' ? 'bg-corporate-gold text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
              <Building2 size={16} /> Civil Infrastructure
            </button>
            <button 
              onClick={() => setActiveSegment('rural')}
              className={`px-5 py-3 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${activeSegment === 'rural' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
              <Sprout size={16} /> Rural Dev
            </button>
            <button 
              onClick={() => setActiveSegment('real_estate')}
              className={`px-5 py-3 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-2 ${activeSegment === 'real_estate' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
              <HomeIcon size={16} /> Land & Real Estate
            </button>
          </div>

          {/* Active Panel Content */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-8 md:p-12 max-w-5xl mx-auto shadow-sm">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7">
                <span className="text-xs font-bold text-corporate-gold tracking-widest uppercase block mb-2">
                  {segmentsData[activeSegment].tagLine}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 font-serif">
                  {segmentsData[activeSegment].title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {segmentsData[activeSegment].description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {segmentsData[activeSegment].features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-corporate-blue"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => navigate(segmentsData[activeSegment].view)}
                  className="px-6 py-3 bg-corporate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all text-xs md:text-sm flex items-center gap-2"
                >
                  {segmentsData[activeSegment].actionText} <ArrowRight size={16} />
                </button>
              </div>

              {/* Decorative Showcase Spec Column */}
              <div className="md:col-span-5 bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full shadow-sm">
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-4">Operational Snapshot</h4>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-corporate-gold border border-slate-100">
                      <Activity size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Current Efficiency Status</p>
                      <p className="text-sm font-bold text-slate-800">Operational & Active</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-corporate-blue border border-slate-100">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Compliance Audit Rating</p>
                      <p className="text-sm font-bold text-slate-800">Class-A Standard</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-4 text-center">
                  <span className="block text-2xl font-extrabold text-corporate-blue font-mono">
                    {segmentsData[activeSegment].stat}
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mt-1">Verified Audit Milestone</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-24 bg-corporate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase">How We Work</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mt-2">SFPL Core Values</h2>
            <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed">
              We govern all business segments with standard operating procedures that put transparency first, compliance in order, and innovative technological practices in place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
              <div className="w-12 h-12 bg-corporate-gold/20 text-corporate-gold rounded-lg flex items-center justify-center mb-6">
                <Scale size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Absolute Compliance</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We operate under strict regulatory compliance with transparent auditing structures for corporate ventures, property transactions, and state infrastructure works.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
              <div className="w-12 h-12 bg-corporate-gold/20 text-corporate-gold rounded-lg flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Supreme Craftsmanship</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Whether deploying a custom secure operating system, formulating Detailed Project Reports, or laying roads, our operational teams follow rigorous quality-testing protocols.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md">
              <div className="w-12 h-12 bg-corporate-gold/20 text-corporate-gold rounded-lg flex items-center justify-center mb-6">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3">Empowering Community</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We design and support sustainable systems. From farmer aggregation hubs to green waste management loops, we support the communities we engage with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advisory Banner Teaser */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Strategic Consulting & Advisory</h2>
             <p className="text-slate-600 mb-8 text-sm md:text-base leading-relaxed">
               We deliver high-level consultancy and technical support across diverse fields. From Detailed Project Reports (DPR) formulation and feasibility studies to state-level bid drafting and government compliance advisory.
             </p>
             <button 
               onClick={() => navigate(View.CONSULTING)} 
               className="bg-corporate-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors text-xs md:text-sm shadow-md"
             >
               Explore Advisory Services
             </button>
          </div>
          <div className="md:w-1/2 flex justify-end">
             <div className="bg-white p-8 rounded-2xl border border-slate-200 max-w-md w-full shadow-sm">
               <ul className="space-y-4">
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-blue/10 p-2.5 rounded-lg text-corporate-blue"><FileText size={20} /></div>
                   <div className="text-left">
                     <span className="font-bold text-slate-800 text-sm block">Tender & Bid Advisory</span>
                     <span className="text-xs text-slate-500">Formulating responsive tech-technical bids.</span>
                   </div>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-blue/10 p-2.5 rounded-lg text-corporate-blue"><TrendingUp size={20} /></div>
                   <div className="text-left">
                     <span className="font-bold text-slate-800 text-sm block">DPR & Feasibility Studies</span>
                     <span className="text-xs text-slate-500">Comprehensive site analysis & costings.</span>
                   </div>
                 </li>
                 <li className="flex items-center gap-4">
                   <div className="bg-corporate-blue/10 p-2.5 rounded-lg text-corporate-blue"><ShieldCheck size={20} /></div>
                   <div className="text-left">
                     <span className="font-bold text-slate-800 text-sm block">Regulatory Clearance Services</span>
                     <span className="text-xs text-slate-500">Smooth liaison with government institutions.</span>
                   </div>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
