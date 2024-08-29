import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';

const ExperienceItem = ({ icon: Icon, title, company, date, description, projects }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mb-12 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-sky-500"
  >
    <div className="absolute left-0 top-0 w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center -translate-x-1/2">
      <Icon className="text-white text-lg" />
    </div>
    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-sky-400 text-sm mb-2">{company}</p>
    <p className="text-gray-400 text-sm mb-3">{date}</p>
    <p className="text-gray-300 mb-4">{description}</p>
    {projects && (
      <div>
        <h4 className="text-lg font-semibold text-white mb-2">Key Projects:</h4>
        <ul className="list-disc list-inside text-gray-400">
          {projects.map((project, index) => (
            <li key={index} className="mb-2">
              <span className="text-sky-400">{project.name}</span>: {project.description}
            </li>
          ))}
        </ul>
      </div>
    )}
  </motion.div>
);

const Experience = () => {
  return (
    <section id="Experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-sky-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of professional growth and impactful projects
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <ExperienceItem 
            icon={FaBriefcase}
            title="Freelance Developer"
            company="Sync Code"
            date="2023 - Present"
            description="As a freelance developer at Sync Code, I've had the opportunity to work on various challenging projects, honing my skills in full-stack development and collaborating with diverse teams."
            projects={[
              {
                name: "E-commerce Platform",
                description: "Developed a responsive e-commerce website using React and Node.js, implementing secure payment gateways and inventory management systems."
              },
              {
                name: "Task Management App",
                description: "Created a real-time task management application using Vue.js and Firebase, featuring team collaboration tools and analytics dashboards."
              },
              {
                name: "Educational Platform",
                description: "Built an interactive online learning platform with React and Django, incorporating video streaming capabilities and progress tracking for students."
              }
            ]}
          />
          <ExperienceItem 
            icon={FaLaptopCode}
            title="Personal Projects"
            company="Self-Initiated"
            date="2022 - Present"
            description="Alongside my freelance work, I've been actively developing personal projects to explore new technologies and enhance my skills."
            projects={[
              {
                name: "Portfolio Website",
                description: "Designed and developed a personal portfolio website using React and Tailwind CSS, showcasing my projects and skills."
              },
              {
                name: "Weather App",
                description: "Created a weather application using React Native, integrating with weather APIs to provide real-time forecasts and location-based services."
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
