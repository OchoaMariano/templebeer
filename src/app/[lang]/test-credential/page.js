"use client";

import { useState } from "react";

export default function TestCredential() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = () => {
    const url = `/api/generate-credential?nombre=${encodeURIComponent(
      nombre
    )}&apellido=${encodeURIComponent(apellido)}`;
    setImageUrl(url);
  };

  return (
    <div>
      <h1>Test Credential Generator</h1>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <button onClick={generateImage}>Generar Credencial</button>
      {imageUrl && <img src={imageUrl} alt="Credencial generada" />}
    </div>
  );
}
