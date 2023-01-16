import React from 'react';
import '../CSS/HelloWorld.css';
import photo from '../img/pic.jpeg';
import '../CSS/Main.css';

export default function Main() {
  return (
    <main>
      <div className='about-me'>
        <img src={ photo } alt="picture of a wnoderful man" className="picture" />
        <section className='text-white text-1xl hello-world'>
          <div className='bg1'>
            <p className='line typing-animation'>Olá, eu sou João Roberto, um desenvolvedor Full-Stack</p>
          </div>
        </section>
      </div>
    </main>
  );
}
