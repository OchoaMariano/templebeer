"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BannerPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleImageClick = () => {
    router.push("/es/form-ipasionales");
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-40 flex items-center justify-center cursor-pointer"
      onClick={handleOverlayClick}
    >
      <div className="relative w-[90%] md:w-[80%] max-w-screen-xl">
        <Image
          src={
            isMobile
              ? "/form-ipasionales/popup/temple-ipasionales-pop-mob_v2.jpg"
              : "/form-ipasionales/popup/temple-ipasionales-pop-desk_v2.jpg"
          }
          alt="Banner"
          width={1200}
          height={600}
          onClick={handleImageClick}
          className="cursor-pointer w-full h-auto object-contain"
        />
        <button
          className="absolute -top-8 -right-8 text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default BannerPopup;
