var uahgh = new Audio('./uahgh.mp3');
var uahgh1 = false;

var counter = 0;

function main(){
    counter++;
    if(counter = 4){
        playAudio();
        counter = 0;
    }
}

function toggleAudio(name){
    if(name){
        name = false;
    } else {
        name = true;
    }
}

function playAudio(){
    if(uahgh1){
        uahgh.play();
    }
}