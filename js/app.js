'use strict';

// prompt
alert('Do you Want to Play A Guessing Game About Natty');
console.log('Lets Play');

// instructions
alert('Answer Questions With A yes or no!');
console.log('yes or no');


//question one
var shoeQuestion = prompt('Do you think natty has more then 100 pairs of shoes? Please enter "yes" or "no"').toLowerCase();

if(shoeQuestion === 'no') {
  alert('Your Right Natty Dose not lol If He Did He Would Give You A Pair!');
} else {
  alert('Nope! Natty Has About 40, Almost There');

}


console.log('Do you think natty has more then 100 pairs of shoes? ' + shoeQuestion);

// question two
var travelQuestion = prompt('Do You Think Natty Has Left The United States Since He Came To American In 1997? Please enter "yes" or "no"').toLowerCase();

if(travelQuestion === 'no') {
  alert('That Is Correct, I Need Stop Flying Only Domestically, And Get Out The Country ');
} else {
  alert('I actually have not!');
}


console.log('Do You Think Natty Has Left The United States Since He Came To American In 1997? ' + travelQuestion);


// question three
var hairQuestion = prompt('Do you think natty has been growing his hair less then 1 year? Please enter "yes" or "no"').toLowerCase();

if(hairQuestion === 'no') {
  alert('Yes, it has been about 4 years actually! ');
} else {
  alert('Nope! It would be amazing if my hair can grow that fast!');
}


console.log('Do you think natty has been growing his hair less then 1 year? ' + hairQuestion);

// question four
var sportQuestion = prompt('Is My Favorite Sport Rugby? Please enter "yes" or "no"').toLocaleLowerCase();


if(sportQuestion === 'no') {
  alert('Yes! you know me well already, I am more of a basketball guy!  ');
} else {
  alert('Nope! try again! ');
}


console.log('Is My Favorite Sport Rugby? ' + sportQuestion);



// question five
var schoolQuestion  = prompt('Did natty go to Harvard Law? Please enter "yes" or "no"').toLocaleLowerCase();


if(schoolQuestion === 'no') {
  alert('Correct! i never went to Harvard Law, only while sleeping ');
} else {
  alert('That was nice of you to think so, but i did not');
}


console.log('Did natty go to Harvard Law? ' + sportQuestion);


//question six
var certGuess = parseInt(prompt('Can you guess how many coding certificates I Have ? '));
console.log('Cert Guess', certGuess);
var numberOfGuess = 3;

while(numberOfGuess > 0) {
  if(certGuess === 1) {
    console.log('Correct! I have a Database Administration Certificate');
    alert('Correct! I have a Database Administration Certificate');
    break;
  }
  else if(certGuess > 1) {
    alert('Too High!');
    certGuess = prompt('Can you guess how many coding certificates I Have ?');
    numberOfGuess--;
  }

  else if(certGuess < 1) {
    alert('Too Low!');
    certGuess = prompt('Can you guess how many coding certificates I Have ? ');
    numberOfGuess--;
  }
  else {
    certGuess = prompt('Please enter a number only! ');

    console.log('Nope!');
    numberOfGuess--;
  }
  if(numberOfGuess === 0) {
    alert('You are out of guesses, however I do have 1 Certificate in Database Adminstration just so you know! ');
  }

  console.log('The Number Of Guess is: ' , numberOfGuess);
}



// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

//question 7

var myprogGuess = ['php', 'python', 'java', 'objective c', 'javascript','ruby'];

console.log('User Program Guess', progGuess);

var numberGuess = 6;
for(var counter = 0; counter < numberGuess; counter++) {
  var progGuess = prompt(' guess one of the computer programing language\'s i want to learn ? ');
  for(var i = 0; i < myprogGuess.length; i++) {
    console.log(i);
    if(progGuess === myprogGuess [i]) {
      counter = 10;
      console.log('Correct!');
      alert('Yes, that is one of the languages i want to learn');
      break;
    }
    else {
      console.log('Nope!');

    }
  }

}
alert ('These are all the programs i wish to learn php, python, java, objective c, javascript,ruby' );



//As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

//var solution = 0; ?????? 
