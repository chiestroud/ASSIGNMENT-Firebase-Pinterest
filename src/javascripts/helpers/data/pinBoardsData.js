import { deleteBoard, getSingleBoard, searchBoard } from './boardData';
import { deletePin, getBoardPins, searchPin } from './pinData';

const deleteBoardPins = (boardId, uid) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((pinBoardArray) => {
    const deletePins = pinBoardArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, uid)));
  }).catch((error) => reject(error));
});

const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

const searchBoardPin = (uid, searchValue) => new Promise((resolve, reject) => {
  const pin = searchPin(uid, searchValue);
  const board = searchBoard(uid, searchValue);
  Promise.all([pin, board])
    .then(([pinResponse, boardResponse]) => resolve({ pin: pinResponse, board: boardResponse }))
    .catch((error) => reject(error));
});

export {
  deleteBoardPins,
  boardPinInfo,
  searchBoardPin
};
