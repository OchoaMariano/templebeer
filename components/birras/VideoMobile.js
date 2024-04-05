'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Draggable from '../common/Dragabble';

export default function ProductBox({ cerveza }) {
  const [hover, setHover] = useState(false);

  console.log(cerveza);

  return (
    <>
        {/* AJUSTAR COMPONENTE CUANDO VIENE VIDEO Y IMAGEN RENDERIZAR SOLO VIDEO Y SINO IMAGEN */}
        <div className="product-box-5-mobile mb-[4.61vw]">
            <div className="secondary-image-box flex flex-col gap-y-[4.61vw] px-[5.12vw] relative">
                <p className={`text-[#D41768] text-right text-[3.33vw] uppercase ml-[10vh]`}>
                    {cerveza?.image.data.attributes.alternativeText}
                </p>
                {cerveza?.extVideoUrl && (
                    <div className="relative w-[89.74vw] h-[125.89vw]">
                        <video
                            src={cerveza.extVideoUrl}
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
                {cerveza?.image.data.attributes.url && (
                    <div className="relative w-[89.74vw] h-[125.89vw]" style={{  height: cerveza.info?.heightSecondaryM || '125.89vw' }}>
                        <Image
                        src={cerveza.image.data.attributes.url}
                        style={{
                            objectFit: 'cover',
                        }}
                        fill
                        
                        />
                    </div>
                )}
               
                {cerveza?.extVideoUrl && (
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
                )}
                {cerveza?.image.data.attributes.url && (
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
                )}
            </div>
        </div>
    </>
  );
}
