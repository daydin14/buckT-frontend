import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route } from "react-router-dom";

// UI Components
import Footer from "./components/Footer"
// import MainBody from "./components/Mainbody";
// import SideList from "./components/Sidelist";
import NavBar from "./components/Navbar";
import Bucket from "./components/Bucket";

//  Pages
import About from "./pages/About";
import Home from "./pages/Home";

// import Login from "./pages/Login";



// Styles
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
      return () => {
        unsubscribe();
      };
  }, []);
  return (
    <div className="App">
      <NavBar user={user}/>

      <Route exact path="/">
        <Home user={user}/>
      </Route>

      <Route path="/About">
        <About />
      </Route>

      <Route path="/List">
        <Bucket user={user}/>
        {/* <SideList user={user}/>
        <MainBody /> */}
      </Route>
  
      <Footer />
    </div>
  );
}

export default App;
