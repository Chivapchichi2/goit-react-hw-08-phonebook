import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import authOperations from '../redux/auth/auth-operations';
import Container from './Container';
import Header from './Header';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/contacts" component={ContactsView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Redirect to="/" />
        </Switch>
      </Container>
    );
  }
}

App.propTypes = {
  onGetCurrentUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
