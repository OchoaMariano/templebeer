import Image from 'next/image'
import Header from '../../../../components/common/header'

export default function Page({ children }) {
    return (
        <div>
            <Header />
            <section className="h-screen bg-cover bg-center pt-[65px]" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper px-[34px]">
                    <div className="title__wrapper">
                        <h1 className="text-4xl font-bold text-white text-[47px] 2xl:text-[67px] leading-none uppercase">Encuentro</h1>
                    </div>
                    <div className="content__wrapper flex flex-row gap-[20px] items-start">
                        
                    </div>
                </div>
                
            </section>
        </div>
    )
}