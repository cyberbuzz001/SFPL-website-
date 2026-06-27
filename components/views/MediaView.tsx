import React, { useState } from 'react';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  X, 
  BookOpen, 
  Newspaper,
  Tag
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const MediaView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'press' | 'insights'>('all');
  const [activeArticleId, setActiveArticleId] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      category: 'press',
      categoryLabel: 'Press Release',
      title: 'SFPL Partners with State Units for Smart Village Water Infrastructure',
      date: 'March 15, 2026',
      author: 'Corporate Relations',
      summary: 'Establishing clean groundwater treatment loops, borewell monitors, and direct solar microgrids in 45 designated developmental blocks.',
      content: `SHREESVARN FINNOVOTION PRIVATE LIMITED (SFPL) is proud to announce a comprehensive engineering partnership with regional development units to overhaul local agricultural irrigation water networks. 

Under the direct supervision of our CEO, Pranav Sing Kushwaha, the civil and rural divisions will coordinate resources to design and construct robust concrete check dams, laying minor flow-canals, and installing solar pump arrays. 

"Our focus is providing 100% telemetry verification on borewell water discharge rates, assuring the rural community receives dual-cropping potential in dry seasons," stated Pranav Sing Kushwaha during the project signing ceremony. This initiative represents a milestone in SFPL's social development timeline.`,
      image: 'https://picsum.photos/600/400?random=61'
    },
    {
      id: 2,
      category: 'insights',
      categoryLabel: 'Industry Insight',
      title: 'Modernizing Public Bidding Compliance Systems via Digital Warehouses',
      date: 'February 22, 2026',
      author: 'Nikhil Kushwaha',
      summary: 'How transitioning physical state registries into secure, cloud-hosted relational databases simplifies tender qualifying assessments.',
      content: `The modern landscape of public infrastructure procurement demands extreme transparency. In this white paper, SFPL Founder Nikhil Kushwaha explores methods to accelerate government technical bid audits. 

By utilizing hardened custom operating systems and secure relational databases, contracting authorities can audit contractor licenses, MSME certificates, and physical machinery registry files in minutes instead of weeks. 

SFPL’s own software division has successfully prototyped secure ledger tools designed for stock compliance audits, showcasing the de-risking power of modern systems architecture in public utilities administration.`,
      image: 'https://picsum.photos/600/400?random=62'
    },
    {
      id: 3,
      category: 'press',
      categoryLabel: 'Press Release',
      title: 'SFPL Software Division Announces OEM Licensing Program Expansion',
      date: 'January 10, 2026',
      author: 'Media Hub',
      summary: 'Authorized distribution of enterprise CRM suites, secure mobile OS assemblies, and stock advisory workspaces launched.',
      content: `In a strategic expansion of our technology operations, Shreesvarn Finnovotion Private Limited (SFPL) has initiated an direct licensing distribution platform for corporate users. 

This program covers high-availability cloud CRM configurations, unified omnichannel support telephony solutions, and specialized Custom Android OS builds built for field operations. 

By coordinating licensing, setup activations, and staff onboarding directly with clients, SFPL ensures corporate clients retain 99.9% uptime compliance while de-risking user management pipelines. Contact our software sales unit for detailed quotes.`,
      image: 'https://picsum.photos/600/400?random=63'
    }
  ];

  const filteredArticles = activeTab === 'all' 
    ? articles 
    : articles.filter(a => a.category === activeTab);

  const selectedArticle = articles.find(a => a.id === activeArticleId);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Title */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-corporate-gold font-bold uppercase tracking-wider text-xs block mb-2">Newsroom</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Media & Insights</h1>
          <div className="w-16 h-1 bg-corporate-gold mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-4 text-xs md:text-sm leading-relaxed">
            Stay updated with recent press releases, technological white papers, and corporate achievements from Shreesvarn Finnovotion Private Limited.
          </p>
        </section>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeTab === 'all' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              All News
            </button>
            <button
              onClick={() => setActiveTab('press')}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeTab === 'press' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Press Releases
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`px-4 py-2 rounded text-xs font-bold transition-all ${activeTab === 'insights' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
            >
              Insights & Whitepapers
            </button>
          </div>
        </div>

        {/* Articles Feed */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 100} direction="up">
              <div className="bg-slate-50 rounded-xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md hover:border-corporate-gold/30 transition-all flex flex-col h-full justify-between">
                <div>
                  <div className="h-48 overflow-hidden bg-slate-200">
                    <img 
                      referrerPolicy="no-referrer"
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-corporate-gold font-bold text-[10px] uppercase tracking-wider">
                      <Tag size={12} />
                      {article.categoryLabel}
                    </div>
                    <h3 className="font-bold text-base md:text-lg text-slate-900 font-serif leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-slate-200/60 bg-white flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <button 
                    onClick={() => setActiveArticleId(article.id)}
                    className="font-extrabold text-corporate-blue hover:text-blue-800 flex items-center gap-1 uppercase tracking-wider text-[11px]"
                  >
                    Read Story <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Article Modal */}
        {activeArticleId !== null && selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 shadow-2xl flex flex-col">
              
              {/* Modal Header */}
              <div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                  <Newspaper className="text-corporate-gold" size={18} />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    SFPL Publication • {selectedArticle.categoryLabel}
                  </span>
                </div>
                <button 
                  onClick={() => setActiveArticleId(null)}
                  className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold font-serif text-slate-900 leading-snug">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={12}/> {selectedArticle.date}</span>
                    <span className="flex items-center gap-1"><User size={12}/> By {selectedArticle.author}</span>
                  </div>
                </div>

                <div className="h-64 rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    referrerPolicy="no-referrer"
                    src={selectedArticle.image} 
                    alt={selectedArticle.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>

                <div className="whitespace-pre-line text-slate-600 text-xs md:text-sm leading-relaxed font-light">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button 
                  onClick={() => setActiveArticleId(null)}
                  className="px-5 py-2 bg-slate-200 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Close Publication
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
