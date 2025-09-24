"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
    isTyping?: boolean;
}

interface AIChatBubbleProps {
    onSendMessage?: (message: string) => void;
    className?: string;
    placeholder?: string;
    maxMessages?: number;
}

const AIChatBubble: React.FC<AIChatBubbleProps> = ({
    onSendMessage,
    className = '',
    placeholder = 'Ask me anything...',
    maxMessages = 50,
}) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: 'Hello! I\'m your AI assistant. How can I help you today?',
            sender: 'ai',
            timestamp: new Date(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                text: generateAIResponse(inputValue),
                sender: 'ai',
                timestamp: new Date(),
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
            onSendMessage?.(inputValue);
        }, 1500 + Math.random() * 1000);
    };

    const generateAIResponse = (userInput: string): string => {
        const responses = [
            "That's an interesting question! Let me think about that...",
            "I understand what you're asking. Here's my perspective on that topic.",
            "Great question! Based on my knowledge, I can help you with that.",
            "I see what you mean. Let me provide you with some insights.",
            "That's a fascinating topic! Here's what I know about it.",
            "I'm here to help! Let me break that down for you.",
            "Excellent question! I'd be happy to assist you with that.",
            "I understand your concern. Here's how I can help you.",
        ];

        // Simple keyword-based responses
        const input = userInput.toLowerCase();
        if (input.includes('hello') || input.includes('hi')) {
            return "Hello! It's great to meet you. How can I assist you today?";
        }
        if (input.includes('help')) {
            return "I'm here to help! I can answer questions, provide information, or just have a conversation. What would you like to know?";
        }
        if (input.includes('thank')) {
            return "You're very welcome! I'm always happy to help. Is there anything else you'd like to know?";
        }
        if (input.includes('bye') || input.includes('goodbye')) {
            return "Goodbye! It was nice chatting with you. Feel free to come back anytime!";
        }

        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const TypingIndicator = () => (
        <motion.div
            className="flex items-center space-x-1 p-3 bg-gray-100 rounded-lg max-w-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="flex space-x-1">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-2 h-2 bg-gray-400 rounded-full"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">AI is typing...</span>
        </motion.div>
    );

    return (
        <div className={`ai-chat-bubble bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-xl">🤖</span>
                    </div>
                    <div>
                        <h3 className="font-semibold">AI Assistant</h3>
                        <p className="text-sm opacity-80">Online</p>
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div
                                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${message.sender === 'user'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}
                            >
                                <p className="text-sm">{message.text}</p>
                                <p className="text-xs opacity-70 mt-1">
                                    {message.timestamp.toLocaleTimeString([], {
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isTyping && (
                    <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <TypingIndicator />
                    </motion.div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={placeholder}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        disabled={isTyping}
                    />
                    <motion.button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default AIChatBubble;

