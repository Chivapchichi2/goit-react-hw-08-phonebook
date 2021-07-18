import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Container from './Container';
import Header from './Header';
import Contacts from './views/ContactsView';

// import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

const App = () => (
  <Container>
    <Header />
    <Switch>
      <Route exact path="/" component={Contacts} />
    </Switch>
  </Container>
);

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
  filter: contactsSelectors.getContactsFilter(state),
  loading: contactsSelectors.getContactsLoading(state),
});

export default connect(mapStateToProps)(App);
