import React from 'react';
import './Overview.css';

// Import your photo - make sure to place your image in the src/assets folder
// If you don't have a photo yet, you can use a placeholder
import profilePhoto from '../assets/profile.jpg'; // Update this path to your actual photo

const Overview: React.FC = () => {
  return (
    <div className="overview-container">
      <div className="overview-header">
        <h1>Professional Overview</h1>
        <p>Get to know me better</p>
      </div>
      
      <div className="overview-content">
        <div className="profile-section">
          <div className="profile-photo-container">
            <img 
              src={profilePhoto} 
              alt="Luís David Ferreira da Silva" 
              className="profile-photo"
            />
            <div className="photo-overlay">
              <span>Physical Engineering Student</span>
            </div>
          </div>
          
          <div className="profile-details">
            <h2>Luís David Ferreira da Silva</h2>
            <div className="detail-item">
              <i className="fas fa-user"></i>
              <span>21 years old</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Madeira, Portugal</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-graduation-cap"></i>
              <span>Final Year Physics Engineering Student</span>
            </div>
            <div className="detail-item">
              <i className="fas fa-university"></i>
              <span>University of Minho</span>
            </div>
          </div>
        </div>
        
        <div className="bio-section">
          <h3>About Me</h3>
          <p>
            I am a dedicated final-year Physical Engineering student at the University of Minho 
            with a strong passion for computational physics, problem-solving, and technological innovation. 
            My academic journey has equipped me with extensive experience in numerical methods, 
            parallel computing, and scientific programming.
          </p>
          <p>
            With a foundation in both theoretical and applied physics, I specialize in transforming 
            complex problems into efficient computational solutions. My experience ranges from 
            multiphysics simulations to performance optimization projects, where I successfully 
            reduced processing time by over 80% through parallel computing techniques.
          </p>
          <p>
            I am an active IEEE member and have completed research internships at prestigious 
            institutions like IPFN, where I applied my knowledge to practical challenges in 
            plasma physics and nuclear fusion.
          </p>
        </div>
        
        <div className="quick-facts">
          <h3>At a Glance</h3>
          <div className="facts-grid">
            <div className="fact">
              <div className="fact-icon">
                <i className="fas fa-code"></i>
              </div>
              <h4>Technical Skills</h4>
              <p>Python, C, CUDA, COMSOL, MATLAB</p>
            </div>
            <div className="fact">
              <div className="fact-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h4>Research Focus</h4>
              <p>Computational Physics & Simulation</p>
            </div>
            <div className="fact">
              <div className="fact-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Strengths</h4>
              <p>Problem-solving & Rapid Learning</p>
            </div>
            <div className="fact">
              <div className="fact-icon">
                <i className="fas fa-language"></i>
              </div>
              <h4>Languages</h4>
              <p>Portuguese, English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
