export class Renderer {
  static clearContainer() {
    document.getElementById('stoneVisualization').innerHTML = '';
  }

  static renderStones(stones, isRowMode) {
    this.clearContainer();
    const stoneContainer = document.getElementById('stoneVisualization');

    let rowContainer = document.createElement('div');

    rowContainer.classList.add('row');
    let currentRowColors = new Set();

    for (let stone of stones) {
      const stoneElement = document.createElement('div');

      stoneElement.classList.add('stone', `stone--${stone}`);
      stoneElement.innerText = stone;
      rowContainer.appendChild(stoneElement);

      if (isRowMode) {
        currentRowColors.add(stone);
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
