'use client'

import React, { useRef, useEffect, useState } from 'react';
import { gsap, Power4 } from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }) {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      direction: 'horizontal',
      getSpeed: true,
      getDirection: true
    });

    scroll.on('scroll', (obj) => {
      gsap.to(containerRef.current, {
        x: -obj.scroll.x,
        ease: Power4.easeIn
      });

      // Aquí puedes añadir más efectos basados en la velocidad o dirección del scroll
    });

    // Observador para ajustar el ancho en caso de cambio de tamaño de la ventana
    const ro = new ResizeObserver((elements) => {
      for (let elem of elements) {
        const crx = elem.contentRect;
        setWidth(crx.width);
      }
    });

    ro.observe(containerRef.current);

    // Limpieza de efectos y observadores
    return () => {
      scroll.destroy();
      ro.disconnect();
    }
  }, []);

  return (
    <>
      <div ref={containerRef} className="">
        {children}
      </div>
      <div
        className="fake"
        style={{
          width: width,
          height: '100vh' // o ajusta según sea necesario
        }}
      />
    </>
  );
}
