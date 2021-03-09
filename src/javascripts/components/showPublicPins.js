const showPublicPins = (array) => {
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div id="pinContainer" class="card" style="width: 20rem;">
                                                    <img class="card-img-top pinImg" src="${item.image}" alt="${item.pin_name}">
                                                    <div class="card-body pinInfo">
                                                    <h5 class="card-title">${item.pin_name}</h5>
                                                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="pin-btn--${item.firebaseKey}">PIN</button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#main').innerHTML = '<h1 class="bodyMessage">No Boards</h1>';
};

export { showPublicPins, emptyPins };
