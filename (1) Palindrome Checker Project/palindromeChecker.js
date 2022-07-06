let checkButton = document.getElementById("checkPalindrome");

/** Check the given number whether it is a palindrome or not. */
function isPalindrome(str) {
  'use strict';
  
  /** First convert the number to lowercase with regexing. */
  str = str.replace(/[^a-z0-9]+/gi, "").toLowerCase();

  /** Then, create a reversed form of the given string.  */
  let reversedStr = str.split("").reverse().join("");

  /** Return true if the given string and its reversed form are strickly equal. */
  return str === reversedStr;
}

/** listener method for checkButton. */
checkButton.addEventListener("click", function() {
  'use strict';
  
  /** Get the value from the input. */
  let value = document.getElementById("inputPalindrome").value;
  
  /** result text */
  let result = document.getElementById("notification");
  
  /** The return value of isPalindrome() method is boolean. If the value is a palindrome value, then the if block will be executed. */
  if(isPalindrome(value)) {
    result.innerHTML = "Yes " + value + " is a palindrome number.";
    result.className = "alert alert-success";
  } else {
    /** It is used if the given number is not a palindrome number. */
    result.innerHTML = "No " + value + " is not a palindrome number.";
    result.className = "alert alert-danger";
  }
});