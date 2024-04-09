import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ScrollHorizontal from '../../../components/home/ScrollHorizontal';
import ScrollHorizontalMobile from '../../../components/home/ScrollHorizontalMobile';
import PictureToVideoBox from '../../../components/home/PictureToVideoBox';
import BannerWithFloatingLinks from '../../../components/home/BannerWithFloatingLinks';
import Draggable from '../../../components/common/Dragabble'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/Footer';
import { Knockout54UltraBold, Knockout34, Knockout54, Marker } from './layout'
import { getDictionary } from '../../dictionaries';

async function getAllBirras(lang) {
    const respuesta = await fetch(`https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?locale=${lang}`, { cache: 'no-store' });
    return respuesta.json()
}

export default async function Home({params}) {
    const lang = params.lang
    const dict = await getDictionary(lang);
    const headerDic = dict.header;

    const allBirras =  await getAllBirras(lang);
    const orderAllBirras = [...allBirras.data];
    orderAllBirras.sort((a, b) => b.id - a.id);


    return (
        <>
            <Header dictonary={headerDic} />
            <div className="desktop h-screen bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <ScrollHorizontal>
                    <div className="row" data-scroll data-scroll-speed="-.1" data-scroll-offset="0,100%" data-scroll-event-progress="progressEvent">  
                        <div className="column">
                            <div className="main-box-1-wrapper">                               
                                <div className="beer-wrapper">
                                    <div className="flex items-center justify-center z-10 h-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
                                        <Link href={`${lang}/birras/wolf-ipa`} className="relative w-[34.70vh] h-[51.69vh]">
                                            {lang == 'es' && (
                                                <Image 
                                                    src="/nuestrasbirras/clasicas/wolf-ipa/wolf-ipa.png"
                                                    alt="Lata de Cerveza principal wolf ipa"
                                                    fill
                                                />
                                            )}
                                            {lang == 'en' && (
                                                <Image 
                                                    src="/nuestrasbirras/en/wolf-ipa/wolf-ipa.png"
                                                    alt="Lata de Cerveza principal wolf ipa"
                                                    fill
                                                />
                                            )}
                                        </Link>  
                                    </div>
                                    <div className="absolute -bottom-5 -right-12 mb-4 mr-4 z-10">
                                        <div className="relative w-[16.85vh] h-[15.86vh]">
                                            <Image
                                                src="/sticker-isologo.png"
                                                alt="Sticker de cerveza"
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <Image 
                                        src="/back-main-image.png"
                                        alt="Temple Beer background rosa"
                                        fill
                                    />
                                </div>
                                <div className="row">
                                    <div className="box-1 relative" >
                                        <h1 className={`text-white pl-[2vh] text-[7.08vh] Knockout54UltraBold elementoEfectoVelocidad ${Knockout54UltraBold.className}`}>
                                            <Link href={`${lang}/encuentro`} className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase">{dict.home.mainTitle.encuentro}</Link>, 
                                            <Link href={`${lang}/birras`} className="text-white hover:text-[#D51668] transition duration-300 ease-in-out uppercase"> {dict.home.mainTitle.birra} </Link> 
                                            {dict.home.mainTitle.y}
                                            <Link href={`${lang}/musica`} className="text-white hover:text-[#1F9996] transition duration-300 ease-in-out uppercase"> {dict.home.mainTitle.musica} </Link>
                                        </h1>
                                        <div className="absolute right-[13vh] top-5 mb-4 mr-4 z-10">
                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                <div className="rotate-[17deg] w-[10.48vh] h-[17.30vh] relative">
                                                    <Image 
                                                        src="/nuestrasbirras/sticker-cerveza.svg"
                                                        alt="Sticker Temple Beer Cerveza"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                        <div className="absolute right-0 mb-4 mr-4 z-10">
                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                <div className="rotate-[-10.5deg] w-[22.80vh] h-[4.53vh] relative">
                                                    <Image 
                                                        src="/sticker-temple-amarrillo.png"
                                                        alt="Sticker Temple Beer Amarillo"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                        <div className="absolute right-20 top-20 mb-4 mr-4 z-10">
                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                <div className="rotate-[-10.5deg] w-[20.67vh] h-[20.82vh] relative">
                                                    <Image 
                                                        src="/sticker-hand.png"
                                                        alt="Sticker Temple Beer Hand"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                </div>
                                <div className="row row-special-gap">
                                    <div className="column">
                                        <div className="box-2">
                                            <div className="flex flex-col items-end justify-start relative">
                                                <div className="absolute right-[27vh] top-[7vh] mb-4 mr-4 z-30">
                                                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                        <div className=" -rotate-[5deg] w-[25.07vh] h-[5.09vh] relative">
                                                            <Image 
                                                                src="/sticker-temple-rosa.png"
                                                                alt="Sticker Temple Beer Rosa"
                                                                fill 
                                                            />
                                                        </div>
                                                    </Draggable>
                                                </div>
                                                
                                                <div className="relative w-[32.71vh] h-[17.84vh]">
                                                    <Image 
                                                        src="/header-collage.png"
                                                        alt="Collage Temple Beer"
                                                        style={{
                                                        objectFit: 'contain',
                                                        objectPosition: 'top'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                                <div className="relative w-[32.71vh] h-[29.60vh] -top-2">
                                                <Image 
                                                    src="/art-beer.png"
                                                    alt="Sticker Temple Beer Art"
                                                    style={{
                                                    objectFit: 'contain',
                                                    objectPosition: 'top'
                                                    }}
                                                    fill
                                                />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box-3">
                                            <div className="nav__wrapper">
                                                <h1 className="text-4xl font-bold text-white text-[50px]">
                                                    <Link className={`text-white hover:text-[#D51668] transition duration-300 ease-in-out text-[7.08vh] uppercase ${Knockout54.className}`} href={`${lang}/birras`}>
                                                    {dict.home.beerNav.title}
                                                    </Link>
                                                </h1>
                                                {lang === 'es' && (
                                                    <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                                    {allBirras.data.map((birraObj, index) => (
                                                        <span key={index} className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase" 
                                                            href={`${lang}/birras/${birraObj.attributes.slug}`}>
                                                            {birraObj.attributes.nombre}
                                                            </Link>
                                                        </span>
                                                        ))}
                                                    </nav>
                                                )}
                                                {lang === 'en' && (
                                                    <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                                    {orderAllBirras.map((birraObj, index) => (
                                                        <span key={index} className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase" 
                                                            href={`${lang}/birras/${birraObj.attributes.slug}`}>
                                                            {birraObj.attributes.nombre}
                                                            </Link>
                                                        </span>
                                                        ))}
                                                    </nav>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-4">
                                        <PictureToVideoBox />
                                        
                                        <div className="picture-box-2">
                                            <Image 
                                                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRveTUxeDk5cHZmeWFtNWJreTNzM2t0NTgxbDEzOHJjZ3h2YzVhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KBw4MkRoLLLzmK5NTp/giphy-downsized-large.gif"
                                                alt="Temple Beer Gif"
                                                fill
                                                style={{
                                                objectFit: 'cover',
                                                }}
                                                unoptimized={true}
                                            />
                                        </div>
                                        <div className="picture-box-3">
                                            <Image 
                                                src="/frame-4.png"
                                                alt="Temple Beer Frame"
                                                fill
                                                style={{
                                                objectFit: 'cover',
                                                }}
                                                unoptimized={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                            
                        <div className="column">
                            <div className="row-alt">
                                <div className="box-5">
                                    {lang == 'en' && (
                                        <a href="https://www.instagram.com/templemiami/" className="w-inline-block group pt-[3.96vh]" target="_blank">
                                            <div className="relative w-[8.07vh] h-[8.21vh]">
                                                <Image  
                                                    src="/qrcode.png"
                                                    alt="icon qr code"
                                                    fill
                                                />
                                            </div>
                                            <div className="div-block-5">
                                                <div className="div-block-6 w-[3.68vh] h-[3.82vh] mr-[1vh] relative group-hover:rotate-90 transition-transform duration-500">
                                                    <Image 
                                                        src="/arrow-qr.svg"
                                                        alt="icon flecha"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                                <div className="div-block-7 w-[3.68vh] h-[3.82vh] relative p-2 group-hover:rotate-360 transition-transform duration-500">
                                                    <Image 
                                                        src="/instagram-qr.svg"
                                                        alt="icon instagram"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    {lang == 'es' && (
                                        <a href="https://www.instagram.com/templecerveza/" className="w-inline-block group pt-[3.96vh]" target="_blank">
                                            <div className="relative w-[8.07vh] h-[8.21vh]">
                                                <Image  
                                                    src="/qrcode.png"
                                                    alt="icon qr code"
                                                    fill
                                                />
                                            </div>
                                            <div className="div-block-5">
                                                <div className="div-block-6 w-[3.68vh] h-[3.82vh] mr-[1vh] relative group-hover:rotate-90 transition-transform duration-500">
                                                    <Image 
                                                        src="/arrow-qr.svg"
                                                        alt="icon flecha"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                                <div className="div-block-7 w-[3.68vh] h-[3.82vh] relative p-2 group-hover:rotate-360 transition-transform duration-500">
                                                    <Image 
                                                        src="/instagram-qr.svg"
                                                        alt="icon instagram"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    )}
                                    
                                </div>
                                <div className="box-6">
                                    <Image 
                                        src="/box-6.png"
                                        alt="Temple Beer box"
                                        fill
                                    />
                                </div>
                                <div className="box-7">
                                    <Image 
                                        src="/box-7.png"
                                        alt="Temple Beer box"
                                        fill
                                    />
                                </div>
                                <div className="box-8">
                                    <div className="div-block-8 w-[32.86vh] h-[25.49vh] relative">
                                        <Image 
                                            src="/box-8.png"
                                            alt="Temple Beer box"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill
                                        />
                                    </div>
                                    <div className="absolute right-1 top-5 mb-4 mr-4 z-10">
                                        <Draggable initialPosition={{ x: 0, y: 0 }}>
                                            <div className="rotate-[17deg] w-[9.69vh] h-[9.69vh] relative">
                                                <Image 
                                                    src="/sticker-rosa-tempple.png"
                                                    alt="Sticker Temple Beer Rosa"
                                                    fill 
                                                />
                                            </div>
                                        </Draggable>
                                    </div>
                                    <div className="absolute right-[18vh] top-[25vh] mb-4 mr-4 z-10">
                                        <Draggable initialPosition={{ x: 0, y: 0 }}>
                                            <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                                                <Image 
                                                    src="/sticker-temple-verde.png"
                                                    alt="Sticker Temple Beer Verde"
                                                    fill 
                                                />
                                            </div>
                                        </Draggable>
                                    </div>
                                    <div className="absolute right-[36vh] top-[22vh] mb-4 mr-4 z-10">
                                        <Draggable initialPosition={{ x: 0, y: 0 }}>
                                            <div className=" w-[12.32vh] h-[12.18vh] relative">
                                                <Image 
                                                    src="/sticker-musica.png"
                                                    alt="Sticker Temple Beer Musica"
                                                    fill 
                                                />
                                            </div>
                                        </Draggable>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="box-9">
                                    <div className="w-[76vh] h-[17.98vh] relative">
                                        {lang == 'es' && (
                                            <h3 className={` text-[#D41768] text-[9.09vh] uppercase -tracking-[.42vh] -rotate-[4.41deg] ${Marker.className} leading-[10vh]`}>
                                                {dict.home.encuentros.frase}
                                            </h3>
                                        )}
                                        {lang == 'en' && (
                                            <h3 className={` text-[#D41768] text-[8.09vh] uppercase -tracking-[.42vh] -rotate-[4.41deg] ${Marker.className} leading-[7vh]`}>
                                                {dict.home.encuentros.frase}
                                            </h3>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="box-10 relative z-20">
                                    <Link href={`${lang}/encuentro`} className="encuentros w-[44.61vh] h-[61.89vh] -top-[34.5vh] absolute">
                                        <Image 
                                            src="/encuentros-back.png"
                                            alt="Temple Beer Encuentros"
                                            style={{
                                                objectFit: 'contain',
                                                objectPosition: 'center'
                                            }}
                                            fill
                                        />
                                    </Link>
                                    <Link href={`${lang}/encuentro`} >
                                        {lang == 'es' && (
                                            <h3 className={`absolute text-[#192F5D] text-[3.82vh] uppercase top-[14vh] left-[11.5vh] -tracking-[.4vh] -rotate-[4.41deg] z-[100] ${Marker.className} cursor-pointer`}>
                                                {dict.home.encuentros.link}
                                            </h3>
                                        )}
                                        {lang == 'en' && (
                                            <h3 className={`absolute text-[#192F5D] text-[3.82vh] uppercase top-[14vh] left-[15.5vh] -tracking-[.4vh] -rotate-[4.41deg] z-[100] ${Marker.className} cursor-pointer`}>
                                                {dict.home.encuentros.link}
                                            </h3>
                                        )}
                                    </Link>
                                </div>
                                <div className="box-11 pt-[6.6vh] pl-[4vh] relative">
                                    <BannerWithFloatingLinks />
                                    <div className="absolute left-[28vh] top-8 mb-4 mr-4 z-20">
                                        <div className="group pl-[3.07vw] md:pl-[6.37vh] flex flex-row cursor-pointer items-center">
                                            <div className="relative w-[13.33vw] h-[16.15vw] md:w-[12.06vh] md:h-[15.04vh] group-hover:rotate-[10deg] transition-transform duration-500">
                                                <Image
                                                    src="/musica/parlante.png"
                                                    alt="Sticker Temple Beer Parlante"
                                                    fill
                                                />
                                            </div>
                                            <div className="flex flex-col justify-between">
                                                <div className="absolute -right-[5.2vh] -top-[4vh] w-[9vw] h-[9vw] md:w-[8.62vh] md:h-[8.62vh] group-hover:-rotate-[18deg] transition-transform duration-100 -rotate-[40deg]">
                                                    <Image
                                                        src="/musica/sound.png"
                                                        alt="Sticker Temple Beer Sound"
                                                        fill
                                                    />
                                                </div>
                                                <div className="absolute -bottom-[4vh] -right-[5.2vh] w-[9vw] h-[9vw] md:w-[8.62vh] md:h-[8.62vh] group-hover:rotate-[18deg] transition-transform duration-100 rotate-[40deg]">
                                                    <Image
                                                        src="/musica/sound.png"
                                                        alt="Sticker Temple Beer Sound"
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="box-12 relative z-10">
                                    <div className="beer-png w-[18.55vh] h-[60.62vh] -top-[30.82vh] right-[0vh] absolute">
                                        <Image 
                                            src="/vaso-birra.png"
                                            alt="Sticker Temple Beer Vaso Birra"
                                            style={{
                                                objectFit: 'contain',
                                            }}
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollHorizontal>    
            </div>

            <div className="mobile bg-cover bg-center block md:hidden overflow-hidden" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="mobile-box-1">
                    <div className="beer-wrapper-mobile">
                        <div className="flex justify-center relative w-[90.51vw] h-[55.89vw]">
                            <div className="flex items-center justify-center z-10 h-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
                                <Link href={`${lang}/birras/wolf-ipa`} className="relative w-[29.74vw] h-[41.28vw]">
                                    {lang == 'es' && (
                                        <Image 
                                            src="/nuestrasbirras/clasicas/wolf-ipa/wolf-ipa.png"
                                            alt="Lata de Cerveza Principal Wolf Ipa"
                                            fill
                                        />
                                    )}
                                    {lang == 'en' && (
                                        <Image 
                                            src="/nuestrasbirras/en/wolf-ipa/wolf-ipa.png"
                                            alt="Lata de Cerveza Principal Wolf Ipa"
                                            fill
                                        />
                                    )}
                                </Link>  
                            </div>
                            <div className="absolute -bottom-10 right-2 mb-4 mr-4 z-10">
                                <div className="relative w-[21.53vw] h-[20.25vw]">
                                    <Image
                                        src="/sticker-isologo.png"
                                        alt="Sticker Isologo"
                                        fill
                                    />
                                </div>
                            </div>
                            <Image 
                                src="/back-main-image.png"
                                alt="Temple Beer Image"
                                fill
                            />
                        </div>
                    </div>
                    <div className="nav-title-mobile">
                        <div className="title-wrapper flex relative">
                            <h1 className={`text-white text-[10.25vw] Knockout54UltraBold elementoEfectoVelocidad ${Knockout54UltraBold.className}`}>
                                <Link href={`${lang}/encuentro`} className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase">{dict.home.mainTitle.encuentro}</Link> 
                                <Link href={`${lang}/birras`} className="text-white hover:text-[#D51668] transition duration-300 ease-in-out uppercase"> {dict.home.mainTitle.birra} </Link>
                                <br></br>
                                <Link href={`${lang}/musica`} className="text-white hover:text-[#1F9996] transition duration-300 ease-in-out uppercase"> {dict.home.mainTitle.musica}</Link>
                            </h1>
                            <div className="absolute right-32 bottom-16">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[17.31vw] h-[17.83vw] relative">
                                        <Image 
                                            src="/nuestrasbirras/sticker-cerveza.svg"
                                            alt="Sticker Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="line-separador mt-[5.12vw] mb-[5.12vw]">
                    <div className="bg-white w-full h-[1px]"></div>
                </div>
                <div className="mobile-box-2">
                    <div className="birras-wrapper-mobile">
                        <div className="column-mobile w-[32.56vw] h-[60.25vw]">
                            <div className="flex flex-col items-end justify-start relative">
                                <div className="absolute left-[6vw] top-[9vw] z-10">
                                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                                        <div className="-rotate-[5deg] w-[22.02vw] h-[4.45vw] relative">
                                            <Image 
                                                src="/sticker-temple-rosa.png"
                                                alt="Sticker Temple Beer Rosa"
                                                fill 
                                            />
                                        </div>
                                    </Draggable>
                                </div>
                                
                                <div className="relative w-[32.56vw] h-[23.84vw] rounded-tl-[7.69vw] overflow-hidden">
                                    <Image 
                                        src="/header-collage.png"
                                        alt="Sticker Temple Beer Collage"
                                        style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                        }}
                                        fill
                                    />
                                </div>
                                <div className="relative w-[32.56vw] h-[36.41vw]">
                                <Image 
                                    src="/art-beer.png"
                                    alt="Sticker Temple Beer Art Beer"
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                    }}
                                    fill
                                />
                                </div>
                            </div>
                        </div>
                        <div className="column-mobile">
                            <div className="birras-nav w-[55.64vw] h-[64.25vw]">
                                <h1 className="leading-[7vw]">
                                    <Link className={`text-white uppercase hover:text-[#D51668] transition duration-300 ease-in-out text-[6.9vw] ${Knockout54.className}`} href={`${lang}/birras`}>
                                        {dict.home.beerNav.title}
                                    </Link>
                                </h1>
                                {lang == 'es' && (
                                    <nav className="flex flex-wrap self-stretch">
                                    {allBirras.data.map((birraObj, index) => (
                                        <span key={index} className={`text-[2.30vw] py-[0.51vw] px-[1.28vw] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out" href={`${lang}/birras/${birraObj.attributes.slug}`}>
                                            {birraObj.attributes.nombre}
                                            </Link>
                                        </span>
                                    ))}
                                    </nav>
                                )}
                                {lang == 'en' && (
                                    <nav className="flex flex-wrap self-stretch">
                                    {allBirras.data.map((birraObj, index) => (
                                        <span key={index} className={`text-[2.30vw] py-[0.51vw] px-[1.28vw] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
                                            <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out" href={`${lang}/birras/${birraObj.attributes.slug}`}>
                                            {birraObj.attributes.nombre}
                                            </Link>
                                        </span>
                                        ))}
                                    </nav>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-box-3 mt-[7.69vw] mb-[7.69vw]">
                    <ScrollHorizontalMobile>
                        <div className="row-especial">
                            <div className="column-especial relative w-[62.82vw] h-[94.87vw]">
                                <Image 
                                    src="/frame-2.jpg"
                                    alt="Temple Beer Frame 2"
                                    style={{
                                    objectFit: 'cover',
                                    }}
                                    fill
                                    unoptimized={true}
                                />
                            </div>
                            <div className="column-especial relative w-[62.82vw] h-[94.87vw]">
                                <Image 
                                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRveTUxeDk5cHZmeWFtNWJreTNzM2t0NTgxbDEzOHJjZ3h2YzVhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KBw4MkRoLLLzmK5NTp/giphy-downsized-large.gif"
                                    alt="Temple Beer Gif"
                                    fill
                                    style={{
                                    objectFit: 'cover',
                                    }}
                                    unoptimized={true}
                                />
                            </div>
                            <div className="column-especial relative w-[62.82vw] h-[94.87vw]">
                                <Image 
                                    src="/frame-4.png"
                                    alt="Temple Beer Frame 4"
                                    fill
                                    style={{
                                    objectFit: 'cover',
                                    }}
                                    unoptimized={true}
                                />
                            </div>
                        </div>   
                    </ScrollHorizontalMobile>                  
                </div>
                <div className="mobile-box-4 flex flex-col">
                    <div className="flex flex-row  gap-x-[2.56vw]">
                        <div className="flex justify-end w-[43.58vw] h-[17.69vw] relative">
                            {lang == 'en' && (
                                <a href="https://www.instagram.com/templemiami/" className="flex flex-row group items-end gap-x-[3.33vw]" target="_blank">
                                    <div className="div-block-6 w-[6.66vw] h-[8.46vw] relative group-hover:rotate-90 transition-transform duration-500">
                                        <Image 
                                            src="/arrow-qr.svg"
                                            alt="icon qr code"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill
                                        />
                                    </div>
                                    <div className="w-[17.43vw] h-[17.69vw] relative">
                                        <Image 
                                            src="/qrcode.png"
                                            alt="icon qr code"
                                            style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                            }}
                                            fill
                                        /> 
                                    </div>
                                </a>
                            )}
                            {lang == 'es' && (
                                <a href="https://www.instagram.com/templecerveza/" className="flex flex-row group items-end gap-x-[3.33vw]" target="_blank">
                                    <div className="div-block-6 w-[6.66vw] h-[8.46vw] relative group-hover:rotate-90 transition-transform duration-500">
                                        <Image 
                                            src="/arrow-qr.svg"
                                            alt="icon qr code"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill
                                        />
                                    </div>
                                    <div className="w-[17.43vw] h-[17.69vw] relative">
                                        <Image 
                                            src="/qrcode.png"

                                            alt="icon qr code"
                                            style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                            }}
                                            fill
                                        /> 
                                    </div>
                                </a>
                            )}
                            <div className="absolute left-0 -top-[10vw] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[-10.5deg] w-[41.28vw] h-[8.20vw] relative">
                                        <Image 
                                            src="/sticker-temple-amarrillo.png"
                                            alt="Sticker Temple Beer Amarillo"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            <div className="absolute -right-[10vw] -top-[30vw] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[-10.5deg] w-[23.58vw] h-[23.84vw] relative">
                                        <Image 
                                            src="/sticker-hand.png"
                                            alt="Sticker Temple Beer Hand"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                        </div>
                        <div className="column">
                            <div className="w-[43.58vw] h-[17.69vw] relative">
                                <Image 
                                    src="/box-6.png"
                                    alt="Sticker Temple Beer Box 6"
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                    }}
                                    fill
                                />                     
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-x-[2.56vw]">
                        <div className="column">
                            <div className="w-[43.58vw] h-[50.51vw] relative">
                                <Image 
                                    src="/box-7.png"
                                    alt="Temple Beer Box 7"
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                    }}
                                    fill
                                />                     
                            </div>
                        </div>
                        <div className="column">
                            <div className="w-[43.58vw] h-[50.51vw] relative">
                                <Image 
                                    src="/box-8.png"
                                    alt="Temple Beer Box 8"
                                    style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                    }}
                                    fill
                                />
                                <div className="absolute -left-[10vw] bottom-[20vw] z-10">
                                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                                        <div className="rotate-[-10.5deg] w-[22.30vw] h-[22.05vw] relative">
                                            <Image 
                                                src="/sticker-musica.png"
                                                alt="Sticker Temple Beer Musica"
                                                fill 
                                            />
                                        </div>
                                    </Draggable>
                                </div>
                                <div className="absolute right-[10vw] bottom-[5vw] z-10">
                                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                                        <div className="rotate-[17deg] w-[12.24vw] h-[12.24vw] relative">
                                            <Image 
                                                src="/sticker-rosa-tempple.png"
                                                alt="Sticker Temple Beer Rosa"
                                                fill 
                                            />
                                        </div>
                                    </Draggable>
                                </div>                     
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-box-5 flex flex-col mt-[5.12vw] mb-[5.12vw] relative">
                    <div className="row-1 flex flex-row items-end">
                        <Link href={`${lang}/encuentro`} className="w-[39.74vw] h-[53.07vw] relative">
                            <Image 
                                src="/encuentros-back.png"
                                alt="Encuentro"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                                fill
                            />
                            <h3 className={`absolute text-[#192F5D] text-[3vw] uppercase top-[42vw] left-[11.8vw] -tracking-[.2vw] -rotate-[4.41deg] ${Marker.className}`}>{dict.home.encuentros.link}</h3>
                        </Link>
                        <div className="w-[39.74vw] h-[26.07vw] relative flex items-end mb-[7vw]">
                            <h3 className={` text-[#D41768] text-[6.92vw] uppercase -tracking-[.42vw] -rotate-[4.41deg] ${Marker.className} leading-[6vw]`}>
                                {dict.home.encuentros.frase}
                            </h3>
                            
                            <div className="absolute right-[40vw] -top-[20vw] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[9deg] w-[37.17vw] h-[7.53vw] relative">
                                        <Image 
                                            src="/sticker-temple-verde.png"
                                            alt="Sticker Temple Beer Verde"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row-2 h-[40.25vw] relative">
                        <BannerWithFloatingLinks />
                        
                        <div className="absolute left-[0] -top-[12vw] z-20">
                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                <div className="w-[29.76vw] h-[41.12vw] relative">
                                    <Image 
                                        src="/parlante-sticker.png"
                                        alt="Sticker Temple Beer Parlante"
                                        fill 
                                    />
                                </div>
                            </Draggable>
                        </div>
                    </div>
                    <div className="beer-png w-[25.38vw] h-[83.33vw] bottom-[8vw] right-[0vw] absolute z-10">
                        <Image 
                            src="/vaso-birra.png"
                            alt="Sticker Vaso Birra Temple Beer"
                            style={{
                                objectFit: 'contain',
                                
                            }}
                            fill
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
      );
}
