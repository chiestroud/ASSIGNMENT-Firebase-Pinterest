const darkMode = () => {
  document.querySelector('body').style.backgroundColor = '#ffeeda';
  document.querySelector('body').style.color = 'black';
};

const lightMode = () => {
  document.querySelector('body').style.backgroundColor = '#111';
  document.querySelector('body').style.color = 'white';
};
export { darkMode, lightMode };
