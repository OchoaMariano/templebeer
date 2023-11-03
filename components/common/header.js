'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

  return (
    <header className="header__temple bg-transparent absolute md:fixed w-full z-[100] top-0">
        <div className="header__temple-wrapper">
            <div className="wrapper__logo">
                <Link href="/">
                    <div className="relative w-[31.53vw] h-[6.89vw] md:w-[18.13vh] md:h-[4.1vh]">
                        <Image
                            src="/logo-templebeer.png"
                            alt="Temple Beer"
                            fill
                        />
                    </div>
                </Link>
            </div>
            <div className="wrapper__content-nav hidden md:flex">
                <div className="main__nav" >
                    <Link href="/birras" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Birras
                    </Link>
                    <Link href="/bares" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Bares
                    </Link>
                    <Link href="/encuentro" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Encuentro
                    </Link>
                    <Link href="/musica" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Música
                    </Link>
                    <a href="https://diamond-hamburger-c59.notion.site/0f69945dbb6247a1b08f8eae47bb2442?v=bdfe9a6a777c4281adda7ea36cf7d43c" target="_blank" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Temple Academy
                    </a>
                </div>
                <div className="hidden xl:block divisor h-[21px] w-[1px] bg-white"></div>
                <div className="hidden xl:flex rrss__nav">
                    <a href='https://www.instagram.com/templecerveza/' target='_blank'>
                        <Image
                            src="/instagram-icon.svg"
                            alt="Instagram"
                            width={16}
                            height={16}
                        />
                    </a>
                    <a href='https://www.tiktok.com/@templecerveza' target='_blank'>
                        <Image
                            src="/tik-tok-icon.svg"
                            alt="Tik-Tok"
                            width={12}
                            height={14}
                        />
                    </a>
                    <a href='https://encasa.temple.com.ar/' target='_blank' className='button_nav hover:bg-[#FCDB00] hover:text-black hover:border-[#ffffff] transition duration-300 ease-in-out'>
                        Shop
                    </a>
                </div>
                <div className="hidden xl:block divisor h-[21px] w-[1px] bg-white"></div>
                <div className="hidden xl:flex lang__nav">
                    <Image
                        src="/bandera-arg.svg"
                        alt="Tik-Tok"
                        width={24}
                        height={17}
                    />
                    <Image
                        src="/bandera-us.svg"
                        alt="Tik-Tok"
                        width={24}
                        height={17}
                    />
                    <Image
                        src="/bandera-es.svg"
                        alt="Tik-Tok"
                        width={24}
                        height={17}
                    />
                </div>
                
            </div>
            <div className="wrapper__nav-mobile flex md:hidden">
                <div className="menu__icon relative menu-button" onClick={toggleMenu}>
                    <Image src='/nav-mobile.png' width={44} height={44} />
                </div>
            </div>
        </div>
        {isMenuOpen && (
        <div className={`menu ${isMenuOpen ? 'menuOpen' : ''}`}>
            <div className="flex flex-col pr-[5.12vw] pl-[5.12vw] py-[2.43vw] justify-between h-full">
                <div className="flex flex-row items-end justify-end">
                    <div className="w-[11.28vw] h-[11.28vw] relative" onClick={toggleMenu}>
                        <Image src='/botones-mobile.png' fill />
                    </div>
                </div>
                <div className="flex flex-col ">
                    <Link href="/" className="text-[11.28vw] uppercase nav__item text-white transition duration-300 ease-in-out"> 
                        Home
                    </Link>
                    <Link href="/birras" className="text-[11.28vw] uppercase nav__item text-white transition duration-300 ease-in-out"> 
                        Birras
                    </Link>
                    <Link href="/bares" className="text-[11.28vw] uppercase nav__item text-white transition duration-300 ease-in-out"> 
                        Bares
                    </Link>
                    <Link href="/encuentro" className="text-[11.28vw] uppercase nav__item text-white transition duration-300 ease-in-out"> 
                        Encuentro
                    </Link>
                    <Link href="/musica" className="text-[11.28vw] uppercase nav__item text-white transition duration-300 ease-in-out"> 
                        Música
                    </Link>
                </div>
                <div className="flex flex-col py-[5.12vw]">
                    <div className="flex flex-start items-start justify-start gap-x-[2.52vw] text-white pb-[5.12vw]">
                        <Link href="/legales" className="text-[2.56vw] uppercase"> Legales </Link>
                        <a className="text-[2.56vw] uppercase" href="" target="_blank">Temple Academy</a>
                    </div>
                    <div className="bg-white h-[1px]"></div>
                    <div className="flex flex-row items-center justify-between py-[7.12vw]">
                        <a href='https://encasa.temple.com.ar/' target='_blank' className='text-white uppercase hover:bg-[#FCDB00] hover:text-black hover:border-[#ffffff] transition duration-300 ease-in-out'>
                            Shop
                        </a>
                        <div className="lang__nav">
                            <Image
                                src="/bandera-arg.svg"
                                alt="Tik-Tok"
                                width={24}
                                height={17}
                            />
                            <Image
                                src="/bandera-us.svg"
                                alt="Tik-Tok"
                                width={24}
                                height={17}
                            />
                            <Image
                                src="/bandera-es.svg"
                                alt="Tik-Tok"
                                width={24}
                                height={17}
                            />
                        </div>
                        <div className="">
                            <div className="flex flex-row items-center gap-x-[1.28vw] bg-white bg-opacity-50 py-[1.28vw] px-[1.28vw] rounded-[30px]">
                                    <div className="relative w-[4.12vw] h-[3.84vw] z-10">
                                        <Image 
                                            src="/arrow-footer.png"
                                            
                                            fill
                                        />
                                    </div>
                                    <div className="relative w-[4.87vw] h-[4.87vw]">
                                        <Image 
                                            src="/instagram-footer.png"
                                            
                                            fill
                                        />
                                    </div>
                                    <div className="relative w-[4.35vw] h-[4.87vw]">
                                        <Image 
                                            src="/tik-tok-footer.png"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill
                                        />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>   
        </div>
        )}
    </header>
  )
}


export default Header