import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';

class Header extends Component {
  render() {
    // const total = 0;
    const { name, email, playerScore } = this.props;

    return (
      <div>
        <img
          src={ `https://www.gravatar.com/avatar/${md5(email)}` }
          data-testid="header-profile-picture"
          alt="avatar"
        />

        <h4 data-testid="header-player-name">
          Nome:
          { name }
        </h4>
        <h4>
          Placar:
        </h4>
        <h4 data-testid="header-score">{ playerScore }</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.loginAction.name,
  email: state.loginAction.email,
  // playerScore: state.scoreAction.player.score,
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
