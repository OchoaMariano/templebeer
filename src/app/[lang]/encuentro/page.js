import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../../components/common/header'
import Footer from '../../../../components/common/Footer'
import Modal from '../../../../components/common/Modal'
import ModalAstronomia from '../../../../components/encuentro/ModalAstronomia'
import ModalGhosteo from '../../../../components/encuentro/ModalGhosteo'
import ModalBirra from '../../../../components/encuentro/ModalBirra'

import { Knockout54UltraBold } from '../layout'

export default function Page({ children, searchParams }) {
    const showModal = searchParams?.modalAstronomia;
    const showModalGhost = searchParams?.modalGhost;
    const showModalBirra = searchParams?.modalBirra;

    return (
        <div>
            <Header />
            <section className="md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper pt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh]">
                    <div className="title__wrapper flex items-center justify-center pt-[2.83vh]">
                        <h1 className={`text-[4.24vh] leading-none uppercase ${Knockout54UltraBold.className}`}>
                            Encuentro
                        </h1>
                    </div>
                    <div className="content__wrapper flex flex-row items-start">
                        <div className="flex w-full md:gap-x-96 py-[9.35vw] md:py-[7.71vh] px-2">
                            <div className="w-full lg:w-1/2 flex justify-start text-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <Link className="flex flex-col justify-center md:items-center gap-y-4" href="encuentro/?modalAstronomia=true">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/san-patricio.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                SAN PATRICIO
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.birramigxs.templebeer.com/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/carpeta.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                BARES
                                            </span>
                                        </a>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.birramigxs.templebeer.com/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/birramigx.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                BIRRAMIGX
                                            </span>
                                        </a>
                                    </div>

                                    <div className="flex cursor-pointer transform hover-bouncesmooth">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.instagram.com/p/CoDXngDpzb4/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/mundial.png"
                                                    alt="icono-mundial-temple"
                                                    fill
                                                />
                                            </div>
                                            
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                MUNDIAL
                                            </span>
                                        </a>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.ipasionales.templebeer.com/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/pasion.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                        
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                IPASIONAL
                                            </span>
                                        </a>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://issuu.com/tri_9/docs/fanzine_temple_reduced" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/fanzine.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                FANZINE
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex items-start justify-end text-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <Link className="flex flex-col justify-center md:items-center gap-y-4" href="encuentro/?modalBirra=true">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/cultura.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                BIRRA, ENCUENTRO <br />
                                                & CULTURA
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <Link className="flex flex-col justify-center md:items-center gap-y-4" href="encuentro/?modalGhost=true">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/ghost.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>

                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center px-0">
                                                MENOS GHOSTEO, <br />
                                                MÁS BIRRA
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.birramigxs.templebeer.com/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/carpeta.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                MEMES BIRREROS
                                            </span>
                                        </a>
                                    </div>

                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <Link className="flex flex-col justify-center md:items-center gap-y-4" href="encuentro/?modalAstronomia=true">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/astrologia.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                ASTROLOGÍA CÓSMICA
                                            </span>
                                        </Link>
                                    </div>
                                    
                                    <img src="" alt="" className="hidden md:block" />
                                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                                        <a className="flex flex-col justify-center items-center gap-y-4" href="https://www.birramigxs.templebeer.com/" target="_blank">
                                            <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                                                <Image
                                                    src="/encuentros/carpeta.png"
                                                    alt=""
                                                    fill
                                                />
                                            </div>
                                            <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                                                1 LATA X 50 ARTISTAS
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
               
            </section>
            {showModal && <ModalAstronomia />}
            {showModalGhost && <ModalGhosteo />}
            {showModalBirra && <ModalBirra />}
        </div>
    )
}