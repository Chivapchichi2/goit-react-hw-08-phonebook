import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authSelectors from '../../redux/auth/auth-selectors';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

import styles from './Header.module.css';

const Header = ({ isAuthenticated }) => (
  <header className={styles.Header}>
    <ul className={styles.list}>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li>
          <NavLink
            to="/contacts"
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

Header.defaultProps = {
  isAuthenticated: false,
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
