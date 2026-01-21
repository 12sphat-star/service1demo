import React, { useState, useEffect, useRef } from 'react';
import { getAIChatResponse } from '../geminiService';

interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

export const AIConcierge: React.FC<{ businessType: string; city: string }> = ({ businessType, city }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 0) {
        setMessages([{ 
          role: 'model', 
          parts: [{ text: `Hi there! 👋 I'm your ${businessType} assistant for ${city}. Need help with a repair or an estimate today?` }] 
        }]);
        setHasNewMessage(true);
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [businessType, city, messages.length]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userText = input;
    setInput('');
    const newHistory: Message[] = [...messages, { role: 'user', parts: [{ text: userText }] }];
    setMessages(newHistory);
    setLoading(true);

    const botResponse = await getAIChatResponse(userText, messages, businessType, city);
    setMessages(prev => [...prev, { role: 'model', parts: [{ text: botResponse }] }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white border border-slate-200 rounded-2xl shadow-2xl mb-4 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-sm uppercase tracking-wider">AI Concierge</h3>
              <p className="text-xs text-slate-400">Available 24/7 in {city}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-3 text-sm ${
                  m.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 shadow-sm text-slate-800'
                }`}>
                  {m.parts[0].text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm">
                  <span className="flex space-x-1">
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></span>
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1 h-1 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-slate-900"
            />
            <button 
              onClick={handleSend}
              className="bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      )}

      <button 
        onClick={() => { setIsOpen(!isOpen); setHasNewMessage(false); }}
        className="relative group bg-slate-900 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform animate-float"
      >
        {hasNewMessage && !isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Need help in {city}?
        </div>
      </button>
    </div>
  );
};
