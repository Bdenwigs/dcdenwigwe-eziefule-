'use client'

import Link from 'next/link';

export default function SectorsPage() {
  const sectors = [
    {
      title: "Litigation & Dispute Resolution",
      icon: "fa-scale-balanced",
      description: "Our firm delivers aggressive courtroom advocacy and strategic alternative dispute resolution. We handle complex civil and commercial disputes with a focus on achieving favorable outcomes for our clients."
    },
    {
      title: "Corporate & Commercial Law",
      icon: "fa-building-columns",
      description: "We provide comprehensive legal support for businesses, including company formation, regulatory compliance, mergers and acquisitions, and contract negotiations across various industries in Nigeria."
    },
    {
      title: "Banking & Finance",
      icon: "fa-money-bill-trend-up",
      description: "Advising financial institutions and corporate borrowers on credit facilities, security documentation, and regulatory compliance with Central Bank of Nigeria policies and other financial regulations."
    },
    {
      title: "Real Estate & Property Law",
      icon: "fa-house-chimney-window",
      description: "Expert guidance through property acquisitions, perfection of titles, joint venture developments, and property litigation. We ensure our clients' interests are protected in every transaction."
    },
    {
      title: "Energy & Natural Resources",
      icon: "fa-oil-well",
      description: "Specialized legal services for the oil, gas, and power sectors. We advise on licensing, regulatory compliance, host community relations, and environmental legal requirements."
    },
    {
      title: "Taxation",
      icon: "fa-file-invoice-dollar",
      description: "Providing strategic tax advisory services to help clients navigate the Nigerian tax system, ensuring compliance while optimizing tax efficiency for individuals and corporate entities."
    },
    {
      title: "Employment & Labour Law",
      icon: "fa-briefcase",
      description: "Counseling employers and employees on workplace disputes, employment contracts, trade union relations, and compliance with the Labour Act and other relevant industrial laws."
    },
    {
      title: "Intellectual Property",
      icon: "fa-copyright",
      description: "Protecting innovation and creativity through trademark registration, patent protection, and copyright enforcement. We help clients safeguard their valuable intangible assets."
    },
    {
      title: "Family & Succession Law",
      icon: "fa-people-roof",
      description: "Resolving matters of marriage, divorce, child custody, and estate planning with sensitivity. We provide expert advice on Wills, probate, and letters of administration."
    },
    {
      title: "Constitutional & Administrative Law",
      icon: "fa-landmark",
      description: "Challenging administrative actions and defending fundamental rights. We provide expert counsel on governance structures and disputes involving government agencies."
    },
    {
      title: "Criminal Defense",
      icon: "fa-gavel",
      description: "Providing robust legal representation for individuals facing criminal charges. We are committed to safeguarding fundamental rights and ensuring a fair trial within the justice system."
    },
    {
      title: "International Trade & Investment",
      icon: "fa-globe-africa",
      description: "Advising on cross-border transactions, foreign direct investment, and international trade agreements. We help foreign investors navigate the Nigerian legal and regulatory landscape."
    },
    {
      title: "Healthcare & Medical Law",
      icon: "fa-user-doctor",
      description: "Navigating the complexities of medical negligence, healthcare regulation, and patients' rights. We provide expert counsel to healthcare providers and individuals in the medical sector."
    },
    {
      title: "Technology & Data Protection",
      icon: "fa-microchip",
      description: "Providing legal frameworks for the digital economy, including data privacy compliance (NDPR), software licensing, and legal advisory for technology-driven enterprises."
    },
    {
      title: "Environmental & Climate Law",
      icon: "fa-leaf",
      description: "Advising on environmental impact assessments, carbon credit regulations, and climate change litigation. We help clients navigate Nigeria's evolving environmental regulatory landscape."
    },
    {
      title: "Telecommunications & Media Law",
      icon: "fa-tower-broadcast",
      description: "Legal support for the telco and media industries, covering NCC regulatory compliance, spectrum licensing, broadcasting rights, and digital media regulations."
    },
    {
      title: "Cybersecurity & Digital Rights",
      icon: "fa-shield-halved",
      description: "Defending digital liberties and advising on cybersecurity legal frameworks. We help clients navigate the Cybercrimes Act and protect against digital vulnerabilities."
    },
    {
      title: "Sports & Entertainment Law",
      icon: "fa-clapperboard",
      description: "Advising athletes, artists, and production companies on talent contracts, intellectual property rights, endorsement deals, and dispute resolution in the creative industry."
    },
    {
      title: "Maritime & Aviation Law",
      icon: "fa-ship",
      description: "Specialized counsel for shipping and aviation sectors, covering vessel registration, aircraft financing, maritime claims, and international transport regulations."
    },
    {
      title: "Human Rights & Public Interest",
      icon: "fa-hand-holding-heart",
      description: "Championing fundamental human rights and public interest litigation. We are dedicated to social justice and the protection of vulnerable groups within the legal system."
    },
    {
      title: "Fintech & Digital Banking Law",
      icon: "fa-mobile-screen-button",
      description: "Guiding fintech startups and digital banks through CBN licensing, payment system regulations, and the legal complexities of digital financial services."
    },
    {
      title: "Startup & Venture Capital Law",
      icon: "fa-rocket",
      description: "Comprehensive support for the startup ecosystem, from seed funding and venture capital investment to intellectual property protection and exit strategies."
    },
    {
      title: "Artificial Intelligence & Emerging Tech",
      icon: "fa-brain",
      description: "Navigating the legal frontiers of AI, blockchain, and emerging technologies. We advise on ethics, liability, and regulatory frameworks for the next generation of tech."
    },
    {
      title: "Healthcare Technology & Bioethics",
      icon: "fa-dna",
      description: "Advising on the intersection of healthcare, technology, and ethics, including telemedicine regulations, clinical trials, and bioethical legal standards."
    },
    {
      title: "Sustainability & ESG Compliance",
      icon: "fa-seedling",
      description: "Helping corporations integrate Environmental, Social, and Governance (ESG) standards. We provide audits, reporting guidance, and sustainability legal frameworks."
    }
  ];

  return (
    <main>
      {/* Header Section */}
      <header className="subpage-header sector" data-aos="fade-down">
        <div className="container p-0">
          <h1 className="display-3 fw-bold mb-3" style={{ fontFamily: 'Tahoma, sans-serif' }}>
            Sectors We Serve
          </h1>
          <p className="lead fw-normal text-golden opacity-100 fs-4 mb-0" style={{ color: '#ccb68e' }}>
            Comprehensive legal solutions across all sectors of Nigerian law.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-5 bg-white">
        <div className="container p-0 py-lg-4" data-aos="fade-up">
          <div className="row">
              <h2 className="display-5 fw-bold mb-4" style={{ fontFamily: 'Tahoma, sans-serif' }}>Our Practice Areas</h2>
              <p className="lead text-muted fs-5 lh-lg">
                D.C. Denwigwe SAN & Associates offers authoritative, client-focused legal representation across a wide spectrum of legal sectors. Our multi-disciplinary approach ensures that our clients receive specialized expertise tailored to their unique legal needs.
              </p>
              <div className="ms-3 mt-2" style={{ width: '80px', height: '4px', backgroundColor: '#996515' }}></div>
          </div>
        </div>
      </section>

      {/* Sector Grid Section */}
      <section className="py-5 bg-light">
        <div className="container p-0 py-lg-4">
          <div className="row g-4 justify-content-center">
            {sectors.map((sector, index) => (
              <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 p-xl-5 transition-all hover-lift bg-white">
                  <div className="mb-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px', backgroundColor: 'rgba(153, 101, 21, 0.1)' }}>
                      <i className={`fa-solid ${sector.icon} fs-2`} style={{ color: '#996515' }}></i>
                    </div>
                  </div>
                  <h3 className="h4 fw-bold mb-3">{sector.title}</h3>
                  <p className="text-muted lh-base mb-0">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ 
          backgroundImage: 'radial-gradient(#996515 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="container position-relative z-index-1 py-4">
          <h2 className="display-5 fw-bold mb-4">Need Specialized Legal Counsel?</h2>
          <p className="lead mb-5 opacity-75">Our team of experts is ready to navigate your legal challenges with precision and devotion.</p>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg text-uppercase">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
