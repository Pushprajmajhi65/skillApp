import React from 'react';
import ChatInterface from './chatInterface';
import ChatSidebar from './chatsidebar';

const Chat = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row",    }}>
      <ChatSidebar />
      <ChatInterface />
    </div>
  );
};

export default Chat;
