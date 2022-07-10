const showTime = () => {
    
    /** First, create a new date object from date class. */
    let dateObject = new Date();

    /** Create hours, minute and seconds object. */
    let hours = dateObject.getHours();
    let minute = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();
    
    /** If hours, seconds or minute is less than 10, then add 0 as prefix. e.g -> 09 : xx : xx */
    if(hours < 10) {
        hours = "0"+ hours;
    }
    
    /** If not, use it as it is. */
    else {
        hours = hours;
    }

    if(minute < 10) {
        minute = "0" + minute;
    }
    else {
        minute = minute;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }

    /** Combine all the variables to get a full digital clock. */
    let fullTime = hours + " : " + minute + " : " + seconds;
    
    let text = document.getElementById("ClockDisplay");
    text.innerHTML = fullTime;
    text.textContent = fullTime;

    
    
}

/** Increase by one. */
setInterval(showTime, 1000);

/** Call the function. */
showTime();