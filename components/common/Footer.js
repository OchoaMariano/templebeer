import Image from 'next/image'
import Link from 'next/link'

function Footer() {

    return (
        <>
            <section className="footer-wrapper lg:hidden">
                <div className="footer-content flex flex-row justify-between">
                    <div className="p-[1.28vw] w-[14.10vw] h-[10.25vw] relative">
                        <Image src="/logo-footer.png" alt="" fill />
                    </div>
                    <div className="fixed right-[5.12vw] bottom-[10.24vw]">
                        <div className="flex flex-row items-center gap-x-[1.28vw] bg-white bg-opacity-50 py-[1.28vw] px-[1.28vw] rounded-[30px]">
                            <div className="relative w-[4.12vw] h-[3.84vw] z-10">
                                <Image 
                                    src="/arrow-footer.png"
                                    
                                    fill
                                />
                            </div>
                            <div className="relative w-[4.87vw] h-[4.87vw]">
                                <Image 
                                    src="/instagram-footer.png"
                                    
                                    fill
                                />
                            </div>
                            <div className="relative w-[4.35vw] h-[4.87vw]">
                                <Image 
                                    src="/tik-tok-footer.png"
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center'
                                    }}
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )

}

export default Footer