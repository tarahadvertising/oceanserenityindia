import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  type = "website",
  structuredData = null,
}) => {
  const defaultTitle =
    "Ocean Serenity Marine Pvt Ltd - Advanced Marine Technology & Ship Repair Services";
  const defaultDescription =
    "Ocean Serenity Marine Pvt Ltd is a premier marine service provider delivering high-quality solutions, ship maintenance, technical support, and equipment supply across all ports.";
  const defaultKeywords =
    "Ocean Serenity Marine Pvt Ltd, marine services India, ship maintenance India, technical services, ship repair, marine equipment supply, vessel maintenance";
  const defaultImage = "/og-image.jpg";

  useEffect(() => {
    // Update page title if provided
    if (title) {
      document.title = `${title} | Ocean Serenity Marine Pvt Ltd`;
    }
  }, [title]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type} />
      <meta
        property="og:url"
        content={canonicalUrl || "https://oceanserenitymarine.com"}
      />
      <meta property="og:site_name" content="Ocean Serenity Marine Pvt Ltd" />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${title || "Ocean Serenity Marine Pvt Ltd"} - Marine Services`}
      />
      <meta property="og:locale" content="en_US" />

      {/* Additional SEO Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />

      {/* Language and Regional Tags */}
      <meta name="content-language" content="en" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
