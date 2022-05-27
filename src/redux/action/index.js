export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_ANSWER_TIMER = 'SET_ANSWER_TIMER';

export const setUserName = (name) => ({
  type: 'SET_USER_NAME',
  payload: name,
});

export const setTimer = (finished) => ({
  type: 'SET_ANSWER_TIMER',
  finished,
});
