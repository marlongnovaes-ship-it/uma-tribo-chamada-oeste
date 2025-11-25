import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TelekineticEffectProps {
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
  autoFloat?: boolean;
  className?: string;
}

export default function TelekineticEffect({ 
  children, 
  intensity = 'medium',
  autoFloat = false,
  className = '' 
}: TelekineticEffectProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Configurações de intensidade
  const intensityConfig = {
    low: { float: 10, rotate: 3, scale: 1.02 },
    medium: { float: 20, rotate: 5, scale: 1.05 },
    high: { float: 30, rotate: 8, scale: 1.08 }
  };

  const config = intensityConfig[intensity];

  // Auto-float aleatório
  useEffect(() => {
    if (autoFloat) {
      const interval = setInterval(() => {
        setIsFloating(true);
        setTimeout(() => setIsFloating(false), 2000);
      }, Math.random() * 10000 + 5000); // Entre 5-15 segundos

      return () => clearInterval(interval);
    }
  }, [autoFloat]);

  const handleClick = () => {
    setIsFloating(true);
    setTimeout(() => setIsFloating(false), 2000);
  };

  return (
    <motion.div
      ref={elementRef}
      className={`telekinetic-element ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      animate={{
        y: isHovered || isFloating ? -config.float : 0,
        rotate: isHovered || isFloating ? config.rotate : 0,
        scale: isHovered || isFloating ? config.scale : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }}
      style={{
        cursor: 'pointer',
        position: 'relative',
        filter: isHovered || isFloating ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))' : 'none',
      }}
    >
      {/* Aura azul do poder */}
      {(isHovered || isFloating) && (
        <motion.div
          className="telekinetic-aura"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            inset: -10,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: -1,
          }}
        />
      )}

      {/* Partículas de energia */}
      {(isHovered || isFloating) && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="energy-particle"
              initial={{ 
                opacity: 0, 
                scale: 0,
                x: 0,
                y: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: Math.cos((i * Math.PI * 2) / 6) * 40,
                y: Math.sin((i * Math.PI * 2) / 6) * 40,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 8,
                height: 8,
                background: 'rgba(59, 130, 246, 0.8)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />
          ))}
        </>
      )}

      {/* Ondas de energia */}
      {isFloating && (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`wave-${i}`}
              className="energy-wave"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              style={{
                position: 'absolute',
                inset: 0,
                border: '2px solid rgba(59, 130, 246, 0.6)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }}
            />
          ))}
        </>
      )}

      {children}
    </motion.div>
  );
}
