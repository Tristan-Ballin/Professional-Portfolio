import React from 'react';
import Headshot from '../../assets/Headshot.jpg';
import Cluster from '../../assets/html-css-js.png';
import ReactImg from '../../assets/react.png';
import Mysql from '../../assets/mysql.png';
import Python from '../../assets/python.png';
import Java from '../../assets/java.png';

export default function About() {
  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>
      <div className='content'>
        <div className='d-flex align-items-center mb-3 justify-content-between'>
          <img src={Headshot} height='150px' id='aboutMeHead' ></img>
          <div className='d-flex align-items-center justify-content-around flex-wrap skillsContainer' >
          <img src={Cluster} className='aboutSkills'></img>
          <img src={Python}  className='aboutSkills'></img>
          <img src={Java}  className='aboutSkills'></img>
          <img src={Mysql}  className='aboutSkills'></img>
          <img src={ReactImg}  className='aboutSkills'></img>
          </div>
        </div>
        <p>
          Hi, I'm Tristan Ballin, a Software Developer. For as long as I can remember I have always been interested in technology and what makes it work. In 2017 I went to Florida Polytechnic University to start my journey in programming and never looked back. In the fall of 2022 I started the UCF full stack development bootcamp to enhance the skills I learned from my degree and add more practical skills to my arsenal. Now I'm enjoying finding new opportunities to increase my skills in order to become the best developer I can be!
        </p>
      </div>
    </main>
  );
}
