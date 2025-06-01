// src/components/SocialIcons.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../assets/styles/social.css'; 

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/dannyaguilargil" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/dannyaguilargil" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={24} />
      </a>
      <a href="mailto:danny@example.com">
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
