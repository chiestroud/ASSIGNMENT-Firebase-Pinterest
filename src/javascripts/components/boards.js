const showBoards = (array) => {
  document.querySelector('#goBackButton').innerHTML = '<h1>List of boards</h1>';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div class="card board" style="width: 20rem;">
        <img class="card-img-top" src=${item.image} alt=${item.board_name} style="height: 400px;">
        <div class="card-body" style="height: 150px;">
        <h5 class="card-title">${item.board_name}</h5>
        <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="pin-board-btn--${item.firebaseKey}">Show Pins</button>
        <button class="btn btn-danger" id="delete-board--${item.firebaseKey}">Delete Board</button>
        </div>
      </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#main').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
