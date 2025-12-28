'use client';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Video & Photography',
    'Graphic Design',
    'Marketing',
    'Video Editing',
    'Voiceover',
    'Business Development',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: 'khartouminterfilm@gmail.com',
      color: 'var(--primary)'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: '0795429785',
      color: 'var(--secondary)'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      details: 'Khartoum, Sudan',
      color: '#FF6B6B'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: '9:00AM - 5:00PM',
      color: '#4ECDC4'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-icon">📞</span>
              <span className="badge-text">Let's Connect</span>
            </div>
            <h1 className="hero-title">
              Let's Create Something
              <span className="hero-highlight"> Amazing</span>
              <span className="hero-sparkle">✨</span>
            </h1>
            <p className="hero-description">
              Ready to bring your vision to life? Get in touch with our team of creative experts.
              We're here to help you create impactful marketing solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="card-icon" style={{ background: info.color }}>
                  {info.icon}
                </div>
                <h3 className="card-title">{info.title}</h3>
                <p className="card-detail">{info.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project, goals, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="button-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Social */}
            <div className="contact-sidebar">
              <div className="social-section">
                <h3>Follow Our Journey</h3>
                <p>Stay updated with our latest projects and creative work</p>
                <div className="social-links">
                  <a
                    href="https://www.facebook.com/share/17ioDH89xR/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <span className="social-icon">📘</span>
                    <span className="social-name">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/khartoum1230?igsh=MXJ6eDRvcDlrbGdl&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <span className="social-icon">📸</span>
                    <span className="social-name">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@khartouminterfilm?_r=1&_t=ZM-91YdJa3dgqJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link tiktok"
                  >
                    <span className="social-icon">🎵</span>
                    <span className="social-name">TikTok</span>
                  </a>
                </div>
              </div>

              <div className="faq-section">
                <h3>Quick Questions</h3>
                <div className="faq-list">
                  <div className="faq-item">
                    <h4>How soon can you start a project?</h4>
                    <p>We typically begin within 1-3 business days after project approval.</p>
                  </div>
                  <div className="faq-item">
                    <h4>Do you offer revisions?</h4>
                    <p>Yes! We include 2 rounds of revisions in all our packages.</p>
                  </div>
                  <div className="faq-item">
                    <h4>What's your pricing model?</h4>
                    <p>We offer both project-based and hourly rates, depending on your needs.</p>
                  </div>
                </div>
              </div>

              <div className="cta-card">
                <div className="cta-icon">🚀</div>
                <h3>Ready to Elevate Your Brand?</h3>
                <p>Schedule a free 30-minute consultation with our creative director</p>
                <button className="cta-button">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Hero Section */
        .contact-hero {
          background: linear-gradient(135deg, rgba(0, 27, 224, 0.05) 0%, rgba(0, 180, 255, 0.05) 100%);
          padding: 150px 0 80px;
          text-align: center;
          margin-top: 70px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          padding: 8px 16px;
          border-radius: 50px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(0, 27, 224, 0.1);
          border: 1px solid rgba(0, 27, 224, 0.1);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .badge-text {
          font-weight: 600;
          color: var(--primary);
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: var(--dark);
        }

        .hero-highlight {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sparkle {
          display: inline-block;
          margin-left: 10px;
          animation: sparkle 2s infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--gray);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* Contact Info Cards */
        .contact-info-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .contact-info-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(0, 27, 224, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 180, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .contact-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 27, 224, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 27, 224, 0.15);
          border-color: rgba(0, 27, 224, 0.2);
        }

        .contact-card:hover::before {
          opacity: 1;
        }

        .card-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
          color: white;
          font-size: 2rem;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .card-icon::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .contact-card:hover .card-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
        }

        .contact-card:hover .card-icon::after {
          opacity: 1;
        }

        .card-title {
          font-size: 1.4rem;
          color: var(--dark);
          margin-bottom: 1rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .card-detail {
          color: var(--gray);
          font-size: 1.1rem;
          font-weight: 500;
          line-height: 1.6;
          margin: 0;
        }

        /* Add stagger animation for cards */
        .contact-card:nth-child(1) { animation-delay: 0.1s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.3s; }
        .contact-card:nth-child(4) { animation-delay: 0.4s; }

        /* Main Contact Section */
        .contact-main {
          padding: 80px 0;
          background: #f8fafc;
        }

        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-form-container {
          background: white;
          padding: 3rem;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
        }

        .form-header {
          margin-bottom: 2.5rem;
        }

        .form-header h2 {
          font-size: 2rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .form-header p {
          color: var(--gray);
          font-size: 1.1rem;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--dark);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(0, 27, 224, 0.1);
        }

        .submit-button {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          margin-top: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 27, 224, 0.3);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .button-icon {
          font-size: 1.2rem;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .success-message {
          text-align: center;
          padding: 3rem;
        }

        .success-icon {
          font-size: 4rem;
          color: #10B981;
          margin-bottom: 1.5rem;
        }

        .success-message h3 {
          font-size: 1.75rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .success-message p {
          color: var(--gray);
          font-size: 1.1rem;
        }

        /* Sidebar Styles */
        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .social-section,
        .faq-section,
        .cta-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        .social-section h3,
        .faq-section h3 {
          font-size: 1.5rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .social-section p {
          color: var(--gray);
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .social-link.facebook {
          background: rgba(59, 89, 152, 0.1);
          color: #3B5998;
        }

        .social-link.instagram {
          background: rgba(225, 48, 108, 0.1);
          color: #E1306C;
        }

        .social-link.tiktok {
          background: rgba(0, 0, 0, 0.1);
          color: #000000;
        }

        .social-link:hover {
          transform: translateY(-2px);
          border-color: currentColor;
        }

        .social-icon {
          font-size: 1.5rem;
        }

        .social-name {
          font-weight: 600;
          font-size: 1.1rem;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-item h4 {
          font-size: 1.1rem;
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .faq-item p {
          color: var(--gray);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          text-align: center;
        }

        .cta-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .cta-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .cta-card p {
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .cta-button {
          background: white;
          color: var(--primary);
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .contact-form-container,
          .social-section,
          .faq-section,
          .cta-card {
            padding: 2rem;
          }

          .contact-hero {
            padding: 120px 0 60px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .contact-cards-grid {
            grid-template-columns: 1fr;
          }

          .contact-form-container {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
