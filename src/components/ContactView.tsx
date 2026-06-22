import { useState, useEffect, useRef, ChangeEvent, DragEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, ArrowRight, Check, Trash2, Clock } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [brief, setBrief] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [berlinTime, setBerlinTime] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Live Sync Berlin local time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatted = new Intl.DateTimeFormat('en-GB', options).format(now);
      setBerlinTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !brief) {
      alert('Please fill out all fields before sending your inquiry.');
      return;
    }
    // Simulate high-fidelity success feedback
    setIsSubmitSuccess(true);
    setName('');
    setEmail('');
    setBrief('');
    setFiles([]);
    setTimeout(() => {
      setIsSubmitSuccess(false);
    }, 6000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#0a0a0a]"
    >
      {/* Hero Header */}
      <section className="pt-40 md:pt-48 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs font-semibold text-[#a1a1aa] tracking-widest uppercase mb-4 block">
              AVAILABLE FOR PROJECTS
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-8xl font-bold mb-8 leading-none text-[#e5e2e1]">
              Start a <br />
              <span className="italic font-normal text-[#c9c6c5]">conversation.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#a1a1aa] font-light max-w-xl leading-relaxed">
              I specialize in creating architectural digital experiences for brands that
              value precision and visual authority. Whether you have a specific brief or
              just an initial concept, let's explore the possibilities.
            </p>
          </div>
          
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="text-right">
              <span className="block font-sans text-xs uppercase tracking-widest text-[#a1a1aa] mb-2 font-medium">
                BERLIN LOCAL TIME
              </span>
              <div className="font-display text-4xl text-[#e5e2e1] tabular-nums font-semibold flex items-center justify-end gap-2">
                <Clock size={18} className="text-[#c9c6c5] animate-pulse" />
                {berlinTime || '14:26:08'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & details card */}
      <section className="mt-20 md:mt-32 px-6 md:px-20 mb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 w-full">
          {/* Left: Contact Form Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {isSubmitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#131313] border border-[#c9c6c5] p-10 rounded-lg flex flex-col justify-center items-center text-center max-w-2xl min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-[#c9c6c5]/10 rounded-full flex items-center justify-center text-[#c9c6c5] mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-[#e5e2e1]">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-sans text-sm text-[#a1a1aa] max-w-md leading-relaxed mb-8">
                    Thank you for reaching out. Valentin Maystorovski will analyze your structural brief and respond via your registered mailbox within 24 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitSuccess(false)}
                    className="font-sans text-xs font-semibold uppercase tracking-widest text-[#c9c6c5] border-b border-[#c9c6c5] pb-1 cursor-pointer hover:text-white"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative group">
                      <label className="font-sans text-[10px] text-[#a1a1aa]/60 uppercase tracking-widest block mb-2 font-semibold">
                        Your Name
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#52525b] py-4 font-sans text-base text-[#e5e2e1] placeholder:text-[#a1a1aa]/20 focus:border-[#e5e2e1] focus:ring-0 transition-all duration-300 outline-none"
                        placeholder="ALEXANDER MAYER"
                        type="text"
                      />
                    </div>
                    
                    <div className="relative group">
                      <label className="font-sans text-[10px] text-[#a1a1aa]/60 uppercase tracking-widest block mb-2 font-semibold">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#52525b] py-4 font-sans text-base text-[#e5e2e1] placeholder:text-[#a1a1aa]/20 focus:border-[#e5e2e1] focus:ring-0 transition-all duration-300 outline-none"
                        placeholder="HELLO@DOMAIN.COM"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="font-sans text-[10px] text-[#a1a1aa]/60 uppercase tracking-widest block mb-2 font-semibold">
                      Project Brief
                    </label>
                    <textarea
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      required
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-[#52525b] py-4 font-sans text-base text-[#e5e2e1] placeholder:text-[#a1a1aa]/20 focus:border-[#e5e2e1] focus:ring-0 transition-all duration-300 resize-none outline-none"
                      placeholder="TELL ME ABOUT YOUR VISION, GOALS, AND TIMELINE..."
                      rows={5}
                    />
                  </div>

                  {/* Attachment zone & Custom Drag and Drop */}
                  <div 
                    onClick={triggerFileInput}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className="border border-dashed border-[#52525b] p-6 text-center rounded bg-[#131313]/50 hover:bg-[#131313] hover:border-[#c9c6c5] transition-all cursor-pointer flex flex-col items-center justify-center gap-2 group"
                  >
                    <Upload size={20} className="text-[#a1a1aa] group-hover:text-white transition-colors" />
                    <span className="font-sans text-xs font-semibold text-[#a1a1aa] uppercase tracking-widest">
                      Drag files here or Click to attach Briefs (PDF, ZIP)
                    </span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.zip,.doc,.docx"
                    />
                  </div>

                  {/* Attachment List */}
                  {files.length > 0 && (
                    <motion.div 
                      layout
                      className="space-y-2 border border-white/5 p-4 rounded bg-[#131313]"
                    >
                      <span className="font-sans text-[10px] text-[#c9c6c5] tracking-widest uppercase font-semibold block mb-2">
                        Attached Files ({files.length})
                      </span>
                      {files.map((file, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-[#1c1b1b] p-3 rounded text-xs">
                          <span className="text-[#e5e2e1] font-mono select-none truncate pr-4">
                            {file.name} ({(file.size / 1024).toFixed(1)} KB)
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(idx);
                            }}
                            className="text-[#a1a1aa] hover:text-[#ff6b6b] transition-colors cursor-pointer"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  <div className="flex items-center justify-between pt-8">
                    <span className="font-sans text-[10px] text-[#a1a1aa] tracking-widest uppercase font-semibold">
                      Offline state verified • encrypted transmission
                    </span>
                    <button
                      type="submit"
                      className="group flex items-center gap-4 bg-[#e5e2e1] text-[#131313] px-12 py-5 font-sans font-semibold text-xs tracking-widest uppercase rounded hover:bg-[#c9c6c5] transition-all active:scale-95 duration-200 cursor-pointer"
                    >
                      SEND INQUIRY
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Floating Visual & Direct contact Details */}
          <div className="lg:col-span-4 lg:col-start-9 space-y-20">
            {/* Visual sculpture block */}
            <div className="relative w-full aspect-[3/4] bg-[#1c1b1b] overflow-hidden rounded-lg border border-white/5 shadow-2xl">
              <img
                alt="A premium 3D artistic abstract asset"
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAehBV3w11LM6BXPx4D8FOBHkQAtrJfQfc0wd9fCgPw-_5pTCuUKgSC97S7lWJ5IAqWF_W59qwPmj2Bto8R0cB39gSRi3L4KxJEn5XojQBJt1xLDkj0alDe4X56VFjRvEIgf8hiuH-7YlEwGEW-8xIbB_hMZ_6_NeQNEtUKYcH84ePsZMf9PENnSZF1vfH6xguLj_snUOQ1n5jbRc6ZbxoxtMofwlrw2OsPpkzANoP4B4FPUpg9jcZfWFs8mEYSYrGcEsHziT6VS2Fm"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Direct Information */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-sans text-xs font-semibold text-[#a1a1aa] mb-4 block tracking-widest">
                  DIRECT ENQUIRY
                </span>
                <a
                  href="mailto:digitalcrafts.v@gmail.com"
                  className="block font-display text-2xl sm:text-3xl font-semibold text-[#e5e2e1] hover:text-[#c9c6c5] hover:italic underline underline-offset-8 decoration-white/10 hover:decoration-[#c9c6c5] transition-all"
                >
                  digitalcrafts.v@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
