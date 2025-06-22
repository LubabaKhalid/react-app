
import React from 'react';
import './HomeButton.css';

const HomeButton = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/'; 
    }
  };

  return (
    <button className="home-button" onClick={scrollToHome}>
      ⬆
    </button>
  );
};

export default HomeButton;
