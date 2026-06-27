import React, { useState } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  MapPin, 
  HardHat, 
  Layout, 
  Award, 
  Truck, 
  ShieldCheck, 
  Calendar,
  Grid
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const CivilView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'infra' | 'structural'>('all');

  const RoadIcon = (props: any) => (
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

  const projects = [
    {
      title: 'State Highway Bypass Phase 2',
      category: 'infra',
      desc: 'Dual-lane concrete high-capacity bypass with specialized flyover joints spanning over rural rail intersections. Engineered for severe axial loads.',
      location: 'Madhya Pradesh Corridor',
      status: 'Completed',
      metric: '18.2 Km Laid',
      image: 'https://picsum.photos/600/400?random=12'
    },
    {
      title: 'Sector 42 Commercial Plaza',
      category: 'structural',
      desc: 'Multi-story executive tower framed with high-tensile steel, offering certified green building insulation, high-speed elevator shafts, and fully integrated storm drainage.',
      location: 'NCR Region',
      status: 'In Progress',
      metric: '12 Stories Structural',
      image: 'https://picsum.photos/600/400?random=13'
    },
    {
      title: 'River Link Culvert & Bridging',
      category: 'infra',
      desc: 'Three-way spanning culvert utilizing pre-cast concrete block segments to prevent regional soil erosion during monsoon discharge.',
      location: 'Uttar Pradesh East',
      status: 'Completed',
      metric: '3 Spans Finished',
      image: 'https://picsum.photos/600/400?random=11'
    },
    {
      title: 'Annadata Grain Storage Warehouses',
      category: 'structural',
      desc: 'Pre-engineered steel portal frames with thermal insulation, designed to hold state buffer stock reserves with zero moisture seepage.',
      location: 'Bhopal Logistics Hub',
      status: 'Completed',
      metric: '45,000 Sq.Ft Enclosed',
      image: 'https://picsum.photos/600/400?random=14'
    }
  ];

  const machineryFleet = [
    { name: 'Crawler Excavators', brand: 'CAT / Hyundai', count: 4, usage: 'Deep excavation & trenching' },
    { name: 'Asphalt Mixing Plant', brand: 'Apollo 120 TPH', count: 1, usage: 'State-class asphalt production' },
    { name: 'Concrete Batching Station', brand: 'Schwing Stetter 30m³', count: 1, usage: 'Controlled high-grade mix' },
    { name: 'Vibratory Road Rollers', brand: 'CASE / Hamm', count: 6, usage: 'High-density subgrade compaction' },
    { name: 'Pre-cast Crane Hoists', brand: 'Escorts / ACE', count: 3, usage: 'Bridge segment & girder placements' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Header Title */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-corporate-gold font-bold uppercase tracking-wider text-xs block mb-2">Engineering Excellence</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Civil Construction & Infrastructure</h1>
          <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-xs md:text-sm md:text-base leading-relaxed">
            SFPL civil construction division undertakes public contracting and private turnkey works. Armed with in-house machinery fleets, licensed site supervisors, and absolute compliance certifications, we deliver durable, long-standing structures.
          </p>
        </section>

        {/* Division Breakdown */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-corporate-gold rounded-xl flex items-center justify-center mb-6">
              <RoadIcon className="text-corporate-gold" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-serif">Infrastructure Development</h3>
            <p className="text-slate-600 text-xs md:text-sm mb-6 leading-relaxed">
              Large-scale public transport corridors and utility works executed with severe load calculations and precise surveying alignments.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-slate-700">
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> State Road Widening (Asphalt & CC)
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Culverts, Aqueducts & Regional Bridges
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Multi-District Water Drainage Systems
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Urban Smart Streetscape Infrastructure
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm">
            <div className="w-12 h-12 bg-amber-100 text-corporate-gold rounded-xl flex items-center justify-center mb-6">
              <Layout className="text-corporate-gold" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-serif">Structural Construction</h3>
            <p className="text-slate-600 text-xs md:text-sm mb-6 leading-relaxed">
              Industrial, institutional, and commercial housing structural designs managed under professional project managers.
            </p>
            <ul className="space-y-3 text-xs md:text-sm text-slate-700">
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Residential Gated Townships
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Commercial Plaza & Administrative Towers
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Heavy-duty Industrial Warehouses & Sheds
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 size={16} className="text-corporate-gold shrink-0" /> Seismic Structural Retrofitting & Repairs
              </li>
            </ul>
          </div>
        </section>

        {/* Interactive Filterable Projects Grid */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Track Record</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Featured Construction Showcase</h3>
            </div>
            
            {/* Category Filter */}
            <div className="flex bg-slate-100 p-1.5 rounded-lg border border-slate-200">
              <button 
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeCategory === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                All Projects
              </button>
              <button 
                onClick={() => setActiveCategory('infra')}
                className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeCategory === 'infra' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Infrastructure
              </button>
              <button 
                onClick={() => setActiveCategory('structural')}
                className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeCategory === 'structural' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Structural
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <div 
                key={i} 
                className="bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-48 md:h-full min-h-[200px] relative">
                  <img 
                    referrerPolicy="no-referrer"
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-3 left-3 bg-corporate-900/80 backdrop-blur-sm text-corporate-gold text-[9px] font-bold px-2 py-0.5 rounded tracking-widest uppercase">
                    {project.category === 'infra' ? 'INFRASTRUCTURE' : 'STRUCTURAL'}
                  </div>
                </div>
                <div className="p-6 md:w-3/5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                      <MapPin size={12} className="text-corporate-gold" />
                      {project.location}
                    </div>
                    <h4 className="font-bold text-base md:text-lg text-slate-900 mb-2 font-serif">{project.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">{project.desc}</p>
                  </div>
                  <div className="border-t border-slate-200/60 pt-4 flex justify-between items-center text-xs">
                    <span className="font-bold text-corporate-blue bg-blue-50 px-2.5 py-1 rounded">
                      {project.metric}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-emerald-600">
                      <CheckCircle2 size={14} /> {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Assets & Machinery Directory Section */}
        <section className="mb-20 bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-corporate-gold/10 text-corporate-gold rounded-xl">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">Heavy Machinery Fleet Readiness</h3>
              <p className="text-slate-500 text-xs">SFPL owns and retains an active machinery yard to ensure instant mobilization of works.</p>
            </div>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-bold border-b border-slate-200">
                  <th className="p-4 uppercase tracking-wider">Asset Description</th>
                  <th className="p-4 uppercase tracking-wider">Manufacturer / Grade</th>
                  <th className="p-4 uppercase tracking-wider">Quantity Owned</th>
                  <th className="p-4 uppercase tracking-wider">Primary Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {machineryFleet.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full shrink-0"></div>
                      {m.name}
                    </td>
                    <td className="p-4 text-slate-500 font-mono text-xs">{m.brand}</td>
                    <td className="p-4 font-bold text-corporate-blue">{m.count} Units</td>
                    <td className="p-4 text-slate-500">{m.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Authorized MoA Scopes & Future Project Pipeline */}
        <section className="mb-20 border border-slate-200 rounded-2xl p-6 md:p-10 bg-white">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-8 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Statutory Objects & Planned Pipeline</span>
              <h3 className="text-xl md:text-3xl font-serif font-bold text-slate-900 mt-1">Permitted Public Works & Future Projects</h3>
              <p className="text-slate-500 text-xs mt-1">Projects we are actively bidding on, planning, or authorized to execute under our amended Memorandum of Association (MoA).</p>
            </div>
            <div className="bg-amber-50 text-corporate-gold border border-amber-200 rounded-lg px-4 py-2 text-xs font-bold">
              Amended MoA Compliant
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Obj 3(a)</span>
                  <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">Tender Pipeline</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">State Highway Expansion (Sagar Corridor)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Preparation for bidding on concrete road laying, lane-widening, and bridge structures in central Madhya Pradesh.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: PRE-QUALIFICATION</span>
                <span className="text-corporate-blue">Q3 2026 Target</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Obj 3(a)</span>
                  <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Joint Venture</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">Public-Private Utility Bridges</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Forming partnerships with class-A state contractors to co-bid on multi-span pre-stressed concrete culverts and subways.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: COLLABORATION PREPARATION</span>
                <span className="text-corporate-blue">JV Draft Finalized</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Obj 3(a)</span>
                  <span className="text-[10px] text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">Real Estate</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">Gated Mini-Townships (Sagar Outskirts)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Acquisition & planning of suburban residential layouts with eco-sustainable water harvesting systems and blacktop avenues.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: FEASIBILITY STUDY</span>
                <span className="text-corporate-blue">Land Parcel Surveys</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Clause 29</span>
                  <span className="text-[10px] text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded">Consultancy</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">Detailed Project Reports (DPR)</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Offering specialized surveying, digital contour mapping, and structural load calculations for urban municipal boards.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: EXPERT PANEL ASSIGNED</span>
                <span className="text-corporate-blue">Architects Empaneled</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Obj 3(b)13</span>
                  <span className="text-[10px] text-purple-600 font-bold bg-purple-50 px-2 py-0.5 rounded">Financial Setup</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">Bank Credit Lines & Bond Allocations</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Securing official cash-credits and performance bank guarantees required for participating in massive high-budget state e-tenders.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: CORRESPONDENCE OPENED</span>
                <span className="text-corporate-blue">Institutional Backing</span>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold bg-amber-100 text-corporate-gold px-2.5 py-0.5 rounded uppercase">Under MoA Obj 3(a)</span>
                  <span className="text-[10px] text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded">Govt Procurement</span>
                </div>
                <h4 className="font-bold text-sm md:text-base text-slate-900 font-serif">GeM Public Sector Supplies</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Using our active Seller ID to tender for municipal sewer pipe layouts, structural pre-cast blocks, and cement distribution.</p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-[10px] font-bold">
                <span className="text-slate-400">STATUS: CATALOGING ITEMS</span>
                <span className="text-corporate-blue">Active on GeM Portal</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Call to Action */}
        <section className="bg-corporate-900 text-white p-8 md:p-12 rounded-2xl text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">Partner on Public & Private Tenders</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
              We coordinate technical pre-qualifications, provide joint venture (JV) structures, and manage deep physical works with state-level compliance pipelines. Let’s align capabilities.
            </p>
            <div className="pt-4">
              <button className="bg-corporate-gold hover:bg-yellow-600 px-8 py-3.5 rounded-lg text-xs md:text-sm font-bold transition-colors text-white shadow-md">
                Contact Civil Operations Team
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
