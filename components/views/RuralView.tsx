import React, { useState } from 'react';
import { 
  Sprout, 
  Truck, 
  CheckCircle2, 
  TrendingUp, 
  Droplet, 
  Sun, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  Globe
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ScrollReveal } from '../ScrollReveal';

export const RuralView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<'villages' | 'farmers' | 'water' | 'waste'>('villages');

  const topicMetrics = {
    villages: {
      title: 'Smart Villages Initiated',
      value: '120 Villages',
      chartData: [
        { name: 'Zone A', value: 35, label: 'Central Villages' },
        { name: 'Zone B', value: 45, label: 'North Villages' },
        { name: 'Zone C', value: 25, label: 'East Villages' },
        { name: 'Zone D', value: 15, label: 'South Villages' },
      ],
      color: '#16a34a', // emerald 600
      desc: 'Deploying technology-enabled village centers. These modular hubs house digital farming kiosks, common service points for state schemes, and basic telemedicine links.',
      projects: ['Gramin Digital Kiosk Program', 'Solar Grid Ruralization', 'Smart Street Light Loops']
    },
    farmers: {
      title: 'Farmers Connected to Markets',
      value: '5,000+ Farmers',
      chartData: [
        { name: 'Wheat', value: 1800, label: 'Wheat Harvesters' },
        { name: 'Paddy', value: 1500, label: 'Paddy Harvesters' },
        { name: 'Pulses', value: 1200, label: 'Pulse Harvesters' },
        { name: 'Others', value: 500, label: 'Horticulture/Vegetables' },
      ],
      color: '#059669', // emerald 600
      desc: 'Forming direct cooperative clusters and collection centers. By coordinating collective haulage and direct-to-mill weighing, we remove regional middlemen and increase grower yields.',
      projects: ['Annadata Direct Supply Link', 'Rural Cold Storage Hubs', 'Weighing Station Digitization']
    },
    water: {
      title: 'Water & Irrigation Schemes',
      value: '85 Projects',
      chartData: [
        { name: 'Borewells', value: 30, label: 'Tube Wells' },
        { name: 'Canals', value: 25, label: 'Minor Canals' },
        { name: 'Drip Systems', value: 20, label: 'Precision Drip' },
        { name: 'Tanks', value: 10, label: 'Community Reservoirs' },
      ],
      color: '#0284c7', // sky 600
      desc: 'Building minor irrigation pipelines and high-efficiency concrete check dams to ensure double-cropping capabilities in rain-dependent districts.',
      projects: ['Concrete Check Dams', 'Precision Solar Pump Assemblies', 'Rainwater Harvest Basins']
    },
    waste: {
      title: 'Waste & Sanitation Operations',
      value: '45 Units',
      chartData: [
        { name: 'Solid Waste', value: 18, label: 'Solid Segregators' },
        { name: 'Liquid Plants', value: 12, label: 'Liquid Treatment' },
        { name: 'Biogas', value: 10, label: 'Biogas Converters' },
        { name: 'Composters', value: 5, label: 'Organic Composters' },
      ],
      color: '#d97706', // amber 600
      desc: 'Managing decentralized liquid and organic solid waste handling facilities in census towns to prevent municipal drainage overflow and support organic composting.',
      projects: ['Census Town Storm Drain Planning', 'Biogas Rural Digesters', 'Sanitary Block Deployments']
    }
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-green-50/40 to-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <section className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs block mb-2">Sustainable Communities</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Rural & Urban Development</h1>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 mt-4 text-xs md:text-sm md:text-base leading-relaxed">
            SFPL believes national development is incomplete without empowering the agricultural sector and secondary census towns. We combine solar power, cooperative supply links, and local sanitation systems to build smart, independent communities.
          </p>
        </section>

        {/* Impact Dashboard Selector & Recharts Visualizer */}
        <section className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm mb-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-slate-100 pb-6 mb-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase block">Real Impact Tracker</span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">
                Rural Development Metrics
              </h3>
              <p className="text-slate-400 text-xs">Configure the dashboard topic to query physical regional project databases.</p>
            </div>

            {/* Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setSelectedTopic('villages')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedTopic === 'villages' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                Smart Villages
              </button>
              <button 
                onClick={() => setSelectedTopic('farmers')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedTopic === 'farmers' ? 'bg-emerald-600 text-white shadow' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                Farmer Supply Chains
              </button>
              <button 
                onClick={() => setSelectedTopic('water')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedTopic === 'water' ? 'bg-sky-600 text-white shadow' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                Water Projects
              </button>
              <button 
                onClick={() => setSelectedTopic('waste')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${selectedTopic === 'waste' ? 'bg-amber-600 text-white shadow' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
              >
                Waste & Sanitation
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Chart Column */}
            <div className="lg:col-span-7 bg-slate-50 p-4 md:p-6 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Statistical Distribution</span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  {topicMetrics[selectedTopic].value} Total
                </span>
              </div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topicMetrics[selectedTopic].chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 10px -2px rgb(0 0 0 / 0.1)'}} 
                    />
                    <Bar 
                      dataKey="value" 
                      fill={topicMetrics[selectedTopic].color} 
                      radius={[4, 4, 0, 0]} 
                      barSize={40} 
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">Program Scope</span>
                <h4 className="text-lg font-bold text-slate-900 mt-1 font-serif">
                  {topicMetrics[selectedTopic].title}
                </h4>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-3">
                  {topicMetrics[selectedTopic].desc}
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-3">Associated Active Projects</span>
                <div className="space-y-2">
                  {topicMetrics[selectedTopic].projects.map((proj, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-800">
                      <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                      <span className="font-semibold">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Program Pillars Grid */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal direction="left">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                <Sun size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-base md:text-lg text-slate-900 font-serif">Smart Villages Ecosystems</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Developing self-sufficient micro-grids utilizing hybrid solar panels and clean groundwater recharge reservoirs. Each community center holds emergency storm-weather batteries to ensure zero downtime for telemetry.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0 border border-green-100">
                <Truck size={24} />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-base md:text-lg text-slate-900 font-serif">Annadata Logistics Network</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  Linking farmers directly to wholesale procurement markets. By providing transparent weighing machines and standardized sorting yards, SFPL empowers local farmers to sell wheat, rice, and pulses at audited fair-rates.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Authorized MoA Grassroots Scopes & Planned Pipelines */}
        <section className="mb-20 bg-white border border-slate-200 rounded-2xl p-6 md:p-10">
          <div className="border-b border-slate-100 pb-5 mb-8 text-left">
            <span className="text-xs font-bold text-emerald-600 tracking-widest uppercase block">MoA Sanctioned Grassroots Development</span>
            <h3 className="font-serif font-bold text-2xl text-slate-900 mt-1">Authorized Rural-Urban Scopes & Planned Pipelines</h3>
            <p className="text-slate-400 text-xs mt-1">Official rural and urban developmental infrastructure works we actively propose or execute under our statutory object clauses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Sanitation</span>
                <span className="text-[9px] text-slate-400 font-bold">Planned Q4 2026</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Decentralized Sanitary Sewage Loops</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Planning modern modular bio-toilets and localized twin-pit community sanitation systems to cover unsewered sectors of Madhya Pradesh Gram Panchayats.</p>
              <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span>PROJECT TYPE: COMMUNITY SANITATION</span>
                <span className="text-emerald-600">Proposal Ready</span>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Water Management</span>
                <span className="text-[9px] text-slate-400 font-bold">Active Design</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Deep Groundwater Recharge Wells</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Deployment of heavy borewells and integrated overhead tanks with dynamic level sensors, supplying portable, clean drinking water lines.</p>
              <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span>PROJECT TYPE: DRINKING WATER DISTRIBUTION</span>
                <span className="text-emerald-600">Survey Completed</span>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Waste Management</span>
                <span className="text-[9px] text-slate-400 font-bold">Proposal Stage</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Census Town Solid waste Segregators</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Proposing mechanical waste segregation facilities, recycling yards, and organic vermicomposting setups under public utility tenders.</p>
              <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span>PROJECT TYPE: ENVIRONMENTAL UTILITY</span>
                <span className="text-emerald-600">Bidding Authorization Active</span>
              </div>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">MoA Obj 3(a) Drainage Systems</span>
                <span className="text-[9px] text-slate-400 font-bold">Planned Q1 2027</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm md:text-base font-serif">Stormwater Drain Network contouring</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Engineering brick-lined, anti-overflow open storm channels for village roads to prevent severe water logging and soil erosion during heavy monsoons.</p>
              <div className="pt-2 border-t border-slate-200/60 flex justify-between items-center text-[10px] font-bold text-slate-400">
                <span>PROJECT TYPE: RUNOFF CONTROLLERS</span>
                <span className="text-emerald-600">Under Review</span>
              </div>
            </div>
          </div>
        </section>

        {/* SDG Compliance Board */}
        <section className="bg-corporate-900 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-lg border border-white/5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-15"></div>
          <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs text-corporate-gold font-bold uppercase tracking-widest block">United Nations Alignment</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold">Sustainable Development Commitments</h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                We align each grassroots intervention directly with UN Sustainable Development Goals: Goal 6 (Clean Water & Sanitation), Goal 7 (Affordable & Clean Energy), Goal 8 (Decent Work & Economic Growth). Our project metrics are open to state audits.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center backdrop-blur-sm max-w-xs w-full">
                <Globe className="text-corporate-gold mx-auto mb-2" size={32} />
                <span className="text-xs text-slate-300 block font-bold">Third-Party Social Auditing</span>
                <span className="text-[10px] text-slate-500 block uppercase font-bold mt-1">SGS Certified Standard</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
