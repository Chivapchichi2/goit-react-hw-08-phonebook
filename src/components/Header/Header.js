import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.Header}>
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
    <AuthNav />
  </header>
);

export default Header;
