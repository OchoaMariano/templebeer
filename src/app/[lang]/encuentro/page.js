import Image from 'next/image'
import Header from '../../../../components/common/header'

export default function Page({ children }) {
    return (
        <div>
            <Header />
            <section className="md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper mt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh]">
                    <div className="title__wrapper flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-[37px] 3xl:text-[57px] leading-none uppercase">
                            Encuentro
                        </h1>
                    </div>
                    <div className="content__wrapper flex flex-row gap-[20px] items-start">
                        <div className="flex w-full lg:gap-x-96 py-20 px-2">
                            <div className="w-full lg:w-1/2 flex justify-start text-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/san-patricio.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            SAN PATRICIO
                                        </span>
                                    </div>
                                    <div lassName="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/carpeta.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            BARES
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/birramigx.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            BIRRAMIGX
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/mundial.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            MUNDIAL
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/pasion.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            IPASIONAL
                                        </span>
                                    </div>
                                    <div  className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/fanzine.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            FANZINE
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/2 flex items-start justify-end text-white">
                                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/cultura.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            BIRRA, ENCUENTRO <br />
                                            & CULTURA
                                        </span>
                                    </div>
                                    <div  className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/ghost.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />

                                        <span className="text-xs font-normal leading-normal text-center px-0">
                                            MENOS GHOSTEO, <br />
                                            MÁS BIRRA
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/carpeta.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            MEMES BIRREROS
                                        </span>
                                    </div>
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/astrologia.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            ASTROLOGÍA CÓSMICA
                                        </span>
                                    </div>
                                    <img src="" alt="" className="hidden md:block" />
                                    <div className="flex flex-col justify-center md:items-center gap-y-4 min-height-custom cursor-pointer">
                                        <img
                                            src="/encuentros/carpeta.png"
                                            alt=""
                                            className="w-32 transform hover:scale-110 transition ease-in-out duration-300"
                                        />
                                        <span className="text-xs font-normal leading-normal text-center">
                                            1 LATA X 50 ARTISTAS
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}