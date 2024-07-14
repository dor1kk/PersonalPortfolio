import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Header = () => {
  return (
    <nav className='p-4 bg-white top-0 left-0 flex flex-col md:flex-row justify-center md:justify-between items-center'>
      <ul className='flex flex-col max-lg:hidden md:flex-row gap-12 ml-32 text-green-900 font-monserrat text-md md:text-lg'>
        <li><a href="#" className='hover:text-green-600'>Home</a></li>
        <li><a href="#" className='hover:text-green-600'>About</a></li>
        <li><a href="#" className='hover:text-green-600'>My Skills</a></li>
        <li><a href="#" className='hover:text-green-600'>My Projects</a></li>
        <li><a href="#" className='hover:text-green-600'>Contact</a></li>
      </ul>
      <div className='flex gap-8 mt-4 md:mt-0'>
        <a href="#" aria-label="GitHub"><FaGithub className='text-green-900 hover:text-green-600' /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin className='text-green-900 hover:text-green-600' /></a>
        <a href="#" aria-label="Gmail"><BiLogoGmail className='text-green-900 hover:text-green-600' /></a>
      </div>
    </nav>
  );
};

export default Header;
