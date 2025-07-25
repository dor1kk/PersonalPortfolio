import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, useMotionValue, useTransform } from 'framer-motion';
import { ArrowDown, Code, Database, Palette, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { cn, fadeInUp, fadeInLeft, fadeInRight } from '../lib/utils';
import profileImage from '../assets/Profile.jpg';
import MagneticButton from '../components/MagneticButton';
import AnimatedText, { TypewriterText } from '../components/AnimatedText';
import EnhancedBackground from '../components/EnhancedBackground';
import FloatingElements from '../components/FloatingElements';
import ShiningBorder from '../components/ShiningBorder';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // Mouse tracking for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skillIcons = [
    { icon: Code, color: 'text-blue-500', label: 'Frontend' },
    { icon: Database, color: 'text-green-500', label: 'Backend' },
    { icon: Palette, color: 'text-purple-500', label: 'Design' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dor1kk', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dorajet-kukaj-2611b2284/', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Mail, href: 'mailto:dorajetkukaj05@gmail.com', label: 'Email', color: 'hover:text-red-500' },
  ];

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <EnhancedBackground
        density={40}
        showStars={true}
        showGrid={true}
        variant="hero"
      />
      <FloatingElements section="hero" density="medium" />

      {/* Professional Shining Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate={controls}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Available for new opportunities
            </motion.div>

            {/* Main headline */}
            <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              <AnimatedText
                text="Hi, I'm"
                type="words"
                delay={0.5}
                className="inline-block mr-4"
              />
              <br className="block sm:hidden" />
              <span className="relative inline-block">
                <TypewriterText
                  text="Dorajet Kukaj"
                  speed={80}
                  delay={1.5}
                  className="text-primary"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 4 }}
                  className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
                />
                {/* Sparkle effects */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 4.5 }}
                  className="absolute -top-2 -right-2"
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
              </span>
            </div>

            {/* Subtitle with typing effect */}
            <motion.div
              variants={textVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Junior Software Engineer at{' '}
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="font-semibold text-primary"
              >
                Pabau Clinic Software
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about building scalable web applications with React, Next.js, and modern 
              backend technologies. I create digital experiences that make a difference in healthcare technology.
            </motion.p>

            {/* Skill indicators */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start"
            >
              {skillIcons.map((skill, index) => (
                <ShiningBorder
                  key={skill.label}
                  intensity="low"
                  color="primary"
                  variant="glow"
                  className="rounded-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <skill.icon className={cn("w-5 h-5", skill.color)} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.label}
                    </span>
                  </motion.div>
                </ShiningBorder>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
            >
              <MagneticButton
                className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">View My Work</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </MagneticButton>

              <MagneticButton
                className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={textVariants}
              className="flex space-x-6 justify-center lg:justify-start"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-3 text-gray-600 dark:text-gray-400 transition-all duration-300 rounded-lg",
                    "hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg",
                    link.color
                  )}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated border rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full"
              >
                <div className="w-full h-full rounded-full border-4 border-dashed border-primary/30"></div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-80 h-80 rounded-full"
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-purple-500/30 scale-110"></div>
              </motion.div>

              {/* Profile image */}
              <div className="relative w-80 h-80 rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Dorajet Kukaj"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg"
              >
                <Code className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg"
              >
                <Database className="w-8 h-8 text-green-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="cursor-pointer"
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ArrowDown className="w-6 h-6 text-gray-400 hover:text-primary transition-colors" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
