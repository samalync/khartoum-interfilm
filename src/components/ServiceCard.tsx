import { Service } from '../../types';
import { useLanguage } from './LanguageContext';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const { language } = useLanguage();

  const renderIcon = () => {
    switch (service.icon) {
      case 'video':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7.5C4 6.12 5.12 5 6.5 5h6A2.5 2.5 0 0 1 15 7.5v9A2.5 2.5 0 0 1 12.5 19h-6A2.5 2.5 0 0 1 4 16.5v-9Z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="m16 9 3-2v10l-3-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      case 'design':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19h6.5M7 5.5 15 3l2 4-8 2.5-2-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M11 10.5 9.5 16 7 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
      case 'marketing':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 15V5.5A1.5 1.5 0 0 1 7.4 4.4L17 8.5v7l-9.6 4.1A1.5 1.5 0 0 1 5 18.9V15Z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="M17 9.5c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'voiceover':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'development':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19V9.5A2.5 2.5 0 0 1 7.5 7H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M8 13l2.5 2.5L14 11l3 3 3-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <rect x="4" y="5" width="6" height="3" rx="1.2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
          </svg>
        );
      case 'event':
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <circle cx="9" cy="14" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="14" r="1.5" fill="currentColor"/>
            <path d="M19 6l-1 1M19 18l-1 1M5 6l1 1M5 18l1 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none"/>
          </svg>
        );
      case 'software':
      default:
        return (
          <svg className="service-icon-svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" fill="none"/>
            <path d="M9 10 7 12l2 2M15 10l2 2-2 2M12 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        );
    }
  };

  return (
    <>
      <button type="button" className="service-card" onClick={onClick}>
        <div className="service-icon">{renderIcon()}</div>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <span className="service-link" role="presentation">
          {language === 'ar' ? 'عرض التفاصيل' : 'View details'}
        </span>
      </button>

      <style>{`
        .service-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: var(--space-8) var(--space-6);
          border-radius: var(--radius-3xl);
          border: none;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4);
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          cursor: pointer;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--gradient-primary);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .service-card:hover {
          transform: translateY(-8px) scale(1.02) rotateX(2deg);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 0 40px rgba(0, 27, 224, 0.1);
        }

        .service-card:hover::before {
          opacity: 0.03;
        }

        .service-card:active {
          transform: translateY(-1px);
        }

        .service-icon {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-xl);
          margin: 0 auto var(--space-4);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 27, 224, 0.1);
          border: 2px solid rgba(0, 27, 224, 0.2);
          color: var(--primary);
          transition: all 0.2s ease;
        }

        .service-card:hover .service-icon {
          background: var(--primary);
          color: white;
          transform: scale(1.05);
        }

        .service-icon-svg {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        .service-card h3 {
          color: var(--primary);
          margin-bottom: var(--space-3);
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.025em;
          text-align: center;
          line-height: 1.3;
        }

        .service-card p {
          color: var(--text-secondary);
          margin-bottom: var(--space-6);
          flex-grow: 1;
          line-height: 1.6;
          font-size: 1rem;
          font-weight: 400;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          color: var(--primary);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.025em;
          text-transform: uppercase;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: auto;
          user-select: none;
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .service-link::after {
          content: '→';
          font-size: 1.1em;
          transition: transform 0.2s ease;
        }

        .service-card:hover .service-link {
          color: var(--text-inverse);
          background: var(--gradient-primary);
          border-color: var(--primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .service-card:hover .service-link::after {
          transform: translateX(4px);
        }
      `}</style>
    </>
  );
};

export default ServiceCard;
