/**
 * Ocean Serenity Marine Pvt Ltd - Blog Page
 *
 * Industry insights, marine technology updates, and company news
 */

import React from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import "../styles/pages/Blog.css";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Ocean Serenity Marine Pvt Ltd Blog",
    description:
      "Industry insights, marine technology updates, and company news from Ocean Serenity Marine Pvt Ltd",
    url: "https://oceaninfinitymarine.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Ocean Serenity Marine Pvt Ltd",
      url: "https://oceaninfinitymarine.com",
      logo: "https://oceaninfinitymarine.com/logo.webp",
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Marine Technology: Trends to Watch in 2024",
      excerpt:
        "Explore the latest innovations shaping the maritime industry, from autonomous vessels to sustainable propulsion systems.",
      category: "Technology",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/who1.webp",
      featured: true,
    },
    {
      id: 2,
      title: "Sustainable Maritime Practices: Green Shipping Solutions",
      excerpt:
        "Learn about environmentally friendly practices transforming the shipping industry and reducing carbon footprints.",
      category: "Sustainability",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/who2.webp",
      featured: false,
    },

    {
      id: 3,
      title: "Marine Engine Maintenance: Best Practices for Longevity",
      excerpt:
        "Essential maintenance tips and strategies to ensure optimal performance and extend the lifespan of marine engines.",
      category: "Maintenance",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/who3.webp",
      featured: false,
    },
    {
      id: 4,
      title: "Navigating International Maritime Regulations",
      excerpt:
        "A comprehensive guide to understanding and complying with the latest international maritime regulations and standards.",
      category: "Regulations",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "/who4.webp",
      featured: false,
    },
    {
      id: 5,
      title: "The Role of AI in Modern Maritime Operations",
      excerpt:
        "How artificial intelligence is revolutionizing navigation, safety, and efficiency in the maritime sector.",
      category: "Technology",
      date: "February 20, 2024",
      readTime: "5 min read",
      image: "/why1.webp",
      featured: false,
    },
    {
      id: 6,
      title: "Offshore Wind Energy: Opportunities for Marine Industry",
      excerpt:
        "Exploring the growing intersection between renewable energy and maritime operations in the offshore wind sector.",
      category: "Energy",
      date: "February 15, 2024",
      readTime: "4 min read",
      image: "/why2.webp",
      featured: false,
    },
  ];
  const categories = [
    "All",
    "Technology",
    "Sustainability",
    "Maintenance",
    "Regulations",
    "Energy",
  ];

  return (
    <>
      <SEO
        title="Blog - Ocean Serenity Marine Pvt Ltd | Maritime Industry Insights"
        description="Stay updated with the latest maritime industry insights, technology trends, and company news from Ocean Serenity Marine Pvt Ltd. Expert perspectives on marine technology and innovation."
        keywords="maritime blog, ocean technology insights, marine industry news, shipping technology, maritime innovations, Ocean Serenity Marine Pvt Ltd blog"
        canonicalUrl="https://oceaninfinitymarine.com/blog"
        structuredData={structuredData}
      />

      {/* Page Hero */}
      <PageHero
        title="Blog & Insights"
        subtitle="Maritime Industry Updates and Technology Trends"
        badge="Latest Articles"
      />

      {/* Blog Introduction */}
      <section className="blog-intro" style={{ backgroundColor: "#ffffff" }}>
        <div className="container">
          <div className="blog-intro-content">
            <h2>Industry Insights & Expert Perspectives</h2>
            <p>
              Stay informed with the latest developments in maritime technology,
              industry regulations, and sustainable practices. Our blog features
              expert analysis, case studies, and thought leadership from the
              Ocean Serenity Marine Pvt Ltd team.
            </p>
            <p>
              From cutting-edge marine technology to essential maintenance
              strategies, we share valuable insights to help you navigate the
              evolving maritime landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter((post) => post.featured).length > 0 && (
        <section
          className="featured-post"
          style={{ backgroundColor: "#f8fafc" }}
        >
          <div className="container">
            <h2 className="section-title">Featured Article</h2>
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div key={post.id} className="featured-post-card">
                  <div className="featured-post-image">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="featured-post-img"
                      onError={(e) => {
                        e.target.src = "/logo.webp";
                      }}
                    />
                  </div>
                  <div className="featured-post-content">
                    <div className="post-meta">
                      <span className="post-category">{post.category}</span>
                      <span className="post-date">{post.date}</span>
                      <span className="post-read-time">{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <button className="btn-read-more">Read Full Article</button>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section
        className="blog-posts-section"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <h2 className="section-title">Latest Articles</h2>

          {/* Category Filter */}
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${category === "All" ? "active" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-image">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-post-img"
                    onError={(e) => {
                      e.target.src = "/logo.webp";
                    }}
                  />
                  <div className="post-category-overlay">{post.category}</div>
                </div>
                <div className="blog-post-content">
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="btn-read-more">Read More →</button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="blog-load-more">
            <button className="btn-load-more">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        className="blog-newsletter"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>
              Subscribe to our newsletter for the latest maritime industry
              insights and Ocean Serenity Marine Pvt Ltd news delivered to your inbox.
            </p>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
