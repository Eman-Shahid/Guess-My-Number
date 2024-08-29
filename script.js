'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 15;
*/

//handling click event

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // if there is no number
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');
  }
  //when player wins
  else if (guess == secretnumber) {
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretnumber ? 'To high!' : 'To low!';
      displayMessage(guess > secretnumber ? 'To high!' : 'To low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // when number is low
  // else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //when number is high
  // else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'you lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 10) + 1;

  // document.querySelector('.message').textContent = 'Starting game...';
  displayMessage('Starting game...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.width = '15rem';
});
