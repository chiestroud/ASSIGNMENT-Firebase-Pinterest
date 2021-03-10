const showSearchedPin = (pinBoardObject) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '';
  pinBoardObject.forEach((pin) => {
    document.querySelector('#main').innerHTML += `<div class="card board" style="width: 20rem;">
                                                    <img class="card-img-top boardImg" src=${pin.image} alt=${pin.pin_name}">
                                                    <div class="card-body boardInfo">
                                                    <h5 class="card-title">${pin.pin_name}</h5>
                                                    <button class="btn btn-success btn-sm" data-toggle="modal" data-target="#formModal" id="board-edit-btn--${pin.firebaseKey}">Edit Pin</button>
                                                    <button class="btn btn-danger btn-sm" id="delete-board--${pin.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#main').innerHTML = '<h1 class="bodyMessage">No Boards</h1>';
};

export { showSearchedPin, emptyPins };
