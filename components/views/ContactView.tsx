import React, { useState } from 'react';
import { 
  Briefcase, 
  Globe, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Loader2, 
  ChevronDown, 
  HelpCircle,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { ScrollReveal } from '../ScrollReveal';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const branches = [
    { city: 'Registered HQ (Sagar, MP)', address: 'No 284, Neha Nagar, Makroniya, Sagar, Madhya Pradesh - 470004', phone: '+91 8602467804' },
    { city: 'Bhopal Regional Hub', address: 'Plot 12, Arera Colony Main Corridor, Bhopal, MP, 462016', phone: '+91 755 456 7890' },
    { city: 'New Delhi Liaison Office', address: '123 Corporate Park, Financial District, New Delhi, 110001', phone: '+91 11 2345 6789' }
  ];

  const faqs = [
    {
      q: 'Does SFPL accept Joint Venture (JV) bids for government infrastructure tenders?',
      a: 'Yes. Our civil infrastructure division possesses Class-A PWD registration, owned machinery assets, and audited balance sheets. We actively collaborate with qualified tech partners or land owners to qualify for large-scale state contracts.'
    },
    {
      q: 'Are your software products fully customizable or strictly off-the-shelf?',
      a: 'Our CRM solutions, call center voice suites, and custom Android OS images are fully modular. During technical onboarding, our engineering team customizes API connections, databases, and reporting features matching your business processes.'
    },
    {
      q: 'How does SFPL guarantee that land parcels listed in the Real Estate catalog are litigation-free?',
      a: 'We operate under a rigid legal framework. Prior to listing any property or facilitating acquisitions, our legal consultants run comprehensive title verification searches, trace registration deeds back 30 years, and confirm zero active court encumbrances.'
    },
    {
      q: 'How can small-scale farming cooperatives partner with your Rural Development division?',
      a: 'Farming groups can connect with our Agrarian Support Centers. We provide direct sorting-yard logistics, digitized weighing accuracy, and straight-to-distributor links, helping remove middlemen to maximize grower margins.'
    }
  ];

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
      <div className="container mx-auto px-6 md:px-8">
        
        {/* Contact Block Grid */}
        <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden mb-20 border border-slate-200/60">
          <div className="grid md:grid-cols-2">
            
            {/* Left: Contact Info */}
            <div className="p-8 md:p-12 bg-corporate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Get in Touch</h2>
                <p className="text-slate-300 text-xs md:text-sm mb-10 leading-relaxed font-light">
                  Ready to optimize your software workflow, partner on state construction bids, or secure prime land parcels? Fill out our form and our administrative desk will assign your lead to the appropriate director.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-corporate-gold">
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Working Hours</h4>
                      <p className="text-xs text-slate-400">Mon - Sat: 10:00 AM - 7:00 PM (IST)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-corporate-gold">
                      <Globe size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Registered HQ</h4>
                      <p className="text-xs text-slate-400">No 284, Neha Nagar, Makroniya, Sagar, Madhya Pradesh - 470004</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center shrink-0 border border-white/10 text-corporate-gold">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm md:text-base">Administrative Helpdesk</h4>
                      <p className="text-xs text-slate-400">+91 8602467804<br />info@shreesvarn.com / nikhilkushwaha8022@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                SFPL Support Desk • Class-A Registered Partner
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="p-8 md:p-12">
              {success ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-200">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">Message Transmitted!</h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-8 max-w-xs">
                    Your inquiry has been successfully parsed and routed. An SFPL executive officer will review your request and call back within 24 business hours.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="text-corporate-blue font-bold hover:underline flex items-center gap-1.5 text-xs uppercase tracking-wider"
                  >
                    Transmit Another Inquiry <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 font-serif">Submit Operational Inquiry</h3>
                    <p className="text-slate-400 text-xs mt-1">Please specify your department of interest below.</p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all" 
                          placeholder="+91 9876543210" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all" 
                        placeholder="john@company.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Department Interest</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all"
                      >
                        <option>General Corporate Inquiry</option>
                        <option>Software Licensing & Distribution</option>
                        <option>Civil Construction & Tenders</option>
                        <option>Real Estate & Land Acquisition</option>
                        <option>Rural & Urban Development Collaboration</option>
                        <option>Detailed Project Reports (DPR) Consulting</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-1">Inquiry Statement</label>
                      <textarea 
                        required
                        rows={4} 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:ring-2 focus:ring-corporate-blue focus:outline-none focus:bg-white transition-all" 
                        placeholder="Describe your project, bid target, or software scale..."
                      ></textarea>
                    </div>
                    <button 
                      disabled={submitting}
                      className="w-full bg-corporate-blue text-white font-bold py-3.5 rounded-lg hover:bg-blue-800 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-xs uppercase tracking-wider"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Verifying Form...
                        </>
                      ) : (
                        <>
                          Transmit Inquiry <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* Branch Offices Information Cards */}
        <section className="max-w-5xl mx-auto mb-20 space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-bold text-corporate-blue tracking-widest uppercase block">Our Coordinates</span>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900 mt-1">Operational Branch Offices</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {branches.map((branch, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3 text-left">
                <div className="flex items-center gap-2 text-corporate-gold font-bold text-sm">
                  <MapPin size={16} />
                  <span>{branch.city}</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{branch.address}</p>
                <div className="flex items-center gap-1.5 text-slate-400 text-xs border-t border-slate-100 pt-3">
                  <Phone size={12} className="text-corporate-blue" />
                  <span>{branch.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Accordion Accordion */}
        <section className="max-w-4xl mx-auto border-t border-slate-200/60 pt-16">
          <div className="text-center mb-12">
            <HelpCircle className="mx-auto text-corporate-gold mb-3" size={32} />
            <h3 className="text-2xl font-serif font-bold text-slate-900">Frequently Asked Inquiries</h3>
            <p className="text-slate-400 text-xs mt-1">Quick answers to common corporate, billing, and collaboration queries.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg border border-slate-200/80 shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-bold text-xs md:text-sm text-slate-800 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={16} 
                    className={`text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} 
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
