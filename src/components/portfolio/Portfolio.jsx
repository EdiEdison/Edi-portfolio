import React from 'react'
import './portfolio.css'
import blog from '../../assets/blog.jpg'
import health from '../../assets/health.jpg'
import todo from '../../assets/todo.jpg'


// Array of portfolio objects

const data = [

  {
    id: 1,
    image: blog,
    title: 'Blog Website',
    github: 'https://github.com/EdiEdison/blog-project'
  },
  {
    id: 2,
    image: health,
    title: 'Health Care Management System In Django',
    github: 'https://github.com/EdiEdison/HealthCareMaanagement'
  },
  {
    id: 3,
    image: todo,
    title: 'Todo List with Django and JavaScript',
    github: 'https://github.com/EdiEdison/Todo-List'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github}) => {
              return (
                <article key={id} className='portfolio__item'>
                  <div className='portfolio__item-image'>
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn'  target='blank'>Github</a>
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