/*import './Navbar.css'; // Case-sensitive!

function NavBar() {
  return (
    <nav className="navbar">
      <button className="nav-button">Home</button>
      <button className="nav-button">About</button>
      <button className="nav-button">Contact</button>
      <button className="nav-button">Registration</button>
    </nav>
  );
}

export default NavBar;*/
// src/components/NavBar.js
import './Navbar.css';
import React from 'react';

const NavBar = ({ onHomeClick, onRegClick, onAboutClick, onContactClick }) => {
  return (
    <nav className="navbar">
      <button className="nav-button" onClick={onHomeClick}>Home</button>
      
      <button className="nav-button" onClick={onAboutClick}>About</button>
      <button className="nav-button" onClick={onRegClick}>Registration</button>
      <button className="nav-button" onClick={onContactClick}>Contact</button>
    </nav>
  );
};

export default NavBar;



