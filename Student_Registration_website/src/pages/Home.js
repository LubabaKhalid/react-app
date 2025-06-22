/*import './Home.css';
import '../App.css'
import React from 'react';
import BackgroundSlideshow from '../components/BackgroundSlideshow';

function Home() {
  return (
    <div className="home-container">
      <BackgroundSlideshow />
      <div className="content">
        <h1>Students Registration</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Home;*/


// Home.js


import React from 'react';
import BackgroundSlideshow from '../components/BackgroundSlideshow';

function Home() {
  return (
    <div className="home-container">
      <BackgroundSlideshow />
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Student Registration Portal</h1>
        <p>Register, Learn and Connect</p>
      </div>
    </div>
  );
}

export default Home;


