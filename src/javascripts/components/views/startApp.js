// import getBoard from '../../helpers/data/boardData';
// import { emptyBoards, showBoards } from '../boards';
import domEvents from '../../events/domEvent';
import navigationEvents from '../../events/navigationEvent';
import { getBoard } from '../../helpers/data/boardData';
import { emptyBoards, showBoards } from '../boards';
import domBuilder from '../forms/domBuilder';
import navBar from '../forms/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
  navigationEvents();
  getBoard().then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
