const showPins = (array) => {
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '<button class="btn btn-primary mb-5" id="add-pin-btn">Add New Pin</button>';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div id="pinContainer" class="card" style="width: 20rem;">
                                                    <img class="card-img-top pinImg" src="${item.img}" alt="${item.pin_name}">
                                                    <div class="card-body pinInfo">
                                                    <h5 class="card-title">${item.pin_name}</h5>
                                                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit</button>
                                                    <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
                                                    </div>
                                                  </div>`;
  });
  document.querySelector('#goBackButton').innerHTML = '<h1>List of pins</h1>';
};

const emptyPins = () => {
  document.querySelector('#main').innerHTML = '<h1>No Boards</h1>';
};

export { showPins, emptyPins };
