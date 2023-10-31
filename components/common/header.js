import Image from 'next/image'
import Link from 'next/link'

function Header () {
  return (
    <header className="header__temple bg-transparent lg:fixed w-full z-50 top-0">
        <div className="header__temple-wrapper">
            <div className="wrapper__logo">
                <Link href="/">
                    <div className="relative w-[18.13vh] h-[4.1vh]">
                        <Image
                            src="/logo-templebeer.png"
                            alt="Temple Beer"
                            fill
                        />
                    </div>
                   
                </Link>
            </div>
            <div className="wrapper__content-nav hidden lg:flex">
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
                    <Link href="/legales" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Legales
                    </Link>
                    <a href="https://diamond-hamburger-c59.notion.site/0f69945dbb6247a1b08f8eae47bb2442?v=bdfe9a6a777c4281adda7ea36cf7d43c" target="_blank" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"> 
                        Temple Academy
                    </a>
                </div>
                <div className="divisor h-[21px] w-[1px] bg-white"></div>
                <div className="rrss__nav">
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
                <div className="divisor h-[21px] w-[1px] bg-white"></div>
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
                
            </div>
            <div className="wrapper__nav-mobile flex lg:hidden">
                <div className="menu__icon relative">
                    <Image src='/nav-mobile.png' width={44} height={44} />
                </div>
            </div>
        </div>
    </header>
  )
}


export default Header