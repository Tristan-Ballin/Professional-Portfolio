import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function Contact() {

  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const userID = process.env.REACT_APP_USER_ID;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const nameInput = document.querySelector('#nameInput');
    const emailInput = document.querySelector('#emailInput');
    const messageInput = document.querySelector('#messageInput');

    if (nameInput.value && emailInput.value && messageInput.value !== '') {
      emailjs.sendForm(serviceID, templateID, e.target, userID)
          .then((response) => {
              Swal.fire({
                  icon: `success`,
                  title: `Your Message Was Sent Successfully.`
              })
          }, (error) => {
              Swal.fire({
                  icon: `error`,
                  title: `Uh Oh! There was an error processing your request`,
                  text: 'Please send an email directly to Tballin2000@hotmail.com',
              })
              console.log(error);
          });
      e.target.reset()
  }
  else {
      Swal.fire({
          icon: `error`,
          title: `Uh Oh! There was an error processing your request`,
          text: 'Please fill out all of the required fields before your request can be processed.',
      })
  }
  }

  const [isName, setIsName] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [correctEmail, setCorrectEmail] = useState(true);
  const [isMessage, setIsMessage] = useState(true);

  const validName = (e) => {
    if (e.target.value === '')
      setIsName(false);
    else
      setIsName(true);
  };
  const validEmail = (e) => {
    if (e.target.value === '') {
      setIsEmail(false);
      setCorrectEmail(true);
      return;
    }
    else
      setIsEmail(true);
    if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e.target.value))
      setCorrectEmail(true);
    else
      setCorrectEmail(false);

  };
  const validMessage = (e) => {
    if (e.target.value === '')
      setIsMessage(false);
    else
    setIsMessage(true);
  };


  const isNameDisplay = isName ? null : `* required`;
  const isEmailDisplay = isEmail ? null : `* required`;
  const isEmailValid = correctEmail ? null : `* please enter a valid email address`;
  const isMessageDisplay = isMessage ? null : `* required`;


  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <h2 className='formHeader'>Contact Me</h2><h5>Fill out the form or email me me at <a href='mailto: tballin2000@hotmail.com'>Tballin2000@hotmail.com</a></h5>
        <form className='formCard' onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label name="nameInput" >Name: </label>
            <input type="text" className="form-control" id="nameInput" name='from_name' placeholder="Full Name" onChange={validName} />
            <small id="nameHelp" className="form-text text-danger">{isNameDisplay}</small>
          </div>
          <div className="form-group">
            <label name="emailInput" >Email address:</label>
            <input type="email" className="form-control" id="emailInput" name='from_email' placeholder="myemail@example.com" onChange={validEmail} />
            <small id="emailHelp" className="form-text text-danger">{isEmailDisplay}{isEmailValid}</small>
          </div>
          <div className="form-group">
            <label name='messageInput' >Message:</label>
            <textarea className="form-control" id="messageInput" rows="6" name='message' onChange={validMessage}></textarea>
            <small id="messageHelp" className="form-text text-danger">{isMessageDisplay}</small>
          </div>
          <button type='submit' className='btn btn-outline-light'>Submit</button>
        </form>
      </div>
    </main>
  );
}
