"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { obtenerDatosDeAPI } from "./apiEs";

export default function Page() {
  const [datosRecibidos, setDatosRecibidos] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await obtenerDatosDeAPI();
        setDatosRecibidos(datos.data);
      } catch (error) {
        setError(error);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  if (error || !datosRecibidos || datosRecibidos.length === 0) {
    return <div>Error al cargar los datos</div>;
  }

  return (
    <div>
      <h1>{datosRecibidos[0]?.attributes?.Nombre}</h1>
      <p>Slug: {datosRecibidos[0]?.attributes?.slug}</p>
      <p>Fecha de creación: {datosRecibidos[0]?.attributes?.createdAt}</p>
      <p>Fecha de actualización: {datosRecibidos[0]?.attributes?.updatedAt}</p>

      <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
        <Image
          className="h-full w-full"
          width={500}
          height={500}
          src={datosRecibidos[0]?.attributes?.icon?.data?.attributes?.url}
          alt={datosRecibidos[0]?.attributes?.Nombre}
        />
      </div>

      <h1>{datosRecibidos[1]?.attributes?.Nombre}</h1>
      <p>Slug: {datosRecibidos[1]?.attributes?.slug}</p>
      <p>Fecha de creación: {datosRecibidos[1]?.attributes?.createdAt}</p>
      <p>Fecha de actualización: {datosRecibidos[1]?.attributes?.updatedAt}</p>
      <div className="w-[20.76vw] h-[20.51vw] md:w-[16vh] md:h-[16vh] relative">
        <Image
          className="h-full w-full"
          width={500}
          height={500}
          src={datosRecibidos[1]?.attributes?.icon?.data?.attributes?.url}
          alt={datosRecibidos[1]?.attributes?.Nombre}
        />
      </div>
    </div>
  );
}
