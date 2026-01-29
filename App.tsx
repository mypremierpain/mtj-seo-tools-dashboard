
import React, { useState, useMemo } from 'react';
import { Search, Info, Settings, LayoutGrid, ChevronDown, ChevronRight, Zap, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { FEATURED_CARDS, TOOL_CATEGORIES } from './constants';
import { SEOTool, ToolCategory } from './types';
import GeminiAssistant from './components/GeminiAssistant';
import ToolModal from './components/ToolModal';

const ToolCard: React.FC<{ tool: SEOTool; category: string; onSelect: (tool: SEOTool, category: string) => void }> = ({ tool, category, onSelect }) => (
  <button 
    onClick={() => onSelect(tool, category)}
    className="tool-grid-item group relative flex items-center p-3 text-left border border-gray-100 rounded-lg bg-white shadow-sm hover:shadow-md active:scale-95 transition-all duration-200"
  >
    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
      <Zap size={14} />
    </div>
    <span className="ml-3 text-sm font-medium text-gray-700 group-hover:text-orange-700 transition-colors truncate">
      {tool.name}
    </span>
  </button>
);

const CategorySection: React.FC<{ category: ToolCategory; onSelectTool: (tool: SEOTool, category: string) => void }> = ({ category, onSelectTool }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 8;
  const toolsToShow = isExpanded ? category.tools : category.tools.slice(0, initialCount);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full hover:border-orange-200 transition-all duration-300">
      <div className="p-5 border-b border-gray-100 bg-white flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-3">
          <div className="w-2 h-6 bg-orange-600 rounded-full"></div>
          {category.title}
        </h3>
        <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
          {category.tools.length} TOOLS
        </span>
      </div>
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow bg-white">
        {toolsToShow.map((tool, idx) => (
          <ToolCard key={idx} tool={tool} category={category.title} onSelect={onSelectTool} />
        ))}
      </div>
      {category.tools.length > initialCount && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-4 text-sm font-bold text-orange-600 hover:bg-orange-50 transition-colors flex items-center justify-center gap-2 border-t border-gray-100 bg-gray-50/30"
        >
          {isExpanded ? (
            <>Collapse View <ChevronDown className="rotate-180" size={16} /></>
          ) : (
            <>Show All Tools ({category.tools.length}) <ChevronDown size={16} /></>
          )}
        </button>
      )}
    </div>
  );
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTool, setActiveTool] = useState<{ tool: SEOTool; category: string } | null>(null);

  const filteredCategories = useMemo(() => {
    if (!searchTerm) return TOOL_CATEGORIES;
    return TOOL_CATEGORIES.map(cat => ({
      ...cat,
      tools: cat.tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(cat => cat.tools.length > 0);
  }, [searchTerm]);

  const handleSelectTool = (tool: SEOTool, category: string) => {
    setActiveTool({ tool, category });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <div className="bg-orange-600 p-2.5 rounded-xl shadow-lg shadow-orange-200 group-hover:scale-105 transition-transform">
                  <LayoutGrid className="text-white" size={24} />
                </div>
                <div className="ml-3 flex flex-col">
                  <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                    SEO <span className="text-orange-600">MASTER</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">All-In-One Suite</span>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-12">
              <div className="relative w-full group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-3.5 border-2 border-gray-100 rounded-2xl bg-gray-50/50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 sm:text-sm transition-all shadow-inner"
                  placeholder="Find tools (e.g. Sitemap, Backlink, Content...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-extrabold text-sm hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0">
                <Sparkles size={16} /> Upgrade Pro
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-orange-600 p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-6 pt-4 pb-8 space-y-6 border-t border-gray-100 shadow-xl">
             <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-xl bg-gray-50 focus:outline-none focus:border-orange-500"
                  placeholder="Search tools..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-orange-200">Get Pro Access</button>
              </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {!searchTerm && (
          <div className="mb-16">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tight">
                  Premium SEO <span className="text-orange-600">Hubs</span>
                </h1>
                <p className="text-gray-500 font-medium mt-2">Comprehensive toolkits for professional marketers.</p>
              </div>
              <button className="hidden sm:flex text-orange-600 font-bold items-center gap-1 hover:gap-2 transition-all">
                View All Categories <ArrowRight size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_CARDS.map((card, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSelectTool({ name: card.title }, "Featured Hub")}
                  className={`relative group p-8 rounded-3xl ${card.color} text-white shadow-2xl hover-card-transition cursor-pointer overflow-hidden`}
                >
                  <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <div className="text-9xl">{card.icon}</div>
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg border border-white/30">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-black mb-3 leading-tight">{card.title}</h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed mb-6">{card.description}</p>
                    <div className="mt-auto flex items-center text-xs font-black uppercase tracking-[0.2em] text-white/90 group-hover:text-white">
                      Explore Suite <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categories Section */}
        <div className="space-y-12">
          {searchTerm ? (
             <div className="mb-6">
               <h2 className="text-2xl font-black text-gray-900">
                Search results for: <span className="text-orange-600">"{searchTerm}"</span>
               </h2>
               <p className="text-gray-500 mt-1">Found tools across multiple categories.</p>
             </div>
          ) : (
            <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-xl"><Settings className="text-orange-600" size={24} /></div>
              Complete Tool Catalog
            </h2>
          )}

          {searchTerm && filteredCategories.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <div className="text-8xl mb-6 animate-bounce">🔍</div>
              <h3 className="text-2xl font-black text-gray-900">No tools match your query</h3>
              <p className="text-gray-500 mt-2 max-w-sm mx-auto font-medium">Try broader terms or browse the categories below to find what you need.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, idx) => (
              <div key={idx} className="h-full">
                <CategorySection category={category} onSelectTool={handleSelectTool} />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="bg-orange-600 p-2.5 rounded-xl mr-3 shadow-lg shadow-orange-100">
                  <LayoutGrid className="text-white" size={20} />
                </div>
                <span className="text-2xl font-black text-gray-900 uppercase">
                  SEO Master
                </span>
              </div>
              <p className="text-gray-500 max-w-md font-medium leading-relaxed">
                The industry standard collection of SEO utilities. From raw technical analysis to AI-driven content optimization, we provide everything needed to dominate SERPs.
              </p>
            </div>
            <div>
              <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Resources</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">API References</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-gray-900 uppercase tracking-widest text-xs mb-6">Legal</h4>
              <ul className="space-y-4 text-sm font-bold text-gray-500">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="text-sm font-bold">&copy; {new Date().getFullYear()} SEO MASTER SUITE. PROPRIETARY TOOLS.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
               <span className="text-xs font-bold uppercase tracking-widest">Powered by Gemini Ultra</span>
            </div>
          </div>
        </div>
      </footer>

      {activeTool && (
        <ToolModal 
          tool={activeTool.tool} 
          category={activeTool.category} 
          onClose={() => setActiveTool(null)} 
        />
      )}

      <GeminiAssistant />
    </div>
  );
}
