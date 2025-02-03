import { StoneProcessor } from './StoneProcessor.js';
import { Renderer } from './Renderer.js';

export class UIHandler {
  static handleProcessClick() {
    const input = document.getElementById('inputStones').value.toUpperCase().trim();
    const selectedAlgorithm = document.querySelector('input[name="algorithm"]:checked').value;

    if (!input) {
      Renderer.showResult('Please enter a valid stone sequence.');

      return;
    }

    if (selectedAlgorithm === 'remove') {
      UIHandler.processRemoval(input);
    } else if (selectedAlgorithm === 'rows') {
      UIHandler.processRowCount(input);
    }
  }

  static processRemoval(input) {
    const removeCount = StoneProcessor.minStonesToRemove(input);

    Renderer.renderStones(input, false);
    Renderer.showResult(`Removed Stones: ${removeCount}`);
  }

  static processRowCount(input) {
    const fullRows = StoneProcessor.countColorRows(input);

    Renderer.renderStones(input, true);
    Renderer.showResult(`Rows with all colors: ${fullRows}`);
  }
}
