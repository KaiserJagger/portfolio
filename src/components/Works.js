
import React, { useState }from 'react';
import './styles/GlobalStyles.css';
import './styles/Works.css'




const LatestWorks = () => {
  const [pressedCards, setPressedCards] = useState([]);

  const handleCardClick = (index) => {
    setPressedCards((prevPressedCards) => {
      const updatedPressedCards = [...prevPressedCards];
      updatedPressedCards[index] = !updatedPressedCards[index];
      return updatedPressedCards;
    });
  };

  return (
    <section id="latest-works">
      
      <div className="title-works">
        <h2 className="title-intro">Works</h2>
      </div>
      <div className="left-project">
       <div className="flip-card" onClick={() => handleCardClick(0)}>
        <div className={`flip-card-inner${pressedCards[0] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
              <p class="title">DSJ</p>
              <p>- Distribuciones San Juan </p>
            <img src="assets/Projects/project-1.png" alt="" className="dsj" />
          </div>
          <div class="flip-card-back">
            <p>NodeJS</p>
            <p>Bootstrap</p>
            <p>MongoDB</p>
          </div>
      </div>
    </div>

    <div className="flip-card" onClick={() => handleCardClick(1)}>
        <div className={`flip-card-inner${pressedCards[1] ? ' pressed' : ''}`}>
              <div class="flip-card-front">
                  <p class="title">JaggerStore</p>
                  <p>Computer Components</p>
                  <a href="https://jaggerstore-production-c4a6.up.railway.app/" target="_blank">
                <img src="assets/Projects/jaggerstore.png" alt="" className="jg" />
                </a>
              </div>
              <div class="flip-card-back">
                  <p class="title">BACK</p>
                  <p>Leave Me</p>
              </div>
          </div>
      </div>
      </div>
      <div className="right-project">
      <div className="flip-card" onClick={() => handleCardClick(2)}>
        <div className={`flip-card-inner${pressedCards[2] ? ' pressed' : ''}`}>
                  <div class="flip-card-front">
                      <p class="title">AyR</p>
                      <p>Service Hardware and Sodtware</p>
                      {/* <img src="assets/Projects/project-1.png" alt="" className="project-img-2" /> */}
                  </div>
                  <div class="flip-card-back">
                      <p class="title">BACK</p>
                      <p>Leave Me</p>
                  </div>
              </div>
          </div>

          <div className="flip-card" onClick={() => handleCardClick(3)}>
        <div className={`flip-card-inner${pressedCards[3] ? ' pressed' : ''}`}>
                  <div class="flip-card-front">
                      <p class="title">API</p>
                      <p>Monetary conversions</p>
                      <img src="assets/Projects/project-3.png" alt="" className="api" />
                  </div>
                  <div class="flip-card-back">
                    <p>NodeJS</p>
                    <p>Express</p>
                    <p>MongoDB</p>
                  </div>
              </div>
          </div>
        </div>
      <div className="right-project">
         <div className="flip-card" onClick={() => handleCardClick(4)}>
        <div className={`flip-card-inner${pressedCards[4] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
                <p class="title">Happy Seeds</p>
                <p>Forage</p>
                <img src="assets/Projects/project-2.png" alt="" className="happy-seeds" />
            </div>
            <div class="flip-card-back">
                <p class="title">BACK</p>
                <p>Leave Me</p>
            </div>
        </div>
    </div>
    <div className="flip-card" onClick={() => handleCardClick(5)}>
        <div className={`flip-card-inner${pressedCards[5] ? ' pressed' : ''}`}>
            <div class="flip-card-front">
              <p class="title">JumpingMan</p>
              <p>Game</p>
              <img src="assets/Projects/jumping-man.png" alt="" className="jumping-man" />
            </div>
          <div class="flip-card-back">
            <p>JavaScript</p>
            <p>CSS</p>
            <p>HTML</p>
          </div>
      </div>
  </div>
      </div>
    </section>
  );
};

export default LatestWorks;
