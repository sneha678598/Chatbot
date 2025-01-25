import React from "react";
import ChatMessage from "./ChatMessage";

const ChatHistory = ({ messages }) => {
  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
};

export default ChatHistory;






