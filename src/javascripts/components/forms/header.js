const headerBuilder = (userObject) => {
  document.querySelector('#header').innerHTML = `<div class="container d-flex justify-content-center align-items-center header">
                                                  <h1 class="headerTitle">${userObject.displayName}</h1>
                                                  <img class="headerProfile" src="${userObject.photoURL}">
                                                                              
                                      </div>`;
};

export default headerBuilder;
