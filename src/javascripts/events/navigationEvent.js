import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins } from '../components/pins';
import { getBoard } from '../helpers/data/boardData';
import { searchBoardPin } from '../helpers/data/pinBoardsData';
import { getPins } from '../helpers/data/pinData';

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
        console.warn(pinBoardObject);
        showPins(pinBoardObject.pin);
        showBoards(pinBoardObject.board);
        document.querySelector('#search').value = '';
      });
    }
  });

  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   if (e.keyCode === 13) {
  //     searchPin(uid, searchValue).then(showPins);
  //     document.querySelector('#search').value = '';
  //   }
  // });

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
};

export default navigationEvents;
