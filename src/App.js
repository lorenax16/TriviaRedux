import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import TelaDeJogo from './pages/TelaDeJogo';
import Configuracoes from './pages/Configuracoes';

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={ Login } />
        <Route path="/teladejogo" exact component={ TelaDeJogo } />
        <Route path="/configuracoes" exact component={ Configuracoes } />
      </Switch>
    </div>
  );
}
