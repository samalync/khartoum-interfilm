import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function AboutCompany() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="about-page-hero company-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual-elements">
              <div className="floating-globe">
                <div className="globe-icon">🎬</div>
                <div className="globe-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              <div className="hero-stats-preview">
                <div className="stat-preview">
                  <span className="stat-number">2013</span>
                  <span className="stat-label">{language === 'ar' ? 'تأسيس' : 'Founded'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">{language === 'ar' ? 'مشاريع' : 'Projects'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">{language === 'ar' ? 'عملاء' : 'Clients'}</span>
                </div>
              </div>
            </div>

            <div className="page-badge">
              {language === 'ar' ? 'نظرة عامة على الشركة' : 'Company Overview'}
            </div>
            <h1>
              {language === 'ar'
                ? 'خرطوم إنترفيلم: الإبداع في الإنتاج الإعلامي'
                : 'Khartoum InterFilm: Creativity in Media Production'}
            </h1>
            <p>
              {language === 'ar'
                ? 'شركة متخصصة في إنتاج المحتوى الإعلاني بما في ذلك الفيديوهات والملصقات والتسويق البصري منذ عام 2013.'
                : 'A company specializing in advertising content production including videos, posters, and visual marketing since 2013.'}
            </p>

            <div className="hero-cta-section">
              <div className="hero-benefits">
                <div className="benefit-chip">
                  <span className="benefit-icon">🎯</span>
                  <span>{language === 'ar' ? 'التميز الإبداعي' : 'Creative Excellence'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🏆</span>
                  <span>{language === 'ar' ? 'خبرة واسعة' : 'Proven Experience'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🚀</span>
                  <span>{language === 'ar' ? 'حلول متقدمة' : 'Advanced Solutions'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-content" style={{ margin: '4rem 0' }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>{language === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h2>
              <p>
                {language === 'ar'
                  ? 'أن نكون الشركة الرائدة في مجال الإنتاج الإعلامي في المنطقة، ونصبح الشريك المفضل للعلامات التجارية التي تسعى للتميز والابتكار في عالم الإعلام الحديث.'
                  : 'To be the leading company in media production in the region, and become the preferred partner for brands seeking excellence and innovation in the modern media world.'}
              </p>

              <h2>{language === 'ar' ? 'رسالتنا' : 'Our Mission'}</h2>
              <p>
                {language === 'ar'
                  ? 'نساعد العلامات التجارية في سرد قصصها بطريقة مبتكرة ومؤثرة من خلال إنتاج محتوى إعلامي عالي الجودة يجمع بين الإبداع والتقنية والاستراتيجية التسويقية.'
                  : 'We help brands tell their stories in an innovative and impactful way through the production of high-quality media content that combines creativity, technology, and marketing strategy.'}
              </p>

              <div className="company-stats">
                <div className="stat">
                  <strong>2013</strong>
                  <span>{language === 'ar' ? 'تأسيس الشركة' : 'Founded'}</span>
                </div>
                <div className="stat">
                  <strong>250+</strong>
                  <span>{language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}</span>
                </div>
                <div className="stat">
                  <strong>50+</strong>
                  <span>{language === 'ar' ? 'عميل راضي' : 'Happy Clients'}</span>
                </div>
                <div className="stat">
                  <strong>15+</strong>
                  <span>{language === 'ar' ? 'قطاع خدمي' : 'Industries Served'}</span>
                </div>
              </div>

              <h2>{language === 'ar' ? 'خدماتنا الرئيسية' : 'Our Main Services'}</h2>
              <div className="services-overview">
                <div className="service-overview-item">
                  <div className="service-icon">🎬</div>
                  <h3>{language === 'ar' ? 'إنتاج الفيديو' : 'Video Production'}</h3>
                  <p>{language === 'ar' ? 'إنتاج فيديوهات احترافية للإعلانات والشركات والمناسبات الخاصة' : 'Professional video production for commercials, corporate, and special events'}</p>
                </div>
                <div className="service-overview-item">
                  <div className="service-icon">🎨</div>
                  <h3>{language === 'ar' ? 'التصميم الجرافيكي' : 'Graphic Design'}</h3>
                  <p>{language === 'ar' ? 'تصميم هويات بصرية وملصقات ومواد تسويقية متنوعة' : 'Brand identity design, posters, and various marketing materials'}</p>
                </div>
                <div className="service-overview-item">
                  <div className="service-icon">📢</div>
                  <h3>{language === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}</h3>
                  <p>{language === 'ar' ? 'استراتيجيات تسويقية متكاملة عبر وسائل التواصل الاجتماعي' : 'Integrated marketing strategies across social media platforms'}</p>
                </div>
                <div className="service-overview-item">
                  <div className="service-icon">🎙️</div>
                  <h3>{language === 'ar' ? 'التعليق الصوتي' : 'Voiceover'}</h3>
                  <p>{language === 'ar' ? 'خدمات تعليق صوتي احترافي بلغات متعددة' : 'Professional voiceover services in multiple languages'}</p>
                </div>
                <div className="service-overview-item">
                  <div className="service-icon">🎪</div>
                  <h3>{language === 'ar' ? 'تنسيق الأحداث' : 'Event Coordination'}</h3>
                  <p>{language === 'ar' ? 'تنسيق وإدارة الأحداث الشركاتية والترويجية' : 'Coordination and management of corporate and promotional events'}</p>
                </div>
                <div className="service-overview-item">
                  <div className="service-icon">💻</div>
                  <h3>{language === 'ar' ? 'الحلول البرمجية' : 'Software Solutions'}</h3>
                  <p>{language === 'ar' ? 'تطوير مواقع وتطبيقات وأنظمة برمجية مخصصة' : 'Development of websites, applications, and custom software systems'}</p>
                </div>
              </div>

              <h2>{language === 'ar' ? 'لماذا تختار خرطوم إنترفيلم؟' : 'Why Choose Khartoum InterFilm?'}</h2>
              <div className="why-choose-us">
                <div className="reason">
                  <div className="reason-number">01</div>
                  <h4>{language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience'}</h4>
                  <p>{language === 'ar' ? 'أكثر من 12 عاماً من الخبرة في مجال الإنتاج الإعلامي' : 'Over 12 years of experience in media production'}</p>
                </div>
                <div className="reason">
                  <div className="reason-number">02</div>
                  <h4>{language === 'ar' ? 'تقنية حديثة' : 'Modern Technology'}</h4>
                  <p>{language === 'ar' ? 'نستخدم أحدث التقنيات والمعدات في الإنتاج' : 'We use the latest technologies and equipment in production'}</p>
                </div>
                <div className="reason">
                  <div className="reason-number">03</div>
                  <h4>{language === 'ar' ? 'فريق متخصص' : 'Specialized Team'}</h4>
                  <p>{language === 'ar' ? 'فريق من المهنيين ذوي الخبرة في مختلف مجالات الإنتاج' : 'A team of experienced professionals in various production fields'}</p>
                </div>
                <div className="reason">
                  <div className="reason-number">04</div>
                  <h4>{language === 'ar' ? 'جودة مضمونة' : 'Guaranteed Quality'}</h4>
                  <p>{language === 'ar' ? 'نضمن أعلى مستويات الجودة في جميع مشاريعنا' : 'We guarantee the highest quality standards in all our projects'}</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="company-values">
                <h3>{language === 'ar' ? 'قيمنا' : 'Our Values'}</h3>
                <div className="value-item">
                  <div className="value-icon">🎯</div>
                  <div>
                    <h4>{language === 'ar' ? 'التميز' : 'Excellence'}</h4>
                    <p>{language === 'ar' ? 'نسعى دائماً للأفضل في كل ما نقوم به' : 'We always strive for the best in everything we do'}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <div>
                    <h4>{language === 'ar' ? 'الشراكة' : 'Partnership'}</h4>
                    <p>{language === 'ar' ? 'نبني علاقات طويلة الأمد مع عملائنا' : 'We build long-term relationships with our clients'}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">💡</div>
                  <div>
                    <h4>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h4>
                    <p>{language === 'ar' ? 'نستخدم أحدث التقنيات والأفكار الإبداعية' : 'We use the latest technologies and creative ideas'}</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">⏰</div>
                  <div>
                    <h4>{language === 'ar' ? 'الالتزام' : 'Commitment'}</h4>
                    <p>{language === 'ar' ? 'نلتزم بمواعيد التسليم وجودة العمل' : 'We are committed to delivery dates and work quality'}</p>
                  </div>
                </div>
              </div>

              <div className="company-contact">
                <h3>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</h3>
                <p>{language === 'ar' ? 'جاهز لبدء مشروعك التالي؟ تواصل معنا اليوم!' : 'Ready to start your next project? Contact us today!'}</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <span>khartouminterfilm@gmail.com</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <span>+249 795 429 785</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <span>{language === 'ar' ? 'الخرطوم، السودان' : 'Khartoum, Sudan'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .company-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .services-overview {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .service-overview-item {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .service-overview-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-overview-item h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .service-overview-item p {
          color: var(--gray);
          line-height: 1.6;
        }

        .why-choose-us {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .reason {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          position: relative;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .reason:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .reason-number {
          position: absolute;
          top: -15px;
          left: 20px;
          background: var(--primary);
          color: white;
          font-weight: 900;
          font-size: 1.2rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 27, 224, 0.3);
        }

        .reason h4 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .reason p {
          color: var(--gray);
          line-height: 1.6;
        }

        .company-values {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .company-values h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .value-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: rgba(0, 27, 224, 0.02);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
        }

        .value-item:last-child {
          margin-bottom: 0;
        }

        .value-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .value-item h4 {
          color: var(--primary);
          margin-bottom: 0.25rem;
          font-size: 1rem;
          font-weight: 700;
        }

        .value-item p {
          color: var(--gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .company-contact {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 1px solid rgba(0, 27, 224, 0.1);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .company-contact h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .company-contact p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .contact-info {
          display: grid;
          gap: 1rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: white;
          border-radius: 8px;
          border: 1px solid rgba(0, 27, 224, 0.08);
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .contact-icon {
          font-size: 1.5rem;
        }

        .contact-item span {
          color: var(--gray);
          font-weight: 500;
        }

        .company-hero {
          position: relative;
          min-height: 70vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #001be0 0%, #0011b0 100%);
          color: white;
          margin-top: var(--space-16);
          border-radius: 0 0 var(--radius-3xl) var(--radius-3xl);
          overflow: hidden;
        }

        .company-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)),
            radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.15), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(0, 27, 224, 0.1), transparent 50%);
          pointer-events: none;
        }

        .company-hero .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: var(--space-6);
        }

        .hero-visual-elements {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .floating-globe {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe-icon {
          font-size: 4rem;
          z-index: 2;
          position: relative;
          animation: globeRotate 8s linear infinite;
        }

        .globe-rings {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: ringPulse 3s ease-in-out infinite;
        }

        .ring-1 {
          width: 100px;
          height: 100px;
          animation-delay: 0s;
        }

        .ring-2 {
          width: 140px;
          height: 140px;
          animation-delay: 1s;
        }

        .ring-3 {
          width: 180px;
          height: 180px;
          animation-delay: 2s;
        }

        .hero-stats-preview {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .stat-preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 80px;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .stat-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          text-align: center;
        }

        .hero-cta-section {
          margin-top: 1rem;
        }

        .hero-benefits {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .benefit-chip {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.25rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 25px;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .benefit-chip:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .benefit-icon {
          font-size: 1.2rem;
        }

        @keyframes globeRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ringPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.6;
          }
        }

        @media (max-width: 768px) {
          .company-hero {
            min-height: 60vh;
            margin-top: var(--space-12);
          }

          .hero-visual-elements {
            justify-content: center;
            gap: 1rem;
          }

          .floating-globe {
            width: 80px;
            height: 80px;
          }

          .globe-icon {
            font-size: 3rem;
          }

          .ring-1 {
            width: 80px;
            height: 80px;
          }

          .ring-2 {
            width: 110px;
            height: 110px;
          }

          .ring-3 {
            width: 140px;
            height: 140px;
          }

          .hero-stats-preview {
            gap: 1rem;
          }

          .stat-preview {
            min-width: 60px;
            padding: 0.75rem;
          }

          .stat-number {
            font-size: 1.25rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }

          .hero-benefits {
            gap: 0.5rem;
          }

          .benefit-chip {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .services-overview {
            grid-template-columns: 1fr;
          }

          .why-choose-us {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
