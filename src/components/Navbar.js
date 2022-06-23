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
        <h1><img src="https://cdn-icons-png.flaticon.com/512/3713/3713262.png" width={60} title="Create"/></h1>
      </Link>
      
      <span className="welcome">

        <Link to="/About">
          <h4 className="navLink"><img src="https://img.icons8.com/bubbles/344/about.png" width={60} title="ABOUT"/></h4>
        </Link>
        {
          props.user
          ? 
          (
            <>
              <Link to='/List'>
                <h4 className="link"><img src="https://img.icons8.com/bubbles/344/list.png" width={60} title="LIST"/></h4>
              </Link>
              <h4 className="navLink" onClick={logout}><img src="https://img.icons8.com/bubbles/344/logout-rounded.png" width={60} title="Logout"/></h4>
              <h4 className="greeting-icon">
                <img 
                  style={photoStyles}
                  src={props.user.photoURL} 
                  alt={props.user.displayName} 
                />
              </h4>
            </>
          )
          : <h4 className="navLink" onClick={login}><img src="https://img.icons8.com/dusk/344/login-rounded-down.png" width={40} title="Login"/></h4>
        }

      </span>
    </div>
  )
}

export default NavBar;