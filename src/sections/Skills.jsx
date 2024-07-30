import React, { useEffect, useState } from 'react';
import { MySkills } from '../constants';
import { Slide } from 'react-awesome-reveal';

const Skills = () => {
  const [skillsLoaded, setSkillsLoaded] = useState(false);

  useEffect(() => {
    setSkillsLoaded(true);
  }, []);

  return (
    <div id='My-Skills' className='flex flex-col md:flex-row min-h-screen p-4 md:p-8'>
      <div className='flex flex-col md:w-1/2'>
        <Slide direction="left">
          <p className='text-primary italic text-xl'>My Skills</p>
        </Slide>
        <Slide direction="left" delay={100}>
          <h1 className='text-4xl font-bold font-montserrat'>
            Why Hire Me For <br />Your Next <br /><span className='text-primary'>Project?</span>
          </h1>
        </Slide>
        <Slide direction="left" delay={200}>
          <p className='w-full md:w-3/5 mt-4 text-gray-600'>
            With a comprehensive skill set in full-stack development, I bring expertise in both front-end and back-end technologies. My proficiency in the MERN stack ensures efficient and scalable web applications. I also have a strong foundation in UI/UX design, allowing me to create visually appealing and user-friendly interfaces. Additionally, my expertise in database management ensures your data is handled securely and efficiently.
          </p>
        </Slide>
        <Slide direction="left" delay={300}>
          <button className='py-3 flex flex-row justify-center items-center gap-4 px-8 bg-primary mt-8 text-white rounded-2xl self-center md:self-start'>
            <span>View Details</span>
            <img src='https://static-00.iconduck.com/assets.00/arrow-right-icon-2048x1281-4p12i3j3.png' className='w-8 h-4' alt='arrow icon'/>
          </button>
        </Slide>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2'>
        {MySkills.map((skill) => (
          <div className='flex flex-col shadow-lg bg-white rounded-2xl p-4 justify-between items-center cursor-pointer' key={skill.name}>
            <img src={skill.icon} className='w-full h-40 object-contain' alt={skill.name}/>
            <h1 className='text-center font-montserrat italic font-bold'>{skill.name}</h1>
            <div className='w-full bg-gray-200 rounded-full h-2.5 mt-2'>
              <div
                className={`bg-primary h-2.5 rounded-full transition-all duration-1000 ease-out ${skillsLoaded ? 'w-full' : 'w-0'}`}
                style={{ width: skillsLoaded ? `${skill.percentage}%` : '0%' }}
              ></div>
            </div>
            <p className='mt-2 text-gray-600'>{skill.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
