"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";
import { i18n } from "../../src/i18n-config";
import { Tooltip } from "react-tooltip";

export default function Header({ dictonary }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const pathName = usePathname();
  const currentPathSegments = pathName.split("/");
  const firstSegment = currentPathSegments[1];

  // Función para construir el path correcto considerando el locale
  const createLocalePath = (path) => {
    const pathName = usePathname();
    const currentPathSegments = pathName.split("/");
    const firstSegment = currentPathSegments[1];

    // Chequeamos si el primer segmento es un locale válido
    // Asegurándonos de que la longitud del segmento sea igual a la de los códigos de idioma.
    const isLocale = i18n.locales.includes(firstSegment); // Asumiendo que todos los locales tienen 2 caracteres

    // Si es un locale, y el path no comienza con ese locale, lo agregamos
    if (isLocale) {
      return `/${firstSegment}${path}`;
    }

    // Si no es un locale o el path ya contiene el locale, lo devolvemos tal cual
    return path;
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <header className="header__temple bg-transparent absolute md:fixed w-full z-[99] top-0">
      <div className="header__temple-wrapper">
        <div className="wrapper__logo">
          <Link href={createLocalePath("/")}>
            <div className="relative w-[31.53vw] h-[6.89vw] md:w-[18.13vh] md:h-[4.1vh]">
              <Image
                src="/logo-temple-normal.png"
                alt="Temple Beer"
                className="logo-normal"
                fill
              />
              <Image
                src="/logo-hover-temple.png" // Cambia esto por la ruta de tu otro logo
                alt="Otro Logo"
                className="logo-hover"
                fill
              />
            </div>
          </Link>
        </div>
        <div className="wrapper__content-nav hidden md:flex">
          <div className="main__nav">
            <Link
              href={createLocalePath("/birras")}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
            >
              {dictonary.nav.birras}
            </Link>
            <Link
              href={
                firstSegment === "es"
                  ? createLocalePath("/bares")
                  : firstSegment === "en"
                  ? createLocalePath("/bares")
                  : firstSegment === "es-MX"
                  ? createLocalePath("/bares")
                  : "es"
              }
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
            >
              {dictonary.nav.bares}
            </Link>
            <Link
              href={createLocalePath("/encuentro")}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
            >
              {dictonary.nav.encuentro}
            </Link>
            <Link
              href={createLocalePath("/musica")}
              className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
            >
              {dictonary.nav.musica}
            </Link>
            {firstSegment == "es" && (
              <Link
                href={createLocalePath("/ipasionales")}
                className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
              >
                {dictonary.nav.ipasionales}
              </Link>
            )}
            {firstSegment == "es" && (
              <a
                href="https://templeacademy.notion.site/templeacademy/0f69945dbb6247a1b08f8eae47bb2442?v=bdfe9a6a777c4281adda7ea36cf7d43c"
                target="_blank"
                className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
              >
                Temple Academy
              </a>
            )}
            {firstSegment == "es" && (
              <a
                href="/es/franquicias"
                className="nav__item text-white border-b-2 border-transparent hover:border-[#D51668] hover:border-b-2 py-1 transition duration-300 ease-in-out"
              >
                Franquicias
              </a>
            )}
          </div>
          <div className="hidden lg:block divisor h-[21px] w-[1px] bg-white"></div>
          <div className="hidden lg:flex rrss__nav">
            {firstSegment == "es" && (
              <a
                href="https://www.instagram.com/templecerveza/"
                target="_blank"
              >
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </a>
            )}
            {firstSegment == "es-MX" && (
              <a href="https://www.instagram.com/templemex" target="_blank">
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </a>
            )}
            {firstSegment == "en" && (
              <a href="https://www.instagram.com/templemiami/" target="_blank">
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={16}
                  height={16}
                />
              </a>
            )}
            {firstSegment == "en" && (
              <a href="https://www.tiktok.com/@templecerveza" target="_blank">
                <Image
                  src="/tik-tok-icon.svg"
                  alt="Tik-Tok"
                  width={12}
                  height={14}
                />
              </a>
            )}
            {firstSegment == "es" && (
              <a href="https://www.tiktok.com/@templecerveza" target="_blank">
                <Image
                  src="/tik-tok-icon.svg"
                  alt="Tik-Tok"
                  width={12}
                  height={14}
                />
              </a>
            )}

            {firstSegment == "es" && (
              <a
                href="https://encasa.temple.com.ar/"
                target="_blank"
                className="button_nav hover:bg-[#FCDB00] hover:text-black hover:border-[#ffffff] transition duration-300 ease-in-out"
              >
                Shop
              </a>
            )}
          </div>
          <div className="hidden lg:block divisor h-[21px] w-[1px] bg-white"></div>
          <div className="hidden lg:flex lang__nav">
            <LocaleSwitcher />
            <a href="/mapa">
              <Image
                src="/bandera-esp.png"
                alt="España"
                className="cursor-pointer hidden xl:block"
                width={26}
                height={17}
                data-tooltip-id="tooltip-lang"
              />
            </a>
            <Image
              src="/uy.svg"
              alt="Uruguay"
              className="opacity-50 cursor-pointer hidden xl:block"
              width={24}
              height={17}
              data-tooltip-id="tooltip-lang"
              data-tooltip-content="Próximamente"
            />

            <Tooltip id="tooltip-lang" />
          </div>
        </div>
        <div className="wrapper__nav-mobile flex md:hidden">
          <div className="menu__icon relative menu-button" onClick={toggleMenu}>
            <Image src="/nav-mobile.png" width={44} height={44} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className={`menu ${isMenuOpen ? "menuOpen" : ""}`}>
          <div className="flex flex-col pr-[5.12vw] pl-[5.12vw] py-[2.43vw] justify-between h-full">
            <div className="flex flex-row items-end justify-end">
              <div
                className="w-[11.28vw] h-[11.28vw] relative"
                onClick={toggleMenu}
              >
                <Image src="/botones-mobile.png" fill />
              </div>
            </div>
            <div className="flex flex-col ">
              <Link
                href={createLocalePath("/")}
                className="text-[8vw] uppercase nav__item text-white transition duration-300 ease-in-out"
              >
                {dictonary.nav.home}
              </Link>
              <Link
                href={createLocalePath("/birras")}
                className="text-[8.5vw] uppercase nav__item text-white transition duration-300 ease-in-out"
              >
                {dictonary.nav.birras}
              </Link>
              <Link
                href={
                  firstSegment === "es"
                    ? createLocalePath("/bares")
                    : firstSegment === "en"
                    ? createLocalePath("/bares")
                    : firstSegment === "es-MX"
                    ? createLocalePath("/bares")
                    : "es"
                }
                className="text-[8vw] uppercase nav__item text-white transition duration-300 ease-in-out"
              >
                {dictonary.nav.bares}
              </Link>
              <Link
                href={createLocalePath("/encuentro")}
                className="text-[8.5vw] uppercase nav__item text-white transition duration-300 ease-in-out"
              >
                {dictonary.nav.encuentro}
              </Link>
              <Link
                href={createLocalePath("/musica")}
                className="text-[8vw] uppercase nav__item text-white transition duration-300 ease-in-out"
              >
                {dictonary.nav.musica}
              </Link>
              {firstSegment == "es" && (
                <Link
                  href={createLocalePath("/ipasionales")}
                  className="text-[8vw] uppercase nav__item text-white transition duration-300 ease-in-out"
                >
                  {dictonary.nav.ipasionales}
                </Link>
              )}
              {firstSegment == "es" && (
                <Link
                  href="https://templeacademy.notion.site/templeacademy/0f69945dbb6247a1b08f8eae47bb2442?v=bdfe9a6a777c4281adda7ea36cf7d43c"
                  target="_blank"
                  className="text-[8vw] leading-7 my-2 uppercase nav__item text-white transition duration-300 ease-in-out"
                >
                  Temple Academy
                </Link>
              )}
              {firstSegment == "es" && (
                <Link
                  href={createLocalePath("/franquicias")}
                  className="text-[8vw] uppercase nav__item text-white transition duration-300 ease-in-out"
                >
                  Franquicias
                </Link>
              )}
            </div>
            <div className="flex flex-col py-[5.12vw] mb-[10vw]">
              <div className="flex flex-start items-start justify-start gap-x-[2.52vw] text-white pb-[5.12vw]">
                <Link
                  href={createLocalePath("/legales")}
                  className="text-[2.56vw] uppercase"
                >
                  {" "}
                  {dictonary.nav.legales}{" "}
                </Link>
              </div>
              <div className="bg-white h-[1px]"></div>
              <div className="flex flex-row items-center justify-between py-[7.12vw]">
                {firstSegment == "es" && (
                  <a
                    href="https://encasa.temple.com.ar/"
                    target="_blank"
                    className="text-white uppercase hover:bg-[#FCDB00] hover:text-black hover:border-[#ffffff] transition duration-300 ease-in-out"
                  >
                    Shop
                  </a>
                )}
                <div className="lang__nav">
                  <LocaleSwitcher />
                  <a href="/mapa">
                    <Image
                      src="/bandera-esp.png"
                      alt="España"
                      className="cursor-pointer"
                      width={26}
                      height={17}
                      data-tooltip-id="tooltip-lang"
                    />
                  </a>
                  <Image
                    src="/uy.svg"
                    alt="Uruguay"
                    className="opacity-50"
                    width={24}
                    height={17}
                    data-tooltip-id="tooltip-lang"
                    data-tooltip-content="Próximamente"
                  />

                  <Tooltip id="tooltip-lang" />
                </div>
                <div className="">
                  <div className="flex flex-row items-center gap-x-[1.28vw] bg-white bg-opacity-50 py-[1.28vw] px-[1.28vw] rounded-[30px]">
                    <div className="relative w-[4.12vw] h-[3.84vw] z-10">
                      <Image src="/arrow-footer.png" fill />
                    </div>
                    {firstSegment == "es" && (
                      <a
                        href="https://www.instagram.com/templecerveza/"
                        target="_blank"
                      >
                        <div className="relative w-[4.87vw] h-[4.87vw]">
                          <Image src="/instagram-footer.png" fill />
                        </div>
                      </a>
                    )}
                    {firstSegment == "es-MX" && (
                      <a
                        href="https://www.instagram.com/templemex"
                        target="_blank"
                      >
                        <div className="relative w-[4.87vw] h-[4.87vw]">
                          <Image src="/instagram-footer.png" fill />
                        </div>
                      </a>
                    )}
                    {firstSegment == "en" && (
                      <a
                        href="https://www.instagram.com/templemiami/"
                        target="_blank"
                      >
                        <div className="relative w-[4.87vw] h-[4.87vw]">
                          <Image src="/instagram-footer.png" fill />
                        </div>
                      </a>
                    )}
                    {firstSegment == "es" && (
                      <a
                        href="https://www.tiktok.com/@templecerveza"
                        target="_blank"
                      >
                        <div className="relative w-[4.35vw] h-[4.87vw]">
                          <Image
                            src="/tik-tok-footer.png"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            fill
                          />
                        </div>
                      </a>
                    )}
                    {firstSegment == "en" && (
                      <a
                        href="https://www.tiktok.com/@templecerveza"
                        target="_blank"
                      >
                        <div className="relative w-[4.35vw] h-[4.87vw]">
                          <Image
                            src="/tik-tok-footer.png"
                            style={{
                              objectFit: "cover",
                              objectPosition: "center",
                            }}
                            fill
                          />
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
