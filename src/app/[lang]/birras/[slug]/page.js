// export async function generateStaticParams() {
//    const posts = await fetch('https://.../posts').then((res) => res.json())
//   
//    return posts.map((post) => ({
//      slug: post.slug,
//    }))
//}

import Link from "next/link";
import Image from 'next/image';
import { GothamBook } from '../../layout'
import { Knockout54UltraBold } from '../../layout'
import ScrollHorizontal from '../../../../../components/ScrollHorizontal'
import Header from '../../../../../components/common/header'



export default function Page({ params }) {
    return (
        <>
            <div className="desktop">
                <Header  />
                <section className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                    <div className="product-viewport">
                        <div className="page_product_wrapper relative h-full">
                            <ScrollHorizontal>
                                <div className="row">
                                    <div className="column">
                                        <div className="product-box-1">
                                            <div className="absolute right-0 bottom-0">
                                                <div className="relative w-[47.30vh] h-[83vh]">
                                                    <Image
                                                        src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                        style={{
                                                            objectFit: 'cover',
                                                        }}
                                                        fill
                                                        unoptimized={true}
                                                    />
                                                </div>
                                            </div>
                                            
                                            <div className="main-content-wrapper">
                                                <div className="product-title-box">
                                                    <h1 className={`text-[9.49vh] text-white leading-none uppercase ${Knockout54UltraBold.className}`}>{params.slug}</h1>
                                                </div>
                                                <div className="callToAction__wrapper flex flex-row gap-x-[10px] pt-[2.97vh]">
                                                    <Link className="text-white border-b-2 border-white hover:bg-white hover:text-[#D51668] hover:border-[#D51668] transition duration-300 ease-in-out flex flex-row items-center py-1 px-2 gap-[6px] text-[10px]" href="/birras">
                                                        <Image 
                                                            src='/detallebirras/btn-arrow.png'
                                                            width={16}
                                                            height={17}
                                                            className="hover:-rotate-45"
                                                        />
                                                        BIRRAS
                                                    </Link>
                                                    <Link className="text-black bg-white hover:text-[#ffffff] hover:bg-[#D51668] transition duration-300 ease-in-out py-1 px-2 text-[10px] flex items-center" href="/birras">
                                                        COMPRAR
                                                    </Link>
                                                </div>
                                                <div className="description__wrapper flex flex-col pt-[2.26vh]">
                                                    <p className={`text-white uppercase text-[11px] w-[46.88vh] ${GothamBook.className}`}>
                                                        Cerveza india pale ale, de color dorada ambarina. inspirada en ipas americanas con un carácter cítrico y herbal característico en aroma y sabor.
                                                        <br></br><br></br>
                                                        De amargor muy pronunciado pero equilibrado. El lúpulo en su máxima expresión.
                                                    </p>
                                                    <div className="propiedades__wrapper flex flex-row text-[11px  pt-[2.97vh]">
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>ALC. 5,8%</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>IBU 50</span>
                                                        <span className={`text-white border border-white py-[6px] px-[10px] ${GothamBook.className}`}>473 CC.</span>
                                                    </div>
                                                </div>
                                                <div className="trama__wrapper absolute bottom-0 left-0">
                                                    <div className="relative w-[600px] h-[200px] z-20">
                                                        <Image 
                                                            src='/detallebirras/trama-wolf-ipa.png'
                                                            fill
                                                            style={{
                                                                objectFit: 'cover',
                                                            }}
                                                            unoptimized={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="product-box-2">
                                            <div className="relative w-[52.69vh] h-[55.52vh]">
                                                <Image
                                                    src='/detallebirras/wolf-ipa/templexpeke-41.jpg'
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                    fill
                                                    unoptimized={true}
                                                />
                                            </div>
                                            <div className="pt-[2.54vh] pb-[2.54vh]">
                                                <p className={`text-white text-[1.41vh] uppercase ${GothamBook.className}`}>
                                                    Con un perfil muy americano, es una IPA que no vas a poder parar de tomar. Cítrica y frutal consecuencia del dry hopping con lúpulo Mosaic, tiene un tremendo balance entre aroma, sabor, amargor y tomabilidad.
                                                </p>
                                            </div>
                                            <div className="">
                                                <p className={`text-[#1f9996] leading-[3.39vh] text-[3.39vh] uppercase `}>
                                                QUIEN NO CONOCE A WOLF IPA, A CUALQUIER IPA LE REZA
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="product-box-3">
                                            <div className="relative w-[34.98vh] h-[69.54vh] mt-[9.91vh] mb-[11.33vh]">
                                                <Image
                                                    src='/detallebirras/wolf-ipa/video.png'
                                                    style={{
                                                        objectFit: 'cover',
                                                    }}
                                                    fill
                                                    unoptimized={true}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="product-box-4">

                                        </div>
                                    </div>
                                </div>
                                <div className="wrapper flex flex-row w-[2552px]">
                                    
                                    <div className="beer__wrapper flex flex-col items-center justify-end pl-[10px] h-full">
                                        <div className="relative w-[334px] h-[500px]">
                                            <Image
                                                src='/nuestrasbirras/clasicas/wolf-ipa.png'
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                                fill
                                                unoptimized={true}
                                            />
                                        </div>
                                    </div>
                                    <div className="img__wrapper flex flex-col items-center justify-end pl-[10px] h-full">
                                        <div className="relative w-[372px] h-[392px]">
                                            <Image
                                                src='/detallebirras/wolf-ipa/templexpeke-41.jpg'
                                                style={{
                                                    objectFit: 'cover',
                                                }}
                                                fill
                                                unoptimized={true}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ScrollHorizontal>
                            
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}