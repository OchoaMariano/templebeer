import Image from "next/image";
import Header from "../../../../components/common/header";
import Footer from "../../../../components/common/Footer";
import ModalArgentina from "../../../../components/bares/modal-franquicias/ModalArgentina";
import ModalMexico from "../../../../components/bares/modal-franquicias/ModalMexico";
import ModalMexicoDf from "../../../../components/bares/modal-franquicias/ModalMexicoDf";
import ModalEspana from "../../../../components/bares/modal-franquicias/ModalEspana";
import ModalUruguay from "../../../../components/bares/modal-franquicias/ModalUruguay";
import ModalFranquicias from "../../../../components/bares/modal-franquicias/ModalFranquicias";
import { getDictionary } from "../../../dictionaries";
import ArgIcon from "../../../../public/argentina.png";
import UsaIcon from "../../../../public/usa.png";
import MexIcon from "../../../../public/mexico.png";
import EspIcon from "../../../../public/espana.png";
import UruIcon from "../../../../public/uruguay.png";

export default async function Page({ children, searchParams, params }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  const headerDic = dict.header;

  const showModalArgentina = searchParams?.modalArgentina;
  const showModalMexico = searchParams?.modalMexico;
  const showModalMexicoDf = searchParams?.modalMexicoDf;
  const showModalEspana = searchParams?.modalEspana;
  const showModalUruguay = searchParams?.modalUruguay;
  const showModalFranquicias = searchParams?.modalFranquicias;

  return (
    <div className="">
      <Header dictonary={headerDic} />
      <section>
        <div
          className="min-h-screen md:h-auto bg-cover bg-center flex flex-col xl:justify-center xl:items-center relative "
          style={{ backgroundImage: "url(/background-home.jpeg)" }}
        >
          <div className="pt-32  flex justify-center flex-col items-center w-full text-center z-50">
            <h1 className="text-xl lg:text-4xl uppercase pb-4 lg:pb-0 text-white">
              ¿Queres abrir tu propia franquicia?{" "}
            </h1>
            <h3 className="pb-4 text-sm lg:text-base text-white">
              Dejanos tus datos y nos contactaremos con vos a la brevedad.{" "}
            </h3>
            <a
              href="franquicias/?modalFranquicias=true"
              className="uppercase w-fit bg-white py-0.5 px-3 text-black text-xs hover:bg-transparent border border-white hover:text-white transition-all ease-in-out duration-300"
            >
              Contactanos
            </a>
          </div>
          <div className="page__wrapper pt-[2.15vw] md:pt-[2.37vh] ">
            <div className="content__wrapper  flex-row items-start hidden lg:flex ">
              <div className="relative lg:h-[80vh] xl:h-[90vh] h-mapa-custom w-mapa-custom lg:w-[120vh] xl:w-[165vh] mx-auto">
                <Image src="/mapa-mundo.png" alt="" className=" w-full" fill />
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[61vh] xl:top-[69vh] right-[83vh]    xl:right-[114vh] absolute cursor-pointer ">
                  <a href="bares" id="arg">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[36vh] right-[87vh] xl:top-[40vh] xl:right-[121vh] absolute cursor-pointer ">
                  <a href="/en/bares" id="miami">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[41vh] right-[89vh] xl:top-[45vh] xl:right-[123vh]  absolute cursor-pointer">
                  <a href="franquicias/?modalMexico=true" id="mex">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[38vh] xl:top-[43vh] right-[93vh] xl:right-[129vh] absolute cursor-pointer ">
                  <a href="franquicias/?modalMexicoDf=true" id="mexDf">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[32vh] right-[61vh] xl:top-[36vh] xl:right-[84.5vh] absolute cursor-pointer">
                  <a href="franquicias/?modalEspana=true" id="esp">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
                <div className="h-[2.5vh] w-[2.5vh] point-map hover:scale-110 transform ease-in-out duration-300 top-[60vh] right-[80vh] xl:top-[67vh] xl:right-[110.5vh] absolute cursor-pointer ">
                  <a href="franquicias/?modalUruguay=true" id="uru">
                    <Image src="/bares/point-mapa.png" alt="" fill />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:hidden header__temple-wrapper  ">
              <div className="flex  flex-col pt-[29rem] gap-y-4">
                <a href="bares" className="flex items-center gap-x-5 underline">
                  <Image src={ArgIcon} className="w-10" />
                  <span className="text-base text-white">Argentina</span>
                </a>
                <a href="/en/bares" className="flex items-center gap-x-5 ">
                  <Image src={UsaIcon} className="w-10" />
                  <div>
                    <span className="text-base text-white underline">
                      Estados Unidos - Miami
                    </span>
                    <br />
                    <span className=" text-sm text-white">
                      151 NW 24th St #102, Miami, FL 33127, USA
                    </span>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/place/Kukulcan+Plaza/@21.1024759,-86.7659361,15z/data=!4m6!3m5!1s0x8f4c2a406af99859:0x9f3a1b4e845ee08e!8m2!3d21.1024759!4d-86.7659361!16s%2Fg%2F1tdbm1dh?sa=X&ved=2ahUKEwjEsJaUm4iEAxWVqZUCHfjnBeQQ_BJ6BAgTEAA&entry=tts"
                  target="_blank"
                  className="flex items-center gap-x-5 "
                >
                  <Image src={MexIcon} className="w-10" />
                  <div>
                    <span className="text-base text-white underline">
                      México - Cancún
                    </span>
                    <br />
                    <span className=" text-sm">
                      Plaza Kukulcan Blvd. Kukulcan Km 13, Zona Hotelera, 77500
                      Cancún, Q.R., México
                    </span>
                  </div>
                </a>
                <div className="flex items-center gap-x-5 ">
                  <Image src={MexIcon} className="w-10" />
                  <span className="text-base text-white">
                    México - Playa del carmén <br />
                    <span className="underline text-sm text-white">
                      Próximamente
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <Image src={MexIcon} className="w-10" />
                  <span className="text-base text-white">
                    Ciudad de México <br />
                    <span className="underline text-sm text-white">
                      Próximamente
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <Image src={EspIcon} className="w-10" />
                  <span className="text-base text-white">
                    España - Madrid <br />
                    <span className="underline text-sm text-white">
                      Próximamente
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-x-5 ">
                  <Image src={UruIcon} className="w-10" />
                  <span className="text-base text-white">
                    Uruguay
                    <span className="underline text-sm text-white">
                      <br />
                      Próximamente
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {showModalArgentina && <ModalArgentina />}
        {showModalMexico && <ModalMexico />}
        {showModalMexicoDf && <ModalMexicoDf />}
        {showModalEspana && <ModalEspana />}
        {showModalUruguay && <ModalUruguay />}
        {showModalFranquicias && <ModalFranquicias />}
      </section>
    </div>
  );
}
