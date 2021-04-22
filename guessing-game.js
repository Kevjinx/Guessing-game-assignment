const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });




/*
//checkGuess function
secretNumber
askGuess
question  module


checkGuess
askGuess

phase 1
take in Input


Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
Enter a guess: *15*
Too high.
Enter a guess: *11*
Too low.
Enter a guess: *13*
Too high.
Enter a guess: *12*
Correct!
YOU WON.

*/

//input from user = min and max


let secretNumber = 10;

const checkGuess = (num) => {
  if (num > secretNumber) {
    rl.question('too high')
    return false;
  } else if (num < secretNumber) {
    rl.question('too low')
    return false;
  } else {
    return true;
  }
}

const askGuess = () => {
  rl.question('What/s your number?', (answer) => {

    if (checkGuess(answer)) {
      rl.question('Correct!')
      rl.question('YOU WON.')
      rl.close();
    }
  }
}



askGuess();
