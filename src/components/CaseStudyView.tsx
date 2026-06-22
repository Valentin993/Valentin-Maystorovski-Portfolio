import { useEffect } from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../data';
import { ViewState } from '../types';
import { ArrowLeft, ArrowUpRight, Aperture, BookOpen, Fingerprint } from 'lucide-react';

interface CaseStudyViewProps {
  projectKey: string;
  onBack: (view: ViewState, sectionId?: string) => void;
}

export default function CaseStudyView({ projectKey, onBack }: CaseStudyViewProps) {
  const caseStudy = CASE_STUDIES[projectKey];

  useEffect(() => {
    // Scroll to top automatically when case study is opened
    window.scrollTo(0, 0);
  }, [projectKey]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-[#e5e2e1] px-6">
        <h2 className="font-display text-2xl mb-4">Case study not found.</h2>
        <button
          onClick={() => onBack('home')}
          className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-[#c9c6c5] cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Home
        </button>
      </div>
    );
  }

  // Render quotes with custom italic highlights to match design
  const renderQuote = () => {
    if (caseStudy.id === 'iron-and-ember') {
      return (
        <span>
          "We don't just build burgers; we build environments where{' '}
          <span className="italic text-[#a1a1aa] font-medium font-serif underline decoration-white/10 decoration-wavy underline-offset-8">fire becomes</span> the main architect."
        </span>
      );
    }
    if (caseStudy.id === 'rare-void') {
      return (
        <span>
          "We design for the concrete landscape. Rejecting superfluous detail in favor of raw{' '}
          <span className="italic text-[#a1a1aa] font-medium font-serif underline decoration-white/10 underline-offset-8">structural integrity</span>."
        </span>
      );
    }
    // Spectrum
    return (
      <span>
        "Creating a space where light becomes the{' '}
        <span className="italic text-[#a1a1aa] font-medium font-serif underline decoration-white/10 decoration-wavy underline-offset-8 font-light">main ingredient</span>."
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-[#0a0a0a]"
    >
      {/* Immersive Hero Header */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={`${caseStudy.title} Industrial Hero`}
            className="w-full h-full object-cover grayscale brightness-[0.4] scale-105"
            src={caseStudy.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-6 md:px-20 pb-20 max-w-7xl mx-auto w-full">
          <button
            onClick={() => onBack('home', 'projects-section')}
            className="group flex items-center gap-2 font-sans text-xs tracking-widest text-[#c9c6c5] uppercase mb-8 cursor-pointer hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to projects
          </button>
          
          <div className="max-w-4xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[#c9c6c5] mb-4">
              {caseStudy.heroCategory}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight text-[#e5e2e1] mb-6 leading-none">
              {caseStudy.title}
            </h1>
            <p className="font-sans text-[15px] sm:text-lg text-[#a1a1aa] font-light leading-relaxed max-w-2xl">
              {caseStudy.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables & Overview Narrative Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/5">
        <div className="md:col-span-4">
          <h3 className="font-sans text-xs font-semibold text-[#a1a1aa] mb-8 border-b border-white/10 pb-4 uppercase tracking-widest">
            Deliverables
          </h3>
          <ul className="font-sans text-[15px] text-[#e5e2e1] space-y-3 font-light">
            {caseStudy.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#c9c6c5] rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-start-6 md:col-span-7">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-8 italic text-[#e5e2e1]">
            {caseStudy.headline}
          </h2>
          <p className="font-sans text-base text-[#a1a1aa] leading-relaxed mb-8 font-light">
            {caseStudy.narrative}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-white/5 text-[#e5e2e1] font-sans text-[10px] uppercase font-semibold tracking-widest rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Showcase (Big Mockup/Poster Page) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-12 group overflow-hidden relative rounded-lg border border-white/5 bg-[#131313]">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <img
                alt={`${caseStudy.title} Brand Collateral`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102 filter grayscale hover:grayscale-0 duration-700"
                src={caseStudy.showcaseImage}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <a
                href={caseStudy.showcaseLabelUrl}
                target={caseStudy.showcaseLabelUrl.startsWith('http') ? '_blank' : undefined}
                rel={caseStudy.showcaseLabelUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="absolute bottom-8 right-8 z-10 bg-[#e5e2e1] text-[#131313] hover:bg-[#c9c6c5] font-sans text-xs font-semibold px-6 py-3.5 uppercase tracking-widest transition-all duration-300 rounded flex items-center gap-2 group/btn cursor-pointer shadow-lg active:scale-95"
              >
                VIEW WEBPAGE
                <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-baseline gap-4 border-b border-white/5 pb-4 px-2">
              <span className="font-sans text-xs font-semibold text-[#a1a1aa] uppercase tracking-widest">
                BRANDING SYNTHESIS
              </span>
              <span className="font-sans text-sm text-[#a1a1aa] italic font-light">
                {caseStudy.showcaseSubtitle}
              </span>
            </div>
          </div>

          {/* Design Philosophy Spotlight (Asymmetric Split Cards) */}
          <div className="md:col-span-6 mt-12">
            <div className="aspect-square bg-[#131313] border border-white/5 rounded-lg flex flex-col justify-center p-10 md:p-14">
              <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest mb-6 block">
                Design Philosophy
              </span>
              <h4 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-[#e5e2e1]">
                {caseStudy.philosophyTitle}
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#a1a1aa] leading-relaxed max-w-md font-light">
                {caseStudy.philosophyText}
              </p>
            </div>
          </div>

          <div className="md:col-span-6 mt-12 rounded-lg overflow-hidden border border-white/5 relative bg-[#131313]">
            <div className="aspect-square relative group">
              <img
                alt={`${caseStudy.title} Close-up Detail`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-102"
                src={caseStudy.philosophyImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Quote Section (Highly Serif, Minimal Backdrop) */}
      <section className="py-28 bg-[#131313] border-y border-white/5">
        <div className="px-6 md:px-20 max-w-5xl mx-auto text-center">
          <span className="text-[#a1a1aa] inline-block mb-6 tracking-widest uppercase text-xs font-semibold">
            {caseStudy.id === 'iron-and-ember' ? <Aperture className="animate-spin" size={24} /> : caseStudy.id === 'rare-void' ? <Fingerprint size={24} /> : <BookOpen size={24} />}
          </span>
          <blockquote className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#e5e2e1] leading-[1.2] tracking-tight max-w-4xl mx-auto">
            {renderQuote()}
          </blockquote>
          {caseStudy.quoteAuthor && (
            <p className="mt-8 font-sans text-xs tracking-widest uppercase text-[#c9c6c5] font-semibold">
              — {caseStudy.quoteAuthor}
            </p>
          )}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudy.gallery.map((item, idx) => (
            <div key={idx} className="group rounded-lg overflow-hidden border border-white/5 bg-[#131313] p-2">
              <div className="aspect-[4/5] overflow-hidden rounded mb-6 grayscale hover:grayscale-0 duration-500 transition-all">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover"
                  src={item.imageSrc}
                />
              </div>
              <h4 className="font-sans text-xs font-semibold text-[#e5e2e1] uppercase tracking-widest">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[#a1a1aa] mt-2 font-light">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Case Studies trigger */}
      <section className="py-20 text-center border-t border-white/5">
        <p className="font-sans text-xs font-semibold text-[#a1a1aa] tracking-widest uppercase mb-4">
          Finished viewing this study?
        </p>
        <button
          onClick={() => onBack('home', 'projects-section')}
          className="bg-white text-black font-sans text-xs font-semibold tracking-widest uppercase px-12 py-5 rounded hover:bg-[#c9c6c5] transition-colors cursor-pointer active:scale-95 duration-200"
        >
          Explore other projects
        </button>
      </section>
    </motion.div>
  );
}
