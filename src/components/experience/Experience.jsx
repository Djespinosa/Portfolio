import React, { useEffect, useState, useRef } from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  const [opacity, setOpacity] = useState('');
	const sectionRef = useRef();

  useEffect(() => {
		const handleScroll = () => {
			const section = sectionRef.current
			const { y } = section.getBoundingClientRect();
			const opacitySection = y <= 600 ? '#experience' : '';
			setOpacity(opacitySection)			
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	})

  return (
    <section id='experience' className={opacity === '' ? '': 'active'} ref={sectionRef}>
      <h5>What skills i have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>  Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Intermedium</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sequelize</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience