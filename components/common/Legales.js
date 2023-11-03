import Link from 'next/link'

function Legales () {
    return (
        <>
            <div className="footer-legales uppercase hidden md:block md:fixed bottom-0 right-0 h-[4.1vh] pr-[0.99vh]">
                <div className="flex items-center">
                    <Link href="/legales" className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out text-[1.41vh]"> 
                        Legales
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Legales