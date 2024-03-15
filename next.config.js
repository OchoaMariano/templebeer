// next.config.js
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Configuración para permitir imágenes externas
    domains: ["storage.googleapis.com"],
  },
};

module.exports = nextConfig;
