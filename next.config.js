// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configuración para permitir imágenes externas
    domains: ["storage.googleapis.com"],
  },
};

module.exports = nextConfig;
