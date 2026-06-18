import { sanityClient } from '@/lib/sanity.client';
import { practiceAreaBySlugQuery } from '@/lib/sanity.queries';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity.client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let area = null;
  try {
    area = await sanityClient.fetch(practiceAreaBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching metadata for service:", error);
  }
  
  if (!area) return { title: 'Service Not Found' };

  return {
    title: `${area.title} | D.C. Denwigwe SAN & Associates`,
    description: `Professional legal services in ${area.title}.`,
    keywords: area.seoKeywords || `legal services, ${area.title}, Nigeria, law firm`,
  };
}

const portableTextComponents = {
  block: {
    h2: ({ children }) => <h2 className="display-5 fw-bold mb-4 mt-5 text-dark border-bottom pb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="h2 fw-bold mb-3 mt-5 text-primary">{children}</h3>,
    blockquote: ({ children }) => (
      <div className="bg-light p-4 p-md-5 my-5 border-start border-5 border-golden rounded-end shadow-sm quote-block">
        <p className="fs-3 fst-italic mb-0 text-muted lh-base">{children}</p>
      </div>
    ),
    normal: ({ children }) => <p className="fs-4 lh-lg text-muted mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-unstyled mb-5 ps-lg-4">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="d-flex align-items-start mb-4 fs-4 text-muted">
        <i className="fa-solid fa-check-circle mt-1 me-3 text-golden fs-5"></i>
        <span>{children}</span>
      </li>
    ),
  },
};

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  let area = null;
  try {
    area = await sanityClient.fetch(practiceAreaBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching service details:", error);
  }

  if (!area) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* High-Impact Hero - Optimized for Wide Screens */}
      <header className="subpage-header services position-relative d-flex align-items-center overflow-hidden" style={{ minHeight: '75vh' }}>
        <div className="container position-relative z-index-2 py-5" data-aos="fade-right">
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="mb-4">
                <span className="badge px-4 py-2 text-uppercase fw-bold mb-3 tracking-widest" style={{ backgroundColor: '#996515', fontSize: '0.8rem' }}>
                  Specialized Legal Practice
                </span>
              </div>
              <h1 className="display-1 fw-bold mb-4 text-shadow" style={{ fontFamily: 'Tahoma, sans-serif' }}>{area.title}</h1>
              <p className="lead fs-2 mb-0 opacity-90 text-white" style={{ maxWidth: '800px', lineHeight: '1.4' }}>
                Delivering strategic excellence and authoritative representation in {area.title.toLowerCase()} across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Section 1: Overview & Expertise Grid - Split Layout on Large Screens */}
      <section className="py-5 py-lg-10">
        <div className="container" data-aos="fade-up">
          <div className="row g-5 g-xl-10 align-items-start">
            <div className="col-lg-7">
              <h6 className="text-golden fw-bold text-uppercase mb-4 tracking-widest">Deep-Dive Analysis</h6>
              <h2 className="display-3 fw-bold mb-5">Professional Scope</h2>
              <div className="service-prose">
                {area.description ? (
                  <PortableText value={area.description} components={portableTextComponents} />
                ) : (
                  <p className="fs-4 text-muted">We are currently updating our detailed service portfolio for {area.title} to provide the most accurate insights into our latest legal methodologies.</p>
                )}
              </div>
            </div>
            <div className="col-lg-5 sticky-lg-top" style={{ top: '120px' }}>
              <div className="bg-light p-4 p-xl-5 rounded-4 shadow-sm border-top border-5 border-golden">
                <h4 className="display-6 fw-bold mb-4 text-dark">Strategic Edge</h4>
                <p className="text-muted fs-5 mb-5">Our firm provides a distinct advantage through our unique combination of heritage and innovation.</p>
                <ul className="list-unstyled mb-0">
                  {[
                    { icon: 'fa-shield-halved', title: 'Risk Mitigation', text: 'Proactive identification and neutralization of legal vulnerabilities before they escalate.' },
                    { icon: 'fa-chart-line', title: 'Outcome Driven', text: 'Our strategies are engineered to achieve your specific commercial or personal goals.' },
                    { icon: 'fa-scale-balanced', title: 'Ethical Dominance', text: 'Representation that commands respect through strict adherence to the highest legal standards.' }
                  ].map((item, i) => (
                    <li key={i} className="mb-5 d-flex">
                      <div className="rounded-circle bg-white shadow-sm d-flex align-items-center justify-content-center me-4" style={{ minWidth: '60px', height: '60px' }}>
                         <i className={`fa-solid ${item.icon} fs-4 text-golden`}></i>
                      </div>
                      <div>
                        <h5 className="h5 fw-bold mb-2">{item.title}</h5>
                        <p className="fs-6 text-muted mb-0">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Engagement Flow - Large Screen Optimization */}
      <section className="py-5 py-lg-10 bg-light">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-xl-8">
              <h6 className="text-golden fw-bold text-uppercase mb-3 tracking-widest">Our Methodology</h6>
              <h2 className="display-4 fw-bold">The Engagement Framework</h2>
              <div className="mx-auto mt-4 mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#996515' }}></div>
              <p className="lead text-muted fs-4">A structured, transparent, and results-oriented approach to your legal challenges.</p>
            </div>
          </div>
          
          <div className="row g-4 g-xl-5 mt-5">
            {[
              { step: '01', title: 'Discovery & Consultation', text: 'Initial thorough audit of the legal landscape surrounding your specific case or requirement.' },
              { step: '02', title: 'Strategic Engineering', text: 'Development of a customized legal roadmap utilizing multi-disciplinary insights.' },
              { step: '03', title: 'Execution & Advocacy', text: 'Assertive implementation of the strategy through litigation, negotiation, or advisory channels.' },
              { step: '04', title: 'Review & Resolution', text: 'Continuous monitoring and refinement to ensure the final outcome meets our standards of excellence.' }
            ].map((item, i) => (
              <div key={i} className="col-xl-3 col-md-6">
                <div className="p-4 p-xl-5 bg-white rounded-4 shadow-sm h-100 transition-all hover-lift-lg border-bottom border-5 border-transparent hover-border-golden">
                  <span className="display-2 fw-bold text-light mb-4 d-block" style={{ color: '#e9ecef !important' }}>{item.step}</span>
                  <h4 className="h4 fw-bold mb-3">{item.title}</h4>
                  <p className="fs-5 text-muted mb-0">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Specialized Team - Responsive Grid */}
      {area.team && area.team.length > 0 && (
        <section className="py-5 py-lg-10">
          <div className="container" data-aos="fade-up">
            <div className=" align-items-center text-center mb-5 g-4">
              <div className="mb-4 mb-lg-0">
                <h6 className="text-primary text-uppercase fw-bold mb-3 tracking-widest" style={{ color: '#996515 !important' }}>Our Specialists</h6>
                <h2 className="display-4 fw-bold mb-0">Legal Professionals</h2>
              </div>
              <div className=" text-center">
                <p className="text-muted fs-5 mb-0 mt-2" >Meet the subject matter experts dedicated to providing excellence in {area.title}.</p>
              </div>
            </div>

            <div className="row g-4 g-xl-5">
              {area.team.map((member, index) => (
                <div key={index} className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                  <Link href={`/team/${member.slug}`} className="text-decoration-none group d-block h-100">
                    <div className="card border-0 shadow-sm h-100 overflow-hidden hover-lift transition-all bg-light rounded-4">
                      <div className="position-relative" style={{ height: '400px' }}>
                        {member.photo ? (
                          <Image src={urlFor(member.photo).url()} alt={member.name} fill className="object-cover" />
                        ) : (
                          <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white opacity-25">
                            <i className="fa-solid fa-user-tie fs-1"></i>
                          </div>
                        )}
                        <div className="card-overlay-fancy"></div>
                      </div>
                      <div className="card-body p-4 p-xl-5 text-center position-relative">
                        <h3 className="h3 fw-bold mb-2 text-dark group-hover-golden transition-all">{member.name}</h3>
                        <p className="text-primary small fw-bold text-uppercase mb-4 tracking-wider" style={{ color: '#996515 !important' }}>{member.position}</p>
                        <div className="text-muted fs-6 line-clamp-3 mb-0">
                           {member.bio ? (
                             <PortableText value={member.bio} />
                           ) : (
                             <p>Expert legal professional providing precision-driven solutions and strategic advocacy.</p>
                           )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - Command Authority */}
      <section className="py-5 py-lg-12 bg-dark text-white text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ 
          backgroundImage: 'radial-gradient(#996515 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>
        <div className="container position-relative z-index-1 py-5">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <h2 className="display-3 fw-bold mb-4" data-aos="fade-up">Establish Your Legal Foundation Today</h2>
              <p className="lead mb-5 fs-3 opacity-75" data-aos="fade-up" data-aos-delay="100">
                Contact our {area.title.toLowerCase()} specialists for an authoritative assessment of your legal position.
              </p>
              <div data-aos="fade-up" data-aos-delay="200">
                <Link href="/contact" className="btn btn-primary btn-lg px-5 py-4 fw-bold rounded-pill shadow-lg text-uppercase tracking-widest hover-scale transition-all">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .py-lg-10 { padding-top: 8rem !important; padding-bottom: 8rem !important; }
        .py-lg-12 { padding-top: 10rem !important; padding-bottom: 10rem !important; }
        .tracking-widest { letter-spacing: 0.25em; }
        .text-golden { color: #996515 !important; }
        .hover-lift-lg:hover { transform: translateY(-15px); }
        .hover-scale:hover { transform: scale(1.05); }
        .group:hover .group-hover-golden { color: #996515 !important; }
        .z-index-2 { z-index: 2; }
        .text-shadow { text-shadow: 2px 2px 10px rgba(0,0,0,0.5); }
        .service-prose h2 { font-size: 3rem; }
        .service-prose p { margin-bottom: 2rem; }
        .card-overlay-fancy {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.1), transparent);
          pointer-events: none;
        }
      ` }} />
    </main>
  );
}
