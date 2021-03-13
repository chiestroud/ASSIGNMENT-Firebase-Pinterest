const showPins = (array) => {
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#boardContainer').innerHTML = '';
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#boardInfo').innerHTML = '<button class="btn btn-primary mb-3" id="add-newPin-btn">Add New Pin <i class="fas fa-map-pin"></i></button>';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div id="pinContainer" class="card" style="width: 20rem;">
                                                    <img class="card-img-top pinImg" src="${item.image}" alt="${item.pin_name}">
                                                    <img class="userImage" src="${item.url}" alt="${item.pin_name}">
                                                    <div class="card-body pinInfo">
                                                    <h5 class="card-title text-dark">${item.pin_name}</h5>
                                                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit</button>
                                                    <button class="btn btn-danger" id="delete-pin--${item.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
                                                    </div>
                                                  </div>`;
  });
  document.querySelector('#goBackButton').innerHTML = '<h1 class="headerColor">List of Pins <i class="fas fa-map-pin"></i></h1>';
};

const emptyPins = () => {
  document.querySelector('#goBackButton').innerHTML = '<button class="btn btn-primary mb-5" id="add-newPin-btn">Add New Pin <i class="fas fa-map-pin"></i></button>';
  document.querySelector('#main').innerHTML = '<h1 class="headerColor">No Pins</h1>';
};

export { showPins, emptyPins };
