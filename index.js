function fn(...cee) {
    if (!cee.every((ay) => Number.isNumber(ay)))
    // This is Ping's comment!!!
      throw "All arguments must be numbers.";
    return cee.reduce((ay, bee) => ay + bee);
  }
  
  fn(1, 2, 3); //> 6
  fn(10, "B", 20); //> error All arguments must be numbers.

  console.log("Jenna is taking a nap.")
  
  
  // Ping's new function
  function displayHappy(name) {
      return `${name} is soooo HAPPY!!!!!`;
  }
  displayHappy("Ping");
  displayHappy("Erian");
  displayHappy("Christina");
  displayHappy("Jenna");
