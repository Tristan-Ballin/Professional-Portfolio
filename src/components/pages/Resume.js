import React from 'react';
import ResumeImg from '../../assets/Resume.png';
import ResumePdf from '../../assets/Tristan_Resume.pdf'

import { BiDownload } from 'react-icons/bi';
import { IconContext } from "react-icons";

export default function Resume() {
  return (
    <main className='d-flex mainPage align-items-center justify-content-center'>

      <figure className='d-flex flex-column align-items-center resumeFig'>
        <img src={ResumeImg} className='images'></img>
        <div className='figLinkContainer'>
        <IconContext.Provider value={{size: '1.5em'}}>
          <a href={ResumePdf} className='figLink' id='download' target="_blank"><BiDownload /> Download</a>
          </IconContext.Provider>
        </div>
      </figure>

    </main>
  );
}
