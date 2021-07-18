import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post('/users/signup', credential);
    console.log(response);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

export default { register };
