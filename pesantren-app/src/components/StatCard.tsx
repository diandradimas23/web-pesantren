import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
    >
      {icon && (
        <div className="flex justify-center mb-4 text-sage-600">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold text-sage-700 mb-2">{number}</div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  );
};

export default StatCard;
