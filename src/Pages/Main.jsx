import React from 'react';
import '../CSS/HelloWorld.css';
import '../CSS/Main.css';

export default function Main() {
  return (
    <main>
      <div className='about-me'>
        <section className='text-white text-1xl hello-world'>
          <div className='bg1'>
            <p className='line typing-animation'>Olá, eu sou João Roberto, um Desenvolvedor Web</p>
          </div>
        </section>
      </div>
    </main>
  );
}
