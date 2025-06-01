import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub, FaInstagram, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className=" p-40 flex space-x-16 justify-center">
      {[{
        href: "mailto:dev@dannyhub.com",
        label: "Email",
        Icon: MdEmail
      }, {
        href: "https://linkedin.com/in/d4n7",
        label: "LinkedIn",
        Icon: FaLinkedin
      }, {
        href: "https://github.com/d4n7.dev",
        label: "GitHub",
        Icon: FaGithub
      }, {
        href: "https://instagram.com/d4n7",
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
          className="hover:text-accent transition-colors duration-300 transform hover:-translate-y-3"
        >
          <Icon size={28} />
        </a>
      ))}
    </section>
  );
};

export default Contact;
