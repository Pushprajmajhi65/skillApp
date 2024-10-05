import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';
import './chatinterface.css'; // Import your separate CSS file for chat

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="chat-container-1">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            {msg}
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Start typing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button">
          <FontAwesomeIcon icon={faSmile} className="emoji-icon" />
        </button>
        <button type="submit">
          <FontAwesomeIcon icon={faPaperPlane} className="send-icon" />
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
