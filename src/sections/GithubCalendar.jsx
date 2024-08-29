import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GithubCalendar = () => {
  const theme = {
    light: ['#f1f8ff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6'],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            GitHub <span className="text-sky-600">Contributions</span>
          </h2>
          <p className="text-gray-600 text-lg">Tracking my open source journey</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200"
        >
          <GitHubCalendar 
            username="dor1kk" 
            blockSize={12}
            blockMargin={5}
            theme={theme}
            fontSize={14}
            color="#0366d6"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://github.com/dor1kk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            <FaGithub size={20} />
            <span>View My GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubCalendar;
