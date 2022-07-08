/** Increment button */
let incrementButton = document.getElementById("increase");

/** Decrement button */
let decrementButton = document.getElementById("decrease");

/** Reseting button */
let zeroedButton = document.getElementById("zeroed");

/** Counter text */
let counterText = document.getElementById("counter");

/** counter */
let counter = 0;

incrementButton.addEventListener("click", function() {

    /** Increment by 1 when click the increment button. */
    counter++;
    counterText.innerHTML = counter;

})

decrementButton.addEventListener("click", function() {

    /** Decrement by 1 when click the decrement button */
    counter--;
    counterText.innerHTML = counter;
})

zeroedButton.addEventListener("click", function() {

    /** Set zero when click the reseting button. */
    counter = 0;
    counterText.innerHTML = counter;
})

