let timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");


let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;
let ms = 0;

startButton.addEventListener("click", () => {
    if (paused) {
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1);
    }
});
pauseButton.addEventListener("click", () => {

    paused = true;
    clearInterval(intervalId);

});
resetButton.addEventListener("click", () => {
    timeDisplay.textContent = "00 : 00 : 00 : 000";
    elapsedTime = 0;
    paused = true;
    clearInterval(intervalId);
});

function updateTime() {
    elapsedTime = Date.now() - startTime;

    ms = elapsedTime % 1000;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    secs = pads(secs);
    mins = pads(mins);
    hrs = pads(hrs);
    ms = mpads(ms);

    timeDisplay.textContent = `${hrs} : ${mins} : ${secs} : ${ms}`;

    

    function pads(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
    function mpads(unit){
        unit = "" + unit;
        if(unit.length === 1){
            unit = "00" + unit;
        }
        else if(unit.length === 2){
            unit = "0" + unit;
        }
        return unit;
    }
}

