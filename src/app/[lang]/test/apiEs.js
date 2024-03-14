
export const obtenerDatosDeAPI = async () => {
  try {
    const apiUrl = "https://backend-templebeer-kkoiwxzayq-uc.a.run.app/api/encuentros?populate=icon&locale=es";
    const respuesta = await fetch(apiUrl);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos de la API:", error);
    throw error;
  }
};
