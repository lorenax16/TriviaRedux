export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_ANSWER_TIMER = 'SET_ANSWER_TIMER';
export const PLAYER_SCORE = 'PLAYER_SCORE';
export const SET_TIMER_VALUE = 'SET_TIMER_VALUE';
export const PLAYER_ASSERTIONS = 'PLAYER_ASSERTIONS';

export const setUserName = (name) => ({
  type: 'SET_USER_NAME',
  payload: name,
});

export const setTimer = (finished) => ({
  type: 'SET_ANSWER_TIMER',
  finished,
});

export const setTimerValue = (seconds) => ({
  type: 'SET_TIMER_VALUE',
  seconds,
});

export const setPlayerScore = (score) => ({
  type: 'PLAYER_SCORE',
  score,
});

export const setPlayerAssertions = (assertions) => ({
  type: 'PLAYER_ASSERTIONS',
  assertions,
});
