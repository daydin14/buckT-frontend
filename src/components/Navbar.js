import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to='/'>
        <h1>{`<li>Buck-T</li>`}</h1>
      </Link>
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