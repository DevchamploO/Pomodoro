var time = 2;
var rest = 1;
var minutes = time; 
var countdownSecs = time * 60; // Total seconds of timer
var seconds;
var countTime;
var workTimer;
var restTimer;
var running = 0; // is 1 or 0 if timer is running or not.
var isEvenOrOdd = 1;
var display = document.getElementById('display');
var timeBox = document.getElementById('time');
var breakTimeBox = document.getElementById('breakTime');

// initial timer display
display.innerHTML = time + ':00';

timeBox.innerHTML = time;
breakTimeBox.innerHTML = rest;

// Handles the timer events: switching between work and break
// Handles display
function timer(){
  minutes = Math.floor(countdownSecs/60);
  seconds = countdownSecs % 60;
  display.innerHTML = minutes + ":" + seconds;
  countdownSecs--;
  workTimer = setTimeout(timer,1000);
  if(seconds < 10){
    display.innerHTML = minutes + ":0" + seconds; 
  }
  if(countdownSecs < 0){
    clearTimeout(workTimer);
    if(isEvenOrOdd % 2 === 0){
      isEvenOrOdd = 1;
      alert(isEvenOrOdd);
      alert('Back to work!!');
    countdownSecs = time * 60;
    } else {
      isEvenOrOdd = 2;
      alert(isEvenOrOdd);
      alert('Finished');
      countdownSecs  = rest * 60;
    }
    setTimeout(timer, 1000);
  }
}

//increase and decrease time for work 
function timeincreasefunc(){
  time++;
  if(time < 60 && isEvenOrOdd == 1){
    countdownSecs = time * 60;
  }
  
    timeBox.innerHTML = time;
}

function timedecreasefunc(){
  time--;
  if(time > 0 && isEvenOrOdd == 1){
    countdownSecs = time * 60;
  }
    timeBox.innerHTML = time;
}

//increase and decrease time for break
function breakincreasefunc(){
  rest++;
  if(rest < 60 && isEvenOrOdd == 2){
    countdownSecs = rest * 60;
  }
    breakTimeBox.innerHTML = rest;
}

function breakdecreasefunc(){
  rest--;
  if(time > 0 && isEvenOrOdd == 2){
    countdownSecs = rest * 60;
  }
    breakTimeBox.innerHTML = rest;
}


// start and pause time
function startPause(){
  if(running == 0) {
    running = 1;
    if(countdownSecs != 0){
      workTimer = setTimeout('timer()', 1000);
      document.getElementById("startpause").innerHTML = "PAUSE";
    }
  } else {
      running = 0;
      clearTimeout(workTimer);
      document.getElementById("startpause").innerHTML = "PLAY";
    }
}

// Reset the clock
function resetfunc(){
  var running = 0;
  var isEvenOrOdd = 1;
  countdownSecs = time * 60;
  document.getElementById("display").innerHTML = countdown + ":" + "00";
document.getElementById("time").innerHTML = total;
}

var timeButtonIncrease = document.getElementById("increasebutton");
timeButtonIncrease.addEventListener("click", timeincreasefunc);
var startpausebutton = document.getElementById("startpause");
startpausebutton.addEventListener("click", startPause);
var timeButtonDecrease = document.getElementById("decreasebutton");
timeButtonDecrease.addEventListener("click", timedecreasefunc);
var breakButtonDecrease = document.getElementById("breakincrease");
breakButtonDecrease.addEventListener("click", breakincreasefunc);
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click",resetfunc);