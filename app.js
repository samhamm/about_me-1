"use strict"

var userName = prompt('What is your name?');

alert('Hello ' + userName + '! Let\'s see if you can answer these yes/no questions about me. Please type your response as either yes/no or y/n.');

//question one
var question1 = prompt('Is Lee a Swing dancer?');

if (question1 === 'yes' || question1 === 'y') {
  alert('That\'s right, ' + userName + '! Lee\'s been doing Lindy Hop and other Jazz dances for nine years!');
} else {
  alert('He mentioned this the first day in class during his introduction. Were you listening,' + userName + ' ? :(')
}

//question two
var question2 = prompt('Is Lee a smoker?');

if (question2 === 'no' || question2 === 'n') {
  alert('That\'s correct,' + userName + '! Up until about a year and a half ago, he was for the prior 12 years, but he has since quit!')
} else {
  alert('That is a big negatory,' + userName + '. He used to, but does no longer.')
}

//question three

var question3 = prompt('Is Lee playing PokemonGO right now?');

if (question3 === 'yes' || question3 === 'y') {
  alert('Most likely. Probably just caught a Pikachu, ' + userName + '. Just kidding. It\'s just a Zubat. Of course.')
} else {
  alert('Interesting thought, ' + userName + '. If he\'s not playing, his phone\'s battery has likely died.')
}

//question four

var question4 = prompt('Is Lee\'s hair red?');

if (question4 === 'no' ||| question4 === 'n') {
  alert('Really, ' + userName + '? Have you looked at him? It\'s pretty red. :)')
} else {
  alert('That\'s correct, ' + userName '! Been a ginger his whole life.')
}

//question 5

var question5 = prompt('Was he born in California?');

if (question5 === 'yes' ||| question5 === 'y') {
  alert('Yup! In a small town near Lancaster, California, ' + userName + '!')
} else {
  alert('That is incorrect, ' + userName + '. He was born in northern California ')
}
