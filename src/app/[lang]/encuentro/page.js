import Image from "next/image";
import Link from "next/link";
import Header from "../../../../components/common/header";
import Footer from "../../../../components/common/Footer";
import ModalAstronomia from "../../../../components/encuentro/ModalAstronomia";
import ModalGhosteo from "../../../../components/encuentro/ModalGhosteo";
import ModalBirra from "../../../../components/encuentro/ModalBirra";
import ModalArtistas from "../../../../components/encuentro/ModalArtistas";
import ModalBares from "../../../../components/encuentro/ModalBares-grid";
import ModalMemes from "../../../../components/encuentro/ModalMemesBirreros";
import ModalSanPatricio from "../../../../components/encuentro/ModalSanPatricio";
import ModalTaco from "../../../../components/encuentro/ModalTacoTuesday";
import ModalIpassionals from "../../../../components/encuentro/ModalIpassionals";
import ModalOpening from "../../../../components/encuentro/ModalOpening";
import ModalWynwood from "../../../../components/encuentro/ModalWynwood";
import ModalSanPatricioMx from "../../../../components/encuentro/ModalSanPatricioMx";
import ModalArtistasMx from "../../../../components/encuentro/ModalArtistasMx";
import ModalAstronomiaMx from "../../../../components/encuentro/ModalAstronomiaMx";
import ModalBirraMx from "../../../../components/encuentro/ModalBirraMx";
import ModalGhosteoMx from "../../../../components/encuentro/ModalGhosteoMx";
import ModalIpassionalsMx from "../../../../components/encuentro/ModalIpassionalsMx";
import ModalMemesMx from "../../../../components/encuentro/ModalMemesBirrerosMx";
import { getDictionary } from "../../../dictionaries";
import { Knockout54UltraBold } from "../layout";

async function getEncuentros(lang) {
  const respuesta = await fetch(
    `https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/encuentros?populate=icon&locale=${lang}`,
    { cache: "no-store" }
  );
  return respuesta.json();
}

export default async function Page({ searchParams, params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const showModal = searchParams?.modalAstronomia;
  const showModalGhost = searchParams?.modalGhost;
  const showModalBirra = searchParams?.modalBirra;
  const showModalArtistas = searchParams?.modalArtistas;
  const showModalBares = searchParams?.modalBares;
  const showModalMemes = searchParams?.modalMemes;
  const showModalSanPatricio = searchParams?.modalSanPatricio;

  const showModalTaco = searchParams?.modalTacoTuesday;
  const showWynwood = searchParams?.modalWynwood;
  const showIpassionals = searchParams?.modalIpassionals;
  const showOpening = searchParams?.modalOpening;

  const showModalSanPatricioMx = searchParams?.modalSanPatricioMx;
  const showModalBirraMx = searchParams?.modalBirraMx;
  const showModalGhostMx = searchParams?.modalGhostMx;
  const showModalMemesMx = searchParams?.modalMemesMx;
  const showModalAstronomiaMx = searchParams?.modalAstronomiaMx;
  const showModalArtistasMx = searchParams?.modalArtistasMx;

  const encuentros = await getEncuentros(lang);

  return (
    <div>
      <Header dictonary={headerDic} />
      <section
        className="min-h-screen md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="page__wrapper pt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh]">
          <div className="title__wrapper flex items-center justify-center pt-[2.83vh]">
            <h1
              className={`text-[4.24vh] text-white leading-none uppercase ${Knockout54UltraBold.className}`}
            >
              {dict.encuentro.title}
            </h1>
          </div>
          <div className="content__wrapper flex flex-row items-start">
            <div className="flex w-full md:gap-x-96 py-[9.35vw] md:py-[7.71vh] px-2">
              <div className="w-full lg:w-1/2 flex justify-start text-white">
                {lang == "es" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="encuentro/?modalSanPatricio=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[0].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[0]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[0].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="encuentro/?modalBares=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[1].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[1]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[1].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="https://www.birramigxs.templebeer.com/"
                        target="_blank"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[2].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[2]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[2].attributes.Nombre}
                        </span>
                      </a>
                    </div>

                    <div className="flex cursor-pointer transform hover-bouncesmooth">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="https://www.instagram.com/p/CoDXngDpzb4/"
                        target="_blank"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[3].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[3]?.attributes?.Nombre}
                            fill
                          />
                        </div>

                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[3].attributes.Nombre}
                        </span>
                      </a>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="https://www.ipasionales.templebeer.com/"
                        target="_blank"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[4].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[4]?.attributes?.Nombre}
                            fill
                          />
                        </div>

                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[4].attributes.Nombre}
                        </span>
                      </a>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="https://issuu.com/tri_9/docs/fanzine_temple_reduced"
                        target="_blank"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[5].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[5]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[5].attributes.Nombre}
                        </span>
                      </a>
                    </div>
                  </div>
                )}
                {lang == "en" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalTacoTuesday=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[0].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[0]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[0].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalWynwood=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[1].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[1]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[1].attributes.Nombre}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {lang == "es-MX" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="encuentro/?modalSanPatricioMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[0].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[0]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[0].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="https://www.ipasionales.templebeer.com/"
                        target="_blank"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[1].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[1]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[1].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalBirraMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[2].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[2]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span
                          className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase"
                          dangerouslySetInnerHTML={{
                            __html: encuentros.data[2].attributes.Nombre,
                          }}
                        ></span>
                      </a>
                    </div>

                    <div className="flex cursor-pointer transform hover-bouncesmooth">
                      <a
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalGhostMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[4].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[4]?.attributes?.Nombre}
                            fill
                          />
                        </div>

                        <span
                          className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase"
                          dangerouslySetInnerHTML={{
                            __html: encuentros.data[4].attributes.Nombre,
                          }}
                        ></span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full lg:w-1/2 flex items-start justify-end md:justify-end text-white">
                {lang == "es" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalBirra=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[6].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[6]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center">
                          BIRRA, ENCUENTRO <br />& CULTURA
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalGhost=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[7].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[7]?.attributes?.Nombre}
                            fill
                          />
                        </div>

                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center px-0 uppercase">
                          MENOS GHOSTEO, <br />
                          MÁS BIRRA
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalMemes=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[8].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[8]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[8].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalAstronomia=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[9].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[9]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[9].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <img src="" alt="" className="hidden md:block" />
                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalArtistas=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[10].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[10]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[10].attributes.Nombre}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {lang == "en" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="encuentro/?modalIpassionals=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[2].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[2]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[2].attributes.Nombre}
                        </span>
                      </Link>
                    </div>

                    <div className="flex transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center md:items-center gap-y-4"
                        href="encuentro/?modalOpening=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[3].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[3]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[3].attributes.Nombre}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
                {lang == "es-MX" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 gap-y-10 items-start">
                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalMemesMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[3].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[3]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span
                          className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase"
                          dangerouslySetInnerHTML={{
                            __html: encuentros.data[3].attributes.Nombre,
                          }}
                        ></span>
                      </Link>
                    </div>

                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalAstronomiaMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[5].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[5]?.attributes?.Nombre}
                            fill
                          />
                        </div>

                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center px-0 uppercase">
                          {encuentros.data[5].attributes.Nombre}
                        </span>
                      </Link>
                    </div>
                    <img src="" alt="" className="hidden md:block" />
                    <div className="flex flex-col transform hover-bouncesmooth cursor-pointer">
                      <Link
                        className="flex flex-col justify-center items-center gap-y-4"
                        href="encuentro/?modalArtistasMx=true"
                      >
                        <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
                          <Image
                            src={
                              encuentros.data[6].attributes?.icon?.data
                                ?.attributes?.url
                            }
                            alt={encuentros.data[6]?.attributes?.Nombre}
                            fill
                          />
                        </div>
                        <span className="text-[2.56vw] md:text-[1.41vh] leading-normal text-center uppercase">
                          {encuentros.data[6].attributes.Nombre}
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section>
      {showModal && <ModalAstronomia />}
      {showModalGhost && <ModalGhosteo />}
      {showModalBirra && <ModalBirra />}
      {showModalArtistas && <ModalArtistas />}
      {showModalBares && <ModalBares />}
      {showModalMemes && <ModalMemes />}
      {showModalSanPatricio && <ModalSanPatricio />}

      {showModalTaco && <ModalTaco />}
      {showIpassionals && <ModalIpassionals />}
      {showWynwood && <ModalWynwood />}
      {showOpening && <ModalOpening />}

      {showModalSanPatricioMx && <ModalSanPatricioMx />}
      {showModalBirraMx && <ModalBirraMx />}
      {showModalGhostMx && <ModalGhosteoMx />}
      {showModalMemesMx && <ModalMemesMx />}
      {showModalAstronomiaMx && <ModalAstronomiaMx />}
      {showModalArtistasMx && <ModalArtistasMx />}
    </div>
  );
}
