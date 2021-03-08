const headerBuilder = (userObject) => {
  document.querySelector('#header').innerHTML = `<div class="header">
                                        <img class="headerProfile" src="${userObject.photoURL}">
                                        <h1 class="headerTitle">${userObject.displayName}</h1>                                      
                                      </div>`;
};

export default headerBuilder;
