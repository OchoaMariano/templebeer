import Link from "next/link"
import Image from 'next/image'

export default function Modal() {
  return (
    <div className="fixed z-[100] inset-0 overflow-y-auto" id="error-modal" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" aria-hidden="true">
                <Link href="/encuentro" className="absolute inset-0 w-[100%] h-[100vh]"></Link>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
            </span>
            <div className="inline-block bg-white shadow-xl rounded-t-xl transform transition-all align-middle w-[] h-[] md:w-[100.56vh] md:h-[68.41vh] ">
                
                
            </div>
        </div>
    </div>
  );
}