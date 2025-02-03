export class StoneProcessor {
  static minStonesToRemove(stones) {
    let count = 0;

    for (let i = 1; i < stones.length; i++) {
      if (stones[i] === stones[i - 1]) count++;
    }

    return count;
  }

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
}
