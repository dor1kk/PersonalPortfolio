import React from 'react';
import profileImage from '../assets/Profile.jpg';
import { Slide } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div id='Home' className='relative flex flex-col md:flex-row max-lg:p-8 max-lg:flex-col-reverse md:p-16 bg-[#0f172a]'>


      <div className='md:w-1/2 flex flex-col justify-center relative'>
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
          <div className='flex flex-row space-x-4 mt-5'>
        <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect ml-2'>
              &lt;button&gt;
            </h5>
                      <span className='text-white font-montesrrat italic font-bold cursor-pointer'>Get in touch</span>
            <h5 className='text-[#16b7ea] text-2xl opacity-75 glow-effect ml-2'>
              &lt;/button&gt;
            </h5>        
            </div>
            </Slide>
      </div>

      <div className='md:w-[400px] flex justify-center md:ml-24 mt-8 md:mt-0'>
        <img src={profileImage} className='w-full filter rounded-3xl' alt='Profile' />
      </div>
    </div>
  );
};

export default Hero;
