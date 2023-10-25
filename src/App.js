import React from 'react';
import './components/styles/GlobalStyles.css';
import Menu from './components/Menu.js';
import Introduction from './components/Introduction.js';
import Works from './components/Works.js'
import SectionBody from './components/SectionBody.js';
import Testimonials from './components/Testimonials.js';
import Footer from './components/Footer.js';


function App() {

  return (
    <div className="header" >
      <Menu />
        <SectionBody  />
        <Introduction />
        <Works />
        <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
