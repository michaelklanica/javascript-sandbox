"use strict"

// console.log("test");

// HackerRank Sample Test: FizzBuzz Exercise
function fizzbuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}
// FizzBuzz to 100
fizzbuzz(100);

// HackerRank: 10 Days of Javascript
