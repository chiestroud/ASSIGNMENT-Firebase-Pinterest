import firebase from 'firebase/app';
import 'firebase/auth';
import { emptyBoards, showBoards } from '../components/boards';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import boardInfo from '../components/forms/boardInfo';
import formModal from '../components/forms/formModal';
import selectPins from '../components/forms/selectPins';

import { showPins } from '../components/pins';
import { createBoard, getBoard } from '../helpers/data/boardData';
import { boardPinInfo, deleteBoardPins } from '../helpers/data/pinBoardsData';
import { createPin, deletePin } from '../helpers/data/pinData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW PINS
    if (e.target.id.includes('pin-board')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      boardPinInfo(boardId).then((boardPinObject) => {
        selectPins(boardPinObject.pins);
        boardInfo(boardPinObject.board);
      });
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A NEW BOARD
    if (e.target.id.includes('add-board-btn')) {
      formModal('Add A New Board');
      addBoardForm();
      $('#formModal').modal('toggle');
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR THE BOARDS
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_name: document.querySelector('#boardName').value,
        image: document.querySelector('#url').value,
        favorite: document.querySelector('#favorite').checked,
        uid: firebase.auth().currentUser.uid
      };
      createBoard(boardObject, uid).then((boardsArray) => showBoards(boardsArray));
      $('#formModal').modal('toggle');
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A NEW PIN
    if (e.target.id.includes('add-pin-btn')) {
      formModal('Add A New Pin');
      addPinForm();
      $('#formModal').modal('toggle');
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR THE PINS
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pin_name: document.querySelector('#pinName').value,
        img: document.querySelector('#pinUrl').value,
        board_id: document.querySelector('#selectedBoard').value,
        uid: firebase.auth().currentUser.uid
      };
      createPin(pinObject, uid).then((pinsArray) => showPins(pinsArray));
      $('#formModal').modal('toggle');
    }
    // RETURN TO BOARD FROM PINNED
    if (e.target.id.includes('return')) {
      getBoard(uid).then((boardsArray) => {
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
      deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
    }
    // DELETE PINS
    if (e.target.id.includes('delete-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
    }
  });
};

export default domEvents;
