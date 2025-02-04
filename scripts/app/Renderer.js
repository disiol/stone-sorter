
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

    for (let i = 0; i < stones.length; i++) {
      const stoneElement = document.createElement('div');

      stoneElement.classList.add('stone', `stone--${stones[i]}`);
      stoneElement.innerText = stones[i];

      // Анімація видалення каменів із використанням константи
      animRemovedStones(removedIndices, i, stoneElement);

      rowContainer.appendChild(stoneElement);

      if (isRowMode) {
        currentRowColors.add(stones[i]);
        if (currentRowColors.size === 3) {
          stoneContainer.appendChild(rowContainer);
          rowContainer = document.createElement('div');

          setTimeout(() => {
            rowContainer.classList.add('row');
          }, Renderer.ANIMATION_DELAY);
          currentRowColors.clear();
        }
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

  static showResult(message) {
    document.getElementById('result').innerHTML = `<b>${message}</b>`;
  }
}
