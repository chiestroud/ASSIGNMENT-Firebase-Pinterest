const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
                                              <div id="header"></div>
                                              <div id="goBackButton"></div>
                                              <div id="boardInfo"></div>
                                              <div id="boardContainer" class="container d-flex justify-content-around"></div>
                                              <div id="main" class="container d-flex justify-content-around"></div>
                                              <div id="publicContainer" class="container d-flex justify-content-around"></div>
                                              `;
};

export default domBuilder;
