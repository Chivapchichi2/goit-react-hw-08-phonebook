import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authOperations from '../../../redux/auth/auth-operations';
import authSelectors from '../../../redux/auth/auth-selectors';

import styles from './UserMenu.module.css';

const UserMenu = ({ name, onLogout }) => (
  <div className={styles.UserMenu}>
    <span>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
