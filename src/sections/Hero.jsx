import React from 'react';
import profileImage from '../assets/profile.png';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row max-lg:p-8 max-lg:flex-col-reverse  md:p-16 bg-white'>
      <div className='md:w-1/2 flex flex-col justify-center'>
        <p className='font-montserrat text-emerald-700 text-center italic md:text-left'>Hi I'm Dorajet Kukaj</p>
        <h1 className='text-4xl md:text-6xl font-bold font-montserrat text-gray-900 text-center md:text-left'>
          A Software <span className='text-primary italic'>Developer,</span> <br /> Infinitely Creative <br /> Solutions
        </h1>
        <p className='text-gray-700 text-center md:text-left w-full md:w-3/4 mt-4 mx-auto md:mx-0'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam officia necessitatibus veritatis voluptatum laudantium, ut velit autem earum error porro obcaecati quis nemo esse aliquid ipsam aut tempora cupiditate vel.
        </p>
      
        <button className='py-3 flex flex-row justify-center items-center gap-4 px-8 bg-primary mt-8 text-white rounded-2xl self-center md:self-start'>
          <span>Get in touch</span>
          <img src='https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png' className='w-8 h-4'></img>
        </button>
      </div>
      
      <div className='md:w-1/2 flex justify-center mt-8 md:mt-0'>
        <img src={profileImage} className='filter' alt='Profile' />
      </div>
    </div>
  );
};

export default Hero;
