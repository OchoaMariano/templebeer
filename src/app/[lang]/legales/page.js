import Image from 'next/image'
import Header from '../../../../components/common/header'
import ScrollHorizontal from '../../../../components/ScrollHorizontal'
import Draggable from '../../../../components/common/Dragabble'
import { getDictionary } from '../../../dictionaries';


export default async function Page({ children, params }) {
    const lang = params.lang
    const dict = await getDictionary(lang);
    const headerDic = dict.header;

    return (
        <div>
            <Header dictonary={headerDic} />
            <section className="md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper__legales hidden md:flex flex-col justify-start h-full">
                    
                    <ScrollHorizontal>
                        <div className="flex content__wrapper text-white flex-row gap-x-[10vh] items-start w-[400vh] px-[3vh] h-full relative">
                            <div class="w-[70vh] flex flex-col gap-y-[4vh]">
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">
                                        {dict.legales.politicas}
                                    </h1>
                                    <p className="text-[1.51vh]">
                                        {dict.legales.content_politicas}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.info_usuario}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.info_usuario_content}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.info_info}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.info_info_content}
                                    </p>
                                </div>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.cookies}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.cookies_content}
                                    </p>
                                </div>
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.elances}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.enlaces_content}
                                    </p>
                                </div>
                                
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.control}</h1>
                                    <p className="text-[1.51vh]">
                                        {dict.legales.control_content}
                                    </p>
                                </div>
                                <div class="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">
                                    {dict.legales.derechos}
                                    </h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.derechos_content}
                                    </p>
                                </div>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                                <h1 className="text-[3vh] leading-none">{dict.legales.uso}</h1>
                                <p className="text-[1.51vh]">
                                {dict.legales.uso_content}
                                </p>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                                <h1 className="text-[3vh] leading-none">{dict.legales.cesion}</h1>
                                <p className="text-[1.51vh]">
                                {dict.legales.cesion_content}
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
                                <h1 className="text-[4vw]">{dict.legales.politicas}</h1>
                                <p className="text-[3vw]">
                                    {dict.legales.content_politicas}
                                </p>
                            </div>

                    
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.info_usuario}</h1>
                                <p className="text-[3vw]">
                                    {dict.legales.info_usuario_content}
                                </p>
                            </div>

                
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.info_info}</h1>
                                <p className="text-[3vw]">
                                {dict.legales.info_info_content}
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.cookies}</h1>
                                <p className="text-[3vw]">
                                {dict.legales.cookies_content}
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.elances}</h1>
                                <p className="text-[3vw]">
                                {dict.legales.enlaces_content}
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.control}</h1>
                                <p className="text-[3vw]">
                                {dict.legales.control_content}
                                </p>
                            </div>

                
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">
                                {dict.legales.derechos}
                                </h1>
                                <p className="text-[3vw]">
                                {dict.legales.derechos_content}
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.uso}</h1>
                                <p className="text-[3vw]">
                                    {dict.legales.uso_content}
                                </p>

                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">{dict.legales.cesion}</h1>
                                <p className="text-[3vw]">
                                {dict.legales.cesion_content}sss
                                </p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}