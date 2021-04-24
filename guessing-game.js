const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let secretNumber = 10;

const checkGuess = (num) => {
  if (num > secretNumber) {
    console.log('too high')
    return false;
  } else if (num < secretNumber) {
    console.log('too low')
    return false;
  } else if (num == secretNumber) {
    console.log('You win!')
    return true;
  }
}

const askGuess = () => {
  rl.question('Enter a guess:', (answer) => {

    if (!parseInt(answer)) {
      console.log(`${answer} is not a valid number`)
      askGuess();
    }
    if (checkGuess(answer)) {
      rl.close();
    } else {
      askGuess();
    }
  })
}



const askNum = () => {
  const askMin = rl.question(`Enter a min number: `, (min) => {

    const askMax = rl.question(`Enter a max number: `, (max) => {

      console.log(`I'm thinking of a number between ${min} and ${max}...`);

      max = parseInt(max);
      min = parseInt(min);

      secretNumber = Math.round(Math.random() * (max - min)) + min;
      console.log(`secretNum: ${secretNumber}`);

      askGuess();
    })
  })
}



askNum();
