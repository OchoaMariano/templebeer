'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'

export default function YourComponent() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 5);
        }, 100); // Ajusta el tiempo según cuán rápido quieras que gire

        return () => clearInterval(interval);
    }, []);

    return (
        
        <div className="flex items-center justify-center h-[68px] relative w-[96%] overflow-hidden">
            <Image 
                src="/playlists.png"
                alt="Temple Beer"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center'
                }}
            />
            <div 
                className="absolute flex items-center justify-center gap-6 space-x-4 right-0 animate-scroll" 
                style={{
                    animationDuration: '20s',
                    animationIterationCount: 'infinite',
                    animationTimingFunction: 'linear',
                    whiteSpace: 'nowrap',
                }}
            >
                {renderLinks()}
               
            </div>
        </div>
            
        
    );
}

function renderLinks() {
    return (
        <>
            <a className="text-white uppercase flex items-center justify-center" href="#" target="_blank">
                Una birra con nacho elizande
                <img src="/nacho.png" className="img__spotify cursor-pointer" alt="Description" />
            </a>
            <a className="text-white uppercase flex items-center justify-center pl-24" href="#">
                Riko x pai
                <img src="/sppotify-3.png" className="pl-5 img__spotify cursor-pointer" alt="Description" />
            </a>
            <a className="text-white uppercase flex items-center justify-center pl-24" href="#">
                Full data
                <img src="/spotify-2.png" className="pl-5 img__spotify cursor-pointer" alt="Description" />
            </a>
            
            {/* Repite para todos los enlaces que tengas */}
        </>
    );
}