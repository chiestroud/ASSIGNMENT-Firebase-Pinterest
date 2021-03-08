import domEvents from '../../events/domEvent';
import navigationEvents from '../../events/navigationEvent';
import { getBoard } from '../../helpers/data/boardData';
import { emptyBoards, showBoards } from '../boards';
import domBuilder from '../forms/domBuilder';
import headerBuilder from '../forms/header';
import navBar from '../forms/navBar';

const startApp = (userObject) => {
  domBuilder();
  navBar(userObject);
  headerBuilder(userObject);
  domEvents(userObject.uid);
  navigationEvents(userObject.uid);
  getBoard(userObject.uid).then((boardsArray) => {
    if (boardsArray.length) {
      showBoards(boardsArray);
    } else {
      emptyBoards();
    }
  });
};

export default startApp;
