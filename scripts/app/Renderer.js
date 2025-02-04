export class Renderer {
  static ANIMATION_DELAY = 200; // Час перед початком анімації
  static ANIMATION_DURATION = 500; // Загальна тривалість ефекту
  static clearContainer() {
    document.getElementById('stoneVisualization').innerHTML = '';
  }

  static renderStones(stones, isRowMode, removedIndices = []) {
    this.clearContainer();
    const stoneContainer = document.getElementById('stoneVisualization');

    let rowContainer = document.createElement('div');

    rowContainer.classList.add('row');
    let currentRowColors = new Set();

    for (let i = 0; i < stones.length; i++) {
      const stoneElement = document.createElement('div');

      stoneElement.classList.add('stone', `stone--${stones[i]}`);
      stoneElement.innerText = stones[i];

      // Анімація видалення каменів із використанням константи
      if (removedIndices.includes(i)) {
        setTimeout(() => {
          stoneElement.classList.add('removed');
        }, Renderer.ANIMATION_DELAY);
      }

      rowContainer.appendChild(stoneElement);

      if (isRowMode) {
        currentRowColors.add(stones[i]);
        if (currentRowColors.size === 3) {
          stoneContainer.appendChild(rowContainer);
          rowContainer = document.createElement('div');
          rowContainer.classList.add('row');
          currentRowColors.clear();
        }
      }
    }

    if (rowContainer.childNodes.length > 0) {
      stoneContainer.appendChild(rowContainer);
    }
  }

  static showResult(message) {
    document.getElementById('result').innerHTML = `<b>${message}</b>`;
  }
}
