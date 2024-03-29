"use client";

import Image from "next/image";
import React from "react";
import Draggable from "../common/Dragabble";
import ScrollHorizontal from "../ScrollHorizontal";
import Footer from "../common/Footer";

const MapComponent = () => {
  const handleMapPointClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const data = {
    bares: {
      buenosAires: [
        {
          id: 1,
          nombre: "CASA TEMPLE",
          provincia: "Buenos Aires",
          telefono: "1135832726",
          email: "palermo@temple.com.ar",
          direccion: "Costa Rica 4677, CABA",
          header: true,
        },
        {
          id: 2,
          nombre: "BARRIO CHINO",
          provincia: "Buenos Aires",
          telefono: "1164957812",
          email: "barriochino@temple.com.ar",
          direccion: "Echeverria 1664, CABA",
          header: null,
        },
        {
          id: 3,
          nombre: "PILAR",
          provincia: "Buenos Aires",
          telefono: "1156620698",
          email: "pilar@temple.com.ar",
          direccion: "Panamericana km 50, Pilar",
          header: null,
        },
        {
          id: 4,
          nombre: "RECOLETA",
          provincia: "Buenos Aires",
          telefono: "1144066315",
          email: "recoleta@temple.com.ar",
          direccion: "Vicente Lopez 2102, CABA",
          header: null,
        },
        {
          id: 5,
          nombre: "trastienda",
          provincia: "Buenos Aires",
          telefono: "1159604556",
          email: "trastienda@temple.com.ar",
          direccion: "BALCARCE 460, CABA",
          header: null,
        },
        {
          id: 6,
          nombre: "taproom",
          provincia: "Buenos Aires",
          telefono: "1144493153",
          email: "taproom@temple.com.ar",
          direccion: "COLECTORA ESTE RAMAL PILAR KM 40,5 , PILAR",
          header: null,
        },
        {
          id: 7,
          nombre: "recoleta junin",
          provincia: "Buenos Aires",
          telefono: "1155249857",
          email: "recoleta.junin@temple.com.ar",
          direccion: "JunÍn 1725, CABA",
          header: null,
        },
        {
          id: 8,
          nombre: "puerto madero",
          provincia: "Buenos Aires",
          telefono: "1159089020",
          email: "madero@temple.com.ar",
          direccion: "Juan Manuela Gorriti 867, CABA",
          header: null,
        },
        {
          id: 9,
          nombre: "leloir",
          provincia: "Buenos Aires",
          telefono: "1136532867",
          email: "leloir@temple.com.ar",
          direccion: "Martín Fierro 3361, Parque Leloir",
          header: null,
        },
        {
          id: 10,
          nombre: "hollywood",
          provincia: "Buenos Aires",
          telefono: "1132291754",
          email: "hollywood@temple.com.ar",
          direccion: "Honduras 5602, CABA",
          header: null,
        },
        {
          id: 11,
          nombre: "paseo la plaza",
          provincia: "Buenos Aires",
          telefono: "-",
          email: "paseolaplaza@temple.com.ar",
          direccion: "Av. Corrientes 1660, CABA",
          header: null,
        },
        {
          id: 12,
          nombre: "lanus",
          provincia: "Buenos Aires",
          telefono: "1131289871",
          email: "lanus@temple.com.ar",
          direccion: "Carlos Tejedor 176, Lanús",
          header: null,
        },
        {
          id: 13,
          nombre: "soho",
          provincia: "Buenos Aires",
          telefono: "1135832726",
          email: "soho@temple.com.ar",
          direccion: "Costa Rica 4699, CABA",
          header: null,
        },
        {
          id: 14,
          nombre: "caballito",
          provincia: "Buenos Aires",
          telefono: "1159424099",
          email: "caballito@temple.com.ar",
          direccion: "Av. Pedro Goyena 200, CABA",
          header: null,
        },
        {
          id: 15,
          nombre: "lomas de zamora",
          provincia: "Buenos Aires",
          telefono: "-",
          email: "lomas@temple.com.ar",
          direccion: "Sixto Fernández 254, Lomas De Zamora",
          header: null,
        },
        {
          id: 16,
          nombre: "botánico",
          provincia: "Buenos Aires",
          telefono: "-",
          email: "botanico@temple.com.ar",
          direccion: "Av. Cerviño 3901, CABA",
          header: null,
        },
        {
          id: 17,
          nombre: "caminito",
          provincia: "Buenos Aires",
          telefono: "1157989819",
          email: "templecaminito@gmail.com",
          direccion: "Magallanes 855, La Boca",
          header: null,
        },
        {
          id: 18,
          nombre: "la plata",
          provincia: "Buenos Aires",
          telefono: "2216775656",
          email: "laplata@temple.com.ar",
          direccion: "Diagonal 74 1494, La Plata",
          header: null,
        },
        {
          id: 19,
          nombre: "devoto",
          provincia: "Buenos Aires",
          telefono: "1123513952",
          email: "devoto@temple.com.ar",
          direccion: "Fernandez de Enciso 4370, CABA",
          header: null,
        },
        {
          id: 20,
          nombre: "barrio norte",
          provincia: "Buenos Aires",
          telefono: "1127310057",
          email: "barrionorte@temple.com.ar",
          direccion: "Arenales 2896, CABA",
          header: null,
        },
        {
          id: 21,
          nombre: "city bell",
          provincia: "Buenos Aires",
          telefono: "2213143095",
          email: "citybell@temple.com.ar",
          direccion: "Calle Cantilo 202 Nro 1896, City Bell",
          header: null,
        },
        {
          id: 22,
          nombre: "mercado belgrano",
          provincia: "Buenos Aires",
          telefono: "-",
          email: "mercado.belgrano@temple.com.ar",
          direccion: "Av. Juramento 2527, Local 82, CABA",
          header: null,
        },
        {
          id: 23,
          nombre: "san isidro",
          provincia: "Buenos Aires",
          telefono: "1135752555",
          email: "sanisidro@temple.com.ar",
          direccion: "Av Juan Segundo Fernandez 20, San Isidro",
          header: null,
        },
      ],
      costaAtlantica: [
        {
          id: 1,
          nombre: "pinamar",
          provincia: "costa argentina",
          telefono: "2267442736",
          email: "pinamar@temple.com.ar",
          direccion: "Av. de las Artes 31, Pinamar",
          header: true,
        },
      ],
      santaFe: [
        {
          id: 1,
          nombre: "rosario fisherton",
          provincia: "santa fe",
          telefono: "3416953442",
          email: "rosario@temple.com.ar",
          direccion: "Alberto J. Paz 1065 Bis-Local 5, Rosario",
          header: true,
        },
      ],
      neuquen: [
        {
          id: 1,
          nombre: "BARILOCHE catedral",
          provincia: "río negro",
          telefono: "-",
          email: "catedral@temple.com.ar",
          direccion: "Cerro Catedral - Bariloche",
          header: true,
        },
      ],
      cordoba: [
        {
          id: 1,
          nombre: "cordoba Güemes",
          provincia: "cordoba",
          telefono: "3516844638",
          email: "cordoba@temple.com.ar",
          direccion: "Achaval RodrÍguez 241, Córdoba",
          header: true,
        },
      ],
      salta: [
        {
          id: 1,
          nombre: "salta",
          provincia: "salta",
          telefono: "-",
          email: "salta@temple.com.ar",
          direccion: "Belgrano 213, Salta",
          header: true,
        },
      ],
      corrientes: [
        {
          id: 1,
          nombre: "corrientes",
          provincia: "corrientes",
          telefono: "3794009384",
          email: "templectes@gmail.com",
          direccion: "Rivadavia 1690",
          header: true,
        },
      ],
      tucuman: [
        {
          id: 1,
          nombre: "tucumán",
          provincia: "tucumán",
          telefono: "3812157158",
          email: "estacion@temple.com.ar",
          direccion: "Av Roca 500, Complejo Provincial",
          header: true,
        },
      ],
      chubut: [
        {
          id: 1,
          nombre: "comodoro",
          provincia: "chubut",
          telefono: "54 9 297416-9314",
          email: "comodoro@temple.com.ar",
          direccion: "Rawson 666, Comodoro Rivadavia, Chubut",
          header: true,
        },
      ],
      santaCruz: [
        {
          id: 1,
          nombre: "río gallegos",
          provincia: "santa cruz",
          telefono: "2966-768379",
          email: "rio.gallegos@temple.com.ar",
          direccion: "9 de julio 102, RÍo Gallegos, Santa Cruz",
          header: true,
        },
      ],
    },
    baresEn: {
      miami: [
        {
          id: 1,
          nombre: "Temple Craft Wynwood",
          provincia: "Miami",
          telefono: "17868541874",
          email: "miami@temple.com.ar",
          direccion: "151 NW 24th St #102, Miami, FL 33127, USA",
          header: true,
        },
      ],
    },
  };

  return (
    <div className="px-[5.12vw] lg:px-0 space-y-20 relative overflow-hidden">
      <div className="flex w-full items-end mt-custom mt-[4vw] md:mt-[6.37vh]">
        <div className="hidden lg:block pt-custom pt-[7.08vh] pb-custom pb-[6.23vh] z-[100]">
          <div className="relative h-mapa-custom h-[80vh] w-mapa-custom w-[43.9vh]">
            <Image src="/bares/mapa-arg.png" alt="" className="w-full" fill />
            <div
              className="h-[3.68vh] w-[3.68vh] point-map hover:scale-110 transform ease-in-out duration-300 salta top-[4.37vh] right-[25vh] absolute cursor-pointer"
              onClick={() => handleMapPointClick("salta-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute tucuman top-[11vh] right-[27vh] cursor-pointer"
              onClick={() => handleMapPointClick("tucuman-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute corrientes top-[14vh] right-[9vh] cursor-pointer"
              onClick={() => handleMapPointClick("corrientes-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute cordoba top-[23vh] right-[23.23vh] cursor-pointer"
              onClick={() => handleMapPointClick("cordoba-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute santa-fe top-[24vh] right-[18.27vh] cursor-pointer"
              onClick={() => handleMapPointClick("santafe-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-norte top-[30vh] right-[13.45vh] cursor-pointer"
              onClick={() => handleMapPointClick("bsas-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-sur top-[36.5vh] right-[13.45vh] cursor-pointer"
              onClick={() => handleMapPointClick("bsas-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute neuquen top-[42vh] right-[35vh] cursor-pointer"
              onClick={() => handleMapPointClick("neuquen-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-norte top-[57vh] right-[30vh] cursor-pointer"
              onClick={() => handleMapPointClick("chubut-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-sur top-[68vh] right-[32vh] cursor-pointer"
              onClick={() => handleMapPointClick("chubut-section")}
            >
              <Image src="/bares/point-mapa.png" alt="" fill />
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute pl-[43.9vh] top-[24.07vh]">
          <h3 className={`text-white text-[9.49vh] `}>BARES</h3>
        </div>
        <div className="hidden lg:block absolute pl-[85vh] top-[22vh] z-10">
          <Draggable initialPosition={{ x: 0, y: 0 }}>
            <div className="relative w-[19.26vh] h-[19.26vh]">
              <Image src="/bares/sticker-bares.png" alt="Sticker" fill />
            </div>
          </Draggable>
        </div>
        <ScrollHorizontal>
          <div className="lg:h-[65.72vh] lg:w-[454.87vh] pt-[5.94vh] flex flex-row justify-start items-start ">
            <div className="buenos-aires grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white relative">
              {data.bares.buenosAires.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                  id="bsas-section"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
              <div className="sticker-iso-rosa absolute left-[255vh] top-[35vh] hidden md:block">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[23deg] w-[9.69vh] h-[9.69vh] relative">
                    <Image
                      src="/sticker-rosa-tempple.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-verde absolute right-[30vh] top-[17vh] hidden md:block">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className=" -rotate-[5deg] w-[22.52vh] h-[4.76vh] relative">
                    <Image
                      src="/sticker-temple-verde.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-amarillo absolute left-[110vh] top-[17vh] hidden md:block">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[7.25deg] w-[22.80vh] h-[4.53vh] relative">
                    <Image
                      src="/sticker-temple-amarrillo.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-rosa absolute left-[18vh] top-[34vh] hidden md:block">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className=" -rotate-[13.25deg] w-[22.52vh] h-[4.76vh] relative">
                    <Image
                      src="/sticker-temple-rosa.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
            </div>

            <div
              className="costa-atlantica hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="costa-section"
            >
              {data.bares.costaAtlantica.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="santa-fe hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="santafe-section"
            >
              {data.bares.santaFe.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="neuquen hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="neuquen-section"
            >
              {data.bares.neuquen.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="cordoba hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="cordoba-section"
            >
              {data.bares.cordoba.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="salta hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="salta-section"
            >
              {data.bares.salta.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="salta hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="corrientes-section"
            >
              {data.bares.corrientes.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="tucuman hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="tucuman-section"
            >
              {data.bares.tucuman.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="chubut hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="chubut-section"
            >
              {data.bares.chubut.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="santaCruz hidden lg:grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white"
              id="santacruz-section"
            >
              {data.bares.santaCruz.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[43.20vh] h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[2.40vh] top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[0.99vh] pl-[2.40vh] pt-[4.95vh] mx-auto">
                    <h1 className="text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[1.33vh]">{bar.telefono}</span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img src="/bares/mail.png" alt="" className="w-4" />
                          <span className="text-[1.33vh]">{bar.email}</span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollHorizontal>
      </div>

      <div className="flex w-full gap-x-10 lg:hidden">
        <div className="w-full lg:w-8/12 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-3 text-white justify-center items-center gap-y-16 lg:gap-x-4">
            <div className="space-y-16">
              {data.bares.costaAtlantica.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
              {data.bares.santaFe.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase ">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
              {data.bares.neuquen.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {data.bares.cordoba.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-16">
              {data.bares.salta.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}

              {data.bares.corrientes.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}

              {data.bares.tucuman.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}

              {data.bares.chubut.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}

              {data.bares.santaCruz.map((bar, index) => (
                <div
                  key={index}
                  className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                >
                  {bar.header && (
                    <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                      <span
                        className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}
                      >
                        {bar.provincia}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                    <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                      {bar.nombre}
                    </h1>
                    <div className="flex gap-x-2 items-center">
                      <a
                        href={`https://wa.me/${bar.telefono.replace(
                          /[^0-9]/g,
                          ""
                        )}?text=Hola, estoy interesado en más información.`}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/wa.png"
                            alt=""
                            className="w-[1.84vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.telefono}
                          </span>
                        </div>
                      </a>

                      <div>
                        <img src="/bares/line.png" alt="" className="h-3" />
                      </div>
                      <a href={`mailto:${bar.email}`}>
                        <div className="flex items-center justify-center gap-x-1">
                          <img
                            src="/bares/mail.png"
                            alt=""
                            className="w-[2.23vh] h-[1.84vh]"
                          />
                          <span className="text-[3vw] md:text-[1.33vh]">
                            {bar.email}
                          </span>
                        </div>
                      </a>
                    </div>
                    <span className="text-[3vw] md:text-[1.41vh] uppercase">
                      {bar.direccion}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticker-iso-rosa absolute right-[30vw] top-[120vw] md:left-[0vh] md:top-[65vh] md:right-0 md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[23deg] w-[14.61vw] h-[14.61vw] md:w-[9.69vh] md:h-[9.69vh] relative">
            <Image src="/sticker-rosa-tempple.png" alt="Temple Beer" fill />
          </div>
        </Draggable>
      </div>
      <div className="sticker-temple-rosa absolute right-[40vw] top-[165vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className=" -rotate-[5deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-rosa.png" alt="Temple Beer" fill />
          </div>
        </Draggable>
      </div>
      <div className="sticker-temple-amarillo absolute right-[40vw] top-[315vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[-5deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-amarrillo.png" alt="Temple Beer" fill />
          </div>
        </Draggable>
      </div>
      <div className="sticker-temple-verde absolute right-[50vw] top-[405vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[9deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-verde.png" alt="Temple Beer" fill />
          </div>
        </Draggable>
      </div>

      <Footer />
    </div>
  );
};

export default MapComponent;
