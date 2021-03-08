const showBoards = (array) => {
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '';
  document.querySelector('#goBackButton').innerHTML = `<h1>List of boards</h1>
                                                        <button class="btn btn-success" data-toggle="modal" data-target="#formModal" id="add-board-btn">Add New Board</button>`;
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div class="card board" style="width: 20rem;">
                                                    <img class="card-img-top boardImg" src=${item.image} alt=${item.board_name}">
                                                    <div class="card-body boardInfo">
                                                    <h5 class="card-title">${item.board_name}</h5>
                                                    <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#formModal" id="pin-board-btn--${item.firebaseKey}">Show Pins</button>
                                                    <button class="btn btn-warning btn-sm" data-toggle="modal" data-target="#formModal" id="board-edit-btn--${item.firebaseKey}">Edit Board</button>
                                                    <button class="btn btn-danger btn-sm" id="delete-board--${item.firebaseKey}">Delete Board</button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#main').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
