import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepTitles: string[];
}

export function ProgressBar({ currentStep, totalSteps, stepTitles }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Startup Journey</h3>
        <span className="text-sm text-gray-500">{currentStep} of {totalSteps} completed</span>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        
        <div className="flex justify-between mt-3">
          {stepTitles.map((title, index) => (
            <div
              key={index}
              className={`text-xs ${
                index < currentStep ? 'text-primary-600 font-medium' : 'text-gray-400'
              }`}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}