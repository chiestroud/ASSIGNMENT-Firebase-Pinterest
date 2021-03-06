import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins } from '../components/pins';
import { getBoard } from '../helpers/data/boardData';
import { getPins } from '../helpers/data/pinData';

const navigationEvents = () => {
  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoard().then((boardsArray) => {
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
    console.warn(searchValue);
    if (e.keyCode === 13) {
      document.querySelector('#search').value = '';
    }
  });

  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });
};

export default navigationEvents;
