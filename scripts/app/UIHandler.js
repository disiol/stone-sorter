import { StoneProcessor } from './StoneProcessor.js';
import { Renderer } from './Renderer.js';

export class UIHandler {
  static handleProcessClick() {
    let input = document.getElementById('inputStones').value.toUpperCase().trim();
    let selectedAlgorithm = document.querySelector('input[name="algorithm"]:checked').value;

    if (selectedAlgorithm === 'remove') {
      let removeCount = StoneProcessor.minStonesToRemove(input);

      Renderer.renderStones(input, false);
      Renderer.showResult(`Removed Stones: ${removeCount}`);
    } else if (selectedAlgorithm === 'rows') {
      let fullRows = StoneProcessor.countColorRows(input);

      Renderer.renderStones(input, true); // Enable row separation
      Renderer.showResult(`Rows with all colors: ${fullRows}`);
    }
  }
}
