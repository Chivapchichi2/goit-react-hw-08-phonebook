import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';

// import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

const App = () => (
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

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
  filter: contactsSelectors.getContactsFilter(state),
  loading: contactsSelectors.getContactsLoading(state),
});

export default connect(mapStateToProps)(App);
