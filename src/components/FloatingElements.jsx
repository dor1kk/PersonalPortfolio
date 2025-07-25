import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Zap, Star, Sparkles, Heart, Target } from 'lucide-react';

const FloatingElements = ({ section = 'default', density = 'medium' }) => {
  const getElementsForSection = () => {
    switch (section) {
      case 'hero':
        return [
          { icon: Code, color: 'text-blue-400', size: 'w-6 h-6' },
          { icon: Zap, color: 'text-yellow-400', size: 'w-5 h-5' },
          { icon: Star, color: 'text-purple-400', size: 'w-4 h-4' },
          { icon: Sparkles, color: 'text-pink-400', size: 'w-5 h-5' },
        ];
      case 'about':
        return [
          { icon: Heart, color: 'text-red-400', size: 'w-5 h-5' },
          { icon: Target, color: 'text-green-400', size: 'w-4 h-4' },
          { icon: Star, color: 'text-yellow-400', size: 'w-4 h-4' },
        ];
      case 'skills':
        return [
          { icon: Code, color: 'text-blue-400', size: 'w-5 h-5' },
          { icon: Database, color: 'text-green-400', size: 'w-5 h-5' },
          { icon: Palette, color: 'text-purple-400', size: 'w-5 h-5' },
        ];
      case 'projects':
        return [
          { icon: Star, color: 'text-yellow-400', size: 'w-5 h-5' },
          { icon: Zap, color: 'text-cyan-400', size: 'w-4 h-4' },
          { icon: Sparkles, color: 'text-pink-400', size: 'w-4 h-4' },
        ];
      default:
        return [
          { icon: Sparkles, color: 'text-primary', size: 'w-4 h-4' },
          { icon: Star, color: 'text-yellow-400', size: 'w-4 h-4' },
        ];
    }
  };

  const getDensityCount = () => {
    switch (density) {
      case 'low': return 3;
      case 'high': return 8;
      default: return 5;
    }
  };

  const elements = getElementsForSection();
  const elementCount = getDensityCount();

  const floatingElements = Array.from({ length: elementCount }, (_, i) => {
    const element = elements[i % elements.length];
    return {
      id: i,
      ...element,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 8,
      delay: Math.random() * 3,
      direction: Math.random() > 0.5 ? 1 : -1,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} opacity-30 dark:opacity-50`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20 * element.direction, 0],
            x: [0, 10 * element.direction, 0],
            rotate: [0, 180 * element.direction, 360 * element.direction],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <element.icon className={element.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
