import React from 'react';
import { 
  Sparkles, 
  Palette, 
  DollarSign, 
  FileText, 
  Users, 
  TrendingUp,
  Lock,
  ArrowRight
} from 'lucide-react';

const tools = [
  {
    id: 'name-generator',
    title: 'Business Name Generator',
    description: 'AI-powered names that are memorable and domain-ready',
    icon: Sparkles,
    status: 'active',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'logo-creator',
    title: 'Logo Creator',
    description: 'Generate professional logos with AI art',
    icon: Palette,
    status: 'coming-soon',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'funding-simulator',
    title: 'Funding Simulator',
    description: 'Understand rounds, equity, and dilution',
    icon: DollarSign,
    status: 'coming-soon',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'pitch-writer',
    title: 'Pitch Deck Writer',
    description: 'Auto-generate professional pitch decks',
    icon: FileText,
    status: 'coming-soon',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'mentor-match',
    title: 'Mentor Match',
    description: 'Connect with experienced entrepreneurs',
    icon: Users,
    status: 'coming-soon',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'market-research',
    title: 'Market Research AI',
    description: 'Analyze your market and competition',
    icon: TrendingUp,
    status: 'coming-soon',
    color: 'from-teal-500 to-blue-500'
  }
];

export function ToolsOverview() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Startup Tools</h2>
        <p className="text-gray-600">Everything you need to turn your idea into reality</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <div
              key={tool.id}
              className={`relative p-6 rounded-lg border transition-all duration-200 ${
                tool.status === 'active'
                  ? 'border-gray-200 hover:border-gray-300 cursor-pointer hover:shadow-md'
                  : 'border-gray-100 bg-gray-50'
              }`}
            >
              {tool.status === 'coming-soon' && (
                <div className="absolute top-3 right-3">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${tool.color} p-3 rounded-lg w-fit mb-4`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className={`font-semibold mb-2 ${
                tool.status === 'active' ? 'text-gray-900' : 'text-gray-500'
              }`}>
                {tool.title}
              </h3>
              
              <p className={`text-sm mb-4 ${
                tool.status === 'active' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                {tool.description}
              </p>
              
              <div className="flex justify-between items-center">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tool.status === 'active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {tool.status === 'active' ? 'Available' : 'Coming Soon'}
                </span>
                
                {tool.status === 'active' && (
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg border border-primary-200">
        <h3 className="font-medium text-primary-900 mb-2">🚀 Roadmap</h3>
        <p className="text-sm text-primary-700">
          We're building these tools step-by-step. Start with the Name Generator, and we'll unlock new tools as you progress through your startup journey!
        </p>
      </div>
    </div>
  );
}