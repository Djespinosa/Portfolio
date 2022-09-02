import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio1.jpg'

const data = [
  {
    id : 1,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  },
  {
    id : 2,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  },
  {
    id : 3,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  },
  {
    id : 4,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  },
  {
    id : 5,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  },
  {
    id : 6,
    image: IMG1,
    tittle: 'Portfolio Deymer Espinosa',
    github:'https://www.linkedin.com/in/deymer-espinosa-p/',
    demo: 'https://www.despinosap.com.co'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
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
                <a href={github} className='btn'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Live a Demo</a>
                </div> 
              </article>
            )
          })
        }   
      </div>
    </section>
  )
}

export default Portfolio