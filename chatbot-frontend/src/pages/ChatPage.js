import React, { useState } from "react";
import ChatHistory from "../components/ChatHistory";
import ChatInput from "../components/ChatInput";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (query) => {
    const userMessage = { text: query, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
  
      console.log('Response:', response); // Debugging line
      if (response.ok) {
        const data = await response.json();
        console.log('Data:', data); // Debugging line
        const botResponse = { text: data.response, isUser: false };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        const errorMessage = { text: "Error communicating with the server.", isUser: false };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      const errorMessage = { text: "Error connecting to the server.", isUser: false };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };
  

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <ChatHistory messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;




