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
import { GothamBook } from "../layout";

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

    // Prueba gráfica (opcional)
    if (data.prueba_grafica && data.prueba_grafica.size > 2 * 1024 * 1024) {
      errors.prueba_grafica = "El archivo no debe superar los 2MB";
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
      // Si no se selecciona un archivo, simplemente limpiamos el campo y cualquier error
      setFormData((prevData) => ({
        ...prevData,
        prueba_grafica: null,
      }));
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        prueba_grafica: "",
      }));
    }
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
        que_harias_un_año_gratis: "",
        anecdota: "",
        prueba_grafica: null,
        compartir_respuesta: false,
        instagram: "",
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
                    <span className={`font-light pl-4 ${GothamBook.className}`}>
                      Dejanos una muestra Ipasional para poder participar del
                      año de birra gratis.
                    </span>
                  </label>
                  <div className="pl-5">
                    <input
                      type="file"
                      name="prueba_grafica"
                      accept="image/*"
                      onChange={handleFileChange}
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
