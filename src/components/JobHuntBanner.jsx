import React, { useEffect, useRef } from 'react';

const JobHuntBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    // Basic Intersection Observer to trigger reveal animation if needed
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const reveals = entry.target.querySelectorAll('.reveal');
          reveals.forEach(el => el.classList.add('visible'));
        }
      },
      { threshold: 0.1 }
    );
    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={bannerRef}
      className="relative z-10 py-24 px-6 border-b border-[var(--border)] overflow-hidden" 
      style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.06), rgba(52,211,153,0.04), rgba(251,191,36,0.03))' }}
    >
      {/* Decorative Background Orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none -top-40 -left-40" style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)'}}></div>
      <div className="absolute w-[450px] h-[450px] rounded-full blur-[80px] pointer-events-none -bottom-32 -right-32" style={{ background: 'radial-gradient(circle, rgba(52,211,153,0.08), transparent 70%)'}}></div>

      <div className="max-w-[1100px] mx-auto text-center relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] rounded-full px-4 py-1.5 text-xs font-medium text-[var(--muted)] tracking-widest uppercase mb-8 reveal shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[var(--amber)] animate-[pulse_2s_infinite]"></span>
          Reclaim Your Narrative
        </div>

        {/* Main Header */}
        <h2 className="font-['Syne',sans-serif] text-[clamp(2rem,4vw,3.5rem)] font-[800] leading-[1.1] tracking-tight mb-14 reveal max-w-4xl mx-auto">
          <span className="block mb-2 text-[var(--amber)] drop-shadow-md">"Earn Money Online" Program</span>
          <span className="text-[var(--emerald)] block sm:inline">With 1-1 Implementation </span>
          <span className="text-[#4285F4]"> *Done-For-You*</span>
        </h2>
        
        {/* Grid for the core pain points (Google Colors Inspired theme but dialed to dark mode) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 w-full reveal">
          
          {/* Box 1 (Blue emphasis) */}
          <div className="bg-[var(--surface)] border border-[var(--border)] hover:border-[rgba(66,133,244,0.45)] rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[rgba(66,133,244,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="w-12 h-12 rounded-xl bg-[rgba(66,133,244,0.1)] border border-[rgba(66,133,244,0.25)] flex items-center justify-center text-2xl mb-5 text-[#4285F4] drop-shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <p className="text-[#4285F4] text-[1.2rem] font-bold font-['Syne',sans-serif] leading-snug mb-3">
              We know the silence of the job hunt.
            </p>
            <p className="text-[var(--muted)] text-[14.5px] font-light leading-relaxed">
              The endless streams of unread resumes and ghosted interviews can drain your confidence. We've been there.
            </p>
          </div>

          {/* Box 2 (Red/Orange emphasis) */}
          <div className="bg-[var(--surface)] border border-[var(--border)] hover:border-[rgba(234,67,53,0.45)] rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[rgba(234,67,53,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="w-12 h-12 rounded-xl bg-[rgba(234,67,53,0.1)] border border-[rgba(234,67,53,0.25)] flex items-center justify-center text-2xl mb-5 text-[#EA4335] drop-shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            </div>
            <p className="text-[#EA4335] text-[1.2rem] font-bold font-['Syne',sans-serif] leading-snug mb-3">
              We know the weight of explaining the "gap".
            </p>
            <p className="text-[var(--muted)] text-[14.5px] font-light leading-relaxed">
              Feeling judged for past pauses, rather than measured by your true potential and evolving skills.
            </p>
          </div>

          {/* Box 3 (Yellow/Green emphasis) */}
          <div className="bg-[var(--surface)] border border-[var(--border)] hover:border-[rgba(251,191,36,0.45)] rounded-3xl p-8 text-left transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[rgba(251,191,36,0.03)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="w-12 h-12 shrink-0 rounded-xl bg-[rgba(251,191,36,0.1)] border border-[rgba(251,191,36,0.25)] flex items-center justify-center text-2xl mb-5 text-[var(--amber)] drop-shadow-sm">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <p className="text-[var(--amber)] text-[1.2rem] font-bold font-['Syne',sans-serif] leading-snug mb-3">
              But a gap isn't a lack of talent.
            </p>
            <p className="text-[var(--emerald)] text-[14.5px] font-medium font-['DM_Sans',sans-serif] leading-relaxed">
              It’s just a pause in the story. It absolutely does not define what you build next.
            </p>
          </div>

        </div>

        {/* Conclusion/CTA Banner */}
        <div className="w-full max-w-4xl mx-auto rounded-3xl p-8 md:p-12 border border-[rgba(179,157,250,0.2)] bg-[linear-gradient(135deg,rgba(16,16,26,0.8),rgba(22,22,42,0.6))] backdrop-blur-md mb-6 reveal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(167,139,250,0.05)] rounded-full blur-[50px] pointer-events-none"></div>
          
          <p className="text-[1.35rem] md:text-[1.6rem] text-[var(--white)] font-semibold mb-5 leading-tight font-['Syne',sans-serif]">
            Stop applying with an old version of yourself.
          </p>
          <p className="text-[1rem] md:text-[1.1rem] text-[var(--text)] font-light leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
            It’s time to rebuild your confidence and your toolkit simultaneously. We’ve bundled three powerhouse courses to help you reclaim your narrative and walk into your next interview with <strong className="text-[var(--violet)] font-medium">zero apologies</strong>.
          </p>
          
          <div className="flex justify-center">
            <button 
              className="inline-flex items-center gap-3 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white border-0 py-3.5 px-8 rounded-full font-['DM_Sans',sans-serif] text-[15px] font-medium cursor-pointer transition-all duration-200 shadow-[0_4px_20px_rgba(167,139,250,0.25)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(167,139,250,0.4)]"
              onClick={() => {
                const w = document.getElementById('waitlist');
                if(w) w.scrollIntoView({behavior:'smooth'});
              }}
            >
              Rebuild Your Toolkit Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JobHuntBanner;
