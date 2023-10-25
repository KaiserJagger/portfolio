
import React from 'react';
import './styles/Menu.css'
import './styles/SectionBody.css'


const Menu = () => {
  return (
    <section id="header">
      <div className="navbar-title">
        <h3 className="title-first-name">
          KaiserJagger
        </h3>
      </div>
      <div>
        <ul className="navbar-menu">
          <li><a className="active" href="#content-body">&lt; Home &gt;</a></li>
          <li><a className="" href="#latest-works">Works</a></li>
          <li><a className="" href="#introduction">About me</a></li>
          <li><a className="" href="#footer">Contacts</a></li>
        </ul>
      </div>
      <div>
        <ul className="social-media">
          <li>
            <i className="fab fa-linkedin-in"></i>
            <a href="https://www.linkedin.com/in/nicol%C3%A1s-andreolli-940408219/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <i className="fab fa-github"></i>
            <a href="https://github.com/KaiserJagger" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
          <li>
            <i className="far fa-envelope"></i>
            <a href="mailto:kaiserjager10@gmail.com">Email</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Menu;
