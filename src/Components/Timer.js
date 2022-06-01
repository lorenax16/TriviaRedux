import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import RenderQuestions from './RenderQuestions';

class Timer extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     seconds: 30,
//   //     finishedLocal: false,
//   //   };
//   // }

  render() {
    const { seconds } = this.props;
    return (
      <div>{ seconds }</div>
    );
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,

};

export default Timer;
