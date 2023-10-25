import {React, useEffect} from 'react';
import './styles/GlobalStyles.css';
import './styles/Introduction.css'

const Introduction = () => {
  useEffect(() => {
    const designCardButtons = document.querySelectorAll('.design-card');
    const introductionText = document.querySelectorAll('.introduction-text');

    designCardButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        introductionText.forEach((introduction, introductionIndex) => {
          if (index === introductionIndex) {
            introduction.style.display = 'block';
          } else {
            introduction.style.display = 'none';
          }
        });
        designCardButtons.forEach((btn, btnIndex) => {
          if (index === btnIndex) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
      });
    });
  }, []);
  return (
    <section id="introduction">
      <div className="introduction-header">
        <h2 className="title">About Me</h2>
      </div>
      <div className="content-container">
    <div className="cards">
      <div className="design-card active">
        <div>
          <h3>Backend Development</h3>
          <i className="fas fa-terminal"></i>
        </div>
        <p>Crafting High-Performance Web Systems</p>
        <h5>5 PROJECTS</h5>
      </div>
        <div className="design-card">
          <div>
            <h3>Frontend Development</h3>
            <i className="fas fa-code"></i>
          </div>
          <p>Crafting User Interfaces</p>
          <h5>5 PROJECTS</h5>
        </div>
        <div className="design-card">
          <div>
            <h3>Database Administrator</h3>
            <i className="fa-solid fa-database"></i>
          </div>
          <p>Mastery of MySQL Database Management</p>
          <h5>5 PROJECTS</h5>
        </div>
      </div>
      </div>
      <div className="introduction-text">
        <h4>Crafting High-Performance Web Systems</h4>
        <p>As a backend developer, I specialize in crafting high-performance and reliable systems using JavaScript 
          to create servers with Node.js and MongoDB. My expertise spans various domains, including e-commerce, 
          live chat integration, server creation with Express, and the implementation of currency conversion APIs.</p>
      </div>
      <div className="introduction-text" style={{ display: 'none' }}>
        <h4>Crafting User Interfaces</h4>
        <p>As a frontend designer, my passion is bringing engaging and highly functional user interfaces to life. 
          I utilize my expertise in HTML, CSS, and JavaScript, along with my current focus on implementing React, 
          to create intuitive and visually striking user experiences.</p>
      </div>
      <div className="introduction-text" style={{ display: 'none' }}>
        <h4>Mastery of MySQL Database Management</h4>
        <p>I not only focus on the development of backend and frontend applications, but also design efficient databases, 
          create schemas, optimize SQL queries, and manage data security. This secondary skill enables me to tackle 
          projects that involve a high volume of data.</p>
      </div>
    </section>
  );
};

export default Introduction;