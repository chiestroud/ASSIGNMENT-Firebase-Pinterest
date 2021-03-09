import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL THE BOARDS
const getBoard = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoard(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// CREATE BOARD
const createBoard = (boardObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoard(uid).then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOARD
const updateBoard = (firebaseKey, boardObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardObject)
    .then(() => getBoard(firebase.auth().currentUser.uid)).then((boardsArray) => resolve(boardsArray))
    .catch((error) => reject(error));
});

// SEARCH BOARD
const searchBoard = (uid, searchValue) => new Promise((resolve, reject) => {
  getBoard(uid).then((boardsArray) => {
    const searchItems = boardsArray.filter((s) => s.board_name.toLowerCase().includes(searchValue));
    resolve(searchItems);
  })
    .catch((error) => reject(error));
});

export {
  getBoard,
  getSingleBoard,
  deleteBoard,
  createBoard,
  updateBoard,
  searchBoard
};
