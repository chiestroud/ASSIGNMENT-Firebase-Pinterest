// import getBoard from '../../helpers/data/boardData';
// import { emptyBoards, showBoards } from '../boards';
import getBoard from '../../helpers/data/boardData';
import { emptyBoards, showBoards } from '../boards';
import domBuilder from '../forms/domBuilder';
import navBar from '../forms/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  getBoard().then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
