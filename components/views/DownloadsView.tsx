import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  FileCheck, 
  Mail, 
  ArrowRight, 
  Lock, 
  CheckCircle2,
  Users,
  X
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const DownloadsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Requester form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    docNeeded: 'SFPL Detailed Audited Compliance Pack (Tender-Grade)',
    reason: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const files = [
    { name: 'SFPL Corporate Profile 2026', desc: 'Overview of board members, diversified sector listings, and strategic capital milestones.', size: '2.4 MB', type: 'PDF' },
    { name: 'Detailed Software Licensing Brochure', desc: 'Full product sheets for Enterprise CRM, custom Voice Call Center systems, and custom Android operating assemblies.', size: '4.8 MB', type: 'PDF' },
    { name: 'Heavy Civil Machinery Fleet Directory', desc: 'Technical specifications, registration indices, and capacity details of excavators, batching plants, and roll pavers.', size: '1.5 MB', type: 'PDF' },
    { name: 'Rural Impact Program Statistics Pack', desc: 'Consolidated audits of groundwater irrigation loops, village digital kiosks, and farmer cooperative yields.', size: '3.1 MB', type: 'PDF' }
  ];

  const filteredFiles = files.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Restricted document requested:", formData);
    setSubmitted(true);
  };

  const [toast, setToast] = useState<{ message: string; show: boolean; progress: number } | null>(null);

  const handleFakeDownload = (fileName: string) => {
    // Simulated elegant compilation and download process
    setToast({ message: `Compiling and preparing: ${fileName}...`, show: true, progress: 10 });
    
    // Simulate compilation steps
    const interval = setInterval(() => {
      setToast(prev => {
        if (!prev) return null;
        if (prev.progress >= 100) {
          clearInterval(interval);
          // Auto close toast after 3 seconds when completed
          setTimeout(() => {
            setToast(current => current ? { ...current, show: false } : null);
          }, 3000);
          return { message: `Successfully compiled and downloaded: ${fileName}!`, show: true, progress: 100 };
        }
        return { ...prev, progress: prev.progress + 30 };
      });
    }, 400);
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Title */}
        <section className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-corporate-blue font-bold uppercase tracking-wider text-xs block mb-2">Resource Library</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mt-2">Download Center</h1>
          <div className="w-16 h-1 bg-corporate-blue mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-500 mt-4 text-xs md:text-sm leading-relaxed">
            Access certified company profiles, technical specifications, compliance reports, and sector-wise service brochures compiled by SFPL.
          </p>
        </section>

        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Files Directory with Search */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200/60 pb-4">
              <h3 className="text-lg font-bold font-serif text-slate-900">Public Document Directory</h3>
              <span className="text-xs bg-blue-100 text-corporate-blue px-2.5 py-1 rounded font-bold">
                {filteredFiles.length} Available
              </span>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search brochures, compliance files, capabilities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-corporate-blue text-xs md:text-sm shadow-sm transition-all"
              />
            </div>

            {/* Files List */}
            {filteredFiles.length > 0 ? (
              <div className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden divide-y divide-slate-100">
                {filteredFiles.map((file, i) => (
                  <div key={i} className="p-5 hover:bg-slate-50/50 transition-colors flex justify-between items-center gap-4">
                    <div className="space-y-1 text-left">
                      <h4 className="font-bold text-xs md:text-sm text-slate-800">{file.name}</h4>
                      <p className="text-slate-400 text-[10px] md:text-xs leading-relaxed max-w-md">{file.desc}</p>
                      <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {file.type} • {file.size}
                      </span>
                    </div>
                    <button 
                      onClick={() => handleFakeDownload(file.name)}
                      className="p-3 bg-slate-100 text-corporate-blue rounded-xl hover:bg-corporate-blue hover:text-white transition-colors"
                      title="Download File"
                    >
                      <Download size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 text-center rounded-xl border border-dashed border-slate-300">
                <FileText className="mx-auto mb-4 text-slate-300" size={32} />
                <p className="text-slate-500 font-bold text-xs">No matching documents found.</p>
                <p className="text-[10px] text-slate-400 mt-1">Please try searching with broader key terms or download our complete Corporate Profile.</p>
              </div>
            )}
          </div>

          {/* Right Column: Secure Document Request Form */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="text-corporate-gold shrink-0 animate-pulse" size={18} />
              <h3 className="font-bold text-base text-slate-900 font-serif">Restricted Tender Documents</h3>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mb-6">
              Access to audited legal compliance binders, state contractor licenses, and financial security guarantees requires verification of credentials. Submit a request to receive secure portals.
            </p>

            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Request Submitted Successfully!</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed max-w-xs mx-auto">
                  Our compliance officer will verify your email domain (<span className="font-bold text-corporate-blue">{formData.email}</span>) and forward the requested tender audit files within 2 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-corporate-blue font-bold hover:underline"
                >
                  Request Another File
                </button>
              </div>
            ) : (
              <form onSubmit={handleRequestSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Corporate Name / Title</label>
                  <input 
                    required
                    type="text" 
                    placeholder="E.g. NHAI Joint Auditor / Bid Board"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Official Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="E.g. auditor@board.gov.in"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Required Dossier Pack</label>
                  <select 
                    value={formData.docNeeded}
                    onChange={(e) => setFormData({...formData, docNeeded: e.target.value})}
                    className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                  >
                    <option>SFPL Detailed Audited Compliance Pack (Tender-Grade)</option>
                    <option>State Class-A Contractor Licensing Verification Certificates</option>
                    <option>3-Year Audited Financial Statements & Profit/Loss Ledgers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Statement of Bidding Purpose</label>
                  <textarea 
                    required
                    rows={3} 
                    placeholder="State tender serial ID or joint-venture feasibility requirements..."
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-corporate-900 text-white font-bold py-3 rounded-lg text-xs hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  Verify Credentials & Request <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>

      {toast && toast.show && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-white rounded-xl shadow-2xl border border-slate-200/80 p-4 flex gap-3 items-center animate-fade-in-up transition-all">
          <div className="p-2.5 bg-blue-50 text-corporate-blue rounded-lg">
            <Download size={20} className={toast.progress < 100 ? "animate-bounce" : ""} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-slate-800 truncate">{toast.message}</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div 
                className="bg-corporate-gold h-full transition-all duration-300"
                style={{ width: `${toast.progress}%` }}
              />
            </div>
          </div>
          <button 
            onClick={() => setToast(current => current ? { ...current, show: false } : null)}
            className="text-slate-400 hover:text-slate-600 self-start p-1"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
