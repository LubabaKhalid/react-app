// src/App.js
/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import StudentForm from "./StudentForm";


import './App.css'; // Optional if using for background styles

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div>
      <StudentForm />
    </div>
    </Router>
  );
}

export default App;*/

// src/App.js
import React, { useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import About from "./pages/About";
import Contact from "./pages/Contact";
import './App.css';
function App() {
  const homeRef = useRef(null);
  const registrationRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onRegClick={() => scrollToSection(registrationRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={registrationRef}>
        <Registration />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </>
  );
}

export default App;
