// components/ScrollHorizontal.js
'use client'

import React, { useRef, useEffect } from 'react';

function ScrollHorizontal({ children }) {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;

        const handleScroll = (event) => {
            console.log("scroll")
            if (event.deltaY) {
                // Ajustar esta constante para aumentar o disminuir la "resistencia" al desplazamiento
                const scrollResistance = 0.7;
                
                wrapper.scrollLeft += (event.deltaY + event.deltaX) * scrollResistance;
                event.preventDefault();
            }
        };

        wrapper.addEventListener('wheel', handleScroll);
        return () => {
            wrapper.removeEventListener('wheel', handleScroll);
        };
    }, []);

    return <div ref={wrapperRef} className="no-scrollbar" style={{ overflowX: 'auto', overflowY: 'hidden' }}>{children}</div>;
}

export default ScrollHorizontal;
