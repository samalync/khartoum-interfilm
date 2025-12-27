// @ts-nocheck
'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const activeSectionRef = useRef(activeSection);
  const isProgrammaticScroll = useRef<boolean>(false);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const { language, setLanguage } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    isProgrammaticScroll.current = true;

    // Use a more precise calculation for header height
    const header = document.querySelector<HTMLElement>('.creative-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 80;

    // Calculate element position relative to viewport
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;

    // Target position accounts for header height with small buffer
    const targetPosition = absoluteElementTop - headerHeight - 10;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });

    // Reset the flag after scroll animation completes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1500); // Adjust timeout based on scroll duration
  };

  useEffect(() => {
    let scrollTimeout: number;

    const handleScroll = () => {
      // Debounce scroll events
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolled(window.scrollY > 50);

        // Improved section detection using more precise calculations
        const sections = ['home', 'services', 'about', 'team', 'partnerships', 'contact'];

        // Calculate viewport center
        const viewportCenter = window.innerHeight / 2;

        let currentSection = activeSectionRef.current; // Start with current active section
        let minDistance = Infinity;

        // Get current active section's distance
        const currentActiveElement = document.getElementById(activeSectionRef.current);
        if (currentActiveElement) {
          const currentRect = currentActiveElement.getBoundingClientRect();
          const currentCenter = (currentRect.top + currentRect.bottom) / 2;
          minDistance = Math.abs(currentCenter - viewportCenter);
        }

        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top;
            const elementBottom = rect.bottom;
            const elementCenter = (elementTop + elementBottom) / 2;
            const distance = Math.abs(elementCenter - viewportCenter);

            // Only switch if this section is significantly closer (at least 100px closer)
            if (distance < minDistance - 100) {
              minDistance = distance;
              currentSection = section;
            }
          }
        });

        // Only update active section if not during programmatic scroll
        if (!isProgrammaticScroll.current) {
          setActiveSection(currentSection);
        }
      }, 50); // 50ms debounce
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const navItems = [
    { id: 'home', label: language === 'ar' ? 'الرئيسية' : 'Home', icon: '' },
    { id: 'services', label: language === 'ar' ? 'الخدمات' : 'Services', icon: '' },
    { id: 'about', label: language === 'ar' ? 'من نحن' : 'About', icon: '' },
    { id: 'team', label: language === 'ar' ? 'الفريق' : 'Team', icon: '' },
    { id: 'partnerships', label: language === 'ar' ? 'الشراكات' : 'Partnerships', icon: '' },
    { id: 'contact', label: language === 'ar' ? 'التواصل' : 'Contact', icon: '' },
  ];

  return (
    <header className={`creative-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-wrapper">
        {/* Left Section: Logo */}
        <div className="header-left">
          <Link href="/" className="logo-container">
            <Image
              src="/k.png"
              alt="Khartoum Interfilm"
              width={130}
              height={60}
              className="logo-image"
            />
          </Link>
        </div>

        {/* Center Section: Navigation */}
        <div className="header-center">
          <nav className="creative-nav">
            <ul className="nav-list-creative">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item-creative">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(item.id);
                      scrollToSection(item.id);
                    }}
                    className={`nav-link-creative ${activeSection === item.id ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Section: Language Switch, CTA, Mobile Menu */}
        <div className="header-right">
          <div className="lang-switch">
            <button
              type="button"
              className={`lang-pill ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-pill ${language === 'ar' ? 'active' : ''}`}
              onClick={() => setLanguage('ar')}
            >
              العربية
            </button>
          </div>

          <div className="floating-cta">
            <button className="pulse-button">
              <span className="button-text">{language === 'ar' ? 'ابدأ مشروع' : 'Start Project'}</span>
              {/* <span className="button-sparkle"></span> */}
            </button>
          </div>

          <button className="creative-menu-btn">
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .creative-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 0.6rem 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .creative-header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          padding: 0.5rem 0;
          box-shadow: 0 4px 22px rgba(0, 0, 0, 0.08);
        }

        .header-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .header-center {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        /* Logo Styles */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
        }

        .logo-circle {
          width: 46px;
          height: 46px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: float 6s ease-in-out infinite;
          box-shadow: 0 6px 18px rgba(0, 27, 224, 0.4);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .logo-emblem {
          color: white;
          font-weight: 700;
          font-size: 1.28rem;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .logo-text-container {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
       
        .logo-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          max-width: 0;
          white-space: nowrap;
          transform: translateX(-8px);
          transition: opacity 0.35s ease, max-width 0.35s ease, transform 0.35s ease;
        }

        .logo-subtitle {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.55);
          margin-top: 0.15rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .creative-header.scrolled .logo-title {
          opacity: 1;
          max-width: 260px;
          transform: translateX(0);
          text-decoration: none;
        }

        .creative-header.scrolled .logo-subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        .logo-dots {
          display: none;
        }

        /* Navigation Styles */
        .logo-image {
            height: 50px;
            width: auto;
            object-fit: contain;
          }
          .creative-nav {
          display: flex;
        }

        .nav-list-creative {
          display: flex;
          gap: 0.45rem;
          list-style: none;
          margin: 0;
          padding: 0;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
          border-radius: 14px;
          padding: 0.2rem 0.35rem;
          border: 1px solid rgba(0, 27, 224, 0.12);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
        }

        /* Language Switcher */
        .lang-switch {
          display: flex;
          align-items: center;
          padding: 4px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 30px;
          gap: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: all 0.3s ease;
        }

        .lang-switch:hover {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 6px 16px rgba(0, 27, 224, 0.08);
          transform: translateY(-1px);
        }

        .lang-pill {
          padding: 6px 16px;
          border-radius: 20px;
          border: none;
          background: transparent;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          position: relative;
          z-index: 1;
        }

        .lang-pill:hover {
          color: var(--primary);
          background: rgba(37, 99, 235, 0.05);
        }

        .lang-pill.active {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.3);
          transform: scale(1.05);
        }

        .nav-item-creative {
          position: relative;
        }

        .nav-link-creative {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          padding: 0.45rem 0.9rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          min-width: 100px;
          color: var(--dark);
          border: 1px solid transparent;
        }

        .nav-link-creative:not(.active):hover {
          background: rgba(0, 27, 224, 0.06);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .nav-link-creative:active {
          /* No transform to prevent jumping */
        }

        .nav-link-creative.active {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          box-shadow: 0 8px 24px rgba(0, 27, 224, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.28);
          color: white;
        }

        .nav-icon {
          font-size: 1.15rem;
          color: inherit;
          transition: color 0.3s ease;
        }

        .nav-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: inherit;
          transition: color 0.3s ease;
        }

        /* Floating CTA */
        .floating-cta {
          position: relative;
        }

        .pulse-button {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 27, 224, 0.4);
          animation: pulse-glow 2s infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 20px rgba(0, 27, 224, 0.4); }
          50% { box-shadow: 0 4px 30px rgba(0, 27, 224, 0.6); }
        }

        .pulse-button:hover {
          transform: translateY(-2px) scale(1.05);
          animation: none;
          box-shadow: 0 6px 30px rgba(0, 27, 224, 0.6);
        }

        .button-sparkle {
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .button-text {
          position: relative;
          z-index: 1;
        }

        .pulse-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .pulse-button:hover::before {
          width: 300px;
          height: 300px;
        }

        /* Mobile Menu Button */
        .creative-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .menu-bar {
          width: 30px;
          height: 3px;
          background: linear-gradient(to right, var(--primary), var(--secondary));
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .header-wrapper {
            padding: 0 1rem;
          }

          .nav-link-creative {
            padding: 0.6rem 0.9rem;
            min-width: 88px;
          }

          .nav-icon {
            font-size: 1.05rem;
          }

          .nav-label {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 1024px) {
          .creative-nav,
          .floating-cta,
          .header-center {
            display: none;
          }

          .creative-menu-btn {
            display: flex;
          }

          .logo-title {
            font-size: 1.25rem;
            text-decoration: none;
          }

          .logo-circle {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .header-wrapper {
            padding: 0 1rem;
          }

          .logo-title {
            font-size: 1rem;
            text-decoration: none;
          }

          .creative-header {
            padding: 1rem 0;
          }

          .creative-header.scrolled {
            padding: 0.75rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
