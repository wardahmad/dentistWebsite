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
  return(
    

      <Router>

        <nav>
          <Link to="/">Home</Link>{"  "}
          <Link to="/procedures">Procedures</Link>{"  "}
          <Link to="/contact">contact</Link>{"  "}
          <Link to="/about">About</Link>
        </nav>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/procedures" component={() => <Procedures procedures={proceduresArray} />} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={() => <About about={aboutArray}/>} />
        </div>
      </Router>

  )
}

export default App;