import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reasons = [
  {
    number: '01',
    title: 'Military-Grade Leadership',
    description: 'Team leaders with military and emergency response backgrounds bring discipline, clear communication, and operational structure to every job site.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Same-Day Deployment',
    description: "Need crews today? We specialise in short-notice labour cover. Our rapid-response capability means you're never left short-handed when it matters most.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Flexible & Scalable',
    description: 'From a single operative to a full crew, we scale to match your needs. Cover busy periods, staff shortages, or one-off projects without long-term commitments.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Fully Accountable',
    description: "We don't overpromise — we deliver. Every worker is vetted and briefed. Every job is supervised. You get the reliability that comes from a company that stakes its reputation on results.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Why Businesses Trust <span className="text-brand-500">ZBTM</span>
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            We're not the biggest workforce provider — but we're one of the most dependable. Here's what sets us apart.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`group relative p-8 rounded-2xl border border-navy-100 hover:border-brand-200 bg-white hover:shadow-xl transition-all duration-300 ${
                isVisible ? `animate-fade-in-up delay-${(i + 1) * 100}` : 'opacity-0'
              }`}
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 text-7xl font-black text-navy-50 group-hover:text-brand-50 transition-colors select-none">
                {reason.number}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-14 ${isVisible ? 'animate-fade-in-up delay-600' : 'opacity-0'}`}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white font-bold text-lg rounded-xl hover:bg-navy-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Work With Us
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
