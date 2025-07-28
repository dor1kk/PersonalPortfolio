import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Palette, Globe, Settings, Wrench } from 'lucide-react';
import { cn } from '../lib/utils';
import EnhancedBackground from '../components/EnhancedBackground';
import FloatingElements from '../components/FloatingElements';
import ShiningBorder from '../components/ShiningBorder';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      skills: [
        { name: 'React', level: 90, icon: 'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png' },
        { name: 'Next.js', level: 85, icon: 'https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png' },
        { name: 'TypeScript', level: 80, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
        { name: 'JavaScript', level: 95, icon: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png' },
        { name: 'Tailwind CSS', level: 88, icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
        { name: 'HTML5', level: 95, icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/html-2752158-2284975.png?f=webp&w=256' },
        { name: 'CSS3', level: 90, icon: 'https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png?f=webp&w=256' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: Database,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      skills: [
        { name: 'Node.js', level: 85, icon: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png' },
        { name: 'GraphQL', level: 80, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png' },
        { name: 'Prisma', level: 75, icon: 'https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png' },
        { name: 'Hasura', level: 70, icon: 'https://docs.hasura.io/img/hasura_icon_black.svg' },
        { name: 'MongoDB', level: 75, icon: 'https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png' },
        { name: 'MySQL', level: 80, icon: 'https://miro.medium.com/v2/resize:fit:1400/1*dU4B5Jg2opVXRmGhiBYXdQ.png' },
        { name: 'PHP', level: 70, icon: 'https://cdn.iconscout.com/icon/free/png-256/php-2752101-2284918.png' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      skills: [
        { name: 'Git', level: 90, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png' },
        { name: 'VS Code', level: 95, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
        { name: 'Figma', level: 80, icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png' },
        { name: 'Jest', level: 75, icon: 'https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png' },
        { name: 'Firebase', level: 80, icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png' },
        { name: 'Ant Design', level: 85, icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' }
      ]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="skills" 
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl"
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
            <Settings className="w-4 h-4 mr-2" />
            Technical Skills
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Technologies I{' '}
            <span className="text-primary">Master</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my technical expertise across different domains
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              variants={itemVariants}
              onClick={() => setActiveCategory(key)}
              className={cn(
                "flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "border-2 hover:scale-105",
                activeCategory === key
                  ? `${category.bgColor} ${category.borderColor} ${category.color}`
                  : "bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-primary/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className={cn("w-5 h-5", activeCategory === key ? category.color : "")} />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}% Proficiency
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    className={cn(
                      "h-2 rounded-full",
                      skillCategories[activeCategory].color.replace('text-', 'bg-')
                    )}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                  className="absolute right-0 top-4 text-xs font-medium text-gray-600 dark:text-gray-400"
                >
                  {skill.level}%
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: '15+', label: 'Technologies Mastered', icon: Code },
            { number: '20+', label: 'Projects Completed', icon: Globe },
            { number: '2+', label: 'Years of Experience', icon: Settings }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
