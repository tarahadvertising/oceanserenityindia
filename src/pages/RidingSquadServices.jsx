/**
 * Ocean Infinity - Riding Squad Services Page
 *
 * Professional riding squad services for marine vessels including
 * technical support, maintenance, and emergency response teams
 */

import { Helmet } from "react-helmet-async";
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { Users, Wrench, Clock, ChevronRight, X } from "lucide-react";
import "../styles/pages/Services.css";

const RidingSquadServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const ridingSquadServicesData = [
    {
      id: 1,
      title: "Technical Riding Squad",
      icon: Wrench,
      image: "/knot and sail images/Asset 43.webp",
      shortDescription:
        "Expert technical riding squad providing on-board maintenance, repairs, and technical support for marine vessels.",
      fullDescription:
        "Our technical riding squad consists of highly skilled engineers and technicians who provide on-board maintenance and repair services for marine vessels. We specialize in engine maintenance, electrical systems, hydraulic repairs, and general technical support. Our team is available for both scheduled maintenance and emergency call-outs, ensuring minimal vessel downtime.",
      features: [
        "Engine maintenance and repairs",
        "Electrical system troubleshooting",
        "Hydraulic system services",
        "On-board technical support",
        "Emergency repair services",
      ],
      images: [
        "/knot and sail images/Asset 43.webp",
        "/knot and sail images/Asset 44.webp",
        "/knot and sail images/Asset 45.webp",
      ],
    },
    {
      id: 2,
      title: "Maintenance Riding Squad",
      icon: Clock,
      image: "/knot and sail images/Bh8OVy.webp",
      shortDescription:
        "Dedicated maintenance riding squad for planned maintenance, inspections, and vessel readiness operations.",
      fullDescription:
        "Our maintenance riding squad provides comprehensive planned maintenance services for marine vessels. We handle routine inspections, preventive maintenance, system checks, and vessel readiness operations. Our team follows manufacturer guidelines and class requirements to ensure optimal vessel performance and compliance with maritime standards.",
      features: [
        "Planned maintenance systems",
        "Preventive maintenance",
        "System inspections",
        "Vessel readiness checks",
        "Class survey support",
      ],
      images: [
        "/knot and sail images/Bh8OVy.webp",
        "/knot and sail images/F0F5Nv.webp",
        "/knot and sail images/cU5Gqw.webp",
      ],
    },
    {
      id: 3,
      title: "Emergency Response Team",
      icon: Users,
      image: "/knot and sail images/Asset 50.webp",
      shortDescription:
        "24/7 emergency response riding squad for urgent marine repairs, breakdown assistance, and critical support services.",
      fullDescription:
        "Our emergency response team provides 24/7 rapid response services for marine vessels experiencing breakdowns or urgent technical issues. We maintain strategically positioned teams ready to deploy at short notice for emergency repairs, troubleshooting, and critical support. Our emergency riding squad minimizes vessel downtime and ensures safe operations.",
      features: [
        "24/7 emergency response",
        "Rapid deployment team",
        "Breakdown assistance",
        "Critical troubleshooting",
        "Urgent repair services",
      ],
      images: [
        "/knot and sail images/Asset 50.webp",
        "/knot and sail images/Asset 51.webp",
        "/knot and sail images/Asset 59.webp",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Riding Squad Services | Ocean Infinity</title>
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
          content="Riding Squad Services | Ocean Infinity"
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
          content="Riding Squad Services | Ocean Infinity"
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
          description="At Ocean Infinity, we provide professional riding squad services for marine vessels with expert technical teams available for maintenance, repairs, and emergency response 24/7."
          backgroundImage="/knot and sail images/Asset 41.webp"
        />

        {/* Riding Squad Services Section */}
        <section className="services-section-professional">
          <div className="container">
            <div className="services-header">
              <h2 className="services-title">Professional Riding Squad Teams</h2>
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
                      href="https://wa.me/971123456789"
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
                    <a href="/contact" className="btn btn-primary">
                      Get Quote
                    </a>
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
