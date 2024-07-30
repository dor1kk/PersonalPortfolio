import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Header = () => {
  return (
    <nav className='p-4 bg-white top-0 left-0 flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <ul className='flex flex-col max-lg:hidden md:flex-row gap-12 ml-32 text-green-900 font-monserrat text-md md:text-lg'>
        <li><a href="#Home" className='hover:text-green-600'>Home</a></li>
        <li><a href="#My-services" className='hover:text-green-600'>About</a></li>
        <li><a href="#My-Skills" className='hover:text-green-600'>My Skills</a></li>
        <li><a href="#My-Projects" className='hover:text-green-600'>My Projects</a></li>
        <li><a href="#My-Contacts" className='hover:text-green-600'>Contact</a></li>
      </ul>
      <div className='flex gap-8 mt-4 md:mt-0'>
        <a href="https://github.com/dor1kk" aria-label="GitHub"><FaGithub className='text-green-900 w-8 h-8 hover:text-green-600' /></a>
        <a href="https://www.linkedin.com/in/dorajet-kukaj-2611b2284/" aria-label="LinkedIn"><FaLinkedin className='text-green-900 w-8 h-8  hover:text-green-600' /></a>
        <a href="#" aria-label="Gmail"><BiLogoGmail className='text-green-900 w-8 h-8  hover:text-green-600' /></a>
      </div>
    </nav>
  );
};

export default Header;
