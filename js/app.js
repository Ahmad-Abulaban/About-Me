'use strict';


alert('Hello');

alert('Wlecome to my Website');

let name = prompt('what is your name');
while(name === null || name === ''){
    name = prompt('what is your name ? , please Enter your name');
}

alert('Nice to meet you ' + name);

let age = Number(prompt('please enter your age?'));

console.log(age);

alert(age);

let favPhone = prompt('what is you fav Phone ? ');

alert('Excellent choice');


alert('Your name is ' + name + '\n Your age is ' + age + '\n your favphone is ' + favPhone + '\n Nice to meet you ');

alert('let\'s start guessing game');

let play = prompt('Are you ready to play ? ');
play = play.toLowerCase();
if(play === 'yes' || play === 'y'){
    alert('Let\'s Start');
    console.log('Let\'s Start');
} else if(play === 'no' || play === 'n'){
    alert('False');
    console.log('False');
}

let myAge = prompt('Do you think I am 21 years old ?');
myAge = myAge.toLowerCase();
if(myAge === 'yes' || myAge === 'y'){
    alert('False');
    console.log('False');
} else if(myAge === 'no' || myAge === 'n'){
    alert('True');
    console.log('True');
}

let Length = prompt('Do you think my height is 180cm ?');
Length = Length.toLowerCase();
if(Length === 'no' || Length === 'n'){
    alert('True');
    console.log('True');
} else if(Length === 'yes' || Length === 'y'){
    alert('False');
    console.log('False');
}

let education = prompt('Do you think I have a bachelor\'s degree?');
education = education.toLowerCase();
if(education === 'yes' || education === 'y'){
    alert('False');
    console.log('False');
} else if(education === 'no' || education === 'n'){
    alert('True');
    console.log('True');
}

let Car = prompt('Do you think my favorite type of car is Honda Civic');
Car = Car.toLowerCase();
if(Car === 'yes' || Car === 'y'){
    alert('True');
    console.log('True');
} else if(Car === 'no' || Car === 'n'){
    alert('False');
    console.log('False');
}

let food = prompt('Do you think my favorite food is kabsa?');
food = food.toLowerCase();
if(food === 'yes' || food === 'y'){
    alert('True');
    console.log('True');
} else if(food === 'no' || food === 'n'){
    alert('False');
    console.log('False');
}
