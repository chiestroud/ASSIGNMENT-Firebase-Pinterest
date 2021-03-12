import { emptyBoards, showBoards } from '../components/boards';
import { darkMode, lightMode } from '../components/buttons/darkLightMode';
import { showSearchedBoard } from '../components/forms/board/showSearchedBoard';
import { showSearchedPin } from '../components/forms/pin/showSearchedPin';
import { emptyPins, showPins } from '../components/pins';
import { showUserPublicPins } from '../components/showUserPublicPins';
import { getBoard } from '../helpers/data/boardData';
import { searchBoardPin } from '../helpers/data/pinBoardsData';
import { getPins, publicPin } from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoard(uid).then((boardsArray) => {
      if (boardsArray.length) {
        showBoards(boardsArray);
      } else {
        emptyBoards();
      }
    });
  });
  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    if (e.keyCode === 13) {
      searchBoardPin(uid, searchValue).then((pinBoardObject) => {
        showSearchedBoard(pinBoardObject.board);
        showSearchedPin(pinBoardObject.pin);
        document.querySelector('#search').value = '';
      });
    }
  });

  // PUBLIC PINS
  document.querySelector('#public-pins').addEventListener('click', () => {
    publicPin().then((pinsArray) => {
      if (pinsArray.length) {
        showUserPublicPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  document.querySelector('#lightMode').addEventListener('click', () => {
    darkMode();
  });

  document.querySelector('#darkMode').addEventListener('click', () => {
    lightMode();
  });
};

export default navigationEvents;
