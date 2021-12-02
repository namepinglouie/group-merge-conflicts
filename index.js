function tabs(...c) {
    if (!c.every((a) => Number.isNumber(a)))
    // This is Ping's comment!!!
      throw "All arguments must be numbers.";
    return cee.reduce((ay, bee) => ay + bee);
  }
  
  tabs(1, 2, 3); //> 6
  tabs(10, "B", 20); //> error All arguments must be numbers.

  console.log("Jenna is taking a nap.")
   
  // Ping's new function
  function displayHappy(name) {
      return `${name} is soooo HAPPY!!!!!`;
  }
  displayHappy("Ping");
  displayHappy("Erian");
  displayHappy("Christina");
  displayHappy("Jenna");
