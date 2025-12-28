'use client';

import { useLanguage } from '../../components/LanguageContext';
import { Metadata } from 'next';

interface CompanyValue {
  title: string;
  description: string;
  icon: string;
}

export default function About() {
  const { language } = useLanguage();
  const values: CompanyValue[] = [
    {
      title: "Distinction",
      description: "We focus on delivering marketing solutions that help our clients stand out in competitive markets. We don't just offer services—we create impactful experiences that leave a lasting impression on audiences.",
      icon: "⭐"
    },
    {
      title: "Strength",
      description: "We assist clients in building strong visual identities that reflect their vision and enhance their brand presence. We believe a robust visual identity is the cornerstone of any successful business.",
      icon: "💪"
    },
    {
      title: "Increase Sales",
      description: "We provide effective marketing strategies that help clients reach their target audience and achieve measurable increases in sales. Understanding market needs is key to delivering outstanding results.",
      icon: "📈"
    },
    {
      title: "Smoothness",
      description: "We ensure a seamless and satisfying client experience from start to finish. Clear communication, timely delivery, and exceptional customer service are always our priorities.",
      icon: "⚡"
    },
    {
      title: "Dedicated Services",
      description: "We offer customized services tailored to each client's unique requirements, whether they are small businesses or large corporations. Every client deserves innovative solutions designed specifically for them.",
      icon: "🎯"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{language === 'ar' ? 'عن الخرطوم إنتر فيلم' : 'About Khartoum Inter Film'}</h1>
        </div>
      </section>

      {/* About Content Section */}
      <section className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                We are Khartoum Interfilm Group, a leading company specializing in advertising content production 
                (videos, posters, and all types of visual marketing). Established in 2013, we have been dedicated 
                to providing creative and high-quality visual solutions tailored to the needs of our diverse clients.
              </p>
              
              <h3>Our History and Experience</h3>
              <p>
                Since our inception, we have collaborated with numerous prominent clients in Sudan and beyond,
                solidifying our reputation as one of the top companies in this field. Among these partnerships,
                we have produced exceptional content for major brands such as MTN Telecommunications, Nile Bank,
                Coldair Refrigeration & Air Conditioning, and many food companies.
              </p>

              <h3>International Presence</h3>
              <p>
                In expanding our international presence, we contributed to the visual events of the Sudanese
                Independence Day Celebration held at the Sudanese Embassy in Rwanda. Our services in videography
                and production added significant value to the event, showcasing Sudan's rich cultural heritage
                with professionalism and excellence.
              </p>

              <h3>Our Mission & Identity</h3>
              <p>
                At Khartoum Interfilm, we believe that visual power and creativity are the foundation of business success.
                That's why we strive to provide exceptional services that help our clients achieve their goals and build
                their brands in ways that reflect their vision and aspirations. Whether you're a small startup or a large
                corporation, we are here to be your trusted partner in media production and visual marketing.
              </p>
              <p>
                We don't just offer services—we build long-term partnerships based on trust and quality.
                Khartoum Interfilm: Where creativity meets professionalism, and ideas become reality!
              </p>
            </div>
          </div>
        </div>

        {/* Service Packages Section */}
        <section className="packages-section">
          <div className="container">
            <div className="section-title">
              <h2>Service Packages</h2>
              <p>Comprehensive marketing solutions tailored to your business needs</p>
            </div>

            <div className="packages-grid">
              <div className="package-card">
                <div className="package-header">
                  <h3>6-Month Package</h3>
                  <div className="package-price">Strategic Growth</div>
                </div>
                <div className="package-content">
                  <ul>
                    <li>Marketing plan [data collection - analysis - plan development - plan implementation]</li>
                    <li>Digital Marketing [Documentary Content - Videos - Visual Designs]</li>
                    <li>A targeted plan to increase sales</li>
                    <li>A targeted plan to build the brand and increase awareness</li>
                  </ul>
                </div>
              </div>

              <div className="package-card featured">
                <div className="package-header">
                  <h3>9-Month Package</h3>
                  <div className="package-price">Comprehensive Excellence</div>
                </div>
                <div className="package-content">
                  <ul>
                    <li>Marketing plan [data collection - analysis - plan development - plan implementation]</li>
                    <li>Digital Marketing [Documentary Content - Videos - Visual Designs]</li>
                    <li>A targeted plan to increase sales</li>
                    <li>Train and empower the entire working staff</li>
                    <li>A targeted plan to build the brand and increase awareness</li>
                    <li>Creating effective partnerships with relevant parties</li>
                    <li>Targeting the regional and international market</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>

      </section>

      {/* Values Section */}
      <section className="section" style={{background: '#f8f9fa'}}>
        <div className="container">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide our work and relationships</p>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
}
