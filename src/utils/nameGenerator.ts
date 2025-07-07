import { GeneratedName } from '../types';

const prefixes = [
  'Quick', 'Smart', 'Pro', 'Ultra', 'Next', 'Meta', 'Sync', 'Flow', 'Spark', 'Boost',
  'Peak', 'Prime', 'Core', 'Edge', 'Flux', 'Nova', 'Zen', 'Swift', 'Bold', 'Pure'
];

const suffixes = [
  'ly', 'fy', 'io', 'co', 'hub', 'lab', 'tech', 'app', 'pro', 'go',
  'kit', 'box', 'space', 'works', 'studio', 'labs', 'ai', 'x', 'plus', 'max'
];

const industryKeywords = {
  'Technology': ['tech', 'digital', 'cyber', 'data', 'cloud', 'ai', 'smart'],
  'E-commerce': ['shop', 'market', 'store', 'buy', 'sell', 'trade', 'commerce'],
  'Health & Fitness': ['health', 'fit', 'wellness', 'care', 'med', 'bio', 'life'],
  'Education': ['learn', 'edu', 'teach', 'study', 'skill', 'knowledge', 'academy'],
  'Finance': ['fin', 'pay', 'money', 'invest', 'bank', 'crypto', 'wallet'],
  'Food & Beverage': ['food', 'eat', 'taste', 'fresh', 'cook', 'meal', 'bite'],
  'Travel': ['travel', 'trip', 'journey', 'explore', 'adventure', 'go', 'roam'],
  'Entertainment': ['play', 'fun', 'game', 'show', 'stream', 'watch', 'enjoy']
};

function generateCreativeName(idea: string, industry: string): string {
  const keywords = industryKeywords[industry as keyof typeof industryKeywords] || [];
  const ideaWords = idea.toLowerCase().split(' ').filter(word => word.length > 3);
  
  const combinations = [
    () => prefixes[Math.floor(Math.random() * prefixes.length)] + 
          (keywords[Math.floor(Math.random() * keywords.length)] || ideaWords[0] || 'venture'),
    () => (ideaWords[0] || keywords[0] || 'start') + 
          suffixes[Math.floor(Math.random() * suffixes.length)],
    () => prefixes[Math.floor(Math.random() * prefixes.length)] + 
          (ideaWords[Math.floor(Math.random() * ideaWords.length)] || 'up'),
  ];
  
  const generator = combinations[Math.floor(Math.random() * combinations.length)];
  return generator();
}

function generateDomain(name: string): string {
  const extensions = ['.com', '.io', '.co', '.app', '.tech', '.ai'];
  return name.toLowerCase().replace(/[^a-z0-9]/g, '') + 
         extensions[Math.floor(Math.random() * extensions.length)];
}

export function generateBusinessNames(idea: string, industry: string, count: number = 8): GeneratedName[] {
  const names: GeneratedName[] = [];
  const categories: GeneratedName['category'][] = ['creative', 'descriptive', 'abstract', 'compound'];
  
  for (let i = 0; i < count; i++) {
    const name = generateCreativeName(idea, industry);
    const domain = generateDomain(name);
    const category = categories[Math.floor(Math.random() * categories.length)];
    
    names.push({
      id: `name-${i}`,
      name: name.charAt(0).toUpperCase() + name.slice(1),
      domain,
      available: Math.random() > 0.3, // Simulate domain availability
      description: generateNameDescription(name, category),
      category
    });
  }
  
  return names;
}

function generateNameDescription(name: string, category: GeneratedName['category']): string {
  const descriptions = {
    creative: `A creative and memorable name that stands out in the market.`,
    descriptive: `A clear, descriptive name that immediately conveys your business purpose.`,
    abstract: `An abstract name that's brandable and allows for future expansion.`,
    compound: `A compound name combining relevant industry terms for clarity.`
  };
  
  return descriptions[category];
}