import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Briefcase, GraduationCap, Heart, Coffee, Target } from 'lucide-react';
import { cn, fadeInUp, staggerContainer } from '../lib/utils';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2+", label: "Years Experience", icon: Briefcase },
    { number: "15+", label: "Projects Built", icon: Code2 },
    { number: "3+", label: "Technologies", icon: GraduationCap },
    { number: "100%", label: "Passion", icon: Heart },
  ];

  const highlights = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Passionate about building healthcare technology that makes a real difference in people's lives."
    },
    {
      icon: Code2,
      title: "Full-Stack Expertise",
      description: "Experienced in React, Next.js, GraphQL, Prisma, and Hasura for building scalable applications."
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges and turning innovative ideas into functional, user-friendly solutions."
    }
  ];

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

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
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
            <GraduationCap className="w-4 h-4 mr-2" />
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Crafting Digital Experiences with{' '}
            <span className="text-primary">Passion</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Junior Software Engineer with a focus on building impactful healthcare technology solutions
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                My Journey in Tech
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Currently working as a Junior Software Engineer at <span className="font-semibold text-primary">Pabau Clinic Software</span>, 
                  where I contribute to a large-scale health-tech platform that serves thousands of clinics worldwide.
                </p>
                
                <p>
                  My expertise spans across modern technologies including <span className="font-semibold">React, Next.js, GraphQL, Prisma, and Hasura</span>. 
                  I'm passionate about creating seamless user experiences and building robust backend systems that scale.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  or working on personal projects that challenge my skills and creativity.
                </p>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className={cn(
                  "p-8 rounded-2xl bg-gradient-to-br border border-gray-200 dark:border-gray-700",
                  "from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
                  "shadow-lg hover:shadow-xl transition-all duration-300",
                  "group cursor-pointer"
                )}
              >
                <div className="text-center space-y-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Currently Working On
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Building scalable healthcare solutions at Pabau, while continuously learning and exploring 
              new technologies to stay at the forefront of software development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Healthcare Tech', 'React Ecosystem', 'GraphQL APIs', 'Modern UI/UX', 'Performance Optimization'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
