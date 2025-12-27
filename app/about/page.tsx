'use client';

import Header from '../../components/Header';
import { useLanguage } from '../../components/LanguageContext';

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
      <Header />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>{language === 'ar' ? 'عن الخرطوم إنتر فيلم' : 'About Khartoum Inter Film'}</h1>
        </div>
        
        <style jsx>{`
          .about-hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
            color: white;
            padding: 150px 0 100px;
            text-align: center;
            margin-top: 70px;
          }
          
          .about-hero h1 {
            font-size: 3rem;
            font-weight: 700;
          }
        `}</style>
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

          <style jsx>{`
            .packages-section {
              background: linear-gradient(180deg, #f8faff 0%, #ffffff 100%);
              padding: 80px 0;
            }

            .packages-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
              gap: 2rem;
              margin-top: 3rem;
            }

            .package-card {
              background: white;
              border: 1px solid rgba(0, 27, 224, 0.08);
              border-radius: 16px;
              padding: 2rem;
              box-shadow: 0 12px 40px rgba(0,0,0,0.05);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .package-card:hover {
              transform: translateY(-5px);
              box-shadow: 0 20px 60px rgba(0,0,0,0.1);
            }

            .package-card.featured {
              border: 2px solid var(--primary);
              position: relative;
            }

            .package-card.featured::before {
              content: 'Most Popular';
              position: absolute;
              top: -12px;
              left: 50%;
              transform: translateX(-50%);
              background: var(--primary);
              color: white;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 0.9rem;
              font-weight: 600;
              letter-spacing: 0.5px;
            }

            .package-header {
              text-align: center;
              margin-bottom: 1.5rem;
            }

            .package-header h3 {
              font-size: 1.8rem;
              color: var(--primary);
              margin-bottom: 0.5rem;
            }

            .package-price {
              color: var(--secondary);
              font-weight: 600;
              font-size: 1.1rem;
            }

            .package-content ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .package-content li {
              padding: 0.75rem 0;
              border-bottom: 1px solid rgba(0,0,0,0.06);
              color: var(--gray);
              line-height: 1.6;
              position: relative;
              padding-left: 1.5rem;
            }

            .package-content li::before {
              content: '✓';
              position: absolute;
              left: 0;
              color: var(--primary);
              font-weight: bold;
            }

            .package-content li:last-child {
              border-bottom: none;
            }
          `}</style>
        </section>

        <style jsx>{`
          .about-content {
            max-width: 800px;
            margin: 0 auto;
          }

          .about-text h2 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            font-size: 2.5rem;
          }

          .about-text h3 {
            color: var(--secondary);
            margin: 2rem 0 1rem;
            font-size: 1.8rem;
          }

          .about-text p {
            font-size: 1.1rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
            color: var(--dark);
          }
        `}</style>
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
        
        <style jsx>{`
          .section {
            padding: 80px 0;
          }
          
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .section-title {
            text-align: center;
            margin-bottom: 50px;
          }
          
          .section-title h2 {
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 15px;
          }
          
          .section-title p {
            color: var(--gray);
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
          }
          
          .value-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.3s ease;
          }
          
          .value-card:hover {
            transform: translateY(-5px);
          }
          
          .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          
          .value-card h3 {
            color: var(--primary);
            margin-bottom: 1rem;
            font-size: 1.5rem;
          }
          
          .value-card p {
            color: var(--gray);
            line-height: 1.6;
          }
        `}</style>
      </section>
    </>
  );
}
