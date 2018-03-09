'use strict';

//question one
function jobQuestion(totalPointCounter){

  var jobQuestion = prompt('Did I go from a intern to full time employee at Microsoft? ').toLowerCase();
  console.log('Did Natty go from a intern to full time employee at Microsoft? ');
  if(jobQuestion === 'yes') {
    alert('Yes i went from a 6 month internship, too a 1 year contract with Microsoft!');
    console.log('Yes I went from a 6 month internship, too a 1 year contract with Microsoft');
    totalPointCounter++;
  }
  else if(jobQuestion ==='no') {
    alert('Nope! I was actually fortunate enought to be albe too ');
    console.log('Nope! I was actually fortunate enought to be albe too ');
  }
  return totalPointCounter;
}

//question two
function stuQuestion(totalPointCounter){
  var stuQuestion = prompt(' Did I have his own recording studio? ').toLowerCase();
  console.log('Did I have his own recording studio?');
  if(stuQuestion === 'yes') {
    alert('  Yes, it was located in downtown seattle!');
    console.log('Yes, it was located in downtown seattle!');
    totalPointCounter++;
  }
  else if(stuQuestion ==='no') {
    alert('Nope! I was actually fortunate to do so! ');
    console.log('Nope! I was actually fortunate to do so! ');
  }
  return totalPointCounter;
}

//question three
function bornFunction(totalPointCounter){

  var bornQuestion = prompt(' Was I born in USA?  ').toLowerCase();
  console.log(' Was I born in USA? ');
  if(bornQuestion === 'yes') {
    alert('  Nope, I was actually born in Ethiopia! ');
    console.log('Nope, I was actually born in Ethiopia!');
  }
  else if(bornQuestion ==='no') {
    alert('Correct! I was born in Ethiopia, actually! ');
    console.log('Correct! I was born in Ethiopia, actually!  ');
    totalPointCounter++;
  }

  return totalPointCounter;
}

//question four
function rallyQuestion(totalPointCounter){
  
  var rallyQuestion = prompt(' Did i particapate in a protest rally with Martin luther King III?  ').toLowerCase();
  console.log(' Did i particapate in a protest rally with Martin luther King III? ');
  if(rallyQuestion === 'yes') {
    alert(' Correct! It took place in Selma,Alabama for the 53rd anual Bloody Sunday bridge crossing! ');
    console.log('Correct! It took place in Selma,Alabama for the 53rd anual Bloody Sunday bridge crossing!');
    totalPointCounter++;

  }
  else if(rallyQuestion ==='no') {
    alert('Wrong! I Actually did, It took place in Selma,Alabama for the 53rd anual Bloody Sunday bridge crossing! ');
    console.log('Wrong! I Actually did, It took place in Selma,Alabama for the 53rd anual Bloody Sunday bridge crossing! ');
    totalPointCounter++;
  }

  return totalPointCounter;
}
var totalPointCounter = 0;

// question five
function elQuestion(totalPointCounter){

  var elQuestion = prompt(' Do i have a restored 1978 Chevy El Camino? ').toLowerCase();
  console.log(' Do i have a restored 1978 Chevy El Camino?  ');
  if(elQuestion === 'yes') {
    alert(' Correct! It took my about 3 years to restore! ');
    console.log('Correct! It took my about 3 years to restore!');
    totalPointCounter++;

  }
  else if(rallyQuestion ==='no') {
    alert('Wrong! I actually do its cherry red with black stripes, took 3 years ! ');
    console.log('Wrong! I actually do its cherry red with black stripes, took 3 years ! ');
  }

  return totalPointCounter;
}

// question six
function numberOfGuessesQuestion(totalPointCounter){

  var certGuess = parseInt(prompt('Can you guess how many coding certificates I Have ? '));
  console.log('Cert Guess', certGuess);
  var numberOfGuess = 3;

  while(numberOfGuess > 0) {
    if(certGuess === 1) {
      console.log('Correct! I have a Database Administration Certificate');
      alert('Correct! I have a Database Administration Certificate');
      totalPointCounter++;
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

  return totalPointCounter;
}

//question 7
function myProgGuessQuestion(totalPointCounter){

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

  return totalPointCounter;
}

// prompt
alert('Lets play a guessing game about natty');
console.log('Lets Play');

// instructions
alert('Please answer questions with a yes or no!');
console.log('yes or no')


//question six



//question 7





//As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

//var solution = 0; ??????

alert (' you have ' + totalPointCounter + 'of points out of the possiable 7 points! ');
console.log(' you have ' + totalPointCounter + ' of points out of the possiable 7 points! ');