import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import EnhancedBackground from '../components/EnhancedBackground';
import FloatingElements from '../components/FloatingElements';
import ShiningBorder from '../components/ShiningBorder';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      type: 'work',
      title: 'Junior Software Engineer',
      company: 'Pabau Clinic Software',
      location: 'London, UK (Remote)',
      period: '2023 - Present',
      description: 'Contributing to a large-scale health-tech platform serving thousands of clinics worldwide. Working with modern technologies to build scalable solutions for healthcare management.',
      technologies: ['React', 'Next.js', 'GraphQL', 'Prisma', 'Hasura', 'TypeScript'],
      achievements: [
        'Developed and maintained critical frontend components used by 10,000+ users',
        'Implemented GraphQL APIs improving data fetching efficiency by 40%',
        'Collaborated with cross-functional teams in an agile environment',
        'Participated in code reviews and maintained high coding standards'
      ],
      link: 'https://www.pabau.com',
      icon: Briefcase,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      type: 'education',
      title: 'Computer Science & Engineering',
      company: 'University of Business and Technology',
      location: 'Pristina, Kosovo',
      period: '2022 - Present',
      description: 'Pursuing a comprehensive education in computer science with focus on software engineering, algorithms, and modern development practices.',
      technologies: ['Java', 'Python', 'Database Systems', 'Software Engineering', 'Data Structures'],
      achievements: [
        'Maintained high academic performance with focus on practical projects',
        'Completed multiple software development projects',
        'Active participation in coding competitions and tech events',
        'Leadership roles in student tech organizations'
      ],
      icon: GraduationCap,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20'
    },
    {
      type: 'work',
      title: 'Freelance Developer',
      company: 'Various Clients',
      location: 'Remote',
      period: '2021 - 2023',
      description: 'Worked on diverse web development projects, from e-commerce platforms to learning management systems, helping clients bring their digital visions to life.',
      technologies: ['React', 'Node.js', 'MongoDB', 'PHP', 'WordPress', 'Tailwind CSS'],
      achievements: [
        'Successfully completed 15+ client projects',
        'Built full-stack applications from conception to deployment',
        'Maintained 98% client satisfaction rate',
        'Developed expertise in multiple technology stacks'
      ],
      icon: Briefcase,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="experience" 
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
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
            <Calendar className="w-4 h-4 mr-2" />
            Career Journey
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            My Professional{' '}
            <span className="text-primary">Journey</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            From freelance projects to enterprise healthcare solutions - here's my growth story
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-green-500 transform md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.3 }}
                className={cn(
                  "relative flex items-start",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                )}
              >
                {/* Timeline node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                  className={cn(
                    "absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1",
                    "w-8 h-8 rounded-full border-4 border-white dark:border-gray-900",
                    "flex items-center justify-center z-10",
                    exp.bgColor
                  )}
                >
                  <exp.icon className={cn("w-4 h-4", exp.color)} />
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={cn(
                    "ml-16 md:ml-0 md:w-5/12",
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  )}
                >
                  <div className={cn(
                    "p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2",
                    "hover:shadow-xl transition-all duration-300",
                    exp.borderColor
                  )}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-primary font-semibold mb-2">
                          <span>{exp.company}</span>
                          {exp.link && (
                            <a 
                              href={exp.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-primary/80 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    {/* Key Achievements */}
                    <div className="mb-4">
                      <h4 className="flex items-center font-semibold text-gray-900 dark:text-white mb-2">
                        <Award className="w-4 h-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              "px-3 py-1 text-xs font-medium rounded-full",
                              exp.bgColor,
                              exp.color,
                              "border",
                              exp.borderColor
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
