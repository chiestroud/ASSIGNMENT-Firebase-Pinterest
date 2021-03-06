const domBuilder = () => {
  document.querySelector('#app').innerHTML = `<div id="navigation"></div>
                                              <div id="goBackButton"></div>
                                              <div id="main"></div>`;
};

export default domBuilder;
