import React from 'react'
import './about.css'
import me from '../../assets/photo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {AiFillFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
            <img src={me} alt="About imgae" />
        </div>

        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2 Years Working with Python And Django</small>
              </article>

              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>10+ clients </small>
              </article>

              <article className='about__card'>
                <AiFillFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>Completed about 5+ projects</small>
              </article>
            </div>

            <p>I'm a Software Engineer passionate a student in the University of Buea, Cameroon. I have been working with Python for 2 years and other libraries such as Django, Django Rest Framework etc.. <a href="#experience">Skills</a>  .I'm passionate about learning new skills and Improving as a software Engineer</p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About