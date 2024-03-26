import Image from "next/image";
import Header from "../../../../components/common/header";
import { Knockout54UltraBold } from "../layout";
import ScrollHorizontal from "../../../../components/ScrollHorizontal";
import Draggable from "../../../../components/common/Dragabble";
import Footer from "../../../../components/common/Footer";
import { getDictionary } from "../../../dictionaries";

async function getMusicaEs() {
  const apiUrl =
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/musicas?populate=image&locale=es";
  const respuesta = await fetch(apiUrl);
  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return respuesta.json();
}

async function getMusicaEn() {
  const apiUrl =
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/musicas?populate=image&locale=en";
  const respuesta = await fetch(apiUrl);
  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return respuesta.json();
}

export default async function Page({ children, params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const musicaEs = getMusicaEs();
  const musicaEn = getMusicaEn();

  const [mEs, mEn] = await Promise.all([musicaEs, musicaEn]);

  return (
    <div>
      <Header dictonary={headerDic} />
      <section
        className="md:h-screen bg-cover bg-center md:flex md:items-center"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="page__wrapper pt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh] overflow-hidden">
          <div className="title__wrapper pt-[3.84vw] md:pt-[2.83vh] relative flex flex-row items-center">
            <h1
              className={`text-white text-[12.05vw] md:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}
            >
              {dict.musica.title}
            </h1>
            <div className="group pl-[3.07vw] md:pl-[6.37vh] flex flex-row cursor-pointer items-center">
              <div className="relative w-[13.33vw] h-[16.15vw] md:w-[9.06vh] md:h-[11.04vh] group-hover:rotate-[20deg] transition-transform duration-500">
                <Image src="/musica/parlante.png" alt="Sticker" fill />
              </div>

              <div className="relative w-[9vw] h-[9vw] md:w-[10.62vh] md:h-[10.62vh] group-hover:-rotate-[18deg] transition-transform duration-100 ">
                <Image src="/musica/sound.png" alt="Sticker" fill />
              </div>
            </div>
          </div>
          <div className="content__wrapper flex items-start pt-[6.41vw] pb-[12.82vw] md:pt-[3.54vh] md:pb-[7.08vh] relative">
            <ScrollHorizontal>
              {lang == "es" && (
                <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-x-[2.83vh] gap-y-[5.12vw] w-[194.19vh] relative">
                  {mEs.data.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-[${item.attributes.background}] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]`}
                    >
                      <div className="card-1 relative">
                        <div
                          className={`relative w-[${item.attributes.imageWidth}vh] h-[${item.attributes.imageHeight}vh] `}
                        >
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
                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                          <a
                            href="https://www.instagram.com/callecortada_ar/?hl=es"
                            target="_blank"
                          >
                            <div className="relative w-[2.83vh] h-[2.26vh]">
                              <Image src="/musica/video.svg" alt="" fill />
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                        <h1
                          className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}
                        >
                          {item.attributes.Title}
                        </h1>

                        <div
                          className={`!text-[1.4vh] !font-normal`}
                          dangerouslySetInnerHTML={{
                            __html: item.attributes.bajada,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}

                  <div className="sticker-temple-rosa absolute left-[108vh] top-[14vh] hidden md:block">
                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                      <div className="rotate-[13.25deg] w-[22.52vh] h-[4.76vh] relative">
                        <Image
                          src="/sticker-temple-rosa.png"
                          alt="Temple Beer"
                          fill
                        />
                      </div>
                    </Draggable>
                  </div>
                </div>
              )}
              {lang == "en" && (
                <div className="hidden md:flex flex-col md:flex-row justify-start items-start gap-x-[2.83vh] gap-y-[5.12vw] w-[194.19vh] relative">
                  {mEn.data.map((item) => (
                    <div
                      key={item.id}
                      className={`bg-[${item.attributes.background}] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]`}
                    >
                      <div className="card-4 relative">
                        <div
                          className={`relative w-[${item.attributes.imageWidth}vh] h-[${item.attributes.imageHeight}vh] `}
                        >
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
                      </div>
                      <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                        <h1
                          className={`text-[2.54vh] uppercase leading-none ${Knockout54UltraBold.className}`}
                        >
                          {item.attributes.Title}
                        </h1>
                        <div
                          className={`!text-[1.4vh] !font-normal`}
                          dangerouslySetInnerHTML={{
                            __html: item.attributes.bajada,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div className="sticker-temple-rosa absolute left-[108vh] top-[14vh] hidden md:block">
                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                      <div className="rotate-[13.25deg] w-[22.52vh] h-[4.76vh] relative">
                        <Image
                          src="/sticker-temple-rosa.png"
                          alt="Temple Beer"
                          fill
                        />
                      </div>
                    </Draggable>
                  </div>
                </div>
              )}
            </ScrollHorizontal>
            {lang == "es" && (
              <div className="flex flex-col justify-between items-start gap-y-[5.12vw] md:hidden">
                <div className="bg-[#0e359b] p-[5.12vw] flex flex-col justify-between gap-y-[5.38vw] w-[89.74vw] h-[168.12vw]">
                  <div className="card-1 relative">
                    <div className="relative w-[79.48vw] h-[85.74vw]">
                      <Image
                        src="/musica/card-1.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                      <a
                        href="https://www.instagram.com/callecortada_ar/?hl=es"
                        target="_blank"
                      >
                        <div className="relative w-[5.12vw] h-[4.10vw]">
                          <Image src="/musica/video.svg" alt="" fill />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      CUANDO LA CULTURA EMERGENTE TOMA LA CALLE.
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      CALLECORTADA es la máxima expresión del propósito
                      potenciador de la cultura urbana de TEMPLE. Un festival en
                      el que músicxs, graffiterxs, bailarines, poetas,
                      intervenciones artísticas y expositores de distintas áreas
                      se encuentran para crear algo único e irrepetible,
                      representativo de una generación.
                    </p>
                  </div>
                </div>
                <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                  <div className="card-2 relative">
                    <div className="relative w-[79.48vw] h-[89.74vw]">
                      <Image
                        src="/musica/card-2.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                      <a
                        href="https://www.youtube.com/watch?v=z5zQPUxMe4U&t=2s"
                        target="_blank"
                      >
                        <div className="relative w-[5.12vw] h-[4.10vw]">
                          <Image src="/musica/video.svg" alt="" fill />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      GIRA DE VERANO
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      En enero del 2022, nos llevamos a cuatro artistas
                      emergentes a recorrer todo el país en su primera gira
                      musical. Ellxs son Marki, Ana Espil, Kastiello y Acus,
                      cuatro #ArtistasTEMPLE que nos inspiran por sus ritmos, su
                      vibra y su talento siempre en movimiento.
                    </p>
                  </div>
                </div>
                <div className="bg-[#f1bf00] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[150.12vw]">
                  <div className="card-3 relative">
                    <div className="relative w-[79.48vw] h-[99.74vw]">
                      <Image
                        src="/musica/card-3.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                      <a
                        href="https://www.youtube.com/playlist?list=PLmfNJICPgwpd__EQ5IoP5G1HDudmEzun7"
                        target="_blank"
                      >
                        <div className="relative w-[5.12vw] h-[4.10vw]">
                          <Image src="/musica/video.svg" alt="" fill />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      DOCUS TEMPLE
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Hicimos una serie de documentales sobre lxs artistas
                      emergentes que nos inspiran a diario. ¿Ya enfriaste las
                      birras? ¡Dale que con el documental las pintas son más
                      ricas!
                    </p>
                  </div>
                </div>
                <div className="bg-[#1f9996] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[165.12vw]">
                  <div className="card-4 relative">
                    <div className="relative w-[79.48vw] h-[105.74vw]">
                      <Image
                        src="/musica/card-4.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                      <a
                        href="https://www.youtube.com/playlist?list=PLmfNJICPgwpdR9kwcY_zKjVPYfSOgre02&si=cFytbk_Ymb9l9Tf9"
                        target="_blank"
                      >
                        <div className="relative w-[5.12vw] h-[4.10vw]">
                          <Image src="/musica/video.svg" alt="" fill />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      RITUAL
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Un espacio de cultura emergente, donde el arte y la
                      expresión se encuentran, siempre con una birrita en mano y
                      entre amigxs. En vivo desde el Polo Cultural Saldías en la
                      Ciudad de Buenos Aires y en directo para todos los TEMPLE
                      de Argentina.
                    </p>
                  </div>
                </div>
                <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[150.12vw]">
                  <div className="card-5 relative">
                    <div className="relative w-[79.48vw] h-[99.74vw]">
                      <Image
                        src="/musica/card-5.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                        fill
                      />
                    </div>
                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                      <a
                        href="https://www.youtube.com/playlist?list=PLmfNJICPgwpfcaud8ayed8F5xfrnVaI8K&si=TYNHHXBoyzB8Sxi1"
                        target="_blank"
                      >
                        <div className="relative w-[5.12vw] h-[4.10vw]">
                          <Image src="/musica/video.svg" alt="" fill />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      RANCHAR
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Un espacio improvisado. Un plano continuo con el ambiente
                      vibrando. Un TEMPLE en cada canción de artistas emergentes
                      que están sonando.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {lang == "en" && (
              <div className="flex flex-col justify-between items-start gap-y-[5.12vw] md:hidden">
                <div className="bg-[#1f9996] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                  <div className="card-4 relative">
                    <div className="relative w-[79.48vw] h-[109.74vw]">
                      <Image
                        src="/musica/open-desk.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      Monthly Open Desk
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Once a month TEMPLE hosts an open decks night.<br></br>
                      No mixing needed — just selecting and dancing.
                    </p>
                  </div>
                </div>
                <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[190.12vw]">
                  <div className="card-5 relative">
                    <div className="relative w-[79.48vw] h-[129.74vw]">
                      <Image
                        src="/musica/planeta-rave.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      PLANETA RAVE
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Planeta Rave was founded in 2021, beginning as an
                      electronic music content platform, moving forward in time,
                      it ended up becoming an event producer, working with the
                      best underground electronic music djs in the world. They
                      bring the electro sound to Temple’s booth.
                    </p>
                  </div>
                </div>
                <div className="bg-[#f1bf00] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                  <div className="card-3 relative">
                    <div className="relative w-[79.48vw] h-[109.74vw]">
                      <Image
                        src="/musica/resampled-2.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      RESAMPLED
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Vinyl only night (vinyl enthusiast) playing a range of
                      Techno, Electro and Minimal. Promoting local and
                      international talent. Curated by local dj Franco
                      Alexander.
                    </p>
                  </div>
                </div>
                <div className="bg-[#0e359b] p-[5.12vw] flex flex-col justify-between gap-y-[5.38vw] w-[89.74vw] h-[145.12vw]">
                  <div className="card-1 relative">
                    <div className="relative w-[79.48vw] h-[89.74vw]">
                      <Image
                        src="/musica/bunker-blizz.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      BUNKER BLISS
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Presents B-Side Sessions at Temple. Curated by Mark Chez,
                      Bunker Bliss is an Underground Music Event & Selective
                      Talent Showcase focused on uniting Deep-digging artists
                      with like-minded people.
                    </p>
                  </div>
                </div>
                <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[180.12vw]">
                  <div className="card-5 relative">
                    <div className="relative w-[79.48vw] h-[119.74vw]">
                      <Image
                        src="/musica/nena-2.jpg"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                        fill
                      />
                    </div>
                  </div>
                  <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                    <h1
                      className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}
                    >
                      NENA!
                    </h1>
                    <p className={`text-[3.33vw] font-normal`}>
                      Nena is a monthly residence curated by Tauro, an
                      Argentinian DJ who has been playing for years in Buenos
                      Aires at venues like Club 69, Crobar and many others. At
                      her Temple residency she invites DJs to play with her all
                      night long. Tech House predominates.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="absolute left-[28vh] bottom-[13vh]">
              <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className="rotate-[-10.5deg] w-[20.67vh] h-[20.82vh] relative">
                  <Image src="/sticker-hand.png" alt="Temple Beer" fill />
                </div>
              </Draggable>
            </div>
            <div className="absolute right-[10vh] -top-[3vh] mb-4 mr-4 z-10">
              <Draggable initialPosition={{ x: 0, y: 0 }}>
                <div className=" w-[12.32vh] h-[12.18vh] relative">
                  <Image src="/sticker-musica.png" alt="Temple Beer" fill />
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