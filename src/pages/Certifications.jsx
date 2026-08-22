/**
 * Ocean Serenity Marine Pvt Ltd - Certifications Page
 *
 * Dedicated page for company certifications and compliance
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import "../styles/pages/Certifications.css";

const Certifications = () => {
  return (
    <>
      {/* Page Hero */}
      <PageHero
        title="Certifications & Compliance"
        subtitle="Internationally Recognized Standards"
        description="At Ocean Serenity Marine Pvt Ltd, we maintain internationally recognized certifications ensuring quality and compliance with global maritime standards, demonstrating our commitment to excellence and operational safety."
      />

      {/* Certifications Grid */}
      <section className="certifications-main">
        <div className="container">
          <div className="certifications-grid-modern">
            <div className="certification-item-modern">
              <div className="certification-badge-modern">
                <span className="certification-text-modern">ISO</span>
              </div>
              <div className="certification-content-modern">
                <h3 className="certification-name-modern">ISO 9001:2015</h3>
                <p className="certification-desc-modern">
                  Quality Management Systems certification ensuring consistent
                  quality and operational excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section
        className="certifications-cta-professional"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div>
          <div className="certifications-cta-content-professional">
            <h2 className="certifications-cta-title">
              Discover Our Commitment to Excellence
            </h2>
            <p className="certifications-cta-description">
              Our certifications reflect our dedication to quality, safety, and
              environmental responsibility. Learn more about how Ocean Serenity Marine Pvt Ltd
              maintains the highest standards in maritime services.
            </p>
            <Link to="/about" className="btn btn-primary-certifications">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
