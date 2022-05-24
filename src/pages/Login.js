import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';
import fetchAPI from '../api/fetchAPI';
import { tokenStorage } from '../api/storage';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      saveButton: true,
    };
  }

  handleChange = ({ target }) => {
    this.setState(
      {
        [target.name]: target.value,
      },
      () => {
        const { email, name } = this.state;
        //   const validaNome = 3;
        const validaEmail = this.validateEmail(email);
        if (validaEmail && name.length !== 0) {
          this.setState({
            saveButton: false,
          });
        } else {
          this.setState({
            saveButton: true,
          });
        }
      },
    );
  };

  validateEmail = (email) => {
    const verificar = /\S+@\S+\.\S+/;
    return verificar.test(email);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const resultApi = await fetchAPI();

    const { history } = this.props;
    // const { name } = this.state;

    // setUserName(name);
    history.push('/teladejogo');
    return tokenStorage('token', resultApi.token);
  };

  render() {
    const { saveButton, name, email } = this.state;
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="nome">
            Nome:
            <input
              id="nome"
              value={ name }
              name="name"
              data-testid="input-player-name"
              type="text"
              placeholder="Nome completo"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              value={ email }
              name="email"
              id="email"
              data-testid="input-gravatar-email"
              type="email"
              placeholder="email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ saveButton }
            onClick={ this.handleSubmit }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   setUserName: (name) => dispatch(setUserName(name)),
// });

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  // setUserName: PropTypes.func.isRequired,
};

export default Login;
