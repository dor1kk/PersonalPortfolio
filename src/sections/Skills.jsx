import React from 'react';
import { technologies } from '../constants';
import { motion } from 'framer-motion';

const SkillCard = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-700 group"
  >
    <div className="flex items-center mb-2">
      <img 
        src={tech.icon} 
        className="w-8 h-8 mr-3 transition-transform duration-300 group-hover:scale-110" 
        alt={tech.name} 
      />
      <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
        {tech.name}
      </h3>
    </div>
    <p className="text-gray-400 text-sm mt-2 group-hover:text-gray-300 transition-colors duration-300">
      {tech.description}
    </p>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="My-Skills" className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            My <span className="text-sky-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            A snapshot of my technical expertise and proficiency levels
          </p>
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            As a full-stack developer, I have experience with a wide range of technologies. 
            My expertise spans from front-end frameworks like React and Vue.js to back-end 
            technologies such as Node.js and Python. I'm also well-versed in database 
            management, cloud services, and DevOps practices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <SkillCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
