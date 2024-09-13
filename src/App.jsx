import { useState } from 'react'
import React from 'react'
import './App.css'
import BGvideo from './assets/TFbgvideo.mp4'
import Homepage from './Components/Homepage'
import OurServices from './Components/OurServices'
import HowItWorks from './Components/HowItWorks'
import WhyChooseUs from './Components/WhyChooseUs'
import Tiers from './Components/Tiers'
import About from './Components/About'
import logo from './assets/TFLOGO.png'

function App() {
  const [activeContent, setActiveContent] = useState('content1');

  const handleContentChange = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <div className="App">
      <div className='overlay'></div>
      <div className="video-background">
        <video autoPlay loop muted id="background-video">
          <source src={BGvideo} type="video/mp4" />
        </video>
      </div>

      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className='nav-buttons'>
          <button onClick={() => handleContentChange('content1')}>Home</button>
          <button onClick={() => handleContentChange('content2')}>Our Services</button>
          <button onClick={() => handleContentChange('content3')}>How It Works</button>
          <button onClick={() => handleContentChange('content4')}>Why Choose TF APP</button>
          <button onClick={() => handleContentChange('content5')}>Tier Structure</button>
          <button onClick={() => handleContentChange('content6')}>About</button>
        </div>
        <div className="right-button">
          <button className="signUp">
            Artist Sign Up
          </button>
        </div>
      </nav>

      <div className="content-section">
        {activeContent === 'content1' && (
          <div id="content1" className="content">
            <Homepage />
          </div>
        )}
        {activeContent === 'content2' && (
          <div id="content2" className="content">
            <OurServices />
          </div>
        )}
        {activeContent === 'content3' && (
          <div id="content3" className="content">
            <HowItWorks />
          </div>
        )}
        {activeContent === 'content4' && (
          <div id="content4" className="content">
            <WhyChooseUs />
          </div>
        )}
        {activeContent === 'content5' && (
          <div id="content4" className="content">
            <Tiers />
          </div>
        )}
        {activeContent === 'content6' && (
          <div id="content4" className="content">
            <About />
          </div>
        )}
      </div>
    </div>
  );
}

export default App