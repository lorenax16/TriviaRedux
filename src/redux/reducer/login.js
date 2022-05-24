const INITIAL_STATE = {
  name: '',
  email: '',
};

const loginAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER_NAME':
    return { ...state, name: action.payload };
  default:
    return state;
  }
};

export default loginAction;
