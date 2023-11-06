'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '../../src/i18n-config'
import Image from 'next/image'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  // Objeto que asocia cada locale con una imagen
  const localeImages = {
    es: '/bandera-arg.svg',
    en: '/bandera-us.svg',
    // Añade más locales e imágenes según sea necesario
  }

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <> 
      <ul className="flex flex-row items-center justify-center h-[21px] gap-x-[14px]">
        {i18n.locales.map((locale) => {
          const imagePath = localeImages[locale] || '/bandera-arg.svg.png'; // Una imagen por defecto para locales sin imagen específica
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)} >
                  <Image src={imagePath} alt={locale} width="24" height="17" />
                 
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

