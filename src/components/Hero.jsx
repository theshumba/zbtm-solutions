import ParticleNetwork from './ParticleNetwork';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Layered gradient background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-brand-400/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-brand-300/8 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />

      {/* Particle network canvas */}
      <ParticleNetwork />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8 animate-fade-in">
            <div className="relative w-2 h-2">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
              <div className="relative w-2 h-2 bg-green-400 rounded-full" />
            </div>
            <span className="text-sm text-white/80 font-medium">
              Now Serving All of Northern Ireland
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
            <span className="inline-block animate-fade-in-up">Dependable Labour</span>
            <br />
            <span className="inline-block animate-fade-in-up delay-100">
              <span className="bg-gradient-to-r from-brand-200 via-brand-300 to-brand-100 bg-clip-text text-transparent">Solutions</span> You Can
            </span>
            <br />
            <span className="inline-block animate-fade-in-up delay-200">Count On</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-300">
            Military-led crews providing flexible workforce cover for removals, property clearance, site work, and specialist services. Available at short notice across Northern Ireland.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up delay-400">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-white text-navy-900 font-bold text-lg rounded-xl hover:bg-brand-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-brand-500/20 hover:-translate-y-1"
            >
              Request a Quote
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/25 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Services
              <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-in-up delay-500">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: 'Short-Notice Ready',
                sub: 'Rapid crew deployment',
              },
              {
                icon: (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </>
                ),
                title: 'Northern Ireland Wide',
                sub: 'Full regional coverage',
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                ),
                title: 'Military-Led Teams',
                sub: 'Structure & accountability',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-white/[0.06] backdrop-blur-md rounded-xl p-4 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-400/25 to-brand-500/15 flex items-center justify-center flex-shrink-0 group-hover:from-brand-400/35 group-hover:to-brand-500/25 transition-all duration-300">
                  <svg className="w-6 h-6 text-brand-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {stat.icon}
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{stat.title}</div>
                  <div className="text-white/40 text-xs">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave with gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 100V60C180 25 360 10 540 20C720 30 900 50 1080 45C1260 40 1380 30 1440 25V100H0Z" fill="white" fillOpacity="0.03" />
          <path d="M0 100V70C240 35 480 15 720 30C960 45 1200 55 1440 40V100H0Z" fill="white" fillOpacity="0.05" />
          <path d="M0 100V80C240 50 480 40 720 50C960 60 1200 65 1440 55V100H0Z" fill="white" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-in delay-600">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2.5 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
