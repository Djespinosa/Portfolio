import React from 'react'
import './about.css'
import ME from '../../assets/fotoDeymer.png'
import {FaAward} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {MdCastForEducation} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
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
						<small>6 months of experience</small>
					</article>

					<article className='about__card'>
						<FaUserFriends className='about__icon'/>
						<h5>Clients</h5>
						<small>+100 clients</small>
					</article>

					<article className='about__card'>
						<MdCastForEducation className='about__icon'/>
						<h5>Education</h5>
						<small>Fullstack developer </small>
						<small>Industrial Engineer </small>
						<small>Specialist in business management</small>
					</article>
				</div>
				<p>
				Desarrollador Web Full Stack con una gran motivación para crecer profesionalmente en el amplio mundo del desarrollo web, me apasiona todo lo que se puede crear desde la programación y saber que puedo llegar a ser una pieza clave en el funcionamiento de una gran tecnología. Por mi parte, estoy dispuesto a dar lo mejor de mi en cualquier posición que ocupe, puedo referir entre mis habilidades, un buen aprendizaje autónomo, orientación al logro, trabajo en equipo y alta curva de aprendizaje. Tengo interés en puestos de Desarrollo Fullstack, Frontend ó Backend, donde pueda mostrar al 100% mis capacidades con el fin de generar valor a la compañía.
				</p>
				<a href="#contact" className='btn btn-primary'>Let's Talk</a>
			</div>		
		</div>
    </section>
  )
}

export default About