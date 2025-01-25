// /src/App.js
import React, { useState } from 'react';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="chatbot">
      <ChatHistory messages={messages} />
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      <ChatInput setMessages={setMessages} setLoading={setLoading} setError={setError} />
    </div>
  );
};

export default App;
