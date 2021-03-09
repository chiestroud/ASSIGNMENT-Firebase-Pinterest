import { publicPin } from '../../helpers/data/pinData';

const homeScreen = () => {
  document.querySelector('#main').innerHTML = `<h1 class="home-title">
                                                <span class="p">P</span>
                                                <span class="i">I</span>
                                                <span class="n">N</span>
                                                <span class="t">T</span>
                                                <span class="e">E</span>
                                                <span class="r">R</span>
                                                <span class="e2">E</span>
                                                <span class="s">S</span>
                                                <span class="t">T</span>
                                              </h1>
                                              <h1 class="text-white">Here are some of the public pins you may be interested.</h1>`;
  document.querySelector('#boardInfo').innerHTML = '';
  publicPin();
};

export default homeScreen;
