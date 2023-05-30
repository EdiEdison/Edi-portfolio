import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDots} from 'react-icons/bi'

import { useState } from 'react'

const Navbar = () =>{
    const [activenav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activenav === '#'? 'active' : ''}><AiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activenav === '#about'? 'active' : ''}><AiOutlineUser/></a>
            <a href='#experience' onClick={() => setActiveNav('#experience')} className={activenav === '#experience'? 'active' : ''}><BiBook/></a>
            <a href='#services' onClick={() => setActiveNav('#services')} className={activenav === '#services'? 'active' : ''}><RiServiceLine/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activenav === '#contact'? 'active' : ''}><BiMessageDots/></a>
        </nav>
    )
}

export default Navbar