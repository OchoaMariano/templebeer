import Image from 'next/image'
import Link from 'next/link'

function Footer() {

    return (
        <>
            <section className="footer-wrapper lg:hidden">
                <div className="footer-content flex flex-row justify-start">
                    <div className="p-[1.28vw] w-[14.10vw] h-[10.25vw] relative">
                        <Image src="/logo-footer.png" alt="" fill />
                    </div>
                </div>
            </section>
        </>
    )

}

export default Footer