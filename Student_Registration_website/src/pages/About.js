/*import React from 'react';
import './About.css'
const About = () => (
  <div className="about-section">
    <h2>About Us</h2>
    <p>
      We are a team dedicated to making the student registration process easier and more efficient.
      <span className="highlight">Our goal</span> is to provide a user-friendly experience for both students and administrators.
    </p>
    <button>Learn More</button>
  </div>
);

export default About;*/
import React from 'react';
import './About.css';
import HomeButton from './HomeButton'; 

const About = () => (
  <>
    <div className="about-section">
      <h2>About Us</h2>
      <p>
        We are a team dedicated to making the student registration process easier and more efficient.
        <span className="highlight"> Our goal</span> is to provide a user-friendly experience for both students and administrators.
      </p>
      <button className="learn-more-btn">Learn More</button>
    </div>

    {/* Floating back-to-home button */}
    <HomeButton />
  </>
);

export default About;
