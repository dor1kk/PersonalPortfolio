import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
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
  Globe,
  Printer,
  Zap,
  Sparkles,
  Brain,
  Rocket,
  Eye,
  Target,
  Cpu,
  Database,
  Palette,
  Layers,
  Shield,
  Wifi
} from 'lucide-react';
import { cn } from '../lib/utils';
import MagneticButton from '../components/MagneticButton';
import AnimatedText, { TypewriterText } from '../components/AnimatedText';
import { generateResumePDF, printResume } from '../utils/pdfGenerator';

const ResumeFuturistic = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSection, setActiveSection] = useState('experience');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };

    if (ref.current) {
      ref.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const resumeData = {
    personal: {
      name: 'Dorajet Kukaj',
      title: 'Junior Software Engineer',
      tagline: 'Building the Future, One Line of Code at a Time',
      email: 'dorajetkukaj05@gmail.com',
      phone: '+383 XX XXX XXX',
      location: 'Pristina, Kosovo',
      website: 'dkmyportfolio.netlify.app',
      linkedin: 'linkedin.com/in/dorajet-kukaj',
      github: 'github.com/dor1kk'
    },
    summary: 'Passionate Junior Software Engineer with expertise in modern web technologies including React, Next.js, GraphQL, and cloud services. Currently contributing to large-scale healthcare technology at Pabau Clinic Software. Committed to building scalable, user-focused applications that make a meaningful impact in people\'s lives.',
    experience: [
      {
        title: 'Junior Software Engineer',
        company: 'Pabau Clinic Software',
        location: 'London, UK (Remote)',
        period: '2023 - Present',
        type: 'current',
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
        type: 'freelance',
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
        gpa: 'High Academic Performance',
        details: [
          'Focus on software engineering and modern development practices',
          'Active participation in coding competitions and tech events',
          'Leadership roles in student tech organizations'
        ]
      }
    ],
    skills: {
      frontend: [
        { name: 'React', level: 95, icon: Code },
        { name: 'Next.js', level: 90, icon: Layers },
        { name: 'TypeScript', level: 85, icon: Shield },
        { name: 'JavaScript', level: 98, icon: Zap },
        { name: 'Tailwind CSS', level: 92, icon: Palette },
        { name: 'HTML5', level: 98, icon: Globe },
        { name: 'CSS3', level: 95, icon: Sparkles }
      ],
      backend: [
        { name: 'Node.js', level: 88, icon: Database },
        { name: 'GraphQL', level: 85, icon: Wifi },
        { name: 'Prisma', level: 80, icon: Layers },
        { name: 'Hasura', level: 75, icon: Rocket },
        { name: 'MongoDB', level: 85, icon: Database },
        { name: 'MySQL', level: 90, icon: Database },
        { name: 'PHP', level: 75, icon: Code }
      ],
      tools: [
        { name: 'Git', level: 95, icon: Target },
        { name: 'VS Code', level: 98, icon: Code },
        { name: 'Figma', level: 85, icon: Palette },
        { name: 'Jest', level: 80, icon: Shield },
        { name: 'Firebase', level: 88, icon: Rocket },
        { name: 'Docker', level: 70, icon: Layers }
      ]
    },
    projects: [
      { 
        name: 'Rent A Car System', 
        description: 'Full-stack rental platform with real-time chat',
        tech: ['React', 'Firebase', 'Tailwind'],
        impact: '1000+ users'
      },
      { 
        name: 'Learning Management System', 
        description: 'Educational platform with course management',
        tech: ['React', 'Node.js', 'MongoDB'],
        impact: '500+ students'
      },
      { 
        name: 'E-commerce Platform', 
        description: 'Modern online store with payment integration',
        tech: ['React', 'Ant Design', 'Node.js'],
        impact: '100+ products'
      },
      { 
        name: 'Healthcare System', 
        description: 'Patient management and appointment booking',
        tech: ['React', 'Sanity', 'Tailwind'],
        impact: '50+ doctors'
      }
    ]
  };

  const sections = [
    { key: 'experience', label: 'Experience', icon: Briefcase, color: 'from-blue-500 to-cyan-500' },
    { key: 'education', label: 'Education', icon: GraduationCap, color: 'from-green-500 to-emerald-500' },
    { key: 'skills', label: 'Skills', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { key: 'projects', label: 'Projects', icon: Star, color: 'from-orange-500 to-red-500' }
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

  const handleDownload = async () => {
    await generateResumePDF(resumeData);
  };

  const handlePrint = () => {
    printResume();
  };

  const glowX = useTransform(mouseX, [-50, 50], [-10, 10]);
  const glowY = useTransform(mouseY, [-50, 50], [-10, 10]);

  return (
    <section 
      id="resume" 
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-black dark:via-gray-900 dark:to-purple-900 relative overflow-hidden min-h-screen"
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating Orbs */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full"
            animate={{
              y: [Math.random() * window.innerHeight, -100],
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Gradient Overlays */}
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: glowX, y: glowY }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 rounded-full text-sm font-medium mb-8 shadow-lg shadow-cyan-500/25"
          >
            <Rocket className="w-5 h-5 mr-2 animate-pulse" />
            Next-Generation Resume
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <TypewriterText
              text="Professional Resume"
              speed={60}
              className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            />
            
            {/* Holographic Effect */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-lg blur-xl"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of professional presentations with this interactive, 
            <span className="text-cyan-400 font-semibold"> AI-enhanced</span> resume showcase
          </motion.p>
        </motion.div>

        {/* Main Resume Content */}
        <div id="resume-content" className="grid lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Personal Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <motion.div
              variants={itemVariants}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl shadow-cyan-500/10 sticky top-8"
            >
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 rounded-3xl blur-xl opacity-50"></div>
              
              {/* Profile Header */}
              <div className="relative text-center mb-8">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                  }}
                  className="relative w-40 h-40 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-bold text-white shadow-xl shadow-cyan-500/30 perspective-1000"
                >
                  <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                    DK
                  </span>
                  
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-cyan-400/50 rounded-full"
                  />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-cyan-400/20 rounded-full"
                  />
                </motion.div>

                <motion.h3
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ textShadow: ["0 0 10px #06b6d4", "0 0 20px #3b82f6", "0 0 10px #06b6d4"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {resumeData.personal.name}
                </motion.h3>
                
                <motion.p
                  className="text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold mb-2"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {resumeData.personal.title}
                </motion.p>
                
                <TypewriterText
                  text={resumeData.personal.tagline}
                  speed={50}
                  delay={1}
                  className="text-sm text-gray-400 italic"
                />
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: Mail, value: resumeData.personal.email, href: `mailto:${resumeData.personal.email}`, color: 'text-red-400' },
                  { icon: Phone, value: resumeData.personal.phone, href: `tel:${resumeData.personal.phone}`, color: 'text-green-400' },
                  { icon: MapPin, value: resumeData.personal.location, color: 'text-orange-400' },
                  { icon: Globe, value: resumeData.personal.website, href: `https://${resumeData.personal.website}`, color: 'text-blue-400' },
                  { icon: Linkedin, value: resumeData.personal.linkedin, href: `https://${resumeData.personal.linkedin}`, color: 'text-cyan-400' },
                  { icon: Github, value: resumeData.personal.github, href: `https://${resumeData.personal.github}`, color: 'text-purple-400' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 group hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className={cn("flex-shrink-0 p-2 rounded-lg bg-gray-700/50 group-hover:scale-110 transition-transform", contact.color)}>
                      <contact.icon className="w-4 h-4" />
                    </div>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors flex-1 group-hover:text-cyan-300"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-300 flex-1 group-hover:text-cyan-300">
                        {contact.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="space-y-3">
                <MagneticButton
                  onClick={handleDownload}
                  className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <Download className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Download PDF</span>
                </MagneticButton>
                
                <MagneticButton
                  onClick={handlePrint}
                  className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 px-6 rounded-xl font-medium hover:shadow-lg hover:shadow-gray-500/30 transition-all duration-300 flex items-center justify-center border border-gray-600/50 hover:border-gray-500"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print Resume
                </MagneticButton>
              </div>

              {/* Status Indicator */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 flex items-center justify-center space-x-2 text-green-400 text-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for Opportunities</span>
              </motion.div>
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
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-8 shadow-xl shadow-blue-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
              
              <h3 className="relative text-2xl font-bold text-white mb-4 flex items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="mr-3 p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                >
                  <Eye className="w-6 h-6 text-white" />
                </motion.div>
                Professional Summary
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
                />
              </h3>
              
              <p className="relative text-gray-300 leading-relaxed">
                {resumeData.summary}
              </p>
            </motion.div>

            {/* Section Navigation */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-8"
            >
              {sections.map((section) => (
                <MagneticButton
                  key={section.key}
                  onClick={() => setActiveSection(section.key)}
                  className={cn(
                    "flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group",
                    activeSection === section.key
                      ? `bg-gradient-to-r ${section.color} text-white shadow-lg`
                      : "bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
                  )}
                >
                  <motion.div
                    animate={activeSection === section.key ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <section.icon className="w-5 h-5" />
                  </motion.div>
                  <span>{section.label}</span>
                  
                  {activeSection === section.key && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl"
                    />
                  )}
                </MagneticButton>
              ))}
            </motion.div>

            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl"></div>
                
                {activeSection === 'experience' && (
                  <div className="relative space-y-8">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-8 flex items-center"
                      animate={{ textShadow: ["0 0 10px #06b6d4", "0 0 20px #3b82f6", "0 0 10px #06b6d4"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Briefcase className="w-8 h-8 mr-3 text-cyan-400" />
                      Professional Experience
                    </motion.h3>
                    
                    {resumeData.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="relative p-6 bg-gradient-to-r from-gray-800/30 to-gray-900/30 rounded-xl border border-gray-700/30 hover:border-cyan-500/50 transition-all duration-300 group"
                      >
                        {/* Experience Type Indicator */}
                        <div className={cn(
                          "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium",
                          exp.type === 'current' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                          exp.type === 'freelance' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        )}>
                          {exp.type === 'current' ? '🟢 Current' : exp.type === 'freelance' ? '💼 Freelance' : '📈 Previous'}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {exp.title}
                            </h4>
                            <p className="text-cyan-400 font-medium">{exp.company} • {exp.location}</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mt-2 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                              className="flex items-start text-gray-300 group-hover:text-gray-200 transition-colors"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                              />
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === 'education' && (
                  <div className="relative space-y-8">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-8 flex items-center"
                      animate={{ textShadow: ["0 0 10px #10b981", "0 0 20px #059669", "0 0 10px #10b981"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <GraduationCap className="w-8 h-8 mr-3 text-green-400" />
                      Education & Learning
                    </motion.h3>
                    
                    {resumeData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="relative p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20 hover:border-green-400/50 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {edu.degree}
                            </h4>
                            <p className="text-green-400 font-medium mb-1">{edu.institution} • {edu.location}</p>
                            <p className="text-sm text-green-300">{edu.gpa}</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mt-2 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        
                        <ul className="space-y-2">
                          {edu.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.3 }}
                              className="flex items-start text-gray-300"
                            >
                              <Star className="w-4 h-4 text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === 'skills' && (
                  <div className="relative space-y-8">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-8 flex items-center"
                      animate={{ textShadow: ["0 0 10px #a855f7", "0 0 20px #ec4899", "0 0 10px #a855f7"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Brain className="w-8 h-8 mr-3 text-purple-400" />
                      Technical Arsenal
                    </motion.h3>
                    
                    {Object.entries(resumeData.skills).map(([category, skills], categoryIndex) => (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                        className="space-y-4"
                      >
                        <h4 className="text-xl font-semibold text-white capitalize flex items-center">
                          <Cpu className={cn(
                            "w-5 h-5 mr-2",
                            category === 'frontend' ? 'text-blue-400' :
                            category === 'backend' ? 'text-green-400' :
                            'text-purple-400'
                          )} />
                          {category} Development
                        </h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                                duration: 0.4 
                              }}
                              whileHover={{ scale: 1.05, y: -5 }}
                              className="p-4 bg-gray-800/40 rounded-lg border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-3">
                                  <skill.icon className={cn(
                                    "w-5 h-5 group-hover:scale-110 transition-transform",
                                    category === 'frontend' ? 'text-blue-400' :
                                    category === 'backend' ? 'text-green-400' :
                                    'text-purple-400'
                                  )} />
                                  <span className="font-medium text-white">{skill.name}</span>
                                </div>
                                <span className="text-sm text-gray-400">{skill.level}%</span>
                              </div>
                              
                              <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ 
                                    delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5, 
                                    duration: 1,
                                    ease: "easeOut"
                                  }}
                                  className={cn(
                                    "h-full rounded-full bg-gradient-to-r",
                                    category === 'frontend' ? 'from-blue-400 to-cyan-400' :
                                    category === 'backend' ? 'from-green-400 to-emerald-400' :
                                    'from-purple-400 to-pink-400'
                                  )}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeSection === 'projects' && (
                  <div className="relative space-y-8">
                    <motion.h3
                      className="text-3xl font-bold text-white mb-8 flex items-center"
                      animate={{ textShadow: ["0 0 10px #f97316", "0 0 20px #dc2626", "0 0 10px #f97316"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-8 h-8 mr-3 text-orange-400" />
                      Featured Projects
                    </motion.h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {resumeData.projects.map((project, index) => (
                        <motion.div
                          key={project.name}
                          initial={{ opacity: 0, y: 30, rotateX: -15 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{ delay: index * 0.2, duration: 0.6 }}
                          whileHover={{ y: -10, rotateX: 5 }}
                          className="p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-300 group perspective-1000"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors">
                                {project.name}
                              </h4>
                              <p className="text-sm text-gray-400 mt-1">{project.description}</p>
                            </div>
                            <motion.div
                              animate={{ rotate: [0, 10, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="text-orange-400"
                            >
                              <Rocket className="w-5 h-5" />
                            </motion.div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + techIndex * 0.1 + 0.3 }}
                                className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded-md text-xs font-medium border border-orange-500/30"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-400">Impact:</span>
                            <span className="text-sm font-medium text-orange-400">{project.impact}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* CSS for Grid Pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ResumeFuturistic;
