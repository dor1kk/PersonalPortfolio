import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { cn } from '../lib/utils';
import { generateResumePDF } from '../utils/pdfGenerator';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dor1kk', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dorajet-kukaj-2611b2284/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dorajetkukaj05@gmail.com', label: 'Email' },
  ];

  // Resume data for PDF generation
  const resumeData = {
    personal: {
      name: 'Dorajet Kukaj',
      title: 'Junior Software Engineer',
      email: 'dorajetkukaj05@gmail.com',
      phone: '+383 XX XXX XXX',
      location: 'Pristina, Kosovo',
      website: 'dkmyportfolio.netlify.app',
      linkedin: 'linkedin.com/in/dorajet-kukaj',
      github: 'github.com/dor1kk'
    },
    summary: 'Passionate Junior Software Engineer with expertise in modern web technologies including React, Next.js, GraphQL, and cloud services. Currently contributing to large-scale healthcare technology at Pabau Clinic Software.',
    experience: [
      {
        title: 'Junior Software Engineer',
        company: 'Pabau Clinic Software',
        location: 'London, UK (Remote)',
        period: '2023 - Present',
        achievements: [
          'Developed and maintained critical frontend components serving 10,000+ healthcare professionals',
          'Implemented GraphQL APIs improving data fetching efficiency by 40%',
          'Collaborated with cross-functional teams in agile environment',
          'Contributed to healthcare platform used by thousands of clinics worldwide'
        ]
      },
      {
        title: 'Freelance Developer',
        company: 'Various Clients',
        location: 'Remote',
        period: '2021 - 2023',
        achievements: [
          'Successfully delivered 15+ full-stack web applications',
          'Maintained 98% client satisfaction rate',
          'Specialized in React, Node.js, and modern web technologies'
        ]
      }
    ],
    education: [
      {
        degree: 'Computer Science & Engineering',
        institution: 'University of Business and Technology',
        location: 'Pristina, Kosovo',
        period: '2022 - Present',
        details: [
          'Focus on software engineering and modern development practices',
          'Active participation in coding competitions and tech events'
        ]
      }
    ],
    skills: {
      frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
      backend: ['Node.js', 'GraphQL', 'Prisma', 'Hasura', 'MongoDB'],
      tools: ['Git', 'VS Code', 'Figma', 'Jest', 'Firebase']
    },
    projects: [
      'Rent A Car System - Full-stack rental platform with real-time chat',
      'Learning Management System - Educational platform with course management',
      'E-commerce Platform - Modern online store with payment integration',
      'Healthcare System - Patient management and appointment booking'
    ]
  };

  const handleDownloadCV = async () => {
    await generateResumePDF(resumeData);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg border-b border-gray-200/20 dark:border-gray-700/20" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-2xl font-bold text-gray-900 dark:text-white">
              D<span className="text-primary">K</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 text-sm font-medium transition-colors relative group"
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </motion.button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 dark:text-gray-400"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 5 }}
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile actions */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                        whileTap={{ scale: 0.95 }}
                      >
                        <link.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                  <motion.button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center px-3 py-1 bg-primary text-white text-sm font-medium rounded-md"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Resume
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
