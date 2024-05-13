"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

export default function SelectCountry() {
  const [shouldShow, setShouldShow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const selectedCountry = sessionStorage.getItem("selectedCountry");
    if (selectedCountry) {
      setShouldShow(false);
      const locale =
        selectedCountry === "es" || selectedCountry === "es-MX"
          ? "es-MX"
          : "en"; // Incluye 'es-MX' aquí también
      // Solo redirige si está en la ruta raíz
      if (router.pathname === "/") {
        router.replace(`/${locale}`);
      }
    } else {
      setShouldShow(true);
    }
  }, [router]);

  const handleCountrySelect = (countryCode) => {
    sessionStorage.setItem("selectedCountry", countryCode);
    setShouldShow(false);
    const locale =
      countryCode === "es" || countryCode === "es-MX" ? "es-MX" : "en"; // Cambia para incluir 'es-MX'
    router.push(`/${locale}`);
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <>
      <div className="fixed z-[100] inset-0">
        <div
          className="min-h-screen flex flex-col items-center justify-center lg:justify-between text-white bg-cover bg-center lg:py-40"
          style={{
            backgroundImage:
              "url(https://storage.googleapis.com/temple-bucket-prod/background_5eb594baa5/background_5eb594baa5.jpg)",
          }}
        >
          <Head>
            <title>Temple Beer</title>
          </Head>
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

          <div className="logo_wrapper z-20">
            <div className="text-center mb-4">
              <img
                src="/logo-temple-select-country.svg"
                alt="Temple Logo"
                className="w-48 h-48 mx-auto"
              />
            </div>
          </div>

          <div className="flags_wrapper z-20">
            <div className="flex flex-col lg:flex-row items-center relative">
              <FlagButton
                img="/bandera-arg.svg"
                alt="Argentina Flag"
                className="w-12 h-[6.79vh]"
                onClick={() => handleCountrySelect("es")}
              />
              <FlagButton
                img="/bandera-us.svg"
                alt="USA Flag"
                className="w-12 h-[6.79vh]"
                onClick={() => handleCountrySelect("en")}
              />
              <FlagButton
                img="/mx.svg" // Asegúrate de que esta ruta a la imagen sea correcta
                alt="Mexico Flag"
                className="w-12 h-[6.79vh]"
                onClick={() => handleCountrySelect("es-MX")} // Cambia aquí para usar 'es-MX'
              />

              <FlagButton
                img="/flags-cooming-1.png"
                alt="Spain Flag"
                className="w-[12vh] h-[4.2vh]"
                isLast
                disabled
              >
                PRÓXIMAMENTE
              </FlagButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const FlagButton = ({
  img,
  alt,
  onClick,
  className,
  disabled = false,
  children,
  isLast = false,
}) => (
  <div
    onClick={!disabled ? onClick : null}
    className={`flex items-center justify-center h-full px-10 lg:px-0 py-12 lg:w-[274px] p-2 ${
      disabled ? "cursor-not-allowed" : "cursor-pointer"
    } ${!isLast && "border-b lg:border-b-0 lg:border-r border-white"}`}
  >
    <div
      style={{
        transition: "transform 0.6s" /* Hacer la transición más suave */,
        transformOrigin: "center",
      }}
      onMouseOver={(e) =>
        !disabled && (e.currentTarget.style.animation = "bounce 1s")
      } /* Hacer la animación más suave */
      onMouseOut={(e) => (e.currentTarget.style.animation = "")}
    >
      <img src={img} alt={alt} className={className} />
    </div>
    {children && <p className="absolute bottom-0 pt-0">{children}</p>}
  </div>
);
