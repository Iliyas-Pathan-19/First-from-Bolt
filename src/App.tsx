import React from 'react';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { BusinessNameGenerator } from './components/BusinessNameGenerator';
import { ToolsOverview } from './components/ToolsOverview';

const journeySteps = [
  'Ideation',
  'Research', 
  'Planning',
  'Building',
  'Launch'
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Your Startup Journey
          </h1>
          <p className="text-lg text-gray-600">
            Let's turn your idea into reality, step by step. Start by generating the perfect name for your business.
          </p>
        </div>

        <ProgressBar 
          currentStep={1} 
          totalSteps={5} 
          stepTitles={journeySteps}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BusinessNameGenerator />
          </div>
          
          <div className="lg:col-span-1">
            <ToolsOverview />
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Your Startup Journey Awaits</h2>
          <p className="text-primary-100 mb-6">
            Every successful startup begins with a great name. Once you've found yours, 
            we'll guide you through market research, business planning, MVP development, 
            and everything else you need to launch successfully.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">AI-Powered Tools</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Step-by-Step Guidance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Community Support</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;