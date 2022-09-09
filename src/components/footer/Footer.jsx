import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import Logo from '../../assets/LogoDespa.png'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'><img src={Logo} alt="Logo Despa" /></a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/deymer-espinosa-p/" target='_blank' rel='noopener noreferrer'><BsLinkedin /></a>
        <a href="https://www.instagram.com/deymerep/" target='_blank' rel='noopener noreferrer'><BsInstagram /></a>
        <a href="https://twitter.com/deymerep" target='_blank' rel='noopener noreferrer'><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; DESPA Developer. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer