import { UIHandler } from './app/UIHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  const processButton = document.getElementById('processButton');
  const inputStones = document.getElementById('inputStones');
  const examplesDropdown = document.getElementById('examplesDropdown');

  if (processButton) {
    processButton.addEventListener('click', UIHandler.handleProcessClick);
  }

  if (examplesDropdown) {
    examplesDropdown.addEventListener('change', function() {
      if (inputStones) {
        inputStones.value = this.value;
      }
    });
  }
});
