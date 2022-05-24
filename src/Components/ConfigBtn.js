import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ConfigBtn extends Component {
  // handleBtn = () => {
  //   console.log(this.props);
  //   const { history } = this.props;
  //   history.push('/configuracoes');
  // };

  render() {
    return (
      <div>
        <Link to="/configuracoes">
          <button
            data-testid="btn-settings"
            type="button"
            // onClick={ this.handleBtn }
          >
            Configurações
          </button>
        </Link>
      </div>
    );
  }
}

// ConfigBtn.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }).isRequired,
// };

export default ConfigBtn;
