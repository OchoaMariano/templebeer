"use client";

import Logo from "../../../../public/form-ipasionales/logo.png";
import Frase_v2 from "../../../../public/form-ipasionales/frase_v2.png";
import Ipasionales from "../../../../public/form-ipasionales/ipasionales.png";
import FraseForm from "../../../../public/form-ipasionales/frase-form.png";
import BgDesk from "../../../../public/form-ipasionales/bg2.png";
import BgMob from "../../../../public/form-ipasionales/bg2-mob.png";
import Close from "../../../../public/form-ipasionales/close.png";
import Credencial1 from "../../../../public/form-ipasionales/credencial-1.png";
import Credencial2 from "../../../../public/form-ipasionales/credencial-2.png";
import Credencial3 from "../../../../public/form-ipasionales/credencial-3.png";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GothamBook } from "../layout";

export default function Page() {
  const [formData, setFormData] = useState({
    nombre: "",
    nacimiento: "",
    dni: "",
    email: "",
    telefono: "",
    localidad: "",
    favorito: "",
    birra: "",
    porque_amas_wolf_ipa: "",
    comentario: "",
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

    // Nacimiento (Fecha de nacimiento)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!data.nacimiento.trim()) {
      errors.nacimiento = "La fecha de nacimiento es requerida";
    } else if (!dateRegex.test(data.nacimiento)) {
      errors.nacimiento =
        "Por favor, ingresá una fecha válida en formato YYYY-MM-DD";
    } else {
      const birthDate = new Date(data.nacimiento);
      if (isNaN(birthDate.getTime())) {
        errors.nacimiento = "La fecha ingresada no es válida";
      }
    }

    // DNI: Solo se requiere que tenga al menos 7 dígitos numéricos
    if (!data.dni.trim()) {
      errors.dni = "El número de DNI es requerido";
    } else if (!/^\d{7,}$/.test(data.dni)) {
      errors.dni = "Por favor, ingresá tu número de dni";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Por favor, ingresá un email válido";
    }

    // Teléfono
    const phoneRegex = /^\d{10}$/;
    if (!data.telefono.trim()) {
      errors.telefono = "El número de celular es requerido";
    } else if (!phoneRegex.test(data.telefono)) {
      errors.telefono =
        "Por favor, ingresá un número de celular válido de 10 dígitos";
    }

    // Localidad / Barrio
    if (!data.localidad.trim()) {
      errors.localidad = "La localidad / barrio es requerido";
    }

    // Temple favorito
    if (!data.favorito.trim()) {
      errors.favorito = "El dato de tu temple favorito es requerido";
    }

    // Birra favorita
    if (!data.birra.trim()) {
      errors.birra = "El dato de tu birra favorita es requerido";
    }

    // Razón por la que amas Wolf IPA
    if (!data.porque_amas_wolf_ipa) {
      errors.porque_amas_wolf_ipa = "Por favor, seleccioná una opción";
    }

    // Comentario adicional
    if (!data.comentario.trim()) {
      errors.comentario = "Tu comentario es requerido";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setError("Por favor, corrija los errores en el formulario.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Error en el servidor");
      }

      setFormData({
        nombre: "",
        nacimiento: "",
        dni: "",
        email: "",
        telefono: "",
        localidad: "",
        favorito: "",
        birra: "",
        porque_amas_wolf_ipa: "",
        comentario: "",
        bases: false,
        mayor_18: false,
      });

      setIsSubmitted(true);
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
          <div className="max-w-[800px] mx-auto">
            <div className="bg-black py-14 space-y-8 px-5  lg:px-12 my-10 lg:my-0">
              <div>
                <Image src={Logo} className="w-16 mx-auto" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <Image src={Frase_v2} className="w-96" />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-center font-normal text-[12.5px] leading-[13.5px] px-8 lg:px-20 text-white">
                  Completá tus datos y por ser parte de nuestro Club Social te
                  regalamos un montón de beneficios para disfrutar de la mejor
                  IPA, la WOLF IPA.
                </p>
              </div>
              <div className="relative">
                <div className="items-center justify-center py-4 hidden">
                  <Link
                    href="#form"
                    className="bg-[#FCDC00] text-black px-4 py-2 text-[17px] font-semibold hover:bg-[#ffe74c] transition-all ease-in-out duration-300 uppercase"
                  >
                    SCROLLEA Y PARTICIPÁ
                  </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:pb-24 gap-5">
                  <Image src={Credencial1} className="w-52 mx-auto lg:w-full" />
                  <Image src={Credencial2} className="w-52 mx-auto lg:w-full" />
                  <Image src={Credencial3} className="w-52 mx-auto lg:w-full" />
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
                      placeholder="Nombre y apellido"
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
                      2. Fecha de nacimiento
                    </label>
                  </div>
                  <div className="pl-5">
                    <input
                      name="nacimiento"
                      type="date"
                      placeholder="Fecha de nacimiento"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.nacimiento ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.nacimiento && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.nacimiento}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">3. Número de Dni</label>
                  <div className="pl-5">
                    <input
                      name="dni"
                      type="number"
                      placeholder="Dni"
                      onChange={handleChange}
                      required
                      className="w-full px-2 py-2 border rounded-xl border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 "
                    />
                    {formErrors.dni && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.dni}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      4. Email de contacto
                    </label>
                    <span className={`font-light pl-4 ${GothamBook.className}`}>
                      En este correo vas a recibir la credencial.
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

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">5. Tu número de celu</label>
                  <div className="pl-5">
                    <input
                      type="number"
                      name="telefono"
                      placeholder="Celular"
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

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      6. Localidad / Barrio:
                    </label>
                  </div>
                  <div className="pl-5">
                    <input
                      name="localidad"
                      placeholder="Localidad / Barrio"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.localidad ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.localidad && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.localidad}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      7. Temple favorito:
                    </label>
                  </div>
                  <div className="pl-5">
                    <input
                      name="favorito"
                      placeholder="Temple favorito"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.favorito ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.favorito && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.favorito}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">8. Birra favorita:</label>
                  </div>
                  <div className="pl-5">
                    <input
                      name="birra"
                      placeholder="Birra favorita"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 ${
                        formErrors.birra ? "border-red-500" : ""
                      }`}
                    ></input>
                    {formErrors.birra && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.birra}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className={`font-bold`}>
                    9. Razón por la que más amás a la WOLF IPA
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

                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold">
                      10. ¡Déjanos un comentario!
                    </label>
                    <span className={`font-light pl-4 ${GothamBook.className}`}>
                      Te dejamos un espacio para que nos digas lo que quieras
                      porque somos copados y porque nos da TOC que sean 9
                      preguntas y no 10 😅
                    </span>
                  </div>
                  <div className="pl-5">
                    <textarea
                      name="comentario"
                      placeholder="Dejanos tu comentario"
                      onChange={handleChange}
                      required
                      className={`w-full px-2 border rounded-xl py-2 border-[#BEBEBE] placeholder:text-[#ADADAD] pl-5 h-24 resize-none ${
                        formErrors.comentario ? "border-red-500" : ""
                      }`}
                    ></textarea>
                    {formErrors.comentario && (
                      <p className="text-red-500 text-[0.9em] mt-1">
                        {formErrors.comentario}
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

                <div className="py-2 hidden">
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
              <p className="text-[10px] text-center text-black pt-10">
                Promoción sin obligación de compra. Consultar vigencia de las
                promociones en la web oficial, válido en el territorio de la
                República Argentina. Para más información y condiciones o
                limitaciones aplicables consulte en: https://templebeer.com/es.
                <br />
                <br />
                BEBER CON MODERACIÓN. PROHIBIDA SU VENTA A MENORES DE 18 AÑOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
