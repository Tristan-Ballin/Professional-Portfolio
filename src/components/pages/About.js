import React from 'react';
import Headshot from '../../assets/Headshot.jpg';

export default function About() {
  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <div className='d-flex align-items-center mb-3'>
          <img src={Headshot} height='150px' id='aboutMeHead' ></img>
          <h1 id='aboutHeader'>About Me</h1>
        </div>
        <p>
          Hi, I'm Tristan Ballin, a Software Developer. For as long as I can remember I have always been interested in technology and what makes it work. In 2017 I went to Florida Polytechnic University to start my journey in programming and never looked back. In the fall of 2022 I started the UCF full stack development bootcamp to enhance the skills I learned from my degree and add more practical skills to my arsenal. Now I'm enjoying finding new opportunities to increase my skills in order to become the best developer I can be!
        </p>
      </div>
    </main>
  );
}
