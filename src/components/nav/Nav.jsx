import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {RiServiceFill} from 'react-icons/ri'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiMessage2Fill} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><FaUserAlt /></a>
      <a href="#experience"><RiServiceFill /></a>
      <a href="#portfolio"><FaBook /></a>  
      <a href="#contact"><RiMessage2Fill /></a>
    </nav>
  )
}

export default Nav