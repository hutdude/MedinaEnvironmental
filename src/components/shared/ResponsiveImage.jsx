import React from 'react';

const OptimizedImage = ({ src, alt, className, width, height }) => {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <source srcSet={`${src}.jpg`} type="image/jpeg" /> 
      <img 
        src={`${src}.jpg`} 
        alt={alt} 
        className={className}
        width={width}
        height={height}
        loading="eager"
      />
    </picture>
  );
};

export default OptimizedImage;