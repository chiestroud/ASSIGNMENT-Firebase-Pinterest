const selectPins = (pinsArray) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#goBackButton').innerHTML = '<button type="button" class="btn btn-success" id="return">Go Back to All Boards</button>';
  let domString = '';
  pinsArray.forEach((pin) => {
    domString += `<div class="card board" id="pinContaianer" style="width: 20rem;">
                    <img class="card-img-top pinImg" src=${pin.image} alt=${pin.pin_name}">
                    <div class="card-body pinInfo">
                    <h5 class="card-title text-dark">${pin.pin_name}</h5>
                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${pin.firebaseKey}">Edit</button>
                    <button class="btn btn-danger" id="delete-pin--${pin.firebaseKey}">Delete <i class="fas fa-trash-alt"></i></button>
                    </div>
                  </div>`;
  });
  document.querySelector('#main').innerHTML = domString;
};

export default selectPins;
