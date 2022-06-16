import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Buck-T</h1>
      <Link to="/About">
        <div className="link">About</div>
      </Link>
      <Link to='/Login'>
        <div className="link">Login</div>
      </Link>
    </div>
  )
}

export default NavBar;