import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Header = () => {
  return (
    <nav className='p-4 bg-[#0f172a] top-0 left-0 flex flex-col md:flex-row justify-center  items-center'>
   
      <div className='flex gap-8 mt-4 md:mt-0'>
        <a href="https://github.com/dor1kk" aria-label="GitHub"><FaGithub className='text-white w-8 h-8 hover:text-green-600' /></a>
        <a href="https://www.linkedin.com/in/dorajet-kukaj-2611b2284/" aria-label="LinkedIn"><FaLinkedin className='text-white w-8 h-8  hover:text-green-600' /></a>
        <a href="#" aria-label="Gmail"><BiLogoGmail className='text-white w-8 h-8  hover:text-green-600' /></a>
      </div>
    </nav>
  );
};

export default Header;
