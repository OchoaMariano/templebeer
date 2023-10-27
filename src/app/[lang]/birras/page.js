import Image from 'next/image'
import { Knockout54UltraBold } from '../layout'
import CarouselBirras from '../../../../components/birras/CarouselBirras'
import ScrollHorizontal from '../../../../components/ScrollHorizontal'
import cervezasClasicasData from '../../../../data/cervezasclasicas.json';
import cervezasLimitadasData from '../../../../data/cervezaslimitadas.json';
import cervezasEspecialesData from '../../../../data/cervezasespeciales.json';
import Draggable from '../../../../components/common/Dragabble'
import Header from '../../../../components/common/header'

export default function Page({ children }) {
    return (
        <div>
            <Header  />
            <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="grid content-center lg:content-end h-full pb-[7.08vh]">
                    <div className="flex flex-col lg:pl-[34px]">
                        <div className="title__wrapper flex pb-[4.24vh] px-3 lg:px-0">
                            <h1 className={`text-4xl font-bold text-white text-[12.05vw] lg:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}>
                                Nuestras <br></br>Birras
                            </h1>
                            <div className="sticker__wrapper relative">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[13.84vw] h-[33.84vw] lg:w-[10.48vh] lg:h-[25.49vh] relative">
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

                    <ScrollHorizontal>
                        <div className="carousel__wrapper w-[6000px] flex flex-row justify-start items-end pl-[30.76vw] lg:pl-[0px]">
                            <CarouselBirras cervezas={cervezasClasicasData.cervezas} titulo={cervezasClasicasData.titulo} colorBordeTitulo={cervezasClasicasData.colorBordeTitulo} />
                            <CarouselBirras cervezas={cervezasLimitadasData.cervezas} titulo={cervezasLimitadasData.titulo} colorBordeTitulo={cervezasLimitadasData.colorBordeTitulo} />
                            <CarouselBirras cervezas={cervezasEspecialesData.cervezas} titulo={cervezasEspecialesData.titulo} colorBordeTitulo={cervezasEspecialesData.colorBordeTitulo} />
                        </div>
                    </ScrollHorizontal>
                </div>
            </section>
        </div>
    )
}