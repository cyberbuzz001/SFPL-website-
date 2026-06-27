import React, { useState, useEffect } from 'react';
import { View } from './types';
import { 
  Building2, 
  Code2, 
  Sprout, 
  Home, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

// Import newly created modular views
import { HomeView } from './components/views/HomeView';
import { AboutView } from './components/views/AboutView';
import { SoftwareView } from './components/views/SoftwareView';
import { CivilView } from './components/views/CivilView';
import { RuralView } from './components/views/RuralView';
import { RealEstateView } from './components/views/RealEstateView';
import { ConsultingView } from './components/views/ConsultingView';
import { MediaView } from './components/views/MediaView';
import { DownloadsView } from './components/views/DownloadsView';
import { ContactView } from './components/views/ContactView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle Scroll Effect for Header & Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    // Initialize progress on mount / view switch
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Navigation Helper
  const navigate = (view: View) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showSolidHeader = scrolled || currentView !== View.HOME;

  const Header = () => (
    <header className={`fixed w-full z-40 transition-all duration-300 ${showSolidHeader ? 'bg-white shadow-md py-2 border-b border-slate-100' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => navigate(View.HOME)}
          className="cursor-pointer flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-corporate-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg">
            S
          </div>
          <div className={`font-serif font-bold text-xl ${showSolidHeader ? 'text-corporate-900' : 'text-white'} hidden md:block tracking-wide`}>
            SFPL<span className="text-corporate-gold">.</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <button onClick={() => navigate(View.HOME)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.HOME ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}>Home</button>
          <button onClick={() => navigate(View.ABOUT)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.ABOUT ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}>About</button>
          
          {/* Business Verticals Dropdown */}
          <div className="relative group">
            <button 
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-corporate-gold ${['SOFTWARE', 'CIVIL', 'RURAL', 'REAL_ESTATE'].includes(currentView) ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              Business Verticals <ChevronDown size={14} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-4 w-64 ${dropdownOpen ? 'block' : 'hidden group-hover:block'}`}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden py-2">
                <button onClick={() => navigate(View.SOFTWARE)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Code2 size={16}/> Software Solutions</button>
                <button onClick={() => navigate(View.CIVIL)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Building2 size={16}/> Civil Construction</button>
                <button onClick={() => navigate(View.RURAL)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Sprout size={16}/> Rural Development</button>
                <button onClick={() => navigate(View.REAL_ESTATE)} className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 hover:text-corporate-blue text-sm flex items-center gap-2"><Home size={16}/> Real Estate</button>
              </div>
            </div>
          </div>

          <button onClick={() => navigate(View.CONSULTING)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.CONSULTING ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}>Consulting</button>
          <button onClick={() => navigate(View.MEDIA)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.MEDIA ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}>Media</button>
          <button onClick={() => navigate(View.DOWNLOADS)} className={`text-sm font-medium transition-colors hover:text-corporate-gold ${currentView === View.DOWNLOADS ? 'text-corporate-gold' : showSolidHeader ? 'text-slate-700' : 'text-slate-100'}`}>Downloads</button>

          <button 
            onClick={() => navigate(View.CONTACT)}
            className="bg-corporate-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-600 transition-all shadow-lg hover:shadow-xl ml-4"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden ${showSolidHeader ? 'text-corporate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-2 flex flex-col lg:hidden animate-fade-in-down h-[90vh] overflow-y-auto">
          {[
            { label: 'Home', view: View.HOME },
            { label: 'About Company', view: View.ABOUT },
            { label: 'Software Solutions', view: View.SOFTWARE },
            { label: 'Civil Infrastructure', view: View.CIVIL },
            { label: 'Rural Development', view: View.RURAL },
            { label: 'Real Estate', view: View.REAL_ESTATE },
            { label: 'Consulting & Advisory', view: View.CONSULTING },
            { label: 'Media & Insights', view: View.MEDIA },
            { label: 'Downloads', view: View.DOWNLOADS },
            { label: 'Contact Support', view: View.CONTACT },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.view)}
              className="px-8 py-4 text-left text-slate-700 font-medium hover:bg-slate-50 hover:text-corporate-blue border-b border-slate-50 last:border-0"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );

  const renderView = () => {
    switch (currentView) {
      case View.HOME: return <HomeView navigate={navigate} />;
      case View.ABOUT: return <AboutView />;
      case View.SOFTWARE: return <SoftwareView />;
      case View.CIVIL: return <CivilView />;
      case View.RURAL: return <RuralView />;
      case View.REAL_ESTATE: return <RealEstateView />;
      case View.CONSULTING: return <ConsultingView />;
      case View.MEDIA: return <MediaView />;
      case View.DOWNLOADS: return <DownloadsView />;
      case View.CONTACT: return <ContactView />;
      default: return <HomeView navigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-100/30 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-corporate-gold to-amber-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <Header />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer navigate={navigate} />
      <ChatBot />
    </div>
  );
};

export default App;
