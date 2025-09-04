import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1>Professional Experience</h1>
        <p>Technical expertise and project accomplishments</p>
      </div>
      
      <div className="experience-content">
        <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-code"></i>
          </div>
          <div className="experience-details">
            <h3>Python Development</h3>
            <p className="experience-period">Throughout academic curriculum</p>
            <div className="experience-description">
              <p>
                Acquired extensive experience utilizing Python for solving diverse computational problems 
                throughout my academic journey. Applied numerical methods and computational techniques to 
                address complex engineering and physics challenges.
              </p>
              <ul>
                <li>Developed solutions for numerical analysis and scientific computing</li>
                <li>Created visualizations to represent physical phenomena and simulation results</li>
                <li>Implemented algorithms for data processing and mathematical modeling</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <div className="experience-details">
            <h3>Parallel Computing Project</h3>
            <p className="experience-period">3-month research initiative</p>
            <div className="experience-description">
              <p>
                Spearheaded a fluid dynamics research project implementing parallel computing solutions 
                using C and CUDA technologies. Optimized computational performance resulting in 
                significant efficiency improvements.
              </p>
              <ul>
                <li>Designed and implemented parallel algorithms for fluid simulation</li>
                <li>Achieved an 82% reduction in processing time (from 60+ seconds to 11 seconds)</li>
                <li>Applied knowledge of GPU programming and parallel architecture</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="experience-item">
          <div className="experience-icon">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="experience-details">
            <h3>Problem-Solving Aptitude</h3>
            <p className="experience-period">Continuous skill development</p>
            <div className="experience-description">
              <p>
                Demonstrated exceptional capacity for rapidly acquiring new technical knowledge and 
                applying innovative solutions to complex challenges across engineering, physics, 
                and programming domains.
              </p>
              <ul>
                <li>Quickly master new technical concepts and methodologies</li>
                <li>Excel at analytical thinking and systematic problem-solving</li>
                <li>Adapt efficiently to unfamiliar technical environments and requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
