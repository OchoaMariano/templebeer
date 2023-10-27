import Image from 'next/image'
import Link from 'next/link'

function CarouselBirras({ cervezas, titulo, colorBordeTitulo }) {
    return (
        <div className="overflow-auto flex flex-col flex-nowrap pl-[5.12vw] lg:pl-[4.81vh]">   
          <div className="flex flex-row pb-[15px] items-end">
            {cervezas.map((cerveza, index) => (
                <Link key={index} href={`/birras/${cerveza.slug}`}>
                    <div key={index} className="slide__birra  transform transition-transform duration-300 hover:-translate-y-3">
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