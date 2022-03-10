'use strict';

let score = 0;

//Get user name & welcome message
function getName(){
let userName = prompt('Hello! What is your name?').toUpperCase();
alert(`Welcome, ${userName}!`);
return userName;
}

// q1() ;
// q2() ;
// q3() ;
// q4() ;
// q5() ;
// q6() ;
// q7() ;




// //question 1

let question1 = prompt('Do I have a sibling?').toLowerCase();
function q1(){
while(question1 !== 'y' && question1 !== 'yes' && question1 !== 'n' && question1 !== 'no') {
  question1 = prompt('please give a yes or no answer.');
}

if (question1 === 'y' || question1 === 'yes'){
  // console.log('Q1: That is correct!');
  alert('Correct! I have an older brother.');
  score+=1;
} else if (question1 === 'n' || question1 === 'no'){
  // console.log('Q1: That is incorrect.');
  alert('That is incorrect, I have an older brother.');
}

}





//question 2
function q2(){

let question2 = prompt('Do I have a degree?').toLowerCase();

while(question2 !== 'y' && question2 !== 'yes' && question2 !== 'n' && question2 !== 'no') {
  question2 = prompt('please give a yes or no answer.');
}

if (question2 === 'y' || question2 === 'yes'){
  // console.log('Q2: That is incorrect.');
  alert('That is incorrect, I never finished college.');
} else if (question2 === 'n' || question2 === 'no'){
  // console.log('Q2: That is correct!');
  alert('Correct! I dropped out of college early to pursue coding!');
  score+=1;
}

}



//question 3

function q3(){
let question3 = prompt('Have I been to a different country?').toLowerCase();

while(question3 !== 'y' && question3 !== 'yes' && question3 !== 'n' && question3 !== 'no') {
  question3 = prompt('please give a yes or no answer.');
}

if (question3 === 'y' || question3 === 'yes'){
  // console.log('Q3: That is correct!');
  alert('Correct! I go to Canada once a year for a regatta and I\'ve been to Europe a few times!');
  score+=1;
} else if (question3 === 'n' || question3 === 'no'){
  // console.log('Q3: That is incorrect.');
  alert('That is incorrect, I\'m in canada often and have been to Europe a few times.');
}

}

//question 4


let question4 = prompt('Do I have a pet?').toLowerCase();

while(question4 !== 'y' && question4 !== 'yes' && question4 !== 'n' && question4 !== 'no') {
  question4 = prompt('please give a yes or no answer.');
}

if (question4 === 'y' || question4 === 'yes'){
  // console.log('Q4: That is correct!');
  alert('Correct! I currently have three cats!');
  score+=1;
} else if (question4 === 'n' || question4 === 'no'){
  // console.log('Q4: That is incorrect.');
  alert('That is incorrect, I have three cats.');
}


//question 5

let question5 = prompt('Can I play any instruments?').toLowerCase();

while(question5 !== 'y' && question5 !== 'yes' && question5 !== 'n' && question5 !== 'no') {
  question5 = prompt('please give a yes or no answer.');
}

if (question5 === 'y' || question5 === 'yes'){
  // console.log('Q5: That is correct!');
  alert('Correct! I played the trumpet from 6th grade all the way through the end of high school!');
  score+=1;
} else if (question5 === 'n' || question5 === 'no'){
  // console.log('Q5: That is incorrect.');
  alert('That is incorrect, I can play the trumpet.');
}



//Question six: Number guess

//random number generator
let min = Math.ceil(1);
let max = Math.floor(100);
let answer = Math.floor(Math.random() * (max - min) + min);
//console.log(answer);

let guess = Number(prompt('Now we\'re going to play a game! Guess a number between 1 and 100!'));

for(let i = 0; i < 3; i++) {
  //Ensure guess is a number between 1 and 100
  while(!(guess) || guess < 1 || guess > 100) {
    if(!(guess)) {
      guess = Number(prompt('Please enter a number!'));
    } else if(guess < 1 || guess > 100) {
      guess = Number(prompt('Please guess a number within the parameters!'));
    }
  }

  if(guess > answer && i < 2) {
    guess = Number(prompt('Too high! Give it another go!'));
  } else if(guess < answer && i < 2) {
    guess = Number(prompt('Too low! Try again!'));
  } else if(guess > answer && i === 2){
    guess = Number(prompt('Too high! This is your last shot!'));
  } else if(guess < answer && i === 2){
    guess = Number(prompt('Too low! This is your last shot!'));
  } else if(guess === answer){
    alert('You got it! Great work!');
    score+=1;
    break;
    //console.log('Q6: Correct');
  }

  if(guess !== answer && i === 2) {
    alert(`Sorry! The answer was ${answer}, better luck next time!`);
    //console.log('Q6: Incorrect');
  }
}



//Question 7: Multiple choice

let multipleChoice = ['pokemon', 'fire emblem', 'final fantasy', 'inscryption'];
let question6 = prompt('Why don\'t you try to guess a video game that I like?').toLowerCase();
let isTrue = false;

for(let i = 0; i < 6; i++) {
  for(let x = 0; x < multipleChoice.length; x++) {
    if(question6 === multipleChoice[x]) {
      isTrue = true;
    }
    console.log(i, x);
  }
  if(isTrue === false && i !== 5) {
    question6 = prompt('Nice try, but no. Guess again!').toLowerCase();
  } else if(isTrue === false && i === 5) {
    alert(`You didn't manage to get this one. I like ${multipleChoice[0]}, ${multipleChoice[1]}, ${multipleChoice[2]}, and ${multipleChoice[3]}. Better luck next time!`);
    //console.log('Q7: incorrect');
  } else {
    alert('Nice work! That\'s right!');
    score+=1;
    //console.log('Q7: correct');
    break;
  }
  // if(!(multipleChoice.includes(question6))) {
  //   question6 = prompt('Nice try, but no. Guess again!').toLowerCase();
  // } else {
  //   alert('Nice work! That\'s right!');
  //   score+=1;
  //   //console.log('Q7: correct');
  //   break;
  // }

  // if(i === 4 && !(multipleChoice.includes(question6))) {
  //   alert('You didn\'t manage to get this one. Better luck next time!');
  //   //console.log('Q7: incorrect');
  // } Sad Face, didn't read through to the very end of the instructions, can't use .includes()...
}

//thank user for playing
alert(`Your score is ${score}/7!`);
alert(`Thank you for playing, ${userName}!`);
