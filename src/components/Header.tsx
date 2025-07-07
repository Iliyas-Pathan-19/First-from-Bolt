import React from 'react';
import { Lightbulb, Users, Target, Rocket } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MyFirstStartup</h1>
              <p className="text-sm text-gray-500">Idea to Reality</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-primary-600">
              <Lightbulb className="h-4 w-4" />
              <span className="text-sm font-medium">Ideation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Target className="h-4 w-4" />
              <span className="text-sm">Research</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Users className="h-4 w-4" />
              <span className="text-sm">Build</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <Rocket className="h-4 w-4" />
              <span className="text-sm">Launch</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}