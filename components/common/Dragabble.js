'use client'

import { useRef, useState } from 'react';

export default function Draggable({ children, initialPosition }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault(); // Esto evita cualquier comportamiento por defecto del navegador
    ref.current.style.transition = 'none'; // Desactiva la transición mientras arrastras
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: position.x + e.movementX,
        y: position.y + e.movementY,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    ref.current.style.transition = 'transform 0.2s ease'; // Reactiva la transición cuando dejas de arrastrar
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      const touch = e.targetTouches[0];
      setPosition({
        x: position.x + touch.clientX,
        y: position.y + touch.clientY,
      });
    }
  };

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        transform: `translate(${position.x}px, ${position.y}px)`, // Usar transform en lugar de left y top
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 1000,
        transition: 'transform 0.2s ease', // Suaviza la animación
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  );
}

