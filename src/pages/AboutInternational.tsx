import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function AboutInternational() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="about-page-hero international-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual-elements">
              <div className="floating-globe">
                <div className="globe-icon">🌍</div>
                <div className="globe-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              <div className="hero-stats-preview">
                <div className="stat-preview">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">{language === 'ar' ? 'دول' : 'Countries'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">{language === 'ar' ? 'مشاريع' : 'Projects'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">{language === 'ar' ? 'رضا' : 'Satisfaction'}</span>
                </div>
              </div>
            </div>

            <div className="page-badge">
              {language === 'ar' ? 'التواجد الدولي' : 'International Presence'}
            </div>
            <h1>
              {language === 'ar'
                ? 'خرطوم إنترفيلم على المستوى الدولي'
                : 'Khartoum InterFilm on the International Stage'}
            </h1>
            <p>
              {language === 'ar'
                ? 'امتداد حضورنا الإعلامي إلى المحافل الدولية مع مشاريع مميزة في المنطقة والعالم.'
                : 'Extending our media presence to international forums with distinctive projects in the region and the world.'}
            </p>

            <div className="hero-cta-section">
              <div className="hero-benefits">
                <div className="benefit-chip">
                  <span className="benefit-icon">🎯</span>
                  <span>{language === 'ar' ? 'الجودة العالمية' : 'Global Quality'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🤝</span>
                  <span>{language === 'ar' ? 'الشراكة الدولية' : 'International Partnership'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🌟</span>
                  <span>{language === 'ar' ? 'التميز الإعلامي' : 'Media Excellence'}</span>
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
              <div className="international-hero-section">
                <h2>{language === 'ar' ? 'التواجد في رواندا' : 'Presence in Rwanda'}</h2>
                <div className="international-map">
                  <div className="map-marker rwanda">
                    <div className="marker-icon">🇷🇼</div>
                    <div className="marker-label">{language === 'ar' ? 'رواندا' : 'Rwanda'}</div>
                  </div>
                  <div className="map-marker sudan">
                    <div className="marker-icon">🇸🇩</div>
                    <div className="marker-label">{language === 'ar' ? 'السودان' : 'Sudan'}</div>
                  </div>
                </div>
                <p>
                  {language === 'ar'
                    ? 'في خطوة لتعزيز حضورنا الدولي، ساهمنا في الأحداث البصرية للاحتفال بعيد استقلال السودان الذي أقيم في سفارة السودان في كيغالي، رواندا. هذا الحدث يمثل التزامنا بالتميز والاحترافية في العروض البصرية على المستوى الدولي.'
                    : 'In a step to strengthen our international presence, we contributed to the visual events of the Sudanese Independence Day Celebration held at the Sudanese Embassy in Kigali, Rwanda. This event represents our commitment to excellence and professionalism in visual presentations at the international level.'}
                </p>
              </div>

              <div className="international-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">🇷🇼</div>
                  <h3>{language === 'ar' ? 'سفارة السودان في رواندا' : 'Sudanese Embassy in Rwanda'}</h3>
                  <p>{language === 'ar' ? 'تنظيم وإنتاج العروض البصرية للاحتفال الوطني' : 'Organization and production of visual displays for the national celebration'}</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🎭</div>
                  <h3>{language === 'ar' ? 'الإنتاج البصري' : 'Visual Production'}</h3>
                  <p>{language === 'ar' ? 'إنتاج محتوى مرئي احترافي للمناسبات الدبلوماسية' : 'Professional visual content production for diplomatic occasions'}</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🌍</div>
                  <h3>{language === 'ar' ? 'الانتشار العالمي' : 'Global Reach'}</h3>
                  <p>{language === 'ar' ? 'توسيع نطاق عملائنا إلى المجتمع الدولي' : 'Expanding our client base to the international community'}</p>
                </div>
              </div>

              <h2>{language === 'ar' ? 'التعاون الدولي' : 'International Collaboration'}</h2>
              <p>
                {language === 'ar'
                  ? 'نفتخر بأننا أصبحنا الشريك المفضل للعديد من الجهات الدولية التي تبحث عن حلول إعلامية مبتكرة ومحتوى بصري عالي الجودة. خبرتنا في السوق السوداني مكنتنا من فهم احتياجات السوق الإقليمي والدولي.'
                  : 'We are proud to have become the preferred partner for many international entities seeking innovative media solutions and high-quality visual content. Our experience in the Sudanese market has enabled us to understand the needs of the regional and international market.'}
              </p>

              <h2>{language === 'ar' ? 'المعايير الدولية' : 'International Standards'}</h2>
              <p>
                {language === 'ar'
                  ? 'نلتزم بالمعايير الدولية في جميع مشاريعنا، مما يضمن أن يكون عملاؤنا الدوليون راضين تماماً عن الخدمات التي نقدمها. فريقنا يعمل باستخدام أحدث التقنيات والمعدات لضمان أعلى مستويات الجودة.'
                  : 'We adhere to international standards in all our projects, ensuring that our international clients are completely satisfied with the services we provide. Our team works using the latest technologies and equipment to ensure the highest quality standards.'}
              </p>

              <div className="international-values">
                <div className="value-item">
                  <div className="value-number">01</div>
                  <h4>{language === 'ar' ? 'الجودة العالمية' : 'Global Quality'}</h4>
                  <p>{language === 'ar' ? 'معايير إنتاج تلبي أعلى المستويات الدولية' : 'Production standards that meet the highest international levels'}</p>
                </div>
                <div className="value-item">
                  <div className="value-number">02</div>
                  <h4>{language === 'ar' ? 'الثقافة المشتركة' : 'Shared Culture'}</h4>
                  <p>{language === 'ar' ? 'فهم عميق للقيم والتقاليد الثقافية المتنوعة' : 'Deep understanding of diverse cultural values and traditions'}</p>
                </div>
                <div className="value-item">
                  <div className="value-number">03</div>
                  <h4>{language === 'ar' ? 'الشراكة الدولية' : 'International Partnership'}</h4>
                  <p>{language === 'ar' ? 'بناء علاقات قوية مع الشركاء الدوليين' : 'Building strong relationships with international partners'}</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="international-facts">
                <h3>{language === 'ar' ? 'حقائق دولية' : 'International Facts'}</h3>
                <div className="fact-item">
                  <div className="fact-number">3+</div>
                  <div className="fact-text">
                    <strong>{language === 'ar' ? 'دول' : 'Countries'}</strong>
                    <span>{language === 'ar' ? 'امتداد عملنا' : 'Our work spans'}</span>
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-number">15+</div>
                  <div className="fact-text">
                    <strong>{language === 'ar' ? 'مشاريع دولية' : 'International Projects'}</strong>
                    <span>{language === 'ar' ? 'مكتملة بنجاح' : 'Successfully completed'}</span>
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-number">100%</div>
                  <div className="fact-text">
                    <strong>{language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</strong>
                    <span>{language === 'ar' ? 'في المشاريع الدولية' : 'In international projects'}</span>
                  </div>
                </div>
              </div>

              <div className="international-contact">
                <h3>{language === 'ar' ? 'تواصل دولي' : 'International Contact'}</h3>
                <p>{language === 'ar' ? 'نرحب بالاستفسارات الدولية والمشاريع العالمية' : 'We welcome international inquiries and global projects'}</p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <span className="method-icon">📧</span>
                    <span>khartouminterfilm@gmail.com</span>
                  </div>
                  <div className="contact-method">
                    <span className="method-icon">📱</span>
                    <span>+249 795 429 785</span>
                  </div>
                  <div className="contact-method">
                    <span className="method-icon">🌐</span>
                    <span>www.khartouminterfilm.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .international-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .highlight-card {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .highlight-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .highlight-card h3 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .highlight-card p {
          color: var(--gray);
          font-size: 1rem;
          line-height: 1.5;
        }

        .international-values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .value-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .value-number {
          background: var(--primary);
          color: white;
          font-weight: 900;
          font-size: 1.5rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.3);
        }

        .value-item h4 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .value-item p {
          color: var(--gray);
          line-height: 1.6;
        }

        .international-facts {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          margin-bottom: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .international-facts h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .fact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: rgba(0, 27, 224, 0.02);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
        }

        .fact-item:last-child {
          margin-bottom: 0;
        }

        .fact-number {
          font-size: 2rem;
          font-weight: 900;
          color: var(--primary);
          min-width: 60px;
        }

        .fact-text strong {
          display: block;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .fact-text span {
          color: var(--gray);
          font-size: 0.85rem;
        }

        .international-contact {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 1px solid rgba(0, 27, 224, 0.1);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .international-contact h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .international-contact p {
          color: var(--gray);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .contact-methods {
          display: grid;
          gap: 1rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.75rem;
          background: white;
          border-radius: 8px;
          border: 1px solid rgba(0, 27, 224, 0.08);
          transition: all 0.3s ease;
        }

        .contact-method:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .method-icon {
          font-size: 1.5rem;
        }

        .contact-method span {
          color: var(--gray);
          font-weight: 500;
        }

        .international-hero-section {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 2px solid rgba(0, 27, 224, 0.1);
          border-radius: 20px;
          padding: 3rem 2rem;
          margin-bottom: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .international-hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 27, 224, 0.02), transparent);
          transition: left 0.8s ease;
        }

        .international-hero-section:hover::before {
          left: 100%;
        }

        .international-hero-section h2 {
          color: var(--primary);
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }

        .international-map {
          position: relative;
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f8faff 0%, #e8f2ff 100%);
          border-radius: 16px;
          margin: 2rem 0;
          border: 2px solid rgba(0, 27, 224, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .map-marker {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: markerPulse 2s ease-in-out infinite;
        }

        .map-marker.rwanda {
          top: 30%;
          left: 70%;
        }

        .map-marker.sudan {
          top: 20%;
          left: 30%;
        }

        .marker-icon {
          font-size: 2.5rem;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          animation: bounceIn 1s ease-out both;
        }

        .map-marker.rwanda .marker-icon {
          animation-delay: 0.5s;
        }

        .map-marker.sudan .marker-icon {
          animation-delay: 0.2s;
        }

        .marker-label {
          background: var(--primary);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 27, 224, 0.3);
          white-space: nowrap;
        }

        .international-hero-section p {
          color: var(--dark);
          font-size: 1.2rem;
          line-height: 1.7;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @keyframes markerPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .international-hero {
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

        .international-hero::before {
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

        .international-hero .hero-content {
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
          .international-hero {
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

          .international-hero-section {
            padding: 2rem 1.5rem;
          }

          .international-hero-section h2 {
            font-size: 2rem;
          }

          .international-map {
            height: 150px;
          }

          .map-marker {
            transform: scale(0.8);
          }

          .international-highlights {
            grid-template-columns: 1fr;
          }

          .international-values {
            grid-template-columns: 1fr;
          }

          .value-item {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .value-number {
            align-self: center;
          }
        }
      `}</style>
    </>
  );
}
