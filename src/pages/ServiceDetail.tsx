import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../components/LanguageContext';
import { Service } from '../../types';

interface VideoModalProps {
  videoSrc: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <video
          className="video-modal-player"
          src={videoSrc}
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </div>
  );
};

interface ImageCarouselProps {
  images: string[];
  projectTitle: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, projectTitle }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && images.length > 1) {
      nextImage();
    }
    if (isRightSwipe && images.length > 1) {
      prevImage();
    }
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        <div
          className="carousel-track"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            cursor: images.length > 1 ? 'grab' : 'default'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img
                src={image}
                alt={`${projectTitle} - Image ${index + 1}`}
                className="carousel-image"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              className="carousel-nav carousel-nav-prev"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className="carousel-nav carousel-nav-next"
              onClick={nextImage}
              aria-label="Next image"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {images.length > 2 && (
          <div className="carousel-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

interface ProjectDetailModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openImageViewer = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (project?.images && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project?.images && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeImageViewer();
    };

    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedImageIndex]);

  if (!isOpen || !project) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          padding: '2rem'
        }}
        onClick={onClose}
      >
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            padding: '2rem',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'black',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              cursor: 'pointer'
            }}
          >
            ×
          </button>

          <h2 style={{ marginTop: 0, color: '#001be0' }}>{project.title}</h2>
          <p style={{ color: '#666' }}>{project.description}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            {project.images?.map((image: string, index: number) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease'
                }}
                onClick={() => openImageViewer(index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 27, 224, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="#001be0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="3" stroke="#001be0" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Image Viewer Modal */}
      {selectedImageIndex !== null && project.images && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
          }}
          onClick={closeImageViewer}
        >
          <div style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            {/* Close button */}
            <button
              onClick={closeImageViewer}
              style={{
                position: 'absolute',
                top: '-3rem',
                right: '0',
                background: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              ×
            </button>

            {/* Navigation buttons */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-4rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-4rem',
                    transform: 'translateY(-50%)',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </>
            )}

            {/* Main image */}
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} - Image ${selectedImageIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '80vh',
                display: 'block',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />

            {/* Image counter */}
            <div style={{
              position: 'absolute',
              bottom: '-3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}>
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [service, setService] = useState<Service | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Define services data (same as in Home.tsx)
    const services: Service[] = language === 'ar'
      ? [
          {
            title: 'المونتاج والفوتوغراف',
            description: 'أفلام سينمائية، مواد مرئية للشركات، ومحتوى رقمي مصمم ليحكي قصة علامتك التجارية بأسلوب احترافي.',
            icon: 'video',
            details:
              'ندير دورة الإنتاج كاملة من الفكرة والسيناريو والتصوير حتى المونتاج ومعالجة الألوان والصوت، مع تكييف المحتوى لكل منصة (تلفزيون، سوشيال ميديا، شاشات عرض داخلية).',
            projects: [
              {
                title: 'عرض إنشاء المحتوى',
                description: 'تقنيات إنشاء المحتوى والسرد الرقمي المهنية للعلامات التجارية الحديثة.',
                media: '/videography/content-creating-2.mp4'
              },
              {
                title: 'إنتاج المحتوى الرقمي',
                description: 'خدمات إنتاج المحتوى الرقمي الشاملة بما في ذلك الكتابة والتصوير والتحرير.',
                media: '/videography/content-creating.mp4'
              },
              {
                title: 'مغامرات فريق الذهب',
                description: 'تغطية وثائقية لتجارب السفر ومغامرات الفريق.',
                media: '/videography/golden-team-trips.mp4'
              },
              {
                title: 'احتفالات عيد الاستقلال',
                description: 'تغطية سينمائية للاحتفالات الوطنية والأحداث الوطنية في السودان.',
                media: '/videography/independance-day.mp4'
              },
              {
                title: 'أحداث السفارة السودانية العسكرية',
                description: 'توثيق رسمي للأحداث الدبلوماسية والعسكرية في سفارة السودان.',
                media: '/videography/sudan-embassy-military.mp4'
              },
              {
                title: 'الزفاف السوداني التقليدي',
                description: 'توثيق جميل لمراسم وأعراس سودانية تقليدية.',
                media: '/videography/sudanese-weddings.mp4'
              },
              {
                title: 'مغامرات فريق الذهب الجزء الثاني',
                description: 'تغطية ممتدة لمغامرات الفريق والرحلات والأنشطة الجماعية.',
                media: '/videography/trips-golden-team-2.mp4'
              },
              {
                title: 'أحداث الجامعة وحياة الحرم الجامعي',
                description: 'تغطية ديناميكية لأحداث الجامعة والاحتفالات الأكاديمية وحياة الطلاب.',
                media: '/videography/unilak.mp4'
              },
              {
                title: 'خدمات التعليق الصوتي المهنية',
                description: 'إنتاج تعليق صوتي عالي الجودة للإعلانات والوثائقيات والتواصل المؤسسي.',
                media: '/videography/voiceover.mp4'
              }
            ],
          },
          {
            title: 'التصميم الجرافيكي',
            description: 'هويات بصرية، تصميم حملات، ومطبوعات تبقي علامتك حاضرة في ذهن الجمهور.',
            icon: 'design',
            details: 'نصمم أنظمة هوية متكاملة يمكن تطبيقها على جميع نقاط الاتصال: الشعار، الأدلة البصرية، المواد المطبوعة، وقوالب المحتوى الرقمي.',
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
                  '/graphic design/Embassy of Sudan/sd1.jpg'
                ]
              },
              {
                title: 'وكالة كريبتونايت الإبداعية',
                description: 'هوية بصرية جريئة ومبتكرة لوكالة إبداعية متخصصة في التسويق الرقمي وتطوير العلامات التجارية.',
                images: [
                  '/graphic design/Kriptonite/k1.jpg',
                  '/graphic design/Kriptonite/k2.jpg',
                  '/graphic design/Kriptonite/k3.jpg'
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
                  '/graphic design/Sudanese Students Association/Billboard 3.jpg'
                ]
              },
              {
                title: 'يسر للأزياء والأسلوب',
                description: 'هوية بصرية أنيقة ومتطورة لعلامة أزياء تجسد التراث السوداني والأسلوب الحديث.',
                images: [
                  '/graphic design/Yusr/y1 copy 2.png',
                  '/graphic design/Yusr/y1 copy 3.png',
                  '/graphic design/Yusr/y1 copy 4.png'
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
                  '/graphic design/Zoal in Rwanda/zool 5.jpg'
                ]
              }
            ],
          },
          {
            title: 'التسويق',
            description: 'استراتيجيات تسويقية عملية تربط المحتوى بنتائج واضحة في المبيعات والنمو.',
            icon: 'marketing',
            details: 'نبني خطط حملات متكاملة تجمع بين المحتوى، الإعلانات، والتحليلات مع لوحات متابعة توضح العائد من الاستثمار لكل قناة.',
            projects: [
              {
                title: 'تطوير استراتيجية التسويق',
                description: 'تحليل السوق والمنافسين، تحديد الجمهور المستهدف، إنشاء خطط تسويقية قصيرة وطويلة الأمد، تحديد مؤشرات الأداء الرئيسية، وتطوير خرائط تنفيذ واضحة لتوجيه نمو أعمالك.'
              },
              {
                title: 'إدارة وسائل التواصل الاجتماعي',
                description: 'إدارة شاملة لوجود وسائل التواصل الاجتماعي بما في ذلك إنشاء وإدارة الصفحات، تطوير خطط النشر الأسبوعية والشهرية، كتابة المحتوى المهنية والتصميم الجرافيكي، إدارة التفاعلات مع العملاء، وتقديم تقارير أداء شهرية مفصلة.'
              },
              {
                title: 'حملات الإعلانات المدفوعة',
                description: 'استراتيجيات إعلانية مدفوعة عبر منصات فيسبوك وإنستغرام وتيك توك مع تخطيط ميزانية شامل، تحسين الأداء المستمر، وتقارير تحليل مفصلة لزيادة العائد على الاستثمار.'
              },
              {
                title: 'إنتاج المحتوى الإبداعي',
                description: 'كتابة إعلانات احترافية، إنتاج فيديوهات قصيرة جذابة (Reels/TikTok)، سرد قصص العلامة التجارية المؤثرة، وتطوير محتوى مرئي إبداعي لبناء سرديات علامة تجارية قوية وزيادة التفاعل مع الجمهور.'
              },
              {
                title: 'خدمات التصميم الجرافيكي',
                description: 'تصميم هوية علامة تجارية وشعار كاملة، ملفات تعريف شركة احترافية، عروض تقديم PowerPoint، ملصقات، منشورات، وتصميمات وسائل التواصل الاجتماعي محسّنة لتعزيز حضور علامتك التجارية البصرية.'
              },
              {
                title: 'إدارة مشاريع التسويق',
                description: 'خدمات إدارة تسويقية شاملة بما في ذلك الإشراف على وسائل التواصل الاجتماعي، استراتيجية المحتوى، إدارة الإعلانات، التخطيط الشهري للمشاريع، وتقارير الأداء المفصلة لنجاح الحملة الكامل.'
              },
              {
                title: 'حملات إطلاق المنتجات الجديدة',
                description: 'دعم إطلاق منتج شامل من البداية إلى النهاية بما في ذلك التحليل الشامل للجمهور والمنتج، تطوير استراتيجية إطلاق، تنفيذ حملة متعددة القنوات، وتتبع الأداء المستمر لإطلاق سوق ناجح.'
              },
              {
                title: 'خدمات إعادة العلامة التجارية',
                description: 'خدمات تحويل العلامة التجارية الشاملة بما في ذلك التقييم الشامل للعلامة، إعادة تصميم هوية العلامة الكاملة، تخطيط التنفيذ الاستراتيجي، وإطلاق الهوية الجديدة من خلال حملات تسويقية متكاملة.'
              }
            ],
          },
          {
            title: 'التعليق الصوتي',
            description: 'أصوات احترافية بعدة لهجات ولغات تناسب الأفلام، الإعلانات، والبودكاست.',
            icon: 'voiceover',
            details: 'نختار لك الصوت الأنسب لعلامتك، وندير عملية التسجيل والمكساج بالكامل لتخرج الرسالة بصوت واضح ومؤثر على كل المنصات.',
            projects: [
              {
                title: 'خدمات التعليق الصوتي المهنية',
                description: 'إنتاج تعليق صوتي عالي الجودة للإعلانات والوثائقيات والتواصل المؤسسي.',
                media: '/videography/voiceover.mp4'
              }
            ],
          },
          {
            title: 'تطوير الأعمال',
            description: 'دعم استراتيجي يحول الحملات والوعي بالعلامة إلى فرص حقيقية وعلاقات طويلة الأمد.',
            icon: 'development',
            details: 'نساعدك في بناء خطط نمو، شراكات، وفرص جديدة بالاعتماد على البيانات والرؤى القادمة من التسويق والأداء الرقمي.',
            projects: [
              {
                title: 'دراسات السوق والتحليل',
                description: 'دراسات السوق والفرص، تحليل المنافسين، رؤى سلوك العملاء، والتقارير الاستراتيجية لاتخاذ القرارات.'
              },
              {
                title: 'نماذج الأعمال وخطط النمو',
                description: 'لوحة أعمال Canvas، استراتيجيات النمو والتوسع، الخطط التشغيلية (قصيرة وطويلة الأمد)، والخرائط الاستراتيجية للشركات.'
              },
              {
                title: 'الشراكات وتطوير العملاء',
                description: 'العثور على العملاء والشركاء المحتملين، إعداد عرض تقديمي احترافي، بناء وصيانة العلاقات التجارية، وتحويل العملاء المحتملين إلى عملاء نشيطين.'
              },
              {
                title: 'تحسين العمليات',
                description: 'تطوير سير العمل الداخلي، إنشاء سياسات وبروتوكولات بسيطة، وتصميم قوالب ونماذج تشغيلية.'
              },
              {
                title: 'تدريب التطوير التجاري',
                description: 'مهارات التواصل والإقناع، تطوير خطط الأعمال والنماذج، ومهارات التفاوض.'
              }
            ],
          },
          {
            title: 'تنسيق الأحداث',
            description: 'خدمات شاملة لتخطيط وتنسيق الأحداث للشركات، إطلاق المنتجات، والمناسبات الخاصة.',
            icon: 'event',
            details: 'من التخطيط إلى التنفيذ، نتولى جميع جوانب تنسيق الأحداث بما في ذلك اختيار المكان، اللوجستيات، الترفيه، وتحليل ما بعد الحدث. يضمن فريقنا تنفيذاً سلساً وتجارب لا تُنسى تتوافق مع أهداف علامتك التجارية.',
            projects: [
              {
                title: 'إدارة الأحداث الشركاتية',
                description: 'التخطيط والتنفيذ الشامل للأحداث الشركاتية، المؤتمرات، وأنشطة بناء الفريق.'
              },
              {
                title: 'أحداث إطلاق المنتجات',
                description: 'إطلاقات منتجات مذهلة مع عروض تقديمية جذابة، عروض توضيحية، وتفاعل مع الجمهور.'
              },
              {
                title: 'الأحداث الثقافية والاجتماعية',
                description: 'التخطيط والتنسيق للاحتفالات الثقافية، التجمعات الاجتماعية، والأحداث المجتمعية.'
              }
            ],
          },
          {
            title: 'الحلول البرمجية',
            description: 'مواقع وأنظمة وأدوات رقمية تجعل التسويق والمبيعات والعمليات أكثر سلاسة.',
            icon: 'software',
            details: 'بالشراكة مع Samalync ننفذ مواقع وأنظمة ولوحات تحكم تدعم التسويق والمبيعات وتوفر وقت فريقك من خلال الأتمتة والتقارير الواضحة.',
            projects: [
              'مواقع تسويقية وصفحات هبوط للحملات',
              'لوحات تحكم لتقارير الأداء الإعلاني',
              'أدوات داخلية مؤتمتة للمهام المتكررة',
            ],
          },
        ]
      : [
          {
            title: 'Video editing & Photography',
            description:
              'Cinematic films, corporate visuals, and social-first content with story-first editing and on-brand photography.',
            icon: 'video',
            details:
              'We handle the full lifecycle from storyboard to final cut: scripting, directing, filming, editing, color, and sound. We adapt each piece for TV, social, and in-store, ensuring your visuals are consistent across every channel.',
            projects: [
              {
                title: 'Content Creation Showcase',
                description: 'Professional content creation and digital storytelling techniques for modern brands.',
                media: '/videography/content-creating-2.mp4'
              },
              {
                title: 'Digital Content Production',
                description: 'Comprehensive digital content production services including scripting, filming, and editing.',
                media: '/videography/content-creating.mp4'
              },
              {
                title: 'Golden Team Travel Adventures',
                description: 'Documentary-style coverage of team travel experiences and adventure expeditions.',
                media: '/videography/golden-team-trips.mp4'
              },
              {
                title: 'Independence Day Celebrations',
                description: 'Cinematic coverage of national celebrations and patriotic events in Sudan.',
                media: '/videography/independance-day.mp4'
              },
              {
                title: 'Sudan Embassy Military Events',
                description: 'Official documentation of diplomatic and military events at the Sudan Embassy.',
                media: '/videography/sudan-embassy-military.mp4'
              },
              {
                title: 'Traditional Sudanese Weddings',
                description: 'Beautiful documentation of traditional Sudanese wedding ceremonies and celebrations.',
                media: '/videography/sudanese-weddings.mp4'
              },
              {
                title: 'Golden Team Adventures Part 2',
                description: 'Extended coverage of team adventures, expeditions, and group activities.',
                media: '/videography/trips-golden-team-2.mp4'
              },
              {
                title: 'University Events & Campus Life',
                description: 'Dynamic coverage of university events, academic celebrations, and student life.',
                media: '/videography/unilak.mp4'
              },
              {
                title: 'Professional Voiceover Services',
                description: 'High-quality voiceover production for commercials, documentaries, and corporate communications.',
                media: '/videography/voiceover.mp4'
              }
            ],
          },
          {
            title: 'Graphic Design',
            description:
              'Brand identities, campaign visuals, and layouts that keep your brand instantly recognizable.',
            icon: 'design',
            details:
              'From logos and brand systems to campaign key visuals, we create design systems that scale across print, digital, and OOH. Every asset is optimized for clarity, impact, and consistency.',
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
                  '/graphic design/Embassy of Sudan/sd1.jpg'
                ]
              },
              {
                title: 'Kriptonite Creative Agency',
                description: 'Bold and innovative visual identity for a creative agency specializing in digital marketing and brand development.',
                images: [
                  '/graphic design/Kriptonite/k1.jpg',
                  '/graphic design/Kriptonite/k2.jpg',
                  '/graphic design/Kriptonite/k3.jpg'
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
                  '/graphic design/Sudanese Students Association/Billboard 3.jpg'
                ]
              },
              {
                title: 'Yusr Fashion & Lifestyle',
                description: 'Elegant and sophisticated visual identity for a fashion brand capturing Sudanese heritage and modern style.',
                images: [
                  '/graphic design/Yusr/y1 copy 2.png',
                  '/graphic design/Yusr/y1 copy 3.png',
                  '/graphic design/Yusr/y1 copy 4.png'
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
                  '/graphic design/Zoal in Rwanda/zool 5.jpg'
                ]
              }
            ],
          },
          {
            title: 'Marketing',
            description:
              'Performance-focused marketing strategies that connect campaigns to clear business KPIs.',
            icon: 'marketing',
            details:
              'We build full-funnel campaign plans that combine content, media, and analytics. Our team aligns messaging, targeting, and reporting so you can see exactly how your marketing is performing. Our Marketing & Business Development Department combines modern marketing strategies with effective business development solutions to help companies expand and achieve sustainable success.',
            projects: [
              {
                title: 'Marketing Strategy Development',
                description: 'Market and competitor analysis, defining target audiences, creating short and long-term marketing plans, setting KPIs, and developing clear implementation roadmaps to guide your business growth.'
              },
              {
                title: 'Social Media Management',
                description: 'Complete social media presence management including creating and managing pages, developing weekly/monthly posting plans, professional content writing and graphic design, managing customer interactions, and providing detailed monthly performance reports.'
              },
              {
                title: 'Paid Advertising Campaigns',
                description: 'Strategic paid advertising across Facebook, Instagram, and TikTok platforms with comprehensive budget planning, continuous performance optimization, and detailed analysis reports to maximize ROI.'
              },
              {
                title: 'Creative Content Production',
                description: 'Professional advertising copywriting, engaging short video production (Reels/TikTok), compelling brand storytelling, and creative visual content development to build strong brand narratives and audience engagement.'
              },
              {
                title: 'Graphic Design Services',
                description: 'Complete brand identity and logo design, professional company profiles, PowerPoint presentations, posters, flyers, and optimized social media graphics that strengthen your visual brand presence.'
              },
              {
                title: 'Marketing Project Management',
                description: 'Comprehensive marketing management services including social media oversight, content strategy, advertising management, monthly project planning, and detailed performance reporting for complete campaign success.'
              },
              {
                title: 'New Product Launch Campaigns',
                description: 'End-to-end product launch support including thorough audience and product analysis, comprehensive launch strategy development, multi-channel campaign execution, and ongoing performance tracking for successful market introductions.'
              },
              {
                title: 'Rebranding Services',
                description: 'Complete brand transformation services including comprehensive brand assessment, full brand identity redesign, strategic implementation planning, and launching the new identity through integrated marketing campaigns.'
              }
            ],
          },
          {
            title: 'Voiceover',
            description:
              'Professional voice talent in multiple tones and languages for film, radio, and digital.',
            icon: 'voiceover',
            details:
              'We work with a curated roster of voice artists to match your brand\'s tone - warm, authoritative, playful, or cinematic. We handle casting, recording, and final mix for every platform.',
            projects: [
              {
                title: 'Professional Voiceover Services',
                description: 'High-quality voiceover production for commercials, documentaries, and corporate communications.',
                media: '/videography/voiceover.mp4'
              }
            ],
          },
          {
            title: 'Business Development',
            description:
              'Strategic support to turn campaigns and content into long-term business growth.',
            icon: 'development',
            details:
              'We help you translate marketing momentum into pipeline and revenue with go-to-market support, partnership strategies, and growth roadmaps tailored to your stage. Our Business Development Department supports businesses in growing their brands, improving their market presence, and increasing their revenue through comprehensive market research and strategic planning. We combine research, planning, creativity, professional execution, and continuous follow-up to ensure the best results.',
            projects: [
              {
                title: 'Market Research & Analysis',
                description: 'Market and opportunity studies, competitor analysis, customer behavior insights, and strategic reports for decision-making.'
              },
              {
                title: 'Business Models & Growth Plans',
                description: 'Business Model Canvas, growth and expansion strategies, operational plans (short & long term), and corporate roadmaps.'
              },
              {
                title: 'Partnership & Client Development',
                description: 'Finding potential clients and partners, preparing professional pitch decks, building and maintaining business relationships, and turning leads into active clients.'
              },
              {
                title: 'Process Improvement',
                description: 'Developing internal workflows, creating simple policies and procedures, and designing operational templates and forms.'
              },
              {
                title: 'Business Development Training',
                description: 'Communication and persuasion skills, business plans and model development, and negotiation skills.'
              }
            ],
          },
          {
            title: 'Event Coordinating',
            description: 'Comprehensive event planning and coordination services for corporate events, product launches, and special occasions.',
            icon: 'event',
            details: 'From concept to execution, we handle all aspects of event planning including venue selection, logistics, entertainment, and post-event analysis. Our team ensures seamless execution and memorable experiences that align with your brand objectives.',
            projects: [
              {
                title: 'Corporate Event Management',
                description: 'End-to-end planning and execution of corporate events, conferences, and team-building activities.'
              },
              {
                title: 'Product Launch Events',
                description: 'Spectacular product launches with engaging presentations, demonstrations, and audience interaction.'
              },
              {
                title: 'Cultural and Social Events',
                description: 'Planning and coordination of cultural celebrations, social gatherings, and community events.'
              }
            ],
          },
          {
            title: 'Software Solutions',
            description:
              'Websites, platforms, and tools that make marketing, sales, and operations run smoother.',
            icon: 'software',
            details:
              'In partnership with Samalync, we design and develop digital products that support your marketing—landing pages, dashboards, CRMs, and automation that save your team time.',
            projects: [
              'Marketing websites and landing page systems',
              'Custom dashboards for campaign reporting',
              'Internal tools to automate repetitive workflows',
            ],
          },
        ];

    // Find the service by ID
    const foundService = services.find((s, index) => index.toString() === serviceId);
    setService(foundService || null);
  }, [serviceId, language]);

  if (!service) {
    return (
      <>
        <Header />
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h2>Service not found</h2>
          <button onClick={() => navigate('/')} style={{ padding: '10px 20px', marginTop: '20px' }}>
            Back to Home
          </button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <section className="service-detail-hero">
        <div className="container">
          <div className="hero-content">
            <div className="service-icon-large">
              {service.icon === 'video' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 7.5C4 6.12 5.12 5 6.5 5h6A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-6A2.5 2.5 0 0 1 4 16.5v-9Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                  />
                  <path
                    d="m16 9 3-2v10l-3-2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              )}
              {service.icon === 'design' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {service.icon === 'marketing' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <path
                    d="M22 2l-5 5m0 0V3m0 4h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {service.icon === 'voiceover' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {service.icon === 'development' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {service.icon === 'event' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {service.icon === 'software' && (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <div className="service-stats">
              <div className="stat">
                <span className="stat-number">250+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-content" style={{ margin: '4rem 0' }}>
        <div className="container">
          <div className="content-grid">
            <div className="content-main">
              <h2>{language === 'ar' ? 'تفاصيل الخدمة' : 'Service Details'}</h2>
              <p>{service.details}</p>

              {service.projects && service.projects.length > 0 && (
                <div className="service-projects">
                  <h3>{language === 'ar' ? 'أعمالنا المميزة' : 'Featured Projects'}</h3>
                  <div className="projects-grid">
                    {service.projects.map((project, index) => {
                      if (typeof project === 'string') {
                        return (
                          <div key={index} className="project-card">
                            <p>{project}</p>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={index}
                          className="project-card"
                          onClick={() => {
                            if (project.images && project.images.length > 0) {
                              setSelectedProject({
                                ...project,
                                currentImageIndex: 0
                              });
                            }
                          }}
                          style={{
                            cursor: project.images && project.images.length > 0 ? 'pointer' : 'default'
                          }}
                        >
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          {project.media && (
                            <div
                              className="video-thumbnail"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedVideo(project.media!);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className="thumbnail-overlay">
                                <div className="play-button">
                                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 5v14l11-7L8 5z" fill="white"/>
                                  </svg>
                                </div>
                                <div className="thumbnail-text">Click to Play</div>
                              </div>
                            </div>
                          )}
                          {project.images && project.images.length > 0 && (
                            <div className="project-images-grid">
                              {project.images.slice(0, 2).map((image, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className="project-image-item"
                                >
                                  <img
                                    src={image}
                                    alt={`Project image ${imgIndex + 1}`}
                                    className="project-image"
                                    onError={(e) => {
                                      const target = e.target as HTMLImageElement;
                                      target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              ))}
                              <div
                                className="more-images-card"
                              >
                                <div className="more-images-content">
                                  <span className="more-count">+{project.images.length - 2}</span>
                                  <span className="more-text">more</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="content-sidebar">
              <div className="service-cta">
                <h3>{language === 'ar' ? 'ابدأ مشروعك' : 'Start Your Project'}</h3>
                <p>{language === 'ar' ? 'جاهز للبدء؟ تواصل معنا اليوم!' : 'Ready to get started? Contact us today!'}</p>
                <button
                  className="cta-button"
                  onClick={() => {
                    // Navigate to home page first
                    navigate('/');

                    // Wait for navigation to complete, then scroll to contact and set subject
                    setTimeout(() => {
                      const contact = document.getElementById('contact');
                      if (contact) {
                        contact.scrollIntoView({ behavior: 'smooth' });
                      }

                      // Set the subject field with service name
                      const subjectInput = document.getElementById('contact-subject') as HTMLInputElement;
                      if (subjectInput) {
                        subjectInput.value = `${language === 'ar' ? 'استفسار عن خدمة:' : 'Inquiry about:'} ${service.title}`;
                        subjectInput.focus();
                      }
                    }, 100);
                  }}
                >
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Video Modal */}
      <VideoModal
        videoSrc={selectedVideo || ''}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <style>{`
        .service-detail-hero {
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

        .service-detail-hero::before {
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

        .service-detail-hero .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .service-icon-large {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .service-icon-large svg {
          width: 60px;
          height: 60px;
        }

        .service-detail-hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin: 0;
          font-weight: 900;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.8) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 0 40px rgba(255,255,255,0.3);
        }

        .service-detail-hero p {
          font-size: clamp(1.125rem, 2.5vw, 1.375rem);
          max-width: 600px;
          margin: 0 auto;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.7;
        }

        .service-stats {
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
          font-size: 2rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.95);
        }

        .stat-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-align: center;
        }

        .service-content {
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

        .service-projects {
          margin-top: 3rem;
        }

        .service-projects h3 {
          color: var(--primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: white;
          border: 1px solid rgba(0, 27, 224, 0.08);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.1);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .project-card h4 {
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .project-card p {
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .content-sidebar {
          position: sticky;
          top: 2rem;
        }

        .service-cta {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05), rgba(0, 180, 255, 0.03));
          border: 2px solid rgba(0, 27, 224, 0.1);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 12px 40px rgba(0,0,0,0.05);
        }

        .service-cta h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: 700;
        }

        .service-cta p {
          color: var(--gray);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .cta-button {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0, 27, 224, 0.3);
        }

        .cta-button:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(0, 27, 224, 0.4);
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

        .video-thumbnail {
          position: relative;
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f0f4ff 0%, #e8f2ff 100%);
          border-radius: 12px;
          border: 2px solid rgba(0, 27, 224, 0.1);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .video-thumbnail:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.15);
          border-color: rgba(0, 27, 224, 0.3);
        }

        .thumbnail-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          transition: background 0.3s ease;
        }

        .video-thumbnail:hover .thumbnail-overlay {
          background: rgba(0, 27, 224, 0.6);
        }

        .play-button {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          border: 3px solid rgba(0, 27, 224, 0.3);
        }

        .video-thumbnail:hover .play-button {
          transform: scale(1.1);
          background: white;
          border-color: var(--primary);
          box-shadow: 0 6px 20px rgba(0, 27, 224, 0.4);
        }

        .play-button svg {
          width: 24px;
          height: 24px;
          margin-left: 2px;
          color: var(--primary);
        }

        .thumbnail-text {
          color: white;
          font-weight: 600;
          font-size: 0.9rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          opacity: 0.9;
        }

        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease-out;
        }

        .video-modal-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          background: black;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          animation: modalSlideIn 0.4s ease-out;
        }

        .video-modal-close {
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

        .video-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }

        .video-modal-player {
          width: 100%;
          height: auto;
          max-height: 80vh;
          display: block;
          border: none;
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

        .project-images-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .project-image-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-image-item:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.2);
        }

        .image-overlay {
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

        .project-image-item:hover .image-overlay {
          opacity: 1;
        }

        .view-icon {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .view-icon svg {
          width: 20px;
          height: 20px;
          color: var(--primary);
        }

        .more-images-badge {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
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

        .project-images-horizontal {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          align-items: center;
        }

        .project-image-item-horizontal {
          flex: 0 0 120px;
          height: 120px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .project-image-item-horizontal:hover .project-image {
          transform: scale(1.1);
        }

        .project-image-item-horizontal:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.2);
        }

        .more-images-card {
          flex: 0 0 120px;
          height: 120px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.1), rgba(0, 180, 255, 0.1));
          border: 2px solid rgba(0, 27, 224, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .more-images-card:hover {
          transform: scale(1.05);
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.15), rgba(0, 180, 255, 0.15));
          border-color: rgba(0, 27, 224, 0.4);
        }

        .more-images-content {
          text-align: center;
          color: var(--primary);
        }

        .more-count {
          display: block;
          font-size: 2rem;
          font-weight: 900;
          line-height: 1;
        }

        .more-text {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: lowercase;
          margin-top: 0.25rem;
        }

        .image-carousel {
          margin-top: 1rem;
          width: 100%;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 27, 224, 0.1);
        }

        .carousel-track {
          display: flex;
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease-out;
        }

        .carousel-slide {
          flex: 0 0 100%;
          width: 100%;
          height: 100%;
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 12px;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          color: var(--primary);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.75rem;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .carousel-nav:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 27, 224, 0.25);
        }

        .carousel-nav-prev {
          left: 1rem;
        }

        .carousel-nav-next {
          right: 1rem;
        }

        .carousel-indicators {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
        }

        .carousel-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-indicator.active {
          background: white;
          transform: scale(1.2);
        }

        .carousel-counter {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        @media (max-width: 768px) {
          .service-detail-hero {
            min-height: 60vh;
            margin-top: var(--space-12);
          }

          .service-detail-hero h1 {
            font-size: clamp(2rem, 8vw, 3rem);
          }

          .service-icon-large {
            width: 80px;
            height: 80px;
          }

          .service-icon-large svg {
            width: 40px;
            height: 40px;
          }

          .service-stats {
            gap: 1rem;
          }

          .stat {
            min-width: 100px;
            padding: 1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .video-modal-content {
            max-width: 95vw;
            max-height: 95vh;
          }

          .video-thumbnail {
            height: 150px;
          }

          .play-button {
            width: 50px;
            height: 50px;
          }

          .play-button svg {
            width: 20px;
            height: 20px;
          }

          .project-images-horizontal {
            flex-wrap: wrap;
            justify-content: center;
          }

          .project-image-item-horizontal {
            flex: 0 0 100px;
            height: 100px;
          }

          .more-images-card {
            flex: 0 0 100px;
            height: 100px;
          }

          .more-count {
            font-size: 1.5rem;
          }

          .image-modal-content {
            max-width: 95vw;
            max-height: 95vh;
          }

          .image-nav {
            padding: 0.75rem;
            font-size: 1.5rem;
          }

          .carousel-container {
            height: 250px;
          }

          .carousel-nav {
            padding: 0.5rem;
            font-size: 1.25rem;
          }

          .carousel-nav-prev {
            left: 0.5rem;
          }

          .carousel-nav-next {
            right: 0.5rem;
          }
        }
      `}</style>
    </>
  );
}
