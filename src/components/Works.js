import React from 'react';
import './styles/GlobalStyles.css';
import './styles/Works.css'

const LatestWorks = () => {
  return (
    <section id="latest-works">
      <div className="left-project">
        <div className="latest-work-title">
          <h3>Latest Works</h3>
          <p>Perfect solutions for digital experience</p>
        </div>

        <div className="project-card project-card-1">
          <div className="title">
            <h3>DSF - Distribuciones San Juan
            </h3>
            <div className="tech-stack">
              <p>NodeJS</p>
              <p>Bootstrap</p>
              <p>MongoDB</p>
            </div>
          </div>
          <img src="assets/Projects/project-1.png" alt="" className="project-img-1" />
        </div>

        <div className="project-card project-card-2">
          <div className="title">
            <h3>AyR- Service</h3>
            <div className="tech-stack">
              <p>GastbyJS</p>
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-1.png" alt="" className="project-img-2" />
        </div>

        <div className="project-card project-card-3"> 
          <div className="title">
            <h3>JumpingMan</h3>
            <div className="tech-stack">
              <p>JavaScript</p>
              <p>CSS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/jumping-man.png" alt="" className="project-img-3" />
        </div>
      </div>
      <div className="right-project">
        <div className="project-card project-card-4">
          <div className="title">
            <h3>Happy Seeds</h3>
            <div className="tech-stack">
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
          <img src="assets/Projects/project-2.png" alt="" className="project-img-4" />
        </div>

        <div className="project-card project-card-5">
          <div className="title">
            <h3>JaggerStore- Informatica</h3>
            <div className="tech-stack">
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </div>
          <a href="https://jaggerstore-production-c4a6.up.railway.app/" target="_blank">
          <img src="assets/Projects/jaggerstore.png" alt="" className="project-img-5" />
        </a>
        </div>

        <div className="project-card project-card-6">
          <div className="title">
            <h3>Api Conversiones</h3>
            <div className="tech-stack">
              <p>NodeJS</p>
              <p>Express</p>
              <p>MongoDB</p>
            </div>
          </div>
          <img src="assets/Projects/project-3.png" alt="" className="project-img-6" />
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
