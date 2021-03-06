import { emptyBoards, showBoards } from '../components/boards';
import selectPins from '../components/forms/selectPins';

import { showPins } from '../components/pins';
import { getBoard } from '../helpers/data/boardData';
import { boardPinInfo, deleteBoardPins } from '../helpers/data/pinBoardsData';
import { deletePin } from '../helpers/data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('pin-board')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      boardPinInfo(boardId).then((boardPinObject) => {
        selectPins(boardPinObject.pins);
      });
    }

    if (e.target.id.includes('return')) {
      getBoard().then((boardsArray) => {
        if (boardsArray.length) {
          showBoards(boardsArray);
        } else {
          emptyBoards();
        }
      });
    }
    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      const boardId = e.target.id.split('--')[1];
      deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
    }
    // DELETE PINS
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
