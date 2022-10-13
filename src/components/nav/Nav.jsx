import React from 'react'
import './nav.css'
import { useState } from 'react'
import Logo from '../../assets/LogoNav.png'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from 'react-icons/ai'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  const [activeIcon, setActiveIcon] = useState('iconClose');  
  
  const sections = document.querySelectorAll('section');

    window.onscroll = ()=>{ 
      const scrollPosition = document.documentElement.scrollTop;
      sections.forEach(section =>{
        if(scrollPosition >= section.offsetTop - section.offsetHeight*0.4 &&
          scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight*0.3
          ){
            const currentId = section.attributes.id.value;
            setActiveNav('#'+currentId);           
          }
        }); 
      }

  return (
    <nav>
      <div className='logoNav'> 
      <a href="#header"><img src={Logo} alt="Logo Despa" /></a>
      </div>
      <div className='menuIcon'>
        <i onClick={()=> setActiveIcon('iconHamburger')} className={activeIcon === 'iconHamburger' ? 'visible': 'iconHamburger'}>
            <HiMenu />
        </i>
        <i onClick={()=> setActiveIcon('iconClose')} className={activeIcon === 'iconClose' ? 'visible':'iconClose'}>
            <AiFillCloseCircle />
        </i>
      </div>
      <div onClick={()=> setActiveIcon('iconHamburger')} className={activeIcon === 'iconHamburger' ? 'navMenu visibleNav': 'navMenu'}>
        <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active':''} >Home</a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':  ''} >About me</a>
        <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''} >Experience</a>
        <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''} >Portfolio</a>  
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''} >Contact</a>
      </div>
    </nav>
  )
  }

export default Nav