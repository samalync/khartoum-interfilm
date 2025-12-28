import { Service } from '../types';
import { useLanguage } from './LanguageContext';
import React from 'react';

interface ServiceCardProps extends React.HTMLAttributes<HTMLButtonElement> {
  service: Service;
  onClick: () => void;
}

const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const { language } = useLanguage();
  const renderIcon = () => {
    switch (service.icon) {
      case 'video':
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
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
        );
      case 'design':
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 19h6.5M7 5.5 15 3l2 4-8 2.5-2-4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M11 10.5 9.5 16 7 19"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        );
      case 'marketing':
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 15V5.5A1.5 1.5 0 0 1 7.4 4.4L17 8.5v7l-9.6 4.1A1.5 1.5 0 0 1 5 18.9V15Z"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M17 9.5c1.2.4 2 1.5 2 2.8 0 1.3-.8 2.4-2 2.8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
      case 'voiceover':
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect
              x="9"
              y="4"
              width="6"
              height="10"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M7 11a5 5 0 0 0 10 0M12 16v3M9 19h6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
      case 'development':
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              d="M5 19V9.5A2.5 2.5 0 0 1 7.5 7H16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M8 13l2.5 2.5L14 11l3 3 3-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect
              x="4"
              y="5"
              width="6"
              height="3"
              rx="1.2"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
          </svg>
        );
      case 'software':
      default:
        return (
          <svg className="service-icon-img" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="3"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
            />
            <path
              d="M9 10 7 12l2 2M15 10l2 2-2 2M12 9v6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
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

      <style jsx>{`
        .service-card {
          background: #ffffff;
          padding: 1.9rem 1.7rem 1.7rem;
          border-radius: 16px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          border: 1px solid rgba(15, 23, 42, 0.06);
          width: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 55px rgba(15, 23, 42, 0.12);
        }

        .service-card:active {
          transform: translateY(-1px);
        }
        
        .service-icon {
          width: 48px;
          height: 48px;
          border-radius: 18px;
          margin: 0 auto 0.85rem;
          display: grid;
          place-items: center;
          background: rgba(0, 27, 224, 0.06);
          border: 1px solid rgba(0, 27, 224, 0.14);
          color: var(--primary);
        }

        .service-icon-img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }
        
        .service-card h3 {
          color: #111111;
          margin-bottom: 0.45rem;
          font-size: 1.4rem;
          letter-spacing: -0.2px;
          text-align: center;
        }
        
        .service-card p {
          color: rgba(17, 17, 17, 0.78);
          margin-bottom: 1.4rem;
          flex-grow: 1;
          line-height: 1.7;
          font-size: 1rem;
        }
        
        .service-link {
          display: inline-block;
          color: var(--primary);
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition: color 0.2s ease;
          margin-top: auto;
          user-select: none;
        }
        
        .service-card:hover .service-link {
          color: var(--secondary);
        }
      `}</style>
    </>
  );
};

export default ServiceCard;
