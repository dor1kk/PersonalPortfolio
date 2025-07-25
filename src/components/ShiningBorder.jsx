import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const ShiningBorder = ({ 
  children, 
  className = '', 
  intensity = 'medium', // 'low', 'medium', 'high'
  color = 'primary', // 'primary', 'blue', 'purple', 'cyan', 'gradient'
  variant = 'glow' // 'glow', 'shine', 'pulse', 'rainbow'
}) => {
  const getIntensityStyles = () => {
    switch (intensity) {
      case 'low':
        return 'opacity-30 blur-sm';
      case 'high':
        return 'opacity-80 blur-lg';
      default:
        return 'opacity-50 blur-md';
    }
  };

  const getColorStyles = () => {
    switch (color) {
      case 'blue':
        return 'from-blue-400 to-blue-600';
      case 'purple':
        return 'from-purple-400 to-purple-600';
      case 'cyan':
        return 'from-cyan-400 to-cyan-600';
      case 'gradient':
        return 'from-primary via-purple-500 to-pink-500';
      default:
        return 'from-primary to-blue-500';
    }
  };

  const getVariantAnimation = () => {
    switch (variant) {
      case 'shine':
        return {
          background: [
            'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
            'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'
          ],
          x: ['-100%', '200%']
        };
      case 'pulse':
        return {
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.02, 1]
        };
      case 'rainbow':
        return {
          background: [
            'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)',
            'linear-gradient(45deg, #9400d3, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082)'
          ]
        };
      default: // glow
        return {
          opacity: [0.4, 0.8, 0.4],
          boxShadow: [
            '0 0 20px rgba(6, 182, 212, 0.3)',
            '0 0 40px rgba(6, 182, 212, 0.6)',
            '0 0 20px rgba(6, 182, 212, 0.3)'
          ]
        };
    }
  };

  return (
    <div className={cn("relative group", className)}>
      {/* Shining Border Effect */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-lg bg-gradient-to-r",
          getColorStyles(),
          getIntensityStyles()
        )}
        animate={getVariantAnimation()}
        transition={{
          duration: variant === 'shine' ? 2 : 3,
          repeat: Infinity,
          ease: variant === 'shine' ? "linear" : "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ShiningBorder;
