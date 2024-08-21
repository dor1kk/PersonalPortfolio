import React from 'react';
import { MyServices } from '../constants';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <div id='My-services' className='mt-24 flex flex-col '>

     
      <div className='flex flex-row gap-12 justify-between max-lg:flex-col'>
        {MyServices.map((service, index) => {
          return (
            <Slide key={service.name} direction="left" delay={index * 100}>
              <div className='shadow-3xl bg-[#1e293b]  rounded-3xl flex flex-col gap-4 justify-center items-center p-4'>
                <img src={service.icon} className='w-16 mt-[-50px] h-16 rounded-full' alt={`${service.name} icon`} />
                <h1 className='text-xl font-bold italic font-montserrat text-white'>{service.name}</h1>
                <p className='font-montserrat text-gray-200'>{service.text}</p>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
