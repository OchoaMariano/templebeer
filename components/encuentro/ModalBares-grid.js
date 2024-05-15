import Link from "next/link";
import Image from "next/image";
import ScrollHorizontal from "../ScrollHorizontal";

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
        <div className="inline-block bg-[#ECEBEB] shadow-xl rounded-t-xl transform transition-all align-middle w-[85.38vw] h-[166.66vw] md:w-[126.48vh] md:h-[81.72vh]">
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
          <div className="content p-[5.89vw] md:p-[3.8vh]">
            <ScrollHorizontal>
              <div className="relative w-[308.46vw] h-[141.79vw] md:w-[187.11vh] md:h-[67.84vh] shadow-xl ">
                <div class="grid grid-cols-[1fr,1fr,1fr,0.5fr,0.5fr,1fr] grid-rows-2 gap-x-2 h-full">
                  <div className="relative row-span-2 flex justify-center items-center">
                    <div
                      className="absolute inset-0 bg-black bg-opacity-30 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/encuentros/barrio-chino.png')",
                        backgroundBlendMode: "multiply", // Esto oscurecerá la imagen de fondo
                      }}
                    ></div>
                    <div className="relative z-10 text-white">BARRIO CHINO</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-full relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 bg-cover-bg-center">
                        <div className="text-white">BARRIO NORTE</div>
                      </div>

                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('/encuentros/barrio-norte.png')",
                        }}
                      ></div>
                    </div>
                    <div class=" h-full flex justify-center items-center gap-x-2">
                      <div className="h-full w-full relative">
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 bg-cover bg-center">
                          <div className="text-white">CAMINITO</div>
                        </div>

                        <div
                          className="h-full w-full bg-cover bg-center"
                          style={{
                            backgroundImage: "url('/encuentros/caminito.png')",
                          }}
                        ></div>
                      </div>

                      <div className="h-full w-full relative">
                        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30 bg-cover bg-center">
                          <div className="text-white">CASA TEMPLE</div>
                        </div>

                        <div
                          className="h-full w-full bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('/encuentros/casa-temple.png')",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative row-span-2 flex justify-center items-center">
                    <div
                      className="absolute inset-0 bg-black bg-opacity-30 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/encuentros/devoto.png')",
                        backgroundBlendMode: "multiply", // Esto oscurecerá la imagen de fondo
                      }}
                    ></div>
                    <div className="relative z-10 text-white">DEVOTO</div>
                  </div>
                  <div className="space-y-2 ">
                    <div
                      class="h-full flex justify-center items-center bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/encuentros/corrientes.png')",
                      }}
                    >
                      {" "}
                      <span className="text-white"> CORRIENTES</span>
                    </div>
                    <div
                      class="h-full flex justify-center items-center bg-cover bg-center "
                      style={{
                        backgroundImage: "url('/encuentros/fisherton.png')",
                      }}
                    >
                      <span className="text-white">FISHERTON</span>
                    </div>
                  </div>
                  <div className="relative row-span-2 flex justify-center items-center">
                    <div
                      className="absolute inset-0 bg-black bg-opacity-30 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/encuentros/paseo-plaza.png')",
                        backgroundBlendMode: "multiply", // Esto oscurecerá la imagen de fondo
                      }}
                    ></div>
                    <div className="relative z-10 text-white">
                      TEMPLE <br /> LA PLAZA
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-full relative">
                      <div className="absolute inset-0 flex justify-center items-center bg-black  bg-opacity-30 bg-cover-bg-center">
                        <div className="text-white">RECOLETA</div>
                      </div>

                      <div
                        className="h-full w-full bg-cover bg-center"
                        style={{
                          backgroundImage: "url('/encuentros/recoleta.png')",
                        }}
                      ></div>
                    </div>
                    <div
                      class="h-full flex justify-center items-center bg-cover bg-center"
                      style={{
                        backgroundImage: "url('/encuentros/miami.png')",
                      }}
                    >
                      <span className="text-white">MIAMI</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollHorizontal>
          </div>
        </div>
      </div>
    </div>
  );
}
