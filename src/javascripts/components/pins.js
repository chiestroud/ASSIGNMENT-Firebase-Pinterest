const showPins = (array) => {
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#main').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div class="card board" style="width: 20rem;">
        <img class="card-img-top" src=${item.img} alt=${item.pin_name} style="height: 400px;">
        <div class="card-body" style="height: 150px;">
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
