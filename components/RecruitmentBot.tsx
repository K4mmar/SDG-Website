import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Music } from 'lucide-react';
import { createRecruitmentChat } from '../services/geminiService';
import { ChatMessage } from '../types';
import { GenerateContentResponse, Chat } from '@google/genai';

export const RecruitmentBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hoi! 👋 Interesse om muziek te maken bij SDG? Stel me gerust een vraag!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createRecruitmentChat();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response: GenerateContentResponse = await chatSessionRef.current.sendMessage({
        message: userMsg.text
      });
      
      const modelText = response.text || "Sorry, ik begreep dat niet helemaal. Kun je het anders vragen?";
      
      setMessages(prev => [...prev, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Er ging iets mis. Probeer het later opnieuw.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl mb-4 overflow-hidden border border-slate-200 flex flex-col h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-sdg-red p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Music size={18} />
              </div>
              <div>
                <h3 className="font-bold text-sm">SDG Assistent</h3>
                <p className="text-xs text-red-100">Antwoord direct</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-sdg-black text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-sdg-red" />
                  <span className="text-xs text-slate-400">Aan het typen...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Vraag over lidmaatschap..."
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-sdg-red/50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="bg-sdg-red text-white p-2 rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-sdg-red animate-bounce-subtle'} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-semibold`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        {!isOpen && <span className="pr-2">Heb je een vraag?</span>}
      </button>
    </div>
  );
};