'use strict';

//Get user name & welcome message
let userName = prompt('Hello! What is your name?').toUpperCase();
alert(`Welcome, ${userName}!`);

//question 1
let question1 = prompt('Do I have a sibling?').toLowerCase();

if (question1 === 'y' || question1 === 'yes'){
  // console.log('Q1: That is correct!');
  alert('That is correct!');
} else if (question1 === 'n' || question1 === 'no'){
  // console.log('Q1: That is incorrect.');
  alert('That is incorrect.');
}

//question 2
let question2 = prompt('Do I have a degree?').toLowerCase();

if (question2 === 'y' || question2 === 'yes'){
  // console.log('Q2: That is incorrect.');
  alert('That is incorrect.');
} else if (question2 === 'n' || question2 === 'no'){
  // console.log('Q2: That is correct!');
  alert('That is correct!');
}

//question 3
let question3 = prompt('Have I been to a different country?').toLowerCase();

if (question3 === 'y' || question3 === 'yes'){
  // console.log('Q3: That is correct!');
  alert('That is correct!');
} else if (question3 === 'n' || question3 === 'no'){
  // console.log('Q3: That is incorrect.');
  alert('That is incorrect.');
}

//question 4
let question4 = prompt('Do I have a pet?').toLowerCase();

if (question4 === 'y' || question4 === 'yes'){
  // console.log('Q4: That is correct!');
  alert('That is correct!');
} else if (question4 === 'n' || question4 === 'no'){
  // console.log('Q4: That is incorrect.');
  alert('That is incorrect.');
}

//question 5
let question5 = prompt('Can I play any instruments?').toLowerCase();

if (question5 === 'y' || question5 === 'yes'){
  // console.log('Q5: That is correct!');
  alert('That is correct!');
} else if (question5 === 'n' || question5 === 'no'){
  // console.log('Q5: That is incorrect.');
  alert('That is incorrect.');
}

//thank user for playing
alert(`Thank you for playing, ${userName}!`);
