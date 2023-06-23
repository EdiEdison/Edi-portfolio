import React from 'react'

import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Web Interface Design.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>eCommerce & mCommerce Development.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Responsive Designs</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Website Architecture Development</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='service'>
          <div className="service__head">
            <h3>API Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Provide Scalable APIs for your Systems</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>API Consulting</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>API implemnentation and support</p>
            </li>
          </ul>
        </article>
        {/* END OF API DEVELOPMENT */}



        <article className='service'>
          <div className="service__head">
            <h3>Python/Django Lectures</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Step by Step Approach on Learning Python</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Quality Videos and instructor.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Practical Examples after each video.</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Python Mentorship.</p>
            </li>
          </ul>
        </article>
        {/* END OF leactures DEVELOPMENT */}

      </div>
    </section>
  )
}

export default Services