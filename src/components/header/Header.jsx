import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/fotoDeymer2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <section id='header'>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Deymer Espinosa</h1>
        <h2 className="text-light">Fullstack Developer | Industrial Engineer</h2>        
        <CTA />
        <HeaderSocials />
      </div>
      <div className='container__me'>
        <div className="me">
          <img src={ME} alt='me' className='me-image'/>
        </div>
        <div className="me2">          
        </div>
        <div className="me3">        
        </div>        
      </div>
    </section>
  )
}
export default Header