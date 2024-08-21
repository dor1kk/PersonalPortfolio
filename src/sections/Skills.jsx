import React from 'react';
import { technologies } from '../constants';  // Update this path based on your actual file structure

const Skills = () => {
  return (
    <div id='My-Skills' className='flex flex-col md:flex-row min-h-screen p-4 md:p-8 bg-[#0f172a]'>
      <div className='flex flex-col md:w-1/2'>
        <h1 className='text-4xl font-bold font-montserrat text-white text-center md:text-left'>
          Why Hire Me For <br />Your Next <br /><span className='text-primary'>Project?</span>
        </h1>
        <p className='w-full md:w-3/5 mt-4 text-gray-300 text-center md:text-left'>
          With a comprehensive skill set in full-stack development, I bring expertise in both front-end and back-end technologies. My proficiency in the MERN stack ensures efficient and scalable web applications. I also have a strong foundation in UI/UX design, allowing me to create visually appealing and user-friendly interfaces. Additionally, my expertise in database management ensures your data is handled securely and efficiently.
        </p>
      </div>

      <div className='flex flex-wrap gap-4 md:w-1/2 mt-8 md:mt-0'>
        {technologies.map((tech) => (
          <div key={tech.name} className='flex items-center bg-[#1e293b] px-4 py-2 text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
            <img src={tech.icon} className='w-6 h-6 mr-2' alt={tech.name} />
            <span className='font-montserrat'>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
