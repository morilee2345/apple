import React, { ReactNode } from 'react';
import { motion } from 'motion/react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
