import {UIHandler} from "./app/UIHandler.js";

// Wait until the DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("processButton").addEventListener("click", UIHandler.handleProcessClick);
});
