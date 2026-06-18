'use client'

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';
import { PortableText } from '@portabletext/react';

// Define role hierarchy
const roleOrder = {
  'principal': 1,
  'head of chambers': 2,
  'managing associate': 3,
  'senior associate': 4,
  'associate': 5
};

const getRolePriority = (role) => {
  if (!role) return 100;
  const lowerRole = role.toLowerCase();
  
  // Exact matches first
  if (roleOrder[lowerRole]) return roleOrder[lowerRole];
  
  // Partial matches
  if (lowerRole.includes('principal')) return 1;
  if (lowerRole.includes('head of chambers')) return 2;
  if (lowerRole.includes('managing associate')) return 3;
  if (lowerRole.includes('senior associate')) return 4;
  if (lowerRole.includes('associate')) return 5;
  
  return 100; // Others
};

const LeadershipCard = ({ lawyer, title }) => (
  <div className="col-lg-6" data-aos="fade-up">
    <Link href={lawyer ? `/team/${lawyer.slug}` : '#'} className="text-decoration-none text-dark">
      <div className="card border-0 shadow-lg overflow-hidden h-100 bg-white leadership-card hover-lift transition-all">
        <div className="row g-0 h-100">
          <div className="col-md-5 position-relative" style={{ minHeight: '400px' }}>
            {lawyer?.photo ? (
              <Image 
                src={urlFor(lawyer.photo).url()} 
                alt={lawyer.name} 
                fill 
                className="object-cover"
                priority
              />
            ) : (
              <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">
                <i className="fa-solid fa-user-tie fs-1 opacity-25"></i>
              </div>
            )}
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className="card-body p-2 p-xl-5">
              <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px', color: '#996515 !important' }}>{title}</h6>
              <h2 className="h2 fw-bold mb-2">{lawyer?.name || 'To be assigned'}</h2>
              <p className="text-muted small text-uppercase fw-semibold mb-4 pb-2 border-bottom">{lawyer?.position}</p>
              <div className="text-muted mb-0 leadership-bio line-clamp-3">
                {lawyer?.bio ? (
                  <PortableText value={lawyer.bio} />
                ) : (
                  <p>Distinguished legal professional leading with excellence, integrity, and a commitment to justice.</p>
                )}
              </div>
              <div className="mt-4 fw-bold text-primary">
                View Full Profile &rarr;
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default function TeamClient({ initialLawyers }) {
  const [search, setSearch] = useState('');
  const [positionFilter, setPositionFilter] = useState('');
  const [practiceAreaFilter, setPracticeAreaFilter] = useState('');

  // Sort lawyers based on hierarchy
  const sortedLawyers = useMemo(() => {
    return [...initialLawyers].sort((a, b) => {
      const priorityA = getRolePriority(a.position);
      const priorityB = getRolePriority(b.position);
      
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }
      
      // Secondary sort by name for members in the same role
      return a.name.localeCompare(b.name);
    });
  }, [initialLawyers]);

  // Extract Leadership for the top section (Principal & Head of Chambers)
  const principal = sortedLawyers.find(l => getRolePriority(l.position) === 1);
  const headOfChambers = sortedLawyers.find(l => getRolePriority(l.position) === 2);

  // Filter the grid based on search/filters
  const filteredLawyers = sortedLawyers.filter(lawyer => {
    const nameMatch = lawyer.name?.toLowerCase().includes(search.toLowerCase());
    const posMatch = lawyer.position?.toLowerCase().includes(search.toLowerCase());
    const areaSearchMatch = lawyer.practiceAreas && lawyer.practiceAreas.some(area => area.toLowerCase().includes(search.toLowerCase()));
    
    const matchesSearch = nameMatch || posMatch || areaSearchMatch;
    
    const matchesPosition = positionFilter === '' || lawyer.position === positionFilter;
    
    const matchesPracticeArea = practiceAreaFilter === '' || 
      (lawyer.practiceAreas && lawyer.practiceAreas.includes(practiceAreaFilter));

    return matchesSearch && matchesPosition && matchesPracticeArea;
  });

  const uniquePositions = [...new Set(initialLawyers.map(l => l.position).filter(Boolean))];
  const uniquePracticeAreas = [...new Set(initialLawyers.flatMap(l => l.practiceAreas || []))];

  return (
    <main>
      <header className="subpage-header team" data-aos="fade-down">
        <div className="container p-0">
          <h1 className="fw-bold display-2 mb-4 text-shadow">Our Team</h1>
          <p className="lead opacity-75 fs-4">Meet the Expert Lawyers Behind D. C. Denwigwe and Associates.</p>
        </div>
      </header>

      {/* Our Leadership Section */}
      <section className="py-5 bg-light border-bottom">
        <div className="container p-0 py-lg-5">
          <div className="text-center mb-5" data-aos="fade-up">
            <h6 className="text-primary text-uppercase fw-bold mb-3" style={{ letterSpacing: '3px', color: '#996515 !important' }}>Leadership & Authority</h6>
            <h2 className="display-4 fw-bold">Our Leadership</h2>
            <div className="mx-auto bg-primary mt-3" style={{ width: '80px', height: '4px', backgroundColor: '#996515' }}></div>
          </div>
          
          <div className="row g-4 justify-content-center">
            <LeadershipCard lawyer={principal} title="Principal of the Firm" />
            <LeadershipCard lawyer={headOfChambers} title="Head of Chambers" />
          </div>
        </div>
      </section>

      <section className="container p-0 py-5" data-aos="fade-up">
        <div className="text-center mb-5">
            <h2 className="fw-bold h1">Legal Professionals</h2>
            <p className="text-muted">Browse our full list of experienced attorneys and legal advisors.</p>
        </div>

        {/* Filters and Search */}
        <div className="row g-3 mb-5 bg-white p-4 rounded shadow-sm border mx-0">
          <div className="col-md-4">
            <label className="form-label fw-bold small text-uppercase">Search</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Name, position, or area..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold small text-uppercase">Position</label>
            <select className="form-select" value={positionFilter} onChange={(e) => setPositionFilter(e.target.value)}>
              <option value="">All Positions</option>
              {uniquePositions.map(pos => <option key={pos} value={pos}>{pos}</option>)}
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold small text-uppercase">Practice Area</label>
            <select className="form-select" value={practiceAreaFilter} onChange={(e) => setPracticeAreaFilter(e.target.value)}>
              <option value="">All Areas</option>
              {uniquePracticeAreas.map(area => <option key={area} value={area}>{area}</option>)}
            </select>
          </div>
        </div>

        <div className="row g-5">
          {filteredLawyers.length > 0 ? (
            filteredLawyers.map((lawyer, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <Link href={`/team/${lawyer.slug}`} className="text-decoration-none group">
                  <div className="card h-100 border-0 shadow-sm overflow-hidden hover-lift transition-all">
                    <div className="position-relative" style={{ height: '350px' }}>
                      {lawyer.photo ? (
                        <Image src={urlFor(lawyer.photo).url()} alt={lawyer.name} fill className="object-cover" />
                      ) : (
                        <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">No Photo</div>
                      )}
                    </div>
                    <div className="card-body p-4 text-center">
                      <h2 className="h4 mb-1 text-primary fw-bold">{lawyer.name}</h2>
                      <p className="text-muted small text-uppercase fw-semibold mb-0">{lawyer.position}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="lead text-muted">No team members found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
