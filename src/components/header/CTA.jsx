import React from 'react'
import CV from '../../assets/HVDeymer.Espinosa2022.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download='CV-Deymer-Espinosa' className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA