// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { setTimer, setTimerValue } from '../redux/action';

// class Timer extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     seconds: 30,
//   //     finishedLocal: false,
//   //   };
//   // }

//   // componentDidMount() {
//   //   this.handleTimer();
//   // }

//   // componentDidUpdate() {
//   //   const TIME_LIMIT = 0;
//   //   // const { seconds, finishedLocal } = this.state;
//   //   const { timer, cronometro, dispatchSecondsValue, seconds, finishedLocal } = this.props;
//   //   // console.log(seconds);

//   //   if (cronometro) {
//   //     dispatchSecondsValue(seconds);
//   //     clearInterval(this.intervalId);
//   //   }
//   //   if (seconds === TIME_LIMIT) {
//   //     this.setState({ seconds: 30, finishedLocal: true });
//   //   }
//   //   if (finishedLocal === true) {
//   //     timer(finishedLocal);
//   //     clearInterval(this.intervalId);
//   //   }
//   // }

//   // componentWillUnmount() {
//   //   clearInterval(this.intervalId);
//   // }

//   // handleTimer = () => {
//   //   const ONE_SECOND = 1000;
//   //   this.intervalId = setInterval(() => {
//   //     console.log(this.intervalId);
//   //     this.setState((prevState) => ({ seconds: prevState.seconds - 1 }));
//   //   }, ONE_SECOND);
//   // }

// //   render() {
// //     const { seconds } = this.props;
// //     return (
// //       <div>{ seconds }</div>
// //     );
// //   }
// // }

// const mapDispatchToProps = (dispatch) => ({
//   timer: (finished) => (dispatch(setTimer(finished))),
//   dispatchSecondsValue: (seconds) => (dispatch(setTimerValue(seconds))),
// });

// const mapStateToProps = (state) => ({
//   cronometro: state.gameAction.finished,
// });

// Timer.propTypes = {
//   timer: PropTypes.func.isRequired,
//   cronometro: PropTypes.bool.isRequired,
//   dispatchSecondsValue: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Timer);
