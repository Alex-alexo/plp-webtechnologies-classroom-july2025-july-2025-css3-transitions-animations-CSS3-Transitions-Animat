/* --- Part 2: JavaScript Functions --- */

// Global variable
let userName = "Guest";

// Function with parameter and return value
function greet(name) {
  return `Hello, ${name}! Welcome to interactive web pages.`;
}

// Function demonstrating local vs global scope
function showGreeting(name) {
  let message = greet(name); // local variable
  document.getElementById("greeting").textContent = message;
}

/* --- Part 3: Combining CSS & JS --- */

// Function to animate a box
function animateBox() {
  const box = document.getElementById("animate-me");
  box.classList.toggle("active"); // triggers CSS transition
}

// Modal functions
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("show");
}
