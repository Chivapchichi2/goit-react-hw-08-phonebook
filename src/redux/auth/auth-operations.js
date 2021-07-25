import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(tok) {
    axios.defaults.headers.common.Authorization = `Bearer ${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credential => async dispatch => {
  dispatch(authActions.registerRequest());
  try {
    const { data } = await axios.post('/users/signup', credential);
    token.set(data.token);
    dispatch(authActions.registerSuccess(data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const login = credential => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const { data } = await axios.post('/users/login', credential);
    token.set(data.token);
    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export default { register, login, logout };
