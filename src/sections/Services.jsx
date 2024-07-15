import React from 'react';
import { MyServices } from '../constants';
import { Slide } from 'react-awesome-reveal';

const Services = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-row gap-12 justify-between max-lg:flex-col'>
        {MyServices.map((service, index) => {
          return (
            <Slide key={service.name} direction="left" delay={index * 100}>
              <div className='shadow-3xl rounded-3xl flex flex-col gap-4 justify-center items-center p-4'>
                <img src={service.icon} className='w-16 mt-[-50px] h-16 rounded-full' alt={`${service.name} icon`} />
                <h1 className='text-xl font-bold italic font-montserrat'>{service.name}</h1>
                <p className='font-montserrat text-gray-500'>{service.text}</p>
              </div>
            </Slide>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
