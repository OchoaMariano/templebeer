"use client";

import { useState } from "react";
import { GothamBook } from "../layout";
import Image from "next/image";
import FraseForm from "../../../../public/form-ipasionales/frase-form.png";

export default function Page() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    porque_amas_wolf_ipa: "",
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
        email: "",
        porque_amas_wolf_ipa: "",
        telefono: "",
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
    <div className="bg-cover bg-center pt-4 pb-8 px-5" style={{ backgroundImage: "url(/ipassionales/bg-hof-ipassionales.jpg)" }}>
      <div className="text-black bg-white py-20 lg:py-12 px-3 lg:px-12 my-10 lg:my-0 max-w-[1000px] mx-auto" id="form">
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
      <div className="flex flex-col items-start justify-center max-w-[1000px] mx-auto py-4">
        <h1 className="text-3xl font-bold text-white">Hall of fame</h1>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 max-w-[1000px] mx-auto">
        <div className="bg-[#231f21] p-10">
          <Image 
            src="/ipassionales/reina-2022.png" 
            alt="Cande" 
            width={500} 
            height={500} 
            className="w-full h-auto px-10 py-2"
          />
          <h2 className="text-xl font-bold text-[#fddd02]">REINA IPASIONAL 2022: <span className="text-white">CANDE  <br/><span className="text-sm">(GUALEGUAYCHÚ)</span></span></h2>
          <p className="text-sm text-white pt-4">
            Dejando su marca en cada pinta, Cande transforma latas de WOLF IPA en un vestido que deslumbró a todos (nivel estuvo exhibido en Casa TEMPLE). Su IPAsión fue tal que se vistió de creatividad y orgullo birrero.
          </p>
        </div>
        <div className="bg-[#231f21] p-10">
          <Image 
            src="/ipassionales/reina2023.png" 
            alt="Cande" 
            width={500} 
            height={500} 
            className="w-full h-auto px-10 py-2"
          />
          <h2 className="text-xl font-bold text-[#fddd02]">REINA IPASIONAL 2023: <span className="text-white">MILAGROS  <br/><span className="text-sm">(BOULOGNE)</span></span></h2>
          <p className="text-sm text-white pt-4">
            Con manos de artista y alma de IPAsional, Milagros convirtió las latas de WOLF IPA en arte repujado, dejando un legado tan eterno como su amor la Wolf.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 max-w-[1000px] mx-auto pt-4">
        <div className="bg-[#231f21] p-10 flex flex-col xl:flex-row gap-8">
          <div className="w-full xl:w-1/2">
            <Image 
              src="/ipassionales/rey-2024.png" 
              alt="Cande" 
              width={500} 
              height={500} 
              className="w-full h-auto"
            />
          </div>
          <div className="w-full xl:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#fddd02] text-center">REY IPASIONAL 2024: <span className="text-white">LUCAS  <br/><span className="text-sm">(BUENOS AIRES)</span></span></h2>
            <p className="text-xl text-white pt-4">
              Lucas llevó su IPAsión al siguiente nivel: se tatuó el logo de TEMPLE en su piel y -redoblando la apuesta- subió al escenario con su banda para tocar en nuestro bar, viviendo cada nota al ritmo de la WOLF IPA.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center max-w-[1000px] mx-auto py-4">
        <Image src="/logo-temple-normal.png" width={500} height={50} className="w-44 mx-auto" />
      </div>
    </div>
  );
}

