import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
const [active, setActive] = useState('') // monitor screen

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className=" flex items-center gap-2" 
        onClick={()=>{
          setActive("")
          window.scroll(0,0) // scroll to top of page
        }}>
          <img src ={logo} alt ="logo" className="w-9 h-9 object-contain"/> 
          <p className='text-white text-[18px] font-bold cursor-pointer '>
            Titus <span className ='sm:block hidden'>| Kiplagat</span></p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar