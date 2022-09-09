import React, { useEffect, useRef, useState } from 'react'
import './about.css'
import ME from '../../assets/fotoDeymer.png'
import {FaAward} from 'react-icons/fa'
import {MdLanguage} from 'react-icons/md'
import {MdCastForEducation} from 'react-icons/md'

const About = () => {
	const [opacity, setOpacity] = useState('');
	const sectionRef = useRef();

	useEffect(() => {
		const handleScroll = () => {
			const section = sectionRef.current
			const { y } = section.getBoundingClientRect();
			const opacitySection = y <= 500 ? '#about' : '';
			setOpacity(opacitySection)			
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	})
  return (
    <section id='about' className={opacity === '' ? '': 'active'} ref={sectionRef}>
		<h5>Get to Know</h5>
		<h2>About me</h2>
		<div className="container about__container">
			<div className="about__me">
				<div className="about__me-image">
					<img src={ME} alt='me' />
				</div>				
			</div>
			<div className="about__content">
				<div className="about__cards">
					<article className='about__card'>
						<FaAward className='about__icon'/>
						<h5>Experience</h5>
						<small>6 months of experience.<br/></small>
						<small>Obtained in the elaboration of an integrating project as a degree option in Digital House.</small>
					</article>

					<article className='about__card'>
						<MdLanguage className='about__icon'/>
						<h5>Languages</h5>
						<small>* Spanish - Native Language.<br/></small>
						<small>* English - I am in training.</small>
					</article>

					<article className='about__card'>
						<MdCastForEducation className='about__icon'/>
						<h5>Education</h5>
						<small>+Fullstack Developer<br/></small>
						<small>+Industrial Engineer<br/></small>
						<small>+Specialist in business management</small>
					</article>
				</div>
				<p>
				Full Stack Web Developer with a great motivation to grow professionally in the wide world of web development. <br/>
				<br/>I'm passionate about everything that can be created from programming and knowing that I can become a key piece in the operation of great technology.<br/>
				<br/>I'm willing to give my best in any position I hold. I can refer to my skills as good autonomous learning, achievement orientation, teamwork and a high learning curve. I am interested in Fullstack, Frontend or Backend Development positions, where I can show 100% of my capabilities in order to generate value for the company.
				</p>				
			</div>		
		</div>
    </section>
  )
}

export default About