import Image from 'next/image'
import Link from 'next/link'
import { getDictionary } from '../../dictionaries'
import { Knockout54UltraBold } from './layout'
import ScrollHorizontal from '../../../components/ScrollHorizontal'
import PlaylistSpotify from '../../../components/home/PlaylistSpotify'
import Header from '../../../components/common/header'


const data = {
  birras: [
    { title: "WOLF IPA", id: 1, slug: "wolf-ipa" },
    { title: "ROYAL SCOTTISH", id: 2, slug: "royal-scottish" },
    { title: "CÓSMICA HOPPY LAGER", id: 3, slug: "csmica-hoppy-lager" },
    { title: "HONEY", id: 4, slug: "honey" },
    { title: "INDIE GOLDEN", id: 5, slug: "indie-golden" },
    { title: "BLACK SOUL STOUT", id: 6, slug: "black-soul-stout" },
    { title: "FLOW APA", id: 7, slug: "flow-apa" },
    { title: "REVOLUTION NEIPA", id: 8, slug: "revolution-neipa" },
    { title: "LEMON HAZE IPA", id: 9, slug: "lemon-haze-ipa" },
    { title: "CRITICAL APA", id: 10, slug: "critical-apa" },
    { title: "KAN", id: 11, slug: "kan" },
    { title: "JAMMIN IMPERIAL STOUT", id: 12, slug: "jammin-imperial-stout" },
    { title: "IPANEMA HAZY IPA", id: 13, slug: "ipanema-hazy-ipa" },
    { title: "KUNG FU SOUR", id: 14, slug: "kung-fu-sour" },
    { title: "DEMON HONEY", id: 15, slug: "demon-honey" },
    { title: "MILKSHAKE NEIPA", id: 16, slug: "milkshake-neipa" },
    { title: "WOLF IPA 0%", id: 17, slug: "wolf-ipa-0" },
    { title: "ALPHA", id: 18, slug: "alpha" },
    { title: "ALPHA II", id: 19, slug: "alpha-ii" }
  ]
};


export default async function Page({ params: { lang } }) {
  const messages = await getDictionary(lang);
   
  
  return (
    <>
    <Header  />
      <main className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>

          <section className="home__view"> {/* Añadir el overflow aquí */}
            <div className="view-section__wrapper__desktop pt-[100px] pb-[70px]">
              <ScrollHorizontal>
                <div className="flex flex-row pl-[10px] h-[561px] w-[2552px] 3xl:h-[738px] 3xl:w-[3301px]">
                  <div className="grid grid-cols-24 grid-rows-5 gap-2 h-full w-full mr-40">

                    {/* GRID ELEMENT MAIN IMAGE */}
                    <div className="col-[1/4] row-[1/5] relative">
                      <div className="main-image__wrapper flex items-center justify-center h-full">
                        {/* Imagen de fondo */}
                        <div className="absolute inset-0">
                          <Image 
                              src="/back-main-image.png"
                              alt="Temple Beer"
                              fill
                          />
                        </div>
                        
                        
                        {/* Lata de cerveza centrada */}
                        <div className="flex items-center justify-center z-10 h-full cursor-pointer transform transition-transform duration-300 hover:scale-110">
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
                          <h1 className="text-4xl font-bold text-white text-[50px]">
                            <Link className="text-white hover:text-[#D51668] transition duration-300 ease-in-out" href="/birras">
                              NUESTRAS BIRRAS
                            </Link>
                          </h1>
                          <nav className="flex flex-wrap self-stretch gap-y-[2px] pt-2">
                            {data.birras.map((birraObj, index) => (
                              <span key={index} className="py-[2px] px-[5px] text-[10px] text-white border-r-[1px] border-dotted border-white">
                                <Link className="text-white hover:text-[#FCDB00] transition duration-300 ease-in-out" href={`/birras/${birraObj.slug}`}>
                                  {birraObj.title}
                                </Link>
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
                    <div className="grid col-[15/25] row-[1/6] relative">
                        <div className="grid grid-cols-12 grid-rows-8">
                          {/* QR */}
                          <div className="col-[1/3] row-[1/3] relative grid content-start justify-items-end">
                            <Image 
                              src="/qr.png"
                              alt="Temple Beer"
                              width={65}
                              height={65}
                              
                            />
                          </div>
                          {/* TRAMA ARRIBA */}
                          <div className="col-[3/5] row-[1/4] relative ">
                            <Image 
                              src="/templexpeke-33.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'cover',
                              }}
                              
                            />
                          </div>
                          {/* CALLE CORTADA ARRIBA */}
                          <div className="col-[5/8] row-[1/4] relative ml-2">
                            <Image 
                              src="/templexpeke-41.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'cover',
                              }}
                              
                            />
                          </div>
                          {/* ULTIMA ARRIBA */}
                          <div className="col-[8/11] row-[1/4] relative ml-2">
                            <div className="relative h-[80%]">
                              <Image 
                                src="/templexpeke-42.png"
                                alt="Temple Beer"
                                fill
                                style={{
                                  objectFit: 'cover',
                                  objectPosition: 'top',
                                }}
                              />
                            </div>
                            
                          </div>
                          {/* FRASE */}
                          <div className="col-[5/11] row-[4/6] relative">
                            <Image 
                              src="/frase.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'contain',
                              }}
                              
                            />
                          </div>
                          {/* VASO BIRRA */}
                          <div className="col-[11/13] row-[3/9] relative z-30">
                            <Image 
                              src="/vaso-birra.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'contain',
                                objectPosition: 'bottom-right'
                              }}
                              
                            />
                          </div>
                          {/* BLOQUE SPOTIFY */}
                          <div className="col-[4/12] row-[6/8] relative z-20 flex items-center justify-center">
                            <PlaylistSpotify /> 
                            <Image 
                              src="/parlante.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'contain',
                                objectPosition: 'left'
                              }}
                            />
                          </div>
                          {/* ENCUENTROS */}
                          <div className="col-[1/5] row-[3/9] relative encuentros_wrapper z-10">
                            <Image 
                              src="/encuentrosencuentros.png"
                              alt="Temple Beer"
                              fill
                              style={{
                                objectFit: 'cover',
                              }}
                              
                            />
                          </div>
                        </div>  
                    </div>

                  </div>
                </div>
              </ScrollHorizontal>
            </div>
          </section>
        
      </main>
    </>
  );
}
