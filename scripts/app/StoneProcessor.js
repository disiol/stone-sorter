export class StoneProcessor {
  /**
   * Removes adjacent identical stones.
   * @param {string} stones
   * @returns {number} count of removed stones
   */
  static minStonesToRemove(stones) {
    let count = 0;

    for (let i = 1; i < stones.length; i++) {
      if (stones[i] === stones[i - 1]) count++;
    }

    return count;
  }

  /**
   * Counts rows where all three colors appear.
   * @param {string} stones
   * @returns {number} count of full rows
   */
  static countColorRows(stones) {
    let fullRows = 0;
    let currentRowColors = new Set();

    for (let stone of stones) {
      currentRowColors.add(stone);
      if (currentRowColors.size === 3) {
        fullRows++;
        currentRowColors.clear();
      }
    }

    return fullRows;
  }

  /**
   * Removes extra occurrences of colors to ensure proper RGB sequences.
   * @param {string} stones
   * @returns {string} cleaned stone sequence
   */
  static removeExtraColors(stones) {
    let cleanedStones = '';
    let colorCounts = { R: 0, G: 0, B: 0 };

    for (let stone of stones) {
      if (colorCounts[stone] < 1) {
        cleanedStones += stone;
        colorCounts[stone]++;
      }

      if (colorCounts.R >= 1 && colorCounts.G >= 1 && colorCounts.B >= 1) {
        colorCounts = { R: 0, G: 0, B: 0 };
      }
    }

    return cleanedStones;
  }
}
