const INITIAL_STATE = {
  name: '',
  email: '',
};

const loginAction = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SET_USER_NAME':
    return { ...state, name: action.payload.name, email: action.payload.email };
  default:
    return state;
  }
};

export default loginAction;
