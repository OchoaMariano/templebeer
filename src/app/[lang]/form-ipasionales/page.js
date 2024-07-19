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

const supabaseUrl = "https://vgmbsfkdcztdrgztmlxj.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Page() {
  const [formData, setFormData] = useState({
    porque_amas_wolf_ipa: "",
    que_harias_un_año_gratis: "",
    anecdota: "",
    prueba_grafica: "",
    compartir_respuesta: false,
    instagram: "",
    telefono: "",
    bases: false,
    mayor_18: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("registros")
        .insert([formData]);

      if (error) throw error;
      setFormData({
        porque_amas_wolf_ipa: "",
        que_harias_un_año_gratis: "",
        anecdota: "",
        prueba_grafica: "",
        compartir_respuesta: false,
        instagram: "",
        telefono: "",
        bases: false,
        mayor_18: false,
      });

      // Aquí puedes manejar el envío del formulario
      console.log(formData);
      setIsSubmitted(true); // Actualiza el estado
    } catch (error) {
      toast.error(
        "Error: registro no completado, por favor vuelve a intentarlo",
        {
          duration: 4000,
          position: "top-center",
        }
      );
    }
  };

  return (
    <>
      <div
        className={`${isSubmitted ? "z-0" : "z-50"}`}
        style={{
          backgroundImage: "url(/form-ipasionales/bg.jpeg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%", // Puedes ajustar la altura según sea necesario
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
                <div>
                  <Image src={Participa} className="w-40 mx-auto" />
                </div>
                <div className="static lg:absolute -right-8 -bottom-5 pt-6">
                  <Image src={Ipasionales} className="w-24 mx-auto" />
                </div>
              </div>
            </div>

            <div className="text-black bg-white py-20 lg:py-10 px-3 lg:px-12 my-10 lg:my-0">
              <form
                onSubmit={handleSubmit}
                className="px-1 space-y-8 lg:space-y-10"
              >
                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className="font-semibold">
                    1. Razón por la que más amás a la WOLF IPA
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
                      <span>
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
                      Amargor (lo único amargo que admito en mi vida)
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Diseño"
                        onChange={handleChange}
                        required
                      />
                      Sabor a lúpulo (lupumaniaco de la cuna al cajon)
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="porque_amas_wolf_ipa"
                        value="Historia"
                        onChange={handleChange}
                        required
                      />
                      Diseño (me gusta el arrrrte)
                    </label>
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <div className="flex flex-col">
                    <label className="font-semibold ">
                      2. ¿Qué harias por un año de birra gratis?
                    </label>
                    <span className="font-normal pl-4">
                      Es tu momento de lucirte y contarnos con lujo de detalles
                    </span>
                  </div>
                  <div className="pl-5">
                    <textarea
                      name="que_harias_un_año_gratis"
                      placeholder="Contanos!"
                      onChange={handleChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-16 border-[#BEBEBE] placeholder:text-[#BEBEBE] pl-5 text-[#BEBEBE]"
                    ></textarea>
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <label className="font-semibold">
                    3. ¿Tenés alguna anécdota en TEMPLE o con la WOLF IPA?
                  </label>
                  <div className="pl-5">
                    <textarea
                      name="anecdota"
                      placeholder="Contanos!"
                      onChange={handleChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-16 border-[#BEBEBE] placeholder:text-[#BEBEBE] pl-5 text-[#BEBEBE]"
                    ></textarea>
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px]  space-y-4  leading-[14px]">
                  <label className="font-semibold">
                    4. ¿Tenes alguna prueba fotográfica de que sos un IPAsional?
                  </label>
                  <div className="pl-5">
                    <textarea
                      name="prueba_grafica"
                      placeholder="Contanos!"
                      onChange={handleChange}
                      required
                      className="w-full px-2 border rounded-xl pt-4 pb-16 border-[#BEBEBE] placeholder:text-[#BEBEBE] pl-5 text-[#BEBEBE]"
                    ></textarea>
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-4 leading-[14px]">
                  <label className="font-semibold text-[12.45px]">
                    5. ¿Te gustaria que compartamos tu respuesta en nuestras
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
                      Mandale
                    </label>
                    <label className="gap-x-2 flex items-center">
                      <input
                        type="radio"
                        name="compartir_respuesta"
                        value={false}
                        onChange={handleChange}
                        required
                      />
                      Prefiero mantenerme en el anonimato, como Batman
                    </label>
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">6. @ de tu Instagram</label>
                  <div className="pl-5">
                    <input
                      type="text"
                      placeholder="instagram.com//@"
                      name="instagram"
                      onChange={handleChange}
                      required
                      className="w-fit px-2 py-1.5 border rounded-xl border-[#BEBEBE] placeholder:text-[#BEBEBE] pl-5 text-[#BEBEBE]"
                    />
                  </div>
                </div>

                <div className="text-[11px] lg:text-[12.45px] space-y-3 flex flex-col  leading-[14px]">
                  <label className="font-semibold">7. Tu número de celu</label>
                  <div className="pl-5">
                    <input
                      type="number"
                      name="telefono"
                      onChange={handleChange}
                      required
                      className="w-fit px-2 py-1.5 border rounded-xl border-[#BEBEBE] placeholder:text-[#BEBEBE] pl-5 text-[#BEBEBE]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] flex justify-center items-center text-[#BEBEBE]">
                    <label className="flex gap-x-2 justify-center items-center">
                      <input
                        type="checkbox"
                        name="bases"
                        onChange={handleChange}
                        required
                      />
                      <span>Acepto las bases y condiciones</span>
                    </label>
                  </div>

                  <div className="text-[10px] flex justify-center items-center text-[#BEBEBE]">
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
                  <button
                    type="submit"
                    className="bg-[#FCDC00] text-[#303E48] px-4 py-2 text-[17px] font-semibold hover:bg-[#ffe74c] transition-all ease-in-out duration-300"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute w-full h-screen z-40 ${
          isSubmitted ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out duration-300`}
      >
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
