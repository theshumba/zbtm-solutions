import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollAnimation(0.05);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry: ${formData.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@zbtmsolutions.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-950 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 bg-brand-500/20 text-brand-300 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let's Get to Work
          </h2>
          <p className="text-lg text-navy-300 max-w-2xl mx-auto">
            Need labour cover? Tell us what you need and we'll get back to you promptly with a solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact form — 3 cols */}
          <div className={`lg:col-span-3 ${isVisible ? 'animate-slide-in-left delay-200' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-navy-900/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-800">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-navy-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="+44 7xxx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy-300 mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Removals Support">Removals Support</option>
                    <option value="Property Clearance">Property Clearance</option>
                    <option value="Site Work & General Labour">Site Work & General Labour</option>
                    <option value="Short-Notice Labour Cover">Short-Notice Labour Cover</option>
                    <option value="Health & Safety Consultancy">Health & Safety Consultancy</option>
                    <option value="Drone Surveying">Drone Surveying</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-navy-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-navy-800/50 border border-navy-700 text-white placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about the job — dates, location, number of operatives needed..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-500 text-white font-bold text-lg rounded-xl hover:bg-brand-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact details — 2 cols */}
          <div className={`lg:col-span-2 space-y-6 ${isVisible ? 'animate-slide-in-right delay-300' : 'opacity-0'}`}>
            {/* Direct contact */}
            <div className="bg-navy-900/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-800">
              <h3 className="text-xl font-bold text-white mb-6">Get in Touch Directly</h3>
              <div className="space-y-5">
                <a
                  href="mailto:info@zbtmsolutions.com"
                  className="flex items-center gap-4 text-navy-300 hover:text-brand-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide">Email</div>
                    <div className="text-white font-medium">info@zbtmsolutions.com</div>
                  </div>
                </a>

                <a
                  href="tel:+447368335228"
                  className="flex items-center gap-4 text-navy-300 hover:text-brand-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                    <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide">Phone</div>
                    <div className="text-white font-medium">+44 7368 335228</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Coverage area */}
            <div className="bg-navy-900/50 backdrop-blur-sm rounded-2xl p-8 border border-navy-800">
              <h3 className="text-xl font-bold text-white mb-4">Coverage Area</h3>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-navy-300 leading-relaxed">
                    We operate across <strong className="text-white">all of Northern Ireland</strong>, providing flexible labour cover wherever you need us — from Belfast to Derry, and everywhere in between.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick response promise */}
            <div className="bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-white">Quick Response</h3>
              </div>
              <p className="text-white/80">
                We aim to respond to all enquiries within a few hours. For urgent labour needs, call us directly and we'll do our best to deploy crews the same day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
