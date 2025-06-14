// src/components/ChatBotPopup.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const botReplies = [
  "That's awesome! Tell me more.",
  "We'd love to help you with that!",
  "Can you share a few more details?",
  "Our team will get back to you soon!",
  "Thank you for reaching out!"
];

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex items-end gap-1 mb-1"
  >
    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
    <span className="block w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
    <span className="ml-2 text-xs text-gray-400">ClickSpark Bot is typing...</span>
  </motion.div>
);

const ChatBotPopup = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "👋 Hi! I'm ClickSpark Bot. How can I help you today?", greeting: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { from: 'user', text: input }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const reply = botReplies[Math.floor(Math.random() * botReplies.length)];
      setMessages((msgs) => [...msgs, { from: 'bot', text: reply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.8 }}
      className="fixed bottom-6 right-6 z-[999] flex flex-col items-end"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white rounded-2xl shadow-2xl w-80 max-w-full flex flex-col overflow-hidden border border-yellow-400"
      >
        <div className="flex items-center justify-between px-4 py-3 bg-yellow-400">
          <div className="flex items-center gap-2">
            <motion.img
              src="/new.png"
              alt="ClickSpark Bot"
              className="w-16 h-16 object-contain p-1 rounded-full border-2 border-gray-200 shadow-md bg-white"
            />
            <span className="font-bold text-black">ClickSpark Bot</span>
          </div>
          <button onClick={onClose} className="text-black text-xl font-bold hover:text-red-500">×</button>
        </div>
        <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto h-64 bg-gradient-to-b from-yellow-50 to-white">
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === 'user' ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: msg.from === 'user' ? 40 : -40 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className="relative max-w-[75%]">
                  <div
                    className={`px-4 py-2 rounded-2xl text-sm shadow
                      ${msg.from === 'user' ? 'bg-yellow-400 text-black rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border border-yellow-100'}`}
                  >
                    {msg.greeting ? (
                      <motion.span
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 12 }}
                        className="inline-block"
                      >
                        {msg.text}
                      </motion.span>
                    ) : msg.text}
                  </div>
                  {msg.from === 'user' ? (
                    <span className="absolute right-0 -bottom-2 w-3 h-3 bg-yellow-400 rounded-br-2xl transform rotate-45"></span>
                  ) : (
                    <span className="absolute left-0 -bottom-2 w-3 h-3 bg-white border border-yellow-100 rounded-bl-2xl transform -rotate-45"></span>
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="flex justify-start"
              >
                <TypingIndicator />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t bg-white">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
            autoFocus
          />
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold shadow hover:bg-yellow-500 transition-all">
            Send
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ChatBotPopup;