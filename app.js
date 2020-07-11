var min = 0;
var sec = 0;
var msec = 0;
var interval;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var mseHeading = document.getElementById("msec");

function timer() {
    msec++;
    mseHeading.innerHTML = msec;
    if(msec>=100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0
    }
    else if(sec>=60) {
        min++;
        sec = 0;
        minHeading.innerHTML = min;
    }

}
function start() {
    interval = setInterval(timer,10);
}
function stop() {
    clearInterval(interval)
}
function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    mseHeading.innerHTML = msec;  
    stop()
}

