import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Welcome to <li>Buck-T</li></h1>
      <Link to=''>
        <About />
      </Link>
      <Link to=''>
        <Login />
      </Link>
    </div>
  )
}

export default NavBar;