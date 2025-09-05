import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Research Projects</h1>
        <p>Academic and technical research initiatives</p>
      </div>
      
      <div className="projects-content">
        <div className="project-item">
          <div className="project-icon">
            <i className="fas fa-train"></i>
          </div>
          <div className="project-details">
            <h3>Piezoelectric Energy Harvesting from Railway Vibrations</h3>
            <p className="project-period">May 2025</p>
            <div className="project-description">
              <p>
                COMSOL simulation project evaluating piezoelectric transducers for energy harvesting 
                from railway vibrations. This research compared Cantilever and Bridge-type piezoelectric 
                transducers, analyzing their efficiency in converting mechanical vibrations into electrical 
                energy under different frequency conditions.
              </p>
              <ul>
                <li>Developed multiphysics simulations using COMSOL</li>
                <li>Analyzed resonance frequencies and voltage outputs</li>
                <li>Compared performance of different transducer geometries</li>
                <li>Achieved voltage outputs in the range of 10⁻⁴ to 10⁻⁵ volts</li>
              </ul>
            </div>
            <a 
              href="https://github.com/UnkowwnPhysics/SI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
        
        <div className="project-item">
          <div className="project-icon">
            <i className="fas fa-water"></i>
          </div>
          <div className="project-details">
            <h3>3D Fluid Dynamics Simulation Optimization</h3>
            <p className="project-period">Parallel Computing Project</p>
            <div className="project-description">
              <p>
                High-performance computing project focused on optimizing a 3D fluid dynamics solver 
                using various parallelization techniques. Implemented multi-threading with OpenMP 
                and GPU acceleration with CUDA to achieve significant performance improvements.
              </p>
              <ul>
                <li>Optimized sequential code with ILP techniques and loop unrolling</li>
                <li>Implemented multi-threading with OpenMP, achieving 82% performance improvement</li>
                <li>Developed CUDA implementation for GPU acceleration</li>
                <li>Reduced processing time from over 60 seconds to 11 seconds</li>
              </ul>
            </div>
            <a 
              href="https://github.com/UnkowwnPhysics/3dfluid-main-" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fab fa-github"></i> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

