import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import styles from './Header.module.css';

const Header = ({ isAuthenticated }) => (
  <header className={styles.Header}>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

Header.propTypes = {
  isAuthenticated: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
