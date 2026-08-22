/**
 * Ocean Serenity Marine Pvt Ltd - Home Page
 *
 * Comprehensive home page with multiple sections
 * Technology: React functional component with JSX
 */

import Hero from "../components/Hero.jsx";
import { Link } from "react-router-dom";
import {
  Droplets,
  Palette,
  Wrench,
  Zap,
  Wind,
  Cpu,
  Settings,
  Package,
} from "lucide-react";
import "../styles/pages/Home.css";
import whobg1 from "../assets/whobg1.png";
import { useState, useEffect } from "react";

const Home = () => {
  // Auto-sliding carousel state
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    {
      src: "/who1.webp",
      alt: "Ocean Serenity Marine Pvt Ltd - Advanced Marine Technology",
    },
    {
      src: "/who2.webp",
      alt: "Ocean Serenity Marine Pvt Ltd - Global Marine Operations",
    },
    {
      src: "/who3.webp",
      alt: "Ocean Serenity Marine Pvt Ltd - Marine Safety Solutions",
    },
    {
      src: "/who4.webp",
      alt: "Ocean Serenity Marine Pvt Ltd - Ship Repair Services",
    },
  ];
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);
  return (
    <div className="home-page">
      <Hero />

      {/* Who We Are Section */}
      <section
        className="who-we-are-section"
        id="who-we-are"
        style={{
          backgroundImage: `url(${whobg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <div className="who-we-are-content">
            <div className="who-we-are-header">
              <h2 className="who-we-are-title">Who We Are</h2>
              <div className="ocean-group-text">
                <span className="group-line"></span>
                <span className="ocean-group-text-birds">
                  Part of Ocean Serenity Group
                </span>
                <span className="group-line"></span>
              </div>
            </div>

            <div className="who-we-are-main">
              <div className="who-we-are-carousel">
                <div className="carousel-container">
                  <div className="carousel-slides">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="carousel-image"
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="who-we-are-text">
                <p className="who-we-are-paragraph">
                  Ocean Serenity Marine Pvt Ltd delivers advanced ship repair, maintenance, and
                  marine safety solutions to support the performance and
                  longevity of vessels operating in demanding environments.
                </p>
                <p className="who-we-are-paragraph">
                  Built on strong technical expertise and hands-on industry
                  experience, we provide end-to-end services from repair and
                  conversion to safety compliance and onboard system support.
                  Every project is executed with precision, minimizing downtime
                  while maximizing operational efficiency.
                </p>
                <p className="who-we-are-paragraph">
                  Our commitment goes beyond repair. We ensure that every vessel
                  meets the highest standards of safety, reliability, and
                  regulatory compliance, safeguarding both crew and assets.
                </p>
                <div className="who-we-are-buttons">
                  <a href="#services" className="who-we-are-btn explore-btn">
                    Explore our services
                  </a>
                  <Link to="/contact" className="who-we-are-btn quote-btn">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Services Section - Modern Design */}
      <section
        className="services-section-modern"
        id="services"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="services-header-modern">
            <h2 className="services-title-modern">Our Services</h2>
            <p className="services-subtitle-modern">
              Comprehensive marine solutions and technical services for the
              maritime industry
            </p>
          </div>
          <div className="services-grid-modern">
            {/* Row 1 */}
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Wrench size={28} />
              </div>
              <h3 className="service-title-modern">Fabrication</h3>
              <p className="service-description-modern">
                We undertake all repairs of Hull and inside tanks and
                Fabrication/ installation of outfitting structures with
                precision and quality.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Settings size={28} />
              </div>
              <h3 className="service-title-modern">Mechanical</h3>
              <p className="service-description-modern">
                With dedicated skilled Technicians stationed across India, we
                provide comprehensive mechanical solutions.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Zap size={28} />
              </div>
              <h3 className="service-title-modern">Electrical</h3>
              <p className="service-description-modern">
                Ocean Serenity Marine Pvt Ltd provides electrical on-board equipment services
                as a component of the turnkey services package for the maritime
                industry.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>

            {/* Row 2 */}
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Palette size={28} />
              </div>
              <h3 className="service-title-modern">Blasting & Painting</h3>
              <p className="service-description-modern">
                We Provide hydro blasting and painting services for Ocean Going
                to Offshore Support Services with quality assurance.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Droplets size={28} />
              </div>
              <h3 className="service-title-modern">Tank Cleaning</h3>
              <p className="service-description-modern">
                We offer tank cleaning services for offshore/onshore and
                industrial sectors with safety and environmental compliance.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Wind size={28} />
              </div>
              <h3 className="service-title-modern">HVAC & Refrigeration</h3>
              <p className="service-description-modern">
                We have a strong in-house team with qualified technicians
                carrying out HVAC jobs for Vessels of all sizes.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>

            {/* Row 3 */}
            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Droplets size={28} />
              </div>
              <h3 className="service-title-modern">Hydraulic Services</h3>
              <p className="service-description-modern">
                Our team of Engineers and Hydraulic Technicians work with
                clients offering various solutions for Hydraulic systems.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>

            <div className="service-card-modern">
              <div className="service-icon-modern">
                <Cpu size={28} />
              </div>
              <h3 className="service-title-modern">Automation</h3>
              <p className="service-description-modern">
                Our Automation division provides solutions for comprehensive
                repair and maintenance of marine automation systems.
              </p>
              <Link
                to="/services/technical-services"
                className="service-link-modern"
              >
                Learn More <span className="arrow">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Valued Clients - Modern Design */}
      <section
        className="valued-clients-modern"
        id="client-logos"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="valued-clients-header-modern">
            <h2 className="valued-clients-title-modern">Our Valued Clients</h2>
            <p className="valued-clients-subtitle-modern">
              Trusted by leading maritime companies across the globe
            </p>
          </div>

          <div className="client-logos-slider-modern">
            <div className="client-logos-track-modern">
              {/* Generate only first 12 client logos for initial load, rest will load via intersection observer */}
              {Array.from({ length: 12 }, (_, i) => i + 2)
                .filter((num) => num !== 1)
                .map((num) => (
                  <div key={num} className="client-logo-item-modern">
                    <img
                      src={`/Client%20Logo/Asset%20${num}.webp`}
                      alt={`Client Logo ${num}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              {/* Add the special logo */}
              <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                  loading="lazy"
                />
              </div>
              {/* Duplicate set for seamless loop */}
              {Array.from({ length: 12 }, (_, i) => i + 2)
                .filter((num) => num !== 1)
                .map((num) => (
                  <div
                    key={`duplicate-${num}`}
                    className="client-logo-item-modern"
                  >
                    <img
                      src={`/Client%20Logo/Asset%20${num}.webp`}
                      alt={`Client Logo ${num}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              {/* Duplicate the special logo */}
              <div className="client-logo-item-modern">
                <img
                  src="/Client%20Logo/TovXkH.webp"
                  alt="Client Logo Special"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
