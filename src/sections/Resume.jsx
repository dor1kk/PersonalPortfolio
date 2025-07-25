import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Download, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  Star,
  Github,
  Linkedin,
  Globe
} from 'lucide-react';
import { cn } from '../lib/utils';
import MagneticButton from '../components/MagneticButton';
import AnimatedText from '../components/AnimatedText';

const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState('experience');

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
    summary: 'Passionate Junior Software Engineer with expertise in modern web technologies including React, Next.js, GraphQL, and cloud services. Currently contributing to large-scale healthcare technology at Pabau Clinic Software. Committed to building scalable, user-focused applications that make a meaningful impact.',
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
          'Specialized in React, Node.js, and modern web technologies',
          'Built e-commerce platforms, learning management systems, and business websites'
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
          'Active participation in coding competitions and tech events',
          'Leadership roles in student tech organizations'
        ]
      }
    ],
    skills: {
      frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
      backend: ['Node.js', 'GraphQL', 'Prisma', 'Hasura', 'MongoDB', 'MySQL', 'PHP'],
      tools: ['Git', 'VS Code', 'Figma', 'Jest', 'Firebase', 'Docker']
    },
    projects: [
      'Rent A Car System - Full-stack rental platform with real-time chat',
      'Learning Management System - Educational platform with course management',
      'E-commerce Platform - Modern online store with payment integration',
      'Healthcare System - Patient management and appointment booking',
      'Music Streaming App - Audio platform with playlist management'
    ]
  };

  const sections = [
    { key: 'experience', label: 'Experience', icon: Briefcase },
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'skills', label: 'Skills', icon: Code },
    { key: 'projects', label: 'Projects', icon: Star }
  ];

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

  const handleDownload = () => {
    // Create a printable version
    window.print();
  };

  return (
    <section 
      id="resume" 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
            <User className="w-4 h-4 mr-2" />
            Professional Resume
          </motion.div>

          <AnimatedText
            text="Professional Resume"
            type="words"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          />

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive overview of my professional journey, skills, and achievements
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 sticky top-8"
            >
              {/* Profile Header */}
              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white shadow-lg"
                >
                  DK
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {resumeData.personal.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {resumeData.personal.title}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Mail, value: resumeData.personal.email, href: `mailto:${resumeData.personal.email}` },
                  { icon: Phone, value: resumeData.personal.phone, href: `tel:${resumeData.personal.phone}` },
                  { icon: MapPin, value: resumeData.personal.location },
                  { icon: Globe, value: resumeData.personal.website, href: `https://${resumeData.personal.website}` },
                  { icon: Linkedin, value: resumeData.personal.linkedin, href: `https://${resumeData.personal.linkedin}` },
                  { icon: Github, value: resumeData.personal.github, href: `https://${resumeData.personal.github}` }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-4 h-4 text-primary" />
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors flex-1"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                        {contact.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Download Button */}
              <MagneticButton
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            {/* Summary */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {resumeData.summary}
              </p>
            </motion.div>

            {/* Section Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-8"
            >
              {sections.map((section) => (
                <MagneticButton
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                    activeSection === section.key
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-primary/30"
                  )}
                >
                  <section.icon className="w-4 h-4" />
                  <span>{section.label}</span>
                </MagneticButton>
              ))}
            </motion.div>

            {/* Dynamic Content */}
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8"
            >
              {activeSection === 'experience' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Briefcase className="w-6 h-6 mr-3 text-primary" />
                    Professional Experience
                  </h3>
                  {resumeData.experience.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="border-l-4 border-primary pl-6 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h4>
                        <span className="text-sm text-primary font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-primary font-medium mb-1">
                        {exp.company} • {exp.location}
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === 'education' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                    Education
                  </h3>
                  {resumeData.education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="border-l-4 border-green-500 pl-6"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <span className="text-sm text-green-500 font-medium">
                          {edu.period}
                        </span>
                      </div>
                      <div className="text-green-500 font-medium mb-3">
                        {edu.institution} • {edu.location}
                      </div>
                      <ul className="space-y-2">
                        {edu.details.map((detail, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-3 text-primary" />
                    Technical Skills
                  </h3>
                  {Object.entries(resumeData.skills).map(([category, skills], index) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                        {category} Development
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Star className="w-6 h-6 mr-3 text-primary" />
                    Key Projects
                  </h3>
                  <div className="space-y-4">
                    {resumeData.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-4 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{project}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
