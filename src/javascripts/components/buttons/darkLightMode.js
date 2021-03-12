const darkMode = () => {
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
};

const lightMode = () => {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
};
export { darkMode, lightMode };
