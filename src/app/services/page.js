export const revalidate = 60;

import { PortableText } from '@portabletext/react';
import { sanityClient } from '@/lib/sanity.client';
import { allPracticeAreasQuery } from '@/lib/sanity.queries';
import Link from 'next/link';

export default async function ServicesPage() {
  let practiceAreas = [];
  try {
    practiceAreas = await sanityClient.fetch(allPracticeAreasQuery);
  } catch (error) {
    console.error("Error fetching services:", error);
  }

  const getFirstSentence = (blocks) => {
    if (!blocks || !Array.isArray(blocks)) return "Explore our specialized legal services.";
    const firstBlock = blocks.find(block => block._type === 'block');
    if (!firstBlock || !firstBlock.children) return "Explore our specialized legal services.";
    const text = firstBlock.children.map(child => child.text).join("");
    const match = text.match(/[^.!?]+[.!?]/);
    return match ? match[0] : (text.slice(0, 100) + "...");
  };

  return (
    <main className="bg-light">
      {/* Impactful Responsive Hero */}
      <header className="subpage-header services position-relative d-flex align-items-start justify-content-start text-start overflow-hidden" style={{ minHeight: '70vh' }}>
        <div className="container position-relative z-index-2 py-5" data-aos="zoom-out">
          <div className="row justify-content-center pt-5 mt-md-5">
            <div className="pb-3 mt-5 pt-lg-5">
              <h1 className="display-1 fw-bold mb-4 text-shadow mt-5 pt-5" style={{ fontFamily: 'Tahoma, sans-serif' }}>Our Services</h1>
              <p className="lead opacity-90 text-white shadow-sm" style={{ maxWidth: '800px' }}>
                Delivering tailored, precision-driven legal solutions to navigate Nigeria’s complex regulatory and judicial landscape.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Intro Section with Visual Variety */}
      <section className="py-5 bg-white">
        <div className="container py-lg-5" data-aos="fade-up">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4" style={{ color: '#212529' }}>Authoritative Counsel for Every Sector</h2>
              <p className="lead text-muted fs-4 mb-4">
                At D.C. Denwigwe SAN & Associates, we combine decades of experience with a forward-thinking approach to protect your interests.
              </p>
              <p className="text-muted fs-5 lh-lg mb-0">
                Our multi-disciplinary team is structured to provide high-stakes advocacy and strategic advisory services. We do not just solve legal problems; we provide the foundation for your long-term success and stability.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {[
                  { icon: 'fa-building-shield', title: 'Corporate Protection' },
                  { icon: 'fa-gavel', title: 'High-Stakes Litigation' },
                  { icon: 'fa-handshake-simple', title: 'Strategic Advisory' },
                  { icon: 'fa-scale-balanced', title: 'Regulatory Compliance' }
                ].map((item, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="p-4 bg-light rounded-4 text-center border-bottom border-4 border-golden shadow-sm transition-all hover-lift">
                      <i className={`fa-solid ${item.icon} fs-1 text-golden mb-3`}></i>
                      <h5 className="fw-bold mb-0">{item.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section Optimized for Large Screens */}
      <section className="py-5">
        <div className="container py-lg-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-dark">Explore Our Practice Areas</h2>
            <div className="mx-auto mt-3" style={{ width: '80px', height: '4px', backgroundColor: '#996515' }}></div>
          </div>

          <div className="row g-4 g-xl-5 justify-content-center">
            {practiceAreas && practiceAreas.length > 0 ? (
              practiceAreas.map((area, index) => (
                <div key={index} className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <Link href={`/services/${area.slug}`} className="text-decoration-none group d-block h-100">
                    <div className="card h-100 shadow-sm border-0 bg-white overflow-hidden transition-all hover-lift-lg service-card-fancy">
                      <div className="card-body p-4 p-xl-5 position-relative">
                        <div className="service-icon-bg">
                           <i className={`${area.icon || 'fa-solid fa-scale-balanced'}`}></i>
                        </div>
                        <div className="position-relative z-index-1">
                          <div className="mb-4">
                            <div className="rounded-circle d-flex align-items-center justify-content-center bg-light" style={{ width: '64px', height: '64px' }}>
                               <i className={`${area.icon || 'fa-solid fa-scale-balanced'} fs-3 text-golden`}></i>
                            </div>
                          </div>
                          <h2 className="h3 mb-3 fw-bold text-dark transition-all group-hover-golden">{area.title}</h2>
                          <p className="text-muted fs-5 mb-4 line-clamp-2">
                            {getFirstSentence(area.description)}
                          </p>
                          <div className="fw-bold text-golden mt-auto d-flex align-items-center" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                            VIEW FULL SERVICE <i className="fa-solid fa-arrow-right ms-2 transition-all group-hover-translate"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <p className="lead text-muted">Service listings are temporarily unavailable. Please contact us for assistance.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bold Bottom CTA */}
      <section className="py-5 bg-dark text-white text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ 
          backgroundImage: 'radial-gradient(#996515 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container position-relative z-index-1 py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold mb-4">Dedicated, Devoted, & Loyal</h2>
              <p className="lead mb-5 fs-4 opacity-75">Your journey to justice and legal stability begins with a single conversation. Our experts are standing by.</p>
              <div data-aos="fade-up">
                <Link href="/contact" className="btn btn-primary btn-lg px-5 py-4 fw-bold rounded-pill shadow-lg text-uppercase tracking-wider hover-scale transition-all">
                  Connect With A Lawyer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .tracking-widest { letter-spacing: 0.2em; }
        .tracking-wider { letter-spacing: 0.1em; }
        .text-golden { color: #996515 !important; }
        .hover-lift-lg:hover { transform: translateY(-15px); }
        .group-hover-golden:hover { color: #996515 !important; }
        .group:hover .group-hover-golden { color: #996515 !important; }
        .group:hover .group-hover-translate { transform: translateX(8px); }
        .service-card-fancy { border-top: 5px solid transparent !important; transition: all 0.4s ease; }
        .service-card-fancy:hover { border-top: 5px solid #996515 !important; }
        .service-icon-bg { 
          position: absolute; 
          top: -20px; 
          right: -20px; 
          font-size: 8rem; 
          opacity: 0.03; 
          transform: rotate(-15deg);
          pointer-events: none;
        }
        .z-index-1 { z-index: 1; }
        .z-index-2 { z-index: 2; }
      ` }} />
    </main>
  );
}
