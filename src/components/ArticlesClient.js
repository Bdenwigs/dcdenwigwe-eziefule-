'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity.client';

export default function ArticlesClient({ initialArticles }) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredArticles = initialArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === '' || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const uniqueCategories = [...new Set(initialArticles.map(a => a.category).filter(Boolean))];

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredArticles.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredArticles.length / postsPerPage);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1);
  };

  return (
    <main>
      <header className="subpage-header articles" data-aos="fade-down">
        <div className="container p-0">
          <h1 className='display-2 mb-4 text-shadow fw-bold'>Articles & Insights</h1>
          <p className="lead fw-normal opacity-100 fs-4 mb-0" style={{ color: '#ccb68e' }}>Stay informed with the latest legal news and analysis.</p>
        </div>
      </header>

      <section className="container p-0 py-5" data-aos="fade-up">
        {/* Search and Category Filter */}
        <div className="row g-3 mb-5 bg-white p-4 rounded shadow-sm border mx-0">
          <div className="col-md-8">
            <label className="form-label fw-bold small text-uppercase">Search Articles</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search by title..." 
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label fw-bold small text-uppercase">Category</label>
            <select className="form-select" value={categoryFilter} onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              {uniqueCategories.map(cat => <option key={cat} value={cat}>{cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>)}
            </select>
          </div>
        </div>

        <div className="row g-5">
          {currentPosts.length > 0 ? (
            currentPosts.map((article, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <article className="card h-100 border-0 shadow-sm overflow-hidden hover-lift transition-all">
                  <div className="position-relative" style={{ height: '200px' }}>
                    {article.coverImage ? (
                      <Image src={urlFor(article.coverImage).url()} alt={article.title} fill className="object-cover" />
                    ) : (
                      <div className="bg-secondary w-100 h-100 d-flex align-items-center justify-content-center text-white">No Image</div>
                    )}
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary text-uppercase" style={{ fontSize: '0.7rem' }}>{article.category?.replace('-', ' ')}</span>
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <p className="text-muted small mb-2">{new Date(article.publishDate || article._updatedAt || article._createdAt).toLocaleDateString('en-NG', { dateStyle: 'long' })}</p>
                    <h2 className="h5 fw-bold mb-3">{article.title}</h2>
                    <p className="card-text text-muted small line-clamp-3 mb-4">{article.excerpt}</p>
                    <Link href={`/articles/${article.slug}`} className="btn btn-sm btn-outline-primary fw-bold">Read More &rarr;</Link>
                  </div>
                </article>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <p className="lead text-muted">No articles found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="mt-5">
            <ul className="pagination justify-content-center gap-2">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link rounded shadow-sm" onClick={() => setCurrentPage(prev => prev - 1)}>&laquo;</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                  <button className="page-link rounded shadow-sm" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link rounded shadow-sm" onClick={() => setCurrentPage(prev => prev + 1)}>&raquo;</button>
              </li>
            </ul>
          </nav>
        )}
      </section>
    </main>
  );
}
