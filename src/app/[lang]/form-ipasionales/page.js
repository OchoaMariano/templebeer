"use client";

import Logo from "../../../../public/form-ipasionales/logo.png";
import Frase from "../../../../public/form-ipasionales/frase.png";
import Listo from "../../../../public/form-ipasionales/listo.png";
import Participa from "../../../../public/form-ipasionales/participa.png";
import Ipasionales from "../../../../public/form-ipasionales/ipasionales.png";
import FraseForm from "../../../../public/form-ipasionales/frase-form.png";
import BgDesk from "../../../../public/form-ipasionales/bg2.png";
import BgMob from "../../../../public/form-ipasionales/bg2-mob.png";
import Close from "../../../../public/form-ipasionales/close.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import {
  Knockout54UltraBold,
  Knockout34,
  Knockout54,
  Marker,
  GothamBook,
} from "../layout";
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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileError, setFileError] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setFormData((prevData) => ({
        ...prevData,
        prueba_grafica: file,
      }));
      setFileError("");
    } else {
      setFileError("El archivo debe ser menor a 2MB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

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

      // Enviar email de notificación
      const emailSubject = "Gracias por participar en Temple Beer";
      const emailBody = `
        <h1>¡Gracias por participar!</h1>
        <p>Hemos recibido tu formulario correctamente.</p>
        <p>Pronto nos pondremos en contacto contigo.</p>
      `;
      const emailPreview = "Tu participación en Temple Beer ha sido registrada";

      const emailSent = await sendEmail(
        formData.email, // Asumiendo que el campo 'instagram' contiene el email del usuario
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
    } catch (error) {
      console.error("Error:", error);
      setError(error.message || "Ocurrió un error al enviar el formulario");
    }
  };

  // Renderizado del formulario
  if (isSubmitted) {
    return (
      <>
        <div className="absolute w-full h-screen z-50 transition-all ease-in-out duration-300">
          <div className="w-full h-full relative hidden lg:block">
            <Image
              src={BgDesk}
              className="w-full h-full object-cover object-center"
            />
            <Link href="/">
              <Image src={Close} className="w-10 absolute top-10 right-10" />
            </Link>
          </div>
          <div className="lg:hidden bg-[#009995] h-full w-full">
            <div className="w-full h-full relative ">
              <Image src={BgMob} className="w-full h-full object-contain" />
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
                    <span className="font-semibold">01.</span> Completa tus
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
                  Abrite una birra y espera a que anunciemos a los finalistas.
                  Las votaciones van a ser en nuestro
                  <span className="font-medium"> Instagram</span> y va a ser
                  decisión popular.
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
                className="px-1 space-y-8 lg:space-y-10"
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
                      className="w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    ></input>
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
                      className="w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    ></input>
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
                        Sabor a lúpulo (lupumaniaco de la cuna al cajon)
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
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <label className="font-semibold">
                    6. ¿Tenes alguna prueba fotográfica de que sos un IPAsional?
                  </label>
                  <div className="pl-5">
                    <input
                      type="file"
                      name="prueba_grafica"
                      accept="image/*"
                      onChange={handleFileChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-4 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 text-[#ADADAD]"
                    />
                    {formData.prueba_grafica && (
                      <p
                        className={`mt-2 text-sm text-gray-500 ${GothamBook.className}`}
                      >
                        Archivo seleccionado: {formData.prueba_grafica.name}
                      </p>
                    )}
                    {fileError && (
                      <p
                        className={`mt-2 text-sm text-red-500 ${GothamBook.className}`}
                      >
                        {fileError}
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
                      className="w-full px-2 py-1.5 border rounded-xl border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    />
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
                  </div>
                </div>

                <div className="py-2">
                  <Image src={FraseForm} className="w-44 mx-auto" />
                </div>

                <div className="flex justify-center items-center">
                  {error && <div className="text-red-500 mt-4">{error}</div>}
                  <button
                    type="submit"
                    className="bg-[#FCDC00] text-black px-4 py-2 text-[17px] font-semibold hover:bg-[#ffe74c] transition-all ease-in-out duration-300 uppercase"
                  >
                    Enviar!
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
