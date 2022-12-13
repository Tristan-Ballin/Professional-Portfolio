import React from 'react';
import Vivo from '../../assets/VivoVirtuoso_screenshot.jpg';
import Auto from '../../assets/AutoAssistant.png';
import Jate from '../../assets/JATE.png';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Portfolio() {
  return (
    <main className='d-flex mainPage justify-content-around flex-wrap'>

      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Vivo} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/VivoVirtuoso' className='figLink'><FaGithubSquare /></a>
          <a href='https://thatballinguy.github.io/VivoVirtuoso/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Auto} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/BenjaminCottrell/auto-assistant' className='figLink'><FaGithubSquare /></a>
          <a href='https://young-retreat-27760.herokuapp.com/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Jate} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/PWA-Text-Editor' className='figLink'><FaGithubSquare /></a>
          <a href='https://whispering-sands-57070.herokuapp.com/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Vivo} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/VivoVirtuoso' className='figLink'><FaGithubSquare /></a>
          <a href='https://thatballinguy.github.io/VivoVirtuoso/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Vivo} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/VivoVirtuoso' className='figLink'><FaGithubSquare /></a>
          <a href='https://thatballinguy.github.io/VivoVirtuoso/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Vivo} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/VivoVirtuoso' className='figLink'><FaGithubSquare /></a>
          <a href='https://thatballinguy.github.io/VivoVirtuoso/' className='figLink'><AiOutlineLinkedin /></a>
          </IconContext.Provider>
        </div>
      </figure>
      
      
      
    </main>
  );
}
