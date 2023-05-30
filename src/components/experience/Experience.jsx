import React from 'react'

import {BsCheckAll} from 'react-icons/bs'

import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience_details'>
              <BsCheckAll className='experience__deails-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsCheckAll className='experience__deails-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsCheckAll className='experience__deails-icon'/>
              <div>
                <h4>BOOTSRAP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckAll className='experience__deails-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience_details'>
                <BsCheckAll className='experience__deails-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsCheckAll className='experience__deails-icon'/>
                <div>
                  <h4>Django</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsCheckAll className='experience__deails-icon'/>
                <div>
                  <h4>Django Rest Framework</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience_details'>
                <BsCheckAll className='experience__deails-icon'/>
                <div>
                  <h4>java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience