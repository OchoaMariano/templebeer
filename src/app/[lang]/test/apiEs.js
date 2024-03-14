import axios from "axios";

export const obtenerDatosDeAPI = async () => {
  try {
    const apiUrl =
      "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/encuentros?populate=icon&locale=es";
    const respuesta = await axios.get(apiUrl);
    return respuesta.data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error; // Lanza el error para que pueda ser manejado en el componente que llama a esta función
  }
};
