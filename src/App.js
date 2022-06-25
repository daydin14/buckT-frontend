import { useState, useEffect } from 'react';
import { auth } from './services/firebase';
import { Route } from "react-router-dom";

// UI Components
import Footer from "./components/Footer"
import Show from './components/Show';
import NavBar from "./components/Navbar";
// import Bucket from "./components/Bucket";
import SideList from './components/Sidelist';

//  Pages
import About from "./pages/About";
import Home from "./pages/Home";

// Styles
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ bucket, setBucket ] = useState(null);
  const [ URL, setURL ] = useState(null)
  
  const getActivity = async () => {
    const URL = 'https://bucktt.herokuapp.com/activity/';
    setURL(URL)
    if (!user) return;
    const token = user.getIdToken();
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    const data = await response.json();
    setBucket(data);
  };

  const getLocation = async () => {
    const URL = 'https://bucktt.herokuapp.com/location/';
    setURL(URL)
    if (!user) return;
    const token = user.getIdToken();
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    });
    const data = await response.json();
    setBucket(data);
  };

  useEffect(() => {
    if (user) {
      getActivity();
      getLocation();
    } else {
      setBucket(null);
    }
  }, [user]);

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

      <Route exact path="/List">
        <SideList user={user} bucket={bucket} URL={URL}/>
        <div className="bucket">
          <h3 className="seperate" onClick={getActivity}><img src="https://cdn.iconscout.com/icon/free/png-256/man-biking-2363383-1974832.png" alt='activity' width={80}/></h3>
          <h3 className="seperate" onClick={getLocation}><img src="https://cdn.iconscout.com/icon/free/png-256/plane-2359613-1987480.png" alt='location' width={90}/></h3>
        </div>
      </Route>
  
      <Route
        exact path="/show/:id"
        render={(rp) => (

          <Show
            bucket={bucket}
            {...rp}
            URL={URL}
            getActivity={getActivity}
            getLocation={getLocation}
          />
        )}
      >
        
      </Route>

      <Footer />
    </div>
  );
}

export default App;
