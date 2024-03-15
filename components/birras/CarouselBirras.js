'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createLocalePath } from '../../src/utils/pathUtils'

function CarouselBirras({ cervezas, titulo, colorBordeTitulo, birras }) {
  const pathName = usePathname();

    return (
        <div className=" flex flex-col flex-nowrap pl-[5.12vw] lg:pl-[4.81vh]">   
          <div className="flex flex-row pb-[15px] items-end">
            {birras.map((birra, index) => (
                <Link key={index} href={createLocalePath(`/birras/${birra.attributes.slug}`, pathName)}>
                    <div key={index} className="slide__birra hover:scale-110 transition duration-100 transform">
                    <div className="w-[70.25vw] h-[109.74vw] lg:h-[40.5vh] lg:w-[26.34vh] relative">
                        <Image 
                          src={birra.attributes.productImage?.data.attributes.url}
                          alt={birra.attributes.productImage?.data.attributes.name}
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
          <div className="w-full border-t-[1.5px] flex py-[15px] px-[10px] " style={{ borderTop: `1.5px solid ${birras[0].attributes.categorias_birra.data.attributes.color}` }}>
            <h4 className="uppercase text-white text-[10px]">{birras[0].attributes.categorias_birra.data.attributes.Categoria}</h4>
          </div>
        </div>
    );
};

export default CarouselBirras;