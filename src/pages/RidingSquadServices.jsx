/**
 * Ocean Serenity Marine Pvt Ltd - Riding Squad Services Page
 *
 * Professional riding squad services for marine vessels including
 * technical support, maintenance, and emergency response teams
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { Users, Wrench, Clock, ChevronRight, X } from "lucide-react";
import "../styles/pages/Services.css";

const RidingSquadServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const ridingSquadServicesData = [
    {
      id: 1,
      title: "Riding Squad Services",
      icon: Wrench,
      image: "/infinity/69.webp",
      shortDescription:
        "We provide reliable Riding Squad Services globally, supporting vessels at sea and in port. Our skilled teams perform maintenance and repair works during voyages to reduce downtime, control costs, and maintain class and CAP standards.",
      fullDescription:
        "Our technical riding squad consists of highly skilled engineers and technicians who provide on-board maintenance and repair services for marine vessels. We specialize in engine maintenance, electrical systems, hydraulic repairs, and general technical support. Our team is available for both scheduled maintenance and emergency call-outs, ensuring minimal vessel downtime.",
      features: [
        "Ballast Tank Maintenance: Protection against corrosion through surface preparation and coating maintenance. This reduces steel renewal costs and helps maintain strong CAP ratings.",
        "Deck Maintenance: Rust removal, coating touch-ups, and structural preservation to protect exposed areas, maintain vessel appearance, and ensure crew safety.",
        "Accommodation Maintenance: Interior maintenance, corrosion control, and refurbishment to provide a clean, safe, and comfortable living environment for onboard personnel.",
        "Steel Repair Team: Class-certified welders and fabricators perform structural steel repairs, deck renewals, and outfitting works during voyage to maintain overall vessel integrity.",
        "Pipeline Cleaning: Internal cleaning and preservation to prevent corrosion, ensure smooth flow, and extend pipeline service life.",
        "HVAC, Insulation & Cladding: Inspection, repair, and refurbishment of HVAC systems and insulation to improve efficiency and onboard comfort.",
        "Cargo Hold Maintenance: Coating maintenance and product change washing using certified equipment to ensure cargo readiness and compliance.",
        "Helideck Maintenance: Maintenance in line with CAP 437 requirements, including friction control and proper markings for safe helicopter operations.",
        "Engine Service Team: Engine overhauling, troubleshooting, and preventive maintenance to ensure reliable performance and reduced breakdown risk",
      ],
      images: ["/infinity/69.webp", "/infinity/68.webp", "/infinity/70.webp"],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Riding Squad Services | Ocean Serenity Marine Pvt Ltd</title>
        <meta
          name="description"
          content="Professional riding squad services for marine vessels including technical support, maintenance, and emergency response teams."
        />
        <meta
          name="keywords"
          content="riding squad services, marine technical support, vessel maintenance, emergency response, marine engineers"
        />
        <meta
          property="og:title"
          content="Riding Squad Services | Ocean Serenity Marine Pvt Ltd"
        />
        <meta
          property="og:description"
          content="Expert riding squad services for marine vessels with 24/7 technical support and emergency response."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://oceaninfinity.vercel.app/services/riding-squad-services"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Riding Squad Services | Ocean Serenity Marine Pvt Ltd"
        />
        <meta
          name="twitter:description"
          content="Professional riding squad services for marine vessels with expert technical support."
        />
      </Helmet>

      <div className="services-page">
        {/* Page Hero */}
        <PageHero
          title="Riding Squad Services"
          subtitle="Expert On-Board Marine Support"
          description="At Ocean Serenity Marine Pvt Ltd, we provide professional riding squad services for marine vessels with expert technical teams available for maintenance, repairs, and emergency response 24/7."
        />

        {/* Riding Squad Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">
                Professional Riding Squad Teams
              </h2>
              <p className="services-subtitle">
                Expert on-board support for marine vessels worldwide
              </p>
            </div>

            <div className="template-card-grid">
              {ridingSquadServicesData.map((service) => (
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

export default RidingSquadServices;
