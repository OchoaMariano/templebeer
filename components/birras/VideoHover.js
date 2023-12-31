'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Draggable from '../common/Dragabble';

export default function ProductBox({ cerveza }) {
  const [hover, setHover] = useState(false);

  return (
    <>
    {cerveza.info.secondaryImage && (
      <div className="product-box-3" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
        style={{ width: cerveza.info?.widthSecondary || '34.98vh',  height: cerveza.info?.heightSecondary || '69.54vh' }}>
        <p className="mt-[9.91vh] text-right text-[1.41vh] uppercase pb-[1vh] ml-[10vh]"
           style={{ color: cerveza.style?.color || 'white', marginLeft: '10vh' }}>
          {cerveza.info.altSecondaryImage}
        </p>
        <div className="relative w-[89.74vw] h-[125.89vw] md:w-[34.98vh] md:h-[69.54vh] mb-[11.33vh]" 
          style={{ width: cerveza.info?.widthSecondary || '34.98vh',  height: cerveza.info?.heightSecondary || '69.54vh' }}
        >
          {hover && cerveza.info.video ? (
            <video
              src={cerveza.info.video}
              className="cursor-pointer"
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          ) : (
            <Image
              src={cerveza.info.secondaryImage}
              alt={cerveza.info.altSecondaryImage || 'Cerveza'}
              className=""
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <div className="sticker-iso-rosa absolute -left-[1vh] top-[8vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="rotate-[23deg] w-[9.69vh] h-[9.69vh] relative">
                    <Image 
                        src="/sticker-rosa-tempple.png"
                        alt="Temple Beer"
                        fill 
                    />
                </div>
            </Draggable>
        </div>
        <div className="sticker-temple-amarillo absolute right-[10vh] top-[30vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="-rotate-[14.25deg] w-[16.28vh] h-[3.42vh] relative">
                    <Image 
                        src="/sticker-temple-amarrillo.png"
                        alt="Temple Beer"
                        fill 
                    />
                </div>
            </Draggable>
        </div>
      </div>
    )}
    {cerveza.info.video && (
    <div className="product-box-3" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} 
    style={{ width: cerveza.info?.widthSecondary || '34.98vh',  height: cerveza.info?.heightSecondary || '69.54vh' }}>
        <p className="mt-[9.91vh] text-right text-[1.41vh] uppercase pb-[1vh]"
        style={{ color: cerveza.style?.color || 'white' }}>
        {cerveza.info.altSecondaryImage}
        </p>
        <div 
          className="relative w-[34.98vh] h-[69.54vh] mb-[11.33vh]"
          style={{ width: cerveza.info?.widthSecondary || '34.98vh',  height: cerveza.info?.heightSecondary || '69.54vh' }}
        >
            <video
                src={cerveza.info.video}
                className="cursor-pointer"
                autoPlay
                playsInline
                loop
                muted
                preload="auto"
                style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                }}
            />
        </div>
        <div className="sticker-iso-rosa absolute md:-left-[6.6vh] md:top-[8vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="rotate-[23deg] w-[16.92vw] h-[16.92vw] md:w-[9.69vh] md:h-[9.69vh] relative">
                    <Image 
                        src="/sticker-rosa-tempple.png"
                        alt="Temple Beer"
                        fill 
                    />
                </div>
            </Draggable>
        </div>
        <div className="sticker-temple-amarillo absolute md:right-[10vh] md:top-[30vh] hidden md:block">
            <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="-rotate-[14.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
                    <Image 
                        src="/sticker-temple-amarrillo.png"
                        alt="Temple Beer"
                        fill 
                    />
                </div>
            </Draggable>
        </div>
    </div>
    )}
    </>
  );
}
