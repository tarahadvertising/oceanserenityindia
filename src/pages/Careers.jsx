/**
 * Ocean Serenity Marine Pvt Ltd - Careers Page
 *
 * Career opportunities in marine technology and offshore operations
 */

import React from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import "../styles/pages/Careers.css";
const Careers = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers - Ocean Serenity Marine Pvt Ltd",
    description:
      "Join our team at Ocean Serenity Marine Pvt Ltd. Explore career opportunities in marine technology and offshore operations.",
    url: "https://oceaninfinitymarine.com/careers",
    mainEntity: {
      "@type": "Organization",
      name: "Ocean Serenity Marine Pvt Ltd",
      url: "https://oceaninfinitymarine.com",
      logo: "https://oceaninfinitymarine.com/logo.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ocean Serenity Marine Pvt Ltd",
        addressLocality: "India",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+971 52 775 6765",
        contactType: "careers",
        email: "careers@oceanserenitygroup.com",
      },
    },
  };

  return (
    <>
      <SEO
        title="Careers - Join Our Team | Ocean Serenity Marine Pvt Ltd"
        description="Explore career opportunities at Ocean Serenity Marine Pvt Ltd. Join our team of marine technology experts in India. Technical, operations, and administrative positions available."
        keywords="marine technology careers, india marine jobs, marine technician jobs, offshore operations jobs, marine engineering careers, Ocean Serenity Marine Pvt Ltd careers, marine industry jobs India"
        canonicalUrl="https://oceaninfinitymarine.com/careers"
        structuredData={structuredData}
      />
      {/* Page Hero */}
      <PageHero
        title="Join Our Team"
        subtitle="Build Your Career in Marine Technology"
        badge="Career Opportunities"
      />
      {/* Careers Introduction */}
      <section className="careers-intro" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="careers-intro-content">
            <h2>Shape the Future of Marine Technology</h2>
            <p>
              At Ocean Serenity Marine Pvt Ltd, we're always looking for talented individuals
              who share our passion for excellence in the marine industry. We
              offer exciting career opportunities for professionals who want to
              make a difference in global marine equipment supply and services.
            </p>
            <p>
              Join our dynamic team in India and contribute to delivering
              high-quality marine solutions and services to customers worldwide.
              We believe in nurturing talent, fostering growth, and providing a
              supportive work environment.
            </p>
          </div>
          <div className="careers-intro-image">
            <img
              src="/career.webp"
              alt="Professional Marine Technology Team"
              className="careers-intro-img"
            />
          </div>
        </div>
      </section>
      {/* Career Benefits */}
      <section
        className="careers-benefits"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="container">
          <h2 className="section-title">Why Choose a Career With Us</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-image">
                <img
                  src="/why1.webp"
                  alt="Professional Career Growth"
                  className="benefit-img"
                />
              </div>
              <div className="benefit-content">
                <h3>Professional Growth</h3>
                <p>
                  Continuous learning opportunities and career advancement in
                  the marine industry.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-image">
                <img
                  src="/why2.webp"
                  alt="Global Career Opportunities"
                  className="benefit-img"
                />
              </div>
              <div className="benefit-content">
                <h3>Global Impact</h3>
                <p>
                  Work on international projects that shape the future of marine
                  technology worldwide.
                </p>
              </div>
            </div>
            <div className="benefit-item">
              <div className="benefit-image">
                <img
                  src="/why3.webp"
                  alt="Innovation Workplace Culture"
                  className="benefit-img"
                />
              </div>
              <div className="benefit-content">
                <h3>Innovation Culture</h3>
                <p>
                  Be part of a team that values creativity, innovation, and
                  cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* Contact Section */}
      <section
        className="careers-contact-section"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="std-container">
          <div className="std-content-centered">
            <h2 className="std-title">Ready to Join Our Team?</h2>
            <p className="std-subtitle">
              If you don't see a suitable position but believe you would be a
              great addition to our team, we'd love to hear from you. Send us
              your resume and a brief introduction about yourself.
            </p>

            <div className="careers-contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:careers@oceanserenitygroup.com">
                  careers@oceanserenitygroup.com
                </a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+971527756765">+971 52 775 6765</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                Ocean Serenity Marine Pvt Ltd, India
              </div>
            </div>
            <div className="careers-cta-buttons">
              <a
                href="mailto:careers@oceanserenitygroup.com?subject=Career Inquiry - Ocean Serenity Marine Pvt Ltd&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in exploring career opportunities at Ocean Serenity Marine Pvt Ltd.%0D%0A%0D%0APlease find my resume attached for your consideration.%0D%0A%0D%0AThank you for your time and consideration.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]%0D%0A[Your Phone Number]%0D%0A[Your Current Position/Experience]"
                className="std-btn std-btn-primary"
              >
                Send Your Resume
              </a>
              <a
                href="https://www.linkedin.com/company/ocean-serenity-group/jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="std-btn std-btn-secondary"
              >
                View LinkedIn Jobs
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Careers;
