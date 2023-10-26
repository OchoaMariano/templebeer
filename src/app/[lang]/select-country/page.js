"use client"

import Head from 'next/head';
import CountryLayout from './layout';
import { useRouter } from 'next/navigation';

export default function SelectCountry() {
  const router = useRouter();

  const handleCountrySelect = (countryCode) => {
    // Establece la cookie
    document.cookie = `selectedCountry=${countryCode}; path=/`;

    // Redirige al usuario a la página principal con el locale correcto
    const locale = countryCode === 'AR' ? 'es' : 'en'; // Puedes expandir esto con más lógica si es necesario
    router.push(`/${locale}`);
    // router.replace(`/${locale}`); // No necesitamos esta línea, ya que el método `push` ya hace la redirección.
    console.log('pase')
  }

  return (
    <CountryLayout>
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
            <FlagButton img="/bandera-arg.svg" alt="Argentina Flag" onClick={() => handleCountrySelect('AR')} />
            <FlagButton img="/bandera-us.svg" alt="USA Flag" onClick={() => handleCountrySelect('US')} />
            <FlagButton img="/bandera-es.svg" alt="Spain Flag" isLast disabled>
              PRÓXIMAMENTE
            </FlagButton>
          </div>
        </div>
      </div>
    </CountryLayout>
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

