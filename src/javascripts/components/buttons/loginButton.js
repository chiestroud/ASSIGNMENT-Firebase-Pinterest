import signIn from '../../helpers/auth/signIn';
import { publicPin } from '../../helpers/data/pinData';
import { emptyPins } from '../pins';
import { showPublicPins } from '../showPublicPins';
import homeScreen from '../views/home';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#boardContainer').innerHTML = '';
  document.querySelector('#navbarNav').innerHTML = '';
  document.querySelector('#header').innerHTML = '';
  homeScreen();
  publicPin().then((pinsArray) => {
    if (pinsArray.length) {
      showPublicPins(pinsArray);
    } else {
      emptyPins();
    }
  });
};

export default loginButton;
