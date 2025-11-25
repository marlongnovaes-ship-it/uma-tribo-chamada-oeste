import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingObjectProps {
  emoji: string;
  delay?: number;
  duration?: number;
}

export default function FloatingObject({ emoji, delay = 0, duration = 4 }: FloatingObjectProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Aparecer após um delay aleatório
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="floating-object"
      initial={{ 
        y: 0, 
        x: 0,
        opacity: 0,
        scale: 0.5,
        rotate: 0
      }}
      animate={{ 
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
        rotate: [0, 360]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatDelay: Math.random() * 5 + 3,
        ease: 'easeInOut'
      }}
      style={{
        position: 'fixed',
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`,
        fontSize: '2rem',
        pointerEvents: 'none',
        zIndex: 1,
        filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.5))',
      }}
    >
      {emoji}
    </motion.div>
  );
}
