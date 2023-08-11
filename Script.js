document.addEventListener("DOMContentLoaded", function() {
  
  // Event listener for button click
  let buttons = document.querySelectorAll(".button");
  for (let button of buttons) {
    button.addEventListener("click", function() {
      // Toggle color between gray and primary color
      if (this.style.backgroundColor === "var(--dl-color-gray-white)") {
        this.style.backgroundColor = "var(--dl-color-primary-300)";
        this.style.color = "var(--dl-color-gray-white)";
      } else {
        this.style.backgroundColor = "var(--dl-color-gray-white)";
        this.style.color = "var(--dl-color-gray-black)";
      }
    });
  }

  // Event listener for input and textarea focus
  let inputs = document.querySelectorAll(".input, .textarea");
  for (let input of inputs) {
    input.addEventListener("focus", function() {
      this.style.borderColor = "var(--dl-color-primary-300)";
    });
    input.addEventListener("blur", function() {
      this.style.borderColor = "var(--dl-color-gray-black)";
    });
  }

});
