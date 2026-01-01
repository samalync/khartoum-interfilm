import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';

export default function ProjectDetailPage() {
  const { serviceId, projectId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [project, setProject] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Define services data (same as in ServiceDetail.tsx)
    const services: any[] = language === 'ar'
      ? [
          {
            title: 'التصميم الجرافيكي',
            icon: 'design',
            projects: [
              {
                title: 'تصميم علامة مطعم 249',
                description: 'تصميم هوية بصرية شاملة ومواد تسويقية لتجربة مطعم فاخرة في الخرطوم.',
                images: [
                  '/graphic design/249 Restaurant/44-100.jpg',
                  '/graphic design/249 Restaurant/55-100.jpg',
                  '/graphic design/249 Restaurant/65-100.jpg',
                  '/graphic design/249 Restaurant/444-100.jpg'
                ]
              },
              {
                title: 'نادي الهلال الرياضي',
                description: 'تصميم شامل للعلامة التجارية لأكبر نادي كرة قدم سوداني، بما في ذلك القمصان والملصقات والأصول الرقمية.',
                images: [
                  '/graphic design/Al Hilal S.C/1.jpg',
                  '/graphic design/Al Hilal S.C/2.jpg',
                  '/graphic design/Al Hilal S.C/3.png',
                  '/graphic design/Al Hilal S.C/4.png'
                ]
              },
              {
                title: 'العلامة الرسمية لسفارة السودان',
                description: 'تصميم اتصال رسمي وتصميم علامة تجارية تمثل الهوية الوطنية والفخامة.',
                images: [
                  '/graphic design/Embassy of Sudan/ddf-100.jpg',
                  '/graphic design/Embassy of Sudan/gdgg-100.jpg',
                  '/graphic design/Embassy of Sudan/s11 copy 3-100.jpg',
                  '/graphic design/Embassy of Sudan/s111-100.jpg',
                  '/graphic design/Embassy of Sudan/sd1.jpg',
                  '/graphic design/Embassy of Sudan/sd2.jpg',
                  '/graphic design/Embassy of Sudan/sd3.jpg',
                  '/graphic design/Embassy of Sudan/sd4.jpg',
                  '/graphic design/Embassy of Sudan/ssd-100.jpg',
                  '/graphic design/Embassy of Sudan/ssd2-100.jpg',
                  '/graphic design/Embassy of Sudan/sudane 6-100.jpg',
                  '/graphic design/Embassy of Sudan/sudane2-100.jpg'
                ]
              },
              {
                title: 'وكالة كريبتونايت الإبداعية',
                description: 'هوية بصرية جريئة ومبتكرة لوكالة إبداعية متخصصة في التسويق الرقمي وتطوير العلامات التجارية.',
                images: [
                  '/graphic design/Kriptonite/k1.jpg',
                  '/graphic design/Kriptonite/k2.jpg',
                  '/graphic design/Kriptonite/k3.jpg',
                  '/graphic design/Kriptonite/k4.jpg',
                  '/graphic design/Kriptonite/k5.jpg',
                  '/graphic design/Kriptonite/k6.jpg',
                  '/graphic design/Kriptonite/k7.jpg',
                  '/graphic design/Kriptonite/k8.jpg',
                  '/graphic design/Kriptonite/k9.jpg',
                  '/graphic design/Kriptonite/k10.jpg',
                  '/graphic design/Kriptonite/k11.png',
                  '/graphic design/Kriptonite/k12.png',
                  '/graphic design/Kriptonite/k13.png',
                  '/graphic design/Kriptonite/k14.png',
                  '/graphic design/Kriptonite/k15.png',
                  '/graphic design/Kriptonite/k16.png',
                  '/graphic design/Kriptonite/k17.jpg'
                ]
              },
              {
                title: 'مبادرة شباب هلون الشبابية',
                description: 'تصميم اتصال بصري موجه للشباب وتواصل مع المجتمع لبرامج التأثير الاجتماعي.',
                images: [
                  '/graphic design/shbab hlwen/shbab 1.png',
                  '/graphic design/shbab hlwen/shbab-.png',
                  '/graphic design/shbab hlwen/shbab-2.png',
                  '/graphic design/shbab hlwen/shbab-3.png',
                  '/graphic design/shbab hlwen/shbab-4.png'
                ]
              },
              {
                title: 'جمعية الطلاب السودانيين',
                description: 'تصميم علامة تجارية تعليمية ومجتمعية للطلاب السودانيين في الخارج، تعزيز التواصل الثقافي والتميز الأكاديمي.',
                images: [
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 4-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 5-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 6-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 9-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 10-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 11-100.jpg',
                  '/graphic design/Sudanese Students Association/Billboard 3.jpg',
                  '/graphic design/Sudanese Students Association/Cap 1.jpg',
                  '/graphic design/Sudanese Students Association/Notebook 1.jpg',
                  '/graphic design/Sudanese Students Association/Pin 3.jpg',
                  '/graphic design/Sudanese Students Association/Room 1.jpg',
                  '/graphic design/Sudanese Students Association/Sweatshirt 1.jpg'
                ]
              },
              {
                title: 'يسر للأزياء والأسلوب',
                description: 'هوية بصرية أنيقة ومتطورة لعلامة أزياء تجسد التراث السوداني والأسلوب الحديث.',
                images: [
                  '/graphic design/Yusr/Billboard.png',
                  '/graphic design/Yusr/ID.png',
                  '/graphic design/Yusr/iPhone.png',
                  '/graphic design/Yusr/Pin.png',
                  '/graphic design/Yusr/Room.png',
                  '/graphic design/Yusr/Signboard.png',
                  '/graphic design/Yusr/y1 copy 2.png',
                  '/graphic design/Yusr/y1 copy 3.png',
                  '/graphic design/Yusr/y1 copy 4.png',
                  '/graphic design/Yusr/y1 copy 5.png',
                  '/graphic design/Yusr/y1 copy 8.png',
                  '/graphic design/Yusr/y1 copy 9.png',
                  '/graphic design/Yusr/y1 copy 10.png',
                  '/graphic design/Yusr/y1 copy 11.png',
                  '/graphic design/Yusr/y1 copy 12.png',
                  '/graphic design/Yusr/y1 copy 13.png',
                  '/graphic design/Yusr/y1 copy 14.png',
                  '/graphic design/Yusr/y1 copy 15.png',
                  '/graphic design/Yusr/y1 copy 23.png',
                  '/graphic design/Yusr/y1 copy 24.png',
                  '/graphic design/Yusr/y1 copy.png',
                  '/graphic design/Yusr/Yusr Cap.png'
                ]
              },
              {
                title: 'زوال في رواندا المجتمعية',
                description: 'تصميم علامة تجارية ثقافية ومجتمعية للشتات السوداني في رواندا، تحتفل بالتراث المشترك والاندماج المحلي.',
                images: [
                  '/graphic design/Zoal in Rwanda/zool 1.jpg',
                  '/graphic design/Zoal in Rwanda/zool 2.jpg',
                  '/graphic design/Zoal in Rwanda/zool 3.jpg',
                  '/graphic design/Zoal in Rwanda/zool 4.jpg',
                  '/graphic design/Zoal in Rwanda/zool 5.jpg',
                  '/graphic design/Zoal in Rwanda/zool 6.jpg'
                ]
              }
            ],
          }
        ]
      : [
          {
            title: 'Graphic Design',
            icon: 'design',
            projects: [
              {
                title: '249 Restaurant Branding',
                description: 'Complete visual identity and branding materials for a premium restaurant experience in Khartoum.',
                images: [
                  '/graphic design/249 Restaurant/44-100.jpg',
                  '/graphic design/249 Restaurant/55-100.jpg',
                  '/graphic design/249 Restaurant/65-100.jpg',
                  '/graphic design/249 Restaurant/444-100.jpg'
                ]
              },
              {
                title: 'Al Hilal S.C. Sports Club',
                description: 'Comprehensive branding and visual identity for Sudan\'s premier football club, including jerseys, posters, and digital assets.',
                images: [
                  '/graphic design/Al Hilal S.C/1.jpg',
                  '/graphic design/Al Hilal S.C/2.jpg',
                  '/graphic design/Al Hilal S.C/3.png',
                  '/graphic design/Al Hilal S.C/4.png'
                ]
              },
              {
                title: 'Embassy of Sudan Official Branding',
                description: 'Diplomatic branding and official visual communications for the Embassy of Sudan, representing national identity and prestige.',
                images: [
                  '/graphic design/Embassy of Sudan/ddf-100.jpg',
                  '/graphic design/Embassy of Sudan/gdgg-100.jpg',
                  '/graphic design/Embassy of Sudan/s11 copy 3-100.jpg',
                  '/graphic design/Embassy of Sudan/s111-100.jpg',
                  '/graphic design/Embassy of Sudan/sd1.jpg',
                  '/graphic design/Embassy of Sudan/sd2.jpg',
                  '/graphic design/Embassy of Sudan/sd3.jpg',
                  '/graphic design/Embassy of Sudan/sd4.jpg',
                  '/graphic design/Embassy of Sudan/ssd-100.jpg',
                  '/graphic design/Embassy of Sudan/ssd2-100.jpg',
                  '/graphic design/Embassy of Sudan/sudane 6-100.jpg',
                  '/graphic design/Embassy of Sudan/sudane2-100.jpg'
                ]
              },
              {
                title: 'Kriptonite Creative Agency',
                description: 'Bold and innovative visual identity for a creative agency specializing in digital marketing and brand development.',
                images: [
                  '/graphic design/Kriptonite/k1.jpg',
                  '/graphic design/Kriptonite/k2.jpg',
                  '/graphic design/Kriptonite/k3.jpg',
                  '/graphic design/Kriptonite/k4.jpg',
                  '/graphic design/Kriptonite/k5.jpg',
                  '/graphic design/Kriptonite/k6.jpg',
                  '/graphic design/Kriptonite/k7.jpg',
                  '/graphic design/Kriptonite/k8.jpg',
                  '/graphic design/Kriptonite/k9.jpg',
                  '/graphic design/Kriptonite/k10.jpg',
                  '/graphic design/Kriptonite/k11.png',
                  '/graphic design/Kriptonite/k12.png',
                  '/graphic design/Kriptonite/k13.png',
                  '/graphic design/Kriptonite/k14.png',
                  '/graphic design/Kriptonite/k15.png',
                  '/graphic design/Kriptonite/k16.png',
                  '/graphic design/Kriptonite/k17.jpg'
                ]
              },
              {
                title: 'Shbab Hlwen Youth Initiative',
                description: 'Youth-focused branding and visual communications for community engagement and social impact programs.',
                images: [
                  '/graphic design/shbab hlwen/shbab 1.png',
                  '/graphic design/shbab hlwen/shbab-.png',
                  '/graphic design/shbab hlwen/shbab-2.png',
                  '/graphic design/shbab hlwen/shbab-3.png',
                  '/graphic design/shbab hlwen/shbab-4.png'
                ]
              },
              {
                title: 'Sudanese Students Association',
                description: 'Educational and community-focused branding for Sudanese students abroad, promoting cultural connection and academic excellence.',
                images: [
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 4-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 5-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 1 copy 6-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 9-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 10-100.jpg',
                  '/graphic design/Sudanese Students Association/Artboard 8 copy 11-100.jpg',
                  '/graphic design/Sudanese Students Association/Billboard 3.jpg',
                  '/graphic design/Sudanese Students Association/Cap 1.jpg',
                  '/graphic design/Sudanese Students Association/Notebook 1.jpg',
                  '/graphic design/Sudanese Students Association/Pin 3.jpg',
                  '/graphic design/Sudanese Students Association/Room 1.jpg',
                  '/graphic design/Sudanese Students Association/Sweatshirt 1.jpg'
                ]
              },
              {
                title: 'Yusr Fashion & Lifestyle',
                description: 'Elegant and sophisticated visual identity for a fashion brand capturing Sudanese heritage and modern style.',
                images: [
                  '/graphic design/Yusr/Billboard.png',
                  '/graphic design/Yusr/ID.png',
                  '/graphic design/Yusr/iPhone.png',
                  '/graphic design/Yusr/Pin.png',
                  '/graphic design/Yusr/Room.png',
                  '/graphic design/Yusr/Signboard.png',
                  '/graphic design/Yusr/y1 copy 2.png',
                  '/graphic design/Yusr/y1 copy 3.png',
                  '/graphic design/Yusr/y1 copy 4.png',
                  '/graphic design/Yusr/y1 copy 5.png',
                  '/graphic design/Yusr/y1 copy 8.png',
                  '/graphic design/Yusr/y1 copy 9.png',
                  '/graphic design/Yusr/y1 copy 10.png',
                  '/graphic design/Yusr/y1 copy 11.png',
                  '/graphic design/Yusr/y1 copy 12.png',
                  '/graphic design/Yusr/y1 copy 13.png',
                  '/graphic design/Yusr/y1 copy 14.png',
                  '/graphic design/Yusr/y1 copy 15.png',
                  '/graphic design/Yusr/y1 copy 23.png',
                  '/graphic design/Yusr/y1 copy 24.png',
                  '/graphic design/Yusr/y1 copy.png',
                  '/graphic design/Yusr/Yusr Cap.png'
                ]
              },
              {
                title: 'Zoal in Rwanda Community',
                description: 'Cultural and community-focused branding for Sudanese diaspora in Rwanda, celebrating shared heritage and local integration.',
                images: [
                  '/graphic design/Zoal in Rwanda/zool 1.jpg',
                  '/graphic design/Zoal in Rwanda/zool 2.jpg',
                  '/graphic design/Zoal in Rwanda/zool 3.jpg',
                  '/graphic design/Zoal in Rwanda/zool 4.jpg',
                  '/graphic design/Zoal in Rwanda/zool 5.jpg',
                  '/graphic design/Zoal in Rwanda/zool 6.jpg'
                ]
              }
            ],
          }
        ];

    // Find the service by ID (only Graphic Design service has projects with images)
    if (serviceId === '1') {
      const service = services[0]; // Graphic Design service
      const projectIndex = parseInt(projectId || '0');
      const foundProject = service.projects[projectIndex];
      setProject(foundProject || null);
    }
  }, [serviceId, projectId, language]);

  if (!project) {
    return (
      <>
        <Header />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Project not found</h2>
          <button onClick={() => navigate('/service/1')} style={{ padding: '10px 20px', marginTop: '20px' }}>
            Back to Graphic Design
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const nextImage = () => {
    if (project.images) {
      setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  return (
    <>
      <Header />

      {/* Project Hero */}
      <section className="project-hero">
        <div className="container">
          <div className="hero-content">
            <div className="breadcrumb">
              <button onClick={() => navigate('/')} className="breadcrumb-link">Home</button>
              <span className="breadcrumb-separator">→</span>
              <button onClick={() => navigate('/service/1')} className="breadcrumb-link">Graphic Design</button>
              <span className="breadcrumb-separator">→</span>
              <span className="breadcrumb-current">{project.title}</span>
            </div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-stats">
              <div className="stat">
                <span className="stat-number">{project.images?.length || 0}</span>
                <span className="stat-label">Images</span>
              </div>
              <div className="stat">
                <span className="stat-number">2024</span>
                <span className="stat-label">Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">Design</span>
                <span className="stat-label">Category</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="project-gallery" style={{ margin: '4rem 0' }}>
        <div className="container">
          <div className="gallery-grid">
            {project.images?.map((image: string, index: number) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setSelectedImageIndex(index)}
                style={{
                  cursor: 'pointer',
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="gallery-overlay">
                  <div className="zoom-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && project.images && (
        <div className="image-modal-overlay" onClick={() => setSelectedImageIndex(null)}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={() => setSelectedImageIndex(null)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {project.images.length > 1 && (
              <>
                <button className="image-nav image-nav-prev" onClick={prevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="image-nav image-nav-next" onClick={nextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}

            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              className="image-modal-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />

            <div className="image-modal-counter">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}

      <Footer />

      <style>{`
        .project-hero {
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

        .project-hero::before {
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

        .project-hero .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .breadcrumb-link {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          font-size: 0.9rem;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .breadcrumb-link:hover {
          color: rgba(255, 255, 255, 1);
        }

        .breadcrumb-separator {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
        }

        .breadcrumb-current {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .project-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin: 0;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255,255,255,0.3);
        }

        .project-hero p {
          font-size: clamp(1.125rem, 2.5vw, 1.375rem);
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }

        .project-stats {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          min-width: 120px;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.95);
        }

        .stat-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-gallery {
          padding: 80px 0;
          background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .gallery-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .gallery-item:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 35px rgba(0, 27, 224, 0.2);
        }

        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 27, 224, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .zoom-icon {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .zoom-icon svg {
          width: 24px;
          height: 24px;
          color: var(--primary);
        }

        .image-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease-out;
        }

        .image-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: modalSlideIn 0.4s ease-out;
        }

        .image-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 10001;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .image-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .image-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .image-nav:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .image-nav-prev {
          left: 1rem;
        }

        .image-nav-next {
          right: 1rem;
        }

        .image-modal-image {
          width: 100%;
          height: auto;
          max-height: 80vh;
          display: block;
          object-fit: contain;
        }

        .image-modal-counter {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (max-width: 768px) {
          .project-hero {
            min-height: 50vh;
            margin-top: var(--space-12);
          }

          .project-hero h1 {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .project-stats {
            gap: 1rem;
          }

          .stat {
            min-width: 100px;
            padding: 1rem;
          }

          .gallery-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }

          .breadcrumb {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </>
  );
}
