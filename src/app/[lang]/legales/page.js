import Image from 'next/image'
import Header from '../../../../components/common/header'
import ScrollHorizontal from '../../../../components/ScrollHorizontal'
import Draggable from '../../../../components/common/Dragabble'
import { getDictionary } from '../../../dictionaries';


export default async function Page({ children, params }) {
    const lang = params.lang
    const dict = await getDictionary(lang);
    const headerDic = dict.header;

    return (
        <div>
            <Header dictonary={headerDic} />
            <section className="md:h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background-home.jpeg)' }}>
                <div className="page__wrapper__legales hidden md:flex flex-col justify-start h-full">
                    
                    <ScrollHorizontal>
                        <div className="flex content__wrapper text-white flex-row gap-x-[10vh] items-start w-[400vh] px-[3vh] h-full relative">
                            <div class="w-[70vh] flex flex-col gap-y-[4vh]">
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">
                                        {dict.legales.politicas}
                                    </h1>
                                    <p className="text-[1.51vh]">
                                        {dict.legales.content_politicas}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.info_usuario}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.info_usuario_content}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.info_info}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.info_info_content}
                                    </p>
                                </div>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.cookies}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.cookies_content}
                                    </p>
                                </div>
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.elances}</h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.enlaces_content}
                                    </p>
                                </div>
                                
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[4vh] ">
                                <div class="flex flex-col gap-y-[2vh] ">
                                    <h1 className="text-[3vh] leading-none">{dict.legales.control}</h1>
                                    <p className="text-[1.51vh]">
                                        {dict.legales.control_content}
                                    </p>
                                </div>
                                <div class="flex flex-col gap-y-[2vh]">
                                    <h1 className="text-[3vh] leading-none">
                                    {dict.legales.derechos}
                                    </h1>
                                    <p className="text-[1.51vh]">
                                    {dict.legales.derechos_content}
                                    </p>
                                </div>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                                <h1 className="text-[3vh] leading-none">{dict.legales.uso}</h1>
                                <p className="text-[1.51vh]">
                                {dict.legales.uso_content}
                                </p>
                            </div>
                            <div class="w-[70vh] flex flex-col gap-y-[2vh] ">
                                <h1 className="text-[3vh] leading-none">{dict.legales.cesion}S</h1>
                                <p className="text-[1.51vh]">
                                {dict.legales.cesion_content}
                                </p>
                            </div>

                            <div className="absolute left-[110vh] bottom-[10vh] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[-10.5deg] w-[22.80vh] h-[4.53vh] relative">
                                        <Image 
                                            src="/sticker-temple-amarrillo.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            
                            <div className="absolute left-[100vh] bottom-[10vh] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[-10.5deg] w-[22.80vh] h-[4.53vh] relative">
                                        <Image 
                                            src="/sticker-temple-rosa.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>

                            <div className="absolute left-[152vh] top-[5vh] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[9.69vh] h-[9.69vh] relative">
                                        <Image 
                                            src="/sticker-rosa-tempple.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>

                            <div className="absolute  right-[130vh] top-[66vh]  z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[17deg] w-[9.69vh] h-[9.69vh] relative">
                                        <Image 
                                            src="/sticker-rosa-tempple.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>

                            <div className="absolute right-[105vh] top-[56vh]  z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                                        <Image 
                                            src="/sticker-temple-verde.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            <div className="absolute right-[105vh] top-[58vh] z-10">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className="rotate-[9deg] w-[25.07vh] h-[5.09vh] relative">
                                        <Image 
                                            src="/sticker-temple-amarrillo.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                            <div className="absolute left-[62vh] bottom-[4vh] mb-4 mr-4 z-30">
                                <Draggable initialPosition={{ x: 0, y: 0 }}>
                                    <div className=" -rotate-[5deg] w-[25.07vh] h-[5.09vh] relative">
                                        <Image 
                                            src="/sticker-temple-rosa.png"
                                            alt="Temple Beer"
                                            fill 
                                        />
                                    </div>
                                </Draggable>
                            </div>
                        </div>
                    </ScrollHorizontal>
                </div>
                <div className="md:hidden page__wrapper__legales__mobile flex flex-col px-[5.12vw] pt-[18.15vw] overflow-hidden">
                    
                    <div className="flex flex-col gap-y-[4.5vh]">
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">POLÍTICAS DE PRIVACIDAD</h1>
                                <p className="text-[3vw]">
                                TEMPLE está comprometido con la seguridad de los datos de sus
                                usuarios. Al momento de solicitarle completar los campos de
                                información personal con la cual usted pueda ser identificado,
                                lo hacemos asegurando que sólo se empleará de acuerdo con los
                                términos de este documento. Sin embargo esta Política de
                                Privacidad puede cambiar con el tiempo o ser actualizada por
                                lo que le recomendamos y enfatizamos revisar continuamente
                                esta página para asegurarse que está de acuerdo con dichos
                                cambios.
                                </p>
                            </div>

                    
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">INFORMACIÓN DEL USUARIO</h1>
                                <p className="text-[3vw]">
                                Nuestro sitio web podrá recoger información personal, por
                                ejemplo: nombre completo, DNI, dirección postal y/o cualquier
                                otra información de contacto, como su dirección de correo
                                electrónico e información demográfica. Asimismo, cuando sea
                                necesario podrá ser requerida información específica para
                                procesar algún pedido o realizar una entrega o facturación.
                                </p>
                            </div>

                
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">USO DE LA INFORMACIÓN DEL USUARIO</h1>
                                <p className="text-[3vw]">
                                Nuestro sitio web emplea dicha información del usuario con el
                                fin de proporcionar el mejor servicio posible.
                                Particularmente, para mantener un registro de usuarios y así
                                mejorar nuestros productos y servicios. Es posible que sean
                                enviados correos electrónicos periódicamente a través de
                                nuestro sitio con noticias de la marca, nuevos productos,
                                ofertas especiales y otra información publicitaria que
                                consideremos relevante para usted o que pueda brindar algún
                                beneficio. Estos correos electrónicos serán enviados a la
                                dirección que usted proporcione y podrán ser cancelados en
                                cualquier momento. TEMPLE GROUP S.A.S. está altamente
                                comprometido para mantener su información segura.
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">COOKIES</h1>
                                <p className="text-[3vw]">
                                Una Cookie es un archivo pequeño que envía un servidor web al
                                disco duro del usuario que se encuentra navegando con
                                información sobre sus preferencias y pautas de navegación. Al
                                aceptar las cookies, el archivo se crea y sirve entonces para
                                tener información respecto al tráfico web y también facilitar
                                las futuras visitas a la misma web donde pueden reconocer al
                                usuario y brindarle un servicio más personalizado. En nuestro
                                caso, nuestro sitio emplea las cookies para poder identificar
                                las páginas visitadas y con la frecuencia con la que se las
                                navega. La información es empleada únicamente para análisis
                                estadísticos, luego se elimina de forma permanente. De hecho,
                                un usuario puede eliminar las cookies en el momento en el que
                                desee. Es importante destacar que las cookies ayudan a
                                proporcionar un mejor servicio del sitio, no dan acceso a
                                información del ordenador que se esté utilizando ni del
                                usuario en cuestión. Si quisiera, podría cambiar la
                                configuración de su ordenador para declinar las cookies, pero
                                es posible que si se declinan no se puedan utilizar algunos de
                                nuestros servicios.
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">ENLACES A TERCEROS</h1>
                                <p className="text-[3vw]">
                                Este sitio web puede contener enlaces a otros sitios que
                                podrían ser de su interés. Una vez que usted haga click en
                                estos enlaces y abandone nuestra página, ya no tenemos control
                                sobre el sitio al que es redirigido y por lo tanto no somos
                                responsables de los términos de privacidad ni de la protección
                                de sus datos en esos otros sitios. Dichos sitios están sujetos
                                a sus propias políticas de privacidad, por lo cual es
                                recomendable que las consulte para confirmar que usted está de
                                acuerdo con estas.
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">CONTROL DE SU INFORMACIÓN PERSONAL</h1>
                                <p className="text-[3vw]">
                                En cualquier momento, usted puede restringir la recopilación o
                                el uso de la información personal que es proporcionada a
                                nuestro sitio web. En caso de que esté recibiendo nuestros
                                newsletters o publicidad, puede cancelarlo en cualquier
                                momento. TEMPLE GROUP S.A.S. no venderá, ni cederá, ni
                                distribuirá la información personal que es recopilada sin su
                                consentimiento, salvo que sea requerido por un juez competente
                                y mediante una orden judicial a tal fin. Asimismo, nos
                                reservamos el derecho de cambiar los términos de la presente
                                Política de Privacidad en cualquier momento.
                                </p>
                            </div>

                
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">
                                DERECHOS DE ACCESO, CANCELACIÓN Y RECTIFICACIÓN DE LOS DATOS
                                PERSONALES
                                </h1>
                                <p className="text-[3vw]">
                                El Sitio Web es responsable de la base de datos a la que se
                                incorporarán los Datos Personales que se recolectan de los
                                Usuarios. Dicha base, se encuentra debidamente registrada,
                                conforme con la legislación vigente, ante el Registro Nacional
                                de Bases de Datos, dentro del marco de la Dirección Nacional
                                de Protección de Datos Personales. La dirección web de dicho
                                organismo es
                                https://www.argentina.gob.ar/aaip/datospersonales. Los
                                Usuarios podrán ejercitar los derechos de acceder, cancelar y
                                actualizar sus Datos Personales, incluyendo su dirección de
                                e-mail, como así también a oponerse al tratamiento de la misma
                                y a ser informados de las cesiones llevadas a cabo, todo ello
                                de conformidad a lo dispuesto en la normativa aplicable.
                                Conforme se establece en el artículo 14, inciso 3 de la Ley Nº
                                25.326, el titular de los datos personales, previa
                                acreditación de su identidad, tiene la facultad de ejercer el
                                derecho de acceso a los mismos, dentro de los 10 (diez) días
                                corridos desde la acreditación de su identidad, en forma
                                gratuita a intervalos no inferiores a seis meses, salvo que se
                                acredite un interés legítimo al efecto. Para la rectificación
                                y supresión de los Datos Personales, el titular de los mismos
                                podrá ejercer tales derechos dentro de los 5 (cinco) días
                                hábiles de acreditada su identidad.
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">USO QUE HACEMOS DE LA INFORMACIÓN</h1>
                                <p className="text-[3vw]">
                                Para suministrar un excelente servicio y para que los Usuarios
                                puedan realizar operaciones en forma ágil y segura, TEMPLE
                                recolecta y trata los Datos Personales de los Usuarios con las
                                siguientes finalidades:
                                </p>

                                <ul className="text-[3vw]">
                                <li>
                                    Desarrollar estudios internos sobre los intereses,
                                    comportamientos y demografía de los Usuarios, para
                                    comprender mejor sus necesidades e intereses y ofrecer
                                    mejores servicios o proveerles información relacionada.
                                </li>
                                <li>
                                    Mejorar nuestras iniciativas comerciales y promocionales y
                                    analizar las páginas visitadas, las búsquedas realizadas por
                                    los Usuarios, para mejorar nuestra oferta de artículos,
                                    personalizar contenidos, su presentación y servicios.
                                </li>
                                <li>
                                    Enviar información o mensajes por e-mail sobre nuevos
                                    productos, mostrar publicidad o promociones, banners de
                                    interés para nuestros Usuarios, noticias sobre TEMPLE, entre
                                    otros.
                                </li>
                                </ul>

                                <p className="text-[3vw]">
                                En caso que los Usuarios no deseen ser contactados con fines
                                promocionales o publicitarios, podrán manifestarlo
                                escribiéndonos un correo a franquicias@temple.com.ar quien
                                procederá a interrumpir este tipo de comunicaciones en el
                                menor tiempo posible.
                                </p>
                            </div>

                            
                            <div class="w-[90vw] flex flex-col gap-y-[1vh]">
                                <h1 className="text-[4vw]">CESIÓN Y TRANSFERENCIA DE DATOS PERSONALES A TERCEROS</h1>
                                <p className="text-[3vw]">
                                A tenor de lo prescripto por los Arts. 11, 12 y 25 de la Ley
                                25.326, el Usuario entiende, acepta y consiente expresamente
                                que el Sitio Web podría ceder y/o transferir – ya sea total o
                                parcialmente – sus Datos Personales, a otras compañías y
                                sociedades controladas, controlantes, vinculadas y/o terceros
                                no relacionados o vinculados y/o a los proveedores de
                                servicios o las empresas de «outsourcing» que contribuyan a
                                mejorar o facilitar las operaciones a través de TEMPLE, como
                                (sin limitarse) a servicios de transporte, medios de pago,
                                seguros o intermediarios en la gestión de pagos, call centers
                                o programas de fidelidad, entre otros, ya sea domiciliados en
                                la República Argentina o en el extranjero para el cumplimiento
                                de las finalidades establecidas en los Términos y Condiciones
                                y/o en la presente Política de Privacidad. En tal sentido, el
                                Sitio Web informa a los Usuarios que todo tratamiento de sus
                                Datos Personales se llevará a cabo sin exceder las finalidades
                                estipuladas en la presente Políticas de Privacidad y de
                                conformidad con la Normativa de Protección de Datos
                                Personales. TEMPLE velará porque se cumplan ciertos
                                estándares, mediante la firma de acuerdos o convenios cuyo
                                objeto sea la privacidad de los datos personales de nuestros
                                Usuarios.
                                </p>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    )
}