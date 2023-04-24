import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


import { styles } from '../style'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('') // monitor screen
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX}
     w-full flex items-center py-5 top-0 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to='/' className=" flex items-center gap-2"
          onClick={() => {
            setActive("")
            window.scroll(0, 0) // scroll to top of page
          }}>

          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className='text-white text-[16px] font-bold cursor-pointer flex '>
            Titus &nbsp;<span className='sm:block hidden'>| Kiplagat</span></p>
        </Link>
        {/* navigation Link */}
        <ul className='list-none hidden  flex-row gap-10 sm:flex '>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={
                `${active === link.title ?
                  "text-white" :
                  "text-secondary"
                } text-[17px] font-medium cursor-pointer hover:text-white 
            `}
              onClick={() => {
                setActive(link.title)
              }} >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))
          }
        </ul>

        <div className="flex flex-1 justify-end items-center sm:hidden">
          <img src={toggle ? menu : close} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} /> {/* Toggle menu */}
          <div className={`${toggle ? 'hidden' : 'flex'} 
          p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px]
          z-10 rounded-xl`}>
            {/* navigation Link */}
            <ul className='list-none  flex justify-end items-start flex-col gap-4 '>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={
                    `${active === link.title ?
                      "text-white" :
                      "text-secondary"
                    } font-poppins font-medium text-[16px]
            `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }} >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar