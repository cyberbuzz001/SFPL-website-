import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Server, 
  Calculator,
  Laptop
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const SoftwareView: React.FC = () => {
  // Calculator States
  const [selectedModule, setSelectedModule] = useState<'crm' | 'callcenter' | 'ai' | 'os'>('crm');
  const [seats, setSeats] = useState<number>(25);
  const [hosting, setHosting] = useState<'cloud' | 'onprem'>('cloud');

  const products = [
    {
      title: 'CRM Solutions',
      tag: 'Enterprise CRM Suite',
      desc: 'Robust client relationship platform specializing in customer retention, cold leads organization, automated notification sequences, and deep analytical reports.',
      icon: <Users size={20} />
    },
    {
      title: 'Call Center Software',
      tag: 'Omnichannel Routing',
      desc: 'Advanced software providing custom voice channels, interactive voice response (IVR), recording hubs, and compliance tracking for support centers.',
      icon: <Laptop size={20} />
    },
    {
      title: 'AI Automation Tools',
      tag: 'Cognitive Pipelines',
      desc: 'Intelligent process controllers using machine learning to parse state documents, synthesize reports, filter data, and perform repetitive office tasks.',
      icon: <Cpu size={20} />
    },
    {
      title: 'Lead Management Suite',
      tag: 'Pipeline Tracker',
      desc: 'Integrated system to ingest lead lists from social channels, filter duplicates, automatically distribute tasks to representatives, and compute pipeline math.',
      icon: <TrendingUp size={20} />
    },
    {
      title: 'Stock Advisory OS Add-on',
      tag: 'Hardened Operating Shell',
      desc: 'Specialized desktop workspace environment integrating real-time telemetry filters, compliance restrictions, and trading ledger APIs.',
      icon: <Server size={20} />
    },
    {
      title: 'Custom Hardened Android OS',
      tag: 'Secure Enterprise Mobile',
      desc: 'A secure, customized, malware-shielded Android operating system image built for field staff to avoid data leakage and restrict application execution.',
      icon: <Smartphone size={20} />
    }
  ];

  // Price calculation formula
  const getCalculatedPrice = () => {
    let basePricePerSeat = 0;
    if (selectedModule === 'crm') basePricePerSeat = 1200;
    else if (selectedModule === 'callcenter') basePricePerSeat = 1800;
    else if (selectedModule === 'ai') basePricePerSeat = 2500;
    else if (selectedModule === 'os') basePricePerSeat = 3200;

    const baseCost = basePricePerSeat * seats;
    const hostingMultiplier = hosting === 'cloud' ? 1.15 : 1.0; // 15% surcharge for managed cloud
    
    // Support fee
    const supportCost = seats > 50 ? 5000 : 2500;

    return Math.round(baseCost * hostingMultiplier + supportCost);
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Modern Intro Block */}
        <section className="bg-corporate-900 text-white rounded-2xl p-8 md:p-16 mb-16 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="lg:w-3/5 relative z-10">
            <div className="flex items-center gap-2 text-corporate-gold mb-4 font-bold text-xs uppercase tracking-wider">
              <Code2 size={16}/> Technology & Software Division
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
              Enterprise Software <br />
              <span className="text-corporate-gold">& Digital Transformations</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed max-w-xl">
              SFPL provides highly secure licensing frameworks, custom CRM infrastructures, cloud-integrated call center systems, and hardened operating systems tailored for government departments and private institutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote-estimator" className="bg-corporate-gold text-white px-6 py-3 rounded-lg text-xs md:text-sm font-bold hover:bg-yellow-600 transition-colors shadow">
                Estimate Licensing Costs
              </a>
              <div className="inline-flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                OEM Certified Distributor
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 mt-12 lg:mt-0 relative z-10 w-full">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center backdrop-blur-sm">
                  <Smartphone className="mx-auto mb-2 text-corporate-gold" size={24}/> 
                  <span className="text-xs font-bold block text-white">Mobile OS</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center backdrop-blur-sm">
                  <Cpu className="mx-auto mb-2 text-corporate-gold" size={24}/> 
                  <span className="text-xs font-bold block text-white">AI Utilities</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center backdrop-blur-sm">
                  <Users className="mx-auto mb-2 text-corporate-gold" size={24}/> 
                  <span className="text-xs font-bold block text-white">CRM Suites</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center backdrop-blur-sm">
                  <Server className="mx-auto mb-2 text-corporate-gold" size={24}/> 
                  <span className="text-xs font-bold block text-white">Hosted Systems</span>
                </div>
             </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <span className="text-corporate-blue font-bold tracking-widest text-xs uppercase block">Product Inventory</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-2">Enterprise Software Catalog</h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto mt-2">
              We specialize in delivering high-availability software licenses equipped with direct vendor updates, custom setups, and staff training.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100} 
                direction="up"
              >
                <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-corporate-blue transition-all group h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-50 rounded-xl text-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-all">
                        {item.icon}
                      </div>
                      <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-1 rounded font-bold uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-corporate-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between text-xs font-bold text-corporate-gold uppercase tracking-wider">
                    <span>Fully Certified</span>
                    <CheckCircle2 size={16} className="text-emerald-500" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Technical Architecture Services */}
        <section className="mb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Implementation & Engineering</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
              Custom Application Development Services
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Beyond licensing distribution, SFPL deploys a senior pool of systems engineers, backend developers, and UI specialists. We work with clients from initial workflow charting and architecture blueprints to cloud integration and penetration auditing.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-corporate-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Full-Stack Capability</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Designing cloud-native services utilizing Go, Node.js, and container-based deployment frameworks.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 size={18} className="text-corporate-gold shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Legacy System Migration</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">De-risking core processes by porting physical records databases into encrypted high-availability SQL instances.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-corporate-900 text-white p-8 rounded-xl relative overflow-hidden shadow-lg border border-white/5">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-serif mb-4 text-corporate-gold">Modern Tech Stack Mastery</h3>
              <p className="text-xs text-slate-400 mb-6">Our software products utilize industry-standard robust tools for maximum uptime and bulletproof security:</p>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-300 font-bold block mb-1">Backend Services</span>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'Go', 'Python / AI', 'TypeScript'].map((tech) => (
                      <span key={tech} className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-300 font-bold block mb-1">Cloud Infrastructure</span>
                  <div className="flex flex-wrap gap-2">
                    {['Docker', 'Kubernetes', 'Google Cloud Platform', 'AWS Services', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-300 font-bold block mb-1">Frontend Frameworks</span>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Vite', 'Next.js'].map((tech) => (
                      <span key={tech} className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Estimator Panel */}
        <section id="quote-estimator" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-corporate-blue/10 text-corporate-blue rounded-xl">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">Interactive License Quotation Tool</h3>
              <p className="text-slate-500 text-xs">Configure your organization parameters to get an instant cost estimate for our certified licenses.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start border-t border-slate-100 pt-6">
            <div className="space-y-6">
              {/* Product Module Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Select Software Module
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSelectedModule('crm')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${selectedModule === 'crm' ? 'border-corporate-blue bg-blue-50/50 text-corporate-blue font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Enterprise CRM
                  </button>
                  <button
                    onClick={() => setSelectedModule('callcenter')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${selectedModule === 'callcenter' ? 'border-corporate-blue bg-blue-50/50 text-corporate-blue font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Call Center Voice Suite
                  </button>
                  <button
                    onClick={() => setSelectedModule('ai')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${selectedModule === 'ai' ? 'border-corporate-blue bg-blue-50/50 text-corporate-blue font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    AI Automation Tools
                  </button>
                  <button
                    onClick={() => setSelectedModule('os')}
                    className={`p-3 rounded-lg border text-left text-xs transition-all ${selectedModule === 'os' ? 'border-corporate-blue bg-blue-50/50 text-corporate-blue font-bold' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    Hardened Android OS
                  </button>
                </div>
              </div>

              {/* Number of Seats Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Quantity of Licenses (Seats)
                  </label>
                  <span className="text-sm font-bold text-corporate-blue">{seats} Seats</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="250" 
                  value={seats}
                  onChange={(e) => setSeats(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-corporate-blue"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                  <span>5 SEATS</span>
                  <span>100 SEATS</span>
                  <span>250 SEATS</span>
                </div>
              </div>

              {/* Hosting Preference */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  3. Hosting Infrastructure
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${hosting === 'cloud' ? 'border-corporate-blue bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                    <input 
                      type="radio" 
                      name="hosting" 
                      value="cloud" 
                      checked={hosting === 'cloud'}
                      onChange={() => setHosting('cloud')}
                      className="accent-corporate-blue"
                    />
                    <div>
                      <span className="text-xs font-bold block text-slate-800">Managed Cloud</span>
                      <span className="text-[10px] text-slate-400">15% maintenance markup</span>
                    </div>
                  </label>
                  <label className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${hosting === 'onprem' ? 'border-corporate-blue bg-blue-50/50' : 'border-slate-200 hover:bg-slate-50'}`}>
                    <input 
                      type="radio" 
                      name="hosting" 
                      value="onprem" 
                      checked={hosting === 'onprem'}
                      onChange={() => setHosting('onprem')}
                      className="accent-corporate-blue"
                    />
                    <div>
                      <span className="text-xs font-bold block text-slate-800">On-Premise</span>
                      <span className="text-[10px] text-slate-400">Self-hosted local server</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Calculations Result card */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200/80 flex flex-col justify-between h-full text-center">
              <div>
                <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-2">Estimated Investment</h4>
                <div className="py-4 border-y border-slate-200/60 my-4">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">ANNUAL LICENSING COST</span>
                  <span className="block text-4xl font-extrabold text-corporate-blue mt-1">
                    ₹ {getCalculatedPrice().toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">Excluding State GST & Setup Audits</span>
                </div>
                <div className="space-y-2 text-left text-xs text-slate-600 mb-6">
                  <div className="flex justify-between">
                    <span>Base license value:</span>
                    <span className="font-bold">₹ {(seats * (selectedModule === 'crm' ? 1200 : selectedModule === 'callcenter' ? 1800 : selectedModule === 'ai' ? 2500 : 3200)).toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Managed hosting surcharge:</span>
                    <span className="font-bold">{hosting === 'cloud' ? '15%' : '0%'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual technical support:</span>
                    <span className="font-bold">₹ {(seats > 50 ? 5000 : 2500).toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
                Note: This is an estimated commercial evaluation for standard installations. Customized module additions or state tender quotes require physical engineering charts.
              </p>
            </div>
          </div>
        </section>

        {/* Authorized MoA Software Scopes & Planned Pipelines */}
        <section className="mb-20 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto text-left">
          <div className="border-b border-slate-100 pb-5 mb-8">
            <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">MoA Software Distribution & Licensing</span>
            <h3 className="font-serif font-bold text-2xl text-slate-900 mt-1">Authorized Software Operations & Franchise Pipelines</h3>
            <p className="text-slate-400 text-xs mt-1">Statutory technology products, distribution models, and alliance frameworks compliant with our object clause.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-corporate-blue text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Software Distribution</span>
                <span className="text-[9px] text-slate-400 font-bold font-mono">B2B & Retail Channels</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Omnichannel Software Licensing & Distribution</h4>
              <p className="text-xs text-slate-500 leading-relaxed">SFPL is fully empowered to sell and distribute personal and commercial software through online portals and physical reseller networks. We are expanding our OEM distribution partnerships to supply state-certified anti-virus tools, DBMS, and business ERP utilities.</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-corporate-blue text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Clause 1 Partnerships</span>
                <span className="text-[9px] text-slate-400 font-bold">Planned Franchise</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Technical Collaboration & Franchises</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Leveraging statutory licensing and franchising objects to sign agreements with Indian and foreign software entities, bringing localized security kernels and automated telemetry platforms to the local Indian public-sector market.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
