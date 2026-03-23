import { useScrollAnimation } from '../hooks/useScrollAnimation';

const generalServices = [
  {
    title: 'Removals Support',
    description: 'Experienced operatives for house moves, large or complex jobs, and busy periods. Our crews slot straight into your team on the day.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: 'Property Clearance',
    description: 'Labour support for house clearances, probate work, and end-of-tenancy clear-outs. Reliable workers who handle physically demanding tasks efficiently.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'Site Work & General Labour',
    description: 'Flexible labour for site support roles, heavy lifting, and general manual work. Experienced in active environments alongside existing crews.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Short-Notice Labour Cover',
    description: 'We specialise in providing labour at short notice, helping you cover unexpected gaps or increased workload. Crews deployed quickly to keep operations running.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const specialistServices = [
  {
    title: 'Health & Safety Consultancy',
    description: 'ISO auditing services, in-house training for manual handling, working at heights, abrasive wheels, and Mental Health First Aid certification.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    tags: ['ISO Auditing', 'Manual Handling', 'Working at Heights', 'Mental Health First Aid'],
  },
  {
    title: 'Drone Surveying',
    description: 'Professional drone inspection services for buildings, bridges, towers, industrial assets, and infrastructure. High-resolution aerial data for informed decision-making.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ['Buildings', 'Bridges', 'Towers', 'Industrial Assets'],
  },
];

function ServiceCard({ title, description, icon, tags, isSpecialist }) {
  return (
    <div
      className={`service-card group rounded-2xl p-7 border ${
        isSpecialist
          ? 'bg-gradient-to-br from-navy-900 to-navy-800 border-navy-700 text-white'
          : 'bg-white border-navy-100 hover:border-brand-200'
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
          isSpecialist
            ? 'bg-brand-500/20 text-brand-300'
            : 'bg-brand-50 text-brand-500'
        }`}
      >
        {icon}
      </div>
      <h3
        className={`text-xl font-bold mb-3 ${
          isSpecialist ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed mb-4 ${
          isSpecialist ? 'text-navy-200' : 'text-navy-500'
        }`}
      >
        {description}
      </p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                isSpecialist
                  ? 'bg-brand-500/20 text-brand-200'
                  : 'bg-brand-50 text-brand-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [sectionRef, isVisible] = useScrollAnimation(0.05);

  return (
    <section id="services" className="py-20 md:py-28 bg-navy-50/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            What We Do
          </h2>
          <p className="text-lg text-navy-500 max-w-2xl mx-auto">
            From general labour support to specialist consultancy and aerial surveying — we provide the workforce solutions your business needs.
          </p>
        </div>

        {/* General Services */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          <h3 className="text-sm font-bold text-navy-400 uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-navy-300" />
            General Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {generalServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>

        {/* Specialist Services */}
        <div className={`mb-12 ${isVisible ? 'animate-fade-in-up delay-400' : 'opacity-0'}`}>
          <h3 className="text-sm font-bold text-navy-400 uppercase tracking-widest mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-navy-300" />
            Specialist Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {specialistServices.map((service) => (
              <ServiceCard key={service.title} {...service} isSpecialist />
            ))}
          </div>
        </div>

        {/* Drivers banner */}
        <div className={`${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Drivers Available</h3>
                <p className="text-white/80">
                  Many of our operatives hold Class 2 and full UK driving licences, providing additional flexibility for transport and operational support.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-600 font-bold rounded-xl hover:bg-white/90 transition-colors flex-shrink-0"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
