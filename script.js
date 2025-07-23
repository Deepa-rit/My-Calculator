// Get reference to the display input box
const display = document.getElementById("display");

// Get all button elements
const buttons = document.querySelectorAll("button");

// This will store the current expression entered by the user
let expression = "";

// Loop through all buttons and attach a click event listener to each
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "=") {
      // If "=" is clicked, evaluate the expression and show result
      try {
        expression = eval(expression); // Perform calculation
        display.value = expression;
      } catch {
        display.value = "Error"; // Show error if expression is invalid
      }
    } else if (value === "C") {
      // If "C" is clicked, clear the expression and display
      expression = "";
      display.value = "";
    } else {
      // For numbers and operators, add them to the expression
      expression += value;
      display.value = expression;
    }
  });
});