import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import RenderQuestions from '../Components/RenderQuestions';
import { fetchTrivia } from '../api/fetchAPI';

class Game extends Component {
  componentDidMount() {
    this.getQuestions();
  }

  getQuestions = async () => {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const perguntasApi = await fetchTrivia(token);
    // const INVALID_RESPONSE = 3;
    if (!perguntasApi.results.length) {
      localStorage.setItem('token', '');
      history.push('/');
    }
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <RenderQuestions
          history={ history }
        />

      </>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
