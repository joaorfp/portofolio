import React from 'react';
import Main from './Pages/Main';
import Navigation from './Components/Navigation';
import './CSS/App.css';
import Projects from './Components/Projects';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='fodase'>
        <Main />
        <Projects />
      </div>
    </div>
  );
}
