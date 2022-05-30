const INITIAL_STATE = {
  player: {
    name: ' ',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },

};

const scoreAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PLAYER_SCORE':
    return { ...state, ...action.payload };
  default:
    return state;
  }
};

export default scoreAction;
