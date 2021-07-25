import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authSelectors from '../../../redux/auth/auth-selectors';

const UserMenu = ({ name }) => (
  <ul>
    <li>Welcome {name}</li>
  </ul>
);

UserMenu.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

export default connect(mapStateToProps)(UserMenu);
