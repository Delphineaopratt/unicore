import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';
import Layout from '../components/Layout';

const initialMessages = [
  {
    id: 1,
    sender: 'bot',
    text: 'Hello! I am Unibot, your AI assistant. How can I help you??',
    timestamp: '10:00 AM',
  },
];

function Chatbot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: input.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInput('');

    setTimeout(() => {
      const botResponse = generateBotResponse(newUserMessage.text);
      const newBotMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, newBotMessage]);
    }, 1500);
  };

  const generateBotResponse = (userText) => {
    // Simple placeholder bot logic
    if (userText.toLowerCase().includes('cv')) {
      return 'Certainly! Please provide me with a professional summary about yourself';
    }
    if (userText.toLowerCase().includes('summary')) {
      return 'Excellent! Please tell me about your career desires and passion';
    }
    if (userText.toLowerCase().includes('passion')) {
      return 'Thank you for sharing! I will help you build a great CV.';
    }
    return "I'm here to help! Please tell me more.";
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Layout>

   
    <div className="chatbot-container">
      <aside className="chatbot-sidebar">
        <div className="chatbot-logo">
          <img src="/public/icons/unicorelogo.png" alt="Unicore Logo" />
          <span>Unicore</span>
        </div>
        <nav className="chatbot-nav">
          <button className="new-chat-btn">New Chat</button>
          <button className="history-btn">History</button>
        </nav>
      </aside>

      <main className="chatbot-main">
        <div className="chatbot-messages">
          {messages.map(({ id, sender, text, timestamp }) => (
            <div
              key={id}
              className={`chatbot-message ${sender === 'user' ? 'user-message' : 'bot-message'}`}
            >
              <div className="message-content">
                {sender === 'bot' && (
                  <div className="bot-avatar" title="Unibot AI">
                    🤖
                  </div>
                )}
                <div className="message-text">{text}</div>
              </div>
              <div className="message-timestamp">{timestamp}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form
          className="chatbot-input-area"
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
        >
          <textarea
            className="chatbot-input"
            placeholder="Type your message here...."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
          />
          <button type="submit" className="send-btn" aria-label="Send message">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-send"
              viewBox="0 0 24 24"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </main>
    </div>
     </Layout>
  );
}

export default Chatbot;
