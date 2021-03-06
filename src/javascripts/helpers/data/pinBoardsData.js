import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((pinBoardArray) => {
    const deletePins = pinBoardArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId)));
  }).catch((error) => reject(error));
});

const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinInfo };
