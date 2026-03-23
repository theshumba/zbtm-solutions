import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight">
            Built on Discipline.
            <br />
            <span className="text-brand-500">Driven by Results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column — story */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
            <p className="text-lg text-navy-600 leading-relaxed">
              ZBTM Solutions is a growing workforce provider built around strong leadership, reliability, and work ethic. We deliver consistent results under pressure — supporting businesses and individuals who need trusted hands on the job.
            </p>
            <p className="text-lg text-navy-600 leading-relaxed">
              Our skilled and semi-skilled teams come from a range of backgrounds and are overseen by team leaders with <strong className="text-navy-800">military and emergency response experience</strong>, bringing structure and accountability to every assignment.
            </p>
            <p className="text-lg text-navy-600 leading-relaxed">
              We focus on doing one thing well — providing dependable labour you can rely on. Whether it's a house move, a property clearance, or complex site work, our crews integrate seamlessly with your existing teams and get on with the job.
            </p>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-brand-500 font-bold text-lg hover:text-brand-600 transition-colors group"
              >
                See what we can do for you
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right column — value pillars */}
          <div className={`space-y-5 ${isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
            {[
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Military-Grade Leadership',
                description:
                  'Our team leaders bring discipline and standards from military and emergency service backgrounds. Every job runs with structure, clear communication, and full accountability.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Rapid Response',
                description:
                  'We specialise in short-notice deployment. When you need crews fast — to cover staff shortages, unexpected demand, or tight deadlines — we deliver.',
              },
              {
                icon: (
                  <svg className="w-7 h-7 text-brand-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: 'Standards Without Compromise',
                description:
                  "We don't overpromise — we deliver. Every crew member is vetted, briefed, and held to the same high standards. We're small, and that's by design.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl bg-navy-50/50 border border-navy-100 hover:border-brand-200 hover:bg-brand-50/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-navy-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
