export class Renderer {
    /**
     * Render stones in visualization section
     * @param {string} stones
     * @param {boolean} isRowMode - Whether we are counting rows with all colors
     */
    static renderStones(stones, isRowMode) {
        const stoneContainer = document.getElementById("stoneVisualization");
        stoneContainer.innerHTML = "";

        let rowContainer = document.createElement("div");
        rowContainer.classList.add("row"); // A separate div for each row

        let currentRowColors = new Set();

        for (let stone of stones) {
            const stoneElement = document.createElement("div");
            stoneElement.classList.add("stone", `stone--${stone}`);
            stoneElement.innerText = stone;
            rowContainer.appendChild(stoneElement);

            if (isRowMode) {
                currentRowColors.add(stone);
                if (currentRowColors.size === 3) {
                    // Append the completed row to the container
                    stoneContainer.appendChild(rowContainer);

                    // Start a new row
                    rowContainer = document.createElement("div");
                    rowContainer.classList.add("row");
                    currentRowColors.clear();
                }
            }
        }

        // Append the last row if it contains elements
        if (rowContainer.childNodes.length > 0) {
            stoneContainer.appendChild(rowContainer);
        }
    }

    /**
     * Show result message
     * @param {string} message
     */
    static showResult(message) {
        document.getElementById("result").innerHTML = `<b>${message}</b>`;
    }
}
