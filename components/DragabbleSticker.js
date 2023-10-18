'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image';

function DraggableSticker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const stickerRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - dragStart.current.x,
        y: e.clientY - dragStart.current.y
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
    >
      <div
        ref={stickerRef}
        style={{
          cursor: 'grab',
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Aquí va el contenido del sticker (imagen, texto, etc.) */}
        <Image
            src="/sticker-isologo.png"
            alt="Sticker"
            width={119}
            height={112}
        />
      </div>
    </div>
  );
}

export default DraggableSticker;
