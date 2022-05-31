import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchTrivia } from '../api/fetchAPI';
import Loading from '../pages/Loading';
import Timer from './Timer';
// import { setTimer } from '../redux/action';

class RenderQuestions extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      perguntas: [],
      loading: true,
      seconds: 30,
      finishedLocal: false,
    };
  }

  componentDidMount() {
    this.getQuestions();
    this.handleTimer();
  }

  componentDidUpdate() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

timer = () => {
  const TIME_LIMIT = 0;
  const { seconds, finishedLocal } = this.state;
  // const { timer, cronometro, dispatchSecondsValue, seconds, finishedLocal } = this.props;
  // console.log(seconds);

  // if (seconds) {
  //   clearInterval(this.intervalId);
  // }
  if (seconds === TIME_LIMIT) {
    this.setState({ seconds: 30, finishedLocal: true });
  }
  if (finishedLocal === true) {
    clearInterval(this.intervalId);
  }
}

  handleTimer = () => {
    // event.preventDefault();
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      console.log(this.intervalId);
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, ONE_SECOND);
  }

  getQuestions = async () => {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    const perguntasApi = await fetchTrivia(token);
    // const INVALID_RESPONSE = 3;
    if (perguntasApi.results.length) {
      this.setState({
        perguntas: perguntasApi.results,
        loading: false,
      });
    } else {
      localStorage.setItem('token', '');
      history.push('/');
    }
  }

  calcValue = () => {
    const { perguntas, index } = this.state;
    if (perguntas[index].difficulty === 'hard') {
      const hardValue = 3;
      return hardValue;
    }
    if (perguntas[index].difficulty === 'medium') {
      const mediumValue = 2;
      return mediumValue;
    }
    if (perguntas[index].difficulty === 'easy') {
      const easyValue = 1;
      return easyValue;
    }
  }

  handleClick = (event) => {
    // const { finishedLocal } = this.state;
    this.setState({
      finishedLocal: true,
    }, () => clearInterval(this.intervalId));

    // dispatch(setTimer(true));

    const allBTn = document.querySelectorAll('#answerBtn');
    console.log(allBTn);

    for (let i = 0; i < allBTn.length; i += 1) {
      if (allBTn[i].name === 'correct') {
        allBTn[i].style.border = '3px solid  rgb(6,240,15)';
      } else {
        allBTn[i].style.border = '3px solid  rgb(255,0,0)';
      }
      console.log(event.target.name);
    }
    const resultDiff = this.calcValue();

    // if (event.target.name === 'correct') {
    //   const correctValue = 10;
    //   const score = correctValue + (stopwatch * resultDiff);
    //   console.log(score);
    // }
    // console.log(stopwatch);

    // return 0;
  }

  handleNext = () => {
    const { index } = this.state;
    const INDEX_NUMBER = 4;
    const allBTn = document.querySelectorAll('#answerBtn');

    if (index < INDEX_NUMBER) {
      for (let i = 0; i < allBTn.length; i += 1) {
        allBTn[i].style.border = 'none';
      }
      this.setState((prevState) => ({
        index: prevState.index + 1,
        finishedLocal: false,
        seconds: 30,
      }));
      this.handleTimer();
    }
  }

  createNextBtn = () => {
    const allBTn = document.querySelectorAll('#answerBtn');
    console.log(allBTn);
    for (let i = 0; i < allBTn.length; i += 1) {
      if (allBTn[i].name === 'correct') {
        allBTn[i].style.border = '3px solid  rgb(6,240,15)';
      } else {
        allBTn[i].style.border = '3px solid  rgb(255,0,0)';
      }
    }
    return (
      <div>
        <div>
          <button
            type="button"
            onClick={ this.handleNext }
          >
            Next

          </button>
        </div>
      </div>
    );
  };

  renderQuestions() {
    const { perguntas, index, finishedLocal } = this.state;
    const RANDOM_NUMBER = 0.5;
    const filterQuestions = Object.keys(perguntas).filter((key) => key.includes(index))
      .reduce((cur, key) => Object.assign(cur, { [key]: perguntas[key] }), {});
    // https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don't%20have,%20function%20as%20shown%20below.
    // console.log(filterQuestions);
    const correct = filterQuestions[index].correct_answer;
    const incorrects = [...filterQuestions[index].incorrect_answers];
    const answers = [correct, ...incorrects];
    const randomAnswers = answers.sort(() => Math.random() - RANDOM_NUMBER);
    // https://flaviocopes.com/how-to-shuffle-array-javascript/
    // console.log(randomAnswers);
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
            { randomAnswers.map((randomAnswer, answerIndex) => (
              <button
                id="answerBtn"
                name={ randomAnswer === correct
                  ? 'correct' : 'wrong' }
                key={ answerIndex }
                type="button"
                data-testid={ randomAnswer === correct
                  ? 'correct-answer' : `wrong-answer-${answerIndex}` }
                onClick={ this.handleClick }
                disabled={ finishedLocal }

              >
                {randomAnswer}
              </button>
            ))}
          </div>
        </>
      </>
    );
  }

  render() {
    const { loading, seconds, finishedLocal } = this.state;
    return (
      <div>
        { loading ? <Loading /> : (
          <div>
            {this.renderQuestions()}
            <Timer
              seconds={ seconds }
            />
          </div>
        )}
        {finishedLocal && this.createNextBtn()}
      </div>

    );
  }
}

RenderQuestions.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // dispatch: PropTypes.func.isRequired,
  // stopwatch: PropTypes.number.isRequired,
};

export default RenderQuestions;
