import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaCertificate } from 'react-icons/fa';

const TimelineItem = ({ icon: Icon, title, date, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-start mb-8"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center mr-4">
      <Icon className="text-white text-xl" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-sky-400 text-sm mb-2">{date}</p>
      <p className="text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section id="About" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-sky-400">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate full-stack developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 mb-6">
              I'm a full-stack developer with a passion for creating elegant, efficient, and user-friendly web applications. My journey in the world of programming began with a curiosity about how things work on the internet, which quickly turned into a full-fledged passion for web development.
            </p>
            <p className="text-gray-400">
              With a strong foundation in both front-end and back-end technologies, I strive to create seamless, responsive, and intuitive user experiences. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
          </motion.div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Education & Experience</h3>
            <TimelineItem 
              icon={FaGraduationCap}
              title="High School"
              date="Graduated in 2022"
              description="Successfully completed High School with a focus on Science and Mathematics."
            />
            <TimelineItem 
              icon={FaLaptopCode}
              title="UBT College"
              date="Expected Graduation: 2025"
              description="Pursuing a Bachelor of Science in Computer Science and Engineering, focusing on software development and data science."
            />
            <TimelineItem 
              icon={FaCertificate}
              title="Online Courses"
              date="Completed in 2023, 2024"
              description="Completed several online courses including Web Development, Responsive Design, and Computer Science fundamentals."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
