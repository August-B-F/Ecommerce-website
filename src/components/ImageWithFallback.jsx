import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const fallbackSrc = `https://via.placeholder.com/400x400.png/f7f7f7/333333?text=Image+Not+Found`;

  const handleError = () => {
    setImgSrc(fallbackSrc);
  };

  return (
    <img
      src={imgSrc ? imgSrc : fallbackSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;