import React from 'react';
import Main from './Pages/Main';
import Navigation from './Components/Navigation';
import './CSS/App.css';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='all'>
        <Main />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
}
