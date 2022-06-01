const INITIAL_STATE = {

  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',

};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'PLAYER_SCORE':
    return {
      ...state,

      name: '',
      assertions: 0,
      score: action.score,
      gravatarEmail: '',

    };
  case 'PLAYER_ASSERTIONS':
    return {
      ...state,
      assertions: action.assertions,
    };
  default:
    return state;
  }
};

export default player;
