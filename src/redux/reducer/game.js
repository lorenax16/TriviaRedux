const INITIAL_STATE = {
  finished: false,
  seconds: 0,
};

const gameAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_ANSWER_TIMER':
    return { ...state, finished: action.finished };
  case 'SET_TIMER_VALUE':
    return { ...state, seconds: action.seconds };
  default:
    return state;
  }
};

export default gameAction;
