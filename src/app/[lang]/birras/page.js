import Image from "next/image";
import { Knockout54UltraBold } from "../layout";
import CarouselBirras from "../../../../components/birras/CarouselBirras";
import ScrollHorizontal from "../../../../components/ScrollHorizontal";
import Draggable from "../../../../components/common/Dragabble";
import Header from "../../../../components/common/header";
import Footer from "../../../../components/common/Footer";
import { getDictionary } from "../../../dictionaries";

async function getBirrasClasicas() {
  const respuesta = await fetch(
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?populate=*&filters%5Bcategorias_birra%5D[slug]=birras-clasicas&locale=es",
    { cache: "no-store" }
  );
  return respuesta.json();
}

async function getBirrasEspeciales() {
  const respuesta = await fetch(
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?populate=*&filters%5Bcategorias_birra%5D[slug]=birras-especiales&locale=es",
    { cache: "no-store" }
  );
  return respuesta.json();
}

async function getBirrasLimitadas() {
  const respuesta = await fetch(
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?populate=*&filters%5Bcategorias_birra%5D[slug]=birras-limitadas&locale=es",
    { cache: "no-store" }
  );
  return respuesta.json();
}

async function getBirrasUs() {
  const respuesta = await fetch(
    "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?populate=*&sort=id%3Adesc&locale=en",
    { cache: "no-store" }
  );
  return respuesta.json();
}



export default async function Page({ children, params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const BirrasUs = getBirrasUs();
  const BirrasClasicas = getBirrasClasicas();
  const BirrasEspeciales = getBirrasEspeciales();
  const BirrasLimitadas = getBirrasLimitadas();

  const [bClasicas, bEspeciales, bLimitadas, bUs] = await Promise.all([
    BirrasClasicas,
    BirrasEspeciales,
    BirrasLimitadas,
    BirrasUs,
  ]);

  const bClasicasTotal = bClasicas.meta.pagination.total
  const bEspecialesTotal = bEspeciales.meta.pagination.total
  const bLimitadasTotal = bLimitadas.meta.pagination.total

  const countBirras = bClasicasTotal + bEspecialesTotal + bLimitadasTotal

  const widthBeerDesktop = 26.34
  const widthDesktop = (countBirras * widthBeerDesktop) - 12
  const classWidth = `lg:w-[${widthDesktop}vh]`

  console.log(classWidth)

  return (
    <div>
      <Header dictonary={headerDic} />
      <section
        className="lg:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="grid content-center lg:content-end h-full pb-[7.08vh] pt-[16.15vw] lg:pt-[0] gap-y-[7.69vw] lg:gap-y-[0]">
          <div className="flex flex-col lg:pl-[34px]">
            <div className="title__wrapper flex pb-[4.24vh] px-3 lg:px-0">
              <h1
                className={`font-bold text-white text-[12.05vw] lg:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}
              >
                {dict.birras.title} <br></br> {dict.birras.title2}
              </h1>
              <div className="sticker__wrapper relative">
                {lang === "es" && (
                  <div className="absolute right-[18vw] top-[15vw] lg:-right-[10vh] lg:top-0 z-10">
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
                )}
                {lang === "en" && (
                  <div className="absolute -right-[10vw] top-[5vw] lg:-right-[10vh] lg:top-0 z-10">
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
                )}
              </div>
            </div>
          </div>
          {lang === "es" && (
            <ScrollHorizontal>
              <div className={`carousel__wrapper w-[1172vw] h-[122.82vw] ${classWidth} lg:w-[567.42vh] lg:h-[51.98vh] flex flex-row justify-start items-end pl-[10.76vw] lg:pl-[0px] mt-[4.29vw] lg:mt-[0]`}>
                <CarouselBirras birras={bClasicas.data} />
                <CarouselBirras birras={bLimitadas.data} />
                <CarouselBirras birras={bEspeciales.data} />
              </div>
            </ScrollHorizontal>
          )}
          {lang === "en" && (
            <ScrollHorizontal>
              <div className="carousel__wrapper w-[421vw] h-[122.82vw] lg:w-[100%] lg:h-[51.98vh] flex flex-row justify-start items-end pl-[10.76vw] lg:pl-[0px] mt-[4.29vw] lg:mt-[0]">
                <CarouselBirras birras={bUs.data} />
              </div>
            </ScrollHorizontal>
          )}
        </div>
        <Footer />
      </section>
    </div>
  );
}
