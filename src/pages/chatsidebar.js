// ChatSidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './meeting.css'; // Import your main CSS file

const ChatSidebar = () => {
  // Sample data for users
  const users = [
    { id: 1, name: 'John Doe', status: 'Online', lastActive: '2 min ago' },
    { id: 2, name: 'Jane Smith', status: 'Away', lastActive: '5 min ago' },
    { id: 3, name: 'Bob Johnson', status: 'Offline', lastActive: '10 min ago' },
    { id: 4, name: 'Alice Brown', status: 'Online', lastActive: '1 min ago' },
  ];

  return (
    <div className="chat-sidebar-container">
      <h2 className="chat-sidebar-title">Chat Users</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>

      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <div className="user-profile">
              <div
                className="profile-circle"
                style={{
                  backgroundColor: user.status === 'Online' ? 'green' : user.status === 'Away' ? 'orange' : 'red',
                }}
              ></div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-status">{user.status}</span>
              </div>
            </div>
            <span className="last-active">{user.lastActive}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
