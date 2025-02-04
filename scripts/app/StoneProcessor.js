export class StoneProcessor {
  /**
   * Підраховує мінімальну кількість видалених каменів, щоб уникнути однакових поруч.
   * @param {string} stones
   * @returns {number}
   */
  static minStonesToRemove(stones) {
    let count = 0;

    for (let i = 1; i < stones.length; i++) {
      if (stones[i] === stones[i - 1]) count++;
    }

    return count;
  }

  /**
   * Підраховує кількість повних рядків (R, G, B)
   * @param {string} stones
   * @returns {number}
   */
  static countColorRows(stones) {
    let fullRows = 0;
    let currentRow = [];

    for (let i = 0; i < stones.length; i++) {
      if (!currentRow.includes(stones[i])) {
        currentRow.push(stones[i]);
      }
      if (currentRow.length === 3) {
        fullRows++;
        currentRow = [];
      }
    }

    return fullRows;
  }

  /**
   * Визначає камені, які треба видалити, і повертає їх індекси.
   * @param {string} stones
   * @returns {Object} { cleanedStones, removedIndices }
   */
  static getRemovals(stones) {
    let cleanedStones = '';
    let removedIndices = [];

    for (let i = 0; i < stones.length; i++) {
      if (i > 0 && stones[i] === stones[i - 1]) {
        removedIndices.push(i);
      } else {
        cleanedStones += stones[i];
      }
    }

    return { cleanedStones, removedIndices };
  }

  /**
   * Видаляє зайві повтори кольорів, залишаючи правильну послідовність RGB.
   * @param {string} stones
   * @returns {string}
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
