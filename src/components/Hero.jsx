export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient grid-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-300/8 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-brand-300/40 rounded-full" />
      <div className="absolute top-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-brand-200/30 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-white/80 font-medium">
              Now Serving All of Northern Ireland
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 animate-fade-in-up">
            Dependable Labour
            <br />
            <span className="text-brand-200">Solutions</span> You Can
            <br />
            Count On
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200">
            Military-led crews providing flexible workforce cover for removals, property clearance, site work, and specialist services. Available at short notice across Northern Ireland.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-300">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold text-lg rounded-xl hover:bg-white/90 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Request a Quote
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-200"
            >
              View Our Services
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up delay-400">
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Short-Notice Ready</div>
                <div className="text-white/50 text-xs">Rapid crew deployment</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Northern Ireland Wide</div>
                <div className="text-white/50 text-xs">Full regional coverage</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="w-12 h-12 rounded-lg bg-brand-400/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Military-Led Teams</div>
                <div className="text-white/50 text-xs">Structure & accountability</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80V40C240 10 480 0 720 20C960 40 1200 50 1440 30V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
