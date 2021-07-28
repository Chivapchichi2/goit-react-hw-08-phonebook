import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authOperations from '../../redux/auth/auth-operations';

import styles from './LoginView.module.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.Login}>
        <h1>Login</h1>
        <p>Please, fill the form</p>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className={styles.form}
        >
          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: authOperations.login,
};

export default connect(null, mapDispatchToProps)(Login);
