const showSearchedBoard = (pinBoardObject) => {
  document.querySelector('#goBackButton').innerHTML = '<button type="button" class="btn btn-success" id="return">Go Back to All Boards</button>';
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '';
  document.querySelector('#boardContainer').innerHTML = '';
  pinBoardObject.forEach((board) => {
    document.querySelector('#boardContainer').innerHTML += `<div class="card board" style="width: 20rem;">
                                                    <img class="card-img-top boardImg" src=${board.image} alt=${board.pin_name}">
                                                    <div class="card-body boardInfo">
                                                    <h5 class="card-title text-dark">${board.board_name}</h5>
                                                    <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#formModal" id="pin-board-btn--${board.firebaseKey}">Show Pins</button>
                                                    <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#formModal" id="board-edit-btn--${board.firebaseKey}">Edit Board</button>
                                                    <button class="btn btn-danger btn-sm" id="delete-board--${board.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#main').innerHTML = '<h1 class="headerColor">No Boards</h1>';
};

export { showSearchedBoard, emptyBoards };
