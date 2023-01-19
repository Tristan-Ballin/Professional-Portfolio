import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";

export default function Footer() {
return (
    
    <footer className="d-flex justify-content-center align-items-center">
        <IconContext.Provider value={{size: '5em'}}>
        <a className='footerLink' href='https://github.com/ThatBallinGuy' target="_blank"><FaGithubSquare /></a>
        <a className='footerLink' href='https://www.linkedin.com/in/tristan-ballin/' target="_blank"><AiOutlineLinkedin /></a>
        <a className='footerLink' href='mailto: tballin2000@hotmail.com' target="_blank"><HiOutlineMail /></a>
        </IconContext.Provider>
    </footer>
    )
}