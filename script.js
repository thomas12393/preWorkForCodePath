// global constants
const cluePauseTime = 200; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1200; //how long to hold each clue's light/sound
var pattern = [];
var progress = 0;
var playerStrike = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 1.0; //must be between 0.0 and 1.0
var guessCounter = 0;

function startGame() {
  //initialize game variables
  clueHoldTime = 1200
  progress = 0;
  gamePlaying = true;
  playerStrike = 0;
  randomPattern();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomPattern(){
  for(let p = 0;p < 10; p++){
    pattern[p] = Math.floor(Math.random() * Math.floor(8)+1);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 539.4,
  6: 572.3,
  7: 599.9,
  8: 636.3
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime -= 20;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  
  // add game logic here
  if(btn!= pattern[guessCounter]){
      if(playerStrike == 3){
        loseGame();
      }
      else{
        playerStrike +=1;
        playClueSequence();
      }
    }   
  else{
    if(guessCounter < progress){
      guessCounter += 1
    }
    else{
      if(progress == pattern.length - 1){
        winGame();
      }
      else{
        progress+= 1;
        playClueSequence();
      }
    }
  }
}
