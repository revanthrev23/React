import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from './pages/SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>
          <Route path="/">  
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
