import Image from 'next/image'
import Link from 'next/link'

function Header () {
  return (
    <header className="header__temple bg-transparent fixed w-full">
        <div className="header__temple-wrapper">
            <div className="wrapper__logo">
                <Link href="/">
                    <Image
                        src="/logo-temple.svg"
                        alt="Temple Beer"
                        width={136}
                        height={37}
                    />
                </Link>
            </div>
            <div className="wrapper__content-nav">
                <div className="main__nav">
                    <Link href="/birras" className="nav__item text-white"> 
                        Birras
                    </Link>
                    <Link href="/bares" className="nav__item text-white"> 
                        Bares
                    </Link>
                    <Link href="/encuentro" className="nav__item text-white"> 
                        Encuentro
                    </Link>
                    <Link href="/musica" className="nav__item text-white"> 
                        Música
                    </Link>
                    <Link href="/legales" className="nav__item text-white"> 
                        Legales
                    </Link>
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
                    <a href='https://encasa.temple.com.ar/' target='_blank'className='button_nav'>
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
        </div>
    </header>
  )
}


export default Header