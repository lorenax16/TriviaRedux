const INITIAL_STATE = {
  finished: false,
};

const gameAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_ANSWER_TIMER':
    return { ...state, finished: action.finished };
  default:
    return state;
  }
};

export default gameAction;
