import React from 'react';

export default function Contact() {
  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <h2 className='formHeader'>Contact</h2>
        <form className='formCard' >
          <div className="form-group">
            <label name="nameInput" >Name: </label>
            <input type="text" className="form-control" id="nameInput" name='from_name' placeholder="First Name Last Name" />

          </div>
          <div className="form-group">
            <label name="emailInput" >Email address:</label>
            <input type="email" className="form-control" id="emailInput" name='from_email' placeholder="myemail@example.com" />

          </div>
          <div className="form-group">
            <label name='messageInput' >Message:</label>
            <textarea className="form-control" id="messageInput" rows="6" name='message' ></textarea>

          </div>
          <button  type='submit'>Submit</button>
        </form>
      </div>
    </main>
  );
}
