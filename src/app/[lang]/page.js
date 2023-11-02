import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ScrollHorizontal from '../../../components/home/ScrollHorizontal';
import ScrollHorizontalMobile from '../../../components/home/ScrollHorizontalMobile';
import Draggable from '../../../components/common/Dragabble'
import Header from '../../../components/common/header'
import Footer from '../../../components/common/Footer';
import { Knockout54UltraBold, Knockout34, Knockout54 } from './layout'
import SmoothScroll from '../../../components/common/SmoothScroll';

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
        { title: "ALPHA", id: 19, slug: "proyecto-alpha-1" },
        { title: "ALPHA II", id: 20, slug: "proyecto-alpha-2" },
        { title: "ALPHA BARRICA", id: 21, slug: "alpha-barrica-1" },
        { title: "ALPHA STOUT", id: 22, slug: "alpha-imperial-stout" }
    ]
  };
  

export default function Home2() {
    return (
        <>
            <Header  />
            <div className="desktop h-screen bg-cover bg-center hidden md:block" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <SmoothScroll>
                    <ScrollHorizontal>
                        <div className="row" data-scroll data-scroll-speed="-.1" data-scroll-offset="0,100%" data-scroll-event-progress="progressEvent">  
                            <div className="column">
                                <div className="main-box-1-wrapper">
                                    <div className="beer-wrapper">
                                        <div className="flex items-center justify-center z-10 h-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
                                            <div className="relative w-[34.70vh] h-[51.69vh]">
                                                <Image 
                                                    src="/birra-wolf-ipa.png"
                                                    alt="Lata de Cerveza"
                                                    fill
                                                />
                                            </div>  
                                        </div>
                                        <div className="absolute -bottom-5 -right-12 mb-4 mr-4 z-10">
                                            <div className="relative w-[16.85vh] h-[15.86vh]">
                                                <Image
                                                    src="/sticker-isologo.png"
                                                    alt="Sticker"
                                                    fill
                                                />
                                            </div>
                                        </div>
                                        <Image 
                                            src="/back-main-image.png"
                                            alt="Temple Beer"
                                            fill
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="box-1 relative" >
                                            <h1 className={`text-white text-[7.08vh] Knockout54UltraBold elementoEfectoVelocidad ${Knockout54UltraBold.className}`}>
                                                <Link href='/encuentro' className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out">ENCUENTRO</Link>, 
                                                <Link href='/birras' className="text-white hover:text-[#D51668] transition duration-300 ease-in-out"> BIRRA </Link> 
                                                Y  
                                                <Link href='/musica' className="text-white hover:text-[#1F9996] transition duration-300 ease-in-out"> MÚSICA</Link>
                                            </h1>
                                            <div className="absolute right-52 top-5 mb-4 mr-4 z-10">
                                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                    <div className="rotate-[17deg] w-[10.48vh] h-[17.30vh] relative">
                                                        <Image 
                                                            src="/nuestrasbirras/sticker-cerveza.svg"
                                                            alt="Temple Beer"
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
                                                            alt="Temple Beer"
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
                                                            alt="Temple Beer"
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
                                                                  alt="Temple Beer"
                                                                  fill 
                                                              />
                                                          </div>
                                                      </Draggable>
                                                    </div>
                                                   
                                                    <div className="relative w-[32.71vh] h-[17.84vh]">
                                                        <Image 
                                                            src="/header-collage.png"
                                                            alt="Temple Beer"
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
                                                        alt="Temple Beer"
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
                                                        <Link className={`text-white hover:text-[#D51668] transition duration-300 ease-in-out text-[7.08vh] ${Knockout54.className}`} href="/birras">
                                                        NUESTRAS BIRRAS
                                                        </Link>
                                                    </h1>
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
                                        <div className="box-4">
                                            <div className="picture-box-1">
                                                <Image 
                                                    src="/frame-2.jpg"
                                                    alt="Temple Beer"
                                                    style={{
                                                    objectFit: 'cover',
                                                    }}
                                                    fill
                                                    unoptimized={true}
                                                />
                                            </div>
                                            <div className="picture-box-2">
                                                <Image 
                                                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRveTUxeDk5cHZmeWFtNWJreTNzM2t0NTgxbDEzOHJjZ3h2YzVhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KBw4MkRoLLLzmK5NTp/giphy-downsized-large.gif"
                                                    alt="Temple Beer"
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
                                                    alt="Temple Beer"
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
                                        <a href="#" className="w-inline-block group pt-[3.96vh]">
                                            <div className="relative w-[8.07vh] h-[8.21vh]">
                                                <Image  
                                                    src="/qrcode.png"
                                                    fill
                                                />
                                            </div>
                                            <div className="div-block-5">
                                                <div className="div-block-6 w-[3.68vh] h-[3.82vh] mr-[1vh] relative group-hover:rotate-90 transition-transform duration-500">
                                                    <Image 
                                                        src="/arrow-qr.svg"
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
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="box-6">
                                        <Image 
                                            src="/box-6.png"
                                            fill
                                        />
                                    </div>
                                    <div className="box-7">
                                        <Image 
                                            src="/box-7.png"
                                            fill
                                        />
                                    </div>
                                    <div className="box-8">
                                        <div className="div-block-8 w-[32.86vh] h-[25.49vh] relative">
                                            <Image 
                                                src="/box-8.png"
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
                                                        alt="Temple Beer"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                        <div className="absolute right-52 top-[25vh] mb-4 mr-4 z-10">
                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                                                    <Image 
                                                        src="/sticker-temple-verde.png"
                                                        alt="Temple Beer"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="box-9">
                                        <div className="w-[74vh] h-[17.98vh] relative">
                                            <Image  
                                                src="/frase.png"
                                                fill
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="box-10 relative z-20">
                                        <div className="encuentros w-[44.61vh] h-[61.89vh] -top-[34.5vh] absolute">
                                            <Image 
                                                src="/encuentrosencuentros.png"
                                                style={{
                                                    objectFit: 'contain',
                                                    objectPosition: 'center'
                                                }}
                                                fill
                                            />
                                        </div>
                                    </div>
                                    <div className="box-11 pt-[5.06vh] pl-[4vh] relative">
                                        <div className="banner-wrapper relative overflow-hidden">
                                            <div className="banner-content " style={{ animation: 'moveBanner 10s linear infinite', willChange: 'transform' }}>
                                                <div className="banner" style={{ transformStyle: 'preserve-3d' }}>
                                                    <Image 
                                                        src="/playlists.jpg"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                                <div className="banner" style={{ transformStyle: 'preserve-3d' }}>
                                                    <Image 
                                                        src="/playlists.jpg"
                                                        style={{
                                                            objectFit: 'cover',
                                                            objectPosition: 'center'
                                                        }}
                                                        fill
                                                    />
                                                </div>
                                                
                                            </div>  
                                            
                                        </div>
                                        <div className="absolute left-[34vh] -top-8 mb-4 mr-4 z-20">
                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                <div className="w-[19.56vh] h-[27.46vh] relative">
                                                    <Image 
                                                        src="/parlante-sticker.png"
                                                        alt="Temple Beer"
                                                        fill 
                                                    />
                                                </div>
                                            </Draggable>
                                        </div>
                                    </div>
                                    <div className="box-12 relative">
                                        <div className="beer-png w-[18.55vh] h-[60.62vh] -top-[30.82vh] right-[0vh] absolute">
                                            <Image 
                                                src="/vaso-birra.png"
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
                </SmoothScroll>
            </div>
            <div className="mobile bg-cover bg-center block md:hidden overflow-hidden" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="mobile-box-1">
                    <div className="beer-wrapper-mobile">
                        <div className="flex justify-center relative w-[90.51vw] h-[55.89vw]">
                            <div className="flex items-center justify-center z-10 h-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
                                <div className="relative w-[29.74vw] h-[41.28vw]">
                                    <Image 
                                        src="/birra-wolf-ipa.png"
                                        alt="Lata de Cerveza"
                                        fill
                                    />
                                </div>  
                            </div>
                            <div className="absolute -bottom-10 right-2 mb-4 mr-4 z-10">
                                <div className="relative w-[21.53vw] h-[20.25vw]">
                                    <Image
                                        src="/sticker-isologo.png"
                                        alt="Sticker"
                                        fill
                                    />
                                </div>
                            </div>
                            <Image 
                                src="/back-main-image.png"
                                alt="Temple Beer"
                                fill
                            />
                        </div>
                    </div>
                    <div className="nav-title-mobile">
                        <div className="title-wrapper flex relative">
                            <h1 className={`text-white text-[10.25vw] Knockout54UltraBold elementoEfectoVelocidad ${Knockout54UltraBold.className}`}>
                                <Link href='/encuentro' className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out">ENCUENTRO</Link> 
                                <Link href='/birras' className="text-white hover:text-[#D51668] transition duration-300 ease-in-out"> BIRRA </Link>
                                <Link href='/musica' className="text-white hover:text-[#1F9996] transition duration-300 ease-in-out"> MÚSICA</Link>
                            </h1>
                            <div className="absolute right-32 bottom-16">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[17.31vw] h-[17.83vw] relative">
                                        <Image 
                                            src="/nuestrasbirras/sticker-cerveza.svg"
                                            alt="Temple Beer"
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
                                                alt="Temple Beer"
                                                fill 
                                            />
                                        </div>
                                    </Draggable>
                                </div>
                                
                                <div className="relative w-[32.56vw] h-[23.84vw] rounded-tl-[7.69vw] overflow-hidden">
                                    <Image 
                                        src="/header-collage.png"
                                        alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                            <div className="birras-nav w-[55.64vw] h-[60.25vw]">
                                <h1 className="leading-[7vw]">
                                    <Link className={`text-white hover:text-[#D51668] transition duration-300 ease-in-out text-[6.9vw] ${Knockout54.className}`} href="/birras">
                                        NUESTRAS BIRRAS
                                    </Link>
                                </h1>
                                <nav className="flex flex-wrap self-stretch">
                                    {data.birras.map((birraObj, index) => (
                                    <span key={index} className={`text-[2.30vw] py-[0.51vw] px-[1.28vw] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`} >
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
                <div className="mobile-box-3 mt-[7.69vw] mb-[7.69vw]">
                    <ScrollHorizontalMobile>
                        <div className="row-especial">
                            <div className="column-especial relative w-[62.82vw] h-[94.87vw]">
                                <Image 
                                    src="/frame-2.jpg"
                                    alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                            <a href="#" className="flex flex-row group items-end gap-x-[3.33vw]">
                                <div className="div-block-6 w-[6.66vw] h-[8.46vw] relative group-hover:rotate-90 transition-transform duration-500">
                                    <Image 
                                        src="/arrow-qr.svg"
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
                                        alt="Temple Beer"
                                        style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                        }}
                                        fill
                                    /> 
                                </div>
                            </a>
                            <div className="absolute left-0 -top-[10vw] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[-10.5deg] w-[41.28vw] h-[8.20vw] relative">
                                        <Image 
                                            src="/sticker-temple-amarrillo.png"
                                            alt="Temple Beer"
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
                                            alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                                    alt="Temple Beer"
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
                                                alt="Temple Beer"
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
                                                alt="Temple Beer"
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
                        <div className="w-[39.74vw] h-[53.07vw] relative">
                            <Image 
                                src="/encuentrosencuentros.png"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                                fill
                            />
                        </div>
                        <div className="w-[39.74vw] h-[26.07vw] relative flex items-end mb-[7vw]">
                            <Image 
                                src="/frase-mobile.png"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                                fill
                            />
                            <div className="absolute right-[40vw] -top-[20vw] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[9deg] w-[37.17vw] h-[7.53vw] relative">
                                        <Image 
                                            src="/sticker-temple-verde.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row-2 h-[40.25vw] relative">
                        <div className="banner-wrapper relative overflow-hidden">
                            <div className="banner-content " style={{ animation: 'moveBanner 10s linear infinite', willChange: 'transform' }}>
                                <div className="banner" style={{ transformStyle: 'preserve-3d' }}>
                                    <Image 
                                        src="/playlists.jpg"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        fill
                                    />
                                </div>
                                <div className="banner" style={{ transformStyle: 'preserve-3d' }}>
                                    <Image 
                                        src="/playlists.jpg"
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center'
                                        }}
                                        fill
                                    />
                                </div>
                                
                            </div>    
                        </div>
                        <div className="absolute left-[0] -top-[10vw] z-20">
                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                <div className="w-[23.76vw] h-[35.12vw] relative">
                                    <Image 
                                        src="/parlante-sticker.png"
                                        alt="Temple Beer"
                                        fill 
                                    />
                                </div>
                            </Draggable>
                        </div>
                    </div>
                    <div className="beer-png w-[25.38vw] h-[83.33vw] bottom-[8vw] right-[0vw] absolute">
                        <Image 
                            src="/vaso-birra.png"
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
