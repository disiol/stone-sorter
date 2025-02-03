export class StoneProcessor {
  static minStonesToRemove(stones) {
    let count = 0;

    for (let i = 1; i < stones.length; i++) {
      if (stones[i] === stones[i - 1]) {
        count++;
      }
    }

    return count;
  }

  static countColorRows(stones) {
    let fullRows = 0;
    let currentRowColors = new Set();

    for (let i = 0; i < stones.length; i++) {
      currentRowColors.add(stones[i]);

      if (currentRowColors.size === 3) {
        fullRows++;
        currentRowColors.clear();
      }
    }

    return fullRows;
  }
}
