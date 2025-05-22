import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-6 text-gray-400 mt-10">
      <a href="https://github.com/dannyaguilargil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/dannyaguilargil" target="_blank" rel="noopener noreferrer" className="hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="mailto:danny@example.com" className="hover:text-white">
        <FaEnvelope size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
