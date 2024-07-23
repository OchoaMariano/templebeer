"use client";

import Logo from "../../../../public/form-ipasionales/logo.png";
import Frase from "../../../../public/form-ipasionales/frase.png";
import Listo from "../../../../public/form-ipasionales/listo.png";
import Ipasionales from "../../../../public/form-ipasionales/ipasionales.png";
import FraseForm from "../../../../public/form-ipasionales/frase-form.png";
import BgDesk from "../../../../public/form-ipasionales/bg2.png";
import BgMob from "../../../../public/form-ipasionales/bg2-mob.png";
import Close from "../../../../public/form-ipasionales/close.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { GothamBook } from "../layout";
import { sendEmail } from "@/utils/emailService";

const supabaseUrl = "https://vgmbsfkdcztdrgztmlxj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnbWJzZmtkY3p0ZHJnenRtbHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDQ1ODAsImV4cCI6MjAzNjk4MDU4MH0.NP0IFhSs44vnuXRoOiumF9HcBX4kynKwdBBtQiJa_9s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Page() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    porque_amas_wolf_ipa: "",
    que_harias_un_año_gratis: "",
    anecdota: "",
    prueba_grafica: null,
    compartir_respuesta: false,
    instagram: "",
    telefono: "",
    bases: false,
    mayor_18: false,
  });

  const validateForm = (data) => {
    const errors = {};

    // Nombre y Apellido
    if (!data.nombre.trim()) {
      errors.nombre = "El nombre y apellido son requeridos";
    } else {
      const words = data.nombre.trim().split(/\s+/);
      if (words.length < 2) {
        errors.nombre = "Por favor, ingresá tu nombre y tu apellido";
      }
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Por favor, ingresá un email válido";
    }

    // Razón por la que amas Wolf IPA
    if (!data.porque_amas_wolf_ipa) {
      errors.porque_amas_wolf_ipa = "Por favor, seleccioná una opción";
    }

    // Qué harías por un año de birra gratis
    if (!data.que_harias_un_año_gratis.trim()) {
      errors.que_harias_un_año_gratis = "Este campo es requerido";
    } else if (data.que_harias_un_año_gratis.trim().length < 10) {
      errors.que_harias_un_año_gratis =
        "Por favor, danos más detalles (minimo 10 caracteres)";
    }

    // Anécdota
    if (!data.anecdota.trim()) {
      errors.anecdota = "Este campo es requerido";
    } else if (data.anecdota.trim().length < 10) {
      errors.anecdota = "Por favor, danos más detalles (minimo 10 caracteres)";
    }

    // Prueba gráfica
    if (!data.prueba_grafica) {
      errors.prueba_grafica = "Por favor, suba una imagen";
    } else if (data.prueba_grafica.size > 2 * 1024 * 1024) {
      errors.prueba_grafica = "El archivo no puede superar los 2MB";
    }

    // Compartir respuesta
    if (data.compartir_respuesta === undefined) {
      errors.compartir_respuesta = "Por favor, seleccioná una opción";
    }

    // Instagram
    if (!data.instagram.trim()) {
      errors.instagram = "El @ de Instagram es requerido";
    } else if (!data.instagram.startsWith("@")) {
      errors.instagram = "El @ de Instagram debe comenzar con @";
    }

    // Teléfono
    const phoneRegex = /^\d{10}$/;
    if (!data.telefono.trim()) {
      errors.telefono = "El número de teléfono es requerido";
    } else if (!phoneRegex.test(data.telefono)) {
      errors.telefono =
        "Por favor, ingresá un número de celular válido de 10 dígitos";
    }

    // Bases y condiciones
    if (!data.bases) {
      errors.bases = "Tenés que aceptar las bases y condiciones";
    }

    // Mayor de 18 años
    if (!data.mayor_18) {
      errors.mayor_18 = "Tenés que confirmar que sos mayor de 18 años";
    }

    return errors;
  };

  const [formErrors, setFormErrors] = useState({});

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Validar el campo actual
    const errors = validateForm({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: errors[name] }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2MB limit
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          prueba_grafica: "El archivo no debe superar los 2MB",
        }));
        e.target.value = ""; // Limpiar el input
      } else {
        setFormData((prevData) => ({
          ...prevData,
          prueba_grafica: file,
        }));
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          prueba_grafica: "",
        }));
      }
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        prueba_grafica: "Por favor, subi una imagen",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar todos los campos
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setError("Por favor, corrija los errores en el formulario.");
      return;
    }
    setIsSubmitting(true);

    try {
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
      console.log(nombre, apellido);

      // Oculto en produccion
      // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const baseUrl = "https://templebeer.com/";
      const credentialImageUrl = `${baseUrl}/api/generate-credential?nombre=${encodeURIComponent(
        nombre
      )}&apellido=${encodeURIComponent(apellido)}`;

      console.log(credentialImageUrl);

      // Renderizar el template del email
      // const emailBody = render(
      //  <EmailTemplate nombre={nombre} apellido={apellido} />
      // );

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
</body>`;

      // Enviar email de notificación
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

      // Limpia el formulario
      setFormData({
        nombre: "",
        email: "",
        porque_amas_wolf_ipa: "",
        que_harias_un_año_gratis: "",
        anecdota: "",
        prueba_grafica: null,
        compartir_respuesta: false,
        instagram: "",
        telefono: "",
        bases: false,
        mayor_18: false,
      });

      // Resetea el input de archivo
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = "";

      console.log("Formulario enviado con éxito");
      setIsSubmitted(true);
      // Si el envío es exitoso:
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      setError(
        "Ocurrió un error al enviar el formulario. Por favor, intente de nuevo."
      );
    }
  };

  // Renderizado del formulario
  if (isSubmitted) {
    return (
      <>
        <div className="absolute w-full h-screen z-50 transition-all ease-in-out duration-300 bg-[#009997]">
          <div className="w-full h-full relative hidden lg:block">
            <Image
              src={BgDesk}
              layout="fill"
              objectFit="contain"
              className="w-full h-full"
            />
            <Link href="/">
              <Image src={Close} className="w-10 absolute top-10 right-10" />
            </Link>
          </div>
          <div className="lg:hidden bg-[#009995] h-full w-full">
            <div className="w-full h-full relative">
              <Image
                src={BgMob}
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
              <Link href="/">
                <Image src={Close} className="w-10 absolute top-5 right-5" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="relative overflow-y-scroll scroll-smooth">
      <div
        className={`${isSubmitted ? "z-0" : "z-40"}`}
        style={{
          backgroundImage: "url(/form-ipasionales/bg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "fixed",
        }}
      >
        <div className="w-full h-full overflow-y-scroll">
          <div className="max-w-[552px] mx-auto">
            <div className="bg-black py-14 space-y-8 px-5  lg:px-12 my-10 lg:my-0">
              <div>
                <Image src={Logo} className="w-16 mx-auto" />
              </div>
              <div className="space-y-4">
                <div>
                  <Image src={Frase} className="w-96" />
                </div>
                <div className="font-normal text-[14.5px] text-white">
                  <p>
                    <span className="font-semibold">01.</span> Completá tus
                    datos
                  </p>
                  <p>
                    <span className="font-semibold">02.</span> Contanos por qué
                    sos el más IPASIONAL de todos
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Image src={Listo} className="w-28 mx-auto" />
                </div>
                <p className="text-center font-normal text-[12.5px] leading-[13.5px] px-8 lg:px-20 text-white">
                  Abrite una birra y esperá a que anunciemos a los finalistas.
                  Las votaciones van a ser en nuestro
                  <span className="font-medium"> Instagram</span> y por decisión
                  popular.
                </p>
              </div>
              <div className="relative">
                <div className="flex items-center justify-center py-4">
                  <Link
                    href="#form"
                    className="bg-[#FCDC00] text-black px-4 py-2 text-[17px] font-semibold hover:bg-[#ffe74c] transition-all ease-in-out duration-300 uppercase"
                  >
                    SCROLLEA Y PARTICIPÁ
                  </Link>
                </div>
                <div className="static lg:absolute -right-8 -bottom-5 pt-6">
                  <Image src={Ipasionales} className="w-24 mx-auto" />
                </div>
              </div>
            </div>

            <div
              className="text-black bg-white py-20 lg:py-12 px-3 lg:px-12 my-10 lg:my-0"
              id="form"
            >
              <form
                onSubmit={handleSubmit}
                className={`px-1 space-y-8 lg:space-y-10 ${
                  isSubmitting ? "opacity-50" : ""
                }`}
              >
                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      1. Nombre y apellido:
                    </label>
                  </div>
                  <div className="pl-5">
                    <input
                      name="nombre"
                      placeholder="Nombre y apellido:"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.nombre ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.nombre && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.nombre}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      2. Un mail de contacto
                    </label>
                    <span className={`font-light pl-4 ${GothamBook.className}`}>
                      En este correo vas a recibir todas las novedades
                    </span>
                  </div>
                  <div className="pl-5">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.email && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className={`font-bold`}>
                    3. Razón por la que más amás a la WOLF IPA
                  </label>
                  <div className="flex flex-col font-normal gap-y-2 pl-5">
                    <label className="gap-x-2 flex items-center ">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Sabor"
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>
                        Aroma (huelo todo antes de probarlo, lo admito)
                      </span>
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Aroma"
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>
                        Amargor (lo único amargo que admito en mi vida)
                      </span>
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Diseño"
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>
                        Sabor a lúpulo (lupumaníaco de la cuna al cajón)
                      </span>
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Historia"
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>
                        Diseño (me gusta el arrrrte)
                      </span>
                    </label>
                  </div>
                  {formErrors.porque_amas_wolf_ipa && (
                    <p className="text-red-500 text-[0.9em] mt-1">
                      {formErrors.porque_amas_wolf_ipa}
                    </p>
                  )}
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      4. ¿Qué harias por un año de birra gratis?
                    </label>
                    <span className={`font-light pl-4 ${GothamBook.className}`}>
                      Es tu momento de lucirte y contarnos con lujo de detalles
                    </span>
                  </div>
                  <div className="pl-5">
                    <textarea
                      name="que_harias_un_año_gratis"
                      placeholder="Contanos!"
                      onChange={handleChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-16 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    ></textarea>
                  </div>
                  {formErrors.que_harias_un_año_gratis && (
                    <p className="text-red-500 text-[0.9em] mt-1">
                      {formErrors.que_harias_un_año_gratis}
                    </p>
                  )}
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <label className="font-semibold">
                    5. ¿Tenés alguna anécdota en TEMPLE o con la WOLF IPA?
                  </label>
                  <div className="pl-5">
                    <textarea
                      name="anecdota"
                      placeholder="Contanos!"
                      onChange={handleChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-16 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    ></textarea>
                  </div>
                  {formErrors.anecdota && (
                    <p className="text-red-500 text-[0.9em] mt-1">
                      {formErrors.anecdota}
                    </p>
                  )}
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className="font-semibold">
                    6. ¿Tenés alguna prueba fotográfica de que sos un IPAsional?
                  </label>
                  <div className="pl-5">
                    <input
                      type="file"
                      name="prueba_grafica"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className={`w-full px-2 border rounded-xl pt-4 pb-4 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 text-[#ADADAD] ${
                        formErrors.prueba_grafica ? "border-red-500" : ""
                      }`}
                    />
                    {formData.prueba_grafica && !formErrors.prueba_grafica && (
                      <p
                        className={`mt-2 text-sm text-gray-500 ${GothamBook.className}`}
                      >
                        Archivo seleccionado: {formData.prueba_grafica.name}
                      </p>
                    )}
                    {formErrors.prueba_grafica && (
                      <p
                        className={`mt-2 text-sm text-red-500 ${GothamBook.className}`}
                      >
                        {formErrors.prueba_grafica}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className="font-semibold text-[12.45px]">
                    7. ¿Te gustaria que compartamos tu respuesta en nuestras
                    redes?
                  </label>
                  <div className="flex flex-col font-normal gap-y-2 pl-5">
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="compartir_respuesta"
                        value={true}
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>Mandale</span>
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="compartir_respuesta"
                        value={false}
                        onChange={handleChange}
                        required
                      />
                      <span className={`${GothamBook.className}`}>
                        Prefiero mantenerme en el anonimato, como Batman
                      </span>
                    </label>
                    {formErrors.compartir_respuesta && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.compartir_respuesta}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">8. @ de tu Instagram</label>
                  <div className="pl-5">
                    <input
                      type="text"
                      placeholder="instagram.com//@"
                      name="instagram"
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 border rounded-xl border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    />
                    {formErrors.instagram && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.instagram}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">9. Tu número de celu</label>
                  <div className="pl-5">
                    <input
                      type="number"
                      name="telefono"
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 border rounded-xl border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    />
                    {formErrors.telefono && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.telefono}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] flex justify-center items-center text-[#ADADAD]">
                    <label className="flex gap-x-2 justify-center items-center">
                      <input
                        type="checkbox"
                        name="bases"
                        onChange={handleChange}
                        required
                      />
                      <span>
                        Acepto las{" "}
                        <a
                          href="https://vgmbsfkdcztdrgztmlxj.supabase.co/storage/v1/object/public/imagenes_registros/docs/BASES%20Y%20CONDICIONES%20CONCURSO.pdf"
                          target="_blank"
                          className="underline text-black"
                        >
                          bases y condiciones
                        </a>
                      </span>
                      {formErrors.bases && (
                        <p className="text-red-500 text-[0.9em] mt-1">
                          {formErrors.bases}
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="text-[10px] flex justify-center items-center text-[#ADADAD]">
                    <label className="flex gap-x-2 justify-center items-center">
                      <input
                        type="checkbox"
                        name="mayor_18"
                        onChange={handleChange}
                        required
                      />
                      <span>Soy mayor de 18 años</span>
                    </label>
                    {formErrors.mayor_18 && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.mayor_18}
                      </p>
                    )}
                  </div>
                </div>

                <div className="py-2">
                  <Image src={FraseForm} className="w-44 mx-auto" />
                </div>

                <div className="flex justify-center items-center">
                  {error && <div className="text-red-500 mt-4">{error}</div>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#FCDC00] text-black px-4 py-2 text-[17px] font-semibold transition-all ease-in-out duration-300 uppercase
                      ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-[#ffe74c]"
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">ENVIANDO...</span>
                        <span className="animate-spin inline-block">
                          &#8987;
                        </span>
                      </>
                    ) : (
                      "¡ENVIAR!"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
