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

Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();

let point = 0;
function Q1(){
    let myAge = prompt('Do you think I am 21 years old ?');
    myAge = myAge.toLowerCase();
    if(myAge === 'yes' || myAge === 'y'){
        alert('False');
        console.log('False');
    } else if(myAge === 'no' || myAge === 'n'){
        alert('True');
        console.log('True');
        point++;

    }
}

function Q2(){
    let Length = prompt('Do you think my height is 180cm ?');
    Length = Length.toLowerCase();
    if(Length === 'no' || Length === 'n'){
        alert('True');
        console.log('True');
        point++;

    } else if(Length === 'yes' || Length === 'y'){
        alert('False');
        console.log('False');
    }
}

function Q3(){
    let education = prompt('Do you think I have a bachelor\'s degree?');
    education = education.toLowerCase();
    if(education === 'yes' || education === 'y'){
        alert('False');
        console.log('False');
    } else if(education === 'no' || education === 'n'){
        alert('True');
        console.log('True');
        point++;
    }
}

function Q4(){
    let Car = prompt('Do you think my favorite type of car is Honda Civic');
    Car = Car.toLowerCase();
    if(Car === 'yes' || Car === 'y'){
        alert('True');
        console.log('True');
        point++;
    } else if(Car === 'no' || Car === 'n'){
        alert('False');
        console.log('False');
    }
}

function Q5(){
    let food = prompt('Do you think my favorite food is kabsa?');
    food = food.toLowerCase();
    if(food === 'yes' || food === 'y'){
        alert('True');
        console.log('True');
        point++;
    } else if(food === 'no' || food === 'n'){
        alert('False');
        console.log('False');
    }
}


function Q6(){
    let Age1 = Number(prompt('guess how old I am ?, you have 4 attempts'));

    for (let i = 1; i <= 4; i++) {

        if (Age1 <= 19) {
            alert('that\'s too LOW try again');
            Age1 = Number(prompt('guess how old I am ?, Attempt Number ' + i ));
        }
        else if (Age1 >= 21) {
            alert('that\'s too HIGH try again');
            Age1 = Number(prompt('guess how old I am ?, Attempt Number ' + i ));

        }
        else if (Age1 === 20) {
            alert('that\'s right');
            point++;
            break;
        }
        if (i === 4) {
            alert('your attemps are finished my age is 20 yeas!');
        }
    }
}


function Q7(){
    let userFavFruit = ['apple','Kiwi', 'strawberry', 'orange','Grape' ,'grape','Pear', 'Banana'];

    for (let i = 0; i < 6; i++) {
        let userAnsw = prompt('Can you guess my favorite fruit?, you have 6 attempts');
        let guess = userAnsw.toLowerCase();

        for (let j = 0; j < userFavFruit.length; j++) {
            if (guess === userFavFruit[j]) {
                alert('Got it right!, the correct answer is (apple , Kiwi , strawberry, orange , Grape , grape , Pear , Banana)');
                point++;
                i = 6;
                break;
            }
        }
        if (i !== 6) {
            alert('Sorry wrong answer, try again');
        }

        console.log(userAnsw);

    }
}





alert(name + ', your score is ' + point + ' / 7' + '\n Good job');
