import { Route } from "react-router-dom";

// UI Components
import Footer from "./components/Footer"
import MainBody from "./components/Mainbody";
import NavBar from "./components/Navbar";
import SideList from "./components/Sidelist";

//  Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";


// Styles
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBody />
      <Footer />
      <SideList />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/About">
        <About />
      </Route>


      <Route path="Login">
        <Login />
      </Route>
  
    </div>
  );
}

export default App;
