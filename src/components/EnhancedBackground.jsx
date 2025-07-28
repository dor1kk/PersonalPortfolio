import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EnhancedBackground = ({ 
  density = 50, 
  showStars = true, 
  showGrid = false, 
  variant = 'default' // 'hero', 'light', 'dark', 'professional'
}) => {
  const particles = Array.from({ length: density }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 3,
  }));

  const getVariantStyles = () => {
    switch (variant) {
      case 'hero':
        return {
          particles: 'bg-primary/30 dark:bg-primary/40',
          stars: 'text-yellow-400',
          orbs: [
            'from-primary/20 to-blue-500/20',
            'from-purple-500/20 to-pink-500/20',
            'from-cyan-400/15 to-blue-500/15'
          ]
        };
      case 'light':
        return {
          particles: 'bg-primary/20 dark:bg-primary/30',
          stars: 'text-primary',
          orbs: [
            'from-primary/10 to-blue-500/10',
            'from-purple-500/10 to-pink-500/10'
          ]
        };
      case 'dark':
        return {
          particles: 'bg-cyan-400/40 dark:bg-cyan-400/50',
          stars: 'text-cyan-400',
          orbs: [
            'from-cyan-500/20 to-blue-500/20',
            'from-purple-500/20 to-pink-500/20',
            'from-blue-500/15 to-indigo-500/15'
          ]
        };
      case 'professional':
        return {
          particles: 'bg-gray-400/20 dark:bg-primary/30',
          stars: 'text-gray-400 dark:text-primary',
          orbs: [
            'from-gray-400/10 to-gray-500/10 dark:from-primary/10 dark:to-blue-500/10',
            'from-blue-500/10 to-indigo-500/10'
          ]
        };
      default:
        return {
          particles: 'bg-primary/20 dark:bg-primary/30',
          stars: 'text-primary',
          orbs: [
            'from-primary/15 to-blue-500/15',
            'from-purple-500/15 to-pink-500/15'
          ]
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      {showGrid && (
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      )}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${styles.particles} rounded-full`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, particle.opacity, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Twinkling Stars */}
      {showStars && stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className={`absolute ${styles.stars}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.2, 0.5],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}

      {/* Large Floating Orbs */}
      {styles.orbs.map((gradient, index) => (
        <motion.div
          key={`orb-${index}`}
          className={`absolute w-96 h-96 bg-gradient-to-r ${gradient} rounded-full blur-3xl`}
          style={{
            left: `${20 + index * 30}%`,
            top: `${10 + index * 25}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Shining Effects */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* CSS for Grid Pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default EnhancedBackground;
