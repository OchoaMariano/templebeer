import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ScrollHorizontal from '../../../components/home/ScrollHorizontal';
import Draggable from '../../../components/common/Dragabble'
import Header from '../../../components/common/header'
import { Knockout54UltraBold, Knockout34, Knockout54 } from './layout'
import SmoothScroll from '../../../components/common/SmoothScroll';

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
  

export default function Home2() {
    return (
        <>
            <Header  />
            <div className="desktop h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
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
                                                    <div className="absolute right-[27vh] top-[7vh] mb-4 mr-4 z-10">
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
        </>
      );
}
