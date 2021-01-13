"use strict";

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

const obj = {
    name: "Maks",
    age: 27,
    isMarried: true
};

console.log(obj.isMarried);

// alert('You are studying now!');
// const result = confirm(`Are you here?`);
// console.log(result);
const answer = [];

answer[0] = prompt("Hi, what's your NAME?", "name");
answer[1] = prompt("What's your SECOND NAME?", "second name");
answer[2] = prompt("What's your THIRD NAME?", "third name");
document.write(answer);