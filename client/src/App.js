import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import People from './pages/Characters/characters';
import Home from './pages/Home/home';
import Navbar from './components/Navbar/Navbar';
import UnderConstruction from './pages/UnderConstruction';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={People} />
      <Route exact path="/comingsoon" component={UnderConstruction} />
    </Switch>
  </BrowserRouter>
);

export default App;
