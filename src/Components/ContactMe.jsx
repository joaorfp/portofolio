import React from 'react';
import '../CSS/ContactMe.css';

function ContactMe() {
  return (
    <div>
      <p id='title'>Entre em contato</p>
      <div className='div-contact'>
        <p className='title-contact'>Seu Feedback ou mensagem para mim.</p>
        <textarea type="text" name="" id="txtarea" />
        <br />
        <p className='title-contact'>Seu Email</p>
        <input type="email" id='email-input' autoComplete='email'/>
      </div>
    </div>
  );
}

export default ContactMe;