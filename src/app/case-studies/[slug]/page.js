import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { caseStudyBySlugQuery } from '@/lib/sanity.queries';

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  let cs = null;
  try {
    cs = await sanityClient.fetch(caseStudyBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching case study:", error);
  }

  if (!cs) {
    return notFound();
  }

  return (
    <main>
      <header className="subpage-header case">
        <div className="container p-0">
          <Link href="/case-studies" className="text-white opacity-75 text-decoration-none small mb-3 d-inline-block hover-primary">&larr; Back to Case Studies</Link>
          <h1 className="display-4 fw-bold">{cs.title}</h1>
          <p className="lead opacity-75">{cs.clientIndustry}</p>
        </div>
      </header>

      <section className="container p-0 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {cs.image && (
              <div className="position-relative mb-5 rounded shadow-sm overflow-hidden" style={{ height: '400px' }}>
                <Image src={urlFor(cs.image).url()} alt={cs.title} fill className="object-cover" />
              </div>
            )}

            <div className="row g-5">
              <div className="col-lg-4">
                <div className="bg-light p-4 rounded shadow-sm border sticky-top" style={{ top: '100px' }}>
                  <h3 className="h5 fw-bold mb-4 border-bottom pb-2 text-primary">Case Details</h3>
                  <div className="mb-4">
                    <h4 className="h6 text-uppercase fw-bold text-muted small mb-1">Industry</h4>
                    <p className="fw-semibold">{cs.clientIndustry}</p>
                  </div>
                  <div className="mb-0">
                    <h4 className="h6 text-uppercase fw-bold text-muted small mb-1">Date</h4>
                    <p className="fw-semibold mb-0">{new Date(cs.publishDate).toLocaleDateString('en-NG', { dateStyle: 'long' })}</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="bg-white p-5 rounded shadow-sm border">
                  {cs.details ? (
                    <div className="content-readable text-muted fs-5 lh-lg">
                      <PortableText value={cs.details} />
                    </div>
                  ) : (
                    <div className="mb-0">
                      <h3 className="h4 fw-bold mb-3 text-primary">Case Summary</h3>
                      <p className="text-muted fs-5 lh-lg">{cs.summary}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
