'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function PictureToVideoBox() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className="picture-box-1 cursor-pointer" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      {isHovering ? (
        // Se muestra el video cuando el usuario hace hover
        <video 
          width="100%" 
          height="100%" 
          autoPlay 
          loop 
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            opacity: isHovering ? 1 : 0
          }}
        >
          <source src="https://storage.googleapis.com/tb-temporal/video-home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Se muestra la imagen cuando no hay hover
        <Image 
          src="/frame-2.jpg"
          alt="Temple Beer"
          layout="fill"
          objectFit="cover"
          style={{
            opacity: isHovering ? 0 : 1
          }}
        />
      )}
    </div>
  );
}
