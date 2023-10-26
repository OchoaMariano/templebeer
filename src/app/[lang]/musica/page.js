import Image from 'next/image'
import Header from '../../../../components/common/header'


export default function Page({ children }) {
    return (
        <div>
            <Header />
            <section className="h-screen bg-cover bg-center pt-[65px] flex items-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper px-[34px]">
                    <div className="title__wrapper">
                        <h1 className="text-4xl font-bold text-white text-[47px] 2xl:text-[67px] leading-none uppercase">Música</h1>
                    </div>
                    <div className="content__wrapper flex flex-row gap-[20px] items-start">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 py-20">

                            <div className="bg-[#0e359b] bg-card-1 p-5 flex flex-col justify-between gap-y-4 lg:gap-y-0 min">
                                <div className="card-1 py-52 lg:py-28 relative">
                                    <div className="absolute inset-0">
                                        <Image 
                                            src="/musica/card-1.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute -left-3 bg-black rounded-full p-3">
                                        <img src="/musica/video.svg" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-around py-2 gap-y-2 lg:gap-y-0">
                                    <h1 className="text-xl leading-none lg:text-lg font-medium lg:leading-none pr-28 lg:pr-24">
                                        CUANDO LA CULTURA EMERGENTE TOMA LA CALLE.
                                    </h1>
                                    <p className="text-xs font-normal">
                                        <span className="font-bold">CALLECORTADA</span> es la máxima expresión
                                        del propósito potenciador de la cultura urbana de TEMPLE. Un
                                        festival en el que músicxs, graffiterxs, bailarines, poetas,
                                        intervenciones artísticas y expositores de distintas áreas se
                                        encuentran para crear algo único e irrepetible, representativo de
                                        una generación.
                                    </p>
                                </div>
                            </div>


                            <div className="bg-[#d41768] bg-card-2 p-5 flex flex-col justify-between gap-y-4 lg:gap-y-0 min">
                                <div className="card-2 py-52 lg:py-36 relative">
                                    <div className="absolute inset-0">
                                        <Image 
                                            src="/musica/card-2.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute -left-3 bg-black rounded-full p-3">
                                        <img src="/musica/video.svg" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-around py-2 gap-y-2 lg:gap-y-0">
                                    <h1 className="text-xl leading-none lg:text-lg font-medium lg:leading-none">
                                        GIRA DE VERANO
                                    </h1>
                                    <p className="text-xs font-normal">
                                        En enero del 2022, nos llevamos a cuatro artistas emergentes a
                                        recorrer todo el país en su primera gira musical. Ellxs son Marki,
                                        Ana Espil, Kastiello y Acus, cuatro #ArtistasTEMPLE que nos
                                        inspiran por sus ritmos, su vibra y su talento siempre en
                                        movimiento.
                                    </p>
                                </div>
                            </div>


                            <div className="bg-[#f1bf00] bg-card-3 p-5 flex flex-col justify-between gap-y-4 lg:gap-y-0 min">
                                <div className="card-3 py-52 lg:py-44 relative">
                                    <div className="absolute inset-0">
                                        <Image 
                                            src="/musica/card-3.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute -left-3 bg-black rounded-full p-3">
                                        <img src="/musica/video.svg" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-around py-2 gap-y-2 lg:gap-y-0">
                                    <h1 className="text-xl leading-none lg:text-lg font-medium lg:leading-none">
                                        DOCUS TEMPLE
                                    </h1>
                                    <p className="text-xs font-normal">
                                        Hicimos una serie de documentales sobre lxs artistas emergentes
                                        que nos inspiran a diario. ¿Ya enfriaste las birras? ¡Dale que con
                                        el documental las pintas son más ricas!
                                    </p>
                                </div>
                            </div>


                            <div className="bg-[#1f9996] bg-card-4 p-5 flex flex-col justify-between gap-y-4 lg:gap-y-0 min">
                                <div className="card-4 py-52 lg:py-40 relative">
                                    <div className="absolute inset-0">
                                        <Image 
                                            src="/musica/card-4.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute -left-3 bg-black rounded-full p-3">
                                        <img src="/musica/video.svg" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-around py-2 gap-y-2 lg:gap-y-0">
                                    <h1 className="text-xl leading-none lg:text-lg font-medium lg:leading-none">
                                        RITUAL
                                    </h1>
                                    <p className="text-xs font-normal">
                                        Un espacio de cultura emergente, donde el arte y la expresión se
                                        encuentran, siempre con una birrita en mano y entre amigxs. En
                                        vivo desde el Polo Cultural Saldías en la Ciudad de Buenos Aires y
                                        en directo para todos los TEMPLE de Argentina.
                                    </p>
                                </div>
                            </div>


                            <div className="bg-[#d41768] bg-card-5 p-5 flex flex-col justify-between gap-y-4 lg:gap-y-0 min">
                                <div className="card-5 py-52 lg:py-48 relative">
                                    <div className="absolute inset-0">
                                        <Image 
                                            src="/musica/card-5.jpg"
                                            style={{
                                                objectFit: 'cover',
                                                objectPosition: 'top'
                                            }}
                                            fill 
                                        />
                                    </div>
                                    <div className="absolute -left-3 bg-black rounded-full p-3">
                                        <img src="/musica/video.svg" alt="" className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-white h-full flex flex-col justify-around py-2 gap-y-2 lg:gap-y-0">
                                    <h1 className="text-xl leading-none lg:text-lg font-medium lg:leading-none">
                                        RANCHAR
                                    </h1>
                                    <p className="text-xs font-normal">
                                        Un espacio improvisado. Un plano continuo con el ambiente
                                        vibrando. Un TEMPLE en cada canción de artistas emergentes que
                                        están sonando.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}