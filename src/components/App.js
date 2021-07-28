import { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';

import authOperations from '../redux/auth/auth-operations';
import Container from './Container';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import MyLoader from './MyLoader';

const ContactsView = lazy(() => import('./views/ContactsView'));
const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <Header />
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            />
            <PublicRoute
              path="/register"
              component={RegisterView}
              redirectTo="/contacts"
              restricted
            />
            <PublicRoute
              path="/login"
              component={LoginView}
              redirectTo="/contacts"
              restricted
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
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
