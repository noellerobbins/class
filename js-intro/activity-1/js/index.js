// Main JavaScript File: enable strict mode
'use strict';

/* ******************** Basic variables and methods ******************* */

// Create a string variable, then print it out to the console ("log" it)
let str = 'this is a string';
console.log(str);

// Use the length property to see how many characters are in your `str` variable
// Log the result
console.log(str.length);


// Use the `toUpperCase` method to create a new variable `upperStr` that has the `str` value, but all UPPPERCASE.
let upperStr = str.toUpperCase();
console.log(upperStr)


// Use the "split" method create a new variable `words` that is an array of the component words of `str`
let words = str.split(" ")
console.log(words)

// Use the length property to see how many words are in your `words` array
// Log your result
let length = words.length;
console.log(length);


// Create an array "breakfast" of everything that you ate for breakfast
let breakfast = ["cheerios", "milk", "blueberries"];
console.log(breakfast);

// Log the phrase 'I had N items for breakfast'
console.log('I had ' + breakfast.length + ' items for breakfast.');


// Create an object "meals" with keys for breakfast, lunch, and dinner
// The values should be arrays of items for each meal
let meals = {
    breakfast:breakfast,
    lunch:['sandwich', 'apple'],
    dinner:['tacos']
};



// Add "pizza" to your dinner. Log your meals to the console.
meals.dinner.push('pizza');
console.log(meals);


/* ******************** Basic functions and control structures ******************* */

// Write a function that returns the number of words in a string
// Hint: use the `split` method
let sentence = "Hello world"
function numWords(word) {
    return(word.split(' ').length)
}


// Pass a string to your function to determine that it works
// Log the result
console.log(numWords(sentence));

// Write a function to test if a string contains a word, and returns a boolean value.
function containsWord(str) {
    str.splice(' ')
    for(in)
};


// Pass a phrase and a string to your function to determine that it works.
// Log the result.

/* ******************** Loops ******************* */
// Create an array of 40 students by looping through the numbers 1 through 40.
// Hint: create an empty array to start.


// Log your array of students

// Add "(I like programming)" to the end of each student whose number is divisible by 10
// Remeber that JavaScript starts indexing at *0*


// Log your array of students (again)

