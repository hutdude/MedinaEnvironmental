import React from 'react';
import { Helmet } from 'react-helmet';
import medinadrop from '../../assets/MedinaDrop.svg'

const SEO = ({ siteTitle, siteDescription, siteUrl, ogImage, twitterImage, isHomePage=false }) => {
  const baseURL = "https://medinaenvironmentalcompany.com"
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Schema.org structured data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "${siteTitle}",
              "url": "${siteUrl}",
              
              "subjectOf": [
                {
                  "@type": "WebPage",
                  "name": "Services",
                  "url": "${siteUrl}"
                },
                {
                  "@type": "WebPage",
                  "name": "About",
                  "url": "${baseURL}/about"
                },
                {
                  "@type": "WebPage",
                  "name": "Services",
                  "url": "${baseURL}/services"
                },
                {
                  "@type": "WebPage",
                  "name": "Projects",
                  "url": "${baseURL}/projects"
                },
                {
                  "@type": "WebPage",
                  "name": "Learn",
                  "url": "${baseURL}/learn"
                }
                // Add more pages as needed
              ]
            }
          `}
          </script>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage || medinadrop} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={twitterImage || medinadrop} />
    </Helmet>
  );
};

export default SEO;