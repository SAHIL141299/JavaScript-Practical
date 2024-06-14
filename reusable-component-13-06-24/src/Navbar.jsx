import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
         <nav>
      <ul >
        <li><Link className='navtag' to="/">Home</Link></li>
        <li><Link className='navtag' to="/contactus">Contect us</Link></li>
        <li><Link className='navtag' to="/footer">Footer</Link></li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
