const showUserPublicPins = (array) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#goBackButton').innerHTML = '';
  document.querySelector('#boardContainer').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div id="pinContainer" class="card" style="width: 20rem;">
                                                    <img class="card-img-top pinImg" src="${item.image}" alt="${item.pin_name}">
                                                    <img class="userImage" src="${item.url}" alt="${item.pin_name}">
                                                    <div class="card-body pinInfo">
                                                    <h5 class="card-title text-dark">${item.pin_name}</h5>
                                                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="add-pin--${item.firebaseKey}">PIN</button>
                                                    </div>
                                                  </div>`;
  });
  document.querySelector('#goBackButton').innerHTML = '<h1 class="headerColor">Public Pins!</h1>';
};

const emptyPins = () => {
  document.querySelector('#main').innerHTML = '<h1 class="headerColor">No Boards</h1>';
};

export { showUserPublicPins, emptyPins };
