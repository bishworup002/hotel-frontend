import React, { useState } from 'react';
// import AnywhereModal from './AnywhereModal';
// import DateModal from './DateModal';
// import GuestModal from './GuestModal';

import logoImage from './image/logo.png';
import languageIcon from './image/language.png';
import detailsImage from './image/details.png';
import profile_logo from './image/profile.png';

function Navbar() {
  const [whereButtonText, setWhereButtonText] = useState('Anywhere');

  const openModal = () => {
    // Implement modal opening logic
  };

  return (
    <div>
       <nav>
      <div className="logo">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="search-bar">
        <button id="whereButton">{whereButtonText}</button>
        <span className="divider"></span>
        <button onClick={openModal} id="any-week">Any week</button>
        <span className="divider"></span>
        <button id="addGuestsButton">Add guests</button>
        <button className="search-icon">🔍</button>
      </div>
      <div className="nav-right">
        <a href="#" className="nav-link">
          <img src={languageIcon} alt="Language" className="icon" />
        </a>
        <button className="profile-menu">
          <img src={detailsImage} alt="Menu" className="icon" />
          <img src={profile_logo} alt="Profile" className="icon" />
        </button>
        
      </div>
    </nav>
    <hr />
    
    </div>
    
  );
}

export default Navbar;
