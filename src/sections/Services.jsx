import React from 'react';
import { MyServices } from '../constants';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
  >
    <div className="p-6 flex flex-col items-center text-center h-full">
      <div className="w-16 h-16 bg-sky-900 rounded-full flex items-center justify-center mb-4 group-hover:bg-sky-800 transition-colors duration-300">
        <img src={service.icon} className="w-8 h-8" alt={`${service.name} icon`} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors duration-300">
        {service.name}
      </h3>
      <p className="text-gray-400 flex-grow">{service.text}</p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="My-services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-sky-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer a range of services to help bring your digital projects to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MyServices.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
