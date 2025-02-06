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
  
  static UPDATE_DELAY = Renderer.ANIMATION_DURATION; // Використовуємо ту ж тривалість, що і анімація

  static processRemoval(input) {
    const { cleanedStones, removedIndices } = StoneProcessor.getRemovals(input);

    Renderer.renderStones(input, false, removedIndices);

    setTimeout(() => {
      Renderer.renderStones(cleanedStones, false);
      Renderer.showResult(`✅ Видалено каменів: ${removedIndices.length}`);
    }, UIHandler.UPDATE_DELAY);
  }
  static processRowCount(input) {
    const cleanedInput = StoneProcessor.removeExtraColors(input);
    const fullRows = StoneProcessor.countColorRows(cleanedInput);

    Renderer.renderStones(cleanedInput, true);
    Renderer.showResult(`📊 Rows with all colors: ${fullRows}`);
  }

  static processCleanup(input) {
    const cleanedInput = StoneProcessor.removeExtraColors(input);

    Renderer.renderStones(cleanedInput, false);
    Renderer.showResult(`🎯 Cleaned Sequence: ${cleanedInput}`);
  }
}
