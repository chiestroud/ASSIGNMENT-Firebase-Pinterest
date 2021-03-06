import firebase from 'firebase/app';
import 'firebase/auth';
// import getBoard from '../../helpers/data/boardData';
// import { emptyBoards, showBoards } from '../boards';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  document.querySelector('#logoutButton').addEventListener('click', signMeOut);
  document.querySelector('#login-form-container').innerHTML = '';
};

export default logoutButton;
