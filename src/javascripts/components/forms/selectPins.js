const selectPins = (pinsArray) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#goBackButton').innerHTML = '<button type="button" class="btn btn-success" id="return">Go Back to All Boards</button>';
  let domString = '';
  pinsArray.forEach((pin) => {
    domString += `<div class="card board" style="width: 20rem;">
                    <img class="card-img-top" src=${pin.img} alt=${pin.pin_name} style="height: 400px;">
                    <div class="card-body" style="height: 150px;">
                    <h5 class="card-title">${pin.pin_name}</h5>
                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${pin.firebaseKey}">Edit</button>
                    <button class="btn btn-danger" id="delete-pin--${pin.firebaseKey}">Delete Pin</button>
                    </div>
                  </div>`;
  });
  document.querySelector('#main').innerHTML = domString;
};

export default selectPins;
