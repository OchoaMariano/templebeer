'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Draggable from '../common/Dragabble';

export default function ProductBox({ cerveza }) {
  const [hover, setHover] = useState(false);

  return (
    <>
        <div className="product-box-5-mobile mb-[4.61vw]">
            <div className="secondary-image-box flex flex-col gap-y-[4.61vw] px-[5.12vw]">
                <p className={`text-[#D41768] text-right text-[3.33vw] uppercase`}>
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
                            loop
                            muted
                            style={{
                            objectFit: 'cover',
                            width: '100%',
                            height: '100%',
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    </>
  );
}
