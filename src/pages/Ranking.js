import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ranking extends Component {
  render() {
    return (
      <>
        <h1 data-testid="ranking-title">Ranking</h1>
        <div>
          <Link to="/">
            <button
              data-testid="btn-go-home"
              type="button"
            >
              Inicio
            </button>
          </Link>
        </div>
      </>

    );
  }
}

export default Ranking;
