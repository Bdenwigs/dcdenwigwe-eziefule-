'use client'

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Auto-close menu on scroll if it's open
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      ref={navbarRef}
      className={`navbar px-3 navbar-expand-lg fixed-top transition-all ${
        scrolled || isOpen ? 'bg-white shadow-sm navbar-light scrolled' : 'bg-transparent navbar-dark'
      }`} 
      style={{ zIndex: 1100, transition: '0.6s ease-in-out' }}
    >
      <div className="container p-0">
        <Link href="/" className="navbar-brand d-flex align-items-center p-0">
          <Image 
            src="/images/logoeziefule.png" 
            alt="SAN & Associates Logo" 
            width={200} 
            height={55} 
            priority
            className={`logo-img ${scrolled || isOpen ? 'filter-black' : ''}`}
            style={{ width: 'auto', height: '55px' }}
          />
        </Link>
        
        {/* Custom Toggle Button */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isOpen} 
          aria-label="Toggle navigation"
        >
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold" style={{ fontSize: '0.85rem' }}>
            <li className="nav-item"><Link href="/" className="nav-link px-3" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link px-3" onClick={() => setIsOpen(false)}>About</Link></li>
            <li className="nav-item"><Link href="/services" className="nav-link px-3" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li className="nav-item"><Link href="/sectors" className="nav-link px-3" onClick={() => setIsOpen(false)}>Sectors</Link></li>
            <li className="nav-item"><Link href="/team" className="nav-link px-3" onClick={() => setIsOpen(false)}>Team</Link></li>
            <li className="nav-item"><Link href="/articles" className="nav-link px-3" onClick={() => setIsOpen(false)}>Articles</Link></li>
            <li className="nav-item"><Link href="/case-studies" className="nav-link px-3" onClick={() => setIsOpen(false)}>Case Studies</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link px-3 ms-lg-5" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
