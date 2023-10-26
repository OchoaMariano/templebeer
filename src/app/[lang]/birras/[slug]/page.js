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
            <Header  />
            <section className="h-screen bg-cover bg-center pt-[100px]" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper pl-[34px] relative h-full">
                    <ScrollHorizontal>
                        <div className="wrapper flex flex-row w-[2552px]">
                            <div className="data__wrapper flex flex-col w-[500px] pl-[10px]">
                                <div className="title__wrapper pb-[35px]">
                                    <h1 className={`text-4xl font-bold text-white text-[67px] 2xl:text-[67px] leading-none uppercase ${Knockout54UltraBold.className}`}>{params.slug}</h1>
                                </div>
                                <div className="callToAction__wrapper flex flex-row gap-x-[10px]">
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
                                <div className="description__wrapper flex flex-col w-4/5 pt-[15px]">
                                    <p className={`text-white uppercase text-[11px] ${GothamBook.className}`}>
                                        Cerveza india pale ale, de color dorada ambarina. inspirada en ipas americanas con un carácter cítrico y herbal característico en aroma y sabor.
                                        <br></br><br></br>
                                        De amargor muy pronunciado pero equilibrado. El lúpulo en su máxima expresión.
                                    </p>
                                    <div className="propiedades__wrapper flex flex-row pt-[15px] text-[11px]">
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
            </section>
            
        </>
    );
}