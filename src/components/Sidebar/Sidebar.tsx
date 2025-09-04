// Sidebar.tsx
import { FaUser, FaProjectDiagram, FaBriefcase, FaGraduationCap, FaTools, FaEnvelope } from 'react-icons/fa';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  return (
    <aside className="sidebar">
      <h2>My CV</h2>
      <ul>
        <li
          className={activeSection === 'overview' ? 'active' : ''}
          onClick={() => setActiveSection('overview')}
        >
          <FaUser /> Overview
        </li>
        <li
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => setActiveSection('projects')}
        >
          <FaProjectDiagram /> Projects
        </li>
        <li
          className={activeSection === 'experience' ? 'active' : ''}
          onClick={() => setActiveSection('experience')}
        >
          <FaBriefcase /> Experience
        </li>
        <li
          className={activeSection === 'education' ? 'active' : ''}
          onClick={() => setActiveSection('education')}
        >
          <FaGraduationCap /> Education
        </li>
        <li
          className={activeSection === 'skills' ? 'active' : ''}
          onClick={() => setActiveSection('skills')}
        >
          <FaTools /> Skills
        </li>
        <li
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => setActiveSection('contact')}
        >
          <FaEnvelope /> Contact
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
