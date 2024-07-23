import { createClient } from "@supabase/supabase-js";
import { sendEmail } from "../../../utils/emailService"; // Asegúrate de que esta función esté disponible

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    console.log("Recibiendo solicitud");
    const formData = await request.json();
    console.log("Datos recibidos:", formData);

    // Subir imagen si existe
    let imageUrl = null;
    if (formData.prueba_grafica) {
      const { data, error: uploadError } = await supabase.storage
        .from("imagenes_registros")
        .upload(
          `${Date.now()}_${formData.prueba_grafica.name}`,
          formData.prueba_grafica
        );

      if (uploadError) throw uploadError;
      imageUrl = data.path;
    }

    // Insertar datos en Supabase
    const { data, error: insertError } = await supabase
      .from("registros")
      .insert([
        {
          ...formData,
          prueba_grafica: imageUrl,
        },
      ]);

    if (insertError) throw insertError;

    // Separar nombre y apellido
    const [nombre, ...apellidoArray] = formData.nombre.split(" ");
    const apellido = apellidoArray.join(" ");

    // Generar URL de credencial
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://templebeer.com/";
    const credentialImageUrl = `${baseUrl}/api/generate-credential?nombre=${encodeURIComponent(
      nombre
    )}&apellido=${encodeURIComponent(apellido)}`;

    // Generar cuerpo del email
    let emailBody = `<body width="100%" style="margin: 0; padding: 0 !important;">
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
              <div style="
                    display: inline-block;
                    margin: 0 -1px;
                    width: 100%;
                    min-width: 200px;
                    max-width: 340px;
                    vertical-align: middle;
                  " class="stack-column-center">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                  <tr>
                    <td style="
                          padding: 30px 10px;
                          font-family: arial, sans-serif;
                          font-size: 15px;
                          line-height: 21px;
                          color: #ffffff;
                          text-align: center;
                        " class="sm-py">
                      <img
                        src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo.png"
                        width="340" height="" alt="alt_text" border="0" style="
                            display: block;
                            margin: auto;
                            width: 100%;
                            max-width: 170px;
                            font-family: arial, sans-serif;
                            font-size: 15px;
                            margin-right: 30px;
                            color: #ffffff;
                          " class="g-img" />
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
                        Seguro escuchaste de grandes clubs como El Club de la
                        Pelea, The Breakfast Club, tu club favorito de
                        fútbol.<br /><br />
                        Pero el IPAsional Club Social es distinto: acá lo que
                        nos une es el amor indiscutido por la WOLF IPA y todos
                        aquellos que se autoperciban enamorados de nuestro
                        icónico líquido, son más que bienvenidos.<br /><br />
                        Como ceremonia inaugural de tu bautismo en este club
                        queremos darte tu propia credencial IPAsional
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
                        Ahora sí, flamante nuevo miembro de nuestro club, como
                        regalo especial queremos darte un montón de
                        promociones especiales, solo por ser vos.
                      </p>
                      <img src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/beneficios.png" alt="Credencial personalizada" style="width: 100%; max-width: 600px; height: auto; margin-bottom: 20px;">
                      <p style="margin: 0 0 30px; text-align: justify">
                        Usalos sin miedo, que la idea es disfrutar y tomarnos
                        unas WOLF brindando con amigos. Y quien te dice, que
                        van a llegarte nuevos beneficios próximamente 👀vamos
                        a estar compartiendo data por nuestro canal de
                        instagram exclusivo para IPASIONALES, no podés no
                        estar adentro.<br /><br />Mientras esperas para saber
                        quiénes serán los finalistas para convertirse en EL
                        MÁS IPASIONAL 2024, te sugerimos que nos stalkees en
                        nuestro Instagram y estés atenti, con birra en mano,
                        para enterarte de todo
                      </p>
                      <p style="margin: 0px 0px 10px 25px">
                        Nos estamos viendo donde nos encuentre una WOLF,
                      </p>
                      <img
                        src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-amigos.png"
                        width="340" height="" alt="alt_text" border="0" style="
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

                      <img
                        src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-club.png"
                        width="340" height="" alt="alt_text" border="0" style="
                            display: block;
                            margin: 0;
                            width: 100%;
                            max-width: 200px;
                            font-family: arial, sans-serif;
                            font-size: 15px;
                            color: #ffffff;
                          " class="g-img" />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding: 0 90px 0px 0px; background-color: white" class="sm-px">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="
                  font-family: arial, sans-serif;
                  font-size: 15px;
                  color: #3c3f44;
                ">
              <tr>
                <td width="20%" style="text-align: center">
                  <img
                    src="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/mailing/logo-vaso.png"
                    width="" height="" alt="alt_text" border="0" style="
                        display: block;
                        margin-top: 165px;
                        margin-left: -50px;
                        width: 100%;
                        max-width: 120px;
                      " />
                </td>
                <td width="80%" style="
                      font-family: arial, sans-serif;
                      font-size: 15px;
                      line-height: 21px;
                      color: #3c3f44;
                      text-align: left;

                      padding: 30px 0;
                    ">
                  <p style="
                        margin: 0;
                        text-align: center;
                        border: 1px solid #888888;
                        padding: 10px;
                        font-size: 10px;
                        color: #888888;
                        line-height: 12px;
                      ">
                    TE ESPERAMOS EN CASA CON UN 20% OFF // 20% de descuento en
                    Temple Bar. Tope de Reintegro: $4,500. No acumulable con
                    otras promociones o beneficios Ipasionales. Valido para
                    todos los Temple Bar de Republica Argentina desde el 22 de
                    Julio de 2024 al 31 de agosto de 2024. Deberá validar su
                    registro Ipasional junto a su DNI para acceder a la
                    promo.<br /><br />
                    HAPPY HOUR TODO EL DIA PARA IPASIONALES // Precio de pinta
                    de Wolf IPA para Ipasionales: $3,500. Solo aplicable a
                    Wolf IPA. No acumulable con otras promociones o beneficios
                    Ipasionales. Valido para todos los Temple Bar de Republica
                    Argentina desde el 22 de Julio de 2024 al 31 de agosto de
                    2024. Deberá validar su registro Ipasional junto a su DNI
                    para acceder a la promo.<br /><br />
                    BRINDIS CUMPLEAÑERO // Copón de 2 litros gratis para el
                    Cumpleañero Ipasional. A partir de 8 pintas consumidas en
                    la fecha, se entrega de regalo un copón de 2 litros gratis
                    al cumpleañero del día. No acumulable con otras
                    promociones o beneficios Ipasionales. Valido para todos
                    los Temple Bar de República Argentina desde el 22 de Julio
                    de 2024 al 31 de agosto de 2024. Deberá validar su
                    registro Ipasional junto a su DNI para acceder a la
                    promo.<br /><br />
                    CÓDIGO “IPASIONALES” CON 20% OFF EN TODA NUESTRA WEB<br /><br />
                    Promoción sin obligación de compra, organizada por
                    CERVECERÍA Y MALTERÍA QUILMES S.A.I.C.A.Y.G., Av. Del
                    Libertador 7206 piso 26°, CABA, CUIT N° 33-50835825-9.
                    Vigencia del 24 de julio al 31 de octubre de 2024 en el
                    territorio de la República Argentina. Para más información
                    y condiciones o limitaciones aplicables consulte en:
                    <a href="https://www.ipasionales.templebeer.com" target="_blank"
                      style="color: #888888 !important">https://www.ipasionales.templebeer.com</a>. BEBER CON
                    MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE
                    18 AÑOS
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
</body>`; // Reemplaza esto con tu plantilla de email

    // Enviar email
    const emailSubject = "¡Bienvenido al IPAsional Club Social!";
    const emailPreview =
      "Tu membresía al IPAsional Club Social ha sido confirmada";
    const emailSent = await sendEmail(
      formData.email,
      emailSubject,
      emailBody,
      emailPreview,
      "Temple Beer"
    );

    if (!emailSent) {
      console.error("Failed to send notification email");
    }

    return new Response(JSON.stringify({ success: true, emailSent }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error detallado:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
