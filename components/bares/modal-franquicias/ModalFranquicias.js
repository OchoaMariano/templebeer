"use client";
import { useState } from "react";
import Link from "next/link";

export default function Modal() {
  const [country, setCountry] = useState("");
  const [customCountry, setCustomCountry] = useState("");
  const [investorVisa, setInvestorVisa] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejo del envío del formulario
    console.log({
      country: country === "Otro país" ? customCountry : country,
      investorVisa,
      ...formData,
    });
  };

  return (
    <div
      className="fixed z-[100] inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black bg-opacity-40 transition-opacity"
          aria-hidden="true"
        >
          <Link
            href="/es/franquicias"
            className="absolute inset-0 w-[100%] h-[100vh]"
          ></Link>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block bg-[#ECEBEB] shadow-xl rounded-t-xl transform transition-all align-middle w-[90%] max-w-[100.56vh] h-auto md:w-[92.91vh]">
          <div className="header__chrome w-full h-[7.08vh] bg-[#D9D9D9] rounded-t-xl flex flex-row px-[2.54vh] gap-x-[4.24vh]">
            <div className="user_btns flex flex-row items-center gap-x-[0.5vh]">
              <div className="close_red w-[2.12vh] h-[2.12vh] bg-[#E65E60] rounded-full"></div>
              <div className="minimize_yellow w-[2.12vh] h-[2.12vh] bg-[#f7ba49] rounded-full"></div>
              <div className="maximize_green w-[2.12vh] h-[2.12vh] bg-[#58ae50] rounded-full"></div>
            </div>
            <div className="url_input w-full">
              <div className="w-full h-[3vh] bg-white rounded-full mt-4"></div>
            </div>
          </div>
          <div className="content p-2 lg:p-[3.8vh]">
            <div className="relative w-full h-auto shadow-xl bg-black flex flex-col justify-center items-center text-white py-10">
              <span className="text-base lg:text-2xl uppercase">
                ¿Queres invertir en TEMPLE?
              </span>

              <form onSubmit={handleSubmit} className="mt-4 w-[85%]">
                <div className="mb-4 ">
                  <label
                    htmlFor="country"
                    className=" text-white text-sm lg:text-lg"
                  >
                    ¿En qué territorio?
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="w-full mt-2 p-2 rounded text-black  text-sm lg:text-lg"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Argentina">Argentina</option>
                    <option value="USA">USA</option>
                    <option value="España">España</option>
                    <option value="Otro país">Otro</option>
                  </select>
                  {country === "Otro país" && (
                    <input
                      type="text"
                      className="w-full mt-2 p-2 rounded text-black  text-sm lg:text-lg"
                      placeholder="Escribe el pais"
                      value={customCountry}
                      onChange={(e) => setCustomCountry(e.target.value)}
                    />
                  )}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="investorVisa"
                    className="block text-white  text-sm lg:text-lg"
                  >
                    ¿Te interesa obtener la visa de inversor en USA?
                  </label>
                  <div className="flex items-center mt-2 space-x-4 justify-center">
                    <label className="flex items-center text-white  text-sm lg:text-lg">
                      <input
                        type="radio"
                        name="investorVisa"
                        value="Si"
                        onChange={(e) => setInvestorVisa(e.target.value)}
                        required
                      />
                      <span className="ml-2">Si</span>
                    </label>
                    <label className="flex items-center text-white">
                      <input
                        type="radio"
                        name="investorVisa"
                        value="No"
                        onChange={(e) => setInvestorVisa(e.target.value)}
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                </div>

                <div className="mb-2 lg:mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-white text-sm lg:text-lg"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full mt-2  px-2 lg:px-0 lg:p-2 rounded text-black  text-sm lg:text-lg"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-2 lg:mb-4">
                  <label
                    htmlFor="email"
                    className="block text-white  text-sm lg:text-lg"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full mt-2  px-2 lg:px-0 lg:p-2  rounded text-black  text-sm lg:text-lg"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-2 lg:mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-white  text-sm lg:text-lg"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full mt-2 px-2 lg:px-0 lg:p-2 rounded text-black"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-fit border  text-sm lg:text-lg border-white bg-white text-black hover:bg-transparent hover:text-white py-1 px-5 rounded transition-all ease-in-out duration-300"
                  >
                    Enviar
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
