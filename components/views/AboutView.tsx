import React, { useState } from 'react';
import { 
  Globe, 
  Target, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Calendar, 
  ChevronDown, 
  Users, 
  ShieldCheck, 
  Cpu, 
  FileCheck
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const AboutView: React.FC = () => {
  const [activeYear, setActiveYear] = useState<string>('2026');
  const [expandedCompliance, setExpandedCompliance] = useState<number | null>(null);

  const milestones = [
    {
      year: '2021',
      title: 'Company Foundation',
      desc: 'SFPL was legally incorporated with a vision to streamline multi-sector public utility development and corporate software solutions under a centralized governance group.'
    },
    {
      year: '2023',
      title: 'Infrastructure & Tender Integration',
      desc: 'Formed a dedicated Civil Infrastructure unit, securing state-level contractors licensing and successfully bidding for road and water conservation projects.'
    },
    {
      year: '2025',
      title: 'Grassroots Development Milestone',
      desc: 'Launched the Gramin Development Suite, establishing smart water loops and direct market connectivity networks for over 5,000 farmers in north and central India.'
    },
    {
      year: '2026',
      title: 'Advanced AI & Platform Launch',
      desc: 'Modernized the corporate technology wing, introducing specialized CRM licenses, Call Center tools, custom secure OS configurations, and AI-driven tender advisory services.'
    }
  ];

  const leadership = [
    {
      name: 'Nikhil Kushwaha',
      role: 'Founder & Director',
      bio: 'Leads SFPL corporate policy with deep expertise in enterprise architecture, custom system engineering, and strategic project management.',
      avatar: 'https://picsum.photos/300/300?random=55',
      focus: 'Tech Innovation & System Governance'
    },
    {
      name: 'Pranav Sing Kushwaha',
      role: 'CEO',
      bio: 'A distinguished tender specialist and operational director with over a decade of civil engineering and public utility contracting expertise.',
      avatar: 'https://picsum.photos/300/300?random=56',
      focus: 'Infrastructure Bidding & Civil Operations'
    },
    {
      name: 'Neetesh Yadav',
      role: 'Co-Founder & COO',
      bio: 'Expert in corporate communications, strategic human resources, administrative frameworks, and community development planning.',
      avatar: 'https://picsum.photos/300/300?random=57',
      focus: 'Operations, HR & Community Relations'
    }
  ];

  const compliances = [
    {
      title: 'Corporate Legal Identity (CIN: U46511MP2023PTC066911)',
      details: 'SFPL is fully incorporated under the Ministry of Corporate Affairs (MCA), Registrar of Companies (RoC) Madhya Pradesh, Government of India. Our Corporate Identity Number (CIN) is U46511MP2023PTC066911, incorporated on 28/07/2023 as a Private Limited Company.'
    },
    {
      title: 'GSTIN Registration (23ABLCS3566J1ZZ)',
      details: 'Equipped with valid GST registration under GSTIN 23ABLCS3566J1ZZ (Legal Name: SHREESVARN FINNOVOTION PRIVATE LIMITED) issued on 03/07/2025 by the jurisdictional tax authority.'
    },
    {
      title: 'MSME & Udyam Certification (UDYAM-MP-39-0031057)',
      details: 'Registered as M/S SHREESVARN FINNOVOTION PRIVATE LIMITED with Udyam Registration Number UDYAM-MP-39-0031057 (Classification: Micro Enterprise, Services & Trading activities) with our official unit in Sagar, Madhya Pradesh.'
    },
    {
      title: 'Startup India Recognition (Certificate No: DIPP204739)',
      details: 'Recognized as a certified startup by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India. Startup Certificate Number: DIPP204739 (Date of Issue: 23-05-2025, Valid Upto: 27-07-2033) for Sector: Construction & Engineering, Industry: Construction.'
    },
    {
      title: 'Permanent Account Number (PAN: ABLCS3566J)',
      details: 'Equipped with an active Corporate Permanent Account Number (PAN) ABLCS3566J registered under the Income Tax Department, Government of India.'
    },
    {
      title: 'Government e-Marketplace (GeM Seller ID: PK7W240011789835)',
      details: 'Completed profile on the Government e-Marketplace (GeM) with Seller ID PK7W240011789835, authorizing participation in official public sector procurement bids and e-tenders.'
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white">
      {/* Banner */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase block mb-2">Corporate Profile</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900">About SFPL</h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            SHREESVARN FINNOVOTION PRIVATE LIMITED is an emerging enterprise aimed at empowering communities and businesses through reliable infrastructure and innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/800/600?random=20" 
                alt="Corporate Strategy Meeting" 
                className="rounded-xl shadow-xl relative z-10 w-full object-cover h-[350px]" 
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-corporate-gold/20 rounded-xl z-0"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-corporate-blue/10 rounded-xl z-0"></div>
            </div>
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-corporate-gold tracking-widest uppercase block">Our Foundational Purpose</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">Empowering Grassroots & Enterprises Silently</h2>
              
              <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-corporate-gold hover:shadow-sm transition-shadow">
                <h4 className="font-bold text-base md:text-lg mb-2 flex items-center gap-2">
                  <Globe size={18} className="text-corporate-gold"/> Our Vision
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  To become a trusted, multi-sector partner in building modern, durable physical infrastructure and delivering secure digital technologies that empower rural communities and transform urban businesses.
                </p>
              </div>

              <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-corporate-blue hover:shadow-sm transition-shadow">
                <h4 className="font-bold text-base md:text-lg mb-2 flex items-center gap-2">
                  <Target size={18} className="text-corporate-blue"/> Our Mission
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  To systematically integrate engineering, communication technology, and direct impact models to drive inclusive development, bringing modern facilities to smart villages and robust platforms to organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Milestones Timeline */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-corporate-blue font-bold tracking-widest text-xs uppercase block">Growth Journey</span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mt-2">SFPL Evolution & Key Benchmarks</h2>
            <p className="text-slate-500 text-xs md:text-sm mt-3">Click on a milestone year to view our organizational progress and expansion phases.</p>
          </div>

          <div className="flex justify-center gap-2 md:gap-4 border-b border-slate-200 pb-4 mb-8">
            {milestones.map((milestone) => (
              <button
                key={milestone.year}
                onClick={() => setActiveYear(milestone.year)}
                className={`px-5 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${activeYear === milestone.year ? 'bg-corporate-blue text-white shadow' : 'bg-white text-slate-500 hover:bg-slate-100'}`}
              >
                {milestone.year}
              </button>
            ))}
          </div>

          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200/80 shadow-sm max-w-2xl mx-auto">
            {milestones.map((m) => m.year === activeYear && (
              <div key={m.year} className="animate-fade-in space-y-4">
                <div className="flex items-center gap-2 text-corporate-gold font-bold">
                  <Calendar size={18} />
                  <span className="text-sm tracking-wider uppercase">Milestone Year {m.year}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">{m.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase block">Our Leadership</span>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Board of Directors</h2>
            <div className="w-16 h-0.5 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-500 text-xs md:text-sm mt-3">Highly specialized individuals driving SFPL towards global efficiency benchmarks.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((member, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 150} 
                direction="up"
                className="h-full"
              >
                <div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-lg hover:border-corporate-blue/30 transition-all text-center flex flex-col h-full">
                  <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 overflow-hidden border-4 border-white shadow-md">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-corporate-gold text-xs font-bold uppercase tracking-wider mb-2">{member.role}</p>
                  
                  <div className="bg-slate-50 p-2 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-4 border border-slate-100">
                    Focus: {member.focus}
                  </div>
                  
                  <p className="text-slate-500 text-xs leading-relaxed flex-grow">{member.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Accordion */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Legal Audit Standards</span>
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">
                Fully Compliant & Regulated Operations
              </h2>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                SFPL values corporate trust. We maintain complete compliance files with immediate availability for public bidding audits, joint-development legalities, and institutional ventures.
              </p>
              <div className="flex gap-2 p-4 bg-white rounded-lg border border-slate-200/80">
                <FileCheck className="text-green-600 shrink-0" size={20} />
                <div className="text-left">
                  <span className="text-xs font-bold block text-slate-800">Tender Ready Compliance</span>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-widest">Audited FY 2025-26</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {compliances.map((c, i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-lg border border-slate-200/80 shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedCompliance(expandedCompliance === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                  >
                    <span>{c.title}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-slate-400 transition-transform ${expandedCompliance === i ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {expandedCompliance === i && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 animate-fade-in bg-slate-50/50">
                      {c.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Official Registry Directory Bento Grid */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <div className="border-b border-slate-100 pb-5 mb-6 text-left">
              <span className="text-[10px] font-bold text-corporate-gold uppercase tracking-wider block">Official Corporate Directory</span>
              <h3 className="font-serif font-bold text-xl text-slate-900 mt-1">Registrar of Companies (RoC) Verification</h3>
              <p className="text-slate-400 text-xs mt-1">Active certifications and statutory registry coordinates as per official government filings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Company Legal Name</span>
                <span className="font-bold text-xs text-slate-800 font-serif leading-snug block">SHREESVARN FINNOVOTION PRIVATE LIMITED</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Corporate Identity Number (CIN)</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">U46511MP2023PTC066911</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Permanent Account Number (PAN)</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">ABLCS3566J</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">GST Registration Number (GSTIN)</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">23ABLCS3566J1ZZ</span>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Date of Incorporation</span>
                <span className="font-bold text-xs text-slate-800 block">28th July 2023</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Udyam MSME Certificate</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">UDYAM-MP-39-0031057</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Startup India Recognition</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">DIPP204739</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-150 space-y-1">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">GeM Seller ID</span>
                <span className="font-mono font-bold text-xs text-slate-800 block">PK7W240011789835</span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col md:flex-row justify-between text-left gap-4">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Registered Mailing & Operational Office Address</span>
                <p className="font-serif text-slate-700 text-xs mt-1 font-semibold">
                  No 284, Neha Nagar, Makroniya, Gambhiriyia, Banda, Sagar - 470004, Madhya Pradesh, India
                </p>
              </div>
              <div className="md:text-right">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Jurisdictional Status</span>
                <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-2.5 py-1 text-[10px] font-bold uppercase mt-1">
                  Active & Approved (RoC MP)
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sustainable Development Goals CSR */}
      <section className="py-16 bg-corporate-900 text-white">
        <div className="container mx-auto px-6 md:px-8 max-w-4xl text-center">
          <span className="text-corporate-gold font-bold tracking-widest text-xs uppercase block mb-2">Sustainable Development</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white">Corporate Social Responsibility</h2>
          <div className="w-16 h-0.5 bg-corporate-gold mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
            At SFPL, we view social welfare and public trust as core milestones of profitability. Our projects actively fund clean rural sanitization, build solar networks, and distribute technology access to under-funded rural educational centers. We build with conscience and execute with precision.
          </p>
        </div>
      </section>
    </div>
  );
};
