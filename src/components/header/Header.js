import React from 'react'

import './header.css'
import me from '../../assets/photo.jpg'
import './CTA'
import CTA from './CTA'
import HeaderSocial  from './HeaderSocial'




export const Header = () => {
    return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Edi Edison</h1>
            <h5 className='text-light'>junior Django Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className='my_image'>
            <img src={me} alt='my image'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
    </header>
    )
}
export default Header;