import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Eye, Code, Calendar, Users, Filter } from 'lucide-react';
import { cn } from '../lib/utils';
import RentACarMockup from '../assets/RentACarMockup.png';
import DeliveryApp from '../assets/DeliveryAppImage.png';
import LMSMockup from '../assets/LmsMockeduo.jpg';
import ByteMockup from '../assets/ByteTechMockup.jpg';
import HealthCareMockup from '../assets/HealthCareMockup.jpg';
import MusicalMockup from '../assets/MusicalMockup.jpg';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Rent A Car System',
      description: 'A comprehensive car rental system with real-time chat functionality, allowing users to browse available cars and communicate directly with service providers.',
      longDescription: 'Built with modern React architecture, this platform features real-time messaging, advanced filtering, booking management, and responsive design. Integrated Firebase for backend services and real-time updates.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Firestore'],
      category: 'fullstack',
      status: 'completed',
      github: 'https://github.com/dor1kk/Rent-A-Car-System-Management',
      demo: 'https://chatapp-430709.web.app',
      features: ['Real-time Chat', 'Car Booking', 'User Management', 'Responsive Design'],
      timeline: '3 months',
      team: 'Solo Project'
    },
    {
      id: 2,
      title: 'Fast Food Delivery App',
      description: 'A modern fast food delivery platform with intuitive ordering system, real-time tracking, and seamless user experience.',
      longDescription: 'Developed a full-featured delivery app with menu browsing, cart management, order tracking, and user authentication. Focused on performance and user experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Node.js'],
      category: 'fullstack',
      status: 'completed',
      github: 'https://github.com/dor1kk/Fast-Food-Delivery-App',
      demo: 'https://chatapp-430709.web.app',
      features: ['Order Management', 'Real-time Tracking', 'Payment Integration', 'Admin Dashboard'],
      timeline: '2 months',
      team: 'Solo Project'
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform for online education with course management, user enrollment, and progress tracking capabilities.',
      longDescription: 'Built a scalable learning platform with course creation tools, student progress tracking, assignment management, and interactive features for enhanced learning experience.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'fullstack',
      status: 'completed',
      github: 'https://github.com/dor1kk/Learning-Management-System',
      demo: '#',
      features: ['Course Management', 'Progress Tracking', 'Assignment System', 'User Roles'],
      timeline: '4 months',
      team: 'Solo Project'
    },
    {
      id: 4,
      title: 'Byte Tech Store',
      description: 'An e-commerce platform inspired by popular tech stores, featuring product listings, user profiles, and interactive shopping experience.',
      longDescription: 'Developed a modern e-commerce platform with advanced product filtering, user reviews, shopping cart functionality, and admin panel for inventory management.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Ant Design', 'MongoDB'],
      category: 'frontend',
      status: 'completed',
      github: 'https://github.com/dor1kk/Tech-Store-E-Commerce',
      demo: 'https://bytetechstore.netlify.app/',
      features: ['Product Catalog', 'Shopping Cart', 'User Reviews', 'Admin Panel'],
      timeline: '3 months',
      team: 'Solo Project'
    },
    {
      id: 5,
      title: 'Health Care System',
      description: 'A healthcare management platform allowing patients to browse doctors, schedule appointments, and manage health information.',
      longDescription: 'Created a comprehensive healthcare platform with doctor profiles, appointment scheduling, patient records management, and telemedicine features.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Sanity CMS', 'Node.js'],
      category: 'fullstack',
      status: 'completed',
      github: 'https://github.com/dor1kk/Health-Care-System',
      demo: 'https://health-care-doc.netlify.app/',
      features: ['Doctor Profiles', 'Appointment Booking', 'Patient Records', 'Telemedicine'],
      timeline: '4 months',
      team: 'Solo Project'
    },
    {
      id: 6,
      title: 'MusicAL - Listen Free',
      description: 'A music streaming application that allows users to discover, browse, and listen to their favorite songs with a modern interface.',
      longDescription: 'Built a music streaming platform with playlist management, search functionality, music recommendations, and social features for music lovers.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Tailwind CSS', 'Music API', 'Firebase'],
      category: 'frontend',
      status: 'completed',
      github: 'https://github.com/dor1kk/MusicApp',
      demo: 'https://musicalb.netlify.app/',
      features: ['Music Streaming', 'Playlist Management', 'Search & Discovery', 'Social Features'],
      timeline: '2 months',
      team: 'Solo Project'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', count: projects.length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { key: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="projects" 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
          >
            <Code className="w-4 h-4 mr-2" />
            My Work
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured{' '}
            <span className="text-primary">Projects</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A showcase of my recent work spanning full-stack applications, frontend interfaces, and innovative solutions
          </motion.p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              variants={itemVariants}
              onClick={() => setFilter(category.key)}
              className={cn(
                "flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "border-2 hover:scale-105",
                filter === category.key
                  ? "bg-primary/10 border-primary/20 text-primary"
                  : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-primary/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{category.label}</span>
              <span className={cn(
                "px-2 py-1 rounded-full text-xs",
                filter === category.key
                  ? "bg-primary/20 text-primary"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-400"
              )}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-purple-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <div className="flex items-center justify-center h-full">
                    <div className="text-4xl font-bold text-primary/50">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  
                  {/* Overlay with actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      project.status === 'completed' 
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                    )}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.slice(0, 2).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          +{project.features.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-200 dark:border-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.timeline}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.team}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-3 mt-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out my complete portfolio of projects and contributions on GitHub
            </p>
            <motion.a
              href="https://github.com/dor1kk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
