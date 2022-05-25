import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    const total = 0;
    const { name, email } = this.props;

    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email)}` }
          data-testid="header-profile-picture"
          alt="avatar"
        />

        <p data-testid="header-player-name">
          Nome:
          { name }
        </p>
        <p>
          Placar:
        </p>
        <p data-testid="header-score">{ total }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginAction.name,
  email: state.loginAction.email,
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
