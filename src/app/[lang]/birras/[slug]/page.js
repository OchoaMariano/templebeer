import Link from "next/link";
import Image from "next/image";
import { Suspense } from 'react'
import { GothamBook } from "../../layout";
import { Knockout54UltraBold, Knockout34 } from "../../layout";
import ScrollHorizontal from "../../../../../components/ScrollHorizontal";
import VideoHover from "../../../../../components/birras/VideoHover";
import VideoMobile from "../../../../../components/birras/VideoMobile";
import Header from "../../../../../components/common/header";
import Footer from "../../../../../components/common/Footer";
import CervezasData from "../../../../../data/cervezas.json";
import CervezasDataEn from "../../../../../data/cervezas-en.json";
import { getDictionary } from "../../../../dictionaries";
import Draggable from "../../../../../components/common/Dragabble";

//
// TODO: TOMAR "MEDIDAS" O RELACION DE ASPECTO DE LAS IMAGENES Y VIDEOS PARA RENDERIZAR CUSTOM Y DEJAR DE LLAMAR AL OBJETO ESTATICO CON LA DATA --> CervezasData y CervezasDataEn 
//

// Get Beer by Slug and Lang with all fields and relations
async function getBirras(lang, slug) {
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?filters%5Bslug%5D=${slug}&populate=propiedadesBirra%2C%20productImage%2C%20backgroundImage%2C%20decorationBackgroundImageLeft%2C%20decorationBackgroundImageRight%2CdetailColumns.birras.productImage%2C%20detailColumns.image%2C%20detailColumns.video&locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
}

// Get Beer by Slug and Lang with all fields and relations
async function getAllBirras(lang) {
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/birras?locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
}

export default async function Page({ params }) {
  const { slug, lang } = params; // Asumiendo que "params" contiene un objeto con la propiedad "slug"

  const allBirras = getAllBirras(lang);
  const birrasBySlug = getBirras(lang, slug);

  const [allB, bbs] = await Promise.all([allBirras, birrasBySlug]);

  const birraObject = bbs.data[0];
  const allBirraList = allB;

  let detailColumnsClaim, detailColumnsGrid, detailColumnsVideo;

  birraObject.attributes.detailColumns.forEach((element) => {
    if (element.__component == "shared.column-claim") {
      detailColumnsClaim = element;
    } else if (element.__component == "shared.grid-birras") {
      detailColumnsGrid = element;
    } else if (element.__component == "shared.column-content") {
      detailColumnsVideo = element;
    }
  });

  const orderDetailColumnsGris = [...detailColumnsGrid.birras.data];
  orderDetailColumnsGris.sort((a, b) => b.id - a.id);

  const { darkColor } = birraObject.attributes // Texto y color cuando el fondo es claro o oscuro (TRUE OR FALSE)
  const { hightlightColor } = birraObject.attributes // Color destacado de la cerveza

  let cerveza = null;

  if (lang === "es") {
    cerveza = CervezasData.Cervezas.find((c) => c.slug === slug);
    if (!cerveza) {
      return <div>Cerveza no encontrada</div>;
    }
  }

  if (lang === "en") {
    cerveza = CervezasDataEn.Cervezas.find((c) => c.slug === slug);
    if (!cerveza) {
      return <div>Cerveza no encontrada</div>;
    }
  }

  const langg = params.lang;
  const dict = await getDictionary(langg);
  const headerDic = dict.header;

  return (
    <>
      <Suspense fallback={<p>Cargando cerveza...</p>}>
        {/* DESKTOP VIEW */}
        <div className="desktop hidden lg:block">
          {/* NAV HEADER */}
          <Header dictonary={headerDic} />

          {/* SECTIO CONTAINER */}
          <section className="h-screen bg-cover bg-center" style={{
              backgroundImage: birraObject.attributes.backgroundImage?.data
                ? `url(${birraObject.attributes.backgroundImage?.data.attributes.url})`
                : "url(/background-home.jpeg)",
            }}
          >
            <div className="product-viewport">
              <div className="page_product_wrapper relative h-full">
                <ScrollHorizontal>
                  <div className="row">
                    <div className="column">
                      <div className="product-box-1">
                        <div className="absolute right-0 bottom-0">
                          <div className="relative w-[47.30vh] h-[83vh]">
                            <Image
                              src={birraObject.attributes.productImage.data.attributes.url}
                              alt={birraObject.attributes.productImage.data.attributes.alternativeText}
                              style={{
                                objectFit: "cover",
                              }}
                              fill
                            />
                          </div>
                        </div>

                        <div className="main-content-wrapper">

                          <div className="product-title-box">
                            <h1 className={`text-[9.49vh] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>
                              {birraObject.attributes.nombre}
                            </h1>
                          </div>
                          {/* DONE - 100% */}
                          <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[2.97vh]">
                            <Link
                              className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px] group"
                              href={`/${lang}/birras`}
                            >
                              <Image
                                src="/detallebirras/btn-arrow.png"
                                alt="flecha boton"
                                width={16}
                                height={17}
                                className="group-hover:hidden"
                              />
                              <Image
                                src="/arrow-hover.png"
                                alt="flecha boton hover"
                                width={16}
                                height={17}
                                className="hidden group-hover:block group-hover:-rotate-30"
                              />
                              BIRRAS
                            </Link>
                            {lang === "es" && (
                              <a
                                className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center"
                                target="_blank"
                                href={birraObject.attributes.urlComprar}
                              >
                                COMPRAR
                              </a>
                            )}
                          </div>
                          <div className="description__wrapper flex flex-col pt-[2.26vh]">
                            <div
                              className={`text-white uppercase text-[1.55vh] w-[50.88vh] ${GothamBook.className}`}
                              style={{
                                color: darkColor ? "black" : "white",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: birraObject.attributes.descripcion,
                              }}
                            ></div>

                            {lang === "es" && (
                              <div className="propiedades__wrapper flex flex-row text-[1.55vh]  pt-[2.97vh]">
                                <span
                                  className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                                  style={{
                                    color: darkColor ? "black" : "white",
                                    borderColor: darkColor ? "black" : "white",
                                  }}
                                >
                                  ALC. {birraObject.attributes.propiedadesBirra.alcohol}%
                                </span>
                                <span
                                  className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                                  style={{
                                    color: darkColor ? "black" : "white",
                                    borderColor: darkColor ? "black" : "white",
                                  }}
                                >
                                  IBU {birraObject.attributes.propiedadesBirra.ibu}
                                </span>
                                <span
                                  className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                                  style={{
                                    color: darkColor ? "black" : "white",
                                    borderColor: darkColor ? "black" : "white",
                                  }}
                                >
                                  {birraObject.attributes.propiedadesBirra.size} CC.
                                </span>
                              </div>
                            )}
                            {lang === "en" && (
                              <div className="propiedades__wrapper flex flex-row text-[11px  pt-[2.97vh]">
                                <span
                                  className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                                >
                                  ALC. {birraObject.attributes.propiedadesBirra.alcohol}
                                </span>
                                <span
                                  className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                                >
                                  FLOZ {birraObject.attributes.propiedadesBirra.size}
                                </span>
                              </div>
                            )}
                          </div>
                          {birraObject.attributes.decorationBackgroundImageLeft.data && (
                            <div className="trama__wrapper absolute bottom-0 left-0">
                              <div className="relative w-[600px] h-[200px] z-20">
                                <Image
                                  src={birraObject.attributes.decorationBackgroundImageLeft.data?.attributes.url}
                                  alt={birraObject.attributes.decorationBackgroundImageLeft.data?.attributes.alternativeText}
                                  fill
                                  style={{
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* DONE - 100% */}
                    <div className="column">
                      <div className="product-box-2">
                        {/* Renderiza el video si detailColumnsClaim.video.data no es null, de lo contrario renderiza la imagen */}
                        {detailColumnsClaim.video.data ? (
                          <div
                            className="relative w-[52.69vh] h-[55.52vh]"
                            style={{
                              width: cerveza.info?.widthPrimary || "52.69vh",
                              height: cerveza.info?.heightPrimary || "55.52vh",
                            }}
                          >
                            <video
                              src={detailColumnsClaim.video.data.attributes.url}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                              autoPlay
                              playsInline
                              loop
                              muted
                            />
                          </div>
                        ) : (
                          <div
                            className="relative w-[52.69vh] h-[55.52vh]"
                            style={{
                              width: cerveza.info?.widthPrimary || "52.69vh",
                              height: cerveza.info?.heightPrimary || "55.52vh",
                            }}
                          >
                            <Image
                              src={detailColumnsClaim.image.data.attributes.url}
                              alt={detailColumnsClaim.image.data.attributes.alternativeText}
                              style={{
                                objectFit: "cover",
                              }}
                              fill
                            />
                          </div>
                        )}

                        <div className="pt-[2.54vh] pb-[2.54vh]">
                          <div
                            className={`text-white text-[1.41vh] ${GothamBook.className}`}
                            dangerouslySetInnerHTML={{
                              __html: detailColumnsClaim.bajada,
                            }}
                          ></div>
                        </div>
                        <div className="">
                          <div
                            className={`leading-[3.39vh] text-[3vh] uppercase ${Knockout54UltraBold.className}`}
                            style={{ color: hightlightColor || "white" }}
                            dangerouslySetInnerHTML={{
                              __html: detailColumnsClaim.claim,
                            }}
                          ></div>
                        </div>

                        {detailColumnsClaim.video.data === null &&
                          detailColumnsClaim.image.data === null && (
                            <div className="sticker-temple-amarillo absolute -left-[7vh] top-[3vh] hidden md:block">
                              <Draggable initialPosition={{ x: 0, y: 0 }}>
                                <div className="-rotate-[14.25deg] w-[16.28vh] h-[3.42vh] relative">
                                  <Image
                                    src="/sticker-temple-amarrillo.png"
                                    alt="Temple Beer sticker amarillo"
                                    fill
                                  />
                                </div>
                              </Draggable>
                            </div>
                          )}
                        {detailColumnsClaim.video.data === null &&
                          detailColumnsClaim.image.data === null && (
                            <div className="sticker-iso-rosa absolute right-[5vh] top-[30vh] hidden md:block">
                              <Draggable initialPosition={{ x: 0, y: 0 }}>
                                <div className="rotate-[23deg] w-[9.69vh] h-[9.69vh] relative">
                                  <Image
                                    src="/sticker-rosa-tempple.png"
                                    alt="Temple Beer sticker rosa"
                                    fill
                                  />
                                </div>
                              </Draggable>
                            </div>
                          )}
                      </div>
                    </div>
                    
                    {/* DONE - 100% */}
                    <div className="column">
                      <VideoHover cerveza={detailColumnsVideo} hightlightColor={hightlightColor}/>
                    </div>

                    {/* DONE - 100% */}
                    <div className="column">
                      {lang == "es" && (
                        <div className="product-box-4 relative h-full">
                          {birraObject.attributes.decorationBackgroundImageRight.data && (
                            <div className="absolute right-0 top-0">
                              <div className="relative w-[35.83vh] h-[16.28vh]">
                                <Image
                                  src={birraObject.attributes.decorationBackgroundImageRight.data.attributes.url}
                                  alt={birraObject.attributes.decorationBackgroundImageRight.data.attributes.alternativeText}
                                  style={{
                                    objectFit: "cover",
                                  }}
                                  fill
                                />
                              </div>
                            </div>
                          )}
                          <div className="beers-content-wrapper flex flex-col justify-between">
                            <div className="title pb-[0.21vh]">
                              <h2
                                className="text-[5.66vh] uppercase px-[2.40vh]"
                                style={{ color: hightlightColor || "white" }}
                              >
                                BIRRAS
                              </h2>
                            </div>
                            <div className="beer-grid grid grid-cols-4 grid-rows-2">
                              {detailColumnsGrid?.birras.data.map((clasicasObj, index) => (
                                <div
                                  className="beer-item py-[2.12vh] px-[0.42vh]"
                                  key={index}
                                >
                                  <Link
                                    href={`/${lang}/birras/${clasicasObj.attributes.slug}`}
                                  >
                                    <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                      <Image
                                        src={clasicasObj.attributes.productImage.data.attributes.formats.small.url}
                                        alt={clasicasObj.attributes.productImage.data.attributes.alternativeText}
                                        style={{
                                          objectFit: "cover",
                                        }}
                                        fill
                                      />
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                            <div className="beer-nav">
                              <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                                {allBirraList.data.map((birraObj, index) => (
                                  <span
                                    key={index}
                                    className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`}
                                  >
                                    <Link
                                      className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase"
                                      href={`/${lang}/birras/${birraObj.attributes.slug}`}
                                    >
                                      {birraObj.attributes.nombre}
                                    </Link>
                                  </span>
                                ))}
                              </nav>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {lang == "en" && (
                        <div className="product-box-4-en relative h-full">
                          <div className="beers-content-wrapper flex flex-col justify-between">
                            <div className="title pb-[0.21vh]">
                              <h2
                                className="text-[5.66vh] uppercase px-[2.40vh]"
                                style={{ color: hightlightColor || "white" }}
                              >
                                BEERS
                              </h2>
                            </div>
                          </div>
                          <div className="beer-grid grid grid-cols-3 grid-rows-2">
                            {orderDetailColumnsGris.map((enObj, index) => (
                              <div
                                className="beer-item py-[2.12vh] px-[0.42vh]"
                                key={index}
                              >
                                <Link href={`/${lang}/birras/${enObj.attributes.slug}`}>
                                  <div className="relative w-[14.02vh] h-[25.07vh] hover:scale-110 transition duration-100 transform">
                                    <Image
                                      src={enObj.attributes.productImage.data.attributes.formats.small.url}
                                      alt={enObj.attributes.productImage.data.attributes.alternativeText}
                                      style={{
                                        objectFit: "cover",
                                      }}
                                      fill
                                    />
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="beer-nav">
                            <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2 pr-6">
                              {orderDetailColumnsGris.map((birraObj, index) => (
                                <span
                                  key={index}
                                  className={`py-[2px] px-[5px] text-[1.41vh] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`}
                                >
                                  <Link
                                    className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase"
                                    href={`/${lang}/birras/${birraObj.attributes.slug}`}
                                  >
                                    {birraObj.attributes.nombre}
                                  </Link>
                                </span>
                              ))}
                            </nav>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollHorizontal>
              </div>
            </div>
          </section>
        </div>

        {/* MOBILE VIEW */}
        <div className="mobile lg:hidden">
          <Header dictonary={headerDic} />

          {/* API DONE - 100% */}
          <section
            className="bg-cover bg-center pt-[20vw]"
            style={{
              backgroundImage: birraObject.attributes.backgroundImage?.data
              ? `url(${birraObject.attributes.backgroundImage?.data.attributes.url})`
              : "url(/background-home.jpeg)",
            }}
          >
            {/* API DONE - 90% -- FALTA: URL BUY & cerveza.style?.textColor */}
            <div className="product-box-1-mobile">
              <div className="product-title-box-mobile">
                <h1 className={`text-[12.05vw] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>
                  {birraObject.attributes.nombre}
                </h1>
              </div>
              <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[3.84vw]">
                <Link
                  className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px] group"
                  href={`/${lang}/birras`}
                >
                  <Image
                    src="/detallebirras/btn-arrow.png"
                    alt="flecha boton"
                    width={16}
                    height={17}
                    className="group-hover:hidden"
                  />
                  <Image
                    src="/arrow-hover.png"
                    alt="flecha boton hover"
                    width={16}
                    height={17}
                    className="hidden group-hover:block group-hover:-rotate-30"
                  />
                  {dict.birras.beers}
                </Link>
                {lang == "es" && (
                  <Link
                    className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center"
                    href={birraObject.attributes.urlComprar}
                  >
                    COMPRAR
                  </Link>
                )}
              </div>
              <div className="description__wrapper flex flex-col">
                <div
                  className={`text-white uppercase text-[2.82vw] ${GothamBook.className}`}
                  style={{ color: darkColor ? "black" : "white" }}
                  dangerouslySetInnerHTML={{ __html: birraObject.attributes.descripcion }}
                ></div>

                {lang === "es" && (
                  <div className="propiedades__wrapper flex flex-row text-[2.82vw] pt-[3.84vw]">
                    <span
                      className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                      style={{
                        color: darkColor ? "black" : "white",
                        borderColor: darkColor ? "black" : "white",
                      }}
                    >
                      ALC. {birraObject.attributes.propiedadesBirra.alcohol}
                    </span>
                    <span
                      className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                      style={{
                        color: darkColor ? "black" : "white",
                        borderColor: darkColor ? "black" : "white",
                      }}
                    >
                      IBU {birraObject.attributes.propiedadesBirra.ibu}
                    </span>
                    <span
                      className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                      style={{
                        color: darkColor ? "black" : "white",
                        borderColor: darkColor ? "black" : "white",
                      }}
                    >
                      {birraObject.attributes.propiedadesBirra.size} CC.
                    </span>
                  </div>
                )}
                {lang === "en" && (
                  <div className="propiedades__wrapper flex flex-row text-[2.82vw] pt-[3.84vw]">
                    <span
                      className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                    >
                      ALC. {birraObject.attributes.propiedadesBirra.alcohol}
                    </span>
                    <span
                      className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}
                    >
                      FLOZ {birraObject.attributes.propiedadesBirra.size}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* API DONE - 100% */}
            <div className="product-box-2-mobile">
              <div className="flex justify-center w-[100vw] h-[122.56vw] mt-[10vw]">
                <div className="relative w-[57.94vw] h-[122.56vw]">
                  <Image
                    src={birraObject.attributes.productImage.data.attributes.url}
                    alt={birraObject.attributes.productImage.data.attributes.alternativeText}
                    style={{
                      objectFit: "cover",
                    }}
                    fill
                  />
                </div>
              </div>
            </div>

            {/* API DONE - 100% */}
            {/* Renderiza el video si cerveza.info.videoInfo no es null, de lo contrario renderiza la imagen */}
            {detailColumnsClaim.video.data ? (
              <div className="product-box-3-mobile w-[100vw] h-[95.64vw] relative mb-[4.61vw]">
                <video
                  src={detailColumnsClaim.video.data.attributes.url}
                  alt={detailColumnsClaim.video.data.attributes.alternativeText}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  autoPlay
                  playsInline
                  loop
                  muted
                />
                <div className="sticker-temple-amarillo absolute left-[5vw] md:hidden bottom-[9vw] md:right-[10vh] md:top-[30vh]">
                  <Draggable initialPosition={{ x: 0, y: 0 }}>
                    <div className="-rotate-[11.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
                      <Image
                        src="/sticker-temple-amarrillo.png"
                        alt="Temple Beer"
                        fill
                      />
                    </div>
                  </Draggable>
                </div>
              </div>
            ) : (
              <div className="product-box-3-mobile w-[100vw] h-[95.64vw] relative mb-[4.61vw]">
                <Image
                  src={detailColumnsClaim.image.data.attributes.url}
                  alt={detailColumnsClaim.image.data.attributes.alternativeText}
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                />
                <div className="sticker-temple-amarillo absolute left-[55vw] md:hidden bottom-[9vw] md:right-[10vh] md:top-[30vh]">
                  <Draggable initialPosition={{ x: 0, y: 0 }}>
                    <div className="-rotate-[11.25deg] w-[39.23vw] h-[8.20vw] md:w-[16.28vh] md:h-[3.42vh] relative">
                      <Image
                        src="/sticker-temple-amarrillo.png"
                        alt="Temple Beer"
                        fill
                      />
                    </div>
                  </Draggable>
                </div>
              </div>
            )}

            {/* API DONE - 100% */}
            <div className="product-box-4-mobile mb-[4.61vw]">
              <div className="text-box flex flex-col gap-y-[4.61vw] px-[5.12vw]">
                <div
                  className={`text-white text-[3.33vw] uppercase ${GothamBook.className}`}
                  dangerouslySetInnerHTML={{ __html: detailColumnsClaim.bajada }}
                ></div>

                <div
                  className={`leading-[6.41vw] text-[6.41vw] uppercase `}
                  style={{ color: hightlightColor || "white" }}
                  dangerouslySetInnerHTML={{ __html: detailColumnsClaim.claim }}
                ></div>
              </div>
            </div>
            
            {/* API DONE - 100% */}
            <VideoMobile cerveza={detailColumnsVideo} hightlightColor={hightlightColor} />
            
            {/* API DONE - 100% -- STYLE COLOR */}
            {lang == "es" && (
              <div className="product-box-6-mobile">
                <div className="relative h-full">
                  <div className="beers-content-wrapper flex flex-col justify-between">
                    <div className="title">
                      <h2
                        className="text-[10.25vw] uppercase"
                        style={{ color: hightlightColor || "white" }}
                      >
                        BIRRAS
                      </h2>
                    </div>
                    
                    <div className="beer-grid grid grid-cols-4 grid-rows-2">
                      {detailColumnsGrid?.birras.data.map((clasicasObj, index) => (
                        <div
                          className="beer-item py-[3.84vw] px-[0.76vw]"
                          key={index}
                        >
                          <Link href={`/${lang}/birras/${clasicasObj.attributes.slug}`}>
                            <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                              <Image
                                src={clasicasObj.attributes.productImage.data.attributes.formats.small.url}
                                alt={clasicasObj.attributes.productImage.data.attributes.alternativeText}
                                style={{
                                  objectFit: "cover",
                                }}
                                fill
                              />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="beer-nav">
                      <nav className="flex flex-wrap self-stretch gap-y-[2px]">
                        {allBirraList.data.map((birraObj, index) => (
                          <span
                            key={index}
                            className={`py-[2px] px-[5px] text-[2.30vw] text-white border-r-[1px] border-dotted border-white ${Knockout34.className}`}
                            style={{
                              borderColor: darkColor ? "black" : "white",
                            }}
                          >
                            <Link
                              className=" hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase"
                              style={{
                                color: darkColor ? "black" : "white",
                              }}
                              href={`/${lang}/birras/${birraObj.attributes.slug}`}
                            >
                              {birraObj.attributes.nombre}
                            </Link>
                          </span>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* API DONE - 100% -- STYLE COLOR */}
            {lang == "en" && (
              <div className="product-box-6-mobile relative h-full">
                <div className="beers-content-wrapper flex flex-col justify-between">
                  <div className="title">
                    <h2
                      className="text-[10.25vw] uppercase"
                      style={{ color: hightlightColor || "white" }}
                    >
                      BEERS
                    </h2>
                  </div>
                </div>
                <div className="beer-grid grid grid-cols-3 grid-rows-2">
                  {orderDetailColumnsGris.map((enObj, index) => (
                    <div
                      className="beer-item py-[3.84vw] px-[0.76vw]"
                      key={index}
                    >
                      <Link href={`/${lang}/birras/${enObj.attributes.slug}`}>
                        <div className="relative w-[22.30vw] h-[39.74vw] hover:scale-110 transition duration-100 transform">
                          <Image
                            src={enObj.attributes.productImage.data.attributes.formats.small.url}
                            alt={enObj.attributes.productImage.data.attributes.alternativeText}
                            style={{
                              objectFit: "cover",
                            }}
                            fill
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="beer-nav">
                  <nav className="flex flex-wrap self-stretch gap-y-[2px]">
                    {orderDetailColumnsGris.map((birraObj, index) => (
                      <span
                        key={index}
                        className={`py-[2px] px-[5px] text-[2.30vw]  border-r-[1px] border-dotted border-white uppercase ${Knockout34.className}`}
                      >
                        <Link
                          className="hover:text-[#FCDB00] transition duration-300 ease-in-out uppercase"
                          style={{ color: darkColor ? "black" : "white" }}
                          href={`/${lang}/birras/${birraObj.attributes.slug}`}
                        >
                          {birraObj.attributes.nombre}
                        </Link>
                      </span>
                    ))}
                  </nav>
                </div>
              </div>
            )}
            <Footer />
          </section>
        </div>
      </Suspense>
    </>
  );
}
