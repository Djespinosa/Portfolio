import React, { useEffect, useRef, useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.png'
import IMG2 from '../../assets/PersonalGrowth.png'

const data = [
  {
    id : 1,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://github.com/Djespinosa/portfolio.git',
    demo: ''
  }
]

const Portfolio = () => {
  
  const [opacity, setOpacity] = useState('');
	const sectionRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const section = sectionRef.current
			const { y } = section.getBoundingClientRect();
			const opacitySection = y <= 600 ? '#portfolio' : '';
			setOpacity(opacitySection)			
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	})

  return (
    <section id='portfolio' className={opacity === '' ? '': 'active'} ref={sectionRef}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, tittle, github, demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt='Portfolio1'/>
                </div>
                <h3>{tittle}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href={demo}  className='btn btn-primary' target='_blank' rel='noopener noreferrer' >Live a Demo</a>
                </div> 
              </article>
            )
          })
        }     
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG2} alt='Personal Growth'/>
                </div>
                <h3>I'm in professional growth</h3>
                <div className='portfolio__item-cta'>
                <p>Soon I will add new projects</p>
                </div> 
              </article>         
      </div>            
      
    </section>
  )
}

export default Portfolio