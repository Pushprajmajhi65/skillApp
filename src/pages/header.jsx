import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faHome, faNewspaper, faComments, faCalendarAlt, faBars, faCog, faBell } from '@fortawesome/free-solid-svg-icons'; // Import the icons

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background:"#88888"}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          {/* Align items center using d-flex and align-items-center */}
          <form className="d-flex ms-auto align-items-center" style={{ gap: '12px' }} role="search"> {/* Correctly add gap */}
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <FontAwesomeIcon icon={faCog} /> {/* Settings icon */}
            <FontAwesomeIcon icon={faBell} /> {/* Notification icon */}
            <button className="btn btn-outline-success" type="submit">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
