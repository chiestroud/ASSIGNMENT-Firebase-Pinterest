const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
                                              <div id="header"></div>
                                              <div id="goBackButton"></div>
                                              <div id="boardInfo"></div>
                                              <div id="main" class="container justify-content-around"></div>`;
};

export default domBuilder;
