// import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { connect } from 'react-redux';

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
    this.setState({
      [target.name]: target.value,
    }, () => {
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
    });
  }

  validateEmail = (email) => {
    const verificar = /\S+@\S+\.\S+/;
    return verificar.test(email);
  };

  //   handleSubmit = (event) => {
  //     // const { history } = this.props;
  //     // const { name } = this.state;
  //     event.preventDefault();
  //     // setUserName(name);
  //     // history.push('/search');
  //   }

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

// Login.propTypes = {
//   history: PropTypes.object.isRequired,
//   setUserName: PropTypes.func.isRequired,
// };

export default Login;