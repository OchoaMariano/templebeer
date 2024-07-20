"use client";

// components/Popup.js
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Popup() {
  const [isOldEnough, setIsOldEnough] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const pathName = usePathname();
  const currentPathSegments = pathName.split("/");
  const lang = currentPathSegments[1];

  useEffect(() => {
    const response = sessionStorage.getItem("isOldEnough");
    if (response !== null) {
      setIsOldEnough(response === "true");
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("isOldEnough", "true");
    setIsOldEnough(true);
    setShowPopup(false);
  };

  const handleNo = () => {
    window.open("https://es.wikihow.com/acelerar-el-paso-del-tiempo", "_blank");
  };

  const handleNoNo = () => {
    window.open("https://www.wikihow.com/Make-Time-Pass--Faster", "_blank");
  };

  if (!showPopup) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div
        className="py-12 px-36 shadow-lg bg-cover bg-center border border-white"
        style={{ backgroundImage: "url(/background-home.jpeg)" }}
      >
        <div className="flex flex-col items-center justify-center gap-y-[30px]">
          <div className="logo__wrapper relative w-[95px] h-[91px]">
            <Image src="/isologo-temple.png" alt="Temple Beer Isologo" fill />
          </div>
          {lang == "es" && (
            <h2 className="text-lg text-[33px] mb-4 text-white">
              ¿SOS MAYOR DE 18 AÑOS?
            </h2>
          )}
          {lang == "es-MX" && (
            <h2 className="text-lg text-[33px] mb-4 text-white">
              ¿SOS MAYOR DE 18 AÑOS?
            </h2>
          )}
          {lang == "en" && (
            <h2 className="text-lg text-[33px] mb-4 text-white">
              ARE YOU OVER 18 YEARS OLD?
            </h2>
          )}
          {lang == "es" && (
            <div className="flex space-x-4">
              <button
                onClick={handleYes}
                className="px-6 py-2 border-[#1F9996] border text-white hover:bg-[#1F9996] hover:text-white text-[12px]"
              >
                SI
              </button>
              <button
                onClick={handleNo}
                className="px-6 py-2 border-[#D41768] border text-white hover:bg-[#D41768] hover:text-white text-[12px]"
              >
                N0
              </button>
            </div>
          )}
          {lang == "es-MX" && (
            <div className="flex space-x-4">
              <button
                onClick={handleYes}
                className="px-6 py-2 border-[#1F9996] border text-white hover:bg-[#1F9996] hover:text-white text-[12px]"
              >
                SI
              </button>
              <button
                onClick={handleNo}
                className="px-6 py-2 border-[#D41768] border text-white hover:bg-[#D41768] hover:text-white text-[12px]"
              >
                N0
              </button>
            </div>
          )}
          {lang == "en" && (
            <div className="flex space-x-4">
              <button
                onClick={handleYes}
                className="px-6 py-2 border-[#1F9996] border text-white hover:bg-[#1F9996] hover:text-white text-[12px]"
              >
                YES
              </button>
              <button
                onClick={handleNoNo}
                className="px-6 py-2 border-[#D41768] border text-white hover:bg-[#D41768] hover:text-white text-[12px]"
              >
                N0
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
