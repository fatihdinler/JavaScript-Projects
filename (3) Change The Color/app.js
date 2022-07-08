const colorArray = ["aqua", "black", "blue", "silver", "gray", "white", "maroon", "red", "purple","fuchsia", "green", 
"lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];

/** Finding the length of the array. */
const lengthArray = colorArray.length;
let button = document.getElementById("button");
let canvas = document.getElementById("canvas");
let text = document.getElementById("text");

/** When clicking the button. */
button.addEventListener("click", function() {
    let randomNumber = parseInt((Math.random() * lengthArray ) + 1);
    canvas.style.background = colorArray[randomNumber];
    text.innerHTML = "Color : " + colorArray[randomNumber];

})