const boardInfo = (boardObject) => {
  document.querySelector('#boardInfo').innerHTML = `<h1 class="text-white">${boardObject.board_name}'s pins</h1>`;
};

export default boardInfo;
