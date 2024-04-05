import Image from "next/image";
import Header from "../../../../components/common/header";
import Footer from "../../../../components/common/Footer";
import Draggable from "../../../../components/common/Dragabble";
import Map from "../../../../components/bares/map";
import { Knockout54UltraBold, Knockout34 } from "../layout";
import { getDictionary } from "../../../dictionaries";

// API ENDPOINT - ZONES with BARES by LANG
async function getZonesByLang(lang) {
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/zonas-bares?populate=bares&locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
}

export default async function Page({ params }) {
  // READ lang ON PARAMS
  const lang = params.lang;

  // GET lang DICTIONARY
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  //GET BARES by ZONAS by LANG API CALL
  const zonasApi = await getZonesByLang(lang);
  const zonas = zonasApi;

  return (
    <div>
      <Header dictonary={headerDic} />
      <section
        className="md:max-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="page__wrapper flex flex-col">
          <div className="flex pt-[18.15vw] px-5 lg:hidden">
            <div className="relative w-full">
              <h3 className={`text-white text-[12.05vw] uppercase ${Knockout54UltraBold.className}`}>
                {dict.bares.title}
              </h3>
            </div>
            <div className="absolute left-[62.30vw] z-10">
              <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="relative w-[25.38vw] h-[25.38vw]">
                  <Image src="/bares/sticker-bares.png" alt="Sticker" fill />
                </div>
              </Draggable>
            </div>
          </div>
          {lang == "es" && <Map zonas={zonas} />}
          {lang == "en" && (
            <div className="px-[5.12vw] lg:px-0 space-y-20 relative overflow-hidden">
              <div className="flex flex-col md:flex-row w-full items-end mt-[4vw] md:mt-[6.37vh]">
                <div className="block">
                  <div className="relative w-[80vw] h-[80vw] md:w-[98.86vh] md:h-[93.62vh]">
                    <Image src="/bares/mapa-usa.png" alt="mapa-miami" fill />
                    <img
                      src="/bares/point-mapa.png"
                      alt=""
                      class="absolute miami top-[50vw] right-[2vw] md:top-[59vh] md:right-[3vh] w-[4vw] h-[4vw] md:w-[5vh] md:h-[5vh] hover:scale-110 transform ease-in-out duration-300 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="hidden lg:block absolute md:pl-[125vh] md:top-[36vh] z-10">
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

                <div className="lg:h-[65.72vh] lg:w-[454.87vh] pt-[5.94vh] flex flex-col justify-start items-start ">
                  <h3 className={`text-white text-[9.49vh] uppercase md:pb-[2.56vh] hidden md:block ${Knockout54UltraBold.className}`}>
                    {dict.bares.title}
                  </h3>
                  <div className="buenos-aires grid grid-rows-3 grid-flow-col gap-4 gap-x-[1.84vh] text-white relative">
                    {zonas.data.map((bar, index) => (
                      <div key={index} className="border-l-2 border-white border-dashed relative w-[84.61vw] h-[24.87vw] md:w-[43.20vh] md:h-[16.57vh]">
                        {index == 0 && (
                          <div className="text-black absolute pl-[0vw] md:pl-[2.40vh] -top-[8vw] md:top-[1vh]">
                            <span className={`${Knockout34.className} bg-white text-[1.41vh] leading-normal px-2 lg:py-0.5 uppercase`}>
                              {bar.attributes.zona}
                            </span>
                          </div>
                        )}
                        <div className="flex flex-col gap-y-[1.79vw] md:gap-y-[0.99vh] pl-[3.58vw] md:pl-[2.40vh] pt-[1.79vw] md:pt-[4.95vh] mx-auto">
                          <h1 className="text-[3.84vw] md:text-[2.12vh] leading-normal uppercase">
                            {bar.attributes.bares.data[0].attributes.Nombre}
                          </h1>
                          <div className="flex gap-x-2 items-center">
                            <a
                              href={`https://wa.me/${bar.attributes.bares.data[0].attributes.Telefono}?text=Hola, estoy interesado en más información.`}
                              rel="noopener noreferrer"
                            >
                              <div className="flex items-center justify-center gap-x-1">
                                <img
                                  src="/bares/wa.png"
                                  alt=""
                                  className="w-[1.84vh] h-[1.84vh]"
                                />
                                <span className="text-[3vw] md:text-[1.33vh]">
                                  {bar.attributes.bares.data[0].attributes.Telefono}
                                </span>
                              </div>
                            </a>

                            <div>
                              <img
                                src="/bares/line.png"
                                alt=""
                                className="h-3"
                              />
                            </div>
                            <a href={`mailto:${bar.attributes.bares.data[0].attributes.Email}`} target="_blank">
                              <div className="flex items-center justify-center gap-x-1">
                                <img
                                  src="/bares/mail.png"
                                  alt=""
                                  className="w-[2.23vh] h-[1.84vh]"
                                />
                                <span className="text-[3vw] md:text-[1.33vh]">
                                  {bar.attributes.bares.data[0].attributes.Email}
                                </span>
                              </div>
                            </a>
                          </div>
                          <span className="text-[3vw] md:text-[1.41vh]">
                            {bar.attributes.bares.data[0].attributes.Direccion}
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="sticker-temple-amarillo absolute left-[45vh] top-[23vh] hidden md:block">
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
                    <div className="sticker-temple-rosa absolute left-[5vh] top-[-30vh] hidden md:block">
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
                </div>
              </div>
              <div className="sticker-iso-rosa absolute right-[30vw] top-[120vw] md:left-[0vh] md:top-[65vh] md:right-0 md:hidden">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[23deg] w-[14.61vw] h-[14.61vw] md:w-[9.69vh] md:h-[9.69vh] relative">
                    <Image
                      src="/sticker-rosa-tempple.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-rosa absolute right-[40vw] top-[165vw] md:hidden">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className=" -rotate-[5deg] w-[30.76vw] h-[6.34vw] relative">
                    <Image
                      src="/sticker-temple-rosa.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-amarillo absolute right-[40vw] top-[315vw] md:hidden">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[-5deg] w-[30.76vw] h-[6.34vw] relative">
                    <Image
                      src="/sticker-temple-amarrillo.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="sticker-temple-verde absolute right-[50vw] top-[405vw] md:hidden">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[9deg] w-[30.76vw] h-[6.34vw] relative">
                    <Image
                      src="/sticker-temple-verde.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>

              <Footer />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
