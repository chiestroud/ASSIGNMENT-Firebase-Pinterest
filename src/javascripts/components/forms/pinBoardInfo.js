const pinBoardInfo = (boardObject) => {
  document.querySelector('#boardInfo').innerHTML = `<h1 class="text-white">${boardObject.pins}'s pins</h1>`;
};

export default pinBoardInfo;
