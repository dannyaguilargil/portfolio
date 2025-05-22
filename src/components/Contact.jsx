// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="text-white p-8">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p>Email: dev@dannyhub.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/d4n7" target="_blank" rel="noreferrer" className="text-accent underline">linkedin.com/in/d4n.dev</a></p>
      <p>GitHub: <a href="https://github.com/d4n7.dev" target="_blank" rel="noreferrer" className="text-accent underline">github.com/</a></p>
    </section>
  );
};

export default Contact;  // 👈 ¡Esto es clave!
