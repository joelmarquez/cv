import React from 'react';
import Main from '../components/Main.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Info from '../components/Info.jsx';
import About from '../components/About.jsx';
import Education from '../components/Education.jsx';
import Experience from '../components/Experience.jsx';
import Certificates from '../components/Certificates.jsx';
import Skills from '../components/Skills.jsx';

const App = () => {
    return (
      <Main>
        <Sidebar>
          <About/>
        </Sidebar>
        <info>
          <Education/>
          <Experience/>
          <Certificates/>
          <Skills/>
        </info>
      </Main>
    );
};

export default App;