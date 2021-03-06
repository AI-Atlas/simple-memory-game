// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [1, 2, 4, 3, 2, 1, 2, 4, 5, 2, 6];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strikes = 0;  // how many mistakes player makes

function startGame(){
  randomPattern();
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  strikes = 0;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime - 267
    delay += cluePauseTime;
  }
}

//Randomize the pattern
function randomPattern(){
  for(let i = 0; i < pattern.length - 1; i++){
    let n = 1 + Math.round((Math.random() * (6 - 1)));
    pattern[i] = n;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1) {
        winGame();
      }else{
        progress++;
        playClueSequence();
      }
    }else{  
      guessCounter++;
      
    }
  }else{
    strikes++;
    alert("Strike " + strikes);
  }
  if(strikes == 3){
    loseGame();
  }
}
/// Sound Synthesis Functions
/*const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}*/

function playTone(btn,len){ 
  if(btn == 1){
      document.getElementById("myAudio1").play();
  }else if(btn == 2){
    document.getElementById("myAudio2").play();
  }else if(btn == 3){
      document.getElementById("myAudio3").play();
  }else if(btn == 4){
    document.getElementById("myAudio4").play();
  }else if(btn == 5){
    document.getElementById("myAudio5").play();
  }else{
    document.getElementById("myAudio6").play();
  }
/*o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)*/
}
function startTone(btn){
    if(!tonePlaying){
    if(btn == 1){
      document.getElementById("myAudio1").play();
    }else if(btn == 2){
      document.getElementById("myAudio2").play();
    }else if(btn == 3){
      document.getElementById("myAudio3").play();
    }else if(btn == 4){
      document.getElementById("myAudio4").play();
    }else if(btn == 5){
      document.getElementById("myAudio5").play();
    }else{
      document.getElementById("myAudio6").play();
    }
    tonePlaying = true
  }
  /*if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }*/
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

