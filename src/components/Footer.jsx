export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo.jpeg`}
              alt="ZBTM Solutions"
              className="h-12 w-auto rounded mb-4"
            />
            <p className="text-navy-400 leading-relaxed max-w-xs">
              Flexible and specialised labour cover across Northern Ireland. Built on discipline, driven by results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-navy-400 hover:text-brand-300 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:info@zbtmsolutions.com"
                className="flex items-center gap-2 text-navy-400 hover:text-brand-300 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@zbtmsolutions.com
              </a>
              <a
                href="tel:+447368335228"
                className="flex items-center gap-2 text-navy-400 hover:text-brand-300 transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +44 7368 335228
              </a>
              <div className="flex items-center gap-2 text-navy-400">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Northern Ireland
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-500 text-sm">
            &copy; {currentYear} ZBTM Solutions. All rights reserved.
          </p>
          <p className="text-navy-600 text-xs">
            Flexible & Specialised Labour Cover
          </p>
        </div>
      </div>
    </footer>
  );
}
