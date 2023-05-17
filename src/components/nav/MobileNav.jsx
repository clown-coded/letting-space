import React from 'react'
import { Link } from 'react-router-dom'
import { X } from 'react-bootstrap-icons'

const MobileNav = ({closeMethod}) => {
  return (
   
          <div className='mobile-menu'>
              <button className='close-mobile-nav' onClick={closeMethod}>
              <X />
          </button>
          <img className='logo-mobile' src="./src/assets/letting-space-logo.png" alt="" />
          <ul className='mobile-menu-links'>
              <li className='mobile-link'> <Link to="/" onClick={closeMethod}>Home</Link> </li>
              <li  className='mobile-link'> <Link to="/about" onClick={closeMethod}>About</Link> </li>
              <li className='mobile-link'> <Link to="/book" onClick={closeMethod}>Book</Link> </li>
              <li className='mobile-link'> <Link to="/archive" onClick={closeMethod}>Archive</Link> </li>
              <li className='mobile-link'> <Link to="/blog" onClick={closeMethod}>Blog</Link> </li>
          </ul>
          </div>
          
      
    
  )
}

export default MobileNav