import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Private from './pages/Private';
import Nav from './components/Nav';

import './App.css';

function App() {
    return ( 
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/private' component={Private}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
