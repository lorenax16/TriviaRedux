import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import { fetchTrivia } from '../api/fetchAPI';
import Loading from './Loading';

export default class TelaDeJogo extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      perguntas: [],
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const perguntasApi = await fetchTrivia();
    console.log(perguntasApi.response_code);
    if (perguntasApi.response_code !== 0) {
      history.push('/');
    } else {
      console.log(token);
      this.setState({
        perguntas: perguntasApi.results,
      });
      console.log(this.state);
      this.renderQuestions();
    }
  }

  handleClick() {
    this.setState((prevState) => ({
      index: prevState.index + 1 }));
  }

  renderQuestions() {
    const { perguntas, index } = this.state;
    const filterQuestions = Object.keys(perguntas).filter((key) => key.includes(index))
      .reduce((cur, key) => Object.assign(cur, { [key]: perguntas[key] }), {});
      // https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don't%20have,()%20function%20as%20shown%20below.
    console.log(filterQuestions);
    return (
      <>
        <div key={ index }>
          <h1 data-testid="question-category">
            {filterQuestions[index].category}
          </h1>
        </div>
        <>
          <h2 data-testid="question-text">{filterQuestions[index].question}</h2>
          <div data-testid="answer-options">
            <button
              type="button"
              data-testid="correct-answer"
              onClick={ this.handleClick }
            >
              correta
            </button>
            <button
              type="button"
              data-testid={ `wrong-answer-${index}` }
            >
              incorreta
            </button>
            <button
              type="button"
              data-testid={ `wrong-answer-${index}` }
            >
              incorreta
            </button>
            <button
              type="button"
              data-testid={ `wrong-answer-${index}` }
            >
              incorreta
            </button>
          </div>
        </>
      </>
    );
  }

  render() {
    const { perguntas } = this.state;
    return (
      <>
        <Header />
        { perguntas.length === 0 ? <Loading /> : (
          this.renderQuestions()
          // <p> placebo </p>
        )}

      </>
    );
  }
}

TelaDeJogo.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
