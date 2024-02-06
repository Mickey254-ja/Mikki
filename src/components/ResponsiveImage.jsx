import React from 'react';

const ResponsiveImage = ({ originalSrc, smallSrc, mediumSrc, largeSrc, altText }) => (
  <img
    src={originalSrc}
    srcSet={`${smallSrc} 320w, ${mediumSrc} 768w, ${largeSrc} 1200w`}
    sizes="(max-width: 320px) 280px, (max-width: 768px) 720px, 1200px"
    alt={altText}
  />
);

export default ResponsiveImage;