export const SET_USER_NAME = 'SET_USER_NAME';

export const setUserName = ({ name, email }) => ({
  type: 'SET_USER_NAME',
  payload: { name, email },
});
