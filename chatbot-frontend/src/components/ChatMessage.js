import React from "react";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div className={`message ${message.type}`}>
      style={{
        alignSelf: isUser ? "flex-end" : "flex-start",
        background: isUser ? "#4caf50" : "#f1f1f1",
        color: isUser ? "#fff" : "#000",
        padding: "10px",
        borderRadius: "8px",
        margin: "5px 0",
        maxWidth: "70%",
      }}
    
      <p>{message.text}</p>
    </div>
  );
};


export default ChatMessage;
