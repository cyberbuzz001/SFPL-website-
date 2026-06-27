import React, { useState } from 'react';
import { 
  Home as HomeIcon, 
  MapPin, 
  Layout, 
  LandPlot, 
  CheckCircle2, 
  DollarSign, 
  Calculator,
  Compass,
  Building
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const RealEstateView: React.FC = () => {
  // Filter States
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'residential' | 'commercial' | 'plot'>('all');
  const [locationFilter, setLocationFilter] = useState<'all' | 'noida' | 'lucknow' | 'ncr'>('all');

  // Calculator States
  const [principal, setPrincipal] = useState<number>(5000000); // 50 Lakhs base
  const [interestRate, setInterestRate] = useState<number>(8.5); // 8.5%
  const [tenure, setTenure] = useState<number>(20); // 20 Years

  const listings = [
    {
      title: 'Sunrise Heights Phase 1',
      category: 'residential',
      location: 'noida',
      locationName: 'Sector 62, Noida',
      desc: 'Premium high-rise apartment complex featuring modern modular kitchen spaces, high-speed fiber connectivity, and smart solar-assisted heating systems.',
      baths: '3 BHK',
      area: '1800 Sq.Ft',
      price: 12500000, // 1.25 Cr
      image: 'https://picsum.photos/600/400?random=21'
    },
    {
      title: 'Hindon Corridor Logi-Plots',
      category: 'plot',
      location: 'ncr',
      locationName: 'Yamuna Expressway Corridor',
      desc: 'Gated logistics industrial land parcels with pre-approved industrial electricity connections, deep storm sewer lanes, and direct 40ft road connectivity.',
      baths: 'Industrial Plot',
      area: '1.2 Acres',
      price: 45000000, // 4.5 Cr
      image: 'https://picsum.photos/600/400?random=22'
    },
    {
      title: 'Shreesvarn Corporate Plaza',
      category: 'commercial',
      location: 'lucknow',
      locationName: 'Gomti Nagar, Lucknow',
      desc: 'Boutique office suites designed for financial brokers and software startups. Equipped with central backup HVAC, security protocols, and smart cabins.',
      baths: 'Premium Offices',
      area: '3400 Sq.Ft',
      price: 28000000, // 2.8 Cr
      image: 'https://picsum.photos/600/400?random=23'
    },
    {
      title: 'Udyam Industrial Layout',
      category: 'plot',
      location: 'lucknow',
      locationName: 'Kanpur Road Bypass',
      desc: 'Fully leveled industrial plotting layout under development, suitable for small-scale factories, warehouse setups, or logistic hubs.',
      baths: 'Factory Plot',
      area: '25,000 Sq.Ft',
      price: 18500000, // 1.85 Cr
      image: 'https://picsum.photos/600/400?random=24'
    }
  ];

  // Calculate EMI
  const getCalculatedEMI = () => {
    const r = (interestRate / 12) / 100;
    const n = tenure * 12;
    const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const getCalculatedTotalPayment = () => {
    return getCalculatedEMI() * tenure * 12;
  };

  const getCalculatedTotalInterest = () => {
    return getCalculatedTotalPayment() - principal;
  };

  // Filtering Logic
  const filteredListings = listings.filter(item => {
    const categoryMatch = categoryFilter === 'all' || item.category === categoryFilter;
    const locationMatch = locationFilter === 'all' || item.location === locationFilter;
    return categoryMatch && locationMatch;
  });

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Title and Intro */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs block mb-2">Prime Real Estate</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Real Estate & Land Solutions</h1>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-xs md:text-sm md:text-base leading-relaxed">
            SFPL real estate division facilitates corporate land acquisition, title search due-diligence, structural joint-ventures, and layout planning. We focus exclusively on litigation-free properties with verified historical deeds.
          </p>
        </section>

        {/* Strategic Capabilities Highlights */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100/60 shadow-sm">
             <LandPlot className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-base md:text-lg text-slate-900 font-serif mb-2">Title Verification Audits</h3>
             <p className="text-xs text-slate-500 leading-relaxed">
               Specialized physical and legal title audits tracking registry records back 30 years to guarantee zero historical litigations prior to client acquisitions.
             </p>
          </div>
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100/60 shadow-sm">
             <HomeIcon className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-base md:text-lg text-slate-900 font-serif mb-2">Joint Venture Planning</h3>
             <p className="text-xs text-slate-500 leading-relaxed">
               Partnering land-owning trusts with structural capital, formulating clear revenue-sharing models, and securing zoning conversions seamlessly.
             </p>
          </div>
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100/60 shadow-sm">
             <Layout className="text-indigo-600 mb-4" size={32} />
             <h3 className="font-bold text-base md:text-lg text-slate-900 font-serif mb-2">Layout Engineering</h3>
             <p className="text-xs text-slate-500 leading-relaxed">
               Formulating modern plot layouts complete with asphalt avenues, sub-surface conduit slots, stormwater drains, and local water stations.
             </p>
          </div>
        </section>

        {/* Filterable Listings Directory */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 gap-4 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Verified Offerings</span>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mt-1">Available Properties & Lands</h3>
            </div>

            {/* Double Filters */}
            <div className="flex flex-wrap gap-2">
              {/* Category selector */}
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${categoryFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  All Types
                </button>
                <button
                  onClick={() => setCategoryFilter('residential')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${categoryFilter === 'residential' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Residences
                </button>
                <button
                  onClick={() => setCategoryFilter('commercial')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${categoryFilter === 'commercial' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Commercials
                </button>
                <button
                  onClick={() => setCategoryFilter('plot')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${categoryFilter === 'plot' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Plots
                </button>
              </div>

              {/* Location Selector */}
              <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                <button
                  onClick={() => setLocationFilter('all')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${locationFilter === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                >
                  All Cities
                </button>
                <button
                  onClick={() => setLocationFilter('noida')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${locationFilter === 'noida' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                >
                  Noida
                </button>
                <button
                  onClick={() => setLocationFilter('lucknow')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${locationFilter === 'lucknow' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                >
                  Lucknow
                </button>
                <button
                  onClick={() => setLocationFilter('ncr')}
                  className={`px-3 py-1.5 rounded text-[11px] font-bold transition-all ${locationFilter === 'ncr' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                >
                  NCR
                </button>
              </div>
            </div>
          </div>

          {/* Grid Render */}
          {filteredListings.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 100} direction="up">
                  <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all flex flex-col h-full justify-between">
                    <div>
                      <div className="relative h-56 overflow-hidden bg-slate-100">
                        <img 
                          referrerPolicy="no-referrer"
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-3 left-3 bg-corporate-gold text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                          FOR SALE
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                          <p className="text-white font-bold text-xs flex items-center gap-1">
                            <MapPin size={12} className="text-corporate-gold" />
                            {item.locationName}
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-5 space-y-3">
                        <h4 className="font-bold text-base text-slate-900 font-serif">{item.title}</h4>
                        <div className="flex gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <span className="flex items-center gap-1"><Compass size={12} className="text-indigo-600"/> {item.baths}</span>
                          <span className="flex items-center gap-1"><Layout size={12} className="text-indigo-600"/> {item.area}</span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    <div className="p-5 border-t border-slate-200/60 bg-white flex justify-between items-center">
                      <span className="font-extrabold text-indigo-600 text-base">
                        ₹ {(item.price / 10000000 >= 1) ? `${item.price / 10000000} Cr` : `${item.price / 100000} Lakh`}
                      </span>
                      <span className="text-[10px] font-extrabold text-corporate-gold uppercase tracking-widest flex items-center gap-1">
                        Litigation Free <CheckCircle2 size={12} className="text-emerald-500" />
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="bg-slate-50 p-12 text-center rounded-xl border border-dashed border-slate-300">
              <Building className="mx-auto mb-4 text-slate-300" size={40} />
              <p className="text-slate-500 font-bold text-sm">No matching properties currently listed.</p>
              <p className="text-xs text-slate-400 mt-1">Please modify your search filter or contact our land registry consultants.</p>
            </div>
          )}
        </section>

        {/* EMI Calculator tool */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-serif text-slate-900">Mortgage & EMi Estimator</h3>
              <p className="text-slate-500 text-xs">Simulate your home loan terms dynamically with standard retail banking percentages.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center border-t border-slate-200/60 pt-6">
            <div className="space-y-5">
              {/* Principal Input */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                  <span>Loan Principal</span>
                  <span className="text-indigo-600">₹ {(principal / 100000).toLocaleString('en-IN')} Lakhs</span>
                </div>
                <input 
                  type="range" 
                  min="1000000" 
                  max="20000000" 
                  step="50000"
                  value={principal} 
                  onChange={(e) => setPrincipal(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold mt-1">
                  <span>₹ 10 LAKH</span>
                  <span>₹ 1 CR</span>
                  <span>₹ 2 CR</span>
                </div>
              </div>

              {/* Interest Rate Input */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                  <span>Interest Rate</span>
                  <span className="text-indigo-600">{interestRate} % p.a.</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="15" 
                  step="0.1"
                  value={interestRate} 
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold mt-1">
                  <span>5.0%</span>
                  <span>10.0%</span>
                  <span>15.0%</span>
                </div>
              </div>

              {/* Tenure Input */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 uppercase mb-2">
                  <span>Loan Tenure</span>
                  <span className="text-indigo-600">{tenure} Years</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  step="1"
                  value={tenure} 
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold mt-1">
                  <span>5 YEARS</span>
                  <span>15 YEARS</span>
                  <span>30 YEARS</span>
                </div>
              </div>
            </div>

            {/* Result Calculations */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col justify-between h-full shadow-sm text-center">
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Estimated Monthly Repayment</span>
                <span className="text-3xl font-extrabold text-indigo-600 block font-mono">
                  ₹ {getCalculatedEMI().toLocaleString('en-IN')} <span className="text-xs text-slate-400 font-light">/ month</span>
                </span>
                
                <div className="border-t border-slate-100 pt-4 mt-4 space-y-2 text-left text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Principal Amount:</span>
                    <span className="font-bold text-slate-700">₹ {principal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Interest Payable:</span>
                    <span className="font-bold text-slate-700">₹ {getCalculatedTotalInterest().toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between border-t border-dashed border-slate-100 pt-2 font-bold text-slate-800">
                    <span>Total Amount Payable:</span>
                    <span>₹ {getCalculatedTotalPayment().toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Authorized MoA Real Estate Scopes & Planned Pipelines */}
        <section className="mb-20 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 max-w-4xl mx-auto text-left">
          <div className="border-b border-slate-100 pb-5 mb-8">
            <span className="text-xs font-bold text-indigo-600 tracking-widest uppercase block">MoA Land Development Scopes</span>
            <h3 className="font-serif font-bold text-2xl text-slate-900 mt-1">Authorized Property Dealings & Upcoming Pipelines</h3>
            <p className="text-slate-400 text-xs mt-1">Real estate models, land acquisitions, and joint venture guidelines compliant with our company objects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-indigo-100 text-indigo-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Land Dealing</span>
                <span className="text-[9px] text-slate-400 font-bold font-mono">Freehold & Leasehold</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Strategic Land Bank Accumulation</h4>
              <p className="text-xs text-slate-500 leading-relaxed">SFPL is authorized to acquire, lease, hold, exchange, and manage land parcels. We are actively identifying prime commercial/industrial areas for long-term leaseholds and outright freehold sales.</p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div className="flex justify-between items-center">
                <span className="bg-indigo-100 text-indigo-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Partnerships</span>
                <span className="text-[9px] text-slate-400 font-bold">Planned JV</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Joint Venture Gated Layouts</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Leveraging partnership clauses to combine land-owner resources with SFPL engineering and layout credentials to build premium, state-approved residential townships.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
