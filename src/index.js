let sidesOfDice = parseFloat(prompt('Enter how much sides of die to roll'));
let rollCounter = 1;
let doubleCounter = 1;
let sumDieOne = 0;
let sumDieTwo = 0;
let averageOne;
let fixAvgOne;
let averageTwo;
let fixAvgTwo;

// Asking user for a correct sides of Dice
// 1. Should be a Positive Integer and not less than 3
// 2. Should not be a String
// 3. Should not be a decimal or negative value
while (sidesOfDice <= 2 || isNaN(sidesOfDice) || sidesOfDice % 1 != 0) {
  sidesOfDice = parseFloat(prompt('Enter how much sides of die to roll'));
}

alert("Please check console log :)");
console.log(`Thanks! Let's get it on!`);

let firstRandomDie = getRandomInt(1, sidesOfDice); 
let secondRandomDie = getRandomInt(1, sidesOfDice);

// Loop and display every roll of dice till the user get the Snake Eye(Die one = 1 and Die two =1).
while (firstRandomDie != 1 || secondRandomDie != 1) {
  console.log(`${rollCounter}. die number 1 is ${firstRandomDie} and die number 2 is ${secondRandomDie}.`);
  checkDoubles(firstRandomDie,secondRandomDie);
  sumDieOne = firstRandomDie + sumDieOne;
  sumDieTwo = secondRandomDie + sumDieTwo;
  firstRandomDie = getRandomInt(1, sidesOfDice);
  secondRandomDie = getRandomInt(1, sidesOfDice);
  rollCounter++;
}

console.log(`${rollCounter}. die number 1 is ${firstRandomDie} and die number 2 is ${secondRandomDie}.`); // Print the Snake Eyes match
console.log(`You got Snake Eyes! Finally! On try number ${rollCounter}`); // Show how many times that the dice rolled to get a Snake Eyes
printDoubles(doubleCounter); // Show how many number of doubles that the dice has made.
getAvgForDieOne (fixAvgOne); // Compute and print the average of rolls for dice one.
getAvgForDieTwo (fixAvgTwo); // Compute and print the average of rolls for dice two.

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max+1 - min)) + min;
}

function checkDoubles(firstRandomDie, secondRandomDie){
  if (firstRandomDie == secondRandomDie) {
    doubleCounter++;
  }
}

function printDoubles(doubleCounter) {
  if (doubleCounter > 1) {
    console.log(`Along the way you rolled doubles ${doubleCounter} times`);
  } else {
    console.log(`Along the way you rolled doubles once. Which is the Snake Eyes!`);
  }
}

function getAvgForDieOne (fixAvgOne) {
  averageOne = (sumDieOne + 1) / rollCounter;
  fixAvgOne = averageOne.toFixed(2);
  console.log(`The average roll for die 1 was ${fixAvgOne}`);
  return fixAvgOne;
}

function getAvgForDieTwo (fixAvgTwo) {
  averageTwo = (sumDieTwo + 1) / rollCounter;
  fixAvgTwo = averageTwo.toFixed(2);
  console.log(`The average roll for die 2 was ${fixAvgTwo}`);
}
