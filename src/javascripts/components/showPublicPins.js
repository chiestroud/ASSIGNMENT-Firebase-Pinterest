const showPublicPins = (array) => {
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `<div id="pinContainer" class="card" style="width: 20rem;">
                                                    <img class="card-img-top pinImg" src="${item.image}" alt="${item.pin_name}">
                                                    <img class="userImage" src="${item.url}" alt="${item.pin_name}">
                                                    <div class="card-body pinInfo">
                                                    <h5 class="card-title text-dark">${item.pin_name}</h5>
                                                    </div>
                                                  </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#main').innerHTML = '<h1 class="headerColor">No Boards</h1>';
};

export { showPublicPins, emptyPins };
