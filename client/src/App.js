import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import People from './pages/Characters/characters';
import Home from './pages/Home/home';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/characters" component={People} />
    </Switch>
  </BrowserRouter>
);

export default App;
