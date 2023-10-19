import React from 'react';
import Vivo from '../../assets/VivoVirtuoso_screenshot.jpg';
import Auto from '../../assets/AutoAssistant.png';
import Jate from '../../assets/JATE.png';
// import Wip from '../../assets/work-in-progress.jpg';
// import Kwip from '../../assets/keyboard-work-in-progress.jpg';
// import Soon from '../../assets/coming-soon.jpg';
import Technigram from '../../assets/Technigram.jpg';

import { ImNewTab } from 'react-icons/im';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Portfolio() {
  return (
    <main className='d-flex mainPage justify-content-around flex-wrap'>

      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Vivo} className='images' alt='Sample of VivoVirtuoso'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/tristan-ballin/VivoVirtuoso' className='figLink' target="_blank" rel="noreferrer"><FaGithubSquare /></a>
          <a href='https://tristan-ballin.github.io/VivoVirtuoso/' className='figLink' target="_blank" rel="noreferrer"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Auto} className='images' alt='Sample of Auto Assistance'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/BenjaminCottrell/auto-assistant' className='figLink' target="_blank" rel="noreferrer"><FaGithubSquare /></a>
          <a href='https://young-retreat-27760.herokuapp.com/' className='figLink' target="_blank" rel="noreferrer"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Jate} className='images' alt='Sample of Text Editor'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/PWA-Text-Editor' className='figLink' target="_blank" rel="noreferrer"><FaGithubSquare /></a>
          <a href='https://whispering-sands-57070.herokuapp.com/' className='figLink' target="_blank" rel="noreferrer"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Technigram} className='images' alt='Sample of Technigram'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/PeteChicchetti/technigram' className='figLink' target="_blank" rel="noreferrer"><FaGithubSquare /></a>
          <a href='https://murmuring-depths-50021.herokuapp.com/builds/639e76bf0d78e50fc8cd5a0a' className='figLink' target="_blank" rel="noreferrer"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure>
      {/* <figure className='d-flex flex-column align-items-center figure'>
        <img src={Wip} className='images wipImage'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/' className='figLink' target="_blank"><FaGithubSquare /></a>
          <a  className='figLink' target="_blank"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure>
      <figure className='d-flex flex-column align-items-center figure'>
        <img src={Soon} className='images wipImage'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '3em'}}>
          <a href='https://github.com/ThatBallinGuy/' className='figLink' target="_blank"><FaGithubSquare /></a>
          <a  className='figLink' target="_blank"><ImNewTab /></a>
          </IconContext.Provider>
        </div>
      </figure> */}
      
      
      
    </main>
  );
}
