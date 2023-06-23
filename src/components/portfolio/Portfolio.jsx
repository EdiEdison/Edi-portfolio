import React from 'react'
import './portfolio.css'
import blog from '../../assets/blog.jpg'
import health from '../../assets/health.jpg'
import todo from '../../assets/todo.jpg'
import axios from 'axios'
import {useState, useEffect} from 'react'


const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/portfolio');
        setPortfolioData(response.data);
      } catch (error) {
        console.error('Error fetching Portfolio Data:', error)
      }
    };

    fetchPortfolioData();
  }, []);

  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            portfolioData.map(({id, image, title, github}) => {
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

  );


};

export default Portfolio;