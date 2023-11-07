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
            <h3>Finaco</h3>
            <div className="tech-stack">
              <p>GastbyJS</p>
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-1.png" alt="" className="project-img-2" />
        </div>

        <div className="project-card project-card-1">
          <div className="title">
            <h3>Finaco</h3>
            <div className="tech-stack">
              <p>GastbyJS</p>
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-1.png" alt="" className="project-img-2" />
        </div>

        <div className="project-card project-card-1">
          <div className="title">
            <h3>Finaco</h3>
            <div className="tech-stack">
              <p>GastbyJS</p>
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-1.png" alt="" className="project-img-2" />
        </div>
      </div>
      <div className="right-project">
        <div className="project-card project-card-2">
          <div className="title">
            <h3>Lewis</h3>
            <div className="tech-stack">
              <p>Flutter</p>
              <p>Django</p>
            </div>
          </div>
          <img src="assets/Projects/project-2.png" alt="" className="project-img-1" />
        </div>
        <div className="project-card project-card-3">
          <div className="title">
            <h3>Focus</h3>
            <div className="tech-stack">
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-3.png" alt="" className="project-img-3" />
        </div>
        <div className="project-card project-card-3">
          <div className="title">
            <h3>Focus</h3>
            <div className="tech-stack">
              <p>ReactJS</p>
              <p>HTML</p>
            </div>
          </div>
          <img src="assets/Projects/project-3.png" alt="" className="project-img-3" />
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
