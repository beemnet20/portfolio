import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OverlayImage: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerStyle: React.CSSProperties = {
    position: 'relative',
  };

  const portraitFadeStyle: React.CSSProperties = {
    WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
  };

  const backgroundFadeStyle: React.CSSProperties = {
    WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
    maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
  };

  const backgroundStyle: React.CSSProperties = {
    zIndex: 1,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    ...backgroundFadeStyle,
  };

  const portraitStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
    ...portraitFadeStyle,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={'/portfolio/yellow-hexagon.svg'}
        width={600}
        height={600}
        alt='Background'
        layout=''
        style={backgroundStyle}
      />
      <Image
        src={'/portfolio/me-outline.png'}
        alt='Portrait'
        layout='intrinsic'
        width={300}
        height={300}
        style={{
          ...portraitStyle,
          transform: hovered ? 'scale(1.25)' : 'scale(1)',
        }}
      />
    </div>
  );
};

export default OverlayImage;
