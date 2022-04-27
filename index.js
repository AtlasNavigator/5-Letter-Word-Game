const readLine = require('readline-sync'); //Allows for user input
const { rword } = require('rword'); // Random word generator

// Welcome sign
console.log(`                                                            
       __   __   __   ______  $$ |  _______   ______   _____  ____    ______  
      /  | /  | /  | /      \ $$ | /       | /      \ /     \/    \  /      \ 
      $$ | $$ | $$ |/$$$$$$  |$$ |/$$$$$$$/ /$$$$$$  |$$$$$$ $$$$  |/$$$$$$  |
      $$ | $$ | $$ |$$    $$ |$$ |$$ |      $$ |  $$ |$$ | $$ | $$ |$$    $$ |
      $$ \_$$ \_$$ |$$$$$$$$/ $$ |$$ \_____ $$ \__$$ |$$ | $$ | $$ |$$$$$$$$/ 
      $$   $$   $$/ $$       |$$ |$$       |$$    $$/ $$ | $$ | $$ |$$       |
       $$$$$/$$$$/   $$$$$$$/ $$/  $$$$$$$/  $$$$$$/  $$/  $$/  $$/  $$$$$$$/`);
  console.log(`  / |              
 _$$ |_     ______  
/ $$   |   /      \ 
$$$$$$/   /$$$$$$  |
  $$ | __ $$ |  $$ |
  $$ |/  |$$ \__$$ |
  $$  $$/ $$    $$/ 
   $$$$/   $$$$$$/ `);
   console.log(`

                                         __                                             
                                        /  |                                            
 __   __   __   ______    ______    ____$$ |  ______    ______   _____  ____    ______  
/  | /  | /  | /      \  /      \  /    $$ | /      \  /      \ /     \/    \  /      \ 
$$ | $$ | $$ |/$$$$$$  |/$$$$$$  |/$$$$$$$ |/$$$$$$  | $$$$$$  |$$$$$$ $$$$  |/$$$$$$  |
$$ | $$ | $$ |$$ |  $$ |$$ |  $$/ $$ |  $$ |$$ |  $$ | /    $$ |$$ | $$ | $$ |$$    $$ |
$$ \_$$ \_$$ |$$ \__$$ |$$ |      $$ \__$$ |$$ \__$$ |/$$$$$$$ |$$ | $$ | $$ |$$$$$$$$/ 
$$   $$   $$/ $$    $$/ $$ |      $$    $$ |$$    $$ |$$    $$ |$$ | $$ | $$ |$$       |
 $$$$$/$$$$/   $$$$$$/  $$/        $$$$$$$/  $$$$$$$ | $$$$$$$/ $$/  $$/  $$/  $$$$$$$/ 
                                            /  \__$$ |                                  
                                            $$    $$/                                   
                                             $$$$$$/                                    

`);

let answer = getAnswer()
let playing=true;

while (playing){
  guess = getGuess()
  playing=checkWin(answer, guess);
  if (playing == false){
    continue
  }
  checkCommonLetters(answer, guess);
  checkSameLetters(answer, guess);
}
console.log('Thanks for playing!')


function getAnswer(){
  // Generate 15 different 5 letter words
  let wordGen = rword.generate(15, { length: 5 });
  let randomNumber = Math.floor(Math.random()*wordGen.length)
  let answer = wordGen[randomNumber].split("")
  return answer
}

function getGuess(){
  let guess = readLine.question("Enter a 5 letter word: ");
  while (guess.length !=5 ){
    console.log('Invalid length.')
    guess = readLine.question("Enter a 5 letter word: ");
  }
  guess = guess.split("");
  return guess
}

function checkWin(answer, guess){
   if (guess.join() == answer.join()){
    console.log('Congratulations, you won!')
    return false
   }
   return true
}

// Check for correct letters
function checkCommonLetters(answer, guess){
  let countSimilar = 0;
  for (let i=0; i<answer.length; i++){
    for (let j=0; j<guess.length; j++){
      if (answer[i]==guess[j]){
        countSimilar++
      }
    }
  }
  console.log(`${countSimilar} letter(s) in YOUR guess are also in MY SECRET word`);
}

// Check if the letters are in the right place
function checkSameLetters(answer, guess){
  let correctPosition = 0;
  for (let i=0; i<answer.length; i++){
    if (answer[i]==guess[i]){
      correctPosition++
    }
  }
  console.log(`${correctPosition} letter(s) in YOUR guess are in the correct position`);
}