/**
 * Ocean Serenity Marine Pvt Ltd - Overseas Subcontracting Services Page
 *
 * Comprehensive overseas subcontracting services for marine projects
 * including project management, technical support, and coordination
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { Globe, Users, Wrench, ChevronRight, X } from "lucide-react";
import "../styles/pages/Services.css";

const OverseasSubcontracting = () => {
  const [selectedService, setSelectedService] = useState(null);

  const subcontractingServicesData = [
    {
      id: 1,
      title: "Global Marine Repair Solutions",
      icon: Users,
      image: "/infinity/63.webp",
      shortDescription:
        "We deliver comprehensive ship repair and maintenance services across major international ports, ensuring fast response, technical excellence, and minimal vessel downtime.",
      fullDescription:
        "We provide end-to-end project management services for overseas marine subcontracting projects. Our experienced team handles project planning, resource allocation, timeline management, and quality control to ensure successful project delivery. We coordinate with local partners and manage all aspects of subcontracting operations to meet international standards.",
      features: [
        "Voyage & Emergency Repairs",
        "Mechanical & Engine Repairs",
        "Steel & Structural Repairs",
        "Hydraulic & Deck Machinery Repairs",
        "Electrical & Automation Works",
        "Marine Refrigeration & HVAC",
        "Marine Safety Services",
        "Spare Parts Supply & Logistics",
        "Riding Squad & Project Support",
      ],
      images: ["/infinity/64.webp", "/infinity/65.webp", "/infinity/66.webp"],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Overseas Subcontracting Services | Ocean Serenity Marine Pvt Ltd</title>
        <meta
          name="description"
          content="Professional overseas subcontracting services for marine projects with comprehensive project management and technical support."
        />
        <meta
          name="keywords"
          content="overseas subcontracting, marine projects, project management, technical support, international marine services"
        />
        <meta
          property="og:title"
          content="Overseas Subcontracting Services | Ocean Serenity Marine Pvt Ltd"
        />
        <meta
          property="og:description"
          content="Comprehensive overseas subcontracting services for marine projects with expert management and technical support."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oceaninfinity.vercel.app/services/overseas-subcontracting"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Overseas Subcontracting Services | Ocean Serenity Marine Pvt Ltd"
        />
        <meta
          name="twitter:description"
          content="Professional overseas subcontracting services for marine projects with comprehensive project management."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Overseas Subcontracting Services"
          subtitle="Global Marine Project Solutions"
          description="At Ocean Serenity Marine Pvt Ltd, we provide comprehensive overseas subcontracting services for marine projects with expert project management, technical support, and international coordination to ensure successful project delivery."
        />

        {/* Subcontracting Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">
                Global Subcontracting Solutions
              </h2>
              <p className="services-subtitle">
                Expert management and technical support for international marine
                projects
              </p>
            </div>

            <div className="template-card-grid">
              {subcontractingServicesData.map((service) => (
                <div key={service.id} className="service-card-template">
                  <div className="service-card-image-container">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="service-card-image"
                    />
                  </div>
                  <h3 className="service-card-title-large">{service.title}</h3>
                  <div className="template-card-content">
                    <p>{service.shortDescription}</p>
                  </div>
                  <button
                    className="service-card-see-more"
                    onClick={() => setSelectedService(service)}
                  >
                    Learn More
                    <ChevronRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Detail Modal */}
        {selectedService && (
          <div
            className="service-detail-modal-overlay"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="service-detail-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="service-detail-header">
                <div className="service-detail-icon">
                  <selectedService.icon size={32} />
                </div>
                <h2 className="service-detail-title">
                  {selectedService.title}
                </h2>
                <button
                  className="service-detail-close"
                  onClick={() => setSelectedService(null)}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="service-detail-content">
                <div className="service-detail-images">
                  {selectedService.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedService.title} ${index + 1}`}
                      className="service-detail-image"
                    />
                  ))}
                </div>

                <div className="service-detail-info">
                  <p className="service-detail-description">
                    {selectedService.fullDescription}
                  </p>

                  <div className="service-detail-features">
                    <h4>Key Features</h4>
                    <ul>
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-detail-actions">
                    <a
                      href="https://wa.me/+971527756765"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      WhatsApp
                    </a>
                    <Link to="/contact" className="btn btn-primary">
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OverseasSubcontracting;
