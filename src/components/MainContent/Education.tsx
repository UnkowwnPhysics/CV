import React from 'react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <h1>Education & Experience</h1>
        <p>My academic journey and professional development</p>
      </div>
      
      <div className="education-content">
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <div className="education-details">
            <h3>Final Year Student</h3>
            <p className="education-institution">University of Minho</p>
            <p className="education-degree">Bachelor's Degree in Physical Engineering</p>
            <p className="education-period">Expected graduation: 2024</p>
            <p className="education-description">
              Comprehensive studies in applied physics, mathematics, and engineering principles 
              with a focus on practical applications and problem-solving.
            </p>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="education-details">
            <h3>IEEE Member</h3>
            <p className="education-institution">Institute of Electrical and Electronics Engineers</p>
            <p className="education-period">Current member</p>
            <p className="education-description">
              Active participation in the world's largest technical professional organization 
              dedicated to advancing technology for the benefit of humanity.
            </p>
            <a 
              href="https://www.ieee.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-link"
            >
              Visit IEEE website <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        
        <div className="education-item">
          <div className="education-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <div className="education-details">
            <h3>Research Intern</h3>
            <p className="education-institution">Institute for Plasmas and Nuclear Fusion (IPFN)</p>
            <p className="education-period">One-month internship</p>
            <p className="education-description">
              Gained hands-on experience in nuclear fusion research and plasma physics applications 
              at one of Portugal's leading research institutions in the field.
            </p>
            <a 
              href="https://www.ipfn.tecnico.ulisboa.pt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="education-link"
            >
              Visit IPFN website <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
