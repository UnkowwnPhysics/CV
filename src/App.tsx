import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Overview from './components/MainContent/Overview';
import Projects from './components/MainContent/Projects';
import Experience from './components/MainContent/Experience';
import Education from './components/MainContent/Education';
import Skills from './components/MainContent/Skills';
import Contact from './components/MainContent/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <Overview />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">{renderContent()}</main>
    </div>
  );
}

export default App;
