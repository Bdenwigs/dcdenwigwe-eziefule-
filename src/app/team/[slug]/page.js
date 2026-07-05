import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { teamMemberBySlugQuery } from '@/lib/sanity.queries';

export default async function LawyerProfilePage({ params }) {
  const { slug } = await params;
  let lawyer = null;
  try {
    lawyer = await sanityClient.fetch(teamMemberBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching lawyer profile:", error);
  }

  if (!lawyer) {
    return notFound();
  }

  return (
    <main>
      <header className="subpage-header team">
        <div className="container p-0">
          <Link href="/team" className="text-white opacity-75 text-decoration-none small mb-3 d-inline-block hover-primary">&larr; Back to Team</Link>
          <h1 className="display-4 fw-bold">{lawyer.name}</h1>
          <p className="lead opacity-75">{lawyer.position}</p>
        </div>
      </header>

      <section className="container p-0 py-5">
        <div className="row g-5">
          {/* Left Column: Image and Basic Info */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm overflow-hidden mb-4">
              <div className="position-relative" style={{ height: '450px' }}>
                {lawyer.photo ? (
                  <Image src={urlFor(lawyer.photo).url()} alt={lawyer.name} fill className="object-cover" />
                ) : (
                  <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">No Photo</div>
                )}
              </div>
              <div className="card-body p-4 bg-light">
                <div className="mb-3">
                  <h3 className="h6 text-uppercase fw-bold text-muted mb-2">Email</h3>
                  <p className="mb-0 small"><a href={`mailto:${lawyer.email}`} className="text-primary text-decoration-none">{lawyer.email}</a></p>
                </div>
                {lawyer.linkedinUrl && (
                  <div className="mb-0">
                    <h3 className="h6 text-uppercase fw-bold text-muted mb-2">LinkedIn</h3>
                    <p className="mb-0 small"><a href={lawyer.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">View Profile</a></p>
                  </div>
                )}
              </div>
            </div>

            {lawyer.practiceAreas && (
              <div className="bg-white p-4 rounded shadow-sm border mb-4">
                <h3 className="h5 fw-bold mb-3 text-primary border-bottom pb-2">Practice Areas</h3>
                <ul className="list-unstyled mb-0">
                  {lawyer.practiceAreas.map((area, i) => (
                    <li key={i} className="mb-2 d-flex align-items-center">
                      <i className="fa-solid fa-check text-primary me-2 small"></i>
                      <span className="small fw-semibold">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column: Bio and Details */}
          <div className="col-lg-8">
            <div className="bg-white p-5 rounded shadow-sm border h-100">
              {lawyer.bio && (
                <div className="mb-5">
                  <h3 className="h4 fw-bold mb-4 text-primary">Biography</h3>
                  <div className="content-readable text-muted">
                    <PortableText value={lawyer.bio} />
                  </div>
                </div>
              )}

              <div className="row g-4">
                {lawyer.qualifications && (
                  <div className="col-md-6">
                    <h3 className="h5 fw-bold mb-3 text-primary border-bottom pb-2">Qualifications</h3>
                    <ul className="ps-3 mb-0 small text-muted">
                      {lawyer.qualifications.map((q, i) => <li key={i} className="mb-1">{q}</li>)}
                    </ul>
                  </div>
                )}
                {lawyer.memberships && (
                  <div className="col-md-6">
                    <h3 className="h5 fw-bold mb-3 text-primary border-bottom pb-2">Memberships</h3>
                    <ul className="ps-3 mb-0 small text-muted">
                      {lawyer.memberships.map((m, i) => <li key={i} className="mb-1">{m}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              {lawyer.yearsOfExperience && (
                <div className="mt-5 pt-4 border-top">
                  <p className="mb-0 fs-5">
                    <strong>Experience:</strong> <span className="text-primary">{lawyer.yearsOfExperience}+ Years</span> of specialized legal practice.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
