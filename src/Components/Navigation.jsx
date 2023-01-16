import React from 'react';
import '../CSS/Nav.css';

export default function Navigation() {
  return (
    <nav>
      <div className="general-links">
        <a>INÍCIO</a>
        <a>SOBRE MIM</a>
        <a>CONTATO</a>
      </div>
      <div className="more">
        <a>LINKEDIN</a>
        <a>GITHUB</a>
        <a href='#projects'>PROJETOS</a>
      </div>
    </nav>
  );
}
