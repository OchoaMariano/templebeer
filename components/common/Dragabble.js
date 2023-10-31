'use client'

import React, { useRef, useState, useEffect } from 'react';

export default function Draggable({ children, initialPosition }) {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }
  }, [position]);

  const startDrag = (x, y) => {
    setIsDragging(true);
    setOffset({
      x: x - position.x,
      y: y - position.y,
    });
    ref.current.style.transition = 'none';
  };

  const handleMouseDown = (e) => {
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);
    e.preventDefault();
  };

  const doDrag = (x, y) => {
    if (isDragging) {
      setPosition({ x: x - offset.x, y: y - offset.y });
    }
  };

  const handleMouseMove = (e) => {
    doDrag(e.clientX, e.clientY);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    doDrag(touch.clientX, touch.clientY);
  };

  const stopDrag = () => {
    setIsDragging(false);
    ref.current.style.transition = 'transform 0.2s ease';
  };

  const handleMouseUp = () => {
    stopDrag();
  };

  const handleTouchEnd = () => {
    stopDrag();
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd, { passive: false });
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd, { passive: false });
    };
  }, [isDragging, offset]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 1000,
        userSelect: 'none',
        transition: 'transform 0.2s ease',
        touchAction: 'none',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {children}
    </div>
  );
}
