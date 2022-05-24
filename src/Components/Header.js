import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const total = 0;
    const { playerName } = this.props;
    return (
      <div>
        <img data-testid="header-profile-picture" alt="avatar" />
        <p data-testid="header-player-name">
          Nome:
          { playerName }
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
  playerName: state.loginAction.name,
});

Header.propTypes = {
  playerName: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
