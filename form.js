const form = document.querySelector("form");
form.addEventListener("submit", (event) => {});
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();
});