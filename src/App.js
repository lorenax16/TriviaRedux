import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Game from './pages/Game';
import Configuracoes from './pages/Configuracoes';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/game" exact component={ Game } />
        <Route path="/configuracoes" exact component={ Configuracoes } />
        <Route path="/feedback" exact component={ Feedback } />
        <Route path="/ranking" exact component={ Ranking } />
      </Switch>
    </div>
  );
}
