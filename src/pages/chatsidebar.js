import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './chatsidebar.css'; // Import your main CSS file

const ChatSidebar = () => {
  const [users, setUsers] = useState([]); // State to hold user data

  // Fetch data from the Django backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/'); // Adjust the URL as necessary
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Map the data to the desired format
        const formattedUsers = data.payload.map(user => ({
          id: user.id,
          name: user.name,
          status: user.age, // Assuming age is the status
          lastActive: user.father, // Replace with actual last active data if available
        }));
        setUsers(formattedUsers);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <div className="chat-sidebar-container">
      <h2 className="chat-sidebar-title">Message</h2>
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
                  backgroundColor: user.status >= 20 ? 'green' : user.status >= 15 ? 'orange' : 'red',
                }}
              ></div>
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <span className="user-status">{user.status}</span>
              </div>
            </div>
            <span className="last-active">{user.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatSidebar;
