import { NextResponse } from "next/server";
import { createCanvas, loadImage } from "canvas";
import path from "path";
import { promises as fs } from "fs";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const nombre = searchParams.get("nombre");
  const apellido = searchParams.get("apellido");

  if (!nombre || !apellido) {
    return NextResponse.json(
      { error: "Nombre y apellido son requeridos" },
      { status: 400 }
    );
  }

  try {
    const publicDirectory = path.join(process.cwd(), "public");
    const imagePath = path.join(publicDirectory, "credential-template.png");
    console.log("Ruta de la imagen:", imagePath);

    const imageBuffer = await fs.readFile(imagePath);
    console.log("Imagen cargada correctamente");

    const image = await loadImage(imageBuffer);
    console.log("Imagen leída correctamente");

    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    // Dibujar la imagen de fondo
    ctx.drawImage(image, 0, 0);

    // Configurar la fuente y el color del texto para el título
    ctx.font = "18px sans-serif";
    ctx.fillStyle = "#313e47";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    // Capitalizar la primera letra del nombre y el apellido
    const nombreCapitalizado = capitalizeFirstLetter(nombre);
    const apellidoCapitalizado = capitalizeFirstLetter(apellido);

    // Texto con etiquetas estáticas
    const textoNombre = "NOMBRE:";
    const textoApellido = "APELLIDO:";

    // Ajustar la posición del texto
    const x = 35;
    const yNombre = canvas.height / 2 + 20; // Ajusta la posición vertical del nombre
    const yApellido = canvas.height / 2 + 40; // Ajusta la posición vertical del apellido

    // Escribir los títulos en líneas separadas
    ctx.fillText(textoNombre, x, yNombre);
    ctx.fillText(textoApellido, x, yApellido);

    // Configurar la fuente y el color del texto para los valores
    ctx.font = "bold 20px sans-serif";
    ctx.fillStyle = "#313e47";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    // Ajustar la posición del texto de los valores
    const xValue = x + 100; // Ajusta la posición horizontal de los valores

    // Escribir el nombre y el apellido en líneas separadas
    ctx.fillText(nombreCapitalizado, xValue, yNombre);
    ctx.fillText(apellidoCapitalizado, xValue, yApellido);

    const buffer = canvas.toBuffer("image/png");

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "s-maxage=31536000, public",
      },
    });
  } catch (error) {
    console.error("Error detallado:", error);
    return NextResponse.json(
      { error: "Error generating image", details: error.message },
      { status: 500 }
    );
  }
}
