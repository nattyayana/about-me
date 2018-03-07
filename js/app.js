// 'use strict';

// // prompt
// alert('Do you Want to Play A Guessing Game About Natty');
// console.log('Lets Play');

// // instructions
// alert('Answer Questions With A yes or no!');
// console.log('yes or no');


// //question one
// var shoeQuestion = prompt('Do you think natty has more then 100 pairs of shoes? Please enter "yes" or "no"').toLowerCase();

// if(shoeQuestion === 'no') {
//   alert('Your Right Natty Dose not lol If He Did He Would Give You A Pair!');
// } else {
//   alert('Nope! Natty Has About 40, Almost There');

// }


// console.log('Do you think natty has more then 100 pairs of shoes? ' + shoeQuestion);

// // question two
// var travelQuestion = prompt('Do You Think Natty Has Left The United States Since He Came To American In 1997? Please enter "yes" or "no"').toLowerCase();

// if(travelQuestion === 'no') {
//   alert('That Is Correct, I Need Stop Flying Only Domestically, And Get Out The Country ');
// } else {
//   alert('I actually have not!');
// }


// console.log('Do You Think Natty Has Left The United States Since He Came To American In 1997? ' + travelQuestion);


// // question three
// var hairQuestion = prompt('Do you think natty has been growing his hair less then 1 year? Please enter "yes" or "no"').toLowerCase();

// if(hairQuestion === 'no') {
//   alert('Yes, it has been about 4 years actually! ');
// } else {
//   alert('Nope! It would be amazing if my hair can grow that fast!');
// }


// console.log('Do you think natty has been growing his hair less then 1 year? ' + hairQuestion);

// // question four
// var sportQuestion = prompt('Is My Favorite Sport Rugby? Please enter "yes" or "no"').toLocaleLowerCase();


// if(sportQuestion === 'no') {
//   alert('Yes! you know me well already, I am more of a basketball guy!  ');
// } else {
//   alert('Nope! try again! ');
// }


// console.log('Is My Favorite Sport Rugby? ' + sportQuestion);



// // question five
// var schoolQuestion  = prompt('Did natty go to Harvard Law? Please enter "yes" or "no"').toLocaleLowerCase();


// if(schoolQuestion === 'no') {
//   alert('Correct! i never went to Harvard Law, only while sleeping ');
// } else {
//   alert('That was nice of you to think so, but i did not');
// }


// console.log('Did natty go to Harvard Law? ' + sportQuestion);


//question six
//As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var certGuess = prompt('How Many Coding Certificates Do I Have ? ');
certGuess.toLowerCase();
var numberOfGuess = 3;

while(numberOfGuess > 0) {
  if(certGuess === '1') {
    console.log('Correct! I have a Database Administration Certificate');

    break;
  } else {
    certGuess = prompt('How Many Coding Certificates Do I Have ? ');
    certGuess.toLowerCase();

    console.log('Nope!');
    numberOfGuess--;
  }
  if(numberOfGuess === 0) {
    alert('nope');
  }

  console.log('The Number Of Guess is: ' , numberOfGuess);
}
