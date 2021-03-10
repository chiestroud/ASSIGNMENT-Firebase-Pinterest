import firebase from 'firebase/app';
import 'firebase/auth';
import { emptyBoards, showBoards } from '../components/boards';
import addBoardForm from '../components/forms/board/addBoardForm';
import addPinForm from '../components/forms/pin/addPinForm';
import boardInfo from '../components/forms/board/boardInfo';
import formModal from '../components/forms/formModal';
import selectPins from '../components/forms/pin/selectPins';
import updateBoardForm from '../components/forms/updateBoardForm';
import updatePinForm from '../components/forms/pin/updatePinForm';
import { showPins } from '../components/pins';
import {
  createBoard,
  getBoard,
  getSingleBoard,
  updateBoard
} from '../helpers/data/boardData';
import { boardPinInfo, deleteBoardPins } from '../helpers/data/pinBoardsData';
import {
  addPin,
  createPin,
  deletePin,
  getSinglePin,
  updatePin
} from '../helpers/data/pinData';
import { showUserPublicPins } from '../components/showUserPublicPins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // SHOW PINS
    if (e.target.id.includes('pin-board')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardPinObject) => {
        selectPins(boardPinObject.pins);
        boardInfo(boardPinObject.board);
      });
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A NEW BOARD
    if (e.target.id.includes('add-board-btn')) {
      e.preventDefault();
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
    // EDIT BOARD
    if (e.target.id.includes('board-edit-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Board');
      getSingleBoard(firebaseKey).then((boardObject) => updateBoardForm(boardObject));
    }

    // SUBMIT UPDATED BOARD
    if (e.target.id.includes('submit-updated-board')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const boardObject = {
        board_name: document.querySelector('#boardName').value,
        image: document.querySelector('#url').value,
        favorite: document.querySelector('#favorite').checked,
        uid: firebase.auth().currentUser.uid
      };
      updateBoard(firebaseKey, boardObject).then((boardsArray) => showBoards(boardsArray));
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
        image: document.querySelector('#pinUrl').value,
        board_id: document.querySelector('#selectedBoard').value,
        public: document.querySelector('#public').checked,
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

    // UPDATING PINS
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Pin');
      getSinglePin(firebaseKey).then((pinObject) => updatePinForm(pinObject));
    }

    // SUBMITTING UPDATED PINS
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pin_name: document.querySelector('#pinName').value,
        image: document.querySelector('#pinUrl').value,
        board_id: document.querySelector('#selectedBoard').value,
        public: document.querySelector('#public').checked,
        uid: firebase.auth().currentUser.uid
      };
      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));
      $('#formModal').modal('toggle');
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
    // ADD PINS
    if (e.target.id.includes('add-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      const pinObject = {
        uid: firebase.auth().currentUser.uid
      };
      addPin(firebaseKey, pinObject).then((pinsArray) => showUserPublicPins(pinsArray));
    }
  });
};

export default domEvents;
