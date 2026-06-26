import React from 'react';
import { View } from '../types';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, ArrowRight, FileText, Download } from 'lucide-react';

interface FooterProps {
  navigate: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-corporate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-white mb-4">
              SFPL<span className="text-corporate-gold">.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              SHREESVARN FINNOVOTION PRIVATE LIMITED is a premier multi-sector conglomerate driving growth in infrastructure, technology, rural development, and strategic consulting across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-corporate-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-corporate-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-corporate-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Corporate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate(View.ABOUT)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <ArrowRight size={14} /> About Company
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.CONSULTING)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <ArrowRight size={14} /> Consulting & Advisory
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.MEDIA)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <ArrowRight size={14} /> Media & Insights
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.DOWNLOADS)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <ArrowRight size={14} /> Download Center
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.CONTACT)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <ArrowRight size={14} /> Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Our Verticals</h3>
             <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate(View.SOFTWARE)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full"></div> Software Solutions
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.CIVIL)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full"></div> Civil Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.RURAL)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full"></div> Rural Development
                </button>
              </li>
              <li>
                <button onClick={() => navigate(View.REAL_ESTATE)} className="hover:text-corporate-gold flex items-center gap-2 transition-colors">
                  <div className="w-1.5 h-1.5 bg-corporate-gold rounded-full"></div> Real Estate
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Headquarters</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-corporate-gold mt-1 shrink-0" />
                <p>123 Corporate Park, Financial District, New Delhi, India 110001</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-corporate-gold shrink-0" />
                <p>+91 11 2345 6789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-corporate-gold shrink-0" />
                <p>info@shreesvarn.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shreesvarn Finnovotion Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};