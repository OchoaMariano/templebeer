import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '../../dictionaries'
import { Knockout54UltraBold } from './layout'
import ScrollHorizontal from '../../../components/ScrollHorizontal';


const data = {
  birras: [
    "WOLF IPA",
    "ROYAL SCOTTISH",
    "CÓSMICA HOPPY LAGER",
    "HONEY",
    "INDIE GOLDEN",
    "BLACK SOUL STOUT",
    "FLOW APA",
    "REVOLUTION NEIPA",
    "LEMON HAZE IPA",
    "CRITICAL APA",
    "KAN",
    "JAMMIN IMPERIAL STOUT",
    "IPANEMA HAZY IPA",
    "KUNG FU SOUR",
    "DEMON HONEY",
    "MILKSHAKE NEIPA",
    "WOLF IPA 0%",
    "ALPHA",
    "ALPHA II"
  ]
};


export default async function Page({ params: { lang } }) {
  const messages = await getDictionary(lang);
   
  
  return (
    <main className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>

        <section className="home__view"> {/* Añadir el overflow aquí */}
          <div className="view-section__wrapper pt-[100px] pb-[70px]">
          <ScrollHorizontal>
            <div className="flex flex-row h-[561px] 3xl:h-[738px] pl-[10px] w-[2552px] 3xl:w-[3301px]">
              <div className="grid grid-cols-24 grid-rows-5 gap-2 h-full w-full">

                {/* GRID ELEMENT MAIN IMAGE */}
                <div className="col-[1/4] row-[1/5] relative">
                  <div className="main-image__wrapper">
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                      <Image 
                          src="/back-main-image.png"
                          alt="Temple Beer"
                          fill
                      />
                    </div>
                    
                    
                    {/* Lata de cerveza centrada */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image 
                            src="/birra-wolf-ipa.png"
                            alt="Lata de Cerveza"
                            width={500}
                            height={500}
                            style={{
                              width: 300,
                            }}
                        />
                    </div>
                    
                    {/* Sticker en la esquina inferior derecha */}
                    <div className="absolute -bottom-5 -right-12 mb-4 mr-4">
                      <Image
                          src="/sticker-isologo.png"
                          alt="Sticker"
                          width={119}
                          height={112}
                      />
                    </div>
                  </div>
                </div>

                {/* GRID BIRRAS AND NAV */}
                <div className="col-[1/7] 3xl:col-[1/6] row-[5/6] z-10">
                  <div className="birras__wrapper flex items-end justify-end h-full">
                    <div className="nav__wrapper">
                      <h1 className="text-4xl font-bold text-white text-[50px]">NUESTRAS BIRRAS</h1>
                      <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2">
                        {data.birras.map((birra, index) => (
                          <span key={index} className="py-[2px] px-[5px] text-[10px] text-white border-r-[1px] border-white">
                            {birra}
                          </span>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>

                {/* MAIN TITLE AND NAV */}
                <div className="col-[4/14] row-[1/2] relative">
                  <div className="title__wrapper flex justify-start items-center h-full">
                    <h1 className={`text-white text-[50px] 3xl:text-[62px] Knockout54UltraBold ${Knockout54UltraBold.className}`}>
                      <Link href='/encuentro' className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out">ENCUENTRO</Link>, 
                      <Link href='/birras' className="text-white hover:text-[#D51668] transition duration-300 ease-in-out"> BIRRA </Link> 
                      Y  
                      <Link href='/musica' className="text-white hover:text-[#1F9996] transition duration-300 ease-in-out"> MÚSICA</Link>
                    </h1>
                  </div>
                  {/* Sticker en la esquina inferior derecha */}
                  <div className="absolute -bottom-16 right-20 mb-4 mr-4 z-10">
                      <Image
                          src="/beer-sticker.png"
                          alt="Sticker"
                          width={119}
                          height={112}
                      />
                    </div>
                </div>

                {/* FRAME 1 - HOME */}
                <div className="col-[4/6] row-[2/5] relative flex justify-start">
                  <Image 
                    src="/frame-home-1.png"
                    alt="Temple Beer"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'top'
                    }}
                    fill
                  />
                </div>
                {/* FRAME 2 - HOME */}
                <div className="col-[7/9] 3xl:col-[6/9] row-[2/6] relative">
                  <Image 
                    src="https://s3-alpha-sig.figma.com/img/c1d4/f01c/e3a089ad5dfb1117c39f04ca8f8d509b?Expires=1698624000&Signature=LdmMRsVaO4-J2-jHv1TM8FkRqlpu~3FWtKs7D47xLJ5W9NgGmL4QueBWcebYbNHiIBsl1bDUp7cMh3FwluJ0GT9bguFNveh0CEXx6xP8GFtiu24rasn7KEXRRTybPIs4r5TJS~dplLy~O3DFYY91Hz6Wgvxq69O~CvekYOyvxpQQUJ7anAo2KPAHih98xTLv87FgisBojnFdk6cKq5bDyyY~kO6AyJ0UIo~~nwADkI9lQkl7Fd7hZ8q44FDW24xEjrlHK6HYpH01rPsy2pDBmo9KEnMwVaFnsrWR4ggAzY4epnvkZ4EpAtsJPgRgt0C3NH01zGvm4gbzbw4EQjDTJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt="Temple Beer"
                    style={{
                      objectFit: 'cover',
                    }}
                    fill
                    unoptimized={true}
                  />
                </div>
                {/* FRAME 3 - HOME */}
                <div className="col-[9/12] row-[2/6] relative">
                  
                  <Image 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjRveTUxeDk5cHZmeWFtNWJreTNzM2t0NTgxbDEzOHJjZ3h2YzVhYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KBw4MkRoLLLzmK5NTp/giphy-downsized-large.gif"
                    alt="Temple Beer"
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    unoptimized={true}
                  />
                </div>
                {/* FRAME 3 - HOME */}
                <div className="col-[12/15] row-[2/6] relative">
                  
                  <Image 
                    src="/frame-4.png"
                    alt="Temple Beer"
                    fill
                    style={{
                      objectFit: 'cover',
                    }}
                    unoptimized={true}
                  />
                </div>
                {/* FRAME 4 - HOME */}
                <div className="col-[15/24] row-[1/6] border-white border-2 relative">
                  
                </div>

              </div>
            </div>
            </ScrollHorizontal>
          </div>
        </section>
      
    </main>
  );
}
