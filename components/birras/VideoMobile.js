'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Draggable from '../common/Dragabble';

export default function ProductBox({ cerveza }) {
  const [hover, setHover] = useState(false);

  return (
    <>
        <div className="product-box-5-mobile mb-[4.61vw]">
            <div className="secondary-image-box flex flex-col gap-y-[4.61vw] px-[5.12vw] relative">
                <p className={`text-[#D41768] text-right text-[3.33vw] uppercase ml-[10vh]`}>
                    {cerveza.info.altSecondaryImage}
                </p>
                {cerveza.info.secondaryImage && (         
                    <div className="relative w-[89.74vw] h-[125.89vw]">
                        <Image
                        src={cerveza.info.secondaryImage}
                        style={{
                            objectFit: 'cover',
                        }}
                        fill
                        
                        />
                    </div>
                )}
                {cerveza.info.video && (
                    <div className="relative w-[89.74vw] h-[125.89vw]">
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
                )}

                <div className="sticker-iso-rosa absolute left-[1vh] top-[0vw] md:-left-[6.6vh] md:top-[8vh]">
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
            </div>
        </div>
    </>
  );
}
