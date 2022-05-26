import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPI } from '../api/fetchAPI';
import { tokenStorage } from '../api/storage';
import ConfigBtn from '../Components/ConfigBtn';
import { setUserName } from '../redux/action/index';

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
    console.log(resultApi);
    const { history, setName } = this.props;
    const { name, email } = this.state;
    setName({ name, email });
    history.push('/teladejogo');
    tokenStorage('token', resultApi.token);
    tokenStorage('response', resultApi.response_code);
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
          <ConfigBtn />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setName: (login) => dispatch(setUserName(login)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  setName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
