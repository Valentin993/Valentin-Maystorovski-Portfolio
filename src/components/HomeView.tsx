import { motion } from 'motion/react';
import { serviceIconMap } from './IconMapper';
import { ViewState } from '../types';
import { PROJECT_TEASERS, SERVICE_ITEMS, DESIGN_SKILLS, TECH_STACK } from '../data';
import { ArrowRight } from 'lucide-react';

interface HomeViewProps {
  onViewChange: (view: ViewState, sectionId?: string) => void;
}

export default function HomeView({ onViewChange }: HomeViewProps) {
  // Animation transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto overflow-hidden" id="home-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            className="lg:col-span-7 z-10"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-[#1c1b1b] text-[#c9c6c5] font-sans text-xs tracking-widest uppercase font-semibold rounded">
                Berlin, Germany
              </span>
              <span className="px-4 py-1.5 bg-[#1c1b1b] text-[#a1a1aa] font-sans text-xs tracking-widest uppercase font-semibold rounded">
                UX/UI Design
              </span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-[1.05] tracking-tight text-[#e5e2e1]">
              Designing digital experiences that connect{' '}
              <span className="text-[#52525b] relative font-light outline-text">brands</span> and{' '}
              <span className="text-[#c9c6c5] italic font-normal">people.</span>
            </h1>
            
            <p className="font-sans text-base sm:text-lg text-[#a1a1aa] font-light max-w-xl mb-12 leading-relaxed">
              I'm Valentin Maystorovski—a multidisciplinary designer and developer based in Berlin. 
              I bridge the gap between complex strategy and elegant execution to build digital products 
              that feel instinctive and look inevitable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onViewChange('home', 'projects-section')}
                className="bg-[#c9c6c5] text-[#1c1b1b] font-sans text-xs font-semibold tracking-widest px-12 py-5 uppercase text-center hover:bg-[#e5e2e1] active:scale-95 transition-all duration-300 rounded cursor-pointer"
              >
                View Projects
              </button>
              <button
                onClick={() => onViewChange('contact')}
                className="border border-[#52525b] text-[#e5e2e1] font-sans text-xs font-semibold tracking-widest px-12 py-5 uppercase text-center hover:bg-white/5 active:scale-95 transition-all duration-300 rounded cursor-pointer"
              >
                Let's Work Together
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square md:h-[600px] overflow-hidden rounded-lg group border border-white/5 bg-[#131313]">
              <img
                alt="Valentin Maystorovski Portfolio Key Visual"
                className="w-full h-full object-cover grayscale contrast-[1.1] hover:contrast-100 transition-all duration-1000 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGK6lavI4el8hXLRg4r2jh0T_rr1Cz72fsSKVCm5ov_eCOX5ZhGgJ7hnoaRDgG58lJCNDNtaZdbU6gU08-mOiopaNXOsNtD0GtdVZC5ho1wFbS7pzkH40nCvS2ku_FCgfuUB1TVTRLXSn8q7n0giKLfcO0-djlpvOA1zSQ2UWHAb3TuHwO-LCftUJokrrTo_CiHmXHI5tKq8JC-2-mxjPp2zwf-sNztMQwSNox4zC8TMFFyKcN39jLACqSkTKD5ZwCzSnysAO8hVrr"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-40"></div>
            </div>
            
            {/* Abstract ambient visual lines */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/5 rounded-full pointer-events-none"></div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 opacity-40">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-medium text-[#e5e2e1]">Scroll</span>
          <div className="w-[1px] h-12 bg-[#e5e2e1] origin-top animate-bounce"></div>
        </div>
      </section>

      {/* Services / Expertise */}
      <section className="py-24 bg-[#0e0e0e]" id="services-section">
        <div className="px-6 md:px-20 max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest block mb-4">
                Core Expertise
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#e5e2e1] leading-tight tracking-tight">
                Building foundations for modern digital ventures.
              </h2>
            </div>
            <p className="font-sans text-[14px] text-[#a1a1aa] max-w-xs leading-relaxed">
              Every project is approached with a balance of technical rigour and artistic intuition.
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {SERVICE_ITEMS.map((service, index) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-10 border border-white/5 bg-[#131313] hover:bg-[#1a1a1a] transition-all duration-300 rounded group flex flex-col relative"
                >
                  <div className="p-3 bg-white/5 rounded w-fit mb-8 text-[#c9c6c5] group-hover:text-white transition-colors duration-300">
                    {Icon ? <Icon size={24} /> : null}
                  </div>
                  <h3 className="font-sans text-lg font-medium text-[#e5e2e1] mb-4 group-hover:text-[#c9c6c5] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#a1a1aa] leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto scroll-mt-24" id="projects-section">
        <div className="flex justify-between items-baseline mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-[#e5e2e1]">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-28 gap-x-8">
          {/* Project 1 (Full Bleed) */}
          <div className="md:col-span-12 group cursor-pointer" onClick={() => onViewChange('rare-void')}>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-8 rounded-lg border border-white/5 bg-[#131313]">
              <img
                alt="Rare Void project teaser image"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-[1.1]"
                src={PROJECT_TEASERS[0].imageSrc}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between items-start gap-6">
              <div className="max-w-xl">
                <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest mb-3 block">
                  {PROJECT_TEASERS[0].category}
                </span>
                <h3 className="font-display text-3xl font-semibold text-[#e5e2e1] group-hover:italic transition-all duration-300">
                  {PROJECT_TEASERS[0].title}
                </h3>
                <p className="font-sans text-sm text-[#a1a1aa] mt-2 leading-relaxed">
                  {PROJECT_TEASERS[0].description}
                </p>
              </div>
              <button className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest py-2 border-b border-white/20 hover:border-[#c9c6c5] hover:text-[#c9c6c5] text-[#e5e2e1] transition-all whitespace-nowrap cursor-pointer">
                View Project <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Project 2 (Asymmetric Grid - 7 Columns) */}
          <div className="md:col-span-7 group cursor-pointer mt-10 md:mt-20" onClick={() => onViewChange('spectrum')}>
            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-lg border border-white/5 bg-[#131313]">
              <img
                alt="Spectrum project teaser image"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-[1.1]"
                src={PROJECT_TEASERS[1].imageSrc}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            
            <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest mb-3 block">
              {PROJECT_TEASERS[1].category}
            </span>
            <h3 className="font-display text-3xl font-semibold text-[#e5e2e1] group-hover:italic transition-all duration-300">
              {PROJECT_TEASERS[1].title}
            </h3>
            <p className="font-sans text-sm text-[#a1a1aa] mt-2 max-w-md leading-relaxed">
              {PROJECT_TEASERS[1].description}
            </p>
            <button className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest py-2 border-b border-white/20 hover:border-[#c9c6c5] hover:text-[#c9c6c5] text-[#e5e2e1] transition-all whitespace-nowrap mt-6 cursor-pointer">
              View Project <ArrowRight size={14} />
            </button>
          </div>

          {/* Project 3 (Asymmetric Grid - 5 Columns) */}
          <div className="md:col-span-5 group cursor-pointer mt-10 md:mt-40" onClick={() => onViewChange('iron-and-ember')}>
            <div className="relative aspect-[4/5] overflow-hidden mb-8 rounded-lg border border-white/5 bg-[#131313]">
              <img
                alt="Iron and Ember project teaser image"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-[1.1]"
                src={PROJECT_TEASERS[2].imageSrc}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            
            <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest mb-3 block">
              {PROJECT_TEASERS[2].category}
            </span>
            <h3 className="font-display text-3xl font-semibold text-[#e5e2e1] group-hover:italic transition-all duration-300">
              {PROJECT_TEASERS[2].title}
            </h3>
            <p className="font-sans text-sm text-[#a1a1aa] mt-2 leading-relaxed">
              {PROJECT_TEASERS[2].description}
            </p>
            <button className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-widest py-2 border-b border-white/20 hover:border-[#c9c6c5] hover:text-[#c9c6c5] text-[#e5e2e1] transition-all whitespace-nowrap mt-6 cursor-pointer">
              View Project <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section - "The Narrative" */}
      <section className="py-32 bg-[#1a1a1a] overflow-hidden" id="about-section">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Sculptural Photo */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[3/4] grayscale border border-white/10 p-2 rounded-lg bg-[#131313]">
              <img
                alt="Premium 3D Abstract Sculpture for Portfolio"
                className="w-full h-full object-cover rounded"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehBV3w11LM6BXPx4D8FOBHkQAtrJfQfc0wd9fCgPw-_5pTCuUKgSC97S7lWJ5IAqWF_W59qwPmj2Bto8R0cB39gSRi3L4KxJEn5XojQBJt1xLDkj0alDe4X56VFjRvEIgf8hiuH-7YlEwGEW-8xIbB_hMZ_6_NeQNEtUKYcH84ePsZMf9PENnSZF1vfH6xguLj_snUOQ1n5jbRc6ZbxoxtMofwlrw2OsPpkzANoP4B4FPUpg9jcZfWFs8mEYSYrGcEsHziT6VS2Fm"
              />
            </div>
          </div>

          {/* Right Text Block */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest mb-6 block">
              The Narrative
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#e5e2e1] mb-8 leading-tight">
              I believe that design should feel inevitable.
            </h2>
            
            <div className="space-y-6 font-sans text-[15px] sm:text-base text-[#a1a1aa] font-light leading-relaxed mb-12">
              <p>
                I collaborate with forward-thinking brands and startups to architect digital experiences 
                that resonate, scale, and define the modern landscape.
              </p>
              <p>
                My methodology is rooted in structural thinking—I treat design as an engineering 
                problem that requires an artistic solution. Based in Berlin, I draw inspiration from the 
                city's unique blend of raw industrialism and refined modernism.
              </p>
            </div>

            {/* Micro details skills stacks */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div>
                <h4 className="font-sans text-xs font-semibold text-[#e5e2e1] uppercase tracking-widest mb-4">
                  Design Skills
                </h4>
                <ul className="font-sans text-[13px] text-[#a1a1aa] space-y-2 font-light">
                  {DESIGN_SKILLS.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#c9c6c5] rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-sans text-xs font-semibold text-[#e5e2e1] uppercase tracking-widest mb-4">
                  Tech Stack
                </h4>
                <ul className="font-sans text-[13px] text-[#a1a1aa] space-y-2 font-light">
                  {TECH_STACK.map((tech, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#52525b] rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Simple Contact Trigger Footer Segment */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto" id="contact-teaser-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight text-[#e5e2e1] mb-6">
              Let's create something great <span className="italic font-normal text-[#52525b] outline-text">together.</span>
            </h2>
            <div className="space-y-4 mt-8">
              <span className="font-sans text-xs font-semibold text-[#c9c6c5] uppercase tracking-widest block">
                Direct Inquiry
              </span>
              <a 
                className="block font-display text-2xl md:text-3xl text-[#a1a1aa] hover:text-[#c9c6c5] underline decoration-white/10 underline-offset-8 hover:decoration-[#c9c6c5] transition-all"
                href="mailto:digitalcrafts.v@gmail.com"
              >
                digitalcrafts.v@gmail.com
              </a>
            </div>
          </div>

          <div className="p-10 border border-white/5 bg-[#131313] rounded">
            <p className="font-sans text-base text-[#a1a1aa] font-light mb-8 leading-relaxed">
              Seeking architectural precision, high-touch UI interfaces, and long-term design consistency? Let's discuss your next project, goals, and timeline.
            </p>
            <button
              onClick={() => onViewChange('contact')}
              className="w-full bg-[#e5e2e1] hover:bg-[#c9c6c5] text-[#131313] font-sans font-semibold text-xs tracking-widest py-5 uppercase rounded transition-all duration-300 cursor-pointer text-center"
            >
              Start A Conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
