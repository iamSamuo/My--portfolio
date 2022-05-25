
import React from 'react'
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Error from './pages/404';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './index.css'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path = '/'>
        <Home/>
      </Route>
      <Route path = '*'>
        <Error/>
      </Route>
      </Switch>
  </Router>
   
    
  );
}

export default App;
