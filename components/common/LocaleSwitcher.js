"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { i18n } from "../../src/i18n-config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const [pathName, setPathName] = useState("/");
  const router = useRouter();

  useEffect(() => {
    // Cuando el componente se monta y el router está listo, establece la ruta actual.
    if (router.asPath) {
      setPathName(router.asPath);
    }
  }, [router.asPath]);

  const handleLocaleChange = (locale) => {
    sessionStorage.setItem("selectedCountry", locale); // Guarda el nuevo locale en sessionStorage
    const newPath = redirectedPathName(locale); // Calcula la nueva ruta
    router.push(newPath); // Redirige al usuario
  };

  const redirectedPathName = (locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    if (segments.length > 1 && i18n.locales.includes(segments[1])) {
      segments[1] = locale; // Asegura que el segundo segmento es el locale correcto
    } else {
      segments.splice(1, 0, locale); // Inserta el locale si no estaba presente
    }
    return segments.join("/");
  };

  // Objeto que asocia cada locale con una imagen
  const localeImages = {
    es: "/bandera-arg.svg",
    en: "/bandera-us.svg",
    "es-MX": "/mx.svg", // Añade la imagen para el locale 'es-MX'

    // Añade más locales e imágenes según sea necesario
  };

  return (
    <>
      <ul className="flex flex-row items-center justify-center h-[21px] gap-x-[14px]">
        {i18n.locales.map((locale) => {
          const imagePath = localeImages[locale] || "/bandera-arg.svg.png"; // Una imagen por defecto para locales sin imagen específica
          return (
            <li key={locale} onClick={() => handleLocaleChange(locale)}>
              <Link href={redirectedPathName(locale)}>
                <Image src={imagePath} alt={locale} width="24" height="17" />
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
