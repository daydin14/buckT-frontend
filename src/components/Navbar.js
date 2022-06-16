import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Welcome to <li>Buck-T</li></h1>
      <Link to="/About">
        <div>About</div>
      </Link>
      <Link to='/Login'>
        <div>Login</div>
      </Link>
    </div>
  )
}

export default NavBar;