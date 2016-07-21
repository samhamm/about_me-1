'use strict';

var userName = prompt('What is your name?');

// alert('Hello ' + userName + '! Let\'s see if you can answer these yes/no questions about me. Please type your response as either yes/no or y/n.');
//
// //question one
// var question1 = prompt('Is Lee a Swing dancer?').toLowerCase();
//
// if (question1 === 'yes' || question1 === 'y') {
//   alert('That\'s right, ' + userName + '! Lee\'s been doing Lindy Hop and other Jazz dances for nine years!');
// } else {
//   alert('He mentioned this the first day in class during his introduction. Were you listening,' + userName + ' ? :(');
// };
//
// console.log('User\'s response is "' + question1 + '" to question 1.');
//
// //question two
// var question2 = prompt('Is Lee a smoker?').toLowerCase();
//
// if (question2 === 'no' || question2 === 'n') {
//   alert('That\'s correct,' + userName + '! Up until about a year and a half ago, he was for the prior 12 years, but he has since quit!');
// } else {
//   alert('That is a big negatory,' + userName + '. He used to, but does no longer.');
// };
//
// console.log('User\'s response is "' + question2 + '" to question 2.');
//
// //question three
// var question3 = prompt('Is Lee playing PokemonGO right now?').toLowerCase();
//
// if (question3 === 'yes' || question3 === 'y') {
//   alert('Most likely. Probably just caught a Pikachu, ' + userName + '. Just kidding. It\'s just a Zubat. Of course.');
// } else {
//   alert('Interesting thought, ' + userName + '. If he\'s not playing, his phone\'s battery has likely died.');
// };
//
// console.log('User\'s response is "' + question3 + '" to question 3.');
//
// //question four
// var question4 = prompt('Is Lee\'s hair red?').toLowerCase();
//
// if (question4 === 'no' || question4 === 'n') {
//   alert('Really, ' + userName + '? Have you looked at him? It\'s pretty red. :)');
// } else {
//   alert('That\'s correct, ' + userName + '! Been a ginger his whole life.');
// };
//
// console.log('User\'s response is "' + question4 + '" to question 4.');
//
// //question 5
// var question5 = prompt('Was he born in California?').toLowerCase();
//
// if (question5 === 'yes' || question5 === 'y') {
//   alert('Yup! In a small town near Lancaster, California, ' + userName + '!');
// } else {
//   alert('That is incorrect, ' + userName + '. He was born in northern California ');
// };
//
// console.log('User\'s response is "' + question5 + '" to question 5.');
//
// alert('Now for a more difficult question with a number for an answer. Do your best!');

//Question 6

var age = 31;

for (var i = 0; i < 4; i++){
  var ageAnswer = prompt('How old is Lee? Redheads are deceptively difficult to tell with!');
  if (ageAnswer == age) {
    alert('You got it right! Great job, partner. Lee is ' + age + '!')
    console.log(ageAnswer)
    break;
  }
  else if (ageAnswer > age) {
    alert('You guessed a bit too high. Does he look that old?');
    console.log(ageAnswer);
  }
  else if (ageAnswer < age) {
    alert('You\'re a bit too low. I realize Lee\'s immature, but not that bad.');
    console.log(ageAnswer);
  }
  else if (isNaN(ageAnswer) === true) {
    alert('That is not a number. You can\'t do that.');
    console.log(ageAnswer);
  }
  else if ((i === 3) && (ageAnswer !== age)) {
    alert('You\'ve run out of chances. Lee\'s ' + age + ', for the record!')
    console.log(ageAnswer);
  }
}

//Question 7

var pokemon = ['pikachu', 'zubat', 'drowzee', 'onyx', 'charmander', 'snorlax'];

var guesses = 0;
while ( guess < 7) {
  var pokeAnswer = prompt('What Pokemon has Lee caught this week on PokemonGO?').lowercase;
  for (var i = 0; i < pokemon.length; i++) {
    if (pokeAnswer === pokemon[i]) {
      
      guesses = 7;
      break;
    }
  }
  guesses++;
  alert('Not that one. You\'re not the very best, but try again!');
  console.log(pokeAnswer);
}
for (var i = 0; i < 6; i++) {
  var pokeAnswer = prompt('What Pokemon has Lee caught in the last week while playing PokemonGO?').toLowerCase();

  if (pokeAnswer === pokemon.indexOf(pokeAnswer)) {
    alert('Nailed it! That is definitely one he got this week. Here\'s everything he\'s caught this week: ' + pokemon);
    console.log(pokeAnswer);
    break;
  }

  else if ((i === 5) && (pokeAnswer !== pokemon.indexOf(pokeAnswer))) {
    alert('No, ' + userName + ', he has not caught any of those this week. The ones he has caught are: ' + pokemon);
    console.log(pokeAnswer);
  }

  else if (pokeAnswer !== pokemon.indexOf(pokeAnswer)) {
    alert('Not that one. You\'re not the very best, but try again!')
    console.log(pokeAnswer);
  }
}
