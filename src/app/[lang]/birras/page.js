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
                <div className="grid content-center lg:content-end h-full pb-[50px]">
                    <div className="flex flex-col lg:pl-[34px]">
                        <div className="title__wrapper flex pb-[30px] px-3 lg:px-0">
                            <h1 className={`text-4xl font-bold text-white text-[47px] 2xl:text-[67px] leading-none uppercase ${Knockout54UltraBold.className}`}>
                                Nuestras <br></br>Birras
                            </h1>
                            <div className="sticker__wrapper relative">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[74px] h-[180px] 3xl:w-[96px] 3xl:h-[236px] relative">
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
                        <div className="carousel__wrapper w-[6000px] flex flex-row justify-start items-end">
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