'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createLocalePath } from '../../src/utils/pathUtils'

function CarouselBirras({ cervezas, titulo, colorBordeTitulo }) {
  const pathName = usePathname();

    return (
        <div className=" flex flex-col flex-nowrap pl-[5.12vw] lg:pl-[4.81vh]">   
          <div className="flex flex-row pb-[15px] items-end">
            {cervezas.map((cerveza, index) => (
                <Link key={index} href={createLocalePath(`/birras/${cerveza.slug}`, pathName)}>
                    <div key={index} className="slide__birra hover:scale-110 transition duration-100 transform">
                    <div className="w-[70.25vw] h-[109.74vw] lg:h-[40.5vh] lg:w-[26.34vh] relative">
                        <Image 
                          src={cerveza.src}
                          alt={cerveza.alt}
                          style={{
                              objectFit: 'cover'
                            }}
                          fill
                        />
                    </div>
                    </div>
                </Link>
            ))}
          </div>
          <div className="w-full border-t-[1.5px] flex py-[15px] px-[10px] " style={{ borderTop: `1.5px solid ${colorBordeTitulo}` }}>
            <h4 className="uppercase text-white text-[10px]">{titulo}</h4>
          </div>
        </div>
    );
};

export default CarouselBirras;