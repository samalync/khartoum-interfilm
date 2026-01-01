import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function AboutMission() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section className="about-page-hero mission-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-visual-elements">
              <div className="floating-globe">
                <div className="globe-icon">⭐</div>
                <div className="globe-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              <div className="hero-stats-preview">
                <div className="stat-preview">
                  <span className="stat-number">6</span>
                  <span className="stat-label">{language === 'ar' ? 'قيم' : 'Values'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">{language === 'ar' ? 'رضا' : 'Satisfaction'}</span>
                </div>
                <div className="stat-preview">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">{language === 'ar' ? 'دعم' : 'Support'}</span>
                </div>
              </div>
            </div>

            <div className="page-badge">
              {language === 'ar' ? 'مهمتنا وقيمنا' : 'Our Mission & Values'}
            </div>
            <h1>
              {language === 'ar'
                ? 'الالتزام بالتميز والابتكار'
                : 'Commitment to Excellence and Innovation'}
            </h1>
            <p>
              {language === 'ar'
                ? 'نؤمن أن القوة البصرية والإبداع هما أساس نجاح الأعمال في العصر الرقمي الحديث.'
                : 'We believe that visual power and creativity are the foundation of business success in the modern digital age.'}
            </p>

            <div className="hero-cta-section">
              <div className="hero-benefits">
                <div className="benefit-chip">
                  <span className="benefit-icon">💎</span>
                  <span>{language === 'ar' ? 'التميز الأخلاقي' : 'Ethical Excellence'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🌱</span>
                  <span>{language === 'ar' ? 'المسؤولية المجتمعية' : 'Social Responsibility'}</span>
                </div>
                <div className="benefit-chip">
                  <span className="benefit-icon">🔄</span>
                  <span>{language === 'ar' ? 'التطور المستمر' : 'Continuous Growth'}</span>
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
                  ? 'أن نكون الشركة الرائدة في مجال الإنتاج الإعلامي في المنطقة، ونصبح الشريك المفضل للعلامات التجارية التي تسعى للتميز والابتكار في عالم الإعلام الحديث. نسعى لنكون مصدر إلهام للشركات في سرد قصصها بطريقة مبتكرة ومؤثرة.'
                  : 'To be the leading company in media production in the region, and become the preferred partner for brands seeking excellence and innovation in the modern media world. We strive to be an inspiration for companies to tell their stories in an innovative and impactful way.'}
              </p>

              <h2>{language === 'ar' ? 'رسالتنا' : 'Our Mission'}</h2>
              <p>
                {language === 'ar'
                  ? 'نساعد العلامات التجارية في سرد قصصها بطريقة مبتكرة ومؤثرة من خلال إنتاج محتوى إعلامي عالي الجودة يجمع بين الإبداع والتقنية والاستراتيجية التسويقية. نحن ملتزمون بتقديم حلول متكاملة تساعد عملائنا على تحقيق أهدافهم وتحقيق النجاح في سوق تنافسي.'
                  : 'We help brands tell their stories in an innovative and impactful way through the production of high-quality media content that combines creativity, technology, and marketing strategy. We are committed to providing integrated solutions that help our clients achieve their goals and succeed in a competitive market.'}
              </p>

              <h2>{language === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}</h2>
              <div className="mission-values">
                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">🎯</div>
                    <h3>{language === 'ar' ? 'التميز' : 'Excellence'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نسعى دائماً للأفضل في كل ما نقوم به. نلتزم بمعايير الجودة العالية ونحرص على تقديم أعمال تتجاوز توقعات عملائنا.'
                      : 'We always strive for the best in everything we do. We are committed to high quality standards and ensure that we deliver work that exceeds our clients\' expectations.'}
                  </p>
                </div>

                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">🤝</div>
                    <h3>{language === 'ar' ? 'الشراكة' : 'Partnership'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نبني علاقات طويلة الأمد مع عملائنا مبنية على الثقة والتعاون المتبادل. نعتبر عملاءنا شركاء في النجاح وليس مجرد زبائن.'
                      : 'We build long-term relationships with our clients based on trust and mutual cooperation. We consider our clients as partners in success, not just customers.'}
                  </p>
                </div>

                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">💡</div>
                    <h3>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نستخدم أحدث التقنيات والأفكار الإبداعية لإنتاج محتوى فريد ومبتكر. نحن نتحدى الأساليب التقليدية ونبتكر حلولاً جديدة لمشاكل قديمة.'
                      : 'We use the latest technologies and creative ideas to produce unique and innovative content. We challenge traditional methods and innovate new solutions to old problems.'}
                  </p>
                </div>

                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">⏰</div>
                    <h3>{language === 'ar' ? 'الالتزام' : 'Commitment'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نلتزم بمواعيد التسليم وجودة العمل الموعودة. نعتبر التزامنا بالوعود جزءاً أساسياً من هويتنا وسمعتنا في السوق.'
                      : 'We are committed to delivery dates and promised work quality. We consider our commitment to promises as an essential part of our identity and reputation in the market.'}
                  </p>
                </div>

                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">🌍</div>
                    <h3>{language === 'ar' ? 'المسؤولية الاجتماعية' : 'Social Responsibility'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نلتزم بالمسؤولية الاجتماعية ونساهم في تنمية مجتمعنا من خلال دعم المبادرات الثقافية والتعليمية والتنموية.'
                      : 'We are committed to social responsibility and contribute to the development of our community through supporting cultural, educational, and developmental initiatives.'}
                  </p>
                </div>

                <div className="core-value">
                  <div className="value-header">
                    <div className="value-icon">📈</div>
                    <h3>{language === 'ar' ? 'النمو المستمر' : 'Continuous Growth'}</h3>
                  </div>
                  <p>
                    {language === 'ar'
                      ? 'نسعى للتطور المستمر في مهاراتنا ومعرفتنا وخدماتنا. نحن نستثمر في تطوير فريقنا وتحديث تقنياتنا بانتظام.'
                      : 'We strive for continuous development in our skills, knowledge, and services. We regularly invest in developing our team and updating our technologies.'}
                  </p>
                </div>
              </div>

              <h2>{language === 'ar' ? 'نهجنا في العمل' : 'Our Work Approach'}</h2>
              <div className="work-approach">
                <div className="approach-step">
                  <div className="step-number">01</div>
                  <h4>{language === 'ar' ? 'الاستماع والفهم' : 'Listen and Understand'}</h4>
                  <p>{language === 'ar' ? 'نبدأ بفهم احتياجات عميلنا وأهدافه بعمق' : 'We start by deeply understanding our client\'s needs and goals'}</p>
                </div>
                <div className="approach-step">
                  <div className="step-number">02</div>
                  <h4>{language === 'ar' ? 'التخطيط الاستراتيجي' : 'Strategic Planning'}</h4>
                  <p>{language === 'ar' ? 'نطور خطة شاملة تجمع بين الإبداع والتنفيذ' : 'We develop a comprehensive plan that combines creativity and execution'}</p>
                </div>
                <div className="approach-step">
                  <div className="step-number">03</div>
                  <h4>{language === 'ar' ? 'الإنتاج المهني' : 'Professional Production'}</h4>
                  <p>{language === 'ar' ? 'ننفذ المشروع بأعلى معايير الجودة والمهنية' : 'We execute the project with the highest standards of quality and professionalism'}</p>
                </div>
                <div className="approach-step">
                  <div className="step-number">04</div>
                  <h4>{language === 'ar' ? 'المتابعة والدعم' : 'Follow-up and Support'}</h4>
                  <p>{language === 'ar' ? 'نوفر دعماً مستمراً ونتابع نتائج المشروع' : 'We provide continuous support and follow up on project results'}</p>
                </div>
              </div>
            </div>

            <div className="content-sidebar">
              <div className="mission-quote">
                <blockquote>
                  {language === 'ar'
                    ? '"القوة البصرية والإبداع هما أساس نجاح الأعمال في العصر الرقمي"'
                    : '"Visual power and creativity are the foundation of business success in the digital age"'}
                </blockquote>
                <cite>- {language === 'ar' ? 'فريق خرطوم إنترفيلم' : 'Khartoum InterFilm Team'}</cite>
              </div>

              <div className="mission-stats">
                <h3>{language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}</h3>
                <div className="achievement">
                  <div className="achievement-number">98%</div>
                  <div className="achievement-text">
                    <strong>{language === 'ar' ? 'رضا العملاء' : 'Client Satisfaction'}</strong>
                    <span>{language === 'ar' ? 'معدل رضا عالي' : 'High satisfaction rate'}</span>
                  </div>
                </div>
                <div className="achievement">
                  <div className="achievement-number">24/7</div>
                  <div className="achievement-text">
                    <strong>{language === 'ar' ? 'دعم فني' : 'Technical Support'}</strong>
                    <span>{language === 'ar' ? 'دعم متواصل' : 'Continuous support'}</span>
                  </div>
                </div>
                <div className="achievement">
                  <div className="achievement-number">5⭐</div>
                  <div className="achievement-text">
                    <strong>{language === 'ar' ? 'تقييم متوسط' : 'Average Rating'}</strong>
                    <span>{language === 'ar' ? 'تقييم عملائنا' : 'Our clients\' rating'}</span>
                  </div>
                </div>
              </div>

              <div className="mission-cta">
                <h3>{language === 'ar' ? 'شارك رؤيتك معنا' : 'Share Your Vision With Us'}</h3>
                <p>
                  {language === 'ar'
                    ? 'هل لديك مشروع إبداعي تريد تحويله إلى واقع؟ نحن هنا لمساعدتك في تحقيق أهدافك.'
                    : 'Do you have a creative project you want to turn into reality? We are here to help you achieve your goals.'}
                </p>
                <div className="cta-buttons">
                  <button
                    className="cta-btn primary"
                    onClick={() => {
                      const contact = document.getElementById('contact');
                      if (contact) {
                        contact.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {language === 'ar' ? 'ابدأ مشروع' : 'Start Project'}
                  </button>
                  <button
                    className="cta-btn secondary"
                    onClick={() => window.open('mailto:khartouminterfilm@gmail.com')}
                  >
                    {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .mission-values {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .core-value {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .core-value:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .value-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .value-icon {
          font-size: 2.5rem;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
          border-radius: 50%;
          flex-shrink: 0;
        }

        .core-value h3 {
          color: var(--primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .core-value p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        .work-approach {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin: 3rem 0;
        }

        .approach-step {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 2px solid rgba(0, 27, 224, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .approach-step:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 45px rgba(0, 27, 224, 0.1);
          border-color: rgba(0, 27, 224, 0.3);
        }

        .step-number {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: white;
          font-weight: 900;
          font-size: 1.5rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.3);
        }

        .approach-step h4 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .approach-step p {
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }

        .mission-quote {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.08), rgba(0, 180, 255, 0.06));
          border: 2px solid rgba(0, 27, 224, 0.15);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          margin-bottom: 2rem;
          position: relative;
        }

        .mission-quote blockquote {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--primary);
          line-height: 1.6;
          margin: 0 0 1rem 0;
          font-style: italic;
        }

        .mission-quote cite {
          color: var(--gray);
          font-weight: 500;
          font-size: 0.9rem;
        }

        .mission-stats {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .mission-stats h3 {
          color: var(--primary);
          margin-bottom: 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
          text-align: center;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: rgba(0, 27, 224, 0.02);
          border-radius: 12px;
          border-left: 4px solid var(--primary);
        }

        .achievement:last-child {
          margin-bottom: 0;
        }

        .achievement-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: var(--primary);
          min-width: 60px;
        }

        .achievement-text strong {
          display: block;
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
        }

        .achievement-text span {
          color: var(--gray);
          font-size: 0.85rem;
        }

        .mission-cta {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.08));
          border: 2px solid rgba(0, 27, 224, 0.2);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .mission-cta h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .mission-cta p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          text-decoration: none;
          display: inline-block;
        }

        .cta-btn.primary {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .cta-btn.primary:hover {
          background: var(--primary-dark);
          border-color: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.3);
        }

        .cta-btn.secondary {
          background: transparent;
          color: var(--primary);
          border-color: var(--primary);
        }

        .cta-btn.secondary:hover {
          background: var(--primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.2);
        }

        .mission-hero {
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

        .mission-hero::before {
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

        .mission-hero .hero-content {
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
          .mission-hero {
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

          .mission-values {
            grid-template-columns: 1fr;
          }

          .work-approach {
            grid-template-columns: 1fr;
          }

          .approach-step {
            padding: 1.5rem;
          }

          .core-value {
            padding: 1.5rem;
          }

          .value-header {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
