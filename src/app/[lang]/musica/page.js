import Image from 'next/image'
import Header from '../../../../components/common/header'
import { Knockout54UltraBold, Knockout34, Knockout54, GothamBook } from '../layout'
import ScrollHorizontal from '../../../../components/ScrollHorizontal'
import Draggable from '../../../../components/common/Dragabble'
import Footer from '../../../../components/common/Footer';


export default function Page({ children }) {
    return (
        <div>
            <Header />
            <section className="md:h-screen bg-cover bg-center md:flex md:items-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper pt-[18.15vw] md:pt-[6.37vh] px-[5.12vw] md:px-[4.83vh] overflow-hidden">
                    <div className="title__wrapper pt-[3.84vw] md:pt-[2.83vh] relative flex flex-row items-center">
                        <h1 className={`text-white text-[12.05vw] md:text-[9.49vh] leading-none uppercase ${Knockout54UltraBold.className}`}>Música</h1>
                        <div className="group pl-[3.07vw] md:pl-[6.37vh] flex flex-row cursor-pointer items-center">
                       
                            <div className="relative w-[13.33vw] h-[16.15vw] md:w-[9.06vh] md:h-[11.04vh] transform group-hover:scale-125 duration-500 ease-in-out">
                                <Image
                                    src="/musica/parlante.png"
                                    alt="Sticker"
                                    fill
                                />
                            </div>
                            
                        
                            <div className="relative w-[9vw] h-[9vw] md:w-[10.62vh] md:h-[10.62vh] animate-wiggle ">
                                <Image
                                    src="/musica/sound.png"
                                    alt="Sticker"
                                    fill
                                />
                            </div>
                       
                        </div>
                    </div>
                    <div className="content__wrapper flex items-start pt-[6.41vw] pb-[12.82vw] md:pt-[3.54vh] md:pb-[7.08vh]" >
                        <ScrollHorizontal>
                            <div className="hidden md:flex flex-col md:flex-row justify-between items-start gap-x-[2.83vh] gap-y-[5.12vw] w-[194.19vh]" >
                                
                                <div className="bg-[#0e359b] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]">
                                    <div className="card-1 relative">
                                        <div className="relative w-[30.87vh] h-[28.61vh]">
                                            <Image 
                                                src="/musica/card-1.jpg"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                fill 
                                            />
                                        </div>
                                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                                            <a href="https://www.youtube.com/watch?v=z5zQPUxMe4U" target="_blank">
                                                <div className="relative w-[2.83vh] h-[2.26vh]">
                                                    <Image src="/musica/video.svg" alt="" fill />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                                        <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                                            CUANDO LA CULTURA EMERGENTE TOMA LA CALLE.
                                        </h1>
                                        <p className={`text-[1.4vh] font-normal ${GothamBook.className}`}>
                                            CALLECORTADA es la máxima expresión
                                            del propósito potenciador de la cultura urbana de TEMPLE. Un
                                            festival en el que músicxs, graffiterxs, bailarines, poetas,
                                            intervenciones artísticas y expositores de distintas áreas se
                                            encuentran para crear algo único e irrepetible, representativo de
                                            una generación.
                                        </p>
                                    </div>
                                </div>


                                <div className="bg-[#d41768] p-[2.83vh] flex flex-col justify-center gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]">
                                    <div className="card-2 relative">
                                        <div className="relative w-[30.87vh] h-[37.67vh]">
                                            <Image 
                                                src="/musica/card-2.jpg"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                fill 
                                            />
                                        </div>
                                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                                            <a href="https://www.youtube.com/watch?v=z5zQPUxMe4U&t=2s" target="_blank">
                                                <div className="relative w-[2.83vh] h-[2.26vh]">
                                                    <Image src="/musica/video.svg" alt="" fill />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                                        <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                                            GIRA DE VERANO
                                        </h1>
                                        <p className={`text-[1.4vh] font-normal ${GothamBook.className}`}>
                                            En enero del 2022, nos llevamos a cuatro artistas emergentes a
                                            recorrer todo el país en su primera gira musical. Ellxs son Marki,
                                            Ana Espil, Kastiello y Acus, cuatro #ArtistasTEMPLE que nos
                                            inspiran por sus ritmos, su vibra y su talento siempre en
                                            movimiento.
                                        </p>
                                    </div>
                                </div>


                                <div className="bg-[#f1bf00] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]">
                                    <div className="card-3 relative">
                                        <div className="relative w-[30.87vh] h-[44.90vh]">
                                            <Image 
                                                src="/musica/card-3.jpg"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                fill 
                                            />
                                        </div>
                                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                                            <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpd__EQ5IoP5G1HDudmEzun7" target="_blank">
                                                <div className="relative w-[2.83vh] h-[2.26vh]">
                                                    <Image src="/musica/video.svg" alt="" fill />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                                        <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                                            DOCUS TEMPLE
                                        </h1>
                                        <p className={`text-[1.4vh] font-normal ${GothamBook.className}`}>
                                            Hicimos una serie de documentales sobre lxs artistas emergentes
                                            que nos inspiran a diario. ¿Ya enfriaste las birras? ¡Dale que con
                                            el documental las pintas son más ricas!
                                        </p>
                                    </div>
                                </div>


                                <div className="bg-[#1f9996] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]">
                                    <div className="card-4 relative">
                                        <div className="relative w-[30.87vh] h-[41.21vh]">
                                            <Image 
                                                src="/musica/card-4.jpg"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'center'
                                                }}
                                                fill 
                                            />
                                        </div>
                                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                                            <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpdR9kwcY_zKjVPYfSOgre02&si=cFytbk_Ymb9l9Tf9" target="_blank">
                                                <div className="relative w-[2.83vh] h-[2.26vh]">
                                                    <Image src="/musica/video.svg" alt="" fill />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                                        <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                                            RITUAL
                                        </h1>
                                        <p className={`text-[1.4vh] font-normal ${GothamBook.className}`}>
                                            Un espacio de cultura emergente, donde el arte y la expresión se
                                            encuentran, siempre con una birrita en mano y entre amigxs. En
                                            vivo desde el Polo Cultural Saldías en la Ciudad de Buenos Aires y
                                            en directo para todos los TEMPLE de Argentina.
                                        </p>
                                    </div>
                                </div>


                                <div className="bg-[#d41768] p-[2.83vh] flex flex-col justify-between gap-y-[2.97vh] w-[36.54vh] h-[67.13vh]">
                                    <div className="card-5 relative">
                                        <div className="relative w-[30.87vh] h-[46.74vh]">
                                            <Image 
                                                src="/musica/card-5.jpg"
                                                style={{
                                                    objectFit: 'cover',
                                                    objectPosition: 'top'
                                                }}
                                                fill 
                                            />
                                        </div>
                                        <div className="absolute top-[13.81vh] -left-[1.67vh] bg-black rounded-full w-[7.08vh] h-[7.08vh] flex items-center justify-center cursor-pointer">
                                            <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpfcaud8ayed8F5xfrnVaI8K&si=TYNHHXBoyzB8Sxi1" target="_blank">
                                                <div className="relative w-[2.83vh] h-[2.26vh]">
                                                    <Image src="/musica/video.svg" alt="" fill />
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-white h-full flex flex-col justify-center gap-y-[1.41vh]">
                                        <h1 className={`text-[2.54vh] leading-none ${Knockout54UltraBold.className}`}>
                                            RANCHAR
                                        </h1>
                                        <p className={`text-[1.4vh] font-normal ${GothamBook.className}`}>
                                            Un espacio improvisado. Un plano continuo con el ambiente
                                            vibrando. Un TEMPLE en cada canción de artistas emergentes que
                                            están sonando.
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </ScrollHorizontal>
                        <div className="flex flex-col justify-between items-start gap-y-[5.12vw] md:hidden" >
                            <div className="bg-[#0e359b] p-[5.12vw] flex flex-col justify-between gap-y-[5.38vw] w-[89.74vw] h-[155.12vw]">
                                <div className="card-1 relative">
                                    <div className="relative w-[79.48vw] h-[89.74vw]">
                                        <Image 
                                            src="/musica/card-1.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                                        <a href="https://www.youtube.com/watch?v=z5zQPUxMe4U" target="_blank">
                                            <div className="relative w-[5.12vw] h-[4.10vw]">
                                                <Image src="/musica/video.svg" alt="" fill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                                        CUANDO LA CULTURA EMERGENTE TOMA LA CALLE.
                                    </h1>
                                    <p className={`text-[3.33vw] font-normal ${GothamBook.className}`}>
                                        CALLECORTADA es la máxima expresión
                                        del propósito potenciador de la cultura urbana de TEMPLE. Un
                                        festival en el que músicxs, graffiterxs, bailarines, poetas,
                                        intervenciones artísticas y expositores de distintas áreas se
                                        encuentran para crear algo único e irrepetible, representativo de
                                        una generación.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                                <div className="card-2 relative">
                                    <div className="relative w-[79.48vw] h-[89.74vw]">
                                        <Image 
                                            src="/musica/card-2.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                                        <a href="https://www.youtube.com/watch?v=z5zQPUxMe4U&t=2s" target="_blank">
                                            <div className="relative w-[5.12vw] h-[4.10vw]">
                                                <Image src="/musica/video.svg" alt="" fill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                                        GIRA DE VERANO
                                    </h1>
                                    <p className={`text-[3.33vw] font-normal ${GothamBook.className}`}>
                                        En enero del 2022, nos llevamos a cuatro artistas emergentes a
                                        recorrer todo el país en su primera gira musical. Ellxs son Marki,
                                        Ana Espil, Kastiello y Acus, cuatro #ArtistasTEMPLE que nos
                                        inspiran por sus ritmos, su vibra y su talento siempre en
                                        movimiento.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#f1bf00] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                                <div className="card-3 relative">
                                    <div className="relative w-[79.48vw] h-[89.74vw]">
                                        <Image 
                                            src="/musica/card-3.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                                        <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpd__EQ5IoP5G1HDudmEzun7" target="_blank">
                                            <div className="relative w-[5.12vw] h-[4.10vw]">
                                                <Image src="/musica/video.svg" alt="" fill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                                        DOCUS TEMPLE
                                    </h1>
                                    <p className={`text-[3.33vw] font-normal ${GothamBook.className}`}>
                                        Hicimos una serie de documentales sobre lxs artistas emergentes
                                        que nos inspiran a diario. ¿Ya enfriaste las birras? ¡Dale que con
                                        el documental las pintas son más ricas!
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#1f9996] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                                <div className="card-4 relative">
                                    <div className="relative w-[79.48vw] h-[89.74vw]">
                                        <Image 
                                            src="/musica/card-4.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                                        <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpdR9kwcY_zKjVPYfSOgre02&si=cFytbk_Ymb9l9Tf9" target="_blank">
                                            <div className="relative w-[5.12vw] h-[4.10vw]">
                                                <Image src="/musica/video.svg" alt="" fill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                                        RITUAL
                                    </h1>
                                    <p className={`text-[3.33vw] font-normal ${GothamBook.className}`}>
                                        Un espacio de cultura emergente, donde el arte y la expresión se
                                        encuentran, siempre con una birrita en mano y entre amigxs. En
                                        vivo desde el Polo Cultural Saldías en la Ciudad de Buenos Aires y
                                        en directo para todos los TEMPLE de Argentina.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-[#d41768] p-[5.12vw] flex flex-col justify-between gap-y-4 lg:gap-y-0  w-[89.74vw] h-[155.12vw]">
                                <div className="card-5 relative">
                                    <div className="relative w-[79.48vw] h-[89.74vw]">
                                        <Image 
                                            src="/musica/card-5.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'top'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute top-[40.94vw] -left-[4vw] bg-black rounded-full w-[12.82vw] h-[12.82vw] flex items-center justify-center cursor-pointer">
                                        <a href="https://www.youtube.com/playlist?list=PLmfNJICPgwpfcaud8ayed8F5xfrnVaI8K&si=TYNHHXBoyzB8Sxi1" target="_blank">
                                            <div className="relative w-[5.12vw] h-[4.10vw]">
                                                <Image src="/musica/video.svg" alt="" fill />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-center gap-y-[2.56vw]">
                                    <h1 className={`text-[5.12vw] leading-none ${Knockout54UltraBold.className}`}>
                                        RANCHAR
                                    </h1>
                                    <p className={`text-[3.33vw] font-normal ${GothamBook.className}`}>
                                        Un espacio improvisado. Un plano continuo con el ambiente
                                        vibrando. Un TEMPLE en cada canción de artistas emergentes que
                                        están sonando.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    )
}