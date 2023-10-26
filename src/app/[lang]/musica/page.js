import Image from 'next/image'
import Header from '../../../../components/common/header'


export default function Page({ children }) {
    return (
        <div>
            <Header />
            <section className="h-screen bg-cover bg-center pt-[65px]" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper px-[34px]">
                    <div className="title__wrapper">
                        <h1 className="text-4xl font-bold text-white text-[47px] 2xl:text-[67px] leading-none uppercase">Música</h1>
                    </div>
                    <div className="content__wrapper flex flex-row gap-[20px] items-start">
                        <div className="w-1/5">
                            <div className="card__wrapper flex flex-col gap-[21px] p-[20px]">
                                <div className="relative h-[434px] w-[218px]">
                                    <Image 
                                        src='/musica/calle-cortada.jpg'
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/5"></div>
                        <div className="w-1/5"></div>
                        <div className="w-1/5"></div>
                        <div className="w-1/5"></div>
                    </div>
                </div>
                
            </section>
        </div>
    )
}