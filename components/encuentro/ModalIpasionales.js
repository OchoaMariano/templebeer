import Link from "next/link";
import Image from "next/image";

export default function Modal() {
  return (
    <div
      className="fixed z-[100] inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
          aria-hidden="true"
        >
          <Link
            href="/es/encuentro"
            className="absolute inset-0 w-[100%] h-[100vh]"
          ></Link>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block bg-cover bg-center shadow-xl rounded-t-xl transform transition-all align-middle w-[] h-[] md:w-[100.56vh] md:h-[65.29vh]"
          style={{
            backgroundImage: 'url("/ipassionales/bg-hof-ipassionales.jpg")',
          }}
        >
          <div className="header__chrome w-full h-[12.82vw] md:h-[7.08vh] bg-[#D9D9D9] overflow-hidden rounded-t-xl flex flex-row px-[2.54vh] gap-x-[6.41vw] md:gap-x-[4.24vh]">
            <div className="user_btns flex flex-row items-center justify-start gap-x-[0.5vh]">
              <div className="close_red w-[3.33vw] h-[3.33vw] md:w-[2.12vh] md:h-[2.12vh] bg-[#E65E60] rounded-full"></div>
              <div className="minimize_yellow w-[3.33vw] h-[3.33vw] md:w-[2.12vh] md:h-[2.12vh] bg-[#f7ba49] rounded-full"></div>
              <div className="maximize_green w-[3.33vw] h-[3.33vw] md:w-[2.12vh] md:h-[2.12vh] bg-[#58ae50] rounded-full"></div>
            </div>
            <div className="url_input flex items-center justify-start w-full">
              <div className="close_red w-full h-[6.29vw] md:h-[3vh] bg-[#fff] rounded-full"></div>
            </div>
          </div>
          <div className="content p-[5.89vw] md:p-[3.8vh] ">
            <div className="relative w-[66.15vw] h-[117vw] md:w-[92.91vh] md:h-[52.26vh] shadow-xl overflow-hidden overflow-y-scroll scrollbar-none">
              <h1 className="text-3xl font-bold text-black pb-4 uppercase">
                Hall of fame
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[1000px] mx-auto ">
                <div className="bg-[#231f21] p-4 lg:p-10">
                  <Image
                    src="/ipassionales/reina-2022.png"
                    alt="Cande"
                    width={500}
                    height={500}
                    className="w-full h-auto px-10 py-2"
                  />
                  <h2 className="text-xl font-bold text-[#fddd02]">
                    REINA IPASIONAL 2022:{" "}
                    <span className="text-white">
                      CANDE <br />
                      <span className="text-sm">(GUALEGUAYCHÚ)</span>
                    </span>
                  </h2>
                  <p className="text-sm text-white pt-4">
                    Dejando su marca en cada pinta, Cande transforma latas de
                    WOLF IPA en un vestido que deslumbró a todos (nivel estuvo
                    exhibido en Casa TEMPLE). Su IPAsión fue tal que se vistió
                    de creatividad y orgullo birrero.
                  </p>
                </div>
                <div className="bg-[#231f21] p-4 lg:p-10">
                  <Image
                    src="/ipassionales/reina2023.png"
                    alt="Cande"
                    width={500}
                    height={500}
                    className="w-full h-auto px-10 py-2"
                  />
                  <h2 className="text-xl font-bold text-[#fddd02]">
                    REINA IPASIONAL 2023:{" "}
                    <span className="text-white">
                      MILAGROS <br />
                      <span className="text-sm">(BOULOGNE)</span>
                    </span>
                  </h2>
                  <p className="text-sm text-white pt-4">
                    Con manos de artista y alma de IPAsional, Milagros convirtió
                    las latas de WOLF IPA en arte repujado, dejando un legado
                    tan eterno como su amor la Wolf.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 max-w-[1000px] mx-auto pt-4">
                <div className="bg-[#231f21] p-4 lg:p-10 flex flex-col xl:flex-row gap-8">
                  <div className="w-full xl:w-1/2">
                    <Image
                      src="/ipassionales/rey-2024.png"
                      alt="Cande"
                      width={500}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="w-full xl:w-1/2 flex flex-col justify-center">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#fddd02] text-center">
                      REY IPASIONAL 2024:{" "}
                      <span className="text-white">
                        LUCAS <br />
                        <span className="text-sm">(BUENOS AIRES)</span>
                      </span>
                    </h2>
                    <p className="text-lg text-white pt-4">
                      Lucas llevó su IPAsión al siguiente nivel: se tatuó el
                      logo de TEMPLE en su piel y -redoblando la apuesta- subió
                      al escenario con su banda para tocar en nuestro bar,
                      viviendo cada nota al ritmo de la WOLF IPA.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
