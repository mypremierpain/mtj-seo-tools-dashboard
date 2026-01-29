
import React, { useState, useEffect } from 'react';
import { X, Play, Loader2, Copy, Download, RefreshCw, CheckCircle2 } from 'lucide-react';
import { SEOTool } from '../types';
import { executeToolTask } from '../services/geminiService';

interface ToolModalProps {
  tool: SEOTool;
  category: string;
  onClose: () => void;
}

const ToolModal: React.FC<ToolModalProps> = ({ tool, category, onClose }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    setResult('');
    const output = await executeToolTask(tool.name, category, input);
    setResult(output);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-orange-600 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-xl">
              <RefreshCw size={24} className={loading ? 'animate-spin' : ''} />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight">{tool.name}</h2>
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{category}</p>
            </div>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-grow p-8 overflow-y-auto space-y-8">
          <div className="space-y-4">
            <label className="block text-sm font-black text-gray-700 uppercase tracking-wider">
              Tool Input / Context (Optional)
            </label>
            <textarea
              className="w-full h-32 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-orange-500 transition-all font-medium text-gray-700"
              placeholder={`Enter website URL, keyword, or topic (e.g., "Perfume marketing strategy" or "example.com")...`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={handleRun}
              disabled={loading}
              className="w-full bg-orange-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-200 hover:bg-orange-700 transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" /> EXECUTING ANALYSIS...
                </>
              ) : (
                <>
                  <Play size={20} /> RUN {tool.name.toUpperCase()}
                </>
              )}
            </button>
          </div>

          {result && (
            <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between">
                <label className="text-sm font-black text-gray-700 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-500" /> Tool Output
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 font-bold text-xs transition-colors"
                  >
                    {copied ? <CheckCircle2 size={14} /> : <Copy size={14} />}
                    {copied ? 'COPIED' : 'COPY'}
                  </button>
                </div>
              </div>
              <div className="p-6 bg-orange-50/50 border-2 border-orange-100 rounded-2xl whitespace-pre-wrap font-medium text-gray-800 leading-relaxed text-sm">
                {result}
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Data generated via SEO Master AI Engine • Powered by Gemini Flash
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolModal;
