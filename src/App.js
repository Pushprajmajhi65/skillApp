import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Sidebar from '../src/pages/sidebar';
  import Overview from '../src/pages/Overview'; 
  import Feed from '../src/pages/Feed'; 
  import Chat from './pages/Chat'; 
  import Meetings from '../src/pages/Meetings';
  import Navbar from './pages/header';
  
function App() {
  return (
    <Router>
      <div className="app-container">
        
        
        <Sidebar /> {/* Sidebar navigation */}
        <div className="main-content">
        <Navbar></Navbar>
          <Routes>
          
            <Route path="/overview" element={<Overview />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/meetings" element={<Meetings />} />
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
