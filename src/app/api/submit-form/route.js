import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/emailService";

const supabaseUrl = "https://vgmbsfkdcztdrgztmlxj.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbWJzZmtkY3p0ZHJnenRtbHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDQ1ODAsImV4cCI6MjAzNjk4MDU4MH0.NP0IFhSs44vnuXRoOiumF9HcBX4kynKwdBBtQiJa_9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const formData = await req.json();

    // Validación de datos esenciales
    if (!formData.email || !formData.nombre || !formData.dni || !formData.birra) {
      throw new Error("Faltan datos obligatorios.");
    }

    // Insertar datos en Supabase
    const { data, error: insertError } = await supabase
      .from("ipasionales_2025")
      .insert([
        {
          nombre: formData.nombre,
          nacimiento: formData.nacimiento,
          dni: formData.dni,
          email: formData.email,
          telefono: formData.telefono,
          localidad: formData.localidad,
          favorito: formData.favorito,
          birra: formData.birra,
          porque_amas_wolf_ipa: formData.porque_amas_wolf_ipa,
          comentario: formData.comentario,
          bases: true, // Obligatorio aceptar bases
          mayor_18: true, // Obligatorio ser mayor de 18
        },
      ]);

    if (insertError) throw insertError;

    // Enviar email de notificación
    const emailSubject = "¡Bienvenido al IPAsional Club Social!";
    const emailPreview = "Tu membresía al IPAsional Club Social ha sido confirmada";

    // Separar nombre y apellido
    const [nombre, ...apellidoArray] = formData.nombre.split(" ");
    const apellido = apellidoArray.join(" ");

    const credentialImageUrl = `https://templebeer.com/api/generate-credential?nombre=${encodeURIComponent(
      nombre
    )}&apellido=${encodeURIComponent(apellido)}`;

    let emailBody = ` 
      <body width="100%" style="margin: 0; padding: 0 !important;">
        <center style="
              width: 100%;
              background-image: url('https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/bg.jpeg');
              background-position: center;
              background-size: cover;
              padding: 30px 0px;
            ">
          <div class="email-container" style="max-width: 680px; margin: 0 auto">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width: 680px; width: 100%">
              <tr>
                <td style="background-color: #fff" class="btr">
                  <div dir="ltr" style="
                        display: table;
                        width: 100%;
                        margin: 0 auto;
                        text-align: left;
                        font-size: 0;
                      ">
                    <div style="
                          display: inline-block;
                          margin: 0 -1px;
                          width: 100%;
                          min-width: 200px;
                          max-width: 340px;
                          vertical-align: middle;
                        " class="stack-column">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="
                                padding: 60px 30px 15px;
                                text-align: left;
                                font-family: arial, sans-serif;
                                color: #ffffff;
                              " class="sm-px">
                            <h1 style="
                                  margin: 0 0 15px;
                                  font-weight: 600;
                                  font-size: 10px;
                                  line-height: 10px;
                                  color: #606060;
                                ">
                            </h1>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0 30px 20px" class="sm-px">
                            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation">
                              <tr>
                                <td class="s-btn s-btn__white">
                                  <img
                                    src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-frase.png"
                                    width="" height="" alt="alt_text" border="0" style="
                                        display: block;
                                        margin: auto;
                                        width: 100%;
                                        font-family: arial, sans-serif;
                                        font-size: 15px;
                                        color: #ffffff;
                                      " class="g-img" />
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="background-color: white; padding-right: 50px" class="sm-p">
                  <div dir="ltr" style="
                        display: table;
                        width: 100%;
                        margin: 0 auto;
                        text-align: right;
                        font-size: 0;
                      ">
                    <div style="
                          display: inline-block;
                          margin: 0 -1px;
                          width: 100%;
                          max-width: 510px;
                          min-width: 220px;
                          vertical-align: middle;
                        " class="stack-column">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td dir="ltr" style="
                                padding: 10px 0;
                                font-family: arial, sans-serif;
                                font-size: 20px;
                                line-height: 21px;
                                color: black;
                                text-align: left;
                                position: relative;
                              ">
                            <p style="margin: 0 0 30px; text-align: justify">
                              Seguro escuchaste de grandes clubs como El Club de la Pelea, The Breakfast Club, tu club favorito de fútbol.<br /><br />
                              Pero el IPAsional Club Social es distinto: acá lo que nos une es el amor indiscutido por la WOLF IPA y todos aquellos que se autoperciban enamorados de nuestro icónico líquido, son más que bienvenidos.<br /><br />
                              Como ceremonia inaugural de tu bautismo en este club queremos darte tu propia credencial IPAsional
                              (imaginate que hacemos un gesto pomposo con la mano).
                            </p>
                            <img src="${credentialImageUrl}" alt="Credencial personalizada" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 10px;">
                            <a href="${credentialImageUrl}" download="credencial.png" style="margin: 0 0 30px;">
                              <button style="
                                    border: none;
                                    color: black;
                                    padding: 15px 0px;
                                    text-align: center;
                                    text-decoration: underline;
                                    display: inline-block;
                                    font-size: 16px;
                                    margin: 4px 2px;
                                    cursor: pointer;
                                    background-color: #fff;
                                  ">Descargar Credencial </button>
                            </a>
                            <p style="margin: 0 0 30px; text-align: justify">
                              Ahora sí, flamante nuevo miembro de nuestro club, como regalo especial queremos darte un montón de promociones especiales, solo por ser vos.
                            </p>
                            <img src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/beneficios.png" alt="Beneficios" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px;">
                            <p style="margin: 0 0 30px; text-align: justify; font-size: 10px;">
                              Promoción sin obligación de compra. Consultar vigencia de las promociones en la web oficial, válido en el territorio de la República Argentina. Para más información y condiciones o limitaciones aplicables consulte en: <a href="https://templebeer.com/es">https://templebeer.com/es</a>. BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS
                            </p>
                            <p style="margin: 0 0 30px; text-align: justify">
                              Usalos sin miedo, que la idea es disfrutar y tomarnos unas WOLF brindando con amigos. Y quien te dice, que van a llegarte nuevos beneficios próximamente 👀 vamos a estar compartiendo data por nuestro canal de instagram exclusivo para IPASIONALES, no podés no estar adentro.<br /><br />
                              
                            </p>
                            <p style="margin: 0px 0px 10px 25px">
                              Nos estamos viendo donde nos encuentre una WOLF,
                            </p>
                            <img
                              src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-amigos.png"
                              width="340" height="" alt="Logo Amigos" border="0" style="
                                  display: block;
                                  margin-left: auto;
                                  margin-right: 0;
                                  width: 100%;
                                  max-width: 200px;
                                  font-family: arial, sans-serif;
                                  font-size: 15px;
                                  color: #ffffff;
                                  margin-bottom: 35px;
                                " class="g-img" />
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </center>
      </body>

    `;

    const emailSent = await sendEmail(
      formData.email,
      emailSubject,
      emailBody,
      emailPreview,
      "Temple Beer"
    );

    if (!emailSent) {
      throw new Error("No se pudo enviar el email de confirmación.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

