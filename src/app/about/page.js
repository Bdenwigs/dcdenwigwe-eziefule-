'use client'

import Image from 'next/image';
import Link from 'next/link';
import LocationMap from '@/components/LocationMap';

export default function AboutPage() {
  const awards = [
    { title: "Top 50 Nigerian Law Firms", year: "2024", icon: "fa-award" },
    { title: "Excellence in Corporate Practice", year: "2023", icon: "fa-gavel" },
    { title: "Most Reliable Litigation Firm", year: "2022", icon: "fa-shield-halved" },
    { title: "Outstanding Dispute Resolution Award", year: "2021", icon: "fa-handshake" },
  ];

  return (
    <main>
      
      {/* Header Section */}
      <header className="subpage-header about" data-aos="fade-down">
        <div className="container p-0">
          <h1 className="display-3 fw-bold mb-3" style={{ fontFamily: 'Tahoma, sans-serif' }}>
            ABOUT US
          </h1>
          <p className="lead fw-normal opacity-100 fs-4 mb-0" style={{ color: '#ccb68e' }}>
            Professional legal solutions with integrity, excellence, and trust.
          </p>
        </div>
      </header>
      
      {/* Firm Overview Section */}
      <section className="py-5 bg-white">
        <div className="container p-0 py-lg-4" data-aos="fade-up">
          <div className="row mb-5">
            <div className="">
              <h2 className="fw-bold mb-4" style={{ fontFamily: 'Tahoma, sans-serif' }}>Dedicated, Devoted, & Loyal Service Delivery</h2>
              <p className="lead text-muted fs-5 lh-lg">
                With head quaters in Imo State Nigeria, D.C. Denwigwe SAN & Associates has grown into a trusted name in Nigerian legal practice, serving individuals, businesses, and communities with unwavering dedication. 
              </p>
              <p className="lead text-muted fs-5 lh-lg">
                With a foundation built on precision and excellence, we navigate the complexities of the Nigerian legal landscape to deliver results that matter.
              </p>
            </div>
          </div>
          
          <hr className="my-5 opacity-10" />
          
          {/* Vision & Mission Section */}
          <div className="row g-5 align-items-stretch">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="card h-100 border-0 bg-light p-4 p-xl-5 rounded-4 shadow-sm transition-all hover-lift">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', minWidth: '60px', backgroundColor: '#ccb68e' }}>
                    <i className="fa-solid fa-eye fs-3 text-white"></i>
                  </div>
                  <h3 className="h2 fw-bold mb-0">Our Vision</h3>
                </div>
                <p className="text-muted fs-5 lh-lg mb-0">
                  Our vision is to be a leading Nigerian law firm recognized for unwavering commitment to justice, innovation in legal practice, and service that empowers individuals, businesses, and communities. We aspire to set the benchmark for legal excellence across Africa and beyond.
                </p>
              </div>
            </div>
            
            <div className="col-lg-6" data-aos="fade-left">
              <div className="card h-100 border-0 bg-light p-4 p-xl-5 rounded-4 shadow-sm transition-all hover-lift">
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '60px', height: '60px', minWidth: '60px', backgroundColor: '#ccb68e' }}>
                    <i className="fa-solid fa-scale-balanced fs-3 text-white"></i>
                  </div>
                  <h3 className="h2 fw-bold mb-0">Our Mission</h3>
                </div>
                <p className="text-muted fs-5 lh-lg mb-0">
                  Our mission is to provide authoritative, client-focused legal representation across diverse practice areas, including Litigation, Corporate Practice, and Dispute Resolution. We strive to uphold the rule of law, deliver practical solutions, and inspire confidence through professionalism and integrity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Words Section */}
      <section className="py-5" style={{ backgroundColor: '#fcfcfc' }}>
        <div className="container p-0 py-lg-5" data-aos="zoom-in">
          <div className="bg-white p-5 rounded-4 shadow-lg border-start border-5 position-relative overflow-hidden" style={{ borderLeftColor: '#ccb68e !important' }}>
            <i className="fa-solid fa-quote-right position-absolute top-0 end-0 opacity-10 m-4" style={{ fontSize: '4rem' }}></i>
            <div className="position-relative z-index-1">
              <div className="row align-items-center g-5">
                <div className="col-lg-3 text-center">
                  <div className="position-relative d-inline-block">
                    <Image 
                      src="/images/uncled3.jpg" 
                      alt="D.C. Denwigwe SAN" 
                      width={400} 
                      height={400} 
                      className="rounded-circle shadow-sm border border-4 border-light object-cover"
                      style={{ width: '250px', height: '250px' }}
                      priority
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <h4 className="fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px', color: '#ccb68e' }}>Principal Message</h4>
                  <blockquote className="blockquote mb-4">
                    <p className="fs-4 fw-normal fst-italic lh-base">
                      At our firm, we believe that law is not just about resolving disputes. It involves protecting rights, fostering fairness, and building trust. We stand for excellence, loyalty, and service delivery that reflects the highest standards of the Nigerian legal profession.
                    </p>
                  </blockquote>
                  <footer className="blockquote-footer text-dark">
                    <cite title="Source Title" className="fw-bold fs-3">D.C. Denwigwe SAN</cite>
                    <p className="ms-2 opacity-75 fs-5">Principal Partner</p>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-5 bg-white">
        <div className="container p-0 py-lg-5" data-aos="fade-up">
          <div className="text-center mb-5">
            <h6 className="fw-bold text-uppercase mb-2" style={{ letterSpacing: '2px', color: '#ccb68e' }}>Recognition</h6>
            <h2 className="display-5 fw-bold" style={{ fontFamily: 'Tahoma, sans-serif' }}>Awards & Recognition</h2>
            <div className="mx-auto mt-3" style={{ width: '60px', height: '3px', backgroundColor: '#ccb68e' }}></div>
          </div>
          
          <div className="row g-4 justify-content-center">
            {awards.map((award, index) => (
              <div key={index} className="col-lg-3 col-md-6 text-center">
                <div className="p-4 h-100 transition-all hover-lift">
                  <div className="bg-light rounded-4 p-4 mb-4 shadow-sm border border-transparent h-100 award-card">
                    <i className={`fa-solid ${award.icon} display-4 mb-3`} style={{ color: '#ccb68e' }}></i>
                    <h5 className="fw-bold mb-2">{award.title}</h5>
                    <span className="badge bg-dark px-3 py-2 rounded-pill">{award.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section (Reusing pattern from Home) */}
      <section className="py-5 bg-dark text-white text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ 
          backgroundImage: 'radial-gradient(#996515 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="container position-relative z-index-1 py-4">
          <h2 className="display-5 fw-bold mb-4">Need Expert Legal Guidance?</h2>
          <p className="lead mb-5 opacity-75">Connect with our team of professionals for precision, competence and devotion.</p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg text-uppercase">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      <LocationMap />
    </main>
  );
}
