import React from 'react'
import { Link } from "react-scroll";
import "./style/Navbar.css"

function Navbar() {
    return (
        <div className="navigationBar">
        <ul className="listItem">
          <li> <Link to='home' smooth={true} duration={100}>Home </Link></li>
          <li> <Link to='skills' smooth={true} duration={100}>Skills </Link></li>
          <li> <Link to='education' smooth={true} duration={100}>Education </Link></li>
          <li> <Link to='contact' smooth={true} duration={100}>Contacts </Link></li>
        </ul>
        </div>
    )
}

export default Navbar
