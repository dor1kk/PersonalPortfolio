import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ 
  text, 
  className = '', 
  type = 'words', // 'words', 'chars', 'lines'
  delay = 0,
  duration = 0.6,
  ...props 
}) => {
  const splitText = () => {
    switch (type) {
      case 'chars':
        return text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.03,
              ease: "easeOut"
            }}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ));
      
      case 'words':
        return text.split(' ').map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.1,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ));
      
      case 'lines':
        return text.split('\n').map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration,
              delay: delay + i * 0.2,
              ease: "easeOut"
            }}
          >
            {line}
          </motion.div>
        ));
      
      default:
        return text;
    }
  };

  return (
    <div className={className} {...props}>
      {splitText()}
    </div>
  );
};

// Typewriter effect component
export const TypewriterText = ({ 
  text, 
  className = '', 
  speed = 50,
  delay = 0,
  cursor = true 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + i * (speed / 1000),
            duration: 0
          }}
        >
          {char}
        </motion.span>
      ))}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="ml-1"
        >
          |
        </motion.span>
      )}
    </motion.div>
  );
};

export default AnimatedText;
