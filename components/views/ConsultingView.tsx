import React, { useState } from 'react';
import { 
  FileText, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  FileCheck, 
  Clock, 
  ArrowRight,
  X,
  Calculator,
  AlertCircle,
  Sparkles,
  Percent
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const ConsultingView: React.FC = () => {
  // Planner state
  const [projectType, setProjectType] = useState<'tender' | 'dpr' | 'regulatory' | 'digital'>('tender');
  const [projectBudget, setProjectBudget] = useState<string>('mid');
  
  // Interactive Utilities State
  const [activeUtilTab, setActiveUtilTab] = useState<'tenderCalc' | 'smartVillage'>('tenderCalc');
  
  // State Tender / JV Calculator states
  const [tenderValue, setTenderValue] = useState<number>(5.5); // Crores INR
  const [partnerExperience, setPartnerExperience] = useState<'yes' | 'no'>('yes');
  const [partnerSolvency, setPartnerSolvency] = useState<number>(2.0); // Crores INR
  const [jvShare, setJvShare] = useState<number>(49); // %
  
  // Rural Smart-Village Simulator states
  const [villagePopulation, setVillagePopulation] = useState<number>(3500);
  const [includeWater, setIncludeWater] = useState<boolean>(true);
  const [includeSanitation, setIncludeSanitation] = useState<boolean>(true);
  const [includeWaste, setIncludeWaste] = useState<boolean>(true);
  const [includeDrainage, setIncludeDrainage] = useState<boolean>(true);

  // Custom Modal & Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    company: '',
    timeline: 'Immediate'
  });

  const advisoryServices = [
    {
      title: 'Tender & Bid Consulting',
      desc: 'Expert preparation of responsive, highly competitive technical bids for government and institutional contracts. We ensure 100% adherence to eligibility guidelines, financial bidding math, and contract compliance codes.',
      icon: <FileText className="text-corporate-gold" size={24}/>
    },
    {
      title: 'DPR & Feasibility Reports',
      desc: 'Formulation of Detailed Project Reports (DPR), financial viability matrices, site survey assessments, cost estimation modeling, and multi-year cash flow projections essential for capital procurement.',
      icon: <TrendingUp className="text-corporate-gold" size={24}/>
    },
    {
      title: 'Government Liaison Services',
      desc: 'Navigating state and regional regulatory pipelines. We manage filing paperwork, secure environmental impact permits, and facilitate clearances across diverse government boards with absolute integrity.',
      icon: <Globe className="text-corporate-gold" size={24}/>
    },
    {
      title: 'Digital Transformation Systems',
      desc: 'Guiding state and corporate entities through modern technology adoption, workflow digitizations, legacy database migrations, and operational audits to improve transparency and efficiency.',
      icon: <ShieldCheck className="text-corporate-gold" size={24}/>
    }
  ];

  // Map checklist output dynamically
  const getRoadmapData = () => {
    switch (projectType) {
      case 'tender':
        return {
          duration: '3 - 5 Weeks',
          checklist: [
            'Technical Bid Document Formulation (Section-wise)',
            'Compliance & Eligibility Assessment Filing',
            'Financial Pre-Qualification Math Auditing',
            'Security Deposit (EMD) Arrangement Advice'
          ],
          milestones: ['Zonary Review', 'Technical Draft Upload', 'Bid Submission Compliance']
        };
      case 'dpr':
        return {
          duration: '4 - 8 Weeks',
          checklist: [
            'Physical Site Survey & Regional Feasibility Charting',
            'Structural Engineering Cost Estimations',
            '10-Year Cash Flow & ROI Viability Modelling',
            'Risk Matrix Analysis & Environmental Compliance Review'
          ],
          milestones: ['Site Surveying', 'Financial Modelling', 'DPR Dossier Bound']
        };
      case 'regulatory':
        return {
          duration: '2 - 6 Weeks',
          checklist: [
            'NOC & Clearance Application Preparation',
            'Environmental Impact Assessment (EIA) Support',
            'Zoning & Land Conversion Legality Checks',
            'Board Review Presentation Coaching'
          ],
          milestones: ['Board Filing', 'NOC Processing Tracker', 'Audit Approval Clear']
        };
      case 'digital':
        return {
          duration: '6 - 12 Weeks',
          checklist: [
            'Legacy Database & Workflow Auditing',
            'Tech Stack Modernization Blueprint Drafting',
            'Security Architecture & Encryption Planning',
            'Staff Training Protocols & User Onboarding Documentation'
          ],
          milestones: ['System Mapping', 'Prototype Framework', 'Deploy Support']
        };
      default:
        return {
          duration: '3 Weeks',
          checklist: ['General Consultation Briefing'],
          milestones: ['Briefing']
        };
    }
  };

  const roadmap = getRoadmapData();

  // Dynamic calculations for Tender & JV Calculator
  const requiredSolvency = parseFloat((tenderValue * 0.3).toFixed(2));
  const partnerContribution = parseFloat(((jvShare / 100) * requiredSolvency).toFixed(2));
  const sfplContribution = parseFloat((((100 - jvShare) / 100) * requiredSolvency).toFixed(2));
  const combinedContribution = parseFloat((partnerSolvency + 3.5).toFixed(2));

  let tenderResultStatus: 'fully_eligible' | 'technical_shortfall' | 'deficit' = 'deficit';
  if (combinedContribution >= requiredSolvency) {
    if (partnerExperience === 'yes') {
      tenderResultStatus = 'fully_eligible';
    } else {
      tenderResultStatus = 'technical_shortfall';
    }
  }

  // Dynamic calculations for Rural Smart-Village Simulator
  const perResidentCost = (includeWater ? 150 : 0) + (includeSanitation ? 250 : 0) + (includeWaste ? 100 : 0) + (includeDrainage ? 180 : 0);
  const totalCostINR = villagePopulation * perResidentCost;
  const totalCostLakhs = parseFloat((totalCostINR / 100000).toFixed(2));
  const cleanWaterLiters = villagePopulation * 55; // 55 L per capita per day standard
  const toiletsInstalled = Math.ceil(villagePopulation / 15); // standard ratio
  const wasteProcessedKg = Math.ceil(villagePopulation * 0.3 * 30); // 0.3kg per resident per day, over 30 days

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-xs block mb-2">Expert Strategy</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Consulting & Advisory</h1>
          <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-xs md:text-sm md:text-base leading-relaxed">
            SFPL provides strategic advisory capabilities to corporate boards, private developers, and regional government units. From bid-management de-risking to technical DPR dossiers, we deliver meticulous, verified documentation.
          </p>
        </section>

        {/* Services Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          {advisoryServices.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all h-full space-y-4">
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 font-serif">{service.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </section>

        {/* Interactive Advisory Quote Planner */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-corporate-gold/10 text-corporate-gold rounded-xl">
              <FileCheck size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">Tender & DPR Scope Planner</h3>
              <p className="text-slate-500 text-xs">Configure your project type to instantly generate custom compliance checklists and roadmaps.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start border-t border-slate-100 pt-6">
            <div className="md:col-span-6 space-y-6">
              {/* Type Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  1. Project Advisory Type
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'tender', label: 'Tender & Technical Bid advisory' },
                    { id: 'dpr', label: 'DPR & Feasibility Study Formulation' },
                    { id: 'regulatory', label: 'Government Clearance Liaison' },
                    { id: 'digital', label: 'Digital System Transformation' },
                  ].map((opt) => (
                    <label 
                      key={opt.id}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${projectType === opt.id ? 'border-corporate-gold bg-amber-50/50' : 'border-slate-200 hover:bg-slate-50'}`}
                    >
                      <input 
                        type="radio" 
                        name="projType" 
                        value={opt.id} 
                        checked={projectType === opt.id}
                        onChange={() => setProjectType(opt.id as any)}
                        className="accent-corporate-gold"
                      />
                      <span className="text-xs font-bold text-slate-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget Scale */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  2. Projected Scale (Budget)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'low', label: 'Under 1 Cr' },
                    { id: 'mid', label: '1 - 10 Cr' },
                    { id: 'high', label: '10 Cr+' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectBudget(item.id)}
                      className={`px-3 py-2.5 border rounded-lg text-[10px] md:text-xs font-bold transition-all ${projectBudget === item.id ? 'bg-corporate-gold text-white border-corporate-gold shadow' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Generated Checklist Roadmap */}
            <div className="md:col-span-6 bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full shadow-sm">
              <div>
                <div className="flex justify-between items-center mb-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200/60 pb-3">
                  <span>Scope Assessment</span>
                  <span className="text-corporate-gold flex items-center gap-1">
                    <Clock size={12} /> {roadmap.duration}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Required Deliverables Checklist</span>
                    <ul className="space-y-2 mt-2">
                      {roadmap.checklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Operational Milestones</span>
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      {roadmap.milestones.map((ms, i) => (
                        <span key={i} className="bg-white border border-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">
                          {ms}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200/60 mt-6 text-center">
                <button 
                  onClick={() => {
                    setProposalSubmitted(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-corporate-900 text-white py-3 rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  Request Dossier Proposal <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Statutory Utilities Suite */}
        <section className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto shadow-sm text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-5">
            <div>
              <span className="text-xs font-bold text-corporate-gold tracking-widest uppercase block flex items-center gap-1">
                <Sparkles size={12} className="text-corporate-gold animate-pulse" /> Interactive Statutory Utilities
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mt-1">Consortium & Project Estimators</h3>
              <p className="text-slate-400 text-xs mt-1">Verify pre-qualification eligibility and simulate rural impact budgets based on amended INC-33 objects.</p>
            </div>
            
            {/* Tab Toggles */}
            <div className="flex bg-slate-100 p-1 rounded-lg self-start">
              <button
                onClick={() => setActiveUtilTab('tenderCalc')}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${activeUtilTab === 'tenderCalc' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Tender JV Calculator
              </button>
              <button
                onClick={() => setActiveUtilTab('smartVillage')}
                className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${activeUtilTab === 'smartVillage' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
              >
                Smart-Village Simulator
              </button>
            </div>
          </div>

          {activeUtilTab === 'tenderCalc' ? (
            <div className="space-y-8 animate-fade-in">
              {/* JV Calculator Inputs & Output Card */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Inputs */}
                <div className="md:col-span-7 space-y-5">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 border-b border-slate-100 pb-1"> consortium credentials setup</span>
                  
                  {/* Tender Cost */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs text-slate-600 font-bold">
                      <label>Target Tender Value (INR Crores)</label>
                      <span className="text-corporate-blue font-mono font-extrabold">{tenderValue} Cr</span>
                    </div>
                    <input 
                      type="range" 
                      min="1.0" 
                      max="50.0" 
                      step="0.5" 
                      value={tenderValue} 
                      onChange={(e) => setTenderValue(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-corporate-blue"
                    />
                  </div>

                  {/* Partner Net Solvency */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs text-slate-600 font-bold">
                      <label>Your Certified Net Solvency (INR Crores)</label>
                      <span className="text-corporate-gold font-mono font-extrabold">{partnerSolvency} Cr</span>
                    </div>
                    <input 
                      type="range" 
                      min="0.5" 
                      max="20.0" 
                      step="0.5" 
                      value={partnerSolvency} 
                      onChange={(e) => setPartnerSolvency(parseFloat(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-corporate-gold"
                    />
                  </div>

                  {/* Proposed JV Share */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs text-slate-600 font-bold">
                      <label>Proposed Partner Consortium Share (%)</label>
                      <span className="text-slate-900 font-mono font-extrabold">{jvShare}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-400 font-mono">10%</span>
                      <input 
                        type="range" 
                        min="10" 
                        max="90" 
                        step="1" 
                        value={jvShare} 
                        onChange={(e) => setJvShare(parseInt(e.target.value))}
                        className="flex-1 h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-800"
                      />
                      <span className="text-[10px] text-slate-400 font-mono">90%</span>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-0.5">
                      SFPL holding a corresponding <span className="font-bold text-slate-700">{100 - jvShare}%</span> strategic stake.
                    </p>
                  </div>

                  {/* Technical Backing Check */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Does your firm possess minimum Class-A / specified Civil work experience?
                    </label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setPartnerExperience('yes')}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${partnerExperience === 'yes' ? 'bg-corporate-blue text-white border-corporate-blue' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                      >
                        Yes, Experience Certified
                      </button>
                      <button
                        onClick={() => setPartnerExperience('no')}
                        className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${partnerExperience === 'no' ? 'bg-corporate-blue text-white border-corporate-blue' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                      >
                        No, Rely on SFPL Solely
                      </button>
                    </div>
                  </div>
                </div>

                {/* Outputs & Pre-Qualification Dashboard */}
                <div className="md:col-span-5 space-y-4">
                  <div className="p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full bg-slate-50/50 shadow-sm relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-the-nation.png')] opacity-5 pointer-events-none"></div>
                    
                    <div className="relative z-10 space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-200/60 pb-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Eligibility Assessment</span>
                        <span className="text-[10px] bg-white border px-2 py-0.5 rounded font-mono font-bold text-slate-500">SFPL Solvency Base: 3.5 Cr</span>
                      </div>

                      {/* Status Check card */}
                      {tenderResultStatus === 'fully_eligible' ? (
                        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 text-emerald-800 space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                            <span className="font-extrabold text-xs uppercase tracking-wider block">Consortium Pre-Qualified</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-emerald-700 font-serif">
                            Excellent! Combined solvency ({(partnerSolvency + 3.5).toFixed(1)} Cr) is comfortably above the required eligibility baseline ({requiredSolvency} Cr).
                          </p>
                        </div>
                      ) : tenderResultStatus === 'technical_shortfall' ? (
                        <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-amber-800 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs uppercase tracking-wider block">Partially Eligible (JV Advised)</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-amber-700 font-serif">
                            Financial requirements met ({(partnerSolvency + 3.5).toFixed(1)} Cr total solvency). However, lacking co-certified civil work credentials. SFPL can act as technical lead under MoA Clause 1.
                          </p>
                        </div>
                      ) : (
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-100 text-rose-800 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="font-extrabold text-xs uppercase tracking-wider block text-rose-800">Critical Solvency Deficit</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-rose-700 font-serif">
                            Deficit of {(requiredSolvency - (partnerSolvency + 3.5)).toFixed(1)} Cr. Combined capacity fails to meet the tender threshold. Recommending supplemental bank guarantees under MoA Obj 3(b)13/32.
                          </p>
                        </div>
                      )}

                      {/* Financial Splitting metrics */}
                      <div className="space-y-2.5 pt-3 border-t border-slate-200/40 text-xs">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Required Bid Solvency:</span>
                          <span className="font-bold text-slate-800 font-mono">{requiredSolvency} Cr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Your Apportioned Share ({jvShare}%):</span>
                          <span className="font-bold text-slate-800 font-mono">{partnerContribution} Cr</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">SFPL Apportioned Share ({100 - jvShare}%):</span>
                          <span className="font-bold text-slate-800 font-mono">{sfplContribution} Cr</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200/50 pt-2 font-bold">
                          <span className="text-slate-700">Combined Project Solvency:</span>
                          <span className={`font-mono text-sm ${combinedContribution >= requiredSolvency ? 'text-emerald-600' : 'text-rose-600'}`}>
                            {combinedContribution} Cr
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Mapped MoA Clauses */}
                    <div className="mt-6 pt-4 border-t border-slate-200/60 bg-white p-3 rounded-lg border text-left">
                      <span className="text-[9px] text-corporate-gold font-bold uppercase tracking-wider block mb-1">Applicable Statutory Objects</span>
                      <p className="text-[10px] text-slate-500 leading-relaxed font-serif">
                        <span className="font-bold text-slate-700">MoA Clause 4:</span> Permission to enter joint ventures & share profits.<br />
                        <span className="font-bold text-slate-700">MoA Clause 31:</span> Authorized to bid, execute, & sign public-sector tenders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in text-left">
              {/* Rural Smart Village Impact & Cost Simulator */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                
                {/* Sliders and Toggles */}
                <div className="md:col-span-6 space-y-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2 border-b border-slate-100 pb-1">village model configuration</span>

                  {/* Population scale */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs text-slate-600 font-bold">
                      <label>Target Population Scale</label>
                      <span className="text-emerald-600 font-mono font-extrabold">{villagePopulation.toLocaleString()} Residents</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      step="250" 
                      value={villagePopulation} 
                      onChange={(e) => setVillagePopulation(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  {/* Infrastructure Options Checklist */}
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Select Infrastructure Deployments
                    </label>

                    <div className="grid grid-cols-1 gap-2">
                      <button
                        onClick={() => setIncludeWater(!includeWater)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${includeWater ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${includeWater ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Clean Drinking Water Supply Lines</span>
                            <span className="text-[10px] text-slate-400 block">Groundwater recharge borewells, smart level sensors & overhead distribution.</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-600 font-bold">₹150 / Resident</span>
                      </button>

                      <button
                        onClick={() => setIncludeSanitation(!includeSanitation)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${includeSanitation ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${includeSanitation ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Localized Sanitation & Bio-Toilets</span>
                            <span className="text-[10px] text-slate-400 block">Modular composite bio-digester loops, twin pits, safe public facilities.</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-600 font-bold">₹250 / Resident</span>
                      </button>

                      <button
                        onClick={() => setIncludeWaste(!includeWaste)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${includeWaste ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${includeWaste ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Solid Waste Composting Yards</span>
                            <span className="text-[10px] text-slate-400 block">Mechanical trash segregators and organic vermiculture structures.</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-600 font-bold">₹100 / Resident</span>
                      </button>

                      <button
                        onClick={() => setIncludeDrainage(!includeDrainage)}
                        className={`p-3 rounded-lg border text-left flex items-center justify-between transition-all ${includeDrainage ? 'bg-emerald-50/50 border-emerald-300 shadow-sm' : 'bg-white border-slate-200 hover:bg-slate-50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${includeDrainage ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>
                          <div>
                            <span className="text-xs font-bold text-slate-800 block">Anti-Overflow Stormwater Drainage</span>
                            <span className="text-[10px] text-slate-400 block">Masonry channels contoured to local pathways, avoiding flood logging.</span>
                          </div>
                        </div>
                        <span className="font-mono text-xs text-slate-600 font-bold">₹180 / Resident</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Outputs & Impact Panel */}
                <div className="md:col-span-6 space-y-4">
                  <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                      <Globe size={120} className="text-emerald-900" />
                    </div>

                    <div className="relative z-10 space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Simulated Project Yield</span>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-mono uppercase">Amended MoA Obj 3(a)</span>
                      </div>

                      {/* Cost Summary Box */}
                      <div className="p-4 bg-emerald-900 text-white rounded-xl space-y-1">
                        <span className="text-[10px] text-emerald-200 font-bold uppercase tracking-wider block">Estimated Project Capital Cost</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl md:text-3xl font-extrabold font-mono">₹{totalCostLakhs} Lakhs</span>
                          <span className="text-[10px] text-emerald-200 font-bold">({(totalCostINR / 10000000).toFixed(2)} Crores)</span>
                        </div>
                        <p className="text-[10px] text-emerald-100 leading-relaxed pt-1.5 border-t border-emerald-800">
                          Based on local raw materials, labor wages, and standard public-sector DSR billing codes in Sagar, MP.
                        </p>
                      </div>

                      {/* Simulated Impact Metrics Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-white border border-slate-150 rounded-lg">
                          <span className="text-[9px] text-slate-400 font-bold uppercase block">Safe Water Supply</span>
                          <span className="font-mono font-bold text-slate-800 text-xs block mt-1">
                            {includeWater ? `${cleanWaterLiters.toLocaleString()} L/day` : '0 L/day'}
                          </span>
                        </div>
                        <div className="p-3 bg-white border border-slate-150 rounded-lg">
                          <span className="text-[9px] text-slate-400 font-bold uppercase block">Toilets Deployed</span>
                          <span className="font-mono font-bold text-slate-800 text-xs block mt-1">
                            {includeSanitation ? `${toiletsInstalled} Units` : '0 Units'}
                          </span>
                        </div>
                        <div className="p-3 bg-white border border-slate-150 rounded-lg">
                          <span className="text-[9px] text-slate-400 font-bold uppercase block">Bio-Compost Output</span>
                          <span className="font-mono font-bold text-slate-800 text-xs block mt-1">
                            {includeWaste ? `${wasteProcessedKg.toLocaleString()} kg/mo` : '0 kg/mo'}
                          </span>
                        </div>
                        <div className="p-3 bg-white border border-slate-150 rounded-lg">
                          <span className="text-[9px] text-slate-400 font-bold uppercase block">Flood Protection</span>
                          <span className="font-mono font-bold text-slate-800 text-xs block mt-1">
                            {includeDrainage ? '95% Runoff Safe' : 'Unprotected'}
                          </span>
                        </div>
                      </div>

                      {/* UN SDGs Met */}
                      <div className="pt-2 border-t border-slate-200/50">
                        <span className="text-[9px] text-slate-400 font-bold uppercase block mb-1.5">Consortium UN SDG Compliance Matrix</span>
                        <div className="flex gap-1.5 flex-wrap">
                          {includeWater && <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[9px] font-bold px-2 py-0.5 rounded font-serif">SDG 6: Clean Water</span>}
                          {includeSanitation && <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[9px] font-bold px-2 py-0.5 rounded font-serif">SDG 6: Sanitation</span>}
                          {includeWaste && <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[9px] font-bold px-2 py-0.5 rounded font-serif">SDG 12: Waste Cycle</span>}
                          {includeDrainage && <span className="bg-purple-50 text-purple-700 border border-purple-200 text-[9px] font-bold px-2 py-0.5 rounded font-serif">SDG 9: Resilient Drains</span>}
                          {!includeWater && !includeSanitation && !includeWaste && !includeDrainage && (
                            <span className="text-slate-400 text-[10px]">Select any infrastructure module above to calculate compliance metrics.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}
        </section>

      </div>

      {/* Interactive Scope Planner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative animate-fade-in-up">
            
            {/* Header */}
            <div className="bg-corporate-900 p-6 text-white flex justify-between items-center">
              <div>
                <h3 className="font-serif font-bold text-lg">Dossier Proposal Request</h3>
                <p className="text-slate-300 text-xs mt-1">Configure your official consulting parameters</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {!proposalSubmitted ? (
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    setProposalSubmitted(true);
                  }}
                  className="space-y-4 text-left"
                >
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-2">
                    <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block">Scope Selection Summary</span>
                    <div className="text-xs text-slate-700 space-y-1">
                      <p>• <span className="font-semibold text-slate-900">Type:</span> {
                        projectType === 'tender' ? 'Tender & Technical Bid Advisory' :
                        projectType === 'dpr' ? 'DPR & Feasibility Study Formulation' :
                        projectType === 'regulatory' ? 'Government Clearance Liaison' :
                        'Digital System Transformation'
                      }</p>
                      <p>• <span className="font-semibold text-slate-900">Scale:</span> {
                        projectBudget === 'low' ? 'Under 1 Crore INR' :
                        projectBudget === 'mid' ? '1 - 10 Crore INR' :
                        '10 Crore+ INR'
                      }</p>
                      <p>• <span className="font-semibold text-slate-900">Advisory Timeline:</span> {roadmap.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Your Full Name / Corporate Officer</label>
                      <input 
                        required
                        type="text" 
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        placeholder="E.g. Director of Operations"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Corporate Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder="E.g. contact@yourfirm.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Company / Consortium Name</label>
                      <input 
                        required
                        type="text" 
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        placeholder="E.g. ABC Infrastructure Ltd"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Execution Urgency</label>
                      <select 
                        value={leadForm.timeline}
                        onChange={(e) => setLeadForm({ ...leadForm, timeline: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                      >
                        <option>Immediate (Within 1 week)</option>
                        <option>Standard (1 - 3 months)</option>
                        <option>Future Bid Planning</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-corporate-blue text-white font-bold py-3 rounded-lg text-xs hover:bg-blue-800 transition-colors mt-6 flex items-center justify-center gap-2 shadow-md"
                  >
                    Submit Scope Dossier Request <ArrowRight size={14} />
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200 shadow-sm">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm font-serif">Scope Assessment Successfully Compiled</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed max-w-sm mx-auto">
                      Thank you, <span className="font-bold text-slate-800">{leadForm.name}</span>. Our advisory board has received the planning session request for <span className="font-semibold text-slate-800">{leadForm.company || "your company"}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-left text-xs space-y-2.5">
                    <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block border-b border-slate-200 pb-1">Officer Assignment Summary</span>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Assigned Director:</span>
                      <span className="font-bold text-slate-800">
                        {projectType === 'tender' ? 'Pranav Sing Kushwaha (CEO & Tender Expert)' :
                         projectType === 'digital' ? 'Nikhil Kushwaha (Founder & Tech Director)' :
                         'Neetesh Yadav (Co-Founder & Strategy Expert)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Contact Estimation:</span>
                      <span className="font-bold text-slate-800">
                        {projectBudget === 'high' ? 'Within 4 Hours (High-Priority Direct line)' : 'Within 24 Business Hours'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Assigned Action:</span>
                      <span className="text-slate-700">Pre-qualification eligibility check & detailed DPR outline.</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-full bg-corporate-900 text-white font-bold py-3 rounded-lg text-xs hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Return to Scope Planner
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
