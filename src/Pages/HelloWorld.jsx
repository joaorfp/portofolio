import React from 'react';
import Header from '../Components/Header';
import '../CSS/HelloWorld.css';

export default function Main() {
  return (
    <main>
      <Header />
      <section className='bg-neutral-800 text-white text-1xl hello-world'>
        <div>
          <p className='line typing-animation'>Olá, eu sou João Roberto, um desenvolvedor Full-Stack</p>
        </div>
      </section>
    </main>
  );
}
