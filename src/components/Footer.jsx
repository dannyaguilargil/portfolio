// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-400 p-4">
      © {new Date().getFullYear()} Danny. Todos los derechos reservados.
    </footer>
  );
};

export default Footer;  // 👈 Esto es necesario
