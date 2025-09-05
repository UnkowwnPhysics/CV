import React from 'react';
import './Skills.css';

interface Skill {
  name: string;
  level: number;
  description: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    {
      name: "COMSOL Multiphysics",
      level: 5,
      description: "Advanced expertise in multiphysics simulations and complex analyses"
    },
    {
      name: "Physics",
      level: 5,
      description: "Deep knowledge in theoretical and applied physics"
    },
    {
      name: "Math skills",
      level: 4,
      description: "Advanced competency in applied mathematics and modeling"
    },
    {
      name: "Python",
      level: 4,
      description: "Script development, automation, and data analysis"
    },
    {
      name: "English",
      level: 4,
      description: "Technical fluency and professional communication skills"
    },
    {
      name: "C",
      level: 2,
      description: "Basic knowledge in systems programming"
    },
    {
      name: "C++",
      level: 2,
      description: "Initial experience with .NET development"
    },
    {
      name: "JS",
      level: 1,
      description: "Introductory knowledge of JavaScript"
    },
    {
      name: "React",
      level: 1,
      description: "Basic experience with interface development"
    },
    {
      name: "MatLab",
      level: 1,
      description: "Initial notions of mathematical computing"
    },
    {
      name: "CUDA",
      level: 1,
      description: "Initial familiarity with parallel GPU computing"
    }
  ];

  const renderSkillLevel = (level: number) => {
    const maxLevel = 5;
    const circles = [];
    
    for (let i = 1; i <= maxLevel; i++) {
      circles.push(
        <div 
          key={i} 
          className={`skill-circle ${i <= level ? 'filled' : 'empty'}`}
          title={getLevelDescription(i)}
        ></div>
      );
    }
    
    return <div className="skill-level">{circles}</div>;
  };

  const getLevelDescription = (level: number): string => {
    switch(level) {
      case 1: return "Beginner - Basic knowledge";
      case 2: return "Competent - Practical knowledge";
      case 3: return "Intermediate - Independent application";
      case 4: return "Advanced - Complex application";
      case 5: return "Expert - Complete mastery";
      default: return "";
    }
  };

  return (
    <div className="skills-container">
      <div className="skills-header">
        <h1>Skills & Expertise</h1>
        <p>Assessment of proficiency level in each area</p>
      </div>
      
      <div className="skills-legend">
        <h3>Proficiency Legend:</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div className="skill-circle filled"></div>
            <span>Expert - Complete mastery</span>
          </div>
          <div className="legend-item">
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle empty"></div>
            <span>Advanced - Complex application</span>
          </div>
          <div className="legend-item">
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <span>Intermediate - Independent application</span>
          </div>
          <div className="legend-item">
            <div className="skill-circle filled"></div>
            <div className="skill-circle filled"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <span>Competent - Practical knowledge</span>
          </div>
          <div className="legend-item">
            <div className="skill-circle filled"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <div className="skill-circle empty"></div>
            <span>Beginner - Basic knowledge</span>
          </div>
        </div>
      </div>
      
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-info">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
            <div className="skill-visual">
              {renderSkillLevel(skill.level)}
              <span className="skill-level-text">{getLevelDescription(skill.level)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills;
