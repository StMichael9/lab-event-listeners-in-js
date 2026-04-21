// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  document.body.style.backgroundColor = "lightblue";
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("key-display");
  keyDisplay.textContent = `Key pressed: ${event.key}`;
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const inputField = document.getElementById("text-input");
  const inputDisplay = document.getElementById("input-display");
  inputDisplay.textContent = inputField.value;
}

// Attach Event Listeners
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById("color-btn")
    .addEventListener("click", changeBackgroundColor);

  // Attach event listener to reset background color when the body is double-clicked
  document.body.addEventListener("dblclick", resetBackgroundColor);

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener("keydown", displayKeyPress);

  // Attach event listener to display user input in real-time as they type
  document
    .getElementById("text-input")
    .addEventListener("input", displayUserInput);
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};
// Ready to sumbit
