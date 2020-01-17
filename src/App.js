import React from 'react';
import Home from './Home';
import './App.css';
import Procedures from './Procedures';
import Contact from './Contact'
import About from './About'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const proceduresArray = [
  'General Checkups',
  'Teeth Cleaning',
  'Cavity Screenings',
  'Cavity Fillings',
  'Chipped Tooth Fixings',
  'Tooth Removal',
  'Root Canals']


  const aboutArray=['name: Dentist', 'about: websit' ]

//import { Router, Route } from 'react-router-dom';
function App(){
  var prePath = "/dentist-React-App";
  return(

    

      <Router>

        <nav>
          <Link to={prePath +"/"}>Home</Link>{"  "}
          <Link to={prePath +"/procedures"}>Procedures</Link>{"  "}
          <Link to={prePath +"/contact"}>contact</Link>{"  "}
          <Link to={prePath +"/about"}>About</Link>
        </nav>
        <div>
          <Route exact path={prePath +"/"} component={Home} />
          <Route path={prePath +"/procedures"} component={() => <Procedures procedures={proceduresArray} />} />
          <Route path={prePath +"/contact"} component={Contact} />
          <Route path={prePath +"/about"} component={() => <About about={aboutArray}/>} />
        </div>
      </Router>

  )
}

export default App;