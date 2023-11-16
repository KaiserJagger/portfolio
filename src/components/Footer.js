import React from 'react';
import './styles/Footer.css'
import './styles/GlobalStyles.css';


const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-left">
        <h2>Let's make something amazing together</h2>

        <div className="email-form">
          <h2>Start by <span>saying hi</span></h2>
          <input type="text" name="name" id="" placeholder="Your name" />
          <input type="email" name="email" id="" placeholder="Email Address" />
          <div>
            <input type="number" name="phone-number" id="" placeholder="Phone number" />
            <button type="submit">Send</button>
          </div>
        </div>

        <div className="footer-title">
          <h3 className="title-first-name">
            KaiserJagger
          </h3>
          <h3 className="title-last-name">
            Freelance
          </h3>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-email-intro">
          <p>Information</p>
          <h6>San Miguel de Tucumán, Argentina <br/>CP: 4000</h6>
          <h3>tanmoytssaha@gmail.com</h3>
        </div>
      </div>
    </section>
  );
};

export default Footer;