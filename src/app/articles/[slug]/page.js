import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import { articleBySlugQuery } from '@/lib/sanity.queries';

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  let article = null;
  try {
    article = await sanityClient.fetch(articleBySlugQuery, { slug });
  } catch (error) {
    console.error("Error fetching article:", error);
  }

  if (!article) {
    return notFound();
  }

  return (
    <main>
      <header className="subpage-header articles">
        <div className="container p-0">
          <Link href="/articles" className="text-white opacity-75 text-decoration-none small mb-3 d-inline-block hover-primary">&larr; Back to Articles</Link>
          <h1 className="display-4 fw-bold">{article.title}</h1>
          <div className="d-flex align-items-center gap-3 mt-3">
             <span className="badge bg-primary text-uppercase">{article.category?.replace('-', ' ')}</span>
             <span className="text-white opacity-75 small">{new Date(article._updatedAt || article._createdAt).toLocaleDateString('en-NG', { dateStyle: 'long' })}</span>
          </div>
        </div>
      </header>

      <section className="container p-0 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {article.coverImage && (
              <div className="position-relative mb-5 rounded shadow-sm overflow-hidden" style={{ height: '500px' }}>
                <Image src={urlFor(article.coverImage).url()} alt={article.title} fill className="object-cover" />
              </div>
            )}

            <div className="bg-white p-5 rounded shadow-sm border">
               <div className="mb-4 pb-4 border-bottom d-flex justify-content-between align-items-center">
                 <p className="mb-0 text-muted">Written by: <strong className="text-dark">{article.author || 'SAN & Associates'}</strong></p>
               </div>

               <div className="content-readable text-muted fs-5 lh-lg">
                 <PortableText value={article.body} />
               </div>

               <div className="mt-5 pt-5 border-top">
                 <h4 className="h5 fw-bold mb-4">Share this article</h4>
                 <div className="d-flex gap-3">
                    <button className="btn btn-sm btn-outline-secondary px-4 fw-bold">Twitter / X</button>
                    <button className="btn btn-sm btn-outline-secondary px-4 fw-bold">LinkedIn</button>
                    <button className="btn btn-sm btn-outline-secondary px-4 fw-bold">Facebook</button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
