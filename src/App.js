import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import TelaDeJogo from './pages/TelaDeJogo';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/teladejogo" exact component={ TelaDeJogo } />
      </Switch>
    </div>
  );
}
