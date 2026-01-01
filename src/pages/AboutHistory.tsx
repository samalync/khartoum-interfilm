import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function AboutHistory() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="about-page-hero history-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual-elements">
              <div className="floating-globe">
                <div className="globe-icon">📚</div>
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
                  <span className="stat-number">12+</span>
                  <span className="stat-label">{language === 'ar' ? 'سنوات' : 'Years'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">250+</span>
                  <span className="stat-label">{language === 'ar' ? 'مشاريع' : 'Projects'}</span>
                </div>
              </div>
            </div>

            <div className="page-badge">
              {language === 'ar' ? 'تاريخنا وخبرتنا' : 'Our History & Experience'}
            </div>
            <h1>
              {language === 'ar'
                ? 'رحلة النجاح والابتكار في الخرطوم إنترفيلم'
                : 'Journey of Success and Innovation at Khartoum InterFilm'}
            </h1>
            <p>
              {language === 'ar'
                ? 'منذ تأسيسنا في عام 2013، نمت الشركة لتصبح واحدة من أبرز الشركات في مجال الإنتاج الإعلامي في السودان والمنطقة. رحلتنا مليئة بالابتكار والتميز في خدمة عملائنا.'
                : 'Since our founding in 2013, the company has grown to become one of the leading companies in the media production field in Sudan and the region. Our journey is filled with innovation and excellence in serving our clients.'}
            </p>

            <div className="hero-cta-section">
              <div className="hero-benefits">
                <div className="benefit-chip">
                  <span className="benefit-icon">🏆</span>
                  <span>{language === 'ar' ? 'خبرة واسعة' : 'Extensive Experience'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">📈</span>
                  <span>{language === 'ar' ? 'نمو مستمر' : 'Continuous Growth'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🎯</span>
                  <span>{language === 'ar' ? 'تميز مضمون' : 'Proven Excellence'}</span>
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
              <h2>{language === 'ar' ? 'البداية والتأسيس' : 'The Beginning and Establishment'}</h2>
              <p>
                {language === 'ar'
                  ? 'تأسست الخرطوم إنترفيلم في عام 2013 كشركة متخصصة في إنتاج المحتوى التلفزيوني والإعلاني. بدأنا كفريق صغير من المهنيين الشغوفين بالإنتاج الإعلامي، وسرعان ما أصبحنا شركة رائدة في السوق السوداني.'
                  : 'Khartoum InterFilm was established in 2013 as a company specializing in television and advertising content production. We started as a small team of professionals passionate about media production, and quickly became a leading company in the Sudanese market.'}
              </p>

              <h2>{language === 'ar' ? 'التوسع والنمو' : 'Expansion and Growth'}</h2>
              <p>
                {language === 'ar'
                  ? 'مع مرور السنوات، توسعت خدماتنا لتشمل مجالات متعددة من الإنتاج الإعلامي. تعاوننا مع أكبر الشركات في السودان والمنطقة، مما سمح لنا ببناء خبرة واسعة في مختلف القطاعات.'
                  : 'Over the years, our services expanded to include multiple areas of media production. We collaborated with the largest companies in Sudan and the region, allowing us to build extensive experience in various sectors.'}
              </p>

              <div className="stats-section">
                <div className="stat">
                  <strong>2013</strong>
                  <span>{language === 'ar' ? 'تأسيس الشركة' : 'Company Founded'}</span>
                </div>
                <div className="stat">
                  <strong>250+</strong>
                  <span>{language === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}</span>
                </div>
                <div className="stat">
                  <strong>15+</strong>
                  <span>{language === 'ar' ? 'قطاع خدمي' : 'Sectors Served'}</span>
                </div>
                <div className="stat">
                  <strong>12+</strong>
                  <span>{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</span>
                </div>
              </div>

              <h2>{language === 'ar' ? 'عملاؤنا البارزون' : 'Our Prominent Clients'}</h2>
              <div className="clients-grid">
                <div className="client-card">
                  <h3>MTN Telecommunications</h3>
                  <p>{language === 'ar' ? 'أكبر شركة اتصالات في السودان' : 'Sudan\'s largest telecommunications company'}</p>
                </div>
                <div className="client-card">
                  <h3>Nile Bank</h3>
                  <p>{language === 'ar' ? 'مؤسسة مالية رائدة' : 'Leading financial institution'}</p>
                </div>
                <div className="client-card">
                  <h3>Coldair</h3>
                  <p>{language === 'ar' ? 'شركة التكييف والتبريد' : 'Air conditioning and refrigeration company'}</p>
                </div>
                <div className="client-card">
                  <h3>{language === 'ar' ? 'شركات غذائية رئيسية' : 'Major Food Companies'}</h3>
                  <p>{language === 'ar' ? 'قطاع الأغذية والمشروبات' : 'Food and beverage sector'}</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="timeline">
                <h3>{language === 'ar' ? 'معالم تاريخية' : 'Historical Milestones'}</h3>
                <div className="timeline-item">
                  <div className="timeline-year">2013</div>
                  <div className="timeline-content">
                    <h4>{language === 'ar' ? 'التأسيس' : 'Establishment'}</h4>
                    <p>{language === 'ar' ? 'تأسيس الشركة والبدء في أولى المشاريع' : 'Company establishment and start of first projects'}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h4>{language === 'ar' ? 'التوسع' : 'Expansion'}</h4>
                    <p>{language === 'ar' ? 'توسيع الفريق وإضافة خدمات جديدة' : 'Team expansion and addition of new services'}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2018</div>
                  <div className="timeline-content">
                    <h4>{language === 'ar' ? 'الاعتراف' : 'Recognition'}</h4>
                    <p>{language === 'ar' ? 'الحصول على جوائز وتقدير في المجال' : 'Receiving awards and recognition in the field'}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2021</div>
                  <div className="timeline-content">
                    <h4>{language === 'ar' ? 'التطور الرقمي' : 'Digital Evolution'}</h4>
                    <p>{language === 'ar' ? 'اعتماد التكنولوجيا الرقمية والإنتاج المتقدم' : 'Adopting digital technology and advanced production'}</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h4>{language === 'ar' ? 'المستقبل' : 'Future'}</h4>
                    <p>{language === 'ar' ? 'الاستمرار في الابتكار والتميز' : 'Continuing innovation and excellence'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .about-page-hero {
          position: relative;
          min-height: 60vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #001be0 0%, #0011b0 100%);
          color: white;
          margin-top: var(--space-16);
          border-radius: 0 0 var(--radius-3xl) var(--radius-3xl);
          overflow: hidden;
        }

        .about-page-hero::before {
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

        .about-page-hero .container {
          position: relative;
          z-index: 2;
        }

        .about-page-hero .hero-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .page-badge {
          display: inline-flex;
          align-self: center;
          padding: var(--space-3) var(--space-5);
          border-radius: var(--radius-2xl);
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          animation: bounceIn 1s ease-out 0.6s both;
          position: relative;
          overflow: hidden;
          margin-bottom: 2rem;
        }

        .about-page-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin: 0 0 1.5rem 0;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255,255,255,0.3);
          animation: slideUp 1s ease-out 0.8s both;
        }

        .about-page-hero p {
          font-size: clamp(1.125rem, 2.5vw, 1.375rem);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 400;
          animation: fadeIn 1s ease-out 1s both;
        }

        .about-content {
          padding: 80px 0;
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
          align-items: start;
        }

        .content-main {
          display: grid;
          gap: 2rem;
        }

        .content-main h2 {
          color: var(--primary);
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .content-main p {
          color: var(--dark);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .stat {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
        }

        .stat strong {
          display: block;
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .stat span {
          color: var(--gray);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .client-card {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 8px 30px rgba(0,0,0,0.04);
          transition: all 0.3s ease;
        }

        .client-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 45px rgba(0,0,0,0.08);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .client-card h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .client-card p {
          color: var(--gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .content-sidebar {
          position: sticky;
          top: 2rem;
        }

        .timeline {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .timeline h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .timeline-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 27, 224, 0.08);
        }

        .timeline-item:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .timeline-year {
          background: var(--primary);
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          min-width: 80px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 27, 224, 0.2);
        }

        .timeline-content h4 {
          color: var(--primary);
          margin-bottom: 0.25rem;
          font-size: 1rem;
          font-weight: 600;
        }

        .timeline-content p {
          color: var(--gray);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .content-sidebar {
            position: static;
          }
        }

        .history-hero {
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

        .history-hero::before {
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

        .history-hero .hero-content {
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
          .history-hero {
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

          .about-page-hero h1 {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .clients-grid {
            grid-template-columns: 1fr;
          }

          .timeline-item {
            flex-direction: column;
            gap: 0.5rem;
          }

          .timeline-year {
            align-self: flex-start;
          }
        }
        .page-navigation {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 27, 224, 0.1);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .page-navigation .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .nav-link {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-dark);
        }

        .nav-separator {
          color: var(--gray);
          font-weight: 400;
        }

        .nav-current {
          color: var(--gray);
          font-weight: 500;
        }

        .back-home-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: var(--primary);
          color: white;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 27, 224, 0.2);
        }

        .back-home-btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.3);
        }

        .back-home-btn svg {
          transition: transform 0.3s ease;
        }

        .back-home-btn:hover svg {
          transform: translateX(-2px);
        }
      `}</style>
    </>
  );
}
