import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Sidebar from '../src/pages/sidebar';
  import Overview from '../src/pages/Overview'; 
  import Feed from '../src/pages/Feed'; 
  import Chat from './pages/Chat'; 
  import Meetings from '../src/pages/Meetings';
  import Navbar from './pages/header';
  import NotFound from './pages/notfound';
  import Login from './pages/login';
  import Signup from './pages/signup';
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
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
         
        </div>
      </div>
    </Router>
  );
}

export default App;
