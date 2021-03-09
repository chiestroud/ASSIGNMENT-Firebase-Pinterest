import signIn from '../../helpers/auth/signIn';
import homeScreen from '../views/home';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#navbarNav').innerHTML = '';
  document.querySelector('#header').innerHTML = '';
  homeScreen();
};

export default loginButton;
