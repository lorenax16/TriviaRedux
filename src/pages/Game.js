import React, { Component } from 'react';
import Header from '../Components/Header';
import RenderQuestions from '../Components/RenderQuestions';

class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <RenderQuestions />

      </>
    );
  }
}

export default Game;
