import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, RefreshCw, Check, ExternalLink, Copy } from 'lucide-react';
import { generateBusinessNames } from '../utils/nameGenerator';
import { GeneratedName } from '../types';

export function BusinessNameGenerator() {
  const [idea, setIdea] = useState('');
  const [industry, setIndustry] = useState('Technology');
  const [generatedNames, setGeneratedNames] = useState<GeneratedName[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedNames, setSelectedNames] = useState<Set<string>>(new Set());

  const industries = [
    'Technology', 'E-commerce', 'Health & Fitness', 'Education',
    'Finance', 'Food & Beverage', 'Travel', 'Entertainment'
  ];

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    
    setIsGenerating(true);
    // Simulate API delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const names = generateBusinessNames(idea, industry);
    setGeneratedNames(names);
    setIsGenerating(false);
  };

  const toggleNameSelection = (nameId: string) => {
    const newSelected = new Set(selectedNames);
    if (newSelected.has(nameId)) {
      newSelected.delete(nameId);
    } else {
      newSelected.add(nameId);
    }
    setSelectedNames(newSelected);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Business Name Generator</h2>
          <p className="text-gray-600">AI-powered names that are memorable and domain-ready</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Describe your business idea
          </label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g., A mobile app that helps people find local food trucks in real-time"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Industry
          </label>
          <select
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {industries.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!idea.trim() || isGenerating}
          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" />
              <span>Generating Names...</span>
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              <span>Generate Names</span>
            </>
          )}
        </button>
      </div>

      <AnimatePresence>
        {generatedNames.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Generated Names</h3>
              <span className="text-sm text-gray-500">
                {selectedNames.size} selected
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generatedNames.map((name, index) => (
                <motion.div
                  key={name.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedNames.has(name.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => toggleNameSelection(name.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-gray-900">{name.name}</h4>
                        {selectedNames.has(name.id) && (
                          <Check className="h-4 w-4 text-primary-500" />
                        )}
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-sm ${name.available ? 'text-green-600' : 'text-red-500'}`}>
                          {name.domain}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          name.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {name.available ? 'Available' : 'Taken'}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(name.name);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://www.namecheap.com/domains/registration/results/?domain=${name.domain}`, '_blank');
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{name.description}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                    name.category === 'creative' ? 'bg-purple-100 text-purple-700' :
                    name.category === 'descriptive' ? 'bg-blue-100 text-blue-700' :
                    name.category === 'abstract' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {name.category}
                  </span>
                </motion.div>
              ))}
            </div>

            {selectedNames.size > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg"
              >
                <h4 className="font-medium text-primary-900 mb-2">Next Steps</h4>
                <p className="text-sm text-primary-700 mb-3">
                  Great choices! Here's what you can do with your selected names:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1 bg-primary-500 text-white text-sm rounded-md hover:bg-primary-600 transition-colors">
                    Check All Domains
                  </button>
                  <button className="px-3 py-1 bg-white text-primary-600 text-sm rounded-md border border-primary-300 hover:bg-primary-50 transition-colors">
                    Generate Logos
                  </button>
                  <button className="px-3 py-1 bg-white text-primary-600 text-sm rounded-md border border-primary-300 hover:bg-primary-50 transition-colors">
                    Save to Journey
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}