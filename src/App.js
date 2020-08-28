import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom'

import Home from './Home'
import Procedures from './Procedures'
import Contact from './Contact'
import WidgetShow from './WidgetShow';
import MeetUs from './MeetUs';
import Appointment from './Appointment';
import OfficeTour from './OfficeTour'

function App() {

  const procedures = [
    'Deep Cleaning',
    'Oral Surgery',
    'Root Canal',
    'Crown',
    'Implants',
    'Fillings'
  ]

  const office = [
    'Front Desk',
    'Surgery Room'
  ]

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to='/'>Home</Link>{'  '}
          <Link to='/procedures'>See our Procedures</Link>{'  '}
          <Link to='/appointment'>Make Appointment</Link>{'   '}
          <Link to='/contact'>Contact Us</Link>{'  '}
          <Link to='/meetus'>Meet Us</Link>{'  '}
        </nav>
        <Route exact path='/' component={Home} />
        <Route path='/procedures' render={() => <Procedures procedures={procedures} />} />
        <Route path='/appointment' component={Appointment} />
        <Route path='/contact' component={Contact} />
        <Route path='/meetus' component={MeetUs} />
        <Route path='/widgets/:id' render={(props) => <WidgetShow procedures={procedures} {...props} /> } />
        <Route path='/office-tour' render={(props) => <OfficeTour office={office} {...props} /> } />
      </div>
    </Router>
    
  );
}

export default App;
