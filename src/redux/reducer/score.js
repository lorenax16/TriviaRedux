const INITIAL_STATE = {
  score: 0,
};

const scoreAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PLAYER_SCORE':
    return action.payload;
  default:
    return state;
  }
};

export default scoreAction;
