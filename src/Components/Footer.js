import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Thalla Ganesh Goud</h4>
      <h4>Copyright &copy; 2025 Ganesh</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ThallaGaneshGoud" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/thalla-ganeshgoud-16b0702a5" target='_blank'><FaLinkedin/></a>
        <a href='ganeshgoudthalla18@gmail.com' target='_blank'><GrMail/></a>
       
      </div>
    </footer>
  )
}

export default Footer;