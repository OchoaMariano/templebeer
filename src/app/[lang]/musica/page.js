import Image from "next/image";
import Header from "../../../../components/common/header";
import { Knockout54UltraBold } from "../layout";
import ScrollHorizontal from "../../../../components/ScrollHorizontal";
import Draggable from "../../../../components/common/Dragabble";
import Footer from "../../../../components/common/Footer";
import { getDictionary } from "../../../dictionaries";

async function getMusicaByLang(lang){
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/musicas?populate=image&locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
}

export default async function Page({ params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const allMusica = await getMusicaByLang(lang);

  return (
    <div>
      <Header dictonary={headerDic} />
      <section className="md:h-screen bg-cover bg-center md:flex md:items-center" style={{ backgroundImage: "url(/background-home.jpeg)" }}>
        <div className="page__wrapper pt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh] overflow-hidden">

          {/* HEADING */}
          <div className="title__wrapper pt-[3.84vw] md:pt-[2.83vh] relative flex flex-row items-center">
            <h1 className={`text-white text-[12.05vw] md:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}>
              {dict.musica.title}
            </h1>
            <div className="group pl-[3.07vw] md:pl-[6.37vh] flex flex-row cursor-pointer items-center">
              <div className="relative w-[13.33vw] h-[16.15vw] md:w-[9.06vh] md:h-[11.04vh] group-hover:rotate-[20deg] transition-transform duration-500">
                <Image src="/musica/parlante.png" alt="Sticker Parlante" fill />
              </div>
              <div className="relative w-[9vw] h-[9vw] md:w-[10.62vh] md:h-[10.62vh] group-hover:-rotate-[18deg] transition-transform duration-100 ">
                <Image src="/musica/sound.png" alt="Sticker Sound" fill />
              </div>
            </div>
          </div>

          <div className="content__wrapper flex items-start pt-[6.41vw] pb-[12.82vw] md:pt-[3.54vh] md:pb-[7.08vh] relative">
            {/* DESKTOP */}
            <ScrollHorizontal>
              <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-x-[2.83vh] gap-y-[5.12vw] w-[194.19vh] relative">
                {allMusica.data.map((item) => (
                  <div key={item.id} className={`bg-[${item.attributes.background}] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]`}>
                    <div className="card-1 relative">
                      <div className={`relative w-[${item.attributes.imageWidth}vh] h-[${item.attributes.imageHeight}vh] `}>
                        <Image
                          src={item.attributes.image.data.attributes.url}
                          alt={item.attributes.Title}
                          className={`w-[${item.attributes.imageWidth}vh] h-[${item.attributes.imageHeight}vh]`}
                          style={{
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          width={500}
                          height={300}
                        />
                      </div>
                      {item.attributes.video_url && (
                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                          <a
                            href={item.attributes.video_url}
                            target="_blank"
                          >
                            <div className="relative w-[2.83vh] h-[2.26vh]">
                              <Image src="/musica/video.svg" alt="Icono Video" fill />
                            </div>
                          </a>
                        </div>
                      )}
                      
                    </div>
                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                      <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                        {item.attributes.Title}
                      </h1>
                      <div className={`!text-[1.4vh] !font-normal`}
                        dangerouslySetInnerHTML={{
                          __html: item.attributes.bajada,
                        }}></div>
                    </div>
                  </div>
                ))}

                <div className="sticker-temple-rosa absolute left-[108vh] top-[14vh] hidden md:block">
                  <Draggable initialPosition={{ x: 0, y: 0 }}>
                    <div className="rotate-[13.25deg] w-[22.52vh] h-[4.76vh] relative">
                      <Image
                        src="/sticker-temple-rosa.png"
                        alt="Sticker Temple Beer Rosa"
                        fill
                      />
                    </div>
                  </Draggable>
                </div>
              </div>
            </ScrollHorizontal>

            {/* MOBILE */}
            <div className="flex flex-col justify-between items-start gap-y-[5.12vw] md:hidden">
              {allMusica.data.map((item) => (
                <div key={item.id} className={`bg-[${item.attributes.background}] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[100%]`}>
                  <div className="card-1 relative">
                    <div className={` relative w-[79.48vw] h-[85.74vw] `}>
                      <Image
                        src={item.attributes.image.data.attributes.url}
                        alt={item.attributes.Title}
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                        
                      />
                    </div>
                    {item.attributes.video_url && (
                      <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                        <a href={item.attributes.video_url} target="_blank">
                          <div className="relative w-[2.83vh] h-[2.26vh]">
                            <Image src="/musica/video.svg" alt="Icono video" fill />
                          </div>
                        </a>
                      </div>
                    )}
                    
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                      {item.attributes.Title}
                    </h1>
                    <div className={`text-[3.33vw] font-normal`}
                      dangerouslySetInnerHTML={{
                        __html: item.attributes.bajada,
                      }}></div>
                  </div>
                </div>
              ))}
            </div>


            <div className="absolute left-[28vh] bottom-[13vh]">
              <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="rotate-[-10.5deg] w-[20.67vh] h-[20.82vh] relative">
                  <Image src="/sticker-hand.png" alt="Icono Hand Temple Beer" fill />
                </div>
              </Draggable>
            </div>
            <div className="absolute right-[10vh] -top-[3vh] mb-4 mr-4 z-10">
              <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className=" w-[12.32vh] h-[12.18vh] relative">
                  <Image src="/sticker-musica.png" alt="Musica Temple Beer" fill />
                </div>
              </Draggable>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}