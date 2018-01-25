// Functions to draw lines
// An attempt to replicate http://vallandingham.me/sentence_drawings/
'use strict';

// Constants / global variables
const height = 500;
const width = 500;

// Get canvas, set width/height/strokeStyle
let canvas = document.getElementById("canvas");
canvas.width = width;
canvas.height = height;
let ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

// Set event listener (onkeydown)
let input = document.getElementById('textInput');
input.onkeydown = drawLines;

const directions = [
    {x:10, y: 0},
    {x:0, y: 10},
    {x:-10, y: 0},
    {x:0, y: -10}
]



// Function to draw lines
function drawLines() {
    let position = {
        x: width/2,
        y: height/2
    }
    // start drawing
    //clear drawing space
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath(position.x, position.y);
    ctx.moveTo(position.x, position.y);


    // store input as array
    let words = input.value.split(' ');
    // get word lengths
    let wordLens = words.map(function(d) { 
        return d.length;
    });

    // iterate through word lengths
    wordLens.forEach(function(d, i) {
        let dirIndex = i % 4;
        let currDirection = directions[dirIndex];
        position.x += currDirection.x * d;
        position.y += currDirection.y * d;
        ctx.lineTo(position.x, position.y)
    });

    ctx.stroke();
    





}



