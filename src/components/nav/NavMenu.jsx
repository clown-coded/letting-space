import React from 'react'
import { Link } from 'react-router-dom'

const NavMenu = ({ closeMethod }) => {
    
    return (
      
      <div className='nav-links-container'>
          <ul className='nav-menu-links'>
              <li className='nav-link'> <Link to="/" >Home</Link> </li>
              <li  className='nav-link'> <Link to="/about" >About</Link> </li>
              <li className='nav-link'> <Link to="/book" >Book</Link> </li>
              <li className='nav-link'> <Link to="/archive" >Archive</Link> </li>
              <li className='nav-link'> <Link to="/blog" >Blog</Link> </li>
          </ul>
          
    </div>
  )
}

export default NavMenu
