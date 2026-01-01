'use client';

import { useState } from 'react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for newsletter subscription
    alert(`Subscribed with ${email}`);
    setEmail('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const header = document.querySelector<HTMLElement>('.creative-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 80;

    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;

    const targetPosition = absoluteElementTop - headerHeight - 10;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Khartoum Interfilm</h3>
            <p>{language === 'ar' ? 'تقديم محتوى عالي الجودة ومتميز بالبساطة والاحترافية.' : 'Delivering high-quality and distinguished content with simplicity and professionalism.'}</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/17ioDH89xR/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-btn facebook"
              >
                <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.86c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22c4.78-.75 8.44-4.91 8.44-9.93z"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/khartoum1230?igsh=MXJ6eDRvcDlrbGdl&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-btn instagram"
              >
                <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6zM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6.1-2.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z"
                  />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@khartouminterfilm?_r=1&_t=ZM-91YdJa3dgqJ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="social-btn tiktok"
              >
                <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M16.5 2h-3.1c.1 1.9.9 3.7 2.3 5.1 1.4 1.4 3.2 2.2 5.1 2.3V12c-1.9 0-3.7-.5-5.3-1.6v6.1a5.9 5.9 0 1 1-5.9-5.9c.4 0 .8 0 1.2.1v2.9c-.4-.1-.8-.2-1.2-.2a3 3 0 1 0 3 3V2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>{language === 'ar' ? 'رسالتنا' : 'Our Mission'}</h4>
            <p>{language === 'ar' ? '"تقديم محتوى عالي الجودة ومتميز بالبساطة والاحترافية."' : '"Delivering high-quality and distinguished content with simplicity and professionalism."'}</p>
          </div>

          <div className="footer-section">
            <h4>{language === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}</h4>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>khartouminterfilm@gmail.com</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>0795429785</span>
            </div>
            <div className="contact-item">
              <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><path fill="currentColor" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <span>9:00AM - 5:00PM</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>{language === 'ar' ? 'التنقل' : 'Navigation'}</h4>
            <div className="quick-links">
              <span className="quick-link" onClick={() => scrollToSection('about')}>
                {language === 'ar' ? 'من نحن' : 'About Us'}
              </span>
              <span className="quick-link" onClick={() => scrollToSection('team')}>
                {language === 'ar' ? 'فريقنا' : 'Our Team'}
              </span>
              <span className="quick-link" onClick={() => scrollToSection('services')}>
                {language === 'ar' ? 'خدماتنا' : 'Services'}
              </span>
              <span className="quick-link" onClick={() => scrollToSection('contact')}>
                {language === 'ar' ? 'اتصل بنا' : 'Contact'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>{language === 'ar' ? '© 2024 الخرطوم إنتر فيلم. جميع الحقوق محفوظة.' : '© 2024 Khartoum Interfilm. All rights reserved.'}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #262525ff;
          color: white;
          padding: 50px 0 20px;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 1rem;
          color: #ffffff;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section ul li {
          margin-bottom: 0.5rem;
        }
        
        .footer-section a {
          color: #d0d0d0;
          text-decoration: none;
          transition: color 0.25s ease;
        }
        
        .footer-section a:hover {
          color: #f0f0f0;
        }

        .footer-list a,
        .footer-list a:visited {
          color: #d0d0d0;
        }

        .footer-list a:hover {
          color: #f0f0f0;
        }

        .footer-text-button {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          border-radius: 999px;
          background: #3a3a3a;
          border: 1px solid #555555;
          color: #ffffff;
          font-size: 0.9rem;
        }

        .footer-text-button:hover {
          background: #555555;
          color: #ffffff;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: none;
        }

        .footer-link:hover {
          color: #f0f0f0;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: #444444;
          border-radius: 50%;
          color: #ffffff;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: #666666;
          transform: translateY(-3px);
        }
        
        .social-svg {
          width: 20px;
          height: 20px;
          display: block;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .newsletter-form input {
          padding: 0.5rem;
          border: 1px solid #555555;
          border-radius: 4px;
          background: #333333;
          color: #ffffff;
          font-size: 0.9rem;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: #777777;
        }

        .newsletter-form button {
          padding: 0.5rem 1rem;
          background: #007bff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.3s ease;
        }

        .newsletter-form button:hover {
          background: #0056b3;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .contact-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .quick-link {
          display: inline-block;
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .quick-link:hover {
          color: #f0f0f0;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #ccc;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
