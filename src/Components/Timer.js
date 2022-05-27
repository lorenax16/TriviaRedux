import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTimer } from '../redux/action';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 30,
      finished: false,
    };
  }

  componentDidMount() {
    this.handleTimer();
  }

  componentDidUpdate() {
    const TIME_LIMIT = 0;
    const { seconds, finished } = this.state;
    const { timer } = this.props;
    if (seconds === TIME_LIMIT) {
      this.setState({ seconds: 30, finished: true });
    }
    if (finished === true) {
      timer(finished);
      clearInterval(this.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleTimer = () => {
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
    }, ONE_SECOND);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>{ seconds}</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  timer: (finished) => (dispatch(setTimer(finished))),
});

Timer.propTypes = {
  timer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
