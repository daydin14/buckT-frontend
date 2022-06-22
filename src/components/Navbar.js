import React from "react";
import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

const NavBar = (props) => {
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem', 
    margin: '0 1rem'
  };
  return (
    <div className="NavBar">
      <Link to='/'>
        <h1>{`<li>Buck-T</li>`}</h1>
      </Link>
      
      <span className="welcome">

        <Link to="/About">
          <h4 className="navLink">About</h4>
        </Link>
        {
          props.user
          ? 
          (
            <>
              <Link to='/List'>
                <h4 className="link">Your List</h4>
              </Link>
              <h4 className="navLink" onClick={logout} >Logout</h4>
              <h4 className="greeting-icon">
                <img 
                  style={photoStyles}
                  src={props.user.photoURL} 
                  alt={props.user.displayName} 
                />
              </h4>
            </>
          )
          : <h4 className="navLink" onClick={login} >Login</h4>
        }

      </span>
    </div>
  )
}

export default NavBar;