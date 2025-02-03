import { UIHandler } from './app/UIHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const processButton = document.getElementById('processButton');

  if (processButton) {
    processButton.addEventListener('click', UIHandler.handleProcessClick);
  }
});
