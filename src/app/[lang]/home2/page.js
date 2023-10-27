import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ScrollHorizontal from '../../../../components/home/ScrollHorizontal';
import Draggable from '../../../../components/common/Dragabble'
import Header from '../../../../components/common/header'
import { Knockout54UltraBold, Knockout34, Knockout54 } from '../layout'
import SmoothScroll from '../../../../components/common/SmoothScroll';

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
                                    <div className="row">
                                        <div className="column">
                                            <div className="box-2">
                                                <div className="flex flex-col items-end justify-start relative">
                                                    <div className="absolute top-10 z-10">
                                                        <div className="relative w-[25.07vh] h-[5.09vh]">
                                                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                                                <div className="relative w-[25.07vh] h-[5.09vh]">
                                                                    <Image 
                                                                    src="/temple-sticker.png"
                                                                    alt="Temple Beer"
                                                                    style={{
                                                                        objectFit: 'contain',
                                                                        objectPosition: 'top'
                                                                    }}
                                                                    fill
                                                                    />
                                                                </div>
                                                            </Draggable>
                                                            
                                                        </div>
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
                                                    <div className="relative w-[32.71vh] h-[29.60vh]">
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
                                                    src="https://s3-alpha-sig.figma.com/img/c1d4/f01c/e3a089ad5dfb1117c39f04ca8f8d509b?Expires=1698624000&Signature=LdmMRsVaO4-J2-jHv1TM8FkRqlpu~3FWtKs7D47xLJ5W9NgGmL4QueBWcebYbNHiIBsl1bDUp7cMh3FwluJ0GT9bguFNveh0CEXx6xP8GFtiu24rasn7KEXRRTybPIs4r5TJS~dplLy~O3DFYY91Hz6Wgvxq69O~CvekYOyvxpQQUJ7anAo2KPAHih98xTLv87FgisBojnFdk6cKq5bDyyY~kO6AyJ0UIo~~nwADkI9lQkl7Fd7hZ8q44FDW24xEjrlHK6HYpH01rPsy2pDBmo9KEnMwVaFnsrWR4ggAzY4epnvkZ4EpAtsJPgRgt0C3NH01zGvm4gbzbw4EQjDTJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
                            
                            <div className="column"></div>
                        </div>
                    </ScrollHorizontal>
                </SmoothScroll>
            </div>
        </>
      );
}
