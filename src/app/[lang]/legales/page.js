import Image from "next/image";
import Header from "../../../../components/common/header";
import ScrollHorizontal from "../../../../components/ScrollHorizontal";
import Draggable from "../../../../components/common/Dragabble";
import { getDictionary } from "../../../dictionaries";

async function getLegales(lang) {
  const apiUrl = `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/legale?populate=secciones&locale=${lang}`;
  const respuesta = await fetch(apiUrl);
  if (!respuesta.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return respuesta.json();
}

export default async function Page({ params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const legales = await getLegales(lang);

  return (
    <div>
      <Header dictonary={headerDic} />
      <section
        className="md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="page__wrapper__legales hidden md:flex flex-col justify-start h-full">
          <ScrollHorizontal>
            <div className="flex content__wrapper text-white flex-row gap-x-[10vh] items-start w-[400vh] px-[3vh] h-full relative">
              <div class="w-[70vh] flex flex-col gap-y-[4vh]">
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[0].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[0].texto}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[1].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[1].texto}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[2].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[2].texto}
                  </p>
                </div>
              </div>
              <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[3].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[3].texto}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[4].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[4].texto}
                  </p>
                </div>
              </div>
              <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[5].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[5].texto}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[2vh]">
                  <h1 className="text-[3vh] leading-none">
                    {legales.data.attributes.secciones[6].titulo}
                  </h1>
                  <p className="text-[1.51vh]">
                    {legales.data.attributes.secciones[6].texto}
                  </p>
                </div>
              </div>
              <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                <h1 className="text-[3vh] leading-none">
                  {legales.data.attributes.secciones[7].titulo}
                </h1>
                <p className="text-[1.51vh]">
                  {legales.data.attributes.secciones[7].texto}
                </p>
              </div>
              <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                <h1 className="text-[3vh] leading-none">
                  {legales.data.attributes.secciones[8].titulo}
                </h1>
                <p className="text-[1.51vh]">
                  {legales.data.attributes.secciones[8].texto}
                </p>
              </div>

              <div className="absolute left-[110vh] bottom-[10vh] z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[-10.5deg] w-[22.80vh] h-[4.53vh] relative">
                    <Image
                      src="/sticker-temple-amarrillo.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>

              <div className="absolute left-[100vh] bottom-[10vh] z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[-10.5deg] w-[22.80vh] h-[4.53vh] relative">
                    <Image
                      src="/sticker-temple-rosa.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>

              <div className="absolute left-[152vh] top-[5vh] z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[17deg] w-[9.69vh] h-[9.69vh] relative">
                    <Image
                      src="/sticker-rosa-tempple.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>

              <div className="absolute  right-[130vh] top-[66vh]  z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[17deg] w-[9.69vh] h-[9.69vh] relative">
                    <Image
                      src="/sticker-rosa-tempple.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>

              <div className="absolute right-[105vh] top-[56vh]  z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                    <Image
                      src="/sticker-temple-verde.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="absolute right-[105vh] top-[58vh] z-10">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                    <Image
                      src="/sticker-temple-amarrillo.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
              <div className="absolute left-[62vh] bottom-[4vh] mb-4 mr-4 z-30">
                <Draggable initialPosition={{ x: 0, y: 0 }}>
                  <div className=" -rotate-[5deg] w-[25.07vh] h-[5.09vh] relative">
                    <Image
                      src="/sticker-temple-rosa.png"
                      alt="Temple Beer"
                      fill
                    />
                  </div>
                </Draggable>
              </div>
            </div>
          </ScrollHorizontal>
        </div>
        <div className="md:hidden page__wrapper__legales__mobile flex flex-col px-[5.12vw] pt-[18.15vw] pb-[9vw] overflow-hidden text-white">
          <div className="flex flex-col gap-y-[4.5vh]">
            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[0].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[0].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[1].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[1].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[2].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[2].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[3].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[3].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[4].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[4].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[5].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[5].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[6].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[6].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[7].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[7].texto}
              </p>
            </div>

            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
              <h1 className="text-[4vw]">
                {legales.data.attributes.secciones[8].titulo}
              </h1>
              <p className="text-[3vw]">
                {legales.data.attributes.secciones[8].texto}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
