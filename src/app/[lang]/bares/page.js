import Image from 'next/image'
import Header from '../../../../components/common/header'
import Footer from '../../../../components/common/Footer';
import ScrollHorizontal from '../../../../components/ScrollHorizontal'
import Draggable from '../../../../components/common/Dragabble'
import { Knockout54UltraBold } from '../layout'

export default function Page({ children }) {
    return (
        <div>
            <Header  />
            <section className="md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper flex flex-col">
                    <div className="flex pt-[18.15vw] px-5 lg:hidden">
                        <div className="relative w-full">
                            <h3 className={`text-white text-[12.05vw] ${Knockout54UltraBold.className}`}>BARES</h3>
                        </div>
                        <div className="absolute left-[62.30vw] z-10">
                            <Draggable initialPosition={{ x: 0, y: 0 }}>
                                <div className="relative w-[25.38vw] h-[25.38vw]">
                                    <Image
                                        src="/bares/sticker-bares.png"
                                        alt="Sticker"
                                        fill
                                    />
                                </div>
                            </Draggable>
                        </div>
                    </div>
                    <div className="px-5 lg:px-0 space-y-20 overflow-hidden">
                        <div className="flex w-full items-end mt-custom mt-[4vw] md:mt-[6.37vh]">
                            <div className="hidden lg:block pt-custom pt-[7.08vh] pb-custom pb-[6.23vh]">
                                <div className="relative h-mapa-custom h-[80vh] w-mapa-custom w-[43.9vh]">
                                    <Image src="/bares/mapa-arg.png" alt="" className="w-full" fill />
                                    <div className="h-[3.68vh] w-[3.68vh] point-map hover:scale-110 transform ease-in-out duration-300 salta top-[4.37vh] right-[25vh] absolute cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute tucuman top-[11vh] right-[27vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute cordoba top-[23vh] right-[23.23vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute santa-fe top-[24vh] right-[18.27vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-norte top-[30vh] right-[13.45vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-sur top-[36.5vh] right-[13.45vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute neuquen top-[42vh] right-[35vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-norte top-[57vh] right-[30vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                    <div className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-sur top-[68vh] right-[32vh] cursor-pointer">
                                        <Image
                                            src="/bares/point-mapa.png"
                                            alt=""
                                            fill
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block absolute pl-[43.9vh] top-[24.07vh]">
                                <h3 className={`text-white text-[9.49vh] ${Knockout54UltraBold.className}`}>BARES</h3>
                            </div>
                            <div className="hidden lg:block absolute pl-[85vh] top-[22vh] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="relative w-[19.26vh] h-[19.26vh]">
                                        <Image
                                            src="/bares/sticker-bares.png"
                                            alt="Sticker"
                                            fill
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            <ScrollHorizontal>
                                <div className="lg:h-[65.72vh] lg:w-[454.87vh] pt-[5.94vh] flex flex-row justify-start items-start ">
                                    <div className="buenos-aires flex lg:grid grid-cols-4 text-white lg:justify-center lg:items-center gap-x-[1.84vh]">
                                        <div className="space-y-4 min-w-[300px] lg:min-w-0">
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative"
                                            >
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 lg:py-0.5"
                                                >BUENOS AIRES</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                CASA TEMPLE
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1135832726</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >palermo@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Costa Rica 4677, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                BARRIO CHINO
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1164957812</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >barriochino@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Echeverría 1664, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">PILAR</h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1156620698</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >pilar@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Panamericana km 50, Pilar</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 min-w-[300px] lg:min-w-0">
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-[2.12vh] font-medium leading-normal">
                                                RECOLETA
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1144066315</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >palermo@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Vicente López 2102, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                TRASTIENDA
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1159604556</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >trastienda@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Balcarce 460, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                    
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                TAPROOM
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1144493153</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >taproom@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Colectora Este Ramal Pilar 80-181, Pilar</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 min-w-[300px] lg:min-w-0">
                                
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                RECOLETA JUNÍN
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1155249857</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >recoleta.junin@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Junín 1725, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                PUERTO MADERO
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1159089020</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >madero@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Juan Manuela Gorriti 867, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                    
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">LELOIR</h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1136532867</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >leloir@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Martín Fierro 3361, Parque Leloir</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4 min-w-[300px] lg:min-w-0">
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                HOLLYWOOD
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1132291754</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >hollywood@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Honduras 5602, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                PASEO LA PLAZA
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1567390110</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >paseolaplaza@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Av. Corrientes 1660, CABA</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                    
                                            <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                            >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">LANÚS</h1>
                                                <div className="flex gap-x-2 items-center">
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img
                                                    src="/bares/wa.png"
                                                    alt=""
                                                    className="w-4 h-4"
                                                    /><span className="text-xs leading-normal font-normal"
                                                    >1131289871</span
                                                    >
                                                </div>
                                                <div>
                                                    <img src="/bares/line.png" alt="" className="h-3" />
                                                </div>
                                                <div className="flex items-center justify-center gap-x-1">
                                                    <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                    className="text-xs leading-normal font-normal"
                                                    >lanus@temple.com.ar</span
                                                    >
                                                </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Carlos Tejedor 176, Lanús</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="costa-atlantica hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                                <div className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0">
                                                    <span
                                                        className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                    >COSTA ARGENTINA</span
                                                    >
                                                </div>
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">
                                                        PINAMAR
                                                    </h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >2267 44-2736</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >pinamar@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Av. de las Artes 31, Pinamar</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="santa-fe hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                                <div
                                                    className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                                >
                                                    <span
                                                        className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                    >SANTA FE</span
                                                    >
                                                </div>
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">
                                                        ROSARIO FISHERTON
                                                    </h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >3416953442</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >rosario@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Alberto J. Paz 1065 Bis-Local 5, Rosario, Santa Fe</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="neuquen hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                                <div
                                                    className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                                >
                                                    <span
                                                        className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                    >NEUQUÉN</span
                                                    >
                                                </div>
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">
                                                        BARILOCHE CATEDRAL
                                                    </h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div
                                                            className="flex items-center justify-center gap-x-1 hidden"
                                                        >
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >1156620698</span
                                                            >
                                                        </div>
                                                        <div className="hidden">
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >catedral@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Cerro Catedral - Bariloche</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cordoba hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                                <div
                                                    className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                                >
                                                    <span
                                                        className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                    >CÓRDOBA</span
                                                    >
                                                </div>
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">
                                                        CÓRDOBA GÜEMES
                                                    </h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >3516844638</span
                                                            >
                                                        </div>
                                                        <div>
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >cordoba@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Achaval Rodríguez 241, Córdoba</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2">
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">
                                                        NUEVA CÓRDOBA
                                                    </h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >3517665275</span
                                                            >
                                                        </div>
                                                        <div className="hidden">
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div
                                                            className="flex items-center justify-center gap-x-1 hidden"
                                                        >
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >trastienda@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Ambrosio Olmos 594, Córdoba</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="salta hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-[300px]">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                                <div
                                                    className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                                >
                                                    <span
                                                        className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                    >SALTA</span
                                                    >
                                                </div>
                                                <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                    <h1 className="text-base font-medium leading-normal">SALTA</h1>
                                                    <div className="flex gap-x-2 items-center">
                                                        <div
                                                            className="flex items-center justify-center gap-x-1 hidden"
                                                        >
                                                            <img
                                                                src="/bares/wa.png"
                                                                alt=""
                                                                className="w-4 h-4"
                                                            /><span className="text-xs leading-normal font-normal"
                                                            >1144493153</span
                                                            >
                                                        </div>
                                                        <div className="hidden">
                                                            <img src="/bares/line.png" alt="" className="h-3" />
                                                        </div>
                                                        <div className="flex items-center justify-center gap-x-1">
                                                            <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                                className="text-xs leading-normal font-normal"
                                                            >salta@temple.com.ar</span
                                                            >
                                                        </div>
                                                    </div>
                                                    <span className="text-[10px] text-10 leading-normal font-normal"
                                                    >Belgrano 213, Salta</span
                                                    >
                                                    <span className="text-[10px] text-10 leading-normal font-bold"
                                                    >HORARIOS</span
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tucuman hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >TUCUMÁN</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    TUCUMÁN
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >3812157158</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >estacion@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Av Roca 500, Complejo Provincial</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="chubut hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh] pr-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                            <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >
                                                    CHUBUT</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    COMODORO
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1159089020</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >comodoro@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Rawson 666, Comodoro Rivadavia, Chubut</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="santa cruz hidden lg:grid grid-cols-1 text-white lg:justify-start lg:items-start gap-x-[1.84vh]">
                                        <div className="space-y-4 min-w-0">
                                           <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >
                                                    SANTA CRUZ</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    RÍO GALLEGOS
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1136532867</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >rio.gallegos@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >9 de julio 102, Río Gallegos, Santa Cruz</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollHorizontal>
                        </div>

                        <div className="flex w-full gap-x-10 lg:hidden">
                            <div className="w-full lg:w-8/12 flex flex-col justify-end">
                                <div className="grid grid-cols-1 lg:grid-cols-3 text-white justify-center items-center gap-y-16 lg:gap-x-4">
                                    <div className="space-y-16">
                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0">
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >COSTA ARGENTINA</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    PINAMAR
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >2267 44-2736</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >pinamar@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Av. de las Artes 31, Pinamar</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >SANTA FE</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    ROSARIO FISHERTON
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >3416953442</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >rosario@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Alberto J. Paz 1065 Bis-Local 5, Rosario, Santa Fe</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >NEUQUÉN</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    BARILOCHE CATEDRAL
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1156620698</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >catedral@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Cerro Catedral - Bariloche</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-16">

                                        <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative"
                                        >
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >CÓRDOBA</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    CÓRDOBA GÜEMES
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >3516844638</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >cordoba@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Achaval Rodríguez 241, Córdoba</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2"
                                        >
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    NUEVA CÓRDOBA
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >3517665275</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >trastienda@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Ambrosio Olmos 594, Córdoba</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div
                                            className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative"
                                        >
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >SALTA</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">SALTA</h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1144493153</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >salta@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Belgrano 213, Salta</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-16">

                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >TUCUMÁN</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    TUCUMÁN
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >3812157158</span
                                                        >
                                                    </div>
                                                    <div>
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >estacion@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Av Roca 500, Complejo Provincial</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >
                                                    CHUBUT</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    COMODORO
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1159089020</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >comodoro@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >Rawson 666, Comodoro Rivadavia, Chubut</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>

                                        <div className="border-l-2 border-white border-dashed pt-2 lg:pt-6 pb-2 relative">
                                            <div
                                                className="text-black absolute -left-1 lg:pl-7 -top-8 lg:top-0"
                                            >
                                                <span
                                                    className="bg-white text-base lg:text-[10px] font-medium leading-normal px-2 py-0.5"
                                                >
                                                    SANTA CRUZ</span
                                                >
                                            </div>
                                            <div className="flex flex-col gap-y-2 pl-7 mx-auto">
                                                <h1 className="text-base font-medium leading-normal">
                                                    RÍO GALLEGOS
                                                </h1>
                                                <div className="flex gap-x-2 items-center">
                                                    <div
                                                        className="flex items-center justify-center gap-x-1 hidden"
                                                    >
                                                        <img
                                                            src="/bares/wa.png"
                                                            alt=""
                                                            className="w-4 h-4"
                                                        /><span className="text-xs leading-normal font-normal"
                                                        >1136532867</span
                                                        >
                                                    </div>
                                                    <div className="hidden">
                                                        <img src="/bares/line.png" alt="" className="h-3" />
                                                    </div>
                                                    <div className="flex items-center justify-center gap-x-1">
                                                        <img src="/bares/mail.png" alt="" className="w-4" /><span
                                                            className="text-xs leading-normal font-normal"
                                                        >rio.gallegos@temple.com.ar</span
                                                        >
                                                    </div>
                                                </div>
                                                <span className="text-[10px] text-10 leading-normal font-normal"
                                                >9 de julio 102, Río Gallegos, Santa Cruz</span
                                                >
                                                <span className="text-[10px] text-10 leading-normal font-bold"
                                                >HORARIOS</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </section>
        </div>
    )
}