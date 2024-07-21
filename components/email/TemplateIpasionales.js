import React from "react";

export default function EmailTemplate({ nombre, apellido }) {
  return (
    <div>
      <h1>
        ¡Gracias por participar, {nombre} {apellido}!
      </h1>
      <p>Hemos recibido tu formulario correctamente.</p>
      <p>Pronto nos pondremos en contacto contigo.</p>
    </div>
  );
}
