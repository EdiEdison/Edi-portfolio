import React from 'react'
import './testimonials.css'
import w1 from '../../assets/w1.jpg'
import w2 from '../../assets/w2.jpg'
import m from '../../assets/m.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//Dynamic data
const data = [
    {
        avatar: w1,
        name: 'Tina Snow',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa dolorum excepturi ad non voluptas voluptates, animi maxime quidem iure illo exercitationem, commodi, veritatis dicta tempora necessitatibus cupiditate id eligendi.',
    },
    {
        avatar: w2,
        name: 'Caitlin Maria',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa dolorum excepturi ad non voluptas voluptates, animi maxime quidem iure illo exercitationem, commodi, veritatis dicta tempora necessitatibus cupiditate id eligendi.',
    },
    {
        avatar: m,
        name: 'John Smith',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa dolorum excepturi ad non voluptas voluptates, animi maxime quidem iure illo exercitationem, commodi, veritatis dicta tempora necessitatibus cupiditate id eligendi.',
    },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from Clients</h5>
        <h2>Testimonials</h2>


        <Swiper className="container testimonials__container"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
                return (
                    <SwiperSlide key={index} className='testimonials'>
                    <div className="client__avatar">
                        <img src={avatar}  />
                    </div>
                    <h5 className='client__name'>{name}</h5>
                    <small className='client__review'>
                        {review}
                    </small>
                </SwiperSlide>
                )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials