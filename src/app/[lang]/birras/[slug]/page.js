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
import VideoHover from '../../../../../components/birras/VideoHover'
import VideoMobile from '../../../../../components/birras/VideoMobile'
import Header from '../../../../../components/common/header';
import Footer from '../../../../../components/common/Footer';
import CervezasData from '../../../../../data/cervezas.json';
import CervezasDataEn from '../../../../../data/cervezas-en.json';
import { getDictionary } from '../../../../dictionaries';
import Draggable from '../../../../../components/common/Dragabble';

const data = {
    birras: [
      { title: "WOLF IPA", id: 1, slug: "wolf-ipa" },
      { title: "ROYAL SCOTTISH", id: 2, slug: "royal-scotish" },
      { title: "HONEY", id: 3, slug: "honey" },
      { title: "CÓSMICA HOPPY LAGER", id: 4, slug: "cosmica-lager" },
      { title: "INDIE GOLDEN", id: 5, slug: "indie-golden" },
      { title: "BLACK SOUL STOUT", id: 6, slug: "black-soul-stout" },
      { title: "FLOW APA", id: 7, slug: "flow-apa" },
      { title: "REVOLUTION NEIPA", id: 8, slug: "revolution-neipa" },
      { title: "LEMON HAZE IPA", id: 9, slug: "lemon-haze-ipa" },
      { title: "CRITICAL APA", id: 10, slug: "critical-apa" },
      { title: "KANDY KUSH HONEY", id: 11, slug: "kandy-kush-honey" },
      { title: "INFRARED IPA", id: 12, slug: "infrared-ipa" },
      { title: "IPANEMA HAZY IPA", id: 13, slug: "ipanema" },
      { title: "JAMMIN IMPERIAL STOUT", id: 14, slug: "jammin-imperial-stout" },
      { title: "KUNG FU SOUR", id: 15, slug: "kung-fu-sour" },
      { title: "DEMON HONEY", id: 16, slug: "demon-honey" },
      { title: "MILKSHAKE NEIPA", id: 17, slug: "milkshake-neipa" },
      { title: "WOLF IPA 0%", id: 18, slug: "wolf-ipa-sin-alcohol" },
      { title: "ALPHA I", id: 19, slug: "proyecto-alpha-1" },
      { title: "ALPHA II", id: 20, slug: "proyecto-alpha-2" },
      { title: "ALPHA BARRICA I", id: 21, slug: "alpha-barrica-1" },
      { title: "ALPHA IMPERIAL STOUT", id: 22, slug: "alpha-imperial-stout" }
    ],
    gridClasicas: [
        { title: "WOLF IPA", id: 1, slug: "wolf-ipa", mainImage: "/nuestrasbirras/clasicas/wolf-ipa/wolf-ipa.png" },
        { title: "ROYAL SCOTTISH", id: 2, slug: "royal-scotish", mainImage:"/nuestrasbirras/clasicas/scotish/scotish.png" },
        { title: "HONEY", id: 3, slug: "honey", mainImage:"/nuestrasbirras/clasicas/honey/honey.png" },
        { title: "CÓSMICA HOPPY LAGER", id: 4, slug: "cosmica-lager", mainImage:"/nuestrasbirras/clasicas/cosmica/cosmica.png" },
        { title: "INDIE GOLDEN", id: 5, slug: "indie-golden", mainImage:"/nuestrasbirras/clasicas/indie-golden/indie-golden.png" },
        { title: "BLACK SOUL STOUT", id: 6, slug: "black-soul-stout", mainImage:"/nuestrasbirras/clasicas/black-soul-stout/black-soul-stout.png" },
        { title: "FLOW APA", id: 7, slug: "flow-apa", mainImage:"/nuestrasbirras/clasicas/flow-apa/flow-apa.png" },
        { title: "REVOLUTION NEIPA", id: 8, slug: "revolution-neipa", mainImage:"/nuestrasbirras/clasicas/revolution/revolution.png" }
    ],
    gridEspeciales: [
        { title: "KUNG FU SOUR", id: 15, slug: "kung-fu-sour", mainImage: "/nuestrasbirras/especiales/kungfu-sour/kungfu-sour.png" },
        { title: "DEMON HONEY", id: 16, slug: "demon-honey" , mainImage: "/nuestrasbirras/especiales/demon-honey/demon-honey.png"},
        { title: "MILKSHAKE NEIPA", id: 17, slug: "milkshake-neipa", mainImage: "/nuestrasbirras/especiales/milkshake-neipa/milkshake-neipa.png" },
        { title: "WOLF IPA 0%", id: 17, slug: "wolf-ipa-sin-alcohol", mainImage: "/nuestrasbirras/especiales/wolf-ipa-sa/wolf-ipa-sa.png" },
        { title: "ALPHA", id: 19, slug: "proyecto-alpha-1", mainImage: "/nuestrasbirras/especiales/proyecto-alpha-1/proyecto-alpha-1.png" },
        { title: "ALPHA II", id: 20, slug: "proyecto-alpha-2", mainImage: "/nuestrasbirras/especiales/proyecto-alpha-2/proyecto-alpha-2.png" },
        { title: "ALPHA BARRICA", id: 21, slug: "alpha-barrica-1", mainImage: "/nuestrasbirras/especiales/proyecto-barrica-1/proyecto-barrica-1.png" },
        { title: "ALPHA STOUT", id: 22, slug: "alpha-imperial-stout", mainImage: "/nuestrasbirras/especiales/alpha-imperial-stout/alpha-imperial-stout.png" },
    ],
    gridLimitadas: [
        { title: "LEMON HAZE IPA", id: 9, slug: "lemon-haze-ipa", mainImage: "/nuestrasbirras/limitadas/santa-planta-lemon-haze-ipa/santa-planta-lemon-haze-ipa.png" },
        { title: "CRITICAL APA", id: 10, slug: "critical-apa", mainImage: "/nuestrasbirras/limitadas/santa-planta-critical-apa/santa-planta-critical-apa.png" },
        { title: "KANDY KUSH HONEY", id: 11, slug: "kandy-kush-honey", mainImage: "/nuestrasbirras/limitadas/santa-planta-kandy-kush-honey/santa-planta-kandy-kush-honey.png" },
        { title: "INFRARED IPA", id: 12, slug: "infrared-ipa", mainImage: "/nuestrasbirras/limitadas/infrared-ipa/infrared-ipa.png" },
        { title: "IPANEMA HAZY IPA", id: 13, slug: "ipanema", mainImage: "/nuestrasbirras/limitadas/ipanema/ipanema.png" },
        { title: "JAMMIN IMPERIAL STOUT", id: 14, slug: "jammin-imperial-stout", mainImage: "/nuestrasbirras/especiales/jammin-imperial-stout/jammin-imperial-stout.png" },
        { title: "KUNG FU SOUR", id: 15, slug: "kung-fu-sour", mainImage: "/nuestrasbirras/especiales/kungfu-sour/kungfu-sour.png" },
        { title: "DEMON HONEY", id: 16, slug: "demon-honey" , mainImage: "/nuestrasbirras/especiales/demon-honey/demon-honey.png"},
    ],
    gridEn: [
        { title: "Cosmic Hazy Lager", id: 1, slug: "cosmic-hazy-lager", mainImage: "/nuestrasbirras/en/cosmic-hazy-lager/cosmic-hazy-lager.png" },
        { title: "HONEY", id: 2, slug: "honey", mainImage: "/nuestrasbirras/en/honey/honey.png" },
        { title: "Indie Lager", id: 3, slug: "indie-lager", mainImage: "/nuestrasbirras/en/indie-lager/indie-lager.png" },
        { title: "Ipanema", id: 4, slug: "ipanema", mainImage: "/nuestrasbirras/en/ipanema/ipanema.png" },
        { title: "Royal Amber", id: 5, slug: "royal-amber", mainImage: "/nuestrasbirras/en/royal-amber/royal-amber.png" },
        { title: "Wolf Ipa", id: 6, slug: "wolf-ipa", mainImage: "/nuestrasbirras/en/wolf-ipa/wolf-ipa.png" }
    ]
};

export default async function Page({ params }) {
   
    const { slug, lang } = params; // Asumiendo que "params" contiene un objeto con la propiedad "slug"
    console.log (slug, lang)
    
    let cerveza = null

    if (lang === 'es') {
        cerveza = CervezasData.Cervezas.find(c => c.slug === slug);
        console.log(cerveza)
        if (!cerveza) {
            return <div>Cerveza no encontrada</div>;
        }
    }
    
    if (lang === 'en') {
        cerveza = CervezasDataEn.Cervezas.find(c => c.slug === slug);
        console.log(cerveza)
        if (!cerveza) {
            return <div>Cerveza no encontrada</div>;
        }
    }

    

    const langg = params.lang
    const dict = await getDictionary(langg);
    const headerDic = dict.header;

    

    return (
        <>
            <div className="desktop hidden lg:block">
                <Header dictonary={headerDic} />
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
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="main-content-wrapper">
                                                <div className="product-title-box">
                                                    <h1 className={`text-[9.49vh] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>
                                                        {cerveza.nombre}
                                                    </h1>
                                                </div>
                                                <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[2.97vh]">
                                                    <Link className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px] group" href={`/${lang}/birras`} >
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
                                                    {lang === 'es' && (
                                                        <a className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center" target="_blank" href={cerveza.urlBuy}>
                                                            COMPRAR
                                                        </a>
                                                    )}
                                                    
                                                </div>
                                                <div className="description__wrapper flex flex-col pt-[2.26vh]">
                                                    <p className={`text-white uppercase text-[1.55vh] w-[50.88vh] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white' }} dangerouslySetInnerHTML={{ __html: cerveza.descripcion }} />
                                                    
                                                    {lang === 'es' && (
                                                    <div className="propiedades__wrapper flex flex-row text-[1.55vh]  pt-[2.97vh]">
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>ALC. {cerveza.propiedades.alcohol}</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>IBU {cerveza.propiedades.ibu}</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>{cerveza.propiedades.size} CC.</span>
                                                    </div>
                                                    )}
                                                    {lang === 'en' && (
                                                    <div className="propiedades__wrapper flex flex-row text-[11px  pt-[2.97vh]">
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>ALC. {cerveza.propiedades.alcohol}</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>FLOZ {cerveza.propiedades.floz}</span>
                                                    </div>
                                                    )}
                                                    
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
                                                                
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="product-box-2">
                                            {/* Renderiza el video si cerveza.info.videoInfo no es null, de lo contrario renderiza la imagen */}
                                            {cerveza.info.videoInfo ? (
                                                <div className="relative w-[52.69vh] h-[55.52vh]" style={{ width: cerveza.info?.widthPrimary || '52.69vh',  height: cerveza.info?.heightPrimary || '55.52vh' }}>
                                                    <video
                                                        src={cerveza.info.videoInfo}
                                                        style={{
                                                        objectFit: 'cover',
                                                        width: '100%',
                                                        height: '100%',
                                                        }}
                                                        autoPlay
                                                        playsInline
                                                        loop
                                                        muted
                                                />
                                                </div>
                                            ) : (
                                                <div className="relative w-[52.69vh] h-[55.52vh]" style={{ width: cerveza.info?.widthPrimary || '52.69vh',  height: cerveza.info?.heightPrimary || '55.52vh' }}>
                                                    <Image
                                                        src={cerveza.info.imageInfo}
                                                        style={{
                                                        objectFit: 'cover',
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                            )}

                                            <div className="pt-[2.54vh] pb-[2.54vh]">
                                                <p className={`text-white text-[1.41vh] ${GothamBook.className}`} dangerouslySetInnerHTML={{ __html: cerveza.info.bajada }} />
                                            </div>
                                            <div className="">
                                                <p className={`leading-[3.39vh] text-[3vh] uppercase ${Knockout54UltraBold.className}`} style={{ color: cerveza.style?.color || 'white' }} dangerouslySetInnerHTML={{ __html: cerveza.info.destacado }} />
                                            </div>
                                            
                                            {cerveza.info.video === null && cerveza.info.secondaryImage === null && (
                                                <div className="sticker-temple-amarillo absolute -left-[7vh] top-[3vh] hidden md:block">
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
                                            )}
                                             {cerveza.info.video === null && cerveza.info.secondaryImage === null && (
                                                <div className="sticker-iso-rosa absolute right-[5vh] top-[30vh] hidden md:block">
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
                                             )}
                                                    

                                        </div>
                                    </div>
                                    <div className="column">
                                        <VideoHover cerveza={cerveza} />
                                        
                                    </div>
                                    <div className="column">
                                        {lang == 'es' && (
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
                                                {cerveza.gridClasicas && (
                                                <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                                    {data.gridClasicas.map((clasicasObj, index) => (
                                                        <div className="beer-item py-[2.12vh] px-[0.42vh]" key={index}>
                                                            <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                                <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                                                    <Image
                                                                        src={clasicasObj.mainImage}
                                                                        style={{
                                                                            objectFit: 'cover',
                                                                        }}
                                                                        fill
                                                                        
                                                                    />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                                )}
                                                {cerveza.gridLimitadas && (
                                                <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                                    {data.gridLimitadas.map((clasicasObj, index) => (
                                                        <div className="beer-item py-[2.12vh] px-[0.42vh]" key={index}>
                                                            <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                                <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                                                    <Image
                                                                        src={clasicasObj.mainImage}
                                                                        style={{
                                                                            objectFit: 'cover',
                                                                        }}
                                                                        fill
                                                                        
                                                                    />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                                )}
                                                {cerveza.gridEspeciales && (
                                                <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                                    {data.gridEspeciales.map((clasicasObj, index) => (
                                                        <div className="beer-item py-[2.12vh] px-[0.42vh]" key={index}>
                                                            <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                                <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                                                    <Image
                                                                        src={clasicasObj.mainImage}
                                                                        style={{
                                                                            objectFit: 'cover',
                                                                        }}
                                                                        fill
                                                                        
                                                                    />
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                                )}
                                                <div className="beer-nav">
                                                    <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                                        {data.birras.map((birraObj, index) => (
                                                        <span key={index} className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out" href={`/${lang}/birras/${birraObj.slug}`}>
                                                            {birraObj.title}
                                                            </Link>
                                                        </span>
                                                        ))}
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                        {lang == 'en' && (
                                        <div className="product-box-4-en relative h-full">
                                            <div className="beers-content-wrapper flex flex-col justify-between">
                                                <div className="title pb-[0.21vh]">
                                                    <h2 className="text-[5.66vh] uppercase px-[2.40vh]" style={{ color: cerveza.style?.color || 'white' }}>
                                                        BEERS
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="beer-grid grid grid-cols-3 grid-rows-2">
                                                {data.gridEn.map((enObj, index) => (
                                                    <div className="beer-item py-[2.12vh] px-[0.42vh]" key={index}>
                                                        <Link href={`/${lang}/birras/${enObj.slug}`}>
                                                            <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                                                <Image
                                                                    src={enObj.mainImage}
                                                                    style={{
                                                                        objectFit: 'cover',
                                                                    }}
                                                                    fill
                                                                    
                                                                />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="beer-nav">
                                                <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                                    {data.gridEn.map((birraObj, index) => (
                                                    <span key={index} className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                                        <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase" href={`/${lang}/birras/${birraObj.slug}`}>
                                                        {birraObj.title}
                                                        </Link>
                                                    </span>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </ScrollHorizontal>
                        </div>
                    </div>
                </section>
            </div>
            <div className="mobile lg:hidden">
                <Header dictonary={headerDic}  />
                <section className="bg-cover bg-center pt-[20vw]" style={{ backgroundImage: cerveza.style?.background ? `url(${cerveza.style.background})` : 'url(/background-home.jpeg)' }}>
                    <div className="product-box-1-mobile">
                        <div className="product-title-box-mobile">
                            <h1 className={`text-[12.05vw] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>
                                {cerveza.nombre}
                            </h1>
                        </div>
                        <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[3.84vw]">
                            <Link className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px] group" href={`/${lang}/birras`}>
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
                                {dict.birras.beers}
                            </Link>
                            {lang == 'es' && (
                                <Link className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center" href={cerveza.urlBuy}>
                                    COMPRAR
                                </Link>
                            )}
                        </div>
                        <div className="description__wrapper flex flex-col">
                            
                            <p className={`text-white uppercase text-[2.82vw] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white' }} dangerouslySetInnerHTML={{ __html: cerveza.descripcion }} />

                            {lang === 'es' && (
                            <div className="propiedades__wrapper flex flex-row text-[2.82vw] pt-[3.84vw]">
                                <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>ALC. {cerveza.propiedades.alcohol}</span>
                                <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>IBU {cerveza.propiedades.ibu}</span>
                                <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`} style={{ color: cerveza.style?.textColor || 'white', borderColor: cerveza.style?.textColor || 'white' }}>{cerveza.propiedades.size} CC.</span>
                            </div>
                            )}
                            {lang === 'en' && (
                            <div className="propiedades__wrapper flex flex-row text-[2.82vw] pt-[3.84vw]">
                                <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>ALC. {cerveza.propiedades.alcohol}</span>
                                <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>FLOZ {cerveza.propiedades.floz}</span>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="product-box-2-mobile">
                        <div className="flex justify-center w-[100vw] h-[122.56vw] mt-[10vw]">
                            <div className="relative w-[57.94vw] h-[122.56vw]">
                                <Image
                                    src={cerveza.mainImage}
                                    style={{
                                        objectFit: 'cover',
                                    }}
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    {/* Renderiza el video si cerveza.info.videoInfo no es null, de lo contrario renderiza la imagen */}
                    {cerveza.info.videoInfo ? (
                        <div className="product-box-3-mobile w-[100vw] h-[95.64vw] relative mb-[4.61vw]">
                            <video
                                src={cerveza.info.videoInfo}
                                style={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                }}
                                autoPlay
                                playsInline
                                loop
                                muted
                            />
                            <div className="sticker-temple-amarillo absolute left-[5vw] md:hidden bottom-[9vw] md:right-[10vh] md:top-[30vh]">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="-rotate-[11.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
                                        <Image 
                                            src="/sticker-temple-amarrillo.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                        </div>
                    ) : (
                        <div className="product-box-3-mobile w-[100vw] h-[95.64vw] relative mb-[4.61vw]">
                            <Image
                                src={cerveza.info.imageInfo}
                                style={{
                                objectFit: 'cover',
                                }}
                                fill
                            />
                            <div className="sticker-temple-amarillo absolute left-[55vw] md:hidden bottom-[9vw] md:right-[10vh] md:top-[30vh]">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="-rotate-[11.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
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
                    
                    <div className="product-box-4-mobile mb-[4.61vw]">
                        <div className="text-box flex flex-col gap-y-[4.61vw] px-[5.12vw]">
                           
                            <p className={`text-white text-[3.33vw] uppercase ${GothamBook.className}`} dangerouslySetInnerHTML={{ __html: cerveza.info.bajada }} />
                           
                            <p className={`leading-[6.41vw] text-[6.41vw] uppercase `} style={{ color: cerveza.style?.color || 'white' }} dangerouslySetInnerHTML={{ __html: cerveza.info.destacado }} />
                        </div>
                    </div>
                    <VideoMobile cerveza={cerveza} />
                    {lang == 'es' && (
                        <div className="product-box-6-mobile">
                            <div className="relative h-full">
                                <div className="beers-content-wrapper flex flex-col justify-between">
                                    <div className="title">
                                        <h2 className="text-[10.25vw] uppercase" style={{ color: cerveza.style?.color || 'white' }}>
                                            BIRRAS
                                        </h2>
                                    </div>
                                    {cerveza.gridClasicas && (
                                    <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                        {data.gridClasicas.map((clasicasObj, index) => (
                                            <div className="beer-item py-[3.84vw] px-[0.76vw]" key={index}>
                                                <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                    <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                                                        <Image
                                                            src={clasicasObj.mainImage}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                            fill
                                                            
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    )}
                                    {cerveza.gridLimitadas && (
                                    <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                        {data.gridLimitadas.map((clasicasObj, index) => (
                                            <div className="beer-item py-[3.84vw] px-[0.76vw]" key={index}>
                                                <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                    <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                                                        <Image
                                                            src={clasicasObj.mainImage}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                            fill
                                                            
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    )}
                                    {cerveza.gridEspeciales && (
                                    <div className="beer-grid grid grid-cols-4 grid-rows-2">
                                        {data.gridEspeciales.map((clasicasObj, index) => (
                                            <div className="beer-item py-[3.84vw] px-[0.76vw]" key={index}>
                                                <Link href={`/${lang}/birras/${clasicasObj.slug}`}>
                                                    <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                                                        <Image
                                                            src={clasicasObj.mainImage}
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                            fill
                                                            
                                                        />
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                    )}
                                    <div className="beer-nav">
                                        <nav className="flex flex-wrap self-stretch gap-y-[2px]">
                                            {data.birras.map((birraObj, index) => (
                                            <span key={index} className={`py-[2px] px-[5px] text-[2.30vw] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} style={{ borderColor: cerveza.style?.textColor || 'white' }}  >
                                                <Link className=" hover:text-[#FCDB00] transition duration-300 ease-in-out" style={{ color: cerveza.style?.textColor || 'white' }}  href={`/${lang}/birras/${birraObj.slug}`}>
                                                {birraObj.title}
                                                </Link>
                                            </span>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {lang == 'en' && (
                        <div className="product-box-6-mobile relative h-full">
                            <div className="beers-content-wrapper flex flex-col justify-between">
                                <div className="title">
                                    <h2 className="text-[10.25vw] uppercase" style={{ color: cerveza.style?.color || 'white' }}>
                                        BEERS
                                    </h2>
                                </div>
                            </div>
                            <div className="beer-grid grid grid-cols-3 grid-rows-2">
                                {data.gridEn.map((enObj, index) => (
                                    <div className="beer-item py-[3.84vw] px-[0.76vw]" key={index}>
                                        <Link href={`/${lang}/birras/${enObj.slug}`}>
                                            <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                                                <Image
                                                    src={enObj.mainImage}
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                    fill
                                                    
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div className="beer-nav">
                                <nav className="flex flex-wrap self-stretch gap-y-[2px]">
                                    {data.gridEn.map((birraObj, index) => (
                                    <span key={index} className={`py-[2px] px-[5px] text-[2.30vw]  border-r-[1px] border-dotted border-white uppercase ${Knockout34.className}`} >
                                        <Link className="hover:text-[#FCDB00] transition duration-300 ease-in-out" style={{ color: cerveza.style?.textColor || 'white' }} href={`/${lang}/birras/${birraObj.slug}`}>
                                        {birraObj.title}
                                        </Link>
                                    </span>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    )}
                    <Footer />
                </section>
                
            </div>
        </>
    );
}