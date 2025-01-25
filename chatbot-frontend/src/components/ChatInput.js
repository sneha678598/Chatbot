// /src/components/ChatInput.js
import React, { useState } from 'react';
import { sendChatQuery } from '../api/ChatbotApi';

const ChatInput = ({ setMessages, setLoading, setError }) => {
  const [query, setQuery] = useState('');

  const handleSendQuery = async () => {
    if (!query.trim()) return; // Prevent empty queries
    setLoading(true);
    setError(null);

    try {
      const response = await sendChatQuery(query);
      setMessages((prev) => [...prev, { type: 'user', text: query }, { type: 'bot', text: response }]);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }

    setQuery('');
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={handleSendQuery}>Send</button>
    </div>
  );
};

export default ChatInput;
