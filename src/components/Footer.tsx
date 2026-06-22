export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-20 px-6 md:px-20" id="app-footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 w-full">
        {/* Designer Copy */}
        <div>
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#c9c6c5] block mb-2">
            Valentin Maystorovski
          </span>
          <p className="font-sans text-[13px] text-[#a1a1aa] font-light">
            © 2026 Valentin Maystorovski. Architecting digital experiences.
          </p>
        </div>

        {/* Social Linkages */}
        <div className="flex gap-12 text-sm">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-[#a1a1aa] hover:text-[#c9c6c5] underline decoration-white/10 underline-offset-8 hover:decoration-[#c9c6c5] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:digitalcrafts.v@gmail.com"
            className="font-sans text-[13px] text-[#a1a1aa] hover:text-[#c9c6c5] underline decoration-white/10 underline-offset-8 hover:decoration-[#c9c6c5] transition-colors"
          >
            Email
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-[#a1a1aa] hover:text-[#c9c6c5] underline decoration-white/10 underline-offset-8 hover:decoration-[#c9c6c5] transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
