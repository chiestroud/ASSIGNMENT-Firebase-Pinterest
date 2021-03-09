const showPinBoards = (pinBoardObject) => {
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '';
  document.querySelector('#goBackButton').innerHTML = `<div class="container d-flex justify-content-around">
                                                        <h1 class="bodyMessage">List of boards <i class="fas fa-clipboard-list"></i></h1>
                                                       </div>
                                                        <button class="btn btn-success mb-3" data-toggle="modal" data-target="#formModal" id="add-board-btn">Add New Board <i class="fas fa-clipboard-list"></i></button>
                                                        `;
  pinBoardObject.forEach((pin) => {
    document.querySelector('#main').innerHTML += `<div class="card board" style="width: 20rem;">
                                                    <img class="card-img-top boardImg" src=${pin.image} alt=${pin.pin_name}">
                                                    <div class="card-body boardInfo">
                                                    <h5 class="card-title">${pin.pin_name}</h5>
                                                    <button class="btn btn-info btn-sm" data-toggle="modal" data-target="#formModal" id="pin-board-btn--${pin.firebaseKey}">Show Pins</button>
                                                    <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#formModal" id="board-edit-btn--${pin.firebaseKey}">Edit Board</button>
                                                    <button class="btn btn-danger btn-sm" id="delete-board--${pin.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#main').innerHTML = '<h1 class="bodyMessage">No Boards</h1>';
};

export { showPinBoards, emptyBoards };
