import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../views/boards';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  document.querySelector('#logoutButton').addEventListener('click', signMeOut);
  document.querySelector('#login-form-container').innerHTML = '';
  boards();
};

export default logoutButton;
