import firebase from 'firebase/app';
import 'firebase/auth';
import domEvents from '../../events/domEvent';

const signMeOut = () => {
  document.querySelector('body').removeEventListener('click', domEvents);
  firebase.auth().signOut();
};

const logoutButton = () => {
  document.querySelector('#logoutButton').addEventListener('click', signMeOut);
  document.querySelector('#login-form-container').innerHTML = '';
};

export default logoutButton;
