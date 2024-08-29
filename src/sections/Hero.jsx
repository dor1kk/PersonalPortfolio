import React from 'react';
import profileImage from '../assets/Profile.jpg';
import { Slide } from 'react-awesome-reveal';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='Home' className='relative flex flex-col md:flex-row items-center justify-between min-h-screen p-8 md:p-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b]'>
      <div className='md:w-1/2 flex flex-col justify-center relative z-10'>
        <Slide direction="left">
          <div className='relative flex flex-row items-center mt-8 mb-8 ml-8 md:ml-0 md:mb-4 md:mt-0'>
            <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect mr-2 '>
              &lt;h5&gt;
            </h5>
            <h5 className='relative font-montserrat text-white text-center italic md:text-left text-lg  md:text-xl'>
              Hi I'm Dorajet Kukaj
            </h5>
            <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect ml-2'>
              &lt;/h5&gt;
            </h5>
          </div>
        </Slide>
        <Slide direction="left" delay={100}>
          <h1 className='text-4xl md:text-6xl font-bold font-montserrat text-white text-center md:text-left'>
            A Software <span className='text-primary italic'>Developer,</span> <br /> Infinitely Creative <br /> Solutions
          </h1>
        </Slide>
        <Slide direction="left" delay={200}>
          <div>
  
          <p className='text-gray-500 text-center md:text-left w-full md:w-3/4 mt-4 mx-auto md:mx-0'>
            I specialize in creating innovative web applications, software management systems, including a portfolio website, e-commerce platforms, and a fully functional learning management system. Let's turn your ideas into reality.
          </p>
        
            </div>
        </Slide>
        <Slide direction="left" delay={300}>
          <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8'>
            <button className='px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-dark transition duration-300 ease-in-out transform hover:scale-105'>
              Get in touch
            </button>
            <div className='flex space-x-4'>
              <a href="#" className='text-white hover:text-primary transition duration-300'><FaGithub size={24} /></a>
              <a href="#" className='text-white hover:text-primary transition duration-300'><FaLinkedin size={24} /></a>
              <a href="#" className='text-white hover:text-primary transition duration-300'><FaEnvelope size={24} /></a>
            </div>
          </div>
        </Slide>
      </div>

      <div className='md:w-[400px] flex justify-center md:justify-end mt-12 md:mt-0 relative z-10'>
        <img src={profileImage} className='w-full max-w-sm rounded-3xl shadow-2xl ring-4 ring-primary' alt='Profile' />
      </div>

      <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0'></div>
    </div>
  );
};

export default Hero;
