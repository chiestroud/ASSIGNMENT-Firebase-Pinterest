import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../auth/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET ALL THE PINS
const getPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE PINS
const deletePin = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json/`)
    .then(() => getPins(uid).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

// GET SINGLE PIN
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// GET ALL BOARD PINS
const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="board_id"&equalTo="${boardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// CREATE PIN
const createPin = (pinObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins(uid).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE PIN
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getPins(firebase.auth().currentUser.uid)).then((pinsArray) => resolve(pinsArray))
    .catch((error) => reject(error));
});

// SEARCH PINS
const searchPin = (uid, searchValue) => new Promise((resolve, reject) => {
  getPins(uid).then((pinsArray) => {
    const searchItems = pinsArray.filter((s) => s.pin_name.toLowerCase().includes(searchValue));
    resolve(searchItems);
  })
    .catch((error) => reject(error));
});
// PUBLIC PINS
const publicPin = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="public"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// ADD PUBLIC PINS TO USER
const addPin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => publicPin().then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

export {
  getPins,
  deletePin,
  getSinglePin,
  getBoardPins,
  createPin,
  updatePin,
  searchPin,
  publicPin,
  addPin
};
