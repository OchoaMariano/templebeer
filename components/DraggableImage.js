import React from 'react';
import Draggable from 'react-draggable';
import Image from 'next/image';

const DraggableImage = ({ src, alt, width, height }) => (
  <Draggable>
    <div className="cursor-grab">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  </Draggable>
);

export default DraggableImage;
