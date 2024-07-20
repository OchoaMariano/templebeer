"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../src/i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale) => {
    sessionStorage.setItem("selectedCountry", locale);
    const newPath = redirectedPathName(locale, pathname);
    router.push(newPath);
  };

  const redirectedPathName = (newLocale, currentPath) => {
    if (!currentPath) return "/";

    const segments = currentPath.split("/").filter((segment) => segment !== "");
    const currentLocale = i18n.locales.find((locale) => segments[0] === locale);

    if (currentLocale) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    return `/${segments.join("/")}`;
  };

  // Objeto que asocia cada locale con una imagen
  const localeImages = {
    es: "/bandera-arg.svg",
    en: "/bandera-us.svg",
    "es-MX": "/mx.svg",
    // Añade más locales e imágenes según sea necesario
  };

  return (
    <>
      <ul className="flex flex-row items-center justify-center h-[21px] gap-x-[14px]">
        {i18n.locales.map((locale) => {
          const imagePath = localeImages[locale] || "/bandera-arg.svg.png"; // Una imagen por defecto para locales sin imagen específica
          return (
            <li key={locale} onClick={() => handleLocaleChange(locale)}>
              <Link href={redirectedPathName(locale, pathname)}>
                <Image src={imagePath} alt={locale} width={24} height={17} />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
