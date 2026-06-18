'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function HomeClient({ backgroundImages, messages, lawyers, videos, caseStudies, articles }) {
  const [activeVideo, setActiveVideo] = useState(null);

  // Logic for rotating lawyers every 48 hours
  const featuredLawyers = React.useMemo(() => {
    if (!lawyers || lawyers.length === 0) return [];
    
    // Using a 48-hour period in milliseconds
    const rotationPeriod = 48 * 60 * 60 * 1000;
    const currentTime = new Date().getTime();
    
    // Calculate the index for rotation
    const rotationIndex = Math.floor(currentTime / rotationPeriod) % lawyers.length;
    
    // Get 3 lawyers, wrapping around the end of the array if necessary
    const selected = [];
    for (let i = 0; i < 3 && i < lawyers.length; i++) {
      selected.push(lawyers[(rotationIndex + i) % lawyers.length]);
    }
    return selected;
  }, [lawyers]);

  return (
    <main>
      {/* Hero Section */}
      <section className="position-relative vh-100 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={'fade'}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-100 w-100"
        >
          {backgroundImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="position-relative h-100 w-100">
                <Image
                  src={src}
                  alt={`Background ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  style={{ filter: 'brightness(0.3)' }}
                  quality={85}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="position-absolute top-50 translate-middle-y w-100" style={{ zIndex: 10 }}>
          <div className="container p-0">
            <div className="col-lg-8 text-white" data-aos="fade-right">
              <h1 className="display-2 mb-4 text-shadow">D.C. DENWIGWE AND ASSOCIATES</h1>
              <p className="lead fs-3 mb-5 text-shadow">Delivering Trusted Legal Solutions in Nigeria and Beyond</p>
              <div className="d-flex gap-3">
                <Link href="/services" className="btn btn-sm px-md-5 py-3 fw-bold text-uppercase">SCHEDULE A CONSULTATION</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Slider Section */}
      <section className="py-3 shadow-sm" data-aos="fade-up">
        <div className="container p-0">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect={'fade'}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                fadeEffect={{ crossFade: true }}
                loop={true}
                className="text-slider"
              >
                {messages.map((msg, index) => (
                  <SwiperSlide key={index}>
                    <p className="display-6 text-secondary mb-0">{msg}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Description Section */}
      <section className="py-5">
        <div className="container p-0">
          <div className="row g-4">
            <div className="col-lg-4 py-4" data-aos="fade-right">
                <p className='text-golden fs-5 fw-bold mb-3'> D.C. DENWIGWE & ASSOCIATES, EZIEFULE CHAMBERS</p>
                <h1 className="mb-4">Your Premier Law Firm In Nigeria</h1>
                <p className="text-muted mb-4">At D.C. Denwigwe  & Associates, Eziefule Chambers, the standard is excellence; we are relentless advocates for your success. As a top-tier law firm in Nigeria, our proven track record of dominating legal battles ensures that our clients receive deserving justice & outcomes.</p>
                <Link href="/about" className="text-decoration-none">
                  <span className="fs-5 text-golden fw-bold">Discover Our Edge &rarr;</span>
                </Link>
            </div>
            <div className="col-lg-4" data-aos="zoom-in">
                <Image 
                  src="/images/uncled3.jpg"
                  alt="Firm image"
                  width={400}
                  height={300}
                  style={{ height: "auto", width: "100%", maxWidth: "400px" }}
                  priority
                  loading="eager"
                /> 
            </div>
            <div className="col-lg-4 with py-4" data-aos="fade-left">
              <p>With a deep understanding of the Nigerian legal system and a commitment to excellence, our team of seasoned lawyers navigates complex legal challenges with a strategic and assertive approach.</p> 
              <p>We pride ourselves on our ability to deliver results, making us the go-to firm for high-stakes litigation, corporate law, and bespoke legal solutions.</p>
              <h4>D.C. Denwigwe SAN</h4>
              <p>Principal Partner, D.C. DENWIGWE & ASSOCIATES</p>
              <Image src="/images/sign.png" alt="Signature" width={200} height={100} style={{ height: "auto", width: "30%", maxWidth: "400px" }} /> 
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid - Now using dynamic lawyers if needed, or keeping original structure */}
      <section className="bg-light py-md-5">
        <div className="container pb-5 mb-5">
          <div className="row g-3">
            {[
              { title: "The Pillars Of Our Success", text: "Distinguished practitioners with years of experience and success, delivering trusted solutions across diverse industries.", link: "/team", caption: "Meet the Team →",},
              { title: "Sectors", text: "From corporate and commercial enterprises to energy, finance, technology, and public services, our team delivers tailored solutions across industries.", icon: "fa-solid fa-industry" },
              { title: "Who We Are", text: "Established in the 1980s, the firm has been at the vanguard of Nigerian legal excellence, shaping law practice with a legacy of distinction, trust, and enduring influence.", icon: "fa-solid fa-users" },
              { title: "Proven Success", text: "Our reputation is built on a legacy of securing favorable outcomes. We are dedicated to winning what you deserve while abiding by the rules that govern the profession.", icon: "fa-solid fa-lightbulb" }
            ].map((item, index) => (
              <div key={index} className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className={`card border-0 shadow-sm p-4 py-5 transition-all hover-lift my-lg-5 ${index === 0 ? "card-bg-image" : "card-bg"}`}>
                  <div className={`card-body p-0 ${index === 0 ? "text-white" : "text-start"}`}>
                    <i className={`${item.icon} card-icon mb-4`}></i>
                    <h2 className={`fs-4 fw-bold mb-3 ${index === 0 ? "text-white" : "text-primary"}`}>{item.title}</h2>
                    <p className={`card-text ${index === 0 ? "text-white" : "text-muted"}`}>{item.text}</p>
                    {index === 0 && (
                      <Link href={item.link} className="btn btn-link p-0 text-decoration-none fw-bold text-white px-4 py-4">
                        {item.caption}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Lawyers Preview if requested (optional but good for CMS integration) */}
      
      {/* Legal Practice Areas Section */}
      <section className="py-3 uncledodo text-light mx-lg-5">
        <div className="container-fluid">
          <div className="row align-items-center g-5">
            <div className="col-md-5 position-relative d-none d-lg-block" data-aos="fade-right">
              <div className="image-overlay-container h-100">
                <Image src="/images/uncled4.jpg" alt="Portrait of D.C. Denwigwe SAN" fill className="rounded shadow object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                <div className="image-gradient"></div>
                <div className="overlay-text text-white px-2 pb-5">
                  <p className="fst-italic mb-2 fs-5">“It is not by our actions that we obtain our portion, but by grace that we are given a share”</p>
                  <h5 className="fw-bold mb-0 fs-3">D.C. DENWIGWE SAN</h5>
                  <p className="small text-secondary">Principal, D.C. DENWIGWE and Associates — Eziefule Chambers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 px-5 py-5 py-lg-0" data-aos="fade-left">
              <h6 className="uncled-icon mb-3">OUR AREAS OF LEGAL DOMINANCE</h6>
              <h2 className="fs-1 mb-5">Legal Practice Areas</h2>
              <div className="row row-cols-1 row-cols-md-2 g-5">
                {[
                  { icon: "fa-solid fa-scale-balanced", title: "Public Law", text: "Advising on constitutional matters, governance structures, and disputes between individuals and the state." },
                  { icon: "fa-solid fa-user-tie", title: "Private Law", text: "Managing legal relationships between individuals and corporations, ensuring rights and obligations are protected." },
                  { icon: "fa-solid fa-gavel", title: "Criminal Law", text: "Providing robust defense and strategic representation in criminal allegations, safeguarding fundamental rights." },
                  { icon: "fa-solid fa-building", title: "Real Estate & Property", text: "Guiding clients through property transactions, documentation, and litigation with precision and reliability." },
                  { icon: "fa-solid fa-briefcase", title: "Labour & Employment Law", text: "Offering expert counsel on workplace disputes, employment contracts, and union negotiations." },
                  { icon: "fa-solid fa-handshake", title: "Litigation & ADR", text: "Delivering aggressive courtroom advocacy and effective alternative dispute resolution strategies." },
                  { icon: "fa-solid fa-graduation-cap", title: "Election Petitions", text: "Handling electoral disputes with deep knowledge of Nigerian electoral law and judicial processes." },
                  { icon: "fa-solid fa-chart-line", title: "Corporate & Commercial", text: "Supporting businesses with compliance, contracts, mergers, acquisitions, and commercial litigation." },
                  { icon: "fa-solid fa-globe", title: "International Law", text: "Advising on cross-border transactions, treaties, and disputes involving foreign jurisdictions." },
                  { icon: "fa-solid fa-heart", title: "Family Law", text: "Resolving matters of marriage, divorce, custody, and inheritance with sensitivity and professionalism." },
                  { icon: "fa-solid fa-landmark", title: "Administrative Law", text: "Challenging government decisions, licenses, and regulatory actions before tribunals and courts." },
                  { icon: "fa-solid fa-shield-alt", title: "Human Rights Law", text: "Protecting civil liberties and advocating for justice in cases of rights violations." },
                  { icon: "fa-solid fa-money-bill-wave", title: "Banking & Finance", text: "Counseling on financial regulations, loan agreements, and compliance with monetary policies." },
                  { icon: "fa-solid fa-industry", title: "Energy & Natural Resources", text: "Advising on oil, gas, mining, and renewable energy projects, including regulatory compliance." },
                  { icon: "fa-solid fa-truck", title: "Transportation & Maritime", text: "Handling shipping disputes, aviation law, and logistics contracts with global reach." },
                  { icon: "fa-solid fa-leaf", title: "Environmental Law", text: "Ensuring compliance with environmental regulations and representing clients in sustainability disputes." },
                  { icon: "fa-solid fa-file-contract", title: "Contract Law", text: "Drafting, reviewing, and enforcing agreements to protect clients’ interests." },
                  { icon: "fa-solid fa-book", title: "Legal Research & Advisory", text: "Providing in-depth research and expert opinions to support litigation and policy development." }

                ].map((item, index) => (
                  <div key={index} className="col">
                    <div className="d-flex align-items-start">
                      <i className={`${item.icon} uncled-icon fs-3 me-3`}></i>
                      <div>
                        <h5 className="fw-semibold mb-1">{item.title}</h5>
                        <p className=" text-secondary mb-0">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="py-5 bg-light">
          <div className="container p-0">
            <div className="text-center mb-5" data-aos="fade-up">
              <h6 className="text-golden mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Proven Results</h6>
              <h2 className="display-4 fw-bold">Featured Case Studies</h2>
            </div>
            <div className="row g-5">
              {caseStudies.map((cs, index) => (
                <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift transition-all bg-white">
                    <div className="position-relative" style={{ height: '240px' }}>
                      {cs.image ? (
                        <Image src={urlFor(cs.image).url()} alt={cs.title} fill className="object-cover" />
                      ) : (
                        <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white opacity-25">No Image</div>
                      )}
                      <div className="position-absolute bottom-0 start-0 m-3">
                        <span className="badge bg-primary text-uppercase px-3 py-2">{cs.practiceArea}</span>
                      </div>
                    </div>
                    <div className="card-body p-4">
                      <h3 className="h5 fw-bold mb-3">{cs.title}</h3>
                      <p className="card-text text-muted small line-clamp-3 mb-4">{cs.summary}</p>
                      <Link href={`/case-studies/${cs.slug}`} className="btn btn-sm btn-outline-primary fw-bold">View Case Study &rarr;</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
               <Link href="/case-studies" className="btn btn-primary px-5 py-3 fw-bold rounded-pill text-uppercase">View All Case Studies</Link>
            </div>
          </div>
        </section>
      )}

      {/* Stories from Legal Frontiers Section (Dynamic from YouTube) */}
      <section className="py-5 bg-white overflow-hidden">
        <div className="container p-0">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="uncled-icon mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Legal Education & Insights</h6>
            <h2 className="display-4 fw-bold">Stories from Legal Frontiers</h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>Deep dives into the Nigerian legal system, exploring high-stakes litigation, legal evolution, and the pursuit of justice.</p>
          </div>

          <div className="position-relative px-lg-5" data-aos="fade-up">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
              navigation={{ prevEl: '.video-prev', nextEl: '.video-next' }}
              pagination={{ clickable: true, el: '.video-pagination' }}
              autoplay={{ delay: 6000 }}
              loop={videos.length > 3}
              className="video-swiper pb-5"
            >
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div 
                    onClick={() => setActiveVideo(video.id)} 
                    style={{ cursor: 'pointer' }}
                    className="video-card rounded-4 overflow-hidden shadow-sm bg-light hover-lift"
                  >
                    <div className="video-thumbnail position-relative bg-dark" style={{ height: '220px' }}>
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                      <div className="position-absolute top-50 start-50 translate-middle">
                        <div className="play-btn rounded-circle d-flex align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                          <i className="fa-solid fa-play ms-1 fs-4 text-primary" style={{ color: '#996515 !important' }}></i>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-white text-dark">
                      <h4 className="h5 fw-bold mb-2 line-clamp-2" style={{ fontFamily: 'Tahoma, sans-serif' }}>{video.title}</h4>
                      <p className="text-muted small mb-0">Video Presentation • D.C. Denwigwe SAN</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
              <button className="video-prev btn rounded-circle border-0 d-flex align-items-center justify-content-center bg-light shadow-sm" style={{ width: '50px', height: '50px' }}>
                <i className="fa-solid fa-chevron-left text-dark"></i>
              </button>
              <div className="video-pagination d-flex gap-2"></div>
              <button className="video-next btn rounded-circle border-0 d-flex align-items-center justify-content-center bg-light shadow-sm" style={{ width: '50px', height: '50px' }}>
                <i className="fa-solid fa-chevron-right text-dark"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Team Players Section */}
      {articles && articles.length > 0 && (
        <section className="py-5 bg-white">
          <div className="container p-0">
            <div className="text-center mb-5" data-aos="fade-up">
              <h6 className="text-golden mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Legal Insights</h6>
              <h2 className="display-4 fw-bold">Latest Articles</h2>
              <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>Expert analysis and current updates on Nigerian legal developments.</p>
            </div>
            <div className="row g-5">
              {articles.map((article, index) => (
                <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift transition-all bg-light">
                    <div className="position-relative" style={{ height: '240px' }}>
                      {article.coverImage ? (
                        <Image src={urlFor(article.coverImage).url()} alt={article.title} fill className="object-cover" />
                      ) : (
                        <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white opacity-25">No Image</div>
                      )}
                    </div>
                    <div className="card-body p-4">
                      <div className="mb-2">
                        <span className="text-golden small fw-bold text-uppercase">{new Date(article.publishedAt).toLocaleDateString('en-NG', { dateStyle: 'medium' })}</span>
                      </div>
                      <h3 className="h5 fw-bold mb-3">{article.title}</h3>
                      <p className="card-text text-muted small line-clamp-3 mb-4">{article.excerpt}</p>
                      <Link href={`/articles/${article.slug}`} className="btn btn-sm btn-outline-primary fw-bold">Read Article &rarr;</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link href="/articles" className="btn btn-primary px-5 py-3 fw-bold rounded-pill text-uppercase">View All Articles</Link>
            </div>
          </div>
        </section>
      )}

      {/* Featured Team Players Section */}
      <section className="py-5 bg-light">
        <div className="container p-0">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="uncled-icon mb-3 text-uppercase fw-bold" style={{ letterSpacing: '2px' }}>Excellence in Advocacy</h6>
            <h2 className="display-4 fw-bold">Featured Team Players</h2>
            <p className="text-muted lead mx-auto" style={{ maxWidth: '700px' }}>Meet our seasoned legal professionals dedicated to precision, competence, and devotion.</p>
          </div>

          <div className="row g-4 justify-content-center">
            {featuredLawyers.map((lawyer, index) => (
              <div className="col-lg-4 col-md-6" key={lawyer._id || index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card border-0 shadow-sm h-100 overflow-hidden hover-lift transition-all">
                  <div className="position-relative" style={{ height: '350px' }}>
                    {lawyer.photo ? (
                      <Image 
                        src={urlFor(lawyer.photo).url()} 
                        alt={lawyer.name} 
                        fill 
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-100 h-100 bg-secondary d-flex align-items-center justify-content-center">
                        <i className="fa-solid fa-user-tie fs-1 text-white opacity-25"></i>
                      </div>
                    )}
                  </div>
                  <div className="card-body p-4 text-center">
                    <h3 className="h5 fw-bold mb-1">{lawyer.name}</h3>
                    <p className="text-primary small fw-bold text-uppercase mb-3" style={{ color: '#996515 !important' }}>{lawyer.position}</p>
                    <div className="text-muted small line-clamp-3 mb-0">
                      {lawyer.bio ? (
                        <PortableText value={lawyer.bio} />
                      ) : (
                        <p>Dedicated legal professional committed to delivering excellent legal solutions and strategic advocacy.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="fade-up">
            <Link href="/team" className="btn btn-outline-primary px-5 py-3 fw-bold rounded-pill text-uppercase">
              Explore Our Full Team
            </Link>
          </div>
        </div>
      </section>

      {/* Bold Call to Action Section */}
      <section className="py-5 bg-dark text-white text-center position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-50" style={{ 
          backgroundImage: 'radial-gradient(#996515 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
        <div className="container position-relative z-index-1 py-4">
          <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">Legal Guidiance When it Matters Most</h2>
          <div data-aos="fade-up" data-aos-delay="200">
            <Link href="/contact" className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill shadow-lg text-uppercase hover-scale transition-all">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-index-2000"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)', zIndex: 2000 }}
          onClick={() => setActiveVideo(null)}
        >
          <div className="position-relative w-100 px-3" style={{ maxWidth: '900px' }} onClick={e => e.stopPropagation()}>
            <button 
              className="position-absolute top-0 end-0 mt-n5 me-0 btn text-white fs-3 border-0 bg-transparent"
              onClick={() => setActiveVideo(null)}
              style={{ transform: 'translateY(-100%)' }}
            >
              <i className="fa-solid fa-times"></i>
            </button>
            <div className="ratio ratio-16x9 shadow-lg rounded overflow-hidden bg-dark">
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
