/** Get the checkButton variable so that we can control the button. */
let checkButton = document.getElementById("checkNumber");

/** This line produce a number between 1 and 100. Users should guess this number. */
let randomNumber = Math.floor((Math.random() * 100) + 1);

/** Writing the number on the console. */
console.log(randomNumber);

/** Listener for checkButton. */
checkButton.addEventListener("click", function() {
    "use strict";

    /** Input number is the number entered by the user.  I compared this number with random number.  */
    let inputNumber = document.getElementById("inputNumber").value;

    /** Result text is the text located below the checkButton. It gives information to user which is about the their prediction. */
    let resultText = document.getElementById("notification");

    /** If random number is greater than the user's prediciton, then user will be informed as your prediction is small when compared to random number.  */
    if(randomNumber > inputNumber) {
        resultText.innerHTML = "No, your guess is smaller than the random number";
        resultText.className = "alert alert-success";
    }

    /** If random number is less than the user's prediciton, then user will be informed as your prediction is larger when compared to random number.  */
    else if(randomNumber < inputNumber) {
                resultText.innerHTML = "No, your guess is larger than the random number";
                resultText.className = "alert alert-success";
    }

    /** Else block emphasizes that the random number is equal to the user's prediction. In this case user will be informed as their prediction is true. */
    else {
        resultText.innerHTML = "Yes! The result was " + randomNumber + ", you are correct";
        resultText.className = "alert alert-success";

        /** If prediction is true, then checkButton will be disabled so that, any other prediction is not allowed. To guess another number, they need to reload the page. */
        checkButton.disabled = true;

        /** If the prediction is true, the checkButton will be colored as pink. */
        document.getElementById("checkNumber").style.background="pink no-repeat";
    }

})

/** This function is used for changing the specified node's color. */
function changeButtonColor(color) {
    document.style.background = color;
}