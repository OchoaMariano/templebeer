"use client";

import Image from "next/image";
import React from "react";
import Draggable from "../common/Dragabble";
import ScrollHorizontal from "../ScrollHorizontal";
import Footer from "../common/Footer";

const MapComponent = (zonas) => {
  // DATA PROPS
  let dataZonas = zonas.zonas.data

  // METODOS
  // SCROLL LIST OF BARS => CLICK
  const handleMapPointClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="px-[5.12vw] lg:px-0 space-y-20 relative overflow-hidden">
      <div className="flex w-full items-end mt-custom mt-[4vw] md:mt-[6.37vh]">
        {/* MAPA DESKTOP */}  
        <div className="hidden lg:block pt-custom pt-[7.08vh] pb-custom pb-[6.23vh] z-[100]">
          <div className="relative h-mapa-custom h-[80vh] w-mapa-custom w-[43.9vh]">
            <Image src="/bares/mapa-arg.png" alt="mapa de la Argentina" className="w-full" fill />
            <div
              className="h-[3.68vh] w-[3.68vh] point-map hover:scale-110 transform ease-in-out duration-300 salta top-[4.37vh] right-[25vh] absolute cursor-pointer"
              onClick={() => handleMapPointClick("salta")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute tucuman top-[11vh] right-[27vh] cursor-pointer"
              onClick={() => handleMapPointClick("tucuman")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute corrientes top-[14vh] right-[9vh] cursor-pointer"
              onClick={() => handleMapPointClick("corrientes")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute cordoba top-[23vh] right-[23.23vh] cursor-pointer"
              onClick={() => handleMapPointClick("cordoba")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute santa-fe top-[24vh] right-[18.27vh] cursor-pointer"
              onClick={() => handleMapPointClick("santa-fe")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-norte top-[30vh] right-[13.45vh] cursor-pointer"
              onClick={() => handleMapPointClick("buenos-aires")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute bsas-sur top-[36.5vh] right-[13.45vh] cursor-pointer"
              onClick={() => handleMapPointClick("costa-argentina")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute neuquen top-[42vh] right-[35vh] cursor-pointer"
              onClick={() => handleMapPointClick("rio-negro")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-norte top-[57vh] right-[30vh] cursor-pointer"
              onClick={() => handleMapPointClick("chubut")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
            <div
              className="point-map h-[3.68vh] w-[3.68vh] hover:scale-110 transform ease-in-out duration-300 absolute chubut-sur top-[68vh] right-[32vh] cursor-pointer"
              onClick={() => handleMapPointClick("santa-cruz")}
            >
              <Image src="/bares/point-mapa.png" alt="Icono punto en el mapa" fill />
            </div>
          </div>
        </div>
        {/* TITLE DESKTOP */} 
        <div className="hidden lg:block absolute pl-[43.9vh] top-[24.07vh]">
          <h3 className={`text-white text-[9.49vh] `}>BARES</h3>
        </div>
        {/* STICKER DESKTOP */} 
        <div className="hidden lg:block absolute pl-[85vh] top-[22vh] z-10">
          <Draggable initialPosition={{ x: 0, y: 0 }}>
            <div className="relative w-[19.26vh] h-[19.26vh]">
              <Image src="/bares/sticker-bares.png" alt="Sticker Bares" fill />
            </div>
          </Draggable>
        </div>
        {/* MOBILE(BUENOS AIRES)DESKTOP LIST ZONAS/BARES - SCROLL LATERAL */} 
        <ScrollHorizontal>
          <div className="lg:h-[65.72vh] lg:w-[454.87vh] pt-[5.94vh] flex flex-row justify-start items-start ">
             {dataZonas.map((zona, index) => (
                <>
                  <div className={`${zona.attributes.slug} ${index == 0 ? '' : 'hidden lg:block'} grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white relative`}>
                      {zona.attributes.bares.data.map((bar, index) => (
                        <div key={index} className={` border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]`}
                          id={`${zona.attributes.slug}`}>
                          {index == 0 && (
                            <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                              <span className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}>
                                {zona.attributes.zona}
                              </span>
                            </div>
                          )}

                          <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">

                            <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                              {bar.attributes.Nombre}
                            </h1>
                            <div className="flex gap-x-2 items-center">

                              {bar.attributes.Telefono && (
                                <a href={`https://wa.me/${bar.attributes.Telefono}?text=Hola, estoy interesado en más información.`} rel="noopener noreferrer" target="_blank">
                                  <div className="flex items-center justify-center gap-x-1">
                                    <img
                                      src="/bares/wa.png"
                                      alt="Icono Whatsapp"
                                      className="w-[1.84vh] h-[1.84vh]"
                                    />
                                    <span className="text-[3vw] md:text-[1.33vh]">
                                      {bar.attributes.Telefono}
                                    </span>
                                  </div>
                                </a>
                              )}
                              
                              {bar.attributes.Telefono && (
                                <div>
                                  <img src="/bares/line.png" alt="Icono Linea" className="h-3" />
                                </div>
                              )}

                              {bar.attributes.Email && (
                                <a href={`mailto:${bar.attributes.Email}`}>
                                  <div className="flex items-center justify-center gap-x-1">
                                    <img
                                      src="/bares/mail.png"
                                      alt="Icono Mail"
                                      className="w-[2.23vh] h-[1.84vh]"
                                    />
                                    <span className="text-[3vw] md:text-[1.33vh]">
                                      {bar.attributes.Email}
                                    </span>
                                  </div>
                                </a>
                              )}
                            </div>
                            <span className="text-[3vw] md:text-[1.41vh] uppercase">
                              {bar.attributes.Direccion}
                            </span>
                          </div>
                        </div>
                      ))}
                  </div>
                </>
             ))}
          </div>
        </ScrollHorizontal>
      </div>

      {/* MOBILE LIST ZONAS/BARES */}
      <div className="flex w-full gap-x-10 lg:hidden">
        <div className="w-full lg:w-8/12 flex flex-col justify-end">
          <div className="grid grid-cols-1 lg:grid-cols-3 text-white justify-center items-center gap-y-16 lg:gap-x-4">
            <div className="space-y-16">
              {dataZonas.map((zona, index) => (
                <>
                  {!index == 0 && (
                    <div className={`${zona.attributes.slug} grid grid-flow-col gap-4 gap-x-[1.84vh] text-white relative`}>
                    {zona.attributes.bares.data.map((bar, index) => (
                      <div key={index} className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]"
                        id={`${zona.attributes.slug}`}>
                        {index == 0 && (
                          <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                            <span className={` bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}>
                              {zona.attributes.zona}
                            </span>
                          </div>
                        )}

                        <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">

                          <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                            {bar.attributes.Nombre}
                          </h1>
                          <div className="flex gap-x-2 items-center">

                            {bar.attributes.Telefono && (
                              <a href={`https://wa.me/${bar.attributes.Telefono}?text=Hola, estoy interesado en más información.`} rel="noopener noreferrer" target="_blank">
                                <div className="flex items-center justify-center gap-x-1">
                                  <img
                                    src="/bares/wa.png"
                                    alt="Icono Whatsapp"
                                    className="w-[1.84vh] h-[1.84vh]"
                                  />
                                  <span className="text-[3vw] md:text-[1.33vh]">
                                    {bar.attributes.Telefono}
                                  </span>
                                </div>
                              </a>
                            )}
                            
                            {bar.attributes.Telefono && (
                              <div>
                                <img src="/bares/line.png" alt="Icono Linea" className="h-3" />
                              </div>
                            )}

                            {bar.attributes.Email && (
                              <a href={`mailto:${bar.attributes.Email}`}>
                                <div className="flex items-center justify-center gap-x-1">
                                  <img
                                    src="/bares/mail.png"
                                    alt="Icono Mail"
                                    className="w-[2.23vh] h-[1.84vh]"
                                  />
                                  <span className="text-[3vw] md:text-[1.33vh]">
                                    {bar.attributes.Email}
                                  </span>
                                </div>
                              </a>
                            )}
                          </div>
                          <span className="text-[3vw] md:text-[1.41vh] uppercase">
                            {bar.attributes.Direccion}
                          </span>
                        </div>
                      </div>
                    ))}
                    </div>
                  )}  
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKER */}                        
      <div className="sticker-iso-rosa absolute right-[30vw] top-[120vw] md:left-[0vh] md:top-[65vh] md:right-0 md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[23deg] w-[14.61vw] h-[14.61vw] md:w-[9.69vh] md:h-[9.69vh] relative">
            <Image src="/sticker-rosa-tempple.png" alt="Sticker Temple Beer Rosa" fill />
          </div>
        </Draggable>
      </div>
      {/* MOBILE STICKER */}  
      <div className="sticker-temple-rosa absolute right-[40vw] top-[165vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className=" -rotate-[5deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-rosa.png" alt="Sticker Temple Beer Rosa" fill />
          </div>
        </Draggable>
      </div>
      {/* MOBILE STICKER */}  
      <div className="sticker-temple-amarillo absolute right-[40vw] top-[315vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[-5deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-amarrillo.png" alt="Sticker Temple Beer Amarillo" fill />
          </div>
        </Draggable>
      </div>
      {/* MOBILE STICKER */}  
      <div className="sticker-temple-verde absolute right-[50vw] top-[405vw] md:hidden">
        <Draggable initialPosition={{ x: 0, y: 0 }}>
          <div className="rotate-[9deg] w-[30.76vw] h-[6.34vw] relative">
            <Image src="/sticker-temple-verde.png" alt="Sticker Temple Beer Verde" fill />
          </div>
        </Draggable>
      </div>
      
      {/* MOBILE FOOTER */}  
      <Footer />
    </div>
  );
};

export default MapComponent;
