import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faComments, faCalendarAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  const [active, setActive] = useState('overview');
  const [isOpen, setIsOpen] = useState(window.innerWidth > 992);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSetActive = (section, url) => {
    setActive(section);
    navigate(url);
  };

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Update active state based on the current URL
    const path = location.pathname;
    switch (path) {
      case '/overview':
        setActive('overview');
        break;
      case '/feed':
        setActive('feed');
        break;
      case '/chat':
        setActive('chat');
        break;
      case '/meetings':
        setActive('meetings');
        break;
      default:
        setActive('overview'); // Default active section if no match
    }
  }, [location]); // Run this effect whenever the location changes

  return (
    <div className={`app-container ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="menu">
          <li className={active === 'overview' ? 'active' : ''} onClick={() => handleSetActive('overview', '/overview')}>
            <FontAwesomeIcon icon={faHome} /> Overview
          </li>
          <li className={active === 'feed' ? 'active' : ''} onClick={() => handleSetActive('feed', '/feed')}>
            <FontAwesomeIcon icon={faNewspaper} /> Feed
          </li>
          <li className={active === 'chat' ? 'active' : ''} onClick={() => handleSetActive('chat', '/chat')}>
            <FontAwesomeIcon icon={faComments} /> Chat
          </li>
          <li className={active === 'meetings' ? 'active' : ''} onClick={() => handleSetActive('meetings', '/meetings')}>
            <FontAwesomeIcon icon={faCalendarAlt} /> Meetings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
