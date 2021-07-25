import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const { data } = await axios.post('/users/signup', credential);

    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = credential => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const { data } = await axios.post('/users/login', credential);

    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

export default { register, login };
