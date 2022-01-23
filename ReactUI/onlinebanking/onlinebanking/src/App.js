import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Interest from './components/pages/Interest';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Recharge from './components/pages/Recharge';
// import CollegeFees from './components/pages/Collegefees';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/Interest' component={Interest} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/Recharge' component={Recharge} />
        {/* <Route path='/CollegeFees' component={CollegeFees} /> */}
      </Switch>
    </Router>
  );
}

export default App;
