import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
import { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  
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
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_se4py27', 'template_vcbq7yd', form.current, 'bWrJ_LCikFfn9RVvJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id='contact' className={opacity === '' ? '': 'active'} ref={sectionRef}>
      <h5>Get in tounch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>deymerespinosap@gmail.com</h5>
            <a href="mailto:deymerespinosap@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+57)301 555 3504</h5>
            <a href="https://api.whatsapp.com/send/?phone=573015553504&text&type=phone_number&app_absent=0" target='_blank' rel='noopener noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact