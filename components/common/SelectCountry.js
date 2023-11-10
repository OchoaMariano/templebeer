"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'

export default function SelectCountry() {
  const [shouldShow, setShouldShow] = useState(false); // Inicializar como false
  const router = useRouter();

  useEffect(() => {
    // Solo se ejecuta en el cliente.
    const selectedCountry = sessionStorage.getItem('selectedCountry');
    if (selectedCountry) {
      setShouldShow(false); // No mostrar el selector
      const locale = selectedCountry === 'es' ? 'es' : 'en';
      router.replace(`/${locale}`); // Redirige al usuario a la página localizada
    } else {
      setShouldShow(true); // Mostrar el selector
    }
  }, [router]);

  const handleCountrySelect = (countryCode) => {
    sessionStorage.setItem('selectedCountry', countryCode); // Guardar en sessionStorage
    setShouldShow(false); // No mostrar el selector después de seleccionar
    const locale = countryCode === 'es' ? 'es' : 'en';
    router.push(`/${locale}`); // Redirigir al usuario a la página localizada
  };

  // Si no debemos mostrar el selector, retornar null para no renderizar nada
  if (!shouldShow) {
    return null;
  }

  return (
    <>
      <div className="fixed z-[100] inset-0">
          <div className="min-h-screen flex flex-col items-center justify-center lg:justify-between text-white bg-cover bg-center lg:py-40" style={{ backgroundImage: 'url(/background.jpg)' }}>
              <Head>
              <title>Temple Beer</title>
              </Head>
              <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

              <div className="logo_wrapper z-20">
              <div className="text-center mb-4">
                  <img src="/logo-temple-select-country.svg" alt="Temple Logo" className="w-48 h-48 mx-auto" />
              </div>
              </div>
              
              <div className="flags_wrapper z-20">
              <div className="flex flex-col lg:flex-row items-center relative">
                  <FlagButton img="/bandera-arg.svg" alt="Argentina Flag" onClick={() => handleCountrySelect('es')} />
                  <FlagButton img="/bandera-us.svg" alt="USA Flag" onClick={() => handleCountrySelect('en')} />
                  <FlagButton img="/bandera-es.svg" alt="Spain Flag" isLast disabled>
                  PRÓXIMAMENTE
                  </FlagButton>
              </div>
              </div>
          </div>
      </div>
    </>
  );
}

const FlagButton = ({ img, alt, onClick, disabled = false, children, isLast = false }) => (
  <div 
    onClick={!disabled ? onClick : null} 
    className={`flex items-center justify-center h-full px-10 lg:px-0 py-12 lg:w-[274px] p-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${!isLast && 'border-b lg:border-b-0 lg:border-r border-white'}`}
  >
    <div
      style={{
        transition: 'transform 0.6s', /* Hacer la transición más suave */
        transformOrigin: 'center',
      }}
      onMouseOver={(e) => !disabled && (e.currentTarget.style.animation = 'bounce 1s')} /* Hacer la animación más suave */
      onMouseOut={(e) => e.currentTarget.style.animation = ''}
    >
      <img src={img} alt={alt} className="w-12 h-12" />
    </div>
    {children && <p className="absolute bottom-0 pt-0">{children}</p>}
  </div>
);
