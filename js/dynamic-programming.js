"use strict"

// PART 1: Memoization
//
// 1. The Fibonacci Sequence
//
// Write a function 'fib(n)' that takes in a number as an argument.
//     The function should return the n-th number of the Fibonacci sequence.
// (The first and second number of the sequence is 1.
// To generate the next number of the sequence, we sum the previous two.)
//
// n:		1, 2, 3, 4, 5, 6,  7,  8,  9, ...
// fib(n):	1, 1, 2, 3, 5, 8, 13, 21, 34, ...

// class recursive implementation:
//     this function is effective, but not efficient--while the value of 'n' grows larger, the number of calculations grows exponentially larger. (this 'speed' is referred to as Time Complexity).

const fibRecur = (n) => {					        // The constant value of 'fib' equals
                                                    // argument n passed into the follow
                                                    // logic:
    if (n <= 2) return 1;				            // if the value of 'n' is equal to 2 or
                                                    // less, 'fib' should equal 1.
    return fibRecur(n - 1) + fibRecur(n - 2)	// otherwise, the value of 'fib' should
                                                    // equal (n - 1) + (n - 2).
}

// Finding the n-th the Fibonacci number using MEMOIZATION:

const fibMemo = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibRecur(10));
console.log(fibMemo(11));

// PART 2: TABULATION

