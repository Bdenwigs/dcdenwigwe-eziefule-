'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

export default function CaseStudiesClient({ initialCaseStudies }) {
  const [search, setSearch] = useState('');
  const [industryFilter, setPositionFilter] = useState('');

  const filteredCaseStudies = initialCaseStudies.filter(cs => {
    const matchesSearch = cs.title.toLowerCase().includes(search.toLowerCase());
    const matchesIndustry = industryFilter === '' || cs.clientIndustry === industryFilter;
    return matchesSearch && matchesIndustry;
  });

  const uniqueIndustries = [...new Set(initialCaseStudies.map(cs => cs.clientIndustry).filter(Boolean))];

  return (
    <main>
      <header className="subpage-header case" data-aos="fade-down">
        <div className="container p-0">
          <h1 className='display-2 mb-4 text-shadow fw-bold'>Case Studies</h1>
          <p className="lead fw-normal opacity-100 fs-4 mb-0" style={{ color: '#ccb68e' }}>Explore how we&apos;ve delivered impactful legal results for our clients.</p>
        </div>
      </header>

      <section className="container p-0 py-5" data-aos="fade-up">
        {/* Filters and Search */}
        <div className="row g-3 mb-5 bg-white p-4 rounded shadow-sm border mx-0">
          <div className="col-md-8">
            <label className="form-label fw-bold small text-uppercase">Search</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search by project title..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold small text-uppercase">Industry</label>
            <select className="form-select" value={industryFilter} onChange={(e) => setPositionFilter(e.target.value)}>
              <option value="">All Industries</option>
              {uniqueIndustries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
            </select>
          </div>
        </div>

        <div className="row g-5">
          {filteredCaseStudies.length > 0 ? (
            filteredCaseStudies.map((cs, index) => (
              <div key={index} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift transition-all">
                  <div className="position-relative" style={{ height: '300px' }}>
                    {cs.image ? (
                      <Image src={urlFor(cs.image).url()} alt={cs.title} fill className="object-cover" />
                    ) : (
                      <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white opacity-25">No Image</div>
                    )}
                    <div className="position-absolute bottom-0 start-0 m-3">
                      <span className="badge bg-primary text-uppercase px-3 py-2">{cs.clientIndustry}</span>
                    </div>
                  </div>
                  <div className="card-body p-5">
                    <h2 className="h4 fw-bold mb-4">{cs.title}</h2>
                    <Link href={`/case-studies/${cs.slug}`} className="btn btn-sm btn-outline-primary fw-bold px-4">View Case Study &rarr;</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="lead text-muted">No case studies found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
