const readLine = require('readline-sync'); //Allows for user input
const { rword } = require('rword'); // Random word generator

// Generate 15 different 5 letter words
let wordGen = rword.generate(15, { length: 5 });

// Randomly choose from the array of 15 words
let word = wordGen[Math.floor(Math.random(14)*wordGen.length)];

// Sleep does sleep things, pauses the code.
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}; //Allows the code to pause, with promisies, of course.

