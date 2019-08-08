import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Private from './pages/Private';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
    return ( 
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/private' component={Private}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
