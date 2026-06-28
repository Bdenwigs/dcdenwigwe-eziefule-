import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const socialIcons = [
    { name: 'X', label: 'X', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.482h2.039L6.486 3.24H4.298l13.311 17.395z', url: '#' },
    { name: 'Facebook', label: 'Fb', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', url: '#' },
    { name: 'Instagram', label: 'Ig', path: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z', url: '#' },
    { name: 'LinkedIn', label: 'Li', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', url: '#' },
    { name: 'YouTube', label: 'Yt', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', url: 'https://youtube.com/@d.c.denwigwesanassociates?si=ODqmBAQxGVd47sG4' },
  ];

  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5">
      <div className="container p-0">
        <div className="row g-5">
          {/* Brand and Description */}
          <div className="col-lg-5 col-md-12">
            <Link href="/" className="d-block mb-4">
              <Image 
                src="/images/logoeziefule.png" 
                alt="SAN & Associates Logo" 
                width={400} 
                height={120} 
                priority
                className="logo-main"
                style={{ width: 'auto', height: '110px' }}
              />
            </Link>


            <p className="text-white opacity-75 mb-4 pe-lg-5" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
              D.C. Denwigwe & Associates is a premier legal firm dedicated to providing trusted legal solutions with integrity, precision, and devotion across Nigeria and beyond.
            </p>
            <div className="d-flex gap-3 mt-4">
              {socialIcons.map((icon) => (
                <a 
                  key={icon.name}
                  href={icon.url} 
                  target={icon.url !== '#' ? "_blank" : undefined}
                  rel={icon.url !== '#' ? "noopener noreferrer" : undefined}
                  aria-label={icon.name}
                  className="social-icon text-white bg-secondary rounded-circle d-flex align-items-center justify-content-center" 
                  style={{ width: '40px', height: '40px' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h3 className="h6 text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px', color: '#eee9b8ff' }}>Quick Navigation</h3>
            <ul className="list-unstyled">
              <li className="mb-3"><Link href="/" className="text-white text-decoration-none hover-primary transition-all">Home</Link></li>
              <li className="mb-3"><Link href="/about" className="text-white text-decoration-none hover-primary transition-all">About Us</Link></li>
              <li className="mb-3"><Link href="/services" className="text-white text-decoration-none hover-primary transition-all">Services</Link></li>
              <li className="mb-3"><Link href="/sectors" className="text-white text-decoration-none hover-primary transition-all">Sectors</Link></li>
              <li className="mb-3"><Link href="/team" className="text-white text-decoration-none hover-primary transition-all">Our Team</Link></li>
              <li className="mb-3"><Link href="/articles" className="text-white text-decoration-none hover-primary transition-all">Articles & Insights</Link></li>
              <li className="mb-3"><Link href="/case-studies" className="text-white text-decoration-none hover-primary transition-all">Case Studies</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none hover-primary transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h3 className="h6 text-uppercase fw-bold mb-4" style={{ letterSpacing: '2px', color: '#eee9b8ff' }}>Contact Info</h3>
            <div className="mb-4 text-white">
              <p className="mb-2" style={{ fontSize: '0.95rem' }}>
                <strong>Office Address:</strong>
              </p>
              <address className="opacity-75 lh-lg" style={{ fontSize: '0.95rem' }}>
                No: 34 Works Road, Beside Madona Schools- Bala Junction<br />
                Owerri Municipal<br />
                Imo State, Nigeria
              </address>
            </div>
            <div className="mb-3 text-white">
              <p className="mb-1" style={{ fontSize: '0.95rem' }}>
                <strong>Email:</strong> <a href="mailto:hello@sanassociates.com" className="text-white opacity-75 text-decoration-none hover-primary">contact@dcdenwigwe.com</a>
              </p>
              <p className="mb-0" style={{ fontSize: '0.95rem' }}>
                <strong>Phone:</strong> <a href="tel:+2348033253970" className="text-white opacity-75 text-decoration-none hover-primary">+234 803 325 3970</a>
              </p>
            </div>
          </div>
        </div>

        <hr className="mt-5 mb-4 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white opacity-50 mb-0" style={{ fontSize: '0.85rem' }}>
              &copy; {new Date().getFullYear()} D.C. Denwigwe & Associates. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
             <p className="text-white opacity-50 mb-0" style={{ fontSize: '0.85rem' }}>
                Built for Excellence.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
