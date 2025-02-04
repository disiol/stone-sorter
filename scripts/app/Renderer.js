export class Renderer {
  static ANIMATION_DELAY = 500; // Час перед початком анімації
  static ANIMATION_DURATION = 900; // Загальна тривалість ефекту

  static clearContainer() {
    document.getElementById('stoneVisualization').innerHTML = '';
  }

  static renderStones(stones, isRowMode, removedIndices = []) {
    this.clearContainer();
    const stoneContainer = document.getElementById('stoneVisualization');

    let rowContainer = document.createElement('div');

    rowContainer.classList.add('row');
    let currentRowColors = new Set();

    const SIZE_ROW = 3;

    for (let i = 0; i < stones.length; i++) {
      const stoneElement = document.createElement('div');

      stoneElement.classList.add('stone', `stone--${stones[i]}`);
      stoneElement.innerText = stones[i];

      animRemovedStones(removedIndices, i, stoneElement);

      rowContainer.appendChild(stoneElement);
      rowContainer = this.rowMode(isRowMode, currentRowColors, stones, i, SIZE_ROW, stoneContainer, rowContainer);

      if (isRowMode) {
        setTimeout(() => {
          stoneElement.classList.add('fade-in');
        }, Renderer.ANIMATION_DELAY + (i % SIZE_ROW) * 200); // Поступова поява елементів
      }
    }

    if (rowContainer.childNodes.length > 0) {
      stoneContainer.appendChild(rowContainer);
    }

    function animRemovedStones(removedIndices, i, stoneElement) {
      if (removedIndices.includes(i)) {
        setTimeout(() => {
          stoneElement.classList.add('stone--animRemovedStones');
        }, Renderer.ANIMATION_DELAY);
      }
    }
  }

  static rowMode(isRowMode, currentRowColors, stones, i, SIZE_ROW, stoneContainer, rowContainer) {
    if (isRowMode) {
      currentRowColors.add(stones[i]);
      if (currentRowColors.size === SIZE_ROW) {
        stoneContainer.appendChild(rowContainer);
        rowContainer = document.createElement('div');
        rowContainer.classList.add('row');
        currentRowColors.clear();
      }
    }

    return rowContainer;
  }

  static showResult(message) {
    document.getElementById('result').innerHTML = `<b>${message}</b>`;
  }
}
