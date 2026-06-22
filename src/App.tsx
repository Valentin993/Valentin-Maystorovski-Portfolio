/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ViewState } from './types';
import { ArrowUp } from 'lucide-react';
import TopNavBar from './components/TopNavBar';
import HomeView from './components/HomeView';
import CaseStudyView from './components/CaseStudyView';
import ContactView from './components/ContactView';
import Footer from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<ViewState>('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to top scroll execution helper
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Multi-view routing handler with structural anchor scrolling support
  const handleViewChange = (view: ViewState, sectionId?: string) => {
    setActiveView(view);
    
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e5e2e1] flex flex-col selection:bg-primary/30 antialiased overflow-x-hidden">
      {/* Premium Glassmorphism Navigation Bar */}
      <TopNavBar activeView={activeView} onViewChange={handleViewChange} />

      {/* Main Container Viewport switching */}
      <main className="flex-grow w-full">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <HomeView onViewChange={(view, sectionId) => handleViewChange(view, sectionId)} />
            </motion.div>
          )}
          
          {activeView === 'iron-and-ember' && (
            <motion.div
              key="iron-and-ember"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <CaseStudyView
                projectKey="iron-and-ember"
                onBack={(view, sectionId) => handleViewChange(view, sectionId)}
              />
            </motion.div>
          )}

          {activeView === 'rare-void' && (
            <motion.div
              key="rare-void"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <CaseStudyView
                projectKey="rare-void"
                onBack={(view, sectionId) => handleViewChange(view, sectionId)}
              />
            </motion.div>
          )}

          {activeView === 'spectrum' && (
            <motion.div
              key="spectrum"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <CaseStudyView
                projectKey="spectrum"
                onBack={(view, sectionId) => handleViewChange(view, sectionId)}
              />
            </motion.div>
          )}

          {activeView === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <ContactView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Structured Studio Footplate */}
      <Footer />

      {/* Interactive Floating Back to Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top-button"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#131313]/90 backdrop-blur-md border border-white/10 hover:border-[#c9c6c5] text-[#e5e2e1] hover:text-[#c9c6c5] flex items-center justify-center rounded transition-colors duration-300 shadow-2xl cursor-pointer"
            aria-label="Scroll back to top"
            id="floating-back-to-top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

