import Link from "next/link"
import Image from 'next/image'
import ScrollHorizontal from '../ScrollHorizontal'

export default function Modal() {
  return (
    <div className="fixed z-[100] inset-0 overflow-y-auto" id="error-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" aria-hidden="true">
                <Link href="/encuentro" className="absolute inset-0 w-[100%] h-[100vh]"></Link>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
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
                      <Image src="/encuentros/scroll-bares.png" fill alt="encuentros-flyer" className="block" />
                    </div>
                  </ScrollHorizontal>
                </div>
            </div>
        </div>
    </div>
  );
}