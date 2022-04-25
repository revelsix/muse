var bpm = 120;
var intervalTime = 500 / (bpm / 60);
var cloop1 = false;
var cloop1a;
var mloop1 = false;
var mloop1a;
var aloop1 = false;
var aloop1a;
var dloop1 = false;
var dloop1a;
var cloop2 = false;
var cloop2a;
var mloop2 = false;
var mloop2a;
var aloop2 = false;
var aloop2a;
var dloop2 = false;
var dloop2a;
var beatCount = 1;

function startLoop(){
    

     //begin playing audio
      if(cloop1 && beatCount == 1){
          cloop1a.play();
      }
      if(mloop1 && beatCount == 1){
          mloop1a.play();
      }
      if(aloop1 && beatCount == 1){
        aloop1a.play();
        console.log("aloop played");
    }
    if(cloop2 && beatCount == 1){
        cloop2a.play();
    }
    if(mloop2 && beatCount == 1){
        mloop2a.play();
    }
    if(aloop2 && beatCount == 1){
      aloop2a.play();
      console.log("aloop played");
  }
    if(dloop1 && (beatCount == 1 || beatCount == 8)){
        dloop1a.play();
    }
    if(dloop2 && (beatCount == 1 || beatCount == 8)){
        dloop2a.play();
    }
      //increase or reset a beat count
    
    beatCount++;
    if(beatCount == 17){
        beatCount = 1;
    }
     //display the updated time after every 4 seconds  
     document.getElementById("beat").innerHTML = beatCount;  
}

function toggleChords(){
    if(cloop1){
        cloop1 = false;
    } else{
        cloop1 = true;
        cloop2 = false;
    }
    console.log(cloop1 + " = cloop1");
}

function toggleMelody(){
    if(mloop1){
        mloop1 = false;
    } else{
        mloop1 = true;
        mloop2 = false;
    }
    console.log(mloop1 + " = mloop1");
}

function toggleArp(){
    if(aloop1){
        aloop1 = false;
    } else{
        aloop1 = true;
        aloop2 = false;
    }
    console.log(aloop1 + " = aloop1");
}

function toggleDrums(){
    if(dloop1){
        dloop1 = false;
    } else{
        dloop1 = true;
        dloop2 = false;
    }
    console.log(dloop1 + " = dloop1");
}

function toggleChords2(){
    if(cloop2){
        cloop2 = false;
    } else{
        cloop2 = true;
        cloop1 = false;
    }
    console.log(cloop2 + " = cloop2");
}

function toggleMelody2(){
    if(mloop2){
        mloop2 = false;
    } else{
        mloop2 = true;
        mloop1 = false;
    }
    console.log(mloop2 + " = mloop2");
}

function toggleArp2(){
    if(aloop2){
        aloop2 = false;
    } else{
        aloop2 = true;
        aloop1 = false;
    }
    console.log(aloop2 + " = aloop2");
}

function toggleDrums2(){
    if(dloop2){
        dloop2 = false;
    } else{
        dloop2 = true;
        dloop1 = false;
    }
    console.log(dloop2 + " = dloop2");
}

function initializeAudio(){
    cloop1a = new Audio('./samples/cloop1.wav');
    mloop1a = new Audio('./samples/mloop1.wav');
    aloop1a = new Audio('./samples/aloop1.wav');
    dloop1a = new Audio('./samples/dloop1.wav');
    cloop2a = new Audio('./samples/cloop2.wav');
    mloop2a = new Audio('./samples/mloop2.wav');
    aloop2a = new Audio('./samples/aloop2.wav');
    dloop2a = new Audio('./samples/dloop2.wav');
}

document.addEventListener('DOMContentLoaded', function() {
    initializeAudio();
    document.getElementById("bpm").innerHTML = bpm;
}, false);