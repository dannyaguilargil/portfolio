import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';
import '../assets/styles/social.css';

const Contact = () => {
  return (
    <section className="contact-section">
      {[{
        href: "mailto:dev@dannyhub.com",
        label: "Email",
        Icon: MdEmail
      }, {
        href: "https://linkedin.com/in/ingdannydev/",
        label: "LinkedIn",
        Icon: FaLinkedin
      }, {
        href: "https://github.com/d4n7.dev",
        label: "GitHub",
        Icon: FaGithub
      }, {
        href: "https://instagram.com/d4n7.dev",
        label: "Instagram",
        Icon: FaInstagram
      }, {
        href: "https://www.dannyhub.com",
        label: "Página web",
        Icon: FaGlobe
      }].map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          <Icon size={28} />
        </a>
      ))}
    </section>
  );
};

export default Contact;
