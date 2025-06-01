import React from 'react';
import "../assets/styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
        alt="Charizard"
      />
      <div>
        ©d4n7.dev {new Date().getFullYear()} . Todos los derechos reservados - Inspirado en Charizard.
      </div>
    </footer>
  );
};

export default Footer;
