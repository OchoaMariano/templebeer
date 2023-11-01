// export async function generateStaticParams() {
//    const posts = await fetch('https://.../posts').then((res) => res.json())
//   
//    return posts.map((post) => ({
//      slug: post.slug,
//    }))
//}

import Link from "next/link";
import Image from 'next/image';
import { GothamBook } from '../../layout'
import { Knockout54UltraBold, Knockout34, Knockout54 } from '../../layout'
import ScrollHorizontal from '../../../../../components/ScrollHorizontal'
import Header from '../../../../../components/common/header'
import CervezasData from '../../../../../data/cervezas.json';

const data = {
    birras: [
      { title: "WOLF IPA", id: 1, slug: "wolf-ipa" },
      { title: "ROYAL SCOTTISH", id: 2, slug: "royal-scottish" },
      { title: "CÓSMICA HOPPY LAGER", id: 3, slug: "csmica-hoppy-lager" },
      { title: "HONEY", id: 4, slug: "honey" },
      { title: "INDIE GOLDEN", id: 5, slug: "indie-golden" },
      { title: "BLACK SOUL STOUT", id: 6, slug: "black-soul-stout" },
      { title: "FLOW APA", id: 7, slug: "flow-apa" },
      { title: "REVOLUTION NEIPA", id: 8, slug: "revolution-neipa" },
      { title: "LEMON HAZE IPA", id: 9, slug: "lemon-haze-ipa" },
      { title: "CRITICAL APA", id: 10, slug: "critical-apa" },
      { title: "KAN", id: 11, slug: "kan" },
      { title: "JAMMIN IMPERIAL STOUT", id: 12, slug: "jammin-imperial-stout" },
      { title: "IPANEMA HAZY IPA", id: 13, slug: "ipanema-hazy-ipa" },
      { title: "KUNG FU SOUR", id: 14, slug: "kung-fu-sour" },
      { title: "DEMON HONEY", id: 15, slug: "demon-honey" },
      { title: "MILKSHAKE NEIPA", id: 16, slug: "milkshake-neipa" },
      { title: "WOLF IPA 0%", id: 17, slug: "wolf-ipa-0" },
      { title: "ALPHA", id: 18, slug: "alpha" },
      { title: "ALPHA II", id: 19, slug: "alpha-ii" }
    ]
};

export default function Page({ params }) {
    const { slug } = params; // Asumiendo que "params" contiene un objeto con la propiedad "slug"
    const cerveza = CervezasData.Cervezas.find(c => c.slug === slug);

    if (!cerveza) {
        return <div>Cerveza no encontrada</div>;
    }

    return (
        <>
            <div className="desktop">
                <Header  />
                <section className="h-screen bg-cover bg-center" style={{ backgroundImage: cerveza.style?.background ? `url(${cerveza.style.background})` : 'url(/background-home.jpeg)' }}>
                    <div className="product-viewport">
                        <div className="page_product_wrapper relative h-full">
                            <ScrollHorizontal>
                                <div className="row">
                                    <div className="column">
                                        <div className="product-box-1">
                                            <div className="absolute right-0 bottom-0">
                                                <div className="relative w-[47.30vh] h-[83vh]">
                                                    <Image
                                                        src={cerveza.mainImage}
                                                        style={{
                                                            objectFit: 'cover',
                                                        }}
                                                        fill
                                                        unoptimized={true}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="main-content-wrapper">
                                                <div className="product-title-box">
                                                    <h1 className={`text-[9.49vh] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>{cerveza.nombre}</h1>
                                                </div>
                                                <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[2.97vh]">
                                                    <Link className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px] group" href="/birras">
                                                        <Image 
                                                            src='/detallebirras/btn-arrow.png'
                                                            
                                                            width={16}
                                                            height={17}
                                                            className="group-hover:hidden"
                                                        />
                                                        <Image 
                                                            src='/arrow-hover.png'
                                                            
                                                            width={16}
                                                            height={17}
                                                            className="hidden group-hover:block group-hover:-rotate-30"
                                                        />
                                                        BIRRAS
                                                    </Link>
                                                    <Link className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center" href="/birras">
                                                        COMPRAR
                                                    </Link>
                                                </div>
                                                <div className="description__wrapper flex flex-col pt-[2.26vh]">
                                                    <p className={`text-white uppercase text-[11px] w-[46.88vh] ${GothamBook.className}`}>
                                                        {cerveza.descripcion}
                                                    </p>
                                                    <div className="propiedades__wrapper flex flex-row text-[11px  pt-[2.97vh]">
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>ALC. {cerveza.propiedades.alcohol}</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>IBU {cerveza.propiedades.ibu}</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>{cerveza.propiedades.size} CC.</span>
                                                    </div>
                                                </div>
                                                {cerveza.style.esquinaIzquierda && (
                                                <div className="trama__wrapper absolute bottom-0 left-0">
                                                    <div className="relative w-[600px] h-[200px] z-20">
                                                        <Image 
                                                            src={cerveza.style.esquinaIzquierda}
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                            unoptimized={true}
                                                        />
                                                    </div>
                                                </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="product-box-2">
                                            <div className="relative w-[52.69vh] h-[55.52vh]">
                                                <Image
                                                    src={cerveza.info.imageInfo}
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                    fill
                                                    unoptimized={true}
                                                />
                                            </div>
                                            <div className="pt-[2.54vh] pb-[2.54vh]">
                                                <p className={`text-white text-[1.41vh] uppercase ${GothamBook.className}`}>
                                                    {cerveza.info.bajada}
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className={`leading-[3.39vh] text-[3.39vh] uppercase `} style={{ color: cerveza.style?.color || 'white' }}>
                                                    {cerveza.info.destacado}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        {cerveza.info.secondaryImage && (
                                        <div className="product-box-3">
                                            <div className="relative w-[34.98vh] h-[69.54vh] mt-[9.91vh] mb-[11.33vh]">
                                                <Image
                                                src={cerveza.info.secondaryImage}
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                                fill
                                                unoptimized={true}
                                                />
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                    <div className="column">
                                        <div className="product-box-4 relative h-full">
                                            {cerveza.style.esquinaDerecha && (
                                            <div className="absolute right-0 top-0">
                                                <div className="relative w-[35.83vh] h-[16.28vh]">
                                                    <Image
                                                        src={cerveza.style.esquinaDerecha}
                                                        style={{
                                                            objectFit: 'cover',
                                                        }}
                                                        fill
                                                        
                                                    />
                                                </div>
                                            </div>
                                            )}
                                            <div className="beers-content-wrapper flex flex-col justify-between">
                                                <div className="title pb-[0.21vh]">
                                                    <h2 className="text-[5.66vh] uppercase px-[2.40vh]" style={{ color: cerveza.style?.color || 'white' }}>
                                                        BIRRAS
                                                    </h2>
                                                </div>
                                                <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]">
                                                        <div className="relative w-[14.02vh] h-[25.07vh]">
                                                            <Image
                                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                                style={{
                                                                    objectFit: 'cover',
                                                                }}
                                                                fill
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="beer-nav">
                                                    <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                                        {data.birras.map((birraObj, index) => (
                                                        <span key={index} className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out" href={`/birras/${birraObj.slug}`}>
                                                            {birraObj.title}
                                                            </Link>
                                                        </span>
                                                        ))}
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollHorizontal>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}