import { StoneProcessor } from './StoneProcessor.js';
import { Renderer } from './Renderer.js';

export class UIHandler {
  static handleProcessClick() {
    const input = document.getElementById('inputStones').value.toUpperCase().trim();
    const selectedAlgorithm = document.querySelector('input[name="algorithm"]:checked').value;

    if (!input) return Renderer.showResult('⚠️ Please enter a valid stone sequence.');
    if (!/^[RGB]+$/.test(input)) return Renderer.showResult('❌ Invalid input! Use only R, G, B.');

    const algorithms = {
      remove: UIHandler.processRemoval,
      rows: UIHandler.processRowCount,
      clean: UIHandler.processCleanup
    };

    algorithms[selectedAlgorithm]?.(input);
  }

  static processRemoval(input) {
    const removeCount = StoneProcessor.minStonesToRemove(input);

    Renderer.renderStones(input, false);
    Renderer.showResult(`✅ Removed Stones: ${removeCount}`);
  }

  static processRowCount(input) {
    const fullRows = StoneProcessor.countColorRows(input);

    Renderer.renderStones(input, true);
    Renderer.showResult(`📊 Rows with all colors: ${fullRows}`);
  }

  static processCleanup(input) {
    const cleanedInput = StoneProcessor.removeExtraColors(input);

    Renderer.renderStones(cleanedInput, false);
    Renderer.showResult(`🎯 Cleaned Sequence: ${cleanedInput}`);
  }
}
