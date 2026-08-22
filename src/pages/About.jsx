/**
 * Knot & Sail - About Us Page (Single Page)
 *
 * Comprehensive About Us page with all sections
 * No sub-pages - single scrollable page design
 * ASP PDF Design System: Deep Ocean Blue Maritime Corporate
 */

import {
  Anchor,
  Ship,
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  CheckCircle,
  Shield,
  Building2,
  Settings,
  Wrench,
  MessageSquare,
  Package,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pages/About.css";
import "../styles/pages/Home.css";
import whobg1 from "../assets/whobg1.png";

const About = () => {
  // Auto-sliding carousel state for Who We Are section
  const [whoWeAreSlide, setWhoWeAreSlide] = useState(0);
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

  // Auto-slide effect for Who We Are carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setWhoWeAreSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);
  // Card images for the carousel
  const cardImages = [
    { id: 1, src: "/1.webp", title: "Ocean Serenity Marine Pvt Ltd Excellence" },
    { id: 2, src: "/map.jpeg", title: "Global Maritime Operations" },
    { id: 3, src: "/quality.jpg", title: "Ocean Technology Solutions" },
    { id: 4, src: "/safety.webp", title: "Ocean Safety Standards" },
    { id: 5, src: "/5.webp", title: "Advanced Ocean Technology" },
    { id: 6, src: "/products/deck/1.webp", title: "Ocean Services" },
    {
      id: 7,
      src: "/products/enginestores/1.webp",
      title: "Ocean Technical Support",
    },
    { id: 8, src: "/products/lsa&ffa/1.webp", title: "Ocean Safety Equipment" },
  ];
  // Hero slider data - 3 slides with titles and subtitles
  const heroSlides = [
    {
      id: 1,
      image: "/about1.webp",
      title: "Ocean Serenity Marine Pvt Ltd",
      subtitle:
        "Leading the future of maritime operations with advanced technology and unmatched expertise",
    },
    {
      id: 2,
      image: "/who1.webp",
      title: "Global Marine Solutions",
      subtitle:
        "Delivering comprehensive marine services across international waters with precision and reliability",
    },
    {
      id: 3,
      image: "/about3.webp",
      title: "Innovation in Ocean Technology",
      subtitle:
        "Pioneering sustainable maritime solutions for the future of ocean operations",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const [activeCard, setActiveCard] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate cards every 3 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, cardImages.length]);

  const handleCardClick = () => {
    setActiveCard((prev) => (prev + 1) % cardImages.length);
  };
  return (
    <div className="about-page">
      {/* Hero Section with 3-Image Slider */}
      <section className="about-hero-slider">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 1 : 0,
            }}
          >
            <div className="hero-slide-overlay"></div>
            <div className="hero-slide-content">
              <h1 className="hero-slide-title">{slide.title}</h1>
              <p className="hero-slide-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        ))}

        {/* Slider Navigation Arrows */}
        <button
          className="slider-arrow slider-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="slider-arrow slider-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Slider Indicators */}
        <div className="slider-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

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
              <div className="who-we-are-text">
                <p className="who-we-are-paragraph">
                  Ocean Serenity Marine Pvt Ltd is a trusted provider of integrated marine
                  repair, maintenance, and safety solutions, delivering
                  high-quality services to shipowners, offshore operators, and
                  maritime industries worldwide.
                </p>
                <p className="who-we-are-paragraph">
                  With deep-rooted expertise in ship repair, conversion, and
                  technical services, we specialize in executing projects with
                  precision, efficiency, and strict adherence to international
                  marine standards.
                </p>
                <p className="who-we-are-paragraph">
                  Our capabilities include:
                </p>
                <ul className="who-we-are-capabilities">
                  <li>Ship repair and conversion services</li>
                  <li>
                    Marine safety equipment supply, inspection, and
                    certification
                  </li>
                  <li>Technical manpower and project support</li>
                  <li>Offshore and port-based maintenance solutions</li>
                </ul>
                <p className="who-we-are-paragraph">
                  Safety is at the core of everything we do. From onboard safety
                  systems to compliance and inspection services, we are
                  committed to protecting lives, assets, and the marine
                  environment.
                </p>
              </div>
              <div className="who-we-are-carousel">
                <div className="carousel-container">
                  <div className="carousel-slides">
                    {carouselImages.map((image, index) => (
                      <div
                        key={index}
                        className={`carousel-slide ${index === whoWeAreSlide ? "active" : ""}`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="carousel-image"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="who-we-are-additional-content">
                  <p className="who-we-are-paragraph">
                    Driven by innovation and operational excellence, we aim to
                    be a dependable partner for marine and industrial clients
                    delivering solutions that minimize downtime, optimize
                    performance, and enhance safety at sea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision - Modern Design */}
      <section
        className="mission-vision-modern"
        id="mission-vision"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="container">
          <div className="mission-vision-header-modern">
            <h2 className="mission-vision-title-modern">Mission & Vision</h2>
            <p className="mission-vision-subtitle-modern">
              Our guiding principles and future aspirations
            </p>
          </div>
          <div className="template-card-grid">
            <div className="template-card">
              <div className="template-card-icon">
                <Target size={24} />
              </div>
              <h3 className="template-card-title">Our Mission</h3>
              <div className="template-card-content">
                <p>
                  To deliver reliable, high-quality marine repair and safety
                  solutions that ensure operational efficiency, vessel
                  integrity, and crew safety. We are committed to providing
                  timely, cost-effective services through skilled manpower,
                  advanced technology, and strict adherence to international
                  maritime standards.
                </p>
              </div>
            </div>
            <div className="template-card">
              <div className="template-card-icon">
                <Eye size={24} />
              </div>
              <h3 className="template-card-title">Our Vision</h3>
              <div className="template-card-content">
                <p>
                  To become a leading and trusted marine service provider in the
                  region, recognized for excellence in repair, safety, and
                  technical support—setting benchmarks in quality, innovation,
                  and customer satisfaction across the global maritime industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
