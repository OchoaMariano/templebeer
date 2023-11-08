import Image from 'next/image'
import Link from "next/link";

export default function Modal() {

    return (
        <div className="fixed z-[100] inset-0 overflow-y-auto" id="error-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" aria-hidden="true">
                    <Link href="/en/encuentro" className="absolute inset-0 w-[100%] h-[100vh]"></Link>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <div className="inline-block shadow-xl transform transition-all align-middle ">
                    <div className="relative w-[100%]">
                        <Image src="/encuentros/culture/tacosupremacy.jpg" fill alt="encuentros-flyer" />
                    </div>
                    
                </div>
        </div>
        </div>
    );
}