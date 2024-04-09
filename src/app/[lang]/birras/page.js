import { Suspense } from 'react'
import Image from "next/image";
import { Knockout54UltraBold } from "../layout";
import CarouselBirras from "../../../../components/birras/CarouselBirras";
import ScrollHorizontal from "../../../../components/ScrollHorizontal";
import Draggable from "../../../../components/common/Dragabble";
import Header from "../../../../components/common/header";
import Footer from "../../../../components/common/Footer";
import { getDictionary } from "../../../dictionaries";

// Get all beers from orden-birra ENDPOINT to show ordered CMS Beers
async function getOrderedBirrasByLang(lang){
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/orden-birra?populate=listaBirras.birras.productImage%2C%20listaBirras.birras.categorias_birra&locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
} 

export default async function Page({ params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const getAllOrderedBirras = await getOrderedBirrasByLang(lang);

  const { listaBirras } = getAllOrderedBirras.data.attributes;
  const { data: birras } = listaBirras.birras;

  const categorias = {
    'birras-clasicas': [],
    'birras-especiales': [],
    'birras-limitadas': []
  };

  birras.forEach(birra => {
    const categoriaSlug = birra.attributes.categorias_birra.data.attributes.slug;
    if (categorias.hasOwnProperty(categoriaSlug)) {
      categorias[categoriaSlug].push(birra);
    }
  });

  const { 
    'birras-clasicas': birrasClasicas, 
    'birras-especiales': birrasEspeciales, 
    'birras-limitadas': birrasLimitadas 
  } = categorias;

  return (
    <div>
      <Header dictonary={headerDic} />
      <section className="lg:h-screen bg-cover bg-center" style={{ backgroundImage: "url(/background-home.jpeg)" }}>
        <div className="grid content-center lg:content-end h-full pb-[7.08vh] pt-[16.15vw] lg:pt-[0] gap-y-[7.69vw] lg:gap-y-[0]">
          <div className="flex flex-col lg:pl-[34px]">
            <div className="title__wrapper flex pb-[4.24vh] px-3 lg:px-0">
              <h1 className={`font-bold text-white text-[12.05vw] lg:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}>
                {dict.birras.title} <br></br> {dict.birras.title2}
              </h1>
              <div className="sticker__wrapper relative">
                {lang === "es" && (
                  <div className="absolute right-[18vw] top-[15vw] lg:-right-[10vh] lg:top-0 z-10">
                    <Draggable initialPosition={{ x: 0, y: 0 }}>
                      <div className="rotate-[17deg] w-[13.84vw] h-[33.84vw] lg:w-[10.48vh] lg:h-[25.49vh] relative">
                        <Image
                          src="/nuestrasbirras/sticker-cerveza.svg"
                          alt="Icono vaso de cerveza"
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
                          alt="Icono vaso de cerveza"
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
            <Suspense fallback={<p>Cargando cervezas...</p>}>
              <ScrollHorizontal>
                <div className={`carousel__wrapper  h-[122.82vw] w-[100%] lg:h-[51.98vh] flex flex-row justify-start items-end pl-[10.76vw] lg:pl-[0px] mt-[4.29vw] lg:mt-[0]`}>
                  <CarouselBirras birras={birrasClasicas} />
                  <CarouselBirras birras={birrasLimitadas} />
                  <CarouselBirras birras={birrasEspeciales} />
                </div>
              </ScrollHorizontal>
            </Suspense>
          )}
          {lang === "en" && (
            <Suspense fallback={<p>Loading beers...</p>}>
              <ScrollHorizontal>
                <div className="carousel__wrapper w-[421vw] h-[122.82vw] lg:w-[100%] lg:h-[51.98vh] flex flex-row justify-start items-end pl-[10.76vw] lg:pl-[0px] mt-[4.29vw] lg:mt-[0]">
                  <CarouselBirras birras={birras} />
                </div>
              </ScrollHorizontal>
            </Suspense>
          )}
        </div>
        <Footer />
      </section>
    </div>
  );
}
