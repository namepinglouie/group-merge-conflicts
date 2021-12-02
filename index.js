// This is Ping's comment!!!
function fn(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.
  
  // Ping's new function
  function displayHappy(name) {
      return `${name} is soooo HAPPY!!!!!`;
  }
  displayHappy("Ping");
  displayHappy("Erian");
  displayHappy("Christina");
  displayHappy("Jenna");

  // I created a branch name to see difference and made a comment