import React from 'react';
import { Helmet } from 'react-helmet';
import medinadrop from '../../assets/MedinaDrop.svg'

const SEO = ({ siteTitle, siteDescription, siteUrl, ogImage, twitterImage }) => {
  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <link rel="canonical" href={siteUrl} />

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